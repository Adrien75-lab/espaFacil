<template>
  <div class="speak">
    <div v-if="store.loading" class="loader">Chargement…</div>

    <div v-else-if="!supported" class="unsupported">
      <div class="unsupported-icon">🎙️</div>
      <h2>Micro non disponible</h2>
      <p>Ton navigateur ne supporte pas la reconnaissance vocale.<br>
        Essaie Chrome (desktop ou Android).</p>
      <button class="btn-secondary" @click="showQuit = true">← Quitter</button>
    </div>

    <div v-else-if="!cards.length" class="empty">
      <p>Aucun mot disponible pour ce thème/niveau.</p>
      <button class="btn-secondary" @click="router.push('/')">← Retour</button>
    </div>

    <ExerciseResults
      v-else-if="done"
      :correct="score"
      :total="total"
      :score-label="`${score} / ${total} prononciations validées`"
    >
      <div class="gauge-wrap">
        <svg viewBox="0 0 120 70" class="gauge-svg">
          <path d="M10,60 A50,50 0 0,1 110,60" fill="none" stroke="var(--border)" stroke-width="10" stroke-linecap="round" />
          <path
            d="M10,60 A50,50 0 0,1 110,60" fill="none"
            :stroke="avgSim >= 80 ? '#22c55e' : avgSim >= 55 ? '#f59e0b' : '#ef4444'"
            stroke-width="10" stroke-linecap="round"
            :stroke-dasharray="`${avgSim * 1.571} 200`"
          />
          <text x="60" y="58" text-anchor="middle" class="gauge-pct">{{ avgSim }}%</text>
          <text x="60" y="68" text-anchor="middle" class="gauge-label">score moyen</text>
        </svg>
      </div>

      <div class="word-results">
        <div v-for="r in wordResults" :key="r.term" class="wr-row" :class="r.cls">
          <span class="wr-icon">{{ r.sim >= 80 ? '✓' : r.sim >= 55 ? '~' : '✗' }}</span>
          <span class="wr-term" :dir="store.currentLang?.is_rtl ? 'rtl' : 'ltr'">{{ r.term }}</span>
          <span class="wr-heard" v-if="r.heard">→ «{{ r.heard }}»</span>
          <span class="wr-sim">{{ r.sim }}%</span>
        </div>
      </div>

      <template #actions>
        <button class="btn-primary" @click="restart">Recommencer</button>
        <button class="btn-secondary" @click="router.push('/')">Accueil</button>
      </template>
    </ExerciseResults>

    <div v-else class="card-screen">
      <div class="quiz-header">
        <button class="btn-back" @click="stopAndQuit">← Quitter</button>
        <span class="mode-badge">🎙️ Prononciation</span>
        <span class="header-status">
          <ExerciseScoreBadge :correct="score" :answered="idx + (answered ? 1 : 0)" />
          <span class="counter">{{ idx + 1 }} / {{ total }}</span>
        </span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: (idx / total * 100) + '%' }"></div>
      </div>

      <!-- Mot à prononcer -->
      <div class="word-zone">
        <p class="hint-text">Prononce ce mot :</p>
        <div class="word-term" :class="{ rtl: store.currentLang?.is_rtl }">{{ current.term }}</div>
        <div v-if="current.transliteration" class="word-rom">{{ current.transliteration }}</div>
        <div v-if="current.translation_fr" class="word-fr">{{ current.translation_fr }}</div>
        <button class="btn-listen" @click="speakRef">🔊 Écouter</button>
      </div>

      <!-- Bouton micro -->
      <div class="mic-zone">
        <button
          v-if="!answered"
          class="mic-btn"
          :class="{ recording, error: micError }"
          :disabled="recording"
          @click="startRecognition"
        >
          <span class="mic-icon">{{ recording ? '⏺' : micError ? '⚠️' : '🎙️' }}</span>
          <span>{{ recording ? 'Écoute en cours…' : micError ? 'Réessayer' : 'Parler' }}</span>
        </button>

        <!-- Résultat -->
        <div v-if="heard" class="heard-box">
          <span class="heard-label">J'ai entendu :</span>
          <span class="heard-text" :class="{ rtl: store.currentLang?.is_rtl }">« {{ heard }} »</span>
        </div>

        <!-- Jauge similarité -->
        <div v-if="answered" class="sim-gauge">
          <div class="sim-bar">
            <div
              class="sim-fill"
              :class="isCorrect ? 'sim-ok' : similarity >= 60 ? 'sim-close' : 'sim-bad'"
              :style="{ width: similarity + '%' }"
            >
            </div>
          </div>
          <span
            class="sim-pct"
            :class="isCorrect ? 'sim-ok' : similarity >= 60 ? 'sim-close' : 'sim-bad'"
          >
            {{ similarity }}%
          </span>
        </div>
        <div v-if="answered" class="feedback" :class="isCorrect ? 'correct' : similarity >= 60 ? 'close' : 'wrong'">
          <span v-if="isCorrect">✓ Parfait !</span>
          <span v-else-if="similarity >= 60">~ Presque !</span>
          <span v-else>✗ Attendu : <strong>{{ current.term }}</strong></span>
        </div>
      </div>

      <button v-if="answered" class="btn-next" @click="next">
        {{ idx + 1 < total ? 'Suivant →' : 'Voir les résultats' }}
      </button>

      <!-- Skip -->
      <button v-if="!answered" class="btn-skip" @click="skip">Passer →</button>
    </div>
  </div>
  <ConfirmQuit v-if="showQuit" @cancel="showQuit = false" @confirm="router.push('/')" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import ConfirmQuit from '@/components/ConfirmQuit.vue'
import ExerciseScoreBadge from '@/components/exercise/ExerciseScoreBadge.vue'
import ExerciseResults from '@/components/exercise/ExerciseResults.vue'
import { useRouter } from 'vue-router'
import { useLangStore } from '@/stores/lang'
import { useAuthStore } from '@/stores/auth'
import { useSessionRecorder } from '@/composables/useSessionRecorder'
import { postReview } from '@/api/reviews'
import { normalizeText, similarity as textSimilarity } from '@/utils/textMatching'
import type { Word } from '@/types'

const store  = useLangStore()
const showQuit = ref(false)
const auth   = useAuthStore()
const router = useRouter()
const { recordSession } = useSessionRecorder()

// SpeechRecognition — préfixe webkit pour Chrome/Safari mobile
const SR = (window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition
const supported = !!SR

interface WordResult { term: string; heard: string | null; sim: number; cls: string }

const cards     = ref<Word[]>([])
const idx       = ref(0)
const score     = ref(0)
const done      = ref(false)
const recording = ref(false)
const answered  = ref(false)
const heard     = ref<string | null>(null)
const similarity = ref(0)
const micError  = ref(false)
const wordResults = ref<WordResult[]>([])

let recognition: any = null

const total     = computed(() => cards.value.length)
const current   = computed(() => cards.value[idx.value])
const isCorrect = computed(() => similarity.value >= 80)
const avgSim    = computed(() => {
  if (!wordResults.value.length) return 0
  return Math.round(wordResults.value.reduce((s, r) => s + r.sim, 0) / wordResults.value.length)
})

function startRecognition() {
  if (!SR || recording.value) return
  micError.value = false
  heard.value = null

  recognition = new SR()
  recognition.lang = store.currentLang?.voice_locale ?? 'fr-FR'
  recognition.interimResults = false
  recognition.maxAlternatives = 3

  recording.value = true

  recognition.onresult = (e: any) => {
    const results: string[] = []
    for (let i = 0; i < e.results[0].length; i++) {
      results.push(e.results[0][i].transcript)
    }
    const target = normalizeText(current.value.term)
    // Prend le meilleur score parmi les alternatives
    let best = 0
    let bestHeard = results[0]
    for (const r of results) {
      const sim = Math.round(textSimilarity(r, target) * 100)
      if (sim > best) { best = sim; bestHeard = r }
    }
    heard.value = bestHeard
    similarity.value = best
    answered.value = true
    recording.value = false
    const ok = best >= 80
    if (ok) score.value++
    wordResults.value.push({
      term: current.value.term,
      heard: bestHeard,
      sim: best,
      cls: ok ? 'wr-ok' : best >= 55 ? 'wr-close' : 'wr-bad',
    })
    if (auth.user && store.currentLang) postReview(current.value.id, store.currentLang.code, ok)
  }

  recognition.onerror = () => {
    recording.value = false
    micError.value = true
  }

  recognition.onend = () => {
    recording.value = false
  }

  recognition.start()
}

function skip() {
  heard.value = null
  similarity.value = 0
  answered.value = true
  wordResults.value.push({ term: current.value.term, heard: null, sim: 0, cls: 'wr-bad' })
  if (auth.user && store.currentLang) postReview(current.value.id, store.currentLang.code, false)
}

function speakRef() {
  const u = new SpeechSynthesisUtterance(current.value.term)
  u.lang = store.currentLang?.voice_locale ?? 'fr-FR'
  u.rate = 0.8
  speechSynthesis.cancel()
  speechSynthesis.speak(u)
}

function next() {
  if (idx.value + 1 >= total.value) { done.value = true; return }
  idx.value++
  answered.value = false
  heard.value = null
  similarity.value = 0
  micError.value = false
}

function restart() {
  cards.value = [...cards.value].sort(() => Math.random() - 0.5)
  idx.value = 0; score.value = 0; answered.value = false
  heard.value = null; similarity.value = 0; done.value = false
  wordResults.value = []
}

function stopAndQuit() {
  recognition?.abort()
  router.push('/')
}

watch(done, (val) => {
  if (val) void recordSession('speak', score.value, total.value)
})

onMounted(async () => {
  if (!store.words.length) await store.loadWords()
  cards.value = [...store.words].sort(() => Math.random() - 0.5)
})

onUnmounted(() => recognition?.abort())
</script>

<style scoped>
.speak { max-width: 560px; margin: 0 auto; padding: 1.5rem 1rem; }
.loader { text-align: center; color: var(--muted); margin-top: 4rem; }
.empty, .unsupported { text-align: center; padding: 3rem 1rem; }
.unsupported-icon { font-size: 3rem; margin-bottom: .5rem; }
.unsupported h2 { color: var(--text); margin-bottom: .5rem; }
.unsupported p  { color: var(--muted); margin-bottom: 1.5rem; line-height: 1.6; }

.quiz-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: .75rem; }
.btn-back { background: none; border: none; color: var(--muted); cursor: pointer; font-size: .9rem; }
.mode-badge { background: #ec489920; color: #f9a8d4; padding: .2rem .7rem; border-radius: 20px; font-size: .8rem; }
.counter { color: var(--muted2); font-size: .9rem; }
.progress-bar { height: 6px; background: var(--border); border-radius: 3px; margin-bottom: 2rem; }
.progress-fill { height: 100%; background: #ec4899; border-radius: 3px; transition: width .3s; }

.word-zone { text-align: center; margin-bottom: 2rem; background: var(--bg-card); border-radius: 14px; padding: 1.5rem 1rem; }
.hint-text  { color: #666; font-size: .85rem; margin-bottom: .5rem; }
.word-term  { font-size: 2.4rem; font-weight: 700; color: var(--text); }
.word-term.rtl { direction: rtl; }
.word-rom   { color: var(--muted); font-size: .95rem; margin-top: .3rem; font-style: italic; }
.word-fr    { color: #a5b4fc; font-size: 1rem; margin-top: .5rem; }
.btn-listen { background: none; border: 1px solid var(--border); border-radius: 20px; color: var(--muted);
  padding: .3rem .9rem; font-size: .8rem; cursor: pointer; margin-top: .75rem; }
.btn-listen:hover { border-color: #666; color: var(--dim); }

.mic-zone { text-align: center; margin-bottom: 1.5rem; }
.mic-btn { background: #ec489920; border: 2px solid #ec4899; border-radius: 50px;
  color: #f9a8d4; padding: 1.1rem 2.5rem; font-size: 1.05rem; font-weight: 600;
  cursor: pointer; display: inline-flex; align-items: center; gap: .6rem;
  transition: background .2s; }
.mic-btn:hover:not(:disabled) { background: #ec489940; }
.mic-btn.recording { background: #ec489940; animation: pulse 1s infinite; }
.mic-btn.error  { border-color: #f59e0b; color: #f59e0b; background: #f59e0b20; }
.mic-btn:disabled { cursor: not-allowed; }
.mic-icon { font-size: 1.4rem; }

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 #ec489960; }
  50%       { box-shadow: 0 0 0 8px #ec489900; }
}

.heard-box { margin-top: 1rem; color: var(--muted2); font-size: .9rem; }
.heard-text { color: var(--text); font-style: italic; margin-left: .3rem; }
.heard-text.rtl { direction: rtl; }

.feedback { margin-top: .75rem; font-size: 1rem; font-weight: 600; padding: .5rem 1rem; border-radius: 8px; display: inline-block; }
.feedback.correct { background: #14532d40; color: #86efac; }
.feedback.close   { background: #78350f40; color: #fde68a; }
.feedback.wrong   { background: #7f1d1d40; color: #fca5a5; }

.btn-next { width: 100%; background: #ec4899; color: white; border: none; border-radius: 8px;
  padding: .75rem; font-size: 1rem; font-weight: 600; cursor: pointer; margin-top: .5rem; }
.btn-skip { width: 100%; background: none; border: 1px solid var(--border); border-radius: 8px;
  color: #666; padding: .5rem; font-size: .85rem; cursor: pointer; margin-top: .75rem; }
.btn-skip:hover { border-color: #555; color: #999; }

/* Jauge similarité inline */
.sim-gauge { display: flex; align-items: center; gap: .75rem; margin-top: 1rem; }
.sim-bar   { flex: 1; height: 8px; background: var(--border); border-radius: 4px; overflow: hidden; }
.sim-fill  { height: 100%; border-radius: 4px; transition: width .5s ease; }
.sim-ok    { background: #22c55e; color: #86efac; }
.sim-close { background: #f59e0b; color: #fcd34d; }
.sim-bad   { background: #ef4444; color: #fca5a5; }
.sim-pct   { font-size: .85rem; font-weight: 700; min-width: 40px; text-align: right; }

/* Résultats */
.results { text-align: center; padding: 2rem 1rem; }
.results-emoji { font-size: 4rem; margin-bottom: .5rem; }
.results-actions { display: flex; gap: 1rem; justify-content: center; margin-top: 1.5rem; }

/* Jauge SVG */
.gauge-wrap { display: flex; justify-content: center; margin: .5rem 0 1.25rem; }
.gauge-svg  { width: 160px; }
.gauge-pct  { font-size: 18px; font-weight: 800; fill: var(--text); }
.gauge-label { font-size: 7px; fill: var(--muted); }

/* Détail par mot */
.word-results { display: flex; flex-direction: column; gap: .4rem; text-align: left; margin-bottom: .5rem; }
.wr-row {
  display: flex; align-items: center; gap: .6rem;
  background: var(--bg-card); border-radius: 8px; padding: .5rem .8rem;
  border-left: 3px solid transparent;
}
.wr-ok    { border-left-color: #22c55e; }
.wr-close { border-left-color: #f59e0b; }
.wr-bad   { border-left-color: #ef4444; }
.wr-icon  { font-size: .9rem; font-weight: 700; min-width: 16px; }
.wr-ok .wr-icon    { color: #86efac; }
.wr-close .wr-icon { color: #fcd34d; }
.wr-bad .wr-icon   { color: #fca5a5; }
.wr-term  { font-weight: 600; color: var(--text); font-size: .9rem; flex: 1; }
.wr-heard { color: var(--muted); font-size: .78rem; font-style: italic; flex: 1; }
.wr-sim   { font-size: .8rem; font-weight: 700; color: var(--muted2); white-space: nowrap; }
.btn-primary   { background: var(--accent); color: white; border: none; border-radius: 8px; padding: .7rem 1.8rem; font-size: 1rem; cursor: pointer; }
.btn-secondary { background: var(--border); color: var(--dim); border: none; border-radius: 8px; padding: .7rem 1.8rem; font-size: 1rem; cursor: pointer; }
</style>
