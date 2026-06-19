<template>
  <div class="review">
    <!-- Chargement -->
    <div v-if="loading" class="loader">Chargement des révisions…</div>

    <!-- Aucun mot à réviser -->
    <div v-else-if="!loading && cards.length === 0" class="empty">
      <div class="empty-icon">🎉</div>
      <h2>Rien à réviser !</h2>
      <p>Tous tes mots sont à jour. Reviens plus tard.</p>
      <button class="btn-secondary" @click="router.push('/')">← Accueil</button>
    </div>

    <!-- Session terminée -->
    <BlocExerciseResults
      v-else-if="done"
      :correct="score"
      :total="total"
      title="Révision terminée !"
      :score-label="`${score} / ${total} correctes`"
    >
      <template #actions>
        <button class="btn-primary" @click="reload">Recommencer</button>
        <button class="btn-secondary" @click="router.push('/')">Accueil</button>
      </template>
    </BlocExerciseResults>

    <!-- Carte active -->
    <div v-else class="card-screen">
      <div class="quiz-header">
        <button class="btn-back" @click="router.push('/')">← Quitter</button>
        <span class="mode-badge">🔁 Révision SRS</span>
        <span class="header-status">
          <BlocExerciseScoreBadge :correct="score" :answered="idx + (answered ? 1 : 0)" />
          <span class="counter">{{ idx + 1 }} / {{ total }}</span>
        </span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: (idx / total * 100) + '%' }"></div>
      </div>

      <p class="question">Quelle est la traduction ?</p>

      <div class="word-block">
        <div class="word-term" :class="{ rtl: store.currentLang?.is_rtl }">{{ current.term }}</div>
        <div v-if="current.transliteration" class="word-rom">{{ current.transliteration }}</div>
        <div class="word-actions">
          <button class="btn-icon" @click="speak">🔊</button>
        </div>
        <div v-if="current.times_wrong > 0" class="srs-hint">
          ⚠️ Raté {{ current.times_wrong }}× / vu {{ current.times_seen }}×
        </div>
      </div>

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

      <button v-if="answered" class="btn-next" @click="next">
        {{ idx + 1 < total ? 'Suivant →' : 'Voir les résultats' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useLangStore } from '@/stores/lang'
import { fetchDue, postReview, type ReviewWord } from '@/api/reviews'
import { speakText } from '@/utils/speech'
import { BlocExerciseResults, BlocExerciseScoreBadge } from '@/features/exercise/Bloc'

const store  = useLangStore()
const router = useRouter()

const cards    = ref<ReviewWord[]>([])
const idx      = ref(0)
const score    = ref(0)
const answered = ref(false)
const selected = ref<string | null>(null)
const done     = ref(false)
const loading  = ref(true)
const choices  = ref<string[]>([])

const total   = computed(() => cards.value.length)
const current = computed(() => cards.value[idx.value])

function buildChoices() {
  if (!current.value) return
  const correct = current.value.translation_fr
  const pool = cards.value.map(w => w.translation_fr).filter(t => t !== correct)
  const distractors = [...pool].sort(() => Math.random() - 0.5).slice(0, 2)
  choices.value = [...distractors, correct].sort(() => Math.random() - 0.5)
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
  // POST SRS résultat silencieux
  if (store.currentLang) {
    postReview(current.value.id, store.currentLang.code, ok)
  }
}

function next() {
  if (idx.value + 1 >= total.value) { done.value = true; return }
  idx.value++
  answered.value = false
  selected.value = null
  buildChoices()
}

function speak() {
  speakText(current.value.term, store.currentLang?.voice_locale ?? 'fr-FR')
}

async function reload() {
  loading.value = true
  idx.value = 0; score.value = 0; answered.value = false
  selected.value = null; done.value = false
  await load()
}

async function load() {
  if (!store.currentLang) { loading.value = false; return }
  cards.value = await fetchDue(store.currentLang.code, 30)
  loading.value = false
  if (cards.value.length) buildChoices()
}

onMounted(async () => {
  if (!store.currentLang) await store.loadWords()
  await load()
})
</script>

<style scoped>
.review { max-width: 560px; margin: 0 auto; padding: 1.5rem 1rem; }
.loader { text-align: center; color: var(--muted); margin-top: 4rem; }
.empty { text-align: center; padding: 3rem 1rem; }
.empty-icon { font-size: 3rem; margin-bottom: .5rem; }
.empty h2 { color: var(--text); margin-bottom: .5rem; }
.empty p  { color: var(--muted); margin-bottom: 1.5rem; }
.quiz-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: .75rem; }
.btn-back { background: none; border: none; color: var(--muted); cursor: pointer; font-size: .9rem; }
.mode-badge { background: var(--accent)20; color: #a5b4fc; padding: .2rem .7rem; border-radius: 20px; font-size: .8rem; }
.counter { color: var(--muted2); font-size: .9rem; }
.progress-bar { height: 6px; background: var(--border); border-radius: 3px; margin-bottom: 1.5rem; }
.progress-fill { height: 100%; background: var(--accent); border-radius: 3px; transition: width .3s; }
.question { text-align: center; color: var(--muted2); margin-bottom: 1rem; }
.word-block { text-align: center; margin-bottom: 1.5rem; }
.word-term { font-size: 2rem; font-weight: 700; color: var(--text); }
.word-term.rtl { direction: rtl; }
.word-rom  { color: var(--muted); font-size: .95rem; margin-top: .25rem; font-style: italic; }
.word-actions { display: flex; justify-content: center; gap: .5rem; margin-top: .5rem; }
.btn-icon { background: none; border: 2px solid #444; border-radius: 50%; width: 36px; height: 36px; font-size: 1rem; cursor: pointer; }
.btn-icon:hover { border-color: var(--accent); }
.srs-hint { margin-top: .5rem; color: #f59e0b; font-size: .8rem; }
.choices { display: flex; flex-direction: column; gap: .6rem; margin-bottom: 1.25rem; }
.choice-btn { background: var(--bg-card); border: 2px solid #444; border-radius: 10px; padding: .75rem 1rem;
  color: #ddd; font-size: 1rem; cursor: pointer; text-align: left; transition: border-color .15s; }
.choice-btn:not(:disabled):hover { border-color: var(--accent); }
.choice-btn.correct { border-color: #22c55e; background: #14532d40; color: #86efac; }
.choice-btn.wrong   { border-color: #ef4444; background: #7f1d1d40; color: #fca5a5; }
.btn-next { width: 100%; background: var(--accent); color: white; border: none; border-radius: 8px;
  padding: .75rem; font-size: 1rem; font-weight: 600; cursor: pointer; }
.btn-next:hover { opacity: .88; }
.results { text-align: center; padding: 3rem 1rem; }
.results-emoji { font-size: 4rem; margin-bottom: .5rem; }
.score-text { font-size: 1.3rem; color: var(--muted2); margin: .5rem 0 2rem; }
.results-actions { display: flex; gap: 1rem; justify-content: center; }
.btn-primary   { background: var(--accent); color: white; border: none; border-radius: 8px; padding: .7rem 1.8rem; font-size: 1rem; cursor: pointer; }
.btn-secondary { background: var(--border); color: var(--dim); border: none; border-radius: 8px; padding: .7rem 1.8rem; font-size: 1rem; cursor: pointer; }

@media (max-width: 480px) {
  .review { padding: 1rem .5rem; }
  .word-term { font-size: 1.5rem; }
  .empty-icon { font-size: 2.4rem; }
  .results-emoji { font-size: 3rem; }
  .score-text { font-size: 1rem; }
  .btn-primary, .btn-secondary { width: 100%; }
  .results-actions { flex-direction: column; }
}
</style>
