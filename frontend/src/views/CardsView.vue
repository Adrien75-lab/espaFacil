<template>
  <div class="cards">
    <div v-if="store.loading" class="loader">Chargement…</div>

    <div v-else-if="done" class="results">
      <div class="results-emoji">{{ known === total ? '🏆' : known >= total * 0.7 ? '🎉' : '💪' }}</div>
      <h2>Session terminée !</h2>
      <p class="score-text">{{ known }} / {{ total }} connues</p>
      <div v-if="review.length" class="review-list">
        <p class="review-label">À revoir :</p>
        <div v-for="w in review" :key="w.id" class="review-item">
          <span class="review-term">{{ w.term }}</span>
          <span class="review-sep">→</span>
          <span class="review-fr">{{ w.translation_fr }}</span>
        </div>
      </div>
      <div class="results-actions">
        <button class="btn-primary" @click="restart">Recommencer</button>
        <button class="btn-secondary" @click="router.push('/')">Accueil</button>
      </div>
    </div>

    <div v-else-if="cards.length" class="card-screen">
      <div class="quiz-header">
        <button class="btn-back" @click="router.push('/')">← Quitter</button>
        <span class="counter">{{ idx + 1 }} / {{ total }}</span>
        <span class="score-badge">✓ {{ known }}</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: (idx / total * 100) + '%' }"></div>
      </div>

      <!-- Carte -->
      <div class="card-wrap" @click="flip">
        <div class="card" :class="{ flipped }">
          <div class="card-face card-front">
            <div class="word-term" :class="{ rtl: store.currentLang?.is_rtl }">{{ current.term }}</div>
            <div v-if="current.transliteration" class="word-rom">{{ current.transliteration }}</div>
            <p class="tap-hint">Cliquez pour révéler</p>
          </div>
          <div class="card-face card-back">
            <div class="word-fr">{{ current.translation_fr }}</div>
            <div v-if="current.example_sentence" class="word-ex">{{ current.example_sentence }}</div>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="word-actions">
        <button class="btn-icon" @click.stop="speak">🔊</button>
        <button class="btn-icon" @click.stop="showClue = !showClue">💡</button>
      </div>
      <div v-if="showClue && current.clue" class="clue-box">💡 {{ current.clue }}</div>

      <div v-if="flipped" class="verdict-row">
        <button class="btn-review" @click="decide(false)">✗ À revoir</button>
        <button class="btn-known"  @click="decide(true)">✓ Je savais</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useLangStore } from '@/stores/lang'
import { useAuthStore } from '@/stores/auth'
import { postSession, calcXp } from '@/api/progress'
import { postReview } from '@/api/reviews'
import type { Word } from '@/types'

const store  = useLangStore()
const auth   = useAuthStore()
const router = useRouter()

const cards    = ref<Word[]>([])
const idx      = ref(0)
const known    = ref(0)
const review   = ref<Word[]>([])
const flipped  = ref(false)
const showClue = ref(false)
const done     = ref(false)
const total    = computed(() => cards.value.length)
const current  = computed(() => cards.value[idx.value])

function flip() { flipped.value = true }

function decide(ok: boolean) {
  if (ok) known.value++
  else review.value.push(current.value)
  if (auth.user && store.currentLang) postReview(current.value.id, store.currentLang.code, ok)
  next()
}

function next() {
  if (idx.value + 1 >= total.value) { done.value = true; return }
  idx.value++; flipped.value = false; showClue.value = false
}

function restart() {
  cards.value = [...cards.value].sort(() => Math.random() - 0.5)
  idx.value = 0; known.value = 0; review.value = []
  flipped.value = false; showClue.value = false; done.value = false
}

function speak() {
  const u = new SpeechSynthesisUtterance(current.value.term)
  u.lang = store.currentLang?.voice_locale ?? 'fr-FR'
  speechSynthesis.speak(u)
}

watch(done, (val) => {
  if (!val || !auth.user || !store.currentLang || !store.currentTheme) return
  const t  = total.value
  const xp = calcXp('cards', known.value, t)
  postSession({
    language:  store.currentLang.code,
    theme:     store.currentTheme.key,
    level:     store.currentLevel,
    mode:      'cards',
    score:     Math.round(known.value / t * 100),
    xp_gained: xp,
    correct:   known.value,
    total:     t,
  })
})

onMounted(async () => {
  if (!store.words.length) await store.loadWords()
  cards.value = [...store.words].sort(() => Math.random() - 0.5)
})
</script>

<style scoped>
.cards { max-width: 560px; margin: 0 auto; padding: 1.5rem 1rem; }
.loader { text-align: center; color: var(--muted); margin-top: 4rem; }
.quiz-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; }
.btn-back { background: none; border: none; color: var(--muted); cursor: pointer; font-size: 0.9rem; }
.counter { color: var(--muted2); font-size: 0.9rem; }
.score-badge { background: #22c55e20; color: #22c55e; padding: 0.2rem 0.6rem; border-radius: 20px; font-size: 0.85rem; }
.progress-bar { height: 6px; background: var(--border); border-radius: 3px; margin-bottom: 1.5rem; }
.progress-fill { height: 100%; background: var(--accent); border-radius: 3px; transition: width .3s; }

.card-wrap { perspective: 900px; cursor: pointer; margin-bottom: 1rem; }
.card { position: relative; height: 220px; transform-style: preserve-3d; transition: transform .45s; border-radius: 14px; }
.card.flipped { transform: rotateY(180deg); }
.card-face { position: absolute; inset: 0; backface-visibility: hidden; border-radius: 14px;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; padding: 1.5rem; }
.card-front { background: var(--bg-card); border: 2px solid var(--border); }
.card-back  { background: #1a2e1a; border: 2px solid #22c55e40; transform: rotateY(180deg); }
.word-term { font-size: 2.2rem; font-weight: 700; color: var(--text); text-align: center; }
.word-term.rtl { direction: rtl; }
.word-rom  { color: var(--muted); font-size: 0.95rem; font-style: italic; }
.tap-hint  { color: #555; font-size: 0.8rem; margin-top: 0.5rem; }
.word-fr   { font-size: 1.6rem; font-weight: 600; color: #86efac; text-align: center; }
.word-ex   { font-size: 0.82rem; color: var(--muted2); text-align: center; font-style: italic; }

.word-actions { display: flex; justify-content: center; gap: 0.5rem; margin-bottom: 0.5rem; }
.btn-icon { background: none; border: 2px solid #444; border-radius: 50%; width: 36px; height: 36px; font-size: 1rem; cursor: pointer; }
.btn-icon:hover { border-color: var(--accent); }
.clue-box { text-align: center; background: #2a2000; border: 2px solid #b87a00; border-radius: 8px;
  padding: 0.4rem 1rem; color: #f5d080; font-size: 0.85rem; margin-bottom: 0.75rem; }

.verdict-row { display: flex; gap: 1rem; margin-top: 0.75rem; }
.btn-review { flex: 1; background: #7f1d1d40; border: 2px solid #ef4444; border-radius: 10px;
  color: #fca5a5; padding: 0.7rem; font-size: 1rem; cursor: pointer; }
.btn-known  { flex: 1; background: #14532d40; border: 2px solid #22c55e; border-radius: 10px;
  color: #86efac; padding: 0.7rem; font-size: 1rem; cursor: pointer; }

.results { text-align: center; padding: 2rem 1rem; }
.results-emoji { font-size: 3.5rem; margin-bottom: 0.5rem; }
.score-text { font-size: 1.3rem; color: var(--muted2); margin: 0.5rem 0 1.5rem; }
.review-list { text-align: left; background: var(--bg-card); border-radius: 10px; padding: 0.75rem 1rem; margin-bottom: 1.5rem; }
.review-label { color: var(--muted); font-size: 0.85rem; margin-bottom: 0.5rem; }
.review-item { display: flex; gap: 0.5rem; padding: 0.25rem 0; font-size: 0.9rem; }
.review-term { color: var(--text); }
.review-sep  { color: #555; }
.review-fr   { color: #86efac; }
.results-actions { display: flex; gap: 1rem; justify-content: center; }
.btn-primary  { background: var(--accent); color: white; border: none; border-radius: 8px; padding: 0.7rem 1.8rem; font-size: 1rem; cursor: pointer; }
.btn-secondary { background: var(--border); color: var(--dim); border: none; border-radius: 8px; padding: 0.7rem 1.8rem; font-size: 1rem; cursor: pointer; }
</style>
