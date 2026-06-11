<template>
  <div class="dictee">
    <div v-if="store.loading" class="loader">Chargement…</div>

    <div v-else-if="!cards.length" class="empty">
      <p>Aucune phrase disponible pour ce thème/niveau.</p>
      <button class="btn-secondary" @click="router.push('/')">← Retour</button>
    </div>

    <div v-else-if="done" class="results">
      <div class="results-emoji">{{ score === total ? '🏆' : score >= total * 0.7 ? '🎉' : '💪' }}</div>
      <h2>Session terminée !</h2>
      <p class="score-text">{{ score }} / {{ total }} correctes</p>
      <div class="results-actions">
        <button class="btn-primary" @click="restart">Recommencer</button>
        <button class="btn-secondary" @click="router.push('/')">Accueil</button>
      </div>
    </div>

    <div v-else class="quiz-screen">
      <div class="quiz-header">
        <button class="btn-back" @click="showQuit = true">← Quitter</button>
        <span class="mode-badge">✍️ Dictée</span>
        <span class="counter">{{ idx + 1 }} / {{ total }}</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: (idx / total * 100) + '%' }"></div>
      </div>

      <!-- Hint : mot FR -->
      <div class="fr-hint">
        <span class="fr-flag">🇫🇷</span>
        <span class="fr-text">{{ current.translation_fr }}</span>
      </div>

      <!-- Zone audio -->
      <div class="audio-zone">
        <p class="listen-hint">Écoutez la phrase, puis tapez-la :</p>
        <div class="play-row">
          <button class="play-btn" :class="{ playing }" @click="speak(1)">
            <span>{{ playing ? '🔊' : '▶' }}</span>
            <span>{{ playing ? 'Lecture…' : 'Écouter' }}</span>
          </button>
          <button class="play-btn slow" :class="{ playing: playingSlow }" @click="speak(0.6)" title="Lecture lente">
            <span>🐢</span>
            <span>Lent</span>
          </button>
        </div>
      </div>

      <!-- Champ de saisie -->
      <div class="input-wrap">
        <input
          ref="inputEl"
          v-model="userInput"
          class="dictee-input"
          :class="feedbackClass"
          :disabled="answered"
          :placeholder="`Tapez la phrase en ${store.currentLang?.name?.toLowerCase() ?? 'langue cible'}…`"
          :dir="store.currentLang?.is_rtl ? 'rtl' : 'ltr'"
          autocomplete="off"
          spellcheck="false"
          @keydown.enter="answered ? next() : validate()"
        />
        <button
          v-if="!answered"
          class="btn-validate"
          :disabled="!userInput.trim()"
          @click="validate"
        >Vérifier</button>
      </div>

      <!-- Indice -->
      <div class="hint-row">
        <button class="btn-hint" @click="showClue = !showClue" :disabled="answered">💡 Indice</button>
        <button class="btn-hint" @click="revealFirst" :disabled="answered || firstRevealed">
          🔤 Première lettre
        </button>
      </div>
      <div v-if="showClue && current.clue" class="clue-box">💡 {{ current.clue }}</div>

      <!-- Feedback -->
      <div v-if="answered" class="feedback-block" :class="isCorrect ? 'fb-correct' : 'fb-wrong'">
        <div class="fb-icon">{{ isCorrect ? '✓' : '✗' }}</div>
        <div class="fb-content">
          <div class="fb-label">{{ isCorrect ? 'Correct !' : 'Réponse correcte :' }}</div>
          <div v-if="!isCorrect" class="fb-answer" :dir="store.currentLang?.is_rtl ? 'rtl' : 'ltr'">
            {{ current.example_sentence }}
          </div>
        </div>
        <button class="btn-next" @click="next">
          {{ idx + 1 < total ? 'Suivant →' : 'Résultats' }}
        </button>
      </div>
    </div>
  </div>
    <ConfirmQuit v-if="showQuit" @cancel="showQuit = false" @confirm="router.push('/')" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import ConfirmQuit from '@/components/ConfirmQuit.vue'
import { useRouter } from 'vue-router'
import { useLangStore } from '@/stores/lang'
import { useAuthStore } from '@/stores/auth'
import { postSession, calcXp } from '@/api/progress'
import { postReview } from '@/api/reviews'
import type { Word } from '@/types'

const store  = useLangStore()
const showQuit = ref(false)
const auth   = useAuthStore()
const router = useRouter()

const cards         = ref<Word[]>([])
const idx           = ref(0)
const score         = ref(0)
const answered      = ref(false)
const isCorrect     = ref(false)
const done          = ref(false)
const playing       = ref(false)
const playingSlow   = ref(false)
const userInput     = ref('')
const showClue      = ref(false)
const firstRevealed = ref(false)
const inputEl       = ref<HTMLInputElement | null>(null)

const total   = computed(() => cards.value.length)
const current = computed(() => cards.value[idx.value])

const feedbackClass = computed(() => {
  if (!answered.value) return ''
  return isCorrect.value ? 'input-correct' : 'input-wrong'
})

// ── Normalisation pour comparaison souple ────────────────────────────────────
function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '') // retirer les accents
    .replace(/[.,!?;:¿¡]/g, '')                       // retirer la ponctuation
    .replace(/\s+/g, ' ')
    .trim()
}

// ── TTS ───────────────────────────────────────────────────────────────────────
function speak(rate = 1) {
  const sentence = current.value.example_sentence ?? current.value.term
  const u = new SpeechSynthesisUtterance(sentence)
  u.lang = store.currentLang?.voice_locale ?? 'fr-FR'
  u.rate = rate
  if (rate < 0.8) { playingSlow.value = true; playing.value = false }
  else            { playing.value = true; playingSlow.value = false }
  u.onend = u.onerror = () => { playing.value = false; playingSlow.value = false }
  speechSynthesis.cancel()
  speechSynthesis.speak(u)
}

// ── Indice première lettre ────────────────────────────────────────────────────
function revealFirst() {
  const sentence = current.value.example_sentence ?? ''
  if (!sentence) return
  const firstWord = sentence.split(' ')[0]
  userInput.value = firstWord[0]
  firstRevealed.value = true
  inputEl.value?.focus()
}

// ── Validation ────────────────────────────────────────────────────────────────
function validate() {
  if (!userInput.value.trim() || answered.value) return
  const correct  = current.value.example_sentence ?? current.value.term
  const ok       = normalize(userInput.value) === normalize(correct)
  answered.value = true
  isCorrect.value = ok
  if (ok) score.value++
  if (auth.user && store.currentLang) postReview(current.value.id, store.currentLang.code, ok)
}

// ── Navigation ────────────────────────────────────────────────────────────────
function next() {
  if (idx.value + 1 >= total.value) { done.value = true; return }
  idx.value++
  answered.value   = false
  isCorrect.value  = false
  userInput.value  = ''
  showClue.value   = false
  firstRevealed.value = false
  nextTick(() => {
    inputEl.value?.focus()
    setTimeout(() => speak(1), 400)
  })
}

function restart() {
  cards.value = [...cards.value].sort(() => Math.random() - 0.5)
  idx.value   = 0; score.value = 0; answered.value = false
  isCorrect.value = false; userInput.value = ''; done.value = false
  showClue.value = false; firstRevealed.value = false
  nextTick(() => { inputEl.value?.focus(); setTimeout(() => speak(1), 400) })
}

// ── XP ────────────────────────────────────────────────────────────────────────
watch(done, (val) => {
  if (!val || !auth.user || !store.currentLang || !store.currentTheme) return
  const t  = total.value
  const xp = calcXp('dictee', score.value, t)
  postSession({
    language:  store.currentLang.code,
    theme:     store.currentTheme.key,
    level:     store.currentLevel,
    mode:      'dictee',
    score:     Math.round(score.value / t * 100),
    xp_gained: xp,
    correct:   score.value,
    total:     t,
  })
})

// ── Mount ─────────────────────────────────────────────────────────────────────
onMounted(async () => {
  if (!store.words.length) await store.loadWords()
  cards.value = store.words
    .filter(w => w.example_sentence)
    .sort(() => Math.random() - 0.5)
  if (cards.value.length) {
    nextTick(() => {
      inputEl.value?.focus()
      setTimeout(() => speak(1), 600)
    })
  }
})
</script>

<style scoped>
.dictee { max-width: 560px; margin: 0 auto; padding: 1.5rem 1rem; }
.loader { text-align: center; color: var(--muted); margin-top: 4rem; }
.empty  { text-align: center; padding: 3rem 1rem; color: var(--muted); }

.quiz-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: .75rem; }
.btn-back  { background: none; border: none; color: var(--muted); cursor: pointer; font-size: .9rem; }
.mode-badge { background: #f59e0b20; color: #fbbf24; padding: .2rem .7rem; border-radius: 20px; font-size: .8rem; }
.counter   { color: var(--muted2); font-size: .9rem; }

.progress-bar  { height: 6px; background: var(--border); border-radius: 3px; margin-bottom: 1.5rem; }
.progress-fill { height: 100%; background: #f59e0b; border-radius: 3px; transition: width .3s; }

/* Hint FR */
.fr-hint { display: flex; align-items: center; gap: .6rem;
  background: var(--bg-card); border: 2px solid var(--accent); border-radius: 10px;
  padding: .75rem 1rem; margin-bottom: 1.25rem; }
.fr-flag { font-size: 1.2rem; }
.fr-text { font-weight: 700; color: #a5b4fc; font-size: 1rem; }

/* Audio */
.audio-zone { text-align: center; margin-bottom: 1.25rem; }
.listen-hint { color: var(--muted2); font-size: .88rem; margin-bottom: .75rem; }
.play-row { display: flex; gap: .75rem; justify-content: center; }
.play-btn {
  background: #0ea5e920; border: 2px solid #0ea5e9; border-radius: 50px;
  color: #38bdf8; padding: .65rem 1.5rem; font-size: .95rem; font-weight: 600;
  cursor: pointer; display: inline-flex; align-items: center; gap: .5rem;
  transition: background .2s;
}
.play-btn:hover, .play-btn.playing { background: #0ea5e940; }
.play-btn.slow { background: #7c3aed20; border-color: #7c3aed; color: #c4b5fd; }
.play-btn.slow:hover, .play-btn.slow.playing { background: #7c3aed40; }

/* Input */
.input-wrap { display: flex; gap: .6rem; margin-bottom: .75rem; }
.dictee-input {
  flex: 1; padding: .75rem 1rem;
  background: var(--bg-card); border: 2px solid var(--border); border-radius: 10px;
  color: var(--text); font-size: 1rem; outline: none;
  transition: border-color .2s;
}
.dictee-input:focus { border-color: #f59e0b; }
.dictee-input.input-correct { border-color: #22c55e; background: #14532d20; }
.dictee-input.input-wrong   { border-color: #ef4444; background: #7f1d1d20; }
.dictee-input:disabled { opacity: .75; cursor: default; }
.btn-validate {
  background: #f59e0b; color: var(--bg-app); border: none; border-radius: 10px;
  padding: .75rem 1.25rem; font-size: .95rem; font-weight: 700; cursor: pointer;
  transition: opacity .15s; white-space: nowrap;
}
.btn-validate:disabled { opacity: .35; cursor: not-allowed; }
.btn-validate:not(:disabled):hover { opacity: .85; }

/* Indices */
.hint-row { display: flex; gap: .6rem; margin-bottom: .5rem; }
.btn-hint { background: none; border: 1px solid var(--border); border-radius: 8px;
  color: var(--muted); padding: .35rem .9rem; font-size: .82rem; cursor: pointer;
  transition: border-color .15s; }
.btn-hint:not(:disabled):hover { border-color: #f59e0b; color: #fbbf24; }
.btn-hint:disabled { opacity: .35; cursor: default; }
.clue-box { background: #2a2000; border: 2px solid #b87a00; border-radius: 8px;
  padding: .4rem 1rem; color: #f5d080; font-size: .85rem; margin-bottom: .75rem; }

/* Feedback */
.feedback-block {
  display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;
  border-radius: 12px; padding: 1rem 1.25rem; margin-top: .5rem;
}
.fb-correct { background: #14532d30; border: 2px solid #22c55e; }
.fb-wrong   { background: #7f1d1d30; border: 2px solid #ef4444; }
.fb-icon { font-size: 1.5rem; }
.fb-content { flex: 1; }
.fb-label { font-weight: 700; font-size: .95rem; }
.fb-correct .fb-label { color: #86efac; }
.fb-wrong   .fb-label { color: #fca5a5; }
.fb-answer { color: var(--text); font-size: 1rem; margin-top: .25rem; font-style: italic; }
.btn-next { background: #f59e0b; color: var(--bg-app); border: none; border-radius: 8px;
  padding: .6rem 1.4rem; font-size: .9rem; font-weight: 700; cursor: pointer; white-space: nowrap; }

/* Résultats */
.results { text-align: center; padding: 3rem 1rem; }
.results-emoji { font-size: 4rem; margin-bottom: .5rem; }
.score-text { font-size: 1.3rem; color: var(--muted2); margin: .5rem 0 2rem; }
.results-actions { display: flex; gap: 1rem; justify-content: center; }
.btn-primary   { background: var(--accent); color: white; border: none; border-radius: 8px; padding: .7rem 1.8rem; font-size: 1rem; cursor: pointer; }
.btn-secondary { background: var(--border); color: var(--dim); border: none; border-radius: 8px; padding: .7rem 1.8rem; font-size: 1rem; cursor: pointer; }
</style>
