<template>
  <div class="fill">
    <div v-if="store.loading" class="loader">Chargement…</div>

    <div v-else-if="done" class="results">
      <div class="results-emoji">{{ score === total ? '🏆' : score >= total * 0.7 ? '🎉' : '💪' }}</div>
      <h2>Session terminée !</h2>
      <p class="score-text">{{ score }} / {{ total }} correctes</p>
      <div class="results-actions">
        <button class="btn-primary" @click="restart">Recommencer</button>
        <button class="btn-secondary" @click="router.push('/')">Accueil</button>
      </div>
    </div>

    <div v-else-if="cards.length" class="quiz-screen">
      <div class="quiz-header">
        <button class="btn-back" @click="router.push('/')">← Quitter</button>
        <span class="counter">{{ idx + 1 }} / {{ total }}</span>
        <span class="score-badge">✓ {{ score }}</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: (idx / total * 100) + '%' }"></div>
      </div>

      <div class="sentence-box" :class="{ rtl: store.currentLang?.is_rtl }">
        {{ blankedBefore }}<span class="blank">_____</span>{{ blankedAfter }}
      </div>

      <div class="word-actions">
        <button class="btn-icon" @click="speak">🔊</button>
        <button class="btn-icon" @click="showClue = !showClue">💡</button>
      </div>
      <div v-if="showClue && current.clue" class="clue-box">💡 {{ current.clue }}</div>
      <div v-if="current.transliteration" class="rom-hint">{{ current.transliteration }}</div>

      <div class="choices">
        <button
          v-for="c in choices"
          :key="c.id"
          class="choice-btn"
          :class="choiceClass(c)"
          :disabled="answered"
          @click="answer(c)"
        >
          {{ c.term }}
        </button>
      </div>

      <div v-if="answered" class="feedback-row">
        <div class="feedback-text" :class="isCorrect ? 'correct' : 'wrong'">
          {{ isCorrect ? '✓ Correct !' : `✗ C'était : ${current.term}` }}
        </div>
        <button class="btn-next" @click="next">Suivant →</button>
      </div>
    </div>

    <div v-else class="no-sentences">
      <p>Aucune phrase d'exemple disponible pour ce thème/niveau.</p>
      <button class="btn-secondary" @click="router.push('/')">← Retour</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useLangStore } from '@/stores/lang'
import type { Word } from '@/types'

const store  = useLangStore()
const router = useRouter()

interface Card { word: Word; choices: Word[] }

const cards     = ref<Card[]>([])
const idx       = ref(0)
const score     = ref(0)
const answered  = ref(false)
const selected  = ref<Word | null>(null)
const showClue  = ref(false)
const done      = ref(false)

const total   = computed(() => cards.value.length)
const current = computed(() => cards.value[idx.value].word)
const choices = computed(() => cards.value[idx.value].choices)
const isCorrect = computed(() => selected.value?.id === current.value.id)

// Split sentence around the target word (case-insensitive)
const blankedBefore = computed(() => {
  const s = current.value.example_sentence ?? ''
  const pos = s.toLowerCase().indexOf(current.value.term.toLowerCase())
  return pos === -1 ? s : s.slice(0, pos)
})
const blankedAfter = computed(() => {
  const s = current.value.example_sentence ?? ''
  const pos = s.toLowerCase().indexOf(current.value.term.toLowerCase())
  return pos === -1 ? '' : s.slice(pos + current.value.term.length)
})

function choiceClass(c: Word) {
  if (!answered.value) return {}
  if (c.id === current.value.id) return { correct: true }
  if (c.id === selected.value?.id) return { wrong: true }
  return {}
}

function answer(c: Word) {
  selected.value = c; answered.value = true
  if (c.id === current.value.id) score.value++
}

function next() {
  if (idx.value + 1 >= total.value) { done.value = true; return }
  idx.value++; answered.value = false; selected.value = null; showClue.value = false
}

function restart() {
  const shuffled = [...store.words.filter(w => w.example_sentence)].sort(() => Math.random() - 0.5)
  cards.value = buildCards(shuffled)
  idx.value = 0; score.value = 0; answered.value = false
  selected.value = null; showClue.value = false; done.value = false
}

function buildCards(words: Word[]): Card[] {
  const pool = store.words
  return words.map(word => {
    const distractors = pool
      .filter(w => w.id !== word.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2)
    const choices = [word, ...distractors].sort(() => Math.random() - 0.5)
    return { word, choices }
  })
}

function speak() {
  const u = new SpeechSynthesisUtterance(current.value.example_sentence ?? current.value.term)
  u.lang = store.currentLang?.voice_locale ?? 'fr-FR'
  speechSynthesis.speak(u)
}

onMounted(async () => {
  if (!store.words.length) await store.loadWords()
  const withSentence = store.words.filter(w => w.example_sentence).sort(() => Math.random() - 0.5)
  cards.value = buildCards(withSentence)
})
</script>

<style scoped>
.fill { max-width: 560px; margin: 0 auto; padding: 1.5rem 1rem; }
.loader { text-align: center; color: #888; margin-top: 4rem; }
.quiz-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; }
.btn-back { background: none; border: none; color: #888; cursor: pointer; font-size: 0.9rem; }
.counter { color: #aaa; font-size: 0.9rem; }
.score-badge { background: #22c55e20; color: #22c55e; padding: 0.2rem 0.6rem; border-radius: 20px; font-size: 0.85rem; }
.progress-bar { height: 6px; background: #333; border-radius: 3px; margin-bottom: 1.5rem; }
.progress-fill { height: 100%; background: #4f46e5; border-radius: 3px; transition: width .3s; }

.sentence-box { font-size: 1.25rem; color: #ddd; text-align: center; line-height: 1.8;
  background: #1e1e2e; border-radius: 12px; padding: 1.25rem; margin-bottom: 1rem; }
.sentence-box.rtl { direction: rtl; }
.blank { color: #4f46e5; font-weight: 700; letter-spacing: 2px; border-bottom: 2px solid #4f46e5; padding: 0 2px; }

.word-actions { display: flex; justify-content: center; gap: 0.5rem; margin-bottom: 0.5rem; }
.btn-icon { background: none; border: 2px solid #444; border-radius: 50%; width: 36px; height: 36px; font-size: 1rem; cursor: pointer; }
.btn-icon:hover { border-color: #4f46e5; }
.clue-box { text-align: center; background: #2a2000; border: 2px solid #b87a00; border-radius: 8px;
  padding: 0.4rem 1rem; color: #f5d080; font-size: 0.85rem; margin-bottom: 0.5rem; }
.rom-hint { text-align: center; color: #666; font-style: italic; font-size: 0.85rem; margin-bottom: 0.75rem; }

.choices { display: flex; flex-direction: column; gap: 0.65rem; margin-bottom: 1rem; }
.choice-btn { background: #1e1e2e; border: 2px solid #444; border-radius: 10px;
  color: #ddd; padding: 0.75rem 1rem; font-size: 1rem; cursor: pointer; text-align: center; transition: border-color .15s; }
.choice-btn:hover:not(:disabled) { border-color: #4f46e5; color: #fff; }
.choice-btn.correct { background: #14532d40; border-color: #22c55e; color: #86efac; }
.choice-btn.wrong   { background: #7f1d1d40; border-color: #ef4444; color: #fca5a5; }
.choice-btn:disabled { cursor: default; }

.feedback-row { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
.feedback-text { font-size: 1rem; font-weight: 600; }
.feedback-text.correct { color: #22c55e; }
.feedback-text.wrong   { color: #ef4444; }
.btn-next { background: #4f46e5; color: white; border: none; border-radius: 8px; padding: 0.6rem 1.4rem; font-size: 0.95rem; cursor: pointer; }

.no-sentences { text-align: center; padding: 3rem 1rem; color: #888; }
.results { text-align: center; padding: 2rem 1rem; }
.results-emoji { font-size: 3.5rem; margin-bottom: 0.5rem; }
.score-text { font-size: 1.3rem; color: #aaa; margin: 0.5rem 0 1.5rem; }
.results-actions { display: flex; gap: 1rem; justify-content: center; }
.btn-primary  { background: #4f46e5; color: white; border: none; border-radius: 8px; padding: 0.7rem 1.8rem; font-size: 1rem; cursor: pointer; }
.btn-secondary { background: #333; color: #ccc; border: none; border-radius: 8px; padding: 0.7rem 1.8rem; font-size: 1rem; cursor: pointer; }
</style>
