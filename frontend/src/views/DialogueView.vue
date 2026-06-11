<template>
  <div class="dialogue">

    <!-- Sélection du scénario -->
    <div v-if="!current" class="scenario-list">
      <div class="list-header">
        <button class="btn-back" @click="router.push('/')">← Quitter</button>
        <span class="mode-badge">💬 Mini-dialogue</span>
      </div>
      <h2>Choisissez un scénario</h2>

      <div v-if="!scenarios.length" class="empty">
        <p>Aucun dialogue disponible pour cette langue.</p>
        <button class="btn-secondary" @click="router.push('/')">← Retour</button>
      </div>

      <div v-else class="scenario-grid">
        <button
          v-for="s in scenarios"
          :key="s.id"
          class="scenario-card"
          @click="startDialogue(s)"
        >
          <span class="sc-emoji">{{ s.emoji }}</span>
          <span class="sc-title">{{ s.title }}</span>
        </button>
      </div>
    </div>

    <!-- Dialogue en cours -->
    <div v-else-if="!done" class="game-screen">
      <div class="game-header">
        <button class="btn-back" @click="current = null">← Scénarios</button>
        <span class="mode-badge">💬 {{ current.emoji }} {{ current.title }}</span>
        <span class="counter">{{ choicesDone }} / {{ totalChoices }}</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: (choicesDone / totalChoices * 100) + '%' }"></div>
      </div>

      <!-- Historique des lignes -->
      <div class="chat-log" ref="chatLog">
        <div
          v-for="(entry, i) in log"
          :key="i"
          class="chat-entry"
          :class="entry.speaker === 'A' ? 'entry-a' : 'entry-b'"
        >
          <div class="bubble" :dir="isRtl && entry.speaker !== 'B' ? 'rtl' : 'ltr'">
            <span class="bubble-text">{{ entry.text }}</span>
            <span class="bubble-fr">{{ entry.fr }}</span>
          </div>
        </div>
      </div>

      <!-- Choix MCQ -->
      <div v-if="currentStep?.type === 'choice'" class="choices">
        <p class="choice-label">Quelle est la bonne réponse ?</p>
        <button
          v-for="(opt, i) in currentStep.options"
          :key="i"
          class="choice-btn"
          :class="choiceResult(i)"
          :disabled="choiceAnswered"
          @click="pickChoice(i)"
          :dir="isRtl ? 'rtl' : 'ltr'"
        >
          <span class="opt-text">{{ opt.text }}</span>
          <span class="opt-fr">{{ opt.fr }}</span>
        </button>
      </div>

      <!-- Bouton suivant (après réponse) -->
      <div v-if="choiceAnswered" class="next-row">
        <div class="feedback-inline" :class="lastCorrect ? 'fb-ok' : 'fb-ko'">
          {{ lastCorrect ? '✓ Correct !' : '✗ Incorrect' }}
        </div>
        <button class="btn-next" @click="advance">
          {{ stepIndex + 1 >= current.steps.length ? 'Résultats' : 'Suivant →' }}
        </button>
      </div>
    </div>

    <!-- Résultats -->
    <div v-else class="results">
      <div class="results-emoji">{{ score === totalChoices ? '🏆' : score >= totalChoices * 0.7 ? '🎉' : '💪' }}</div>
      <h2>Dialogue terminé !</h2>
      <p class="score-text">{{ score }} / {{ totalChoices }} bonnes réponses</p>
      <div class="results-actions">
        <button class="btn-primary" @click="restartCurrent">Rejouer</button>
        <button class="btn-secondary" @click="current = null">Autres scénarios</button>
        <button class="btn-secondary" @click="router.push('/')">Accueil</button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useLangStore } from '@/stores/lang'
import { useAuthStore } from '@/stores/auth'
import { postSession, calcXp } from '@/api/progress'
import { DIALOGUES, type Dialogue, type DialogueChoice } from '@/data/dialogues'

const store  = useLangStore()
const auth   = useAuthStore()
const router = useRouter()

const current       = ref<Dialogue | null>(null)
const stepIndex     = ref(0)
const log           = ref<{ speaker: 'A' | 'B'; text: string; fr: string }[]>([])
const choiceAnswered = ref(false)
const lastCorrect   = ref(false)
const choicesDone   = ref(0)
const score         = ref(0)
const done          = ref(false)
const chatLog       = ref<HTMLElement | null>(null)
const selectedIndex = ref<number | null>(null)

const langCode  = computed(() => store.currentLang?.code ?? '')
const isRtl     = computed(() => store.currentLang?.is_rtl ?? false)
const scenarios = computed(() => DIALOGUES[langCode.value] ?? [])

const currentStep = computed(() => {
  if (!current.value) return null
  return current.value.steps[stepIndex.value] ?? null
})

const totalChoices = computed(() => {
  if (!current.value) return 0
  return current.value.steps.filter(s => s.type === 'choice').length
})

function choiceResult(i: number) {
  if (!choiceAnswered.value || selectedIndex.value === null) return ''
  const step = currentStep.value as DialogueChoice
  if (i === step.correctIndex) return 'opt-correct'
  if (i === selectedIndex.value) return 'opt-wrong'
  return ''
}

function startDialogue(d: Dialogue) {
  current.value     = d
  stepIndex.value   = 0
  log.value         = []
  choiceAnswered.value = false
  choicesDone.value = 0
  score.value       = 0
  done.value        = false
  selectedIndex.value = null
  // Auto-advance through leading lines
  advanceLines()
}

function advanceLines() {
  const d = current.value
  if (!d) return
  while (stepIndex.value < d.steps.length) {
    const step = d.steps[stepIndex.value]
    if (step.type === 'line') {
      log.value.push({ speaker: step.speaker, text: step.text, fr: step.fr })
      stepIndex.value++
      scrollChat()
    } else {
      break // stop at choice
    }
  }
}

function pickChoice(i: number) {
  if (choiceAnswered.value) return
  const step = currentStep.value as DialogueChoice
  selectedIndex.value  = i
  choiceAnswered.value = true
  choicesDone.value++
  const ok = i === step.correctIndex
  lastCorrect.value = ok
  if (ok) score.value++
  // Add the chosen answer to the log
  const opt = step.options[i]
  log.value.push({ speaker: 'B', text: opt.text, fr: opt.fr })
  scrollChat()
}

function advance() {
  if (!current.value) return
  stepIndex.value++
  choiceAnswered.value = false
  selectedIndex.value  = null
  if (stepIndex.value >= current.value.steps.length) {
    done.value = true
    return
  }
  advanceLines()
}

function restartCurrent() {
  if (current.value) startDialogue(current.value)
}

function scrollChat() {
  nextTick(() => {
    if (chatLog.value) chatLog.value.scrollTop = chatLog.value.scrollHeight
  })
}

// XP
watch(done, (val) => {
  if (!val || !auth.user || !store.currentLang || !store.currentTheme) return
  const xp = calcXp('dialogue', score.value, totalChoices.value)
  postSession({
    language:  store.currentLang.code,
    theme:     store.currentTheme.key,
    level:     store.currentLevel,
    mode:      'dialogue',
    score:     Math.round(score.value / totalChoices.value * 100),
    xp_gained: xp,
    correct:   score.value,
    total:     totalChoices.value,
  })
})
</script>

<style scoped>
.dialogue { max-width: 620px; margin: 0 auto; padding: 1.5rem 1rem; }

/* Header */
.list-header, .game-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: .75rem; }
.btn-back   { background: none; border: none; color: var(--muted); cursor: pointer; font-size: .9rem; }
.mode-badge { background: #0ea5e920; color: #38bdf8; padding: .2rem .7rem; border-radius: 20px; font-size: .8rem; }
.counter    { color: var(--muted2); font-size: .9rem; }

.scenario-list h2 { text-align: center; margin: 1rem 0 1.25rem; }

/* Scenarios */
.scenario-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: .75rem; }
.scenario-card {
  background: var(--bg-card); border: 2px solid var(--border); border-radius: 12px;
  padding: 1.5rem 1rem; cursor: pointer; display: flex; flex-direction: column;
  align-items: center; gap: .5rem; transition: border-color .2s, transform .15s;
}
.scenario-card:hover { border-color: #0ea5e9; transform: translateY(-2px); }
.sc-emoji  { font-size: 2.2rem; }
.sc-title  { color: var(--dim); font-size: .9rem; font-weight: 600; text-align: center; }

/* Progress */
.progress-bar  { height: 6px; background: var(--border); border-radius: 3px; margin-bottom: 1rem; }
.progress-fill { height: 100%; background: #0ea5e9; border-radius: 3px; transition: width .4s; }

/* Chat log */
.chat-log {
  max-height: 340px; overflow-y: auto;
  display: flex; flex-direction: column; gap: .5rem;
  margin-bottom: 1rem; padding: .5rem;
  background: #131320; border-radius: 12px; border: 1px solid var(--bg-hover);
}
.chat-entry { display: flex; }
.entry-a { justify-content: flex-start; }
.entry-b { justify-content: flex-end; }

.bubble {
  max-width: 75%;
  background: var(--bg-card); border-radius: 12px; padding: .6rem .9rem;
  display: flex; flex-direction: column; gap: .15rem;
}
.entry-b .bubble { background: #1e3a5f; }
.bubble-text { color: var(--text); font-size: .92rem; }
.bubble-fr   { color: var(--muted); font-size: .78rem; font-style: italic; }

/* Choices */
.choices { display: flex; flex-direction: column; gap: .5rem; margin-bottom: .75rem; }
.choice-label { color: var(--muted2); font-size: .82rem; margin-bottom: .25rem; }

.choice-btn {
  background: var(--bg-card); border: 2px solid var(--border); border-radius: 10px;
  padding: .65rem 1rem; cursor: pointer; text-align: left;
  display: flex; flex-direction: column; gap: .15rem;
  transition: border-color .15s;
}
.choice-btn:not(:disabled):hover { border-color: #0ea5e9; background: #1a2a3a; }
.choice-btn:disabled { cursor: default; }
.opt-text { color: var(--text); font-size: .92rem; }
.opt-fr   { color: #666; font-size: .78rem; font-style: italic; }

.opt-correct { border-color: #22c55e !important; background: #14532d20 !important; }
.opt-wrong   { border-color: #ef4444 !important; background: #7f1d1d20 !important; }
.opt-correct .opt-text { color: #86efac; }
.opt-wrong   .opt-text { color: #fca5a5; }

/* Next row */
.next-row { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
.feedback-inline { font-weight: 700; font-size: .95rem; }
.fb-ok { color: #86efac; }
.fb-ko { color: #fca5a5; }
.btn-next {
  background: #0ea5e9; color: white; border: none; border-radius: 8px;
  padding: .6rem 1.4rem; font-size: .9rem; font-weight: 700; cursor: pointer;
  white-space: nowrap; margin-left: auto;
}

/* Results */
.results { text-align: center; padding: 3rem 1rem; }
.results-emoji { font-size: 4rem; margin-bottom: .5rem; }
.score-text { font-size: 1.2rem; color: var(--muted2); margin: .5rem 0 2rem; }
.results-actions { display: flex; gap: .75rem; justify-content: center; flex-wrap: wrap; }
.btn-primary   { background: var(--accent); color: white; border: none; border-radius: 8px; padding: .7rem 1.8rem; font-size: 1rem; cursor: pointer; }
.btn-secondary { background: var(--border); color: var(--dim); border: none; border-radius: 8px; padding: .7rem 1.8rem; font-size: 1rem; cursor: pointer; }
.empty { text-align: center; color: var(--muted); padding: 2rem; }
</style>
