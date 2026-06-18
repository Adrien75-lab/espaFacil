<template>
  <div class="dev-wrap">
    <ConfirmQuit v-if="showQuit" @cancel="showQuit = false" @confirm="router.push('/')" />

    <!-- Chargement -->
    <div v-if="store.loading" class="loader">Chargement…</div>

    <!-- Aucun mot -->
    <div v-else-if="!cards.length" class="empty">
      <p>Aucun mot trouvé pour ce niveau / thème.</p>
      <button class="btn-back" @click="router.push('/')">← Retour</button>
    </div>

    <!-- Session terminée -->
    <BlocExerciseResults
      v-else-if="done"
      :emoji="score === cards.length ? '🏆' : score >= cards.length * 0.7 ? '🎉' : '💪'"
      :score-label="`${score} / ${cards.length} trouvés`"
    >
      <div class="result-list">
        <div v-for="(r, i) in results" :key="i" class="result-row" :class="r.status">
          <span class="r-fr">{{ r.translationFr }}</span>
          <span class="r-sep">→</span>
          <span class="r-user">{{ r.userAnswer || '—' }}</span>
          <span class="r-icon">{{ r.status === 'correct' ? '✅' : r.status === 'close' ? '🟡' : '❌' }}</span>
          <span v-if="r.status !== 'correct'" class="r-answer">{{ r.correctAnswer }}</span>
        </div>
      </div>
      <template #actions>
        <button class="btn-primary" @click="restart">🔁 Recommencer</button>
        <button class="btn-secondary" @click="router.push('/')">🏠 Accueil</button>
      </template>
    </BlocExerciseResults>

    <!-- Carte active -->
    <div v-else class="card-screen">
      <BlocExerciseHeader
        label="🔍 Devinettes"
        :current="idx + 1"
        :total="cards.length"
        :correct="score"
        :answered="idx + (answered ? 1 : 0)"
        @quit="showQuit = true"
      />
      <BlocExerciseProgress :current="idx" :total="cards.length" />

      <!-- La devinette -->
      <div class="riddle-block">
        <p class="riddle-prompt">Comment dit-on en <strong>{{ langName }}</strong> ?</p>
        <div class="riddle-word">{{ current.translation_fr }}</div>
        <div v-if="current.clue" class="riddle-clue" :class="{ visible: showClue }">
          <button v-if="!showClue" class="btn-hint" @click="showClue = true; hintsUsed++">
            💡 Voir l'indice
          </button>
          <span v-else class="clue-text">💡 {{ current.clue }}</span>
        </div>
      </div>

      <!-- Aides -->
      <div class="helps-row">
        <!-- Nombre de lettres -->
        <div class="letter-blanks">
          <span
            v-for="(ch, i) in letterBlanks"
            :key="i"
            class="blank"
            :class="{ revealed: ch !== '_', space: ch === ' ' }"
          >{{ ch === ' ' ? ' ' : ch === '_' ? '_' : ch }}</span>
          <span class="letter-count">({{ letterCount }} lettre{{ letterCount > 1 ? 's' : '' }})</span>
        </div>
        <!-- Révéler la première lettre -->
        <button
          v-if="!firstLetterRevealed && !answered"
          class="btn-hint"
          @click="revealFirstLetter"
        >🔤 1ère lettre</button>
      </div>

      <!-- Feedback après réponse -->
      <div v-if="answered" class="feedback-block" :class="feedbackStatus">
        <div class="feedback-icon">{{ feedbackStatus === 'correct' ? '✅' : feedbackStatus === 'close' ? '🟡' : '❌' }}</div>
        <div class="feedback-msg">{{ feedbackMsg }}</div>
        <div class="feedback-answer">
          <span class="fa-fr">{{ current.translation_fr }}</span>
          <span class="fa-sep">→</span>
          <span class="fa-term" :class="{ rtl: store.currentLang?.is_rtl }">{{ current.term }}</span>
          <span v-if="current.transliteration" class="fa-rom">({{ current.transliteration }})</span>
        </div>
        <button class="btn-next" @click="next">
          {{ idx + 1 < cards.length ? 'Suivant →' : 'Voir les résultats' }}
        </button>
      </div>

      <!-- Input -->
      <div v-else class="input-row">
        <input
          ref="inputRef"
          v-model="userInput"
          class="dev-input"
          type="text"
          :placeholder="`Mot en ${langName}…`"
          :class="{ rtl: store.currentLang?.is_rtl }"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          @keydown.enter="validate"
        />
        <button class="btn-validate" :disabled="!userInput.trim()" @click="validate">Valider</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useLangStore } from '@/stores/lang'
import { useAuthStore } from '@/stores/auth'
import ConfirmQuit from '@/components/ConfirmQuit.vue'
import { postReview } from '@/api/reviews'
import { useSessionRecorder } from '@/composables/useSessionRecorder'
import { evaluateAnswer } from '@/utils/textMatching'
import type { Word } from '@/types'
import { BlocExerciseHeader, BlocExerciseProgress, BlocExerciseResults } from '@/features/exercise/Bloc'

const store    = useLangStore()
const auth     = useAuthStore()
const router   = useRouter()
const showQuit = ref(false)
const { recordSession } = useSessionRecorder()

const langName = computed(() => store.currentLang?.name ?? 'la langue')

// ─── données ───
const cards    = ref<Word[]>([])
const idx      = ref(0)
const score    = ref(0)
const done     = ref(false)
const answered = ref(false)
const showClue = ref(false)
const hintsUsed = ref(0)
const firstLetterRevealed = ref(false)
const userInput = ref('')
const inputRef  = ref<HTMLInputElement | null>(null)

const current = computed(() => cards.value[idx.value])

// ─── aides ───
const letterCount = computed(() => current.value?.term.replace(/ /g, '').length ?? 0)

const letterBlanks = computed(() => {
  if (!current.value) return []
  return current.value.term.split('').map((ch, i) => {
    if (ch === ' ') return ' '
    if (firstLetterRevealed.value && i === 0) return ch
    return '_'
  })
})

function revealFirstLetter() {
  firstLetterRevealed.value = true
  hintsUsed.value++
}

// ─── résultats ───
interface Result {
  translationFr: string
  userAnswer: string
  correctAnswer: string
  status: 'correct' | 'close' | 'wrong'
}
const results = ref<Result[]>([])

// ─── feedback ───
const feedbackStatus = ref<'correct' | 'close' | 'wrong'>('correct')
const feedbackMsg    = ref('')

function validate() {
  if (answered.value || !userInput.value.trim()) return

  const status = evaluateAnswer(userInput.value, current.value.term)
  if (status === 'correct') {
    feedbackMsg.value = 'Bravo !'
    score.value++
  } else if (status === 'close') {
    feedbackMsg.value = 'Presque ! (petite faute)'
    score.value++
  } else {
    feedbackMsg.value = 'Pas tout à fait…'
  }

  feedbackStatus.value = status
  answered.value = true

  results.value.push({
    translationFr: current.value.translation_fr,
    userAnswer: userInput.value.trim(),
    correctAnswer: current.value.term,
    status,
  })

  if (auth.user && store.currentLang) {
    postReview(current.value.id, store.currentLang.code, status !== 'wrong')
  }
}

function next() {
  if (idx.value + 1 >= cards.value.length) { done.value = true; return }
  idx.value++
  answered.value = false
  userInput.value = ''
  showClue.value = false
  firstLetterRevealed.value = false
  hintsUsed.value = 0
  nextTick(() => inputRef.value?.focus())
}

function restart() {
  cards.value = [...cards.value].sort(() => Math.random() - 0.5)
  idx.value = 0; score.value = 0; answered.value = false
  userInput.value = ''; showClue.value = false
  firstLetterRevealed.value = false; hintsUsed.value = 0
  done.value = false; results.value = []
  nextTick(() => inputRef.value?.focus())
}

watch(done, (val) => {
  if (val) void recordSession('devinette', score.value, cards.value.length)
})

onMounted(async () => {
  if (!store.words.length) await store.loadWords()
  cards.value = [...store.words].sort(() => Math.random() - 0.5)
  nextTick(() => inputRef.value?.focus())
})
</script>

<style scoped>
.dev-wrap { max-width: 560px; margin: 0 auto; padding: 1.5rem 1rem; }
.loader, .empty { text-align: center; color: var(--muted); margin-top: 4rem; }
.btn-back { background: none; border: none; color: var(--muted); cursor: pointer; font-size: 0.9rem; }

/* Riddle */
.riddle-block  { background: var(--bg-card); border: 2px solid var(--border); border-radius: 14px;
  padding: 1.5rem; text-align: center; margin-bottom: 1rem; }
.riddle-prompt { color: var(--muted); font-size: 0.9rem; margin-bottom: 0.5rem; }
.riddle-word   { font-size: 2rem; font-weight: 800; color: var(--text); margin-bottom: 0.75rem; }
.riddle-clue   { margin-top: 0.25rem; }
.clue-text     { color: #b87a00; font-size: 0.9rem; }

/* Helps */
.helps-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap; }
.letter-blanks { display: flex; align-items: baseline; gap: 0.3rem; flex-wrap: wrap; }
.blank { font-size: 1.4rem; font-weight: 700; color: var(--accent); min-width: 0.6rem; text-align: center; }
.blank.space { color: transparent; min-width: 0.8rem; }
.letter-count { font-size: 0.8rem; color: var(--muted); margin-left: 0.25rem; }

.btn-hint { background: var(--bg-card); border: 1px solid var(--border); border-radius: 6px;
  padding: 0.3rem 0.75rem; font-size: 0.82rem; color: var(--muted); cursor: pointer; }
.btn-hint:hover { border-color: var(--accent); color: var(--text); }

/* Input */
.input-row { display: flex; gap: 0.5rem; }
.dev-input { flex: 1; padding: 0.75rem 1rem; border: 2px solid var(--border); border-radius: 8px;
  background: var(--bg-card); color: var(--text); font-size: 1rem; outline: none; transition: border-color .2s; }
.dev-input:focus { border-color: var(--accent); }
.dev-input.rtl { direction: rtl; }
.btn-validate { background: var(--accent); color: white; border: none; border-radius: 8px;
  padding: 0.75rem 1.25rem; font-size: 0.95rem; font-weight: 700; cursor: pointer; white-space: nowrap; }
.btn-validate:disabled { opacity: 0.4; cursor: not-allowed; }
.btn-validate:not(:disabled):hover { opacity: 0.88; }

/* Feedback */
.feedback-block { border-radius: 12px; padding: 1.25rem 1.5rem; text-align: center; }
.feedback-block.correct { background: #16a34a18; border: 2px solid #16a34a; }
.feedback-block.close   { background: #d9770618; border: 2px solid #d97706; }
.feedback-block.wrong   { background: #ef444418; border: 2px solid #ef4444; }
.feedback-icon  { font-size: 2rem; margin-bottom: 0.25rem; }
.feedback-msg   { font-weight: 700; font-size: 1rem; margin-bottom: 0.75rem; color: var(--text); }
.feedback-answer { display: flex; align-items: center; justify-content: center; gap: 0.5rem;
  flex-wrap: wrap; margin-bottom: 1rem; }
.fa-fr   { color: var(--muted); font-size: 0.95rem; }
.fa-sep  { color: var(--muted); }
.fa-term { font-size: 1.2rem; font-weight: 700; color: #4ade80; }
.fa-term.rtl { direction: rtl; }
.fa-rom  { color: var(--muted); font-size: 0.85rem; font-style: italic; }
.btn-next { background: var(--accent); color: white; border: none; border-radius: 8px;
  padding: 0.65rem 1.75rem; font-size: 0.95rem; font-weight: 700; cursor: pointer; }
.btn-next:hover { opacity: 0.88; }

/* Résultats */
.result-list { display: flex; flex-direction: column; gap: 0.35rem; margin-bottom: 1.5rem; text-align: left; }
.result-row  { display: flex; align-items: center; gap: 0.5rem; padding: 0.45rem 0.75rem;
  border-radius: 8px; font-size: 0.88rem; flex-wrap: wrap; }
.result-row.correct { background: #16a34a15; }
.result-row.close   { background: #d9770615; }
.result-row.wrong   { background: #ef444415; }
.r-fr      { color: var(--muted); min-width: 90px; }
.r-sep     { color: var(--muted); }
.r-user    { flex: 1; color: var(--dim); font-style: italic; }
.r-icon    {}
.r-answer  { color: #4ade80; font-weight: 600; }

.btn-primary   { background: var(--accent); color: white; border: none; border-radius: 8px;
  padding: 0.65rem 1.5rem; font-weight: 700; cursor: pointer; }
.btn-secondary { background: var(--bg-card); border: 2px solid var(--border); color: var(--dim);
  border-radius: 8px; padding: 0.65rem 1.5rem; cursor: pointer; }
.btn-primary:hover, .btn-secondary:hover { opacity: 0.8; }
</style>
