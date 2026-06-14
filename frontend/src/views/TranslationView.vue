<template>
  <div class="transl-wrap">
    <ConfirmQuit v-if="showQuit" @cancel="showQuit = false" @confirm="router.push('/')" />

    <!-- Chargement -->
    <div v-if="store.loading" class="loader">Chargement…</div>

    <!-- Aucun mot -->
    <div v-else-if="!cards.length" class="empty">
      <p>Aucun mot trouvé pour ce niveau / thème.</p>
      <button class="btn-back" @click="router.push('/')">← Retour</button>
    </div>

    <!-- Session terminée -->
    <ExerciseResults
      v-else-if="done"
      :emoji="score === cards.length ? '🏆' : score >= cards.length * 0.7 ? '🎉' : '💪'"
      :score-label="`${score} / ${cards.length} correctes`"
    >
      <div class="result-list">
        <div
          v-for="(r, i) in results"
          :key="i"
          class="result-row"
          :class="r.status"
        >
          <span class="r-term">{{ r.term }}</span>
          <span class="r-sep">→</span>
          <span class="r-user">{{ r.userAnswer || '—' }}</span>
          <span class="r-icon">{{ r.status === 'correct' ? '✅' : r.status === 'close' ? '🟡' : '❌' }}</span>
          <span v-if="r.status !== 'correct'" class="r-correct">{{ r.correctAnswer }}</span>
        </div>
      </div>
      <template #actions>
        <button class="btn-primary" @click="restart">🔁 Recommencer</button>
        <button class="btn-secondary" @click="router.push('/')">🏠 Accueil</button>
      </template>
    </ExerciseResults>

    <!-- Carte active -->
    <div v-else class="card-screen">
      <ExerciseHeader label="✍️ Traduction" :current="idx + 1" :total="cards.length" @quit="showQuit = true" />
      <ExerciseProgress :current="idx" :total="cards.length" />

      <!-- Mot à traduire -->
      <div class="word-block">
        <div class="word-term" :class="{ rtl: store.currentLang?.is_rtl }">{{ current.term }}</div>
        <div v-if="current.transliteration" class="word-rom">{{ current.transliteration }}</div>
        <div class="word-actions">
          <button class="btn-icon" title="Écouter" @click="speak">🔊</button>
          <button class="btn-icon" title="Indice" @click="showClue = !showClue">💡</button>
        </div>
        <div v-if="showClue && current.clue" class="clue-box">💡 {{ current.clue }}</div>
      </div>

      <p class="prompt">Traduisez en français :</p>

      <!-- Feedback après réponse -->
      <div v-if="answered" class="feedback-block" :class="feedbackStatus">
        <div class="feedback-icon">{{ feedbackStatus === 'correct' ? '✅' : feedbackStatus === 'close' ? '🟡' : '❌' }}</div>
        <div class="feedback-msg">{{ feedbackMsg }}</div>
        <div class="feedback-answer">
          <span class="r-term">{{ current.term }}</span>
          <span class="r-sep">→</span>
          <span class="r-correct-ans">{{ current.translation_fr }}</span>
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
          class="transl-input"
          type="text"
          placeholder="Votre traduction en français…"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          @keydown.enter="validate"
        />
        <button class="btn-validate" @click="validate">Valider</button>
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
import ExerciseHeader from '@/components/exercise/ExerciseHeader.vue'
import ExerciseProgress from '@/components/exercise/ExerciseProgress.vue'
import ExerciseResults from '@/components/exercise/ExerciseResults.vue'
import { postReview } from '@/api/reviews'
import { useSessionRecorder } from '@/composables/useSessionRecorder'
import { evaluateAnswer } from '@/utils/textMatching'
import { speakText } from '@/utils/speech'
import type { Word } from '@/types'

const store    = useLangStore()
const auth     = useAuthStore()
const router   = useRouter()
const showQuit = ref(false)
const { recordSession } = useSessionRecorder()

// ─── données ───
const cards     = ref<Word[]>([])
const idx       = ref(0)
const score     = ref(0)
const done      = ref(false)
const answered  = ref(false)
const showClue  = ref(false)
const userInput = ref('')
const inputRef  = ref<HTMLInputElement | null>(null)

const current = computed(() => cards.value[idx.value])

// ─── résultats ───
interface Result {
  term: string
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

  const status = evaluateAnswer(userInput.value, current.value.translation_fr)
  if (status === 'correct') {
    feedbackMsg.value = 'Parfait !'
    score.value++
  } else if (status === 'close') {
    feedbackMsg.value = `Presque ! (faute de frappe ?)`
    score.value++
  } else {
    feedbackMsg.value = 'Incorrect'
  }

  feedbackStatus.value = status
  answered.value = true

  results.value.push({
    term: current.value.term,
    userAnswer: userInput.value.trim(),
    correctAnswer: current.value.translation_fr,
    status,
  })

  if (auth.user && store.currentLang) {
    postReview(current.value.id, store.currentLang.code, status !== 'wrong')
  }
}

function next() {
  if (idx.value + 1 >= cards.value.length) {
    done.value = true
    return
  }
  idx.value++
  answered.value = false
  userInput.value = ''
  showClue.value = false
  nextTick(() => inputRef.value?.focus())
}

function restart() {
  cards.value = [...cards.value].sort(() => Math.random() - 0.5)
  idx.value = 0; score.value = 0; answered.value = false
  userInput.value = ''; showClue.value = false; done.value = false
  results.value = []
  nextTick(() => inputRef.value?.focus())
}

function speak() {
  speakText(current.value.term, store.currentLang?.voice_locale ?? 'fr-FR')
}

watch(done, (val) => {
  if (val) void recordSession('traduction', score.value, cards.value.length)
})

onMounted(async () => {
  if (!store.words.length) await store.loadWords()
  cards.value = [...store.words].sort(() => Math.random() - 0.5)
  nextTick(() => inputRef.value?.focus())
})
</script>

<style scoped>
.transl-wrap { max-width: 560px; margin: 0 auto; padding: 1.5rem 1rem; }
.loader, .empty { text-align: center; color: var(--muted); margin-top: 4rem; }
.btn-back { background: none; border: none; color: var(--muted); cursor: pointer; font-size: 0.9rem; }

.word-block  { text-align: center; margin-bottom: 1.25rem; }
.word-term   { font-size: 2.2rem; font-weight: 700; color: var(--text); }
.word-term.rtl { direction: rtl; }
.word-rom    { color: var(--muted); font-size: 0.95rem; margin-top: 0.25rem; font-style: italic; }
.word-actions { display: flex; justify-content: center; gap: 0.5rem; margin-top: 0.5rem; }
.btn-icon { background: none; border: 2px solid var(--border); border-radius: 50%; width: 36px; height: 36px;
  font-size: 1rem; cursor: pointer; transition: border-color .2s; }
.btn-icon:hover { border-color: var(--accent); }
.clue-box { margin-top: 0.75rem; background: #2a200022; border: 2px solid #b87a00; border-radius: 8px;
  padding: 0.5rem 0.75rem; font-size: 0.9rem; color: #b87a00; display: inline-block; }

.prompt { text-align: center; color: var(--muted); margin-bottom: 0.75rem; font-size: 0.95rem; }

.input-row { display: flex; gap: 0.5rem; }
.transl-input { flex: 1; padding: 0.75rem 1rem; border: 2px solid var(--border); border-radius: 8px;
  background: var(--bg-card); color: var(--text); font-size: 1rem; outline: none; transition: border-color .2s; }
.transl-input:focus { border-color: var(--accent); }
.btn-validate { background: var(--accent); color: white; border: none; border-radius: 8px;
  padding: 0.75rem 1.25rem; font-size: 0.95rem; font-weight: 700; cursor: pointer; white-space: nowrap; }
.btn-validate:hover { opacity: 0.88; }

/* Feedback */
.feedback-block { border-radius: 12px; padding: 1.25rem 1.5rem; text-align: center; }
.feedback-block.correct { background: #16a34a18; border: 2px solid #16a34a; }
.feedback-block.close   { background: #d9770618; border: 2px solid #d97706; }
.feedback-block.wrong   { background: #ef444418; border: 2px solid #ef4444; }
.feedback-icon  { font-size: 2rem; margin-bottom: 0.25rem; }
.feedback-msg   { font-weight: 700; font-size: 1.05rem; margin-bottom: 0.75rem; color: var(--text); }
.feedback-answer { display: flex; align-items: center; justify-content: center; gap: 0.5rem;
  font-size: 1rem; margin-bottom: 1rem; flex-wrap: wrap; }
.r-term         { font-weight: 700; color: var(--text); }
.r-sep          { color: var(--muted); }
.r-correct-ans  { font-weight: 700; color: #4ade80; }
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
.r-term    { font-weight: 700; color: var(--text); min-width: 80px; }
.r-user    { flex: 1; color: var(--dim); font-style: italic; }
.r-icon    { }
.r-correct { color: #4ade80; font-weight: 600; }

.btn-primary   { background: var(--accent); color: white; border: none; border-radius: 8px;
  padding: 0.65rem 1.5rem; font-weight: 700; cursor: pointer; }
.btn-secondary { background: var(--bg-card); border: 2px solid var(--border); color: var(--dim);
  border-radius: 8px; padding: 0.65rem 1.5rem; cursor: pointer; }
.btn-primary:hover, .btn-secondary:hover { opacity: 0.8; }
</style>
