<template>
  <div class="anagram">
    <div v-if="store.loading" class="loader">Chargement…</div>

    <div v-else-if="!pool.length" class="empty">
      <p>Aucun mot disponible pour ce thème/niveau.</p>
      <button class="btn-secondary" @click="router.push('/')">← Retour</button>
    </div>

    <BlocExerciseResults
      v-else-if="done"
      :correct="score"
      :total="total"
      title="Anagrammes terminés !"
      :score-label="`${score} / ${total} trouvés`"
    >
      <template #actions>
        <button class="btn-primary" @click="restart">Rejouer</button>
        <button class="btn-secondary" @click="router.push('/')">Accueil</button>
      </template>
    </BlocExerciseResults>

    <div v-else class="game-screen">
      <div class="game-header">
        <button class="btn-back" @click="showQuit = true">← Quitter</button>
        <span class="mode-badge">🔀 Anagramme</span>
        <span class="header-status">
          <BlocExerciseScoreBadge :correct="score" :answered="cardIndex + (feedback ? 1 : 0)" />
          <span class="counter">{{ cardIndex + 1 }} / {{ total }}</span>
        </span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: ((cardIndex) / total * 100) + '%' }"></div>
      </div>

      <p class="hint">{{ current.translation_fr }}</p>
      <p v-if="readingSupportAvailable && current.transliteration" class="reading-hint">
        {{ current.transliteration }}
      </p>
      <p class="sublabel">Reconstituez le mot en {{ store.currentLang?.name }}</p>

      <!-- Zone réponse -->
      <div class="answer-row" :dir="store.currentLang?.is_rtl ? 'rtl' : 'ltr'">
        <div
          v-for="(tile, i) in answerTiles"
          :key="i"
          class="tile tile-answer"
          :class="{ empty: !tile, shake: shakeAnswer }"
          @click="removeTile(i)"
        >{{ tile }}</div>
      </div>

      <!-- Feedback -->
      <div v-if="feedback" class="feedback" :class="feedback === 'ok' ? 'fb-ok' : 'fb-ko'">
        <template v-if="feedback === 'ok'">
          ✅ Correct !
          <span class="reveal-fr"> — {{ current.term }}</span>
        </template>
        <template v-else>
          ❌ &laquo;{{ current.term }}&raquo; — {{ current.translation_fr }}
        </template>
      </div>

      <!-- Lettres disponibles -->
      <div class="letters-row" v-if="!feedback">
        <button
          v-for="(letter, i) in availableLetters"
          :key="i"
          class="tile tile-letter"
          :class="{ used: letter === null }"
          :disabled="letter === null"
          @click="addTile(i)"
        >{{ letter }}</button>
      </div>

      <!-- Actions -->
      <div class="action-row">
        <button v-if="!feedback" class="btn-clear" @click="clearAnswer" :disabled="answerTiles.every(t => !t)">
          Effacer
        </button>
        <button v-if="!feedback" class="btn-validate" @click="validate" :disabled="answerTiles.some(t => !t)">
          Valider ✓
        </button>
        <button v-if="feedback" class="btn-next" @click="next">
          {{ cardIndex + 1 >= total ? 'Résultats →' : 'Suivant →' }}
        </button>
      </div>
    </div>

    <ConfirmQuit v-if="showQuit" @cancel="showQuit = false" @confirm="router.push('/')" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useLangStore } from '@/stores/lang'
import { useSessionRecorder } from '@/composables/useSessionRecorder'
import ConfirmQuit from '@/components/ConfirmQuit.vue'
import type { Word } from '@/types'
import { needsReadingSupport } from '@/utils/readingSupport'
import { BlocExerciseResults, BlocExerciseScoreBadge } from '@/features/exercise/Bloc'

const store  = useLangStore()
const router = useRouter()
const { recordSession } = useSessionRecorder()

const pool      = ref<Word[]>([])
const cards     = ref<Word[]>([])
const cardIndex = ref(0)
const score     = ref(0)
const done      = ref(false)
const showQuit  = ref(false)

// Letters state
const availableLetters = ref<(string | null)[]>([])
const answerTiles     = ref<(string | null)[]>([])
const feedback        = ref<'ok' | 'ko' | null>(null)
const shakeAnswer     = ref(false)

const total   = computed(() => cards.value.length)
const current = computed(() => cards.value[cardIndex.value])
const readingSupportAvailable = computed(() => needsReadingSupport(store.currentLang?.code))

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

function scrambleTerm(term: string): string[] {
  const letters = [...term]
  let shuffled = shuffle(letters)
  // Ensure scrambled != original (retry if same)
  let attempts = 0
  while (shuffled.join('') === term && attempts < 10) {
    shuffled = shuffle(letters)
    attempts++
  }
  return shuffled
}

function loadCard() {
  feedback.value = null
  shakeAnswer.value = false
  const term = current.value.term
  const letters = scrambleTerm(term)
  availableLetters.value = letters
  answerTiles.value = Array(term.length).fill(null)
}

function addTile(i: number) {
  const letter = availableLetters.value[i]
  if (!letter) return
  const emptyIdx = answerTiles.value.indexOf(null)
  if (emptyIdx === -1) return
  answerTiles.value[emptyIdx] = letter
  availableLetters.value[i] = null
}

function removeTile(i: number) {
  const letter = answerTiles.value[i]
  if (!letter) return
  // Put letter back in first available spot in availableLetters
  const freeIdx = availableLetters.value.indexOf(null)
  if (freeIdx !== -1) availableLetters.value[freeIdx] = letter
  answerTiles.value[i] = null
}

function clearAnswer() {
  // Return all answer tiles back to availableLetters
  answerTiles.value.forEach((l, i) => {
    if (l) {
      const freeIdx = availableLetters.value.indexOf(null)
      if (freeIdx !== -1) availableLetters.value[freeIdx] = l
      answerTiles.value[i] = null
    }
  })
}

function validate() {
  const answer = answerTiles.value.join('')
  if (answer === current.value.term) {
    feedback.value = 'ok'
    score.value++
  } else {
    feedback.value = 'ko'
    shakeAnswer.value = true
    setTimeout(() => { shakeAnswer.value = false }, 400)
  }
}

function next() {
  if (cardIndex.value + 1 >= total.value) {
    done.value = true
    void recordSession('anagram', score.value, total.value)
    return
  }
  cardIndex.value++
  loadCard()
}

function restart() {
  cardIndex.value = 0
  score.value     = 0
  done.value      = false
  cards.value     = shuffle(pool.value).slice(0, 15)
  loadCard()
}

onMounted(async () => {
  if (!store.words.length) await store.loadWords()
  pool.value  = store.words.filter(w => w.term.length >= 3 && w.term.length <= 12)
  cards.value = shuffle(pool.value).slice(0, 15)
  if (cards.value.length) loadCard()
})
</script>

<style scoped>
.anagram { max-width: 560px; margin: 0 auto; padding: 1.5rem 1rem; }
.loader  { text-align: center; color: var(--muted); margin-top: 4rem; }
.empty   { text-align: center; padding: 3rem 1rem; color: var(--muted); }

.game-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: .75rem; }
.btn-back    { background: none; border: none; color: var(--muted); cursor: pointer; font-size: .9rem; }
.mode-badge  { background: #f59e0b20; color: #fcd34d; padding: .2rem .7rem; border-radius: 20px; font-size: .8rem; }
.counter     { color: var(--muted2); font-size: .9rem; }

.progress-bar  { height: 6px; background: var(--border); border-radius: 3px; margin-bottom: 1.5rem; }
.progress-fill { height: 100%; background: #f59e0b; border-radius: 3px; transition: width .4s; }

.hint     { text-align: center; font-size: 1.4rem; font-weight: 700; color: var(--text); margin-bottom: .25rem; }
.reading-hint { text-align: center; color: #a5b4fc; font-size: .9rem; font-style: italic; font-weight: 700; margin: 0 0 .25rem; }
.sublabel { text-align: center; font-size: .82rem; color: var(--muted); margin-bottom: 1.5rem; }

/* Answer row */
.answer-row {
  display: flex; flex-wrap: wrap; gap: .4rem; justify-content: center;
  min-height: 52px; padding: .5rem; margin-bottom: .75rem;
  background: var(--bg-card); border: 2px dashed var(--border); border-radius: 10px;
}

/* Letter tiles */
.letters-row {
  display: flex; flex-wrap: wrap; gap: .4rem; justify-content: center;
  margin-bottom: 1.25rem;
}

.tile {
  width: 42px; height: 42px; display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; font-weight: 700; border-radius: 8px;
  border: 2px solid var(--border); cursor: pointer; transition: all .15s;
  text-transform: uppercase;
}
.tile-letter { background: var(--bg-card); color: var(--text); }
.tile-letter:not(:disabled):hover { border-color: #f59e0b; background: var(--bg-hover); }
.tile-letter.used { opacity: 0; pointer-events: none; }
.tile-answer { background: var(--bg-hover); color: var(--text); }
.tile-answer.empty { background: transparent; border-style: dashed; opacity: .4; cursor: default; }
.tile-answer:not(.empty):hover { border-color: #ef4444; }

@keyframes shake {
  0%,100% { transform: translateX(0); }
  25%     { transform: translateX(-5px); }
  75%     { transform: translateX(5px); }
}
.tile-answer.shake { animation: shake .35s; }

/* Feedback */
.feedback {
  text-align: center; font-size: 1rem; font-weight: 700;
  padding: .6rem 1rem; border-radius: 8px; margin-bottom: 1rem;
}
.fb-ok { color: #86efac; background: #14532d30; }
.fb-ko { color: #fca5a5; background: #7f1d1d30; }
.reveal-fr { font-weight: 400; color: var(--muted2); }

/* Actions */
.action-row { display: flex; gap: .75rem; justify-content: center; flex-wrap: wrap; }
.btn-clear    { background: none; border: 2px solid var(--border); border-radius: 8px; padding: .55rem 1.2rem; color: var(--muted2); cursor: pointer; font-size: .9rem; }
.btn-clear:not(:disabled):hover { border-color: #ef4444; color: #f87171; }
.btn-validate { background: #f59e0b; color: #0f0f1a; border: none; border-radius: 8px; padding: .55rem 1.6rem; font-weight: 700; font-size: .9rem; cursor: pointer; }
.btn-validate:disabled { opacity: .4; cursor: not-allowed; }
.btn-next     { background: var(--accent); color: white; border: none; border-radius: 8px; padding: .6rem 2rem; font-weight: 700; font-size: .92rem; cursor: pointer; }

/* Results */
.results { text-align: center; padding: 3rem 1rem; }
.results-emoji  { font-size: 4rem; margin-bottom: .5rem; }
.score-text     { font-size: 1.2rem; color: var(--muted2); margin: .5rem 0 2rem; }
.results-actions { display: flex; gap: .75rem; justify-content: center; flex-wrap: wrap; }
.btn-primary   { background: var(--accent); color: white; border: none; border-radius: 8px; padding: .7rem 1.8rem; font-size: 1rem; cursor: pointer; }
.btn-secondary { background: var(--border); color: var(--dim); border: none; border-radius: 8px; padding: .7rem 1.8rem; font-size: 1rem; cursor: pointer; }
</style>
