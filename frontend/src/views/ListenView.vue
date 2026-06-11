<template>
  <div class="listen">
    <div v-if="store.loading" class="loader">Chargement…</div>

    <div v-else-if="!cards.length" class="empty">
      <p>Aucun mot disponible pour ce thème/niveau.</p>
      <button class="btn-secondary" @click="showQuit = true">← Retour</button>
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
        <button class="btn-back" @click="router.push('/')">← Quitter</button>
        <span class="mode-badge">🎧 Écoute</span>
        <span class="counter">{{ idx + 1 }} / {{ total }}</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: (idx / total * 100) + '%' }"></div>
      </div>

      <!-- Zone audio -->
      <div class="audio-zone">
        <p class="listen-hint">Quel mot as-tu entendu ?</p>
        <button class="play-btn" :class="{ playing }" @click="speak">
          <span class="play-icon">{{ playing ? '🔊' : '▶' }}</span>
          <span>{{ playing ? 'Lecture…' : 'Écouter' }}</span>
        </button>
        <p class="replay-hint">Clique pour réécouter</p>
      </div>

      <!-- Choix (traductions FR) -->
      <div class="choices">
        <button
          v-for="choice in choices"
          :key="choice"
          class="choice-btn"
          :class="choiceClass(choice)"
          :disabled="answered"
          @click="answer(choice)"
        >{{ choice }}</button>
      </div>

      <!-- Révélation après réponse -->
      <div v-if="answered" class="reveal">
        <div class="reveal-pair">
          <span class="reveal-term" :class="{ rtl: store.currentLang?.is_rtl }">
            {{ current.term }}<span v-if="current.transliteration" class="reveal-rom"> · {{ current.transliteration }}</span>
          </span>
          <span class="reveal-arrow">→</span>
          <span class="reveal-fr">{{ current.translation_fr }}</span>
        </div>
        <button class="btn-next" @click="next">
          {{ idx + 1 < total ? 'Suivant →' : 'Voir les résultats' }}
        </button>
      </div>
    </div>
  </div>
    <ConfirmQuit v-if="showQuit" @cancel="showQuit = false" @confirm="router.push('/')" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
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

const cards    = ref<Word[]>([])
const idx      = ref(0)
const score    = ref(0)
const answered = ref(false)
const selected = ref<string | null>(null)
const done     = ref(false)
const playing  = ref(false)
const choices  = ref<string[]>([])

const total   = computed(() => cards.value.length)
const current = computed(() => cards.value[idx.value])

function buildChoices() {
  if (!current.value) return
  const correct = current.value.translation_fr
  const pool = cards.value.map(w => w.translation_fr).filter(t => t !== correct)
  const distractors = [...pool].sort(() => Math.random() - 0.5).slice(0, 3)
  choices.value = [...distractors, correct].sort(() => Math.random() - 0.5)
}

function speak() {
  const u = new SpeechSynthesisUtterance(current.value.term)
  u.lang = store.currentLang?.voice_locale ?? 'fr-FR'
  u.rate = 0.85
  playing.value = true
  u.onend = () => { playing.value = false }
  u.onerror = () => { playing.value = false }
  speechSynthesis.cancel()
  speechSynthesis.speak(u)
}

function choiceClass(choice: string) {
  if (!answered.value) return ''
  if (choice === current.value.translation_fr) return 'correct'
  if (choice === selected.value) return 'wrong'
  return ''
}

function answer(choice: string) {
  if (answered.value) return
  answered.value = true
  selected.value = choice
  const ok = choice === current.value.translation_fr
  if (ok) score.value++
  if (auth.user && store.currentLang) postReview(current.value.id, store.currentLang.code, ok)
}

function next() {
  if (idx.value + 1 >= total.value) { done.value = true; return }
  idx.value++
  answered.value = false
  selected.value = null
  buildChoices()
  // Auto-play next word après un court délai
  setTimeout(speak, 400)
}

function restart() {
  cards.value = [...cards.value].sort(() => Math.random() - 0.5)
  idx.value = 0; score.value = 0; answered.value = false
  selected.value = null; done.value = false
  buildChoices()
  setTimeout(speak, 400)
}

watch(done, (val) => {
  if (!val || !auth.user || !store.currentLang || !store.currentTheme) return
  const t  = total.value
  const xp = calcXp('quiz', score.value, t) // même barème que quiz
  postSession({
    language:  store.currentLang.code,
    theme:     store.currentTheme.key,
    level:     store.currentLevel,
    mode:      'quiz',
    score:     Math.round(score.value / t * 100),
    xp_gained: xp,
    correct:   score.value,
    total:     t,
  })
})

onMounted(async () => {
  if (!store.words.length) await store.loadWords()
  cards.value = [...store.words].sort(() => Math.random() - 0.5)
  buildChoices()
  setTimeout(speak, 600)
})
</script>

<style scoped>
.listen { max-width: 560px; margin: 0 auto; padding: 1.5rem 1rem; }
.loader { text-align: center; color: var(--muted); margin-top: 4rem; }
.empty  { text-align: center; padding: 3rem 1rem; color: var(--muted); }

.quiz-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: .75rem; }
.btn-back { background: none; border: none; color: var(--muted); cursor: pointer; font-size: .9rem; }
.mode-badge { background: #0ea5e920; color: #38bdf8; padding: .2rem .7rem; border-radius: 20px; font-size: .8rem; }
.counter { color: var(--muted2); font-size: .9rem; }
.progress-bar { height: 6px; background: var(--border); border-radius: 3px; margin-bottom: 2rem; }
.progress-fill { height: 100%; background: #0ea5e9; border-radius: 3px; transition: width .3s; }

.audio-zone { text-align: center; margin-bottom: 2rem; }
.listen-hint { color: var(--muted2); margin-bottom: 1rem; font-size: .95rem; }
.play-btn { background: #0ea5e920; border: 2px solid #0ea5e9; border-radius: 50px;
  color: #38bdf8; padding: 1rem 2.5rem; font-size: 1.05rem; font-weight: 600;
  cursor: pointer; display: inline-flex; align-items: center; gap: .6rem;
  transition: background .2s; }
.play-btn:hover, .play-btn.playing { background: #0ea5e940; }
.play-icon { font-size: 1.4rem; }
.replay-hint { color: #444; font-size: .75rem; margin-top: .5rem; }

.choices { display: flex; flex-direction: column; gap: .6rem; margin-bottom: 1.25rem; }
.choice-btn { background: var(--bg-card); border: 2px solid #444; border-radius: 10px; padding: .75rem 1rem;
  color: #ddd; font-size: 1rem; cursor: pointer; text-align: left; transition: border-color .15s; }
.choice-btn:not(:disabled):hover { border-color: #0ea5e9; }
.choice-btn.correct { border-color: #22c55e; background: #14532d40; color: #86efac; }
.choice-btn.wrong   { border-color: #ef4444; background: #7f1d1d40; color: #fca5a5; }

.reveal-pair { display: flex; align-items: center; justify-content: center; gap: .6rem; flex-wrap: wrap; margin-bottom: .75rem; }
.reveal-term { font-weight: 700; color: var(--text); }
.reveal-arrow { color: var(--muted); }
.reveal-fr { color: #86efac; font-weight: 600; }
.reveal { text-align: center; margin-top: .5rem; }
.reveal-term { font-size: 1.6rem; font-weight: 700; color: var(--text); margin-bottom: 1rem; }
.reveal-term.rtl { direction: rtl; }
.reveal-rom { color: var(--muted); font-size: .85rem; font-weight: 400; }
.btn-next { width: 100%; background: #0ea5e9; color: white; border: none; border-radius: 8px;
  padding: .75rem; font-size: 1rem; font-weight: 600; cursor: pointer; }

.results { text-align: center; padding: 3rem 1rem; }
.results-emoji { font-size: 4rem; margin-bottom: .5rem; }
.score-text { font-size: 1.3rem; color: var(--muted2); margin: .5rem 0 2rem; }
.results-actions { display: flex; gap: 1rem; justify-content: center; }
.btn-primary   { background: var(--accent); color: white; border: none; border-radius: 8px; padding: .7rem 1.8rem; font-size: 1rem; cursor: pointer; }
.btn-secondary { background: var(--border); color: var(--dim); border: none; border-radius: 8px; padding: .7rem 1.8rem; font-size: 1rem; cursor: pointer; }
</style>
