<template>
  <div class="quiz">
    <!-- Chargement -->
    <div v-if="store.loading" class="loader">Chargement…</div>

    <!-- Pas de mots -->
    <div v-else-if="!cards.length" class="empty">
      <p>Aucun mot trouvé pour ce niveau.</p>
      <button class="btn-back" @click="router.push('/')">← Retour</button>
    </div>

    <!-- Session terminée -->
    <BlocExerciseResults
      v-else-if="done"
      :correct="score"
      :total="cards.length"
      :score-label="`${score} / ${cards.length} correctes`"
    >
      <template #actions>
        <button class="btn-primary" @click="restart">Recommencer</button>
        <button class="btn-secondary" @click="router.push('/')">Accueil</button>
      </template>
    </BlocExerciseResults>

    <!-- Carte active -->
    <div v-else class="card-screen">
      <div class="quiz-header">
        <button class="btn-back" @click="showQuit = true">← Quitter</button>
        <span class="counter">{{ idx + 1 }} / {{ cards.length }}</span>
        <BlocExerciseScoreBadge :correct="score" :answered="answeredCount" />
      </div>

      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: ((idx) / cards.length * 100) + '%' }"></div>
      </div>

      <p class="question">Quelle est la traduction en français ?</p>

      <!-- Mot cible -->
      <div class="word-block">
        <div class="word-term" :class="{ rtl: store.currentLang?.is_rtl }">{{ current.term }}</div>
        <div v-if="current.transliteration" class="word-rom">{{ current.transliteration }}</div>
        <div class="word-actions">
          <button class="btn-icon" title="Écouter" @click="speak">🔊</button>
          <button class="btn-icon" title="Indice" @click="showClue = true">💡</button>
        </div>
        <div v-if="showClue && current.clue" class="clue-box">💡 {{ current.clue }}</div>
      </div>

      <!-- Choix QCM -->
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

      <div v-if="answered" class="reveal-block">
        <div class="answer-feedback" :class="selected === current.translation_fr ? 'ok' : 'ko'">
          {{ answerFeedback }}
        </div>
        <div class="reveal-pair">
          <span class="reveal-term" :class="{ rtl: store.currentLang?.is_rtl }">{{ current.term }}</span>
          <span class="reveal-arrow">→</span>
          <span class="reveal-fr">{{ current.translation_fr }}</span>
        </div>
        <button class="btn-next" @click="next">
          {{ idx + 1 < cards.length ? 'Suivant →' : 'Voir les résultats' }}
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
import { useSessionRecorder } from '@/composables/useSessionRecorder'
import { postReview } from '@/api/reviews'
import type { Word } from '@/types'
import { speakText } from '@/utils/speech'
import { BlocExerciseResults, BlocExerciseScoreBadge } from '@/features/exercise/Bloc'

const store  = useLangStore()
const showQuit = ref(false)
const auth   = useAuthStore()
const router = useRouter()
const { recordSession } = useSessionRecorder()

const cards    = ref<Word[]>([])
const idx      = ref(0)
const score    = ref(0)
const answered = ref(false)
const selected = ref<string | null>(null)
const showClue = ref(false)
const done     = ref(false)
const choices  = ref<string[]>([])

const current = computed(() => cards.value[idx.value])

const answeredCount = computed(() => idx.value + (answered.value ? 1 : 0))

const performanceRatio = computed(() => {
  if (answeredCount.value <= 0) return 1
  return score.value / answeredCount.value
})

const answerFeedback = computed(() => {
  if (!selected.value) return ''
  if (selected.value === current.value.translation_fr) {
    return performanceRatio.value === 1 ? 'Parfait, garde le rythme !' : 'Bravo, bonne réponse !'
  }
  return 'Pas grave, mémorise la correction.'
})

function buildChoices() {
  if (!current.value) return
  const correct = current.value.translation_fr
  const pool = cards.value
    .map(w => w.translation_fr)
    .filter(t => t !== correct)
  const distractors = pool.sort(() => Math.random() - 0.5).slice(0, 2)
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
  if (auth.user && store.currentLang) postReview(current.value.id, store.currentLang.code, ok)
}

function next() {
  if (idx.value + 1 >= cards.value.length) { done.value = true; return }
  idx.value++
  answered.value = false
  selected.value = null
  showClue.value = false
  buildChoices()
}

function restart() {
  cards.value = [...cards.value].sort(() => Math.random() - 0.5)
  idx.value = 0; score.value = 0; answered.value = false
  selected.value = null; showClue.value = false; done.value = false
  buildChoices()
}

function speak() {
  speakText(current.value.term, store.currentLang?.voice_locale ?? 'fr-FR')
}

watch(done, (val) => {
  if (val) void recordSession('quiz', score.value, cards.value.length)
})

onMounted(async () => {
  if (!store.words.length) await store.loadWords()
  cards.value = [...store.words].sort(() => Math.random() - 0.5)
  buildChoices()
})
</script>

<style scoped>
.quiz { max-width: 560px; margin: 0 auto; padding: 1.5rem 1rem; }
.loader, .empty { text-align: center; color: var(--muted); margin-top: 4rem; }
.quiz-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; }
.btn-back { background: none; border: none; color: var(--muted); cursor: pointer; font-size: 0.9rem; }
.counter { color: var(--muted2); font-size: 0.9rem; }
.progress-bar { height: 6px; background: var(--border); border-radius: 3px; margin-bottom: 1.5rem; }
.progress-fill { height: 100%; background: var(--accent); border-radius: 3px; transition: width .3s; }
.question { text-align: center; color: var(--muted2); margin-bottom: 1rem; }
.word-block { text-align: center; margin-bottom: 1.5rem; }
.word-term { font-size: 2rem; font-weight: 700; color: var(--text); }
.word-term.rtl { direction: rtl; }
.word-rom { color: var(--muted); font-size: 0.95rem; margin-top: 0.25rem; font-style: italic; }
.word-actions { display: flex; justify-content: center; gap: 0.5rem; margin-top: 0.5rem; }
.btn-icon { background: none; border: 2px solid #444; border-radius: 50%; width: 36px; height: 36px;
  font-size: 1rem; cursor: pointer; transition: border-color .2s; }
.btn-icon:hover { border-color: var(--accent); }
.clue-box { margin-top: 0.75rem; background: #2a2000; border: 2px solid #b87a00; border-radius: 8px;
  padding: 0.5rem 1rem; color: #f5d080; font-size: 0.88rem; display: inline-block; }
.choices { display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 1.25rem; }
.choice-btn { background: var(--bg-card); border: 2px solid #444; border-radius: 10px; padding: 0.75rem 1rem;
  color: #ddd; font-size: 1rem; cursor: pointer; text-align: left; transition: border-color .15s; }
.choice-btn:not(:disabled):hover { border-color: var(--accent); }
.reveal-block { margin-top: 1rem; }
.answer-feedback { margin-bottom: .7rem; padding: .55rem .75rem; border-radius: 8px; text-align: center; font-weight: 900; animation: feedback-pop .28s cubic-bezier(.2, 1.4, .4, 1) both; }
.answer-feedback.ok { background: #16a34a20; border: 1px solid #22c55e80; color: #86efac; }
.answer-feedback.ko { background: #ef444420; border: 1px solid #ef444480; color: #fca5a5; }
.reveal-pair { display: flex; align-items: center; justify-content: center; gap: .6rem; padding: .65rem 1rem; background: var(--bg-card); border: 1px solid #22c55e40; border-radius: 8px; margin-bottom: .75rem; flex-wrap: wrap; }
.reveal-term { font-weight: 700; color: var(--text); }
.reveal-arrow { color: var(--muted); }
.reveal-fr { color: #86efac; font-weight: 600; }
.choice-btn.correct { border-color: #22c55e; background: #14532d40; color: #86efac; }
.choice-btn.wrong   { border-color: #ef4444; background: #7f1d1d40; color: #fca5a5; }
.btn-next { width: 100%; background: var(--accent); color: white; border: none; border-radius: 8px;
  padding: 0.75rem; font-size: 1rem; font-weight: 600; cursor: pointer; }
.btn-next:hover { opacity: 0.88; }
.results { text-align: center; padding: 3rem 1rem; }
.results-emoji { font-size: 4rem; margin-bottom: 0.5rem; }
.score-text { font-size: 1.3rem; color: var(--muted2); margin: 0.5rem 0 2rem; }
.results-actions { display: flex; gap: 1rem; justify-content: center; }
.btn-primary { background: var(--accent); color: white; border: none; border-radius: 8px; padding: 0.7rem 1.8rem; font-size: 1rem; cursor: pointer; }
.btn-secondary { background: var(--border); color: var(--dim); border: none; border-radius: 8px; padding: 0.7rem 1.8rem; font-size: 1rem; cursor: pointer; }
@keyframes feedback-pop {
  from { opacity: 0; transform: translateY(8px) scale(.96); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
@media (max-width: 480px) {
  .quiz { padding: 1rem 0.75rem; }
  .word-term { font-size: 1.5rem; }
  .choice-btn { padding: 0.65rem 0.75rem; font-size: 0.9rem; }
  .btn-next { padding: 0.65rem; font-size: 0.9rem; }
}
</style>
