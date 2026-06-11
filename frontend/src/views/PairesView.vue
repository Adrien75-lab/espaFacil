<template>
  <div class="paires">
    <div v-if="store.loading" class="loader">Chargement…</div>

    <div v-else-if="!pool.length" class="empty">
      <p>Aucun mot disponible pour ce thème/niveau.</p>
      <button class="btn-secondary" @click="router.push('/')">← Retour</button>
    </div>

    <div v-else-if="done" class="results">
      <div class="results-emoji">{{ mistakes === 0 ? '🏆' : mistakes <= 3 ? '🎉' : '💪' }}</div>
      <h2>Toutes les paires trouvées !</h2>
      <p class="score-text">{{ pairsCount }} paires — {{ mistakes }} erreur{{ mistakes !== 1 ? 's' : '' }}</p>
      <div class="results-actions">
        <button class="btn-primary" @click="restart">Rejouer</button>
        <button class="btn-secondary" @click="router.push('/')">Accueil</button>
      </div>
    </div>

    <div v-else class="game-screen">
      <div class="game-header">
        <button class="btn-back" @click="router.push('/')">← Quitter</button>
        <span class="mode-badge">🃏 Paires</span>
        <span class="counter">{{ matchedCount }} / {{ pairsCount }} paires</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: (matchedCount / pairsCount * 100) + '%' }"></div>
      </div>

      <p class="instruction">Associez chaque mot à sa traduction</p>

      <div class="grid" :class="`cols-${cols}`">
        <button
          v-for="card in cards"
          :key="card.uid"
          class="card"
          :class="{
            flipped:  card.flipped || card.matched,
            matched:  card.matched,
            wrong:    wrongPair.includes(card.uid),
            selected: selected?.uid === card.uid,
          }"
          :disabled="card.matched || card.flipped"
          @click="flip(card)"
        >
          <span class="card-front">?</span>
          <span class="card-back" :dir="card.type === 'term' && store.currentLang?.is_rtl ? 'rtl' : 'ltr'">
            {{ card.text }}
          </span>
        </button>
      </div>

      <p class="mistakes-row">Erreurs : <strong>{{ mistakes }}</strong></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useLangStore } from '@/stores/lang'
import { useAuthStore } from '@/stores/auth'
import { postSession, calcXp } from '@/api/progress'
import type { Word } from '@/types'

const store  = useLangStore()
const auth   = useAuthStore()
const router = useRouter()

interface Card {
  uid:     string   // unique per card instance
  pairId:  number   // shared between term+translation
  type:    'term' | 'translation'
  text:    string
  flipped: boolean
  matched: boolean
}

const pool       = ref<Word[]>([])
const cards      = ref<Card[]>([])
const selected   = ref<Card | null>(null)
const wrongPair  = ref<string[]>([])
const mistakes   = ref(0)
const done       = ref(false)

const PAIR_COUNT = 8   // 8 pairs = 16 cards

const pairsCount  = computed(() => cards.value.length / 2)
const matchedCount = computed(() => cards.value.filter(c => c.matched && c.type === 'term').length)
const cols        = computed(() => pairsCount.value <= 6 ? 3 : 4)

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

function buildCards(words: Word[]) {
  const picked = shuffle(words).slice(0, PAIR_COUNT)
  const c: Card[] = []
  picked.forEach((w, i) => {
    c.push({ uid: `t-${i}`,  pairId: i, type: 'term',        text: w.term,           flipped: false, matched: false })
    c.push({ uid: `tr-${i}`, pairId: i, type: 'translation', text: w.translation_fr, flipped: false, matched: false })
  })
  cards.value = shuffle(c)
}

function flip(card: Card) {
  if (wrongPair.value.length) return   // wait for wrong-pair animation
  if (selected.value === null) {
    card.flipped = true
    selected.value = card
    return
  }
  // Same card clicked again (shouldn't happen, but guard)
  if (selected.value.uid === card.uid) return

  card.flipped = true
  const prev = selected.value
  selected.value = null

  if (prev.pairId === card.pairId) {
    // Match!
    prev.matched = card.matched = true
    if (matchedCount.value === pairsCount.value) {
      setTimeout(() => { done.value = true }, 400)
    }
  } else {
    // Wrong pair
    mistakes.value++
    wrongPair.value = [prev.uid, card.uid]
    setTimeout(() => {
      prev.flipped = card.flipped = false
      wrongPair.value = []
    }, 1000)
  }
}

function restart() {
  mistakes.value = 0
  done.value     = false
  selected.value = null
  wrongPair.value = []
  buildCards(pool.value)
}

// XP when done
watch(done, (val) => {
  if (!val || !auth.user || !store.currentLang || !store.currentTheme) return
  const total  = pairsCount.value
  const errors = mistakes.value
  // Treat "correct" inversely to mistakes: max correct = total, lose 1 per mistake
  const correct = Math.max(0, total - errors)
  const xp = calcXp('paires', correct, total)
  postSession({
    language:  store.currentLang.code,
    theme:     store.currentTheme.key,
    level:     store.currentLevel,
    mode:      'paires',
    score:     Math.round(correct / total * 100),
    xp_gained: xp,
    correct,
    total,
  })
})

onMounted(async () => {
  if (!store.words.length) await store.loadWords()
  pool.value = store.words
  buildCards(pool.value)
})
</script>

<style scoped>
.paires { max-width: 680px; margin: 0 auto; padding: 1.5rem 1rem; }
.loader { text-align: center; color: var(--muted); margin-top: 4rem; }
.empty  { text-align: center; padding: 3rem 1rem; color: var(--muted); }

.game-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: .75rem; }
.btn-back  { background: none; border: none; color: var(--muted); cursor: pointer; font-size: .9rem; }
.mode-badge { background: #7c3aed20; color: #c4b5fd; padding: .2rem .7rem; border-radius: 20px; font-size: .8rem; }
.counter   { color: var(--muted2); font-size: .9rem; }

.progress-bar  { height: 6px; background: var(--border); border-radius: 3px; margin-bottom: 1rem; }
.progress-fill { height: 100%; background: #7c3aed; border-radius: 3px; transition: width .4s; }

.instruction { text-align: center; color: var(--muted); font-size: .88rem; margin-bottom: 1.25rem; }

/* Grid */
.grid { display: grid; gap: .6rem; }
.grid.cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid.cols-4 { grid-template-columns: repeat(4, 1fr); }

/* Card flip */
.card {
  position: relative;
  aspect-ratio: 1.6;
  border: 2px solid var(--border);
  border-radius: 10px;
  cursor: pointer;
  background: var(--bg-card);
  transition: border-color .15s, transform .15s;
  overflow: hidden;
  padding: 0;
}
.card:hover:not(:disabled) { border-color: #7c3aed; transform: translateY(-2px); }
.card:disabled { cursor: default; }

.card-front, .card-back {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: .88rem; font-weight: 600; padding: .3rem .4rem;
  text-align: center; line-height: 1.3;
  backface-visibility: hidden;
  transition: opacity .2s;
}
.card-front { color: #555; font-size: 1.4rem; opacity: 1; }
.card-back  { color: var(--text); opacity: 0; }

.card.flipped .card-front,
.card.matched .card-front { opacity: 0; }
.card.flipped .card-back,
.card.matched .card-back  { opacity: 1; }

.card.selected { border-color: #f59e0b; background: #2a2000; }
.card.matched  { border-color: #22c55e; background: #14532d30; cursor: default; }
.card.wrong    { border-color: #ef4444; background: #7f1d1d30; animation: shake .3s; }

@keyframes shake {
  0%,100% { transform: translateX(0); }
  25%     { transform: translateX(-4px); }
  75%     { transform: translateX(4px); }
}

.mistakes-row { text-align: center; color: var(--muted); font-size: .88rem; margin-top: 1rem; }
.mistakes-row strong { color: #fca5a5; }

/* Results */
.results { text-align: center; padding: 3rem 1rem; }
.results-emoji { font-size: 4rem; margin-bottom: .5rem; }
.score-text { font-size: 1.2rem; color: var(--muted2); margin: .5rem 0 2rem; }
.results-actions { display: flex; gap: 1rem; justify-content: center; }
.btn-primary   { background: var(--accent); color: white; border: none; border-radius: 8px; padding: .7rem 1.8rem; font-size: 1rem; cursor: pointer; }
.btn-secondary { background: var(--border); color: var(--dim); border: none; border-radius: 8px; padding: .7rem 1.8rem; font-size: 1rem; cursor: pointer; }
</style>
