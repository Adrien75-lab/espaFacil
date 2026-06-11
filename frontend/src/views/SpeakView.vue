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

    <div v-else-if="done" class="results">
      <div class="results-emoji">{{ score === total ? '🏆' : score >= total * 0.7 ? '🎉' : '💪' }}</div>
      <h2>Session terminée !</h2>
      <p class="score-text">{{ score }} / {{ total }} correctes</p>
      <div class="results-actions">
        <button class="btn-primary" @click="restart">Recommencer</button>
        <button class="btn-secondary" @click="router.push('/')">Accueil</button>
      </div>
    </div>

    <div v-else class="card-screen">
      <div class="quiz-header">
        <button class="btn-back" @click="stopAndQuit">← Quitter</button>
        <span class="mode-badge">🎙️ Prononciation</span>
        <span class="counter">{{ idx + 1 }} / {{ total }}</span>
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
        <div v-if="answered" class="feedback" :class="isCorrect ? 'correct' : similarity >= 60 ? 'close' : 'wrong'">
          <span v-if="isCorrect">✓ Parfait !</span>
          <span v-else-if="similarity >= 60">~ Presque ! ({{ similarity }}%)</span>
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

// SpeechRecognition — préfixe webkit pour Chrome/Safari mobile
const SR = (window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition
const supported = !!SR

const cards     = ref<Word[]>([])
const idx       = ref(0)
const score     = ref(0)
const done      = ref(false)
const recording = ref(false)
const answered  = ref(false)
const heard     = ref<string | null>(null)
const similarity = ref(0)
const micError  = ref(false)

let recognition: any = null

const total     = computed(() => cards.value.length)
const current   = computed(() => cards.value[idx.value])
const isCorrect = computed(() => similarity.value >= 80)

/** Normalise : minuscules, sans accents, sans ponctuation */
function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9Ѐ-ӿ一-鿿぀-ヿ가-힯؀-ۿ\s]/g, '')
    .trim()
}

/** Distance de Levenshtein → similarité % */
function levenshteinSimilarity(a: string, b: string): number {
  if (!a || !b) return 0
  if (a === b) return 100
  const la = a.length, lb = b.length
  const dp: number[][] = Array.from({ length: la + 1 }, (_, i) =>
    Array.from({ length: lb + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  )
  for (let i = 1; i <= la; i++)
    for (let j = 1; j <= lb; j++)
      dp[i][j] = a[i-1] === b[j-1]
        ? dp[i-1][j-1]
        : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
  const dist = dp[la][lb]
  return Math.round((1 - dist / Math.max(la, lb)) * 100)
}

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
    const target = normalize(current.value.term)
    // Prend le meilleur score parmi les alternatives
    let best = 0
    let bestHeard = results[0]
    for (const r of results) {
      const sim = levenshteinSimilarity(normalize(r), target)
      if (sim > best) { best = sim; bestHeard = r }
    }
    heard.value = bestHeard
    similarity.value = best
    answered.value = true
    recording.value = false
    const ok = best >= 80
    if (ok) score.value++
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
}

function stopAndQuit() {
  recognition?.abort()
  router.push('/')
}

watch(done, (val) => {
  if (!val || !auth.user || !store.currentLang || !store.currentTheme) return
  const t  = total.value
  const xp = calcXp('fill-blank', score.value, t) // même barème que fill-blank (7 XP/correct)
  postSession({
    language:  store.currentLang.code,
    theme:     store.currentTheme.key,
    level:     store.currentLevel,
    mode:      'fill-blank',
    score:     Math.round(score.value / t * 100),
    xp_gained: xp,
    correct:   score.value,
    total:     t,
  })
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

.results { text-align: center; padding: 3rem 1rem; }
.results-emoji { font-size: 4rem; margin-bottom: .5rem; }
.score-text { font-size: 1.3rem; color: var(--muted2); margin: .5rem 0 2rem; }
.results-actions { display: flex; gap: 1rem; justify-content: center; }
.btn-primary   { background: var(--accent); color: white; border: none; border-radius: 8px; padding: .7rem 1.8rem; font-size: 1rem; cursor: pointer; }
.btn-secondary { background: var(--border); color: var(--dim); border: none; border-radius: 8px; padding: .7rem 1.8rem; font-size: 1rem; cursor: pointer; }
</style>
