<template>
  <div class="builder">
    <div v-if="store.loading" class="loader">Chargement…</div>

    <div v-else-if="done" class="results">
      <div class="results-emoji">{{ score === total ? '🏆' : score >= total * 0.7 ? '🎉' : '💪' }}</div>
      <h2>Session terminée !</h2>
      <p class="score-text">{{ score }} / {{ total }} bonnes réponses</p>
      <div class="results-actions">
        <button class="btn-primary" @click="restart">Recommencer</button>
        <button class="btn-secondary" @click="router.push('/')">Accueil</button>
      </div>
    </div>

    <div v-else-if="cards.length" class="quiz-screen">
      <!-- En-tête -->
      <div class="quiz-header">
        <button class="btn-back" @click="showQuit = true">← Quitter</button>
        <span class="counter">{{ idx + 1 }} / {{ total }}</span>
        <span class="score-badge">✓ {{ score }}</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: (idx / total * 100) + '%' }"></div>
      </div>

      <!-- Hint français -->
      <div class="fr-hint">
        <span class="fr-flag">🇫🇷</span>
        <span class="fr-text">{{ current.translation_fr }}</span>
        <button class="btn-icon" @click="speak" title="Écouter">🔊</button>
      </div>

      <p class="instruction">Reconstituez la phrase en {{ store.currentLang?.name?.toLowerCase() ?? 'langue cible' }} :</p>

      <!-- Zone de réponse -->
      <div
        class="answer-zone"
        :class="{ 'has-tokens': answerTokens.length > 0, correct: feedbackState === 'correct', wrong: feedbackState === 'wrong' }"
      >
        <span v-if="answerTokens.length === 0" class="zone-placeholder">
          Cliquez sur les mots pour former la phrase…
        </span>
        <button
          v-for="tok in answerTokens"
          :key="tok.uid"
          class="word-token in-zone"
          :disabled="answered"
          @click="returnToken(tok)"
        >{{ tok.display }}</button>
      </div>

      <!-- Feedback -->
      <div v-if="answered" class="feedback-row">
        <div class="feedback-text" :class="feedbackState">
          <template v-if="feedbackState === 'correct'">✓ Correct !</template>
          <template v-else>✗ Réponse : <strong>{{ current.example_sentence }}</strong></template>
        </div>
        <button class="btn-next" @click="next">Suivant →</button>
      </div>

      <!-- Actions (indice + valider) -->
      <div v-if="!answered" class="actions-row">
        <button class="btn-icon" @click="showClue = !showClue" title="Indice">💡</button>
        <button
          class="btn-validate"
          :disabled="answerTokens.length === 0"
          @click="validate"
        >Vérifier</button>
      </div>

      <div v-if="showClue && current.clue" class="clue-box">💡 {{ current.clue }}</div>
      <div v-if="current.transliteration" class="rom-hint">{{ current.transliteration }}</div>

      <!-- Réserve de tokens mélangés -->
      <div class="token-pool">
        <button
          v-for="tok in poolTokens"
          :key="tok.uid"
          class="word-token"
          :disabled="answered"
          @click="pickToken(tok)"
        >{{ tok.display }}</button>
      </div>
    </div>

    <div v-else class="no-sentences">
      <p>Aucune phrase d'exemple disponible pour ce thème/niveau.</p>
      <button class="btn-secondary" @click="router.push('/')">← Retour</button>
    </div>
  </div>
  <ConfirmQuit v-if="showQuit" @cancel="showQuit = false" @confirm="router.push('/')" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import ConfirmQuit from '@/components/ConfirmQuit.vue'
import { useRouter } from 'vue-router'
import { useLangStore } from '@/stores/lang'
import { useSessionRecorder } from '@/composables/useSessionRecorder'
import type { Word } from '@/types'
import { speakText } from '@/utils/speech'

const store  = useLangStore()
const showQuit = ref(false)
const router = useRouter()
const { recordSession } = useSessionRecorder()

// ── Types ────────────────────────────────────────────────────────────────────
interface Token { uid: string; display: string; value: string }
interface Card  { word: Word; correctTokens: Token[] }

// ── State ─────────────────────────────────────────────────────────────────────
const cards       = ref<Card[]>([])
const idx         = ref(0)
const score       = ref(0)
const answered    = ref(false)
const feedbackState = ref<'correct' | 'wrong' | null>(null)
const showClue    = ref(false)
const done        = ref(false)
const poolTokens  = ref<Token[]>([])
const answerTokens = ref<Token[]>([])

const total   = computed(() => cards.value.length)
const current = computed(() => cards.value[idx.value].word)

// ── Tokenizer ─────────────────────────────────────────────────────────────────
function tokenize(sentence: string): Token[] {
  return sentence
    .replace(/[¿¡]/g, '')
    .split(/\s+/)
    .filter(w => w.length > 0)
    .map((w, i) => ({
      uid:     `${i}-${w}`,
      display: w.replace(/[.,!?;:]/g, ''),
      value:   w.replace(/[.,!?;:]/g, '').toLowerCase(),
    }))
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

// ── Build deck ────────────────────────────────────────────────────────────────
function buildCards(words: Word[]): Card[] {
  return words.map(word => ({
    word,
    correctTokens: tokenize(word.example_sentence!),
  }))
}

// ── Load card state ───────────────────────────────────────────────────────────
function loadCard() {
  const card = cards.value[idx.value]
  poolTokens.value   = shuffle(card.correctTokens.map(t => ({ ...t, uid: t.uid + '-' + Math.random() })))
  answerTokens.value = []
  answered.value     = false
  feedbackState.value = null
  showClue.value     = false
}

// ── Token interactions ────────────────────────────────────────────────────────
function pickToken(tok: Token) {
  const i = poolTokens.value.findIndex(t => t.uid === tok.uid)
  if (i !== -1) {
    poolTokens.value.splice(i, 1)
    answerTokens.value.push(tok)
  }
}

function returnToken(tok: Token) {
  const i = answerTokens.value.findIndex(t => t.uid === tok.uid)
  if (i !== -1) {
    answerTokens.value.splice(i, 1)
    poolTokens.value.push(tok)
  }
}

// ── Validation ────────────────────────────────────────────────────────────────
function validate() {
  if (answerTokens.value.length === 0) return
  const card    = cards.value[idx.value]
  const correct = card.correctTokens.map(t => t.value).join(' ')
  const answer  = answerTokens.value.map(t => t.value).join(' ')
  answered.value = true

  if (answer === correct) {
    feedbackState.value = 'correct'
    score.value++
  } else {
    feedbackState.value = 'wrong'
    // Montrer la bonne réponse dans la zone
    answerTokens.value = card.correctTokens.map(t => ({ ...t }))
    poolTokens.value   = []
  }
}

// ── Navigation ────────────────────────────────────────────────────────────────
function next() {
  if (idx.value + 1 >= total.value) {
    done.value = true
    return
  }
  idx.value++
  loadCard()
}

function restart() {
  const words = store.words.filter(w => w.example_sentence).sort(() => Math.random() - 0.5)
  cards.value = buildCards(words)
  idx.value   = 0
  score.value = 0
  done.value  = false
  loadCard()
}

// ── TTS ───────────────────────────────────────────────────────────────────────
function speak() {
  speakText(current.value.example_sentence ?? current.value.term, store.currentLang?.voice_locale ?? 'fr-FR')
}

// ── XP save ───────────────────────────────────────────────────────────────────
watch(done, (val) => {
  if (val) void recordSession('sentence-builder', score.value, total.value)
})

// ── Mount ─────────────────────────────────────────────────────────────────────
onMounted(async () => {
  if (!store.words.length) await store.loadWords()
  const withSentence = store.words.filter(w => w.example_sentence).sort(() => Math.random() - 0.5)
  cards.value = buildCards(withSentence)
  if (cards.value.length) loadCard()
})
</script>

<style scoped>
.builder { max-width: 560px; margin: 0 auto; padding: 1.5rem 1rem; }
.loader  { text-align: center; color: var(--muted); margin-top: 4rem; }

.quiz-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: .75rem; }
.btn-back    { background: none; border: none; color: var(--muted); cursor: pointer; font-size: .9rem; }
.counter     { color: var(--muted2); font-size: .9rem; }
.score-badge { background: #22c55e20; color: #22c55e; padding: .2rem .6rem; border-radius: 20px; font-size: .85rem; }

.progress-bar  { height: 6px; background: var(--border); border-radius: 3px; margin-bottom: 1.5rem; }
.progress-fill { height: 100%; background: var(--accent); border-radius: 3px; transition: width .3s; }

/* Hint français */
.fr-hint {
  display: flex; align-items: center; gap: .75rem;
  background: var(--bg-card); border: 2px solid var(--accent);
  border-radius: 12px; padding: 1rem 1.25rem;
  margin-bottom: .75rem;
}
.fr-flag { font-size: 1.4rem; flex-shrink: 0; }
.fr-text { font-size: 1.1rem; font-weight: 700; color: #a5b4fc; flex: 1; }

.instruction { color: var(--muted); font-size: .85rem; font-style: italic; text-align: center; margin-bottom: .75rem; }

/* Zone de réponse */
.answer-zone {
  min-height: 58px;
  background: var(--bg-nav);
  border: 2px dashed var(--border);
  border-radius: 12px;
  padding: 10px 12px;
  display: flex; flex-wrap: wrap; gap: 8px; align-items: center;
  margin-bottom: .75rem;
  transition: border-color .2s, background .2s;
}
.answer-zone.has-tokens { border-style: solid; border-color: var(--accent); }
.answer-zone.correct    { border-color: #22c55e; background: #14532d20; }
.answer-zone.wrong      { border-color: #ef4444; background: #7f1d1d20; }
.zone-placeholder { color: #555; font-size: .82rem; font-style: italic; pointer-events: none; }

/* Tokens */
.word-token {
  display: inline-flex; align-items: center;
  padding: 7px 14px;
  background: var(--bg-card);
  border: 2px solid var(--accent)40;
  border-radius: 9px;
  font-size: .92rem; font-weight: 600;
  color: #ddd;
  cursor: pointer;
  transition: all .15s ease;
  user-select: none;
}
.word-token:hover:not(:disabled) {
  background: var(--accent); color: var(--text); border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 3px 10px var(--accent)40;
}
.word-token:active:not(:disabled) { transform: translateY(0); }
.word-token.in-zone { background: var(--accent); color: var(--text); border-color: #3730a3; }
.word-token.in-zone:hover:not(:disabled) { background: #3730a3; }
.word-token:disabled { cursor: default; opacity: .85; }

/* Pool */
.token-pool {
  display: flex; flex-wrap: wrap; gap: 8px;
  justify-content: center;
  min-height: 44px;
  padding: .5rem 0 .25rem;
  margin-top: .25rem;
}

/* Actions */
.actions-row { display: flex; align-items: center; justify-content: center; gap: .75rem; margin-bottom: .5rem; }
.btn-icon { background: none; border: 2px solid #444; border-radius: 50%; width: 36px; height: 36px; font-size: 1rem; cursor: pointer; transition: border-color .15s; }
.btn-icon:hover { border-color: var(--accent); }
.btn-validate {
  background: var(--accent); color: white; border: none; border-radius: 8px;
  padding: .55rem 1.6rem; font-size: .95rem; font-weight: 700;
  cursor: pointer; transition: opacity .15s;
}
.btn-validate:disabled { opacity: .4; cursor: not-allowed; }
.btn-validate:not(:disabled):hover { opacity: .85; }

/* Feedback */
.feedback-row { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; margin-bottom: .75rem; flex-wrap: wrap; }
.feedback-text { font-size: .95rem; font-weight: 600; flex: 1; line-height: 1.5; }
.feedback-text.correct { color: #22c55e; }
.feedback-text.wrong   { color: #ef4444; }
.btn-next { background: var(--accent); color: white; border: none; border-radius: 8px; padding: .55rem 1.4rem; font-size: .9rem; cursor: pointer; white-space: nowrap; }

.clue-box { background: #2a2000; border: 2px solid #b87a00; border-radius: 8px;
  padding: .4rem 1rem; color: #f5d080; font-size: .85rem; margin-bottom: .5rem; text-align: center; }
.rom-hint { text-align: center; color: #666; font-style: italic; font-size: .85rem; margin-bottom: .5rem; }

/* Résultats */
.results { text-align: center; padding: 2rem 1rem; }
.results-emoji { font-size: 3.5rem; margin-bottom: .5rem; }
.score-text { font-size: 1.3rem; color: var(--muted2); margin: .5rem 0 1.5rem; }
.results-actions { display: flex; gap: 1rem; justify-content: center; }
.btn-primary  { background: var(--accent); color: white; border: none; border-radius: 8px; padding: .7rem 1.8rem; font-size: 1rem; cursor: pointer; }
.btn-secondary { background: var(--border); color: var(--dim); border: none; border-radius: 8px; padding: .7rem 1.8rem; font-size: 1rem; cursor: pointer; }

.no-sentences { text-align: center; padding: 3rem 1rem; color: var(--muted); }
</style>
