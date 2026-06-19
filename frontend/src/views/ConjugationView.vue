<template>
  <div class="conj-wrap">
    <ConfirmQuit v-if="showQuit" @cancel="showQuit = false" @confirm="router.push('/')" />

    <!-- ── Phase SÉLECTION ── -->
    <div v-if="loading" class="loader">Chargement…</div>

    <template v-else-if="phase === 'select'">
      <button class="btn-back" @click="router.push('/')">← Retour</button>
      <h1>🔀 Conjugaison — {{ langName }}</h1>

      <p class="subtitle">Choisissez un verbe</p>
      <div class="verb-grid">
        <button
          v-for="(verb, i) in verbs"
          :key="i"
          class="verb-card"
          :class="{ active: selectedVerbIdx === i }"
          @click="selectedVerbIdx = i"
        >
          <span class="verb-inf">{{ verb.infinitive }}</span>
          <span class="verb-fr">{{ verb.translation }}</span>
        </button>
      </div>

      <p class="subtitle" style="margin-top:1.5rem">Choisissez un temps</p>
      <div class="tense-row">
        <button
          v-for="tname in tenseNames"
          :key="tname"
          class="tense-btn"
          :class="{ active: selectedTense === tname }"
          @click="selectedTense = tname"
        >{{ tname }}</button>
      </div>

      <button
        class="btn-start"
        :disabled="selectedVerbIdx === null || !selectedTense"
        @click="phase = 'fiche'"
      >📖 Voir la fiche</button>
    </template>

    <!-- ── Phase FICHE DE RÉVISION ── -->
    <template v-else-if="phase === 'fiche'">
      <button class="btn-back" @click="phase = 'select'">← Modifier</button>

      <div class="fiche-header">
        <h2 class="fiche-verb">{{ currentVerb.infinitive }}</h2>
        <span class="fiche-fr">{{ currentVerb.translation }}</span>
        <span class="fiche-tense-badge">{{ selectedTense }}</span>
      </div>

      <div class="fiche-table">
        <div
          v-for="entry in currentTenseEntries"
          :key="entry.pronoun"
          class="fiche-row"
        >
          <span class="fiche-pronoun">{{ entry.pronoun }}</span>
          <span class="fiche-arrow">→</span>
          <span class="fiche-form">{{ entry.form }}</span>
        </div>
      </div>

      <p class="fiche-tip">💡 Mémorisez ces formes, puis testez-vous !</p>

      <div class="fiche-actions">
        <button class="btn-start" @click="startQuiz">🧠 Je me teste !</button>
        <button class="btn-other-tense" @click="phase = 'select'">Changer de verbe / temps</button>
      </div>
    </template>

    <!-- ── Phase QUIZ ── -->
    <template v-else-if="phase === 'quiz'">
      <button class="btn-quit" @click="showQuit = true">✕ Quitter</button>

      <div class="quiz-header">
        <div class="verb-badge">{{ currentVerb.infinitive }} <span class="verb-fr-sm">({{ currentVerb.translation }})</span></div>
        <div class="tense-badge">{{ selectedTense }}</div>
        <BlocExerciseScoreBadge :correct="score" :answered="answers.length" />
        <button class="btn-fiche-link" @click="phase = 'fiche'">📖 Revoir la fiche</button>
      </div>

      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: (currentIdx / totalItems * 100) + '%' }"></div>
      </div>
      <p class="progress-text">{{ currentIdx + 1 }} / {{ totalItems }}</p>

      <div class="pronoun-card">
        <span class="pronoun-label">{{ currentEntry.pronoun }}</span>
        <span class="pronoun-hint">→ ?</span>
      </div>

      <div v-if="showCorrection" class="correction-box" :class="lastCorrect ? 'correct' : 'wrong'">
        <span v-if="lastCorrect">✅ Correct !</span>
        <span v-else>❌ <b>{{ currentEntry.form }}</b></span>
      </div>

      <div v-else class="input-row">
        <input
          ref="inputRef"
          v-model="userInput"
          class="conj-input"
          type="text"
          placeholder="Forme conjuguée…"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          @keydown.enter="validate"
        />
        <button class="btn-validate" @click="validate">Valider</button>
      </div>
    </template>

    <!-- ── Phase RÉSULTAT ── -->
    <BlocExerciseResults
      v-else-if="phase === 'result'"
      :correct="score"
      :total="totalItems"
      title="Conjugaison terminée !"
      :score-label="`${score} / ${totalItems} correctes`"
    >
      <p class="result-sub">{{ resultMessage }}</p>

      <div class="result-table">
        <div v-for="(a, i) in answers" :key="i" class="result-row" :class="a.correct ? 'ok' : 'ko'">
          <span class="r-pron">{{ a.pronoun }}</span>
          <span class="r-sep">→</span>
          <span class="r-user">{{ a.userAnswer || '—' }}</span>
          <span class="r-icon">{{ a.correct ? '✅' : '❌' }}</span>
          <span v-if="!a.correct" class="r-correct">{{ a.correctAnswer }}</span>
        </div>
      </div>

      <template #actions>
        <button class="btn-replay" @click="restartSame">🔁 Rejouer</button>
        <button class="btn-back2" @click="phase = 'fiche'">📖 Revoir la fiche</button>
        <button class="btn-home" @click="router.push('/')">🏠 Accueil</button>
      </template>
    </BlocExerciseResults>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useLangStore } from '@/stores/lang'
import ConfirmQuit from '@/components/ConfirmQuit.vue'
import { useSessionRecorder } from '@/composables/useSessionRecorder'
import { normalizeText } from '@/utils/textMatching'
import { getConjugations } from '@/api/content'
import type { ConjugationVerb } from '@/types'
import { BlocExerciseResults, BlocExerciseScoreBadge } from '@/features/exercise/Bloc'

const router   = useRouter()
const store    = useLangStore()
const showQuit = ref(false)
const { recordSession } = useSessionRecorder()

const langCode = computed(() => store.currentLang?.code ?? 'es')
const langName = computed(() => store.currentLang?.name ?? 'Espagnol')
const verbs    = ref<ConjugationVerb[]>([])
const loading  = ref(true)

const tenseNames = computed(() => {
  const v = verbs.value[0]
  return v ? Object.keys(v.tenses) : []
})

// ─── selection state ───
const selectedVerbIdx = ref<number | null>(null)
const selectedTense   = ref<string>('')

async function loadVerbs() {
  loading.value = true
  selectedVerbIdx.value = null
  selectedTense.value = ''
  phase.value = 'select'
  try {
    verbs.value = await getConjugations(langCode.value)
  } catch {
    verbs.value = []
  } finally {
    loading.value = false
  }
}

const currentVerb = computed(() =>
  selectedVerbIdx.value !== null ? verbs.value[selectedVerbIdx.value] : verbs.value[0]
)
const currentTenseEntries = computed(() =>
  selectedTense.value && currentVerb.value
    ? (currentVerb.value.tenses[selectedTense.value] ?? [])
    : []
)

// ─── quiz state ───
type Phase = 'select' | 'fiche' | 'quiz' | 'result'
const phase        = ref<Phase>('select')
const currentIdx   = ref(0)
const userInput    = ref('')
const showCorrection = ref(false)
const lastCorrect  = ref(false)
const inputRef     = ref<HTMLInputElement | null>(null)

interface Answer { pronoun: string; userAnswer: string; correctAnswer: string; correct: boolean }
const answers = ref<Answer[]>([])
const score   = ref(0)

const totalItems   = computed(() => currentTenseEntries.value.length)
const currentEntry = computed(() => currentTenseEntries.value[currentIdx.value] ?? { pronoun: '', form: '' })

const resultMessage = computed(() => {
  const pct = totalItems.value ? score.value / totalItems.value : 0
  if (pct === 1)    return 'Parfait ! Vous maîtrisez ce verbe.'
  if (pct >= 0.8)   return 'Très bien ! Quelques petites erreurs.'
  if (pct >= 0.5)   return 'Pas mal ! Continuez à pratiquer.'
  return 'Courage ! Repassez la fiche et réessayez.'
})

onMounted(loadVerbs)
watch(langCode, loadVerbs)

function startQuiz() {
  answers.value    = []
  score.value      = 0
  currentIdx.value = 0
  userInput.value  = ''
  showCorrection.value = false
  phase.value = 'quiz'
  nextTick(() => inputRef.value?.focus())
}

function validate() {
  if (showCorrection.value) return
  const entry   = currentEntry.value
  const correct = normalizeText(userInput.value) === normalizeText(entry.form)

  answers.value.push({ pronoun: entry.pronoun, userAnswer: userInput.value.trim(), correctAnswer: entry.form, correct })
  if (correct) score.value++

  lastCorrect.value    = correct
  showCorrection.value = true

  setTimeout(() => {
    showCorrection.value = false
    userInput.value = ''
    if (currentIdx.value + 1 < totalItems.value) {
      currentIdx.value++
      nextTick(() => inputRef.value?.focus())
    } else {
      finishQuiz()
    }
  }, correct ? 700 : 1400)
}

async function finishQuiz() {
  phase.value = 'result'
  await recordSession('conjugaison', score.value, totalItems.value, 'conjugaison')
}

function restartSame() {
  answers.value    = []
  score.value      = 0
  currentIdx.value = 0
  userInput.value  = ''
  showCorrection.value = false
  phase.value = 'quiz'
  nextTick(() => inputRef.value?.focus())
}
</script>

<style scoped>
.conj-wrap { max-width: 640px; margin: 0 auto; padding: 2rem 1rem; }

.btn-back  { background: none; border: none; color: var(--muted); cursor: pointer; font-size: 0.9rem; margin-bottom: 1rem; display: block; }
.btn-quit  { background: none; border: 1px solid var(--border); border-radius: 6px; color: var(--muted); cursor: pointer; font-size: 0.82rem; padding: 0.3rem 0.75rem; float: right; }

h1 { font-size: 1.6rem; margin-bottom: 1rem; }
.subtitle { color: var(--muted); margin-bottom: 0.75rem; }

/* Verb grid */
.verb-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 0.6rem; margin-bottom: 1rem; }
.verb-card { background: var(--bg-card); border: 2px solid var(--border); border-radius: 10px; padding: 0.75rem 0.5rem;
  cursor: pointer; transition: border-color .2s; display: flex; flex-direction: column; align-items: center; gap: 0.25rem; }
.verb-card:hover, .verb-card.active { border-color: var(--accent); background: var(--bg-hover); }
.verb-inf { font-size: 1rem; font-weight: 700; color: var(--text); }
.verb-fr  { font-size: 0.78rem; color: var(--muted); }

/* Tense row */
.tense-row { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem; }
.tense-btn { background: var(--bg-card); border: 2px solid var(--border); border-radius: 20px;
  padding: 0.4rem 1rem; cursor: pointer; color: var(--dim); font-size: 0.88rem; transition: border-color .2s; }
.tense-btn:hover, .tense-btn.active { border-color: var(--accent); color: var(--text); background: var(--bg-hover); }

.btn-start { background: var(--accent); color: white; border: none; border-radius: 8px;
  padding: 0.75rem 2rem; font-size: 1rem; font-weight: 700; cursor: pointer; transition: opacity .2s; }
.btn-start:disabled { opacity: 0.4; cursor: not-allowed; }
.btn-start:not(:disabled):hover { opacity: 0.88; }

/* ── Fiche de révision ── */
.fiche-header { display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
.fiche-verb   { font-size: 1.8rem; font-weight: 800; color: var(--text); margin: 0; }
.fiche-fr     { font-size: 1rem; color: var(--muted); }
.fiche-tense-badge { background: var(--accent); color: white; border-radius: 6px; padding: 0.2rem 0.7rem; font-size: 0.85rem; font-weight: 600; }

.fiche-table { background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px;
  overflow: hidden; margin-bottom: 1.25rem; }
.fiche-row { display: flex; align-items: center; gap: 1rem; padding: 0.75rem 1.25rem;
  border-bottom: 1px solid var(--border); }
.fiche-row:last-child { border-bottom: none; }
.fiche-row:nth-child(odd)  { background: var(--bg-hover); }
.fiche-pronoun { font-weight: 700; color: var(--text); min-width: 110px; font-size: 1rem; }
.fiche-arrow   { color: var(--muted); }
.fiche-form    { font-size: 1.1rem; color: var(--accent); font-weight: 600; }

.fiche-tip { text-align: center; color: var(--muted); font-size: 0.88rem; margin-bottom: 1.25rem; }
.fiche-actions { display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap; }
.btn-other-tense { background: none; border: 1px solid var(--border); border-radius: 8px; color: var(--muted);
  padding: 0.65rem 1.2rem; cursor: pointer; font-size: 0.88rem; }
.btn-other-tense:hover { border-color: var(--accent); color: var(--text); }

/* ── Quiz ── */
.quiz-header { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1rem; flex-wrap: wrap; }
.verb-badge      { background: var(--accent); color: white; border-radius: 8px; padding: 0.4rem 0.9rem; font-weight: 700; font-size: 1rem; }
.verb-fr-sm      { font-weight: 400; opacity: 0.85; font-size: 0.88rem; }
.tense-badge     { background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; padding: 0.35rem 0.8rem; color: var(--muted); font-size: 0.85rem; }
.btn-fiche-link  { margin-left: auto; background: none; border: 1px solid var(--border); border-radius: 6px;
  color: var(--muted); cursor: pointer; font-size: 0.82rem; padding: 0.3rem 0.75rem; }
.btn-fiche-link:hover { border-color: var(--accent); color: var(--text); }

.progress-bar  { background: var(--border); border-radius: 4px; height: 6px; margin-bottom: 0.25rem; overflow: hidden; }
.progress-fill { background: var(--accent); height: 100%; border-radius: 4px; transition: width .3s; }
.progress-text { text-align: right; font-size: 0.8rem; color: var(--muted); margin-bottom: 1.5rem; }

.pronoun-card { background: var(--bg-card); border: 2px solid var(--border); border-radius: 12px;
  padding: 1.5rem; text-align: center; margin-bottom: 1.25rem; }
.pronoun-label { font-size: 2rem; font-weight: 700; color: var(--text); }
.pronoun-hint  { font-size: 1.5rem; color: var(--muted); margin-left: 0.5rem; }

.input-row { display: flex; gap: 0.5rem; }
.conj-input { flex: 1; padding: 0.7rem 1rem; border: 2px solid var(--border); border-radius: 8px;
  background: var(--bg-card); color: var(--text); font-size: 1rem; outline: none; transition: border-color .2s; }
.conj-input:focus { border-color: var(--accent); }
.btn-validate { background: var(--accent); color: white; border: none; border-radius: 8px;
  padding: 0.7rem 1.4rem; font-size: 0.95rem; font-weight: 700; cursor: pointer; }
.btn-validate:hover { opacity: 0.88; }

.correction-box { padding: 1rem 1.5rem; border-radius: 10px; font-size: 1.1rem; text-align: center; }
.correction-box.correct { background: #16a34a22; border: 2px solid #16a34a; color: #4ade80; }
.correction-box.wrong   { background: #ef444422; border: 2px solid #ef4444; color: #fca5a5; }

/* ── Résultat ── */
.result-title { font-size: 2rem; text-align: center; margin-bottom: 0.5rem; }
.result-sub   { text-align: center; color: var(--muted); margin-bottom: 1.5rem; }

.result-table { display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 1.5rem; }
.result-row   { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0.75rem; border-radius: 8px; font-size: 0.92rem; }
.result-row.ok { background: #16a34a15; }
.result-row.ko { background: #ef444415; }
.r-pron    { font-weight: 600; color: var(--text); min-width: 100px; }
.r-sep     { color: var(--muted); }
.r-user    { flex: 1; color: var(--dim); }
.r-icon    { font-size: 1rem; }
.r-correct { color: #4ade80; font-weight: 600; font-size: 0.88rem; }

.result-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; justify-content: center; }
.btn-replay { background: var(--accent); color: white; border: none; border-radius: 8px; padding: 0.65rem 1.4rem; font-weight: 700; cursor: pointer; }
.btn-back2  { background: var(--bg-card); border: 2px solid var(--border); color: var(--dim); border-radius: 8px; padding: 0.65rem 1.4rem; cursor: pointer; }
.btn-home   { background: var(--bg-card); border: 2px solid var(--border); color: var(--dim); border-radius: 8px; padding: 0.65rem 1.4rem; cursor: pointer; }
.btn-replay:hover, .btn-back2:hover, .btn-home:hover { opacity: 0.8; }

@media (max-width: 480px) {
  h1 { font-size: 1.25rem; }
  .verb-grid { grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 0.4rem; }
  .verb-card { padding: 0.55rem 0.4rem; }
  .verb-inf { font-size: 0.88rem; }
  .fiche-verb { font-size: 1.4rem; }
  .fiche-pronoun { min-width: 80px; font-size: 0.88rem; }
  .fiche-form { font-size: 0.95rem; }
  .fiche-row { padding: 0.6rem 0.9rem; gap: 0.6rem; }
  .pronoun-label { font-size: 1.5rem; }
  .pronoun-hint { font-size: 1.15rem; }
  .pronoun-card { padding: 1rem; }
  .btn-start { padding: 0.65rem 1.2rem; font-size: 0.92rem; }
  .fiche-actions { flex-direction: column; }
  .fiche-actions .btn-start,
  .fiche-actions .btn-other-tense { width: 100%; text-align: center; }
  .result-title { font-size: 1.5rem; }
  .result-actions { flex-direction: column; }
  .btn-replay, .btn-back2, .btn-home { width: 100%; text-align: center; }
  .r-pron { min-width: 70px; font-size: 0.82rem; }
  .input-row { flex-direction: column; }
  .btn-validate { width: 100%; }
}
</style>
