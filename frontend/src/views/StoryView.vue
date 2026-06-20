<template>
  <div class="story-view">

    <!-- Chargement -->
    <div v-if="loading" class="loading-state">
      <div class="spinner"></div>
      <p>Chargement des histoires…</p>
    </div>

    <!-- Sélection de l'histoire -->
    <div v-else-if="phase === 'list'" class="story-list">
      <div class="list-header">
        <button class="btn-back" @click="showQuit = true">← Quitter</button>
        <span class="mode-badge">📖 Histoires</span>
      </div>
      <h2>Choisissez une histoire</h2>

      <div class="level-tabs">
        <button
          v-for="lvl in [1, 2, 3]"
          :key="lvl"
          class="level-tab"
          :class="{ active: selectedLevel === lvl }"
          @click="selectedLevel = lvl"
        >
          {{ lvl === 1 ? '⭐ Débutant' : lvl === 2 ? '⭐⭐ Intermédiaire' : '⭐⭐⭐ Avancé' }}
        </button>
      </div>

      <div v-if="!filteredStories.length" class="empty">
        <p>Aucune histoire disponible pour ce niveau.</p>
      </div>

      <div v-else class="story-grid">
        <button
          v-for="s in filteredStories"
          :key="s.id"
          class="story-card"
          @click="startStory(s)"
        >
          <span class="card-emoji">{{ s.emoji }}</span>
          <span class="card-title">{{ s.title_fr }}</span>
          <span class="card-lang">{{ langCode.toUpperCase() }}</span>
        </button>
      </div>
    </div>

    <!-- Lecture avec animation phrase par phrase -->
    <div v-else-if="phase === 'read'" class="read-screen">
      <div class="game-header">
        <button class="btn-back" @click="phase = 'list'">← Histoires</button>
        <span class="mode-badge">📖 {{ currentStory?.emoji }} {{ currentStory?.title_fr }}</span>
        <span class="counter">{{ revealedSentences }} / {{ sentences.length }}</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: (revealedSentences / Math.max(sentences.length,1) * 100) + '%' }"></div>
      </div>

      <div class="story-text" ref="storyEl">
        <TransitionGroup name="sentence-fade" tag="div" class="sentences-wrap">
          <p
            v-for="(sent, i) in visibleSentences"
            :key="i"
            class="sentence"
          >
            <span
              v-for="(tok, j) in sent"
              :key="j"
              class="word-wrap"
            >{{ j > 0 && !tok.punct ? ' ' : '' }}<span
              v-if="!tok.punct"
              class="word"
              :class="{ highlighted: activeWord?.sentIdx === i && activeWord?.tokIdx === j }"
              @click.stop="openWord(tok, i, j, $event)"
            >{{ tok.text }}</span><span
              v-else
              class="punct"
            >{{ tok.text }}</span></span>
          </p>
        </TransitionGroup>

        <button
          v-if="revealedSentences < sentences.length && !revealing"
          class="btn-continue"
          @click="revealNextSentence"
        >
          Continuer ▶
        </button>

        <div v-if="revealedSentences >= sentences.length && !revealing" class="read-done">
          <button class="btn-qcm" @click="startQcm">
            Répondre aux questions →
          </button>
        </div>
      </div>

      <Teleport to="body">
        <div v-if="popup" class="popup-overlay" @click="closePopup"></div>
        <div
          v-if="popup"
          class="word-popup"
          :style="{ top: popup.y + 'px', left: popup.x + 'px' }"
          @click.stop
        >
          <span class="popup-text">{{ popup.text }}</span>
          <span class="popup-arrow">→</span>
          <span class="popup-fr">{{ popup.fr }}</span>
          <button class="popup-tts" @click="speakWord(popup.text)" title="Écouter">🔊</button>
        </div>
      </Teleport>
    </div>

    <!-- QCM compréhension -->
    <div v-else-if="phase === 'qcm'" class="qcm-screen">
      <div class="game-header">
        <button class="btn-back" @click="phase = 'read'">← Relire</button>
        <span class="mode-badge">📖 Compréhension</span>
        <span class="header-status">
          <BlocExerciseScoreBadge :correct="qcmScore" :answered="qcmIndex + (qcmAnswered ? 1 : 0)" />
          <span class="counter">{{ qcmIndex + 1 }} / {{ questions.length }}</span>
        </span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill qcm-fill" :style="{ width: ((qcmIndex + (qcmAnswered ? 1 : 0)) / questions.length * 100) + '%' }"></div>
      </div>

      <Transition name="question-slide" mode="out-in">
        <div :key="qcmIndex" class="question-card">
          <p class="question-text">{{ questions[qcmIndex]?.question_fr }}</p>
          <div class="options-list">
            <button
              v-for="(opt, i) in questions[qcmIndex]?.options"
              :key="i"
              class="opt-btn"
              :class="qcmResult(i)"
              :disabled="qcmAnswered"
              @click="pickQcm(i)"
            >
              <span class="opt-letter">{{ ['A','B','C','D'][i] }}</span>
              <span class="opt-label">{{ opt.text }}</span>
            </button>
          </div>
          <div v-if="qcmAnswered" class="qcm-next-row">
            <div class="feedback-inline" :class="qcmLastCorrect ? 'fb-ok' : 'fb-ko'">
              {{ qcmLastCorrect ? '✓ Correct !' : '✗ Incorrect' }}
            </div>
            <button class="btn-next" @click="nextQcm">
              {{ qcmIndex + 1 >= questions.length ? 'Voir les résultats' : 'Suivant →' }}
            </button>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Résultats -->
    <BlocExerciseResults
      v-else-if="phase === 'results'"
      :correct="qcmScore"
      :total="questions.length"
      title="Histoire terminée !"
      :score-label="`${qcmScore} / ${questions.length} bonnes réponses`"
      :lingos-gained="sessionResult?.lingos_gained ?? 0"
      :lingo-rewards="sessionResult?.lingo_rewards ?? []"
    >
      <template #actions>
        <button class="btn-primary" @click="startStory(currentStory!)">Relire</button>
        <button class="btn-secondary" @click="phase = 'list'">Autres histoires</button>
        <button class="btn-secondary" @click="router.push('/')">Accueil</button>
      </template>
    </BlocExerciseResults>

  </div>

  <ConfirmQuit v-if="showQuit" @cancel="showQuit = false" @confirm="router.push('/')" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import ConfirmQuit from '@/components/ConfirmQuit.vue'
import { useRouter } from 'vue-router'
import { useLangStore } from '@/stores/lang'
import { useSessionRecorder } from '@/composables/useSessionRecorder'
import { BlocExerciseResults, BlocExerciseScoreBadge } from '@/features/exercise/Bloc'
import type { SessionResult } from '@/api/progress'

interface StoryToken  { text: string; fr?: string; punct?: boolean }
interface QcmOption   { text: string }
interface QcmQuestion { question_fr: string; options: QcmOption[]; correctIndex: number }
interface Story {
  id: string; emoji: string; title_fr: string; level?: number
  tokens: StoryToken[]; questions: QcmQuestion[]
}

const store    = useLangStore()
const router   = useRouter()
const showQuit = ref(false)
const { recordSession } = useSessionRecorder()

const loading       = ref(true)
const stories       = ref<Story[]>([])
const selectedLevel = ref(1)
const filteredStories = computed(() => stories.value.filter(s => (s.level ?? 1) === selectedLevel.value))
const currentStory  = ref<Story | null>(null)
const phase        = ref<'list' | 'read' | 'qcm' | 'results'>('list')
const storyEl      = ref<HTMLElement | null>(null)

const sentences         = ref<StoryToken[][]>([])
const revealedSentences = ref(0)
const revealing         = ref(false)
const activeWord        = ref<{ sentIdx: number; tokIdx: number } | null>(null)
const popup             = ref<{ text: string; fr: string; x: number; y: number } | null>(null)
const visibleSentences  = computed(() => sentences.value.slice(0, revealedSentences.value))

const questions      = ref<QcmQuestion[]>([])
const qcmIndex       = ref(0)
const qcmAnswered    = ref(false)
const qcmLastCorrect = ref(false)
const qcmScore       = ref(0)
const qcmSelected    = ref<number | null>(null)
const langCode = computed(() => store.currentLang?.code ?? '')
const sessionResult = ref<SessionResult | null>(null)

const LANG_BCP47: Record<string, string> = {
  es: 'es-ES', en: 'en-US', de: 'de-DE', it: 'it-IT',
  pt: 'pt-PT', nl: 'nl-NL', pl: 'pl-PL', tr: 'tr-TR',
  ru: 'ru-RU', ja: 'ja-JP', ko: 'ko-KR', zh: 'zh-CN',
  ar: 'ar-SA', hi: 'hi-IN',
}

function speakWord(text: string) {
  if (!window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const utt = new SpeechSynthesisUtterance(text)
  utt.lang = LANG_BCP47[langCode.value] ?? langCode.value
  window.speechSynthesis.speak(utt)
}

async function loadStories() {
  loading.value = true
  try {
    const res = await fetch(`/api/stories?lang=${langCode.value}`)
    if (res.ok) stories.value = await res.json()
  } catch { /* réseau indispo */ }
  loading.value = false
}

function tokenizeIntoSentences(tokens: StoryToken[]): StoryToken[][] {
  const result: StoryToken[][] = []
  let current: StoryToken[] = []
  for (const tok of tokens) {
    current.push(tok)
    if (tok.punct && /^[.!?]$/.test(tok.text)) {
      result.push(current)
      current = []
    }
  }
  if (current.length) result.push(current)
  return result
}

function startStory(s: Story) {
  currentStory.value      = s
  sentences.value         = tokenizeIntoSentences(s.tokens)
  revealedSentences.value = 0
  revealing.value         = false
  popup.value             = null
  activeWord.value        = null
  qcmScore.value          = 0
  qcmIndex.value          = 0
  qcmAnswered.value       = false
  qcmSelected.value       = null
  questions.value         = s.questions
  phase.value             = 'read'
  revealNextSentence()
}

async function revealNextSentence() {
  if (revealedSentences.value >= sentences.value.length) return
  revealing.value = true
  revealedSentences.value++
  await new Promise<void>(r => setTimeout(r, 80))
  revealing.value = false
  scrollStory()
  // Lecture automatique de la phrase révélée
  const sent = sentences.value[revealedSentences.value - 1]
  if (sent) {
    const text = sent.filter(t => !t.punct).map(t => t.text).join(' ')
    speakWord(text)
  }
}

function scrollStory() {
  setTimeout(() => {
    if (storyEl.value) storyEl.value.scrollTop = storyEl.value.scrollHeight
  }, 50)
}

function openWord(tok: StoryToken, si: number, ti: number, ev: MouseEvent) {
  if (!tok.fr) return
  activeWord.value = { sentIdx: si, tokIdx: ti }
  const pw = 220
  const x = Math.min(ev.clientX, window.innerWidth - pw - 8)
  const y = ev.clientY - 70
  popup.value = { text: tok.text, fr: tok.fr, x, y }
}

function closePopup() { popup.value = null; activeWord.value = null }

onMounted(async () => {
  await loadStories()
  document.addEventListener('click', closePopup)
})
onBeforeUnmount(() => document.removeEventListener('click', closePopup))

function startQcm() {
  qcmIndex.value    = 0
  qcmScore.value    = 0
  qcmAnswered.value = false
  qcmSelected.value = null
  phase.value       = 'qcm'
}

function qcmResult(i: number) {
  if (!qcmAnswered.value || qcmSelected.value === null) return ''
  if (i === questions.value[qcmIndex.value]?.correctIndex) return 'opt-correct'
  if (i === qcmSelected.value) return 'opt-wrong'
  return ''
}

function pickQcm(i: number) {
  if (qcmAnswered.value) return
  qcmSelected.value    = i
  qcmAnswered.value    = true
  const ok = i === questions.value[qcmIndex.value]?.correctIndex
  qcmLastCorrect.value = ok
  if (ok) qcmScore.value++
}

async function nextQcm() {
  if (qcmIndex.value + 1 >= questions.value.length) {
    phase.value = 'results'
    sessionResult.value = await recordSession('stories', qcmScore.value, questions.value.length, 'general')
    return
  }
  qcmIndex.value++
  qcmAnswered.value = false
  qcmSelected.value = null
}
</script>

<style scoped>
.story-view { max-width: 680px; margin: 0 auto; padding: 1.5rem 1rem; }

.loading-state { text-align: center; padding: 4rem 1rem; color: var(--muted); }
.spinner {
  width: 36px; height: 36px; border: 3px solid var(--border);
  border-top-color: #8b5cf6; border-radius: 50%;
  animation: spin .7s linear infinite; margin: 0 auto 1rem;
}
@keyframes spin { to { transform: rotate(360deg); } }

.list-header, .game-header {
  display: flex; align-items: center; justify-content: space-between; margin-bottom: .75rem;
}
.btn-back   { background: none; border: none; color: var(--muted); cursor: pointer; font-size: .9rem; }
.mode-badge { background: #8b5cf620; color: #a78bfa; padding: .2rem .7rem; border-radius: 20px; font-size: .8rem; }
.counter    { color: var(--muted2); font-size: .9rem; }

.story-list h2 { text-align: center; margin: 1rem 0 1rem; }

.level-tabs {
  display: flex; justify-content: center; gap: .5rem; margin-bottom: 1.25rem; flex-wrap: wrap;
}
.level-tab {
  padding: .4rem 1rem; border-radius: 20px; border: 2px solid var(--border);
  background: transparent; color: var(--dim); cursor: pointer; font-size: .85rem;
  transition: all .2s;
}
.level-tab.active {
  border-color: #8b5cf6; background: #8b5cf620; color: #8b5cf6; font-weight: 600;
}
.level-tab:hover:not(.active) { border-color: var(--muted2); }

.story-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: .75rem;
}
.story-card {
  background: var(--bg-card); border: 2px solid var(--border); border-radius: 12px;
  padding: 1.5rem 1rem; cursor: pointer; display: flex; flex-direction: column;
  align-items: center; gap: .5rem; transition: border-color .2s, transform .15s;
}
.story-card:hover { border-color: #8b5cf6; transform: translateY(-2px); }
.card-emoji { font-size: 2.4rem; }
.card-title { color: var(--dim); font-size: .9rem; font-weight: 600; text-align: center; }
.card-lang  { background: var(--border); color: var(--muted2); padding: .1rem .5rem; border-radius: 10px; font-size: .7rem; }

.progress-bar  { height: 6px; background: var(--border); border-radius: 3px; margin-bottom: 1rem; }
.progress-fill { height: 100%; background: #8b5cf6; border-radius: 3px; transition: width .4s; }
.qcm-fill      { background: #f59e0b; }

.story-text {
  background: #131320; border-radius: 14px; border: 1px solid var(--bg-hover);
  padding: 1.25rem 1.5rem; max-height: 420px; overflow-y: auto;
  line-height: 2; font-size: 1.05rem;
}
.sentences-wrap { }
.sentence { margin: 0 0 .3rem; display: block; }
.word-wrap { display: inline; }
.word {
  cursor: pointer; display: inline;
  border-bottom: 1px dashed transparent;
  transition: border-color .15s, color .15s;
}
.word:hover         { border-bottom-color: #8b5cf6; color: #c4b5fd; }
.word.highlighted   { border-bottom-color: #a78bfa; color: #c4b5fd; }
.punct { display: inline; }

.sentence-fade-enter-active { transition: opacity .45s ease, transform .45s ease; }
.sentence-fade-enter-from   { opacity: 0; transform: translateY(8px); }

.btn-continue {
  display: block; margin: 1.25rem auto 0;
  background: #8b5cf6; color: white; border: none; border-radius: 8px;
  padding: .6rem 1.8rem; font-size: .95rem; font-weight: 700; cursor: pointer;
  transition: background .15s;
}
.btn-continue:hover { background: #7c3aed; }

.read-done { text-align: center; margin-top: 1.5rem; }
.btn-qcm {
  background: #f59e0b; color: #1a1a1a; border: none; border-radius: 8px;
  padding: .7rem 2rem; font-size: 1rem; font-weight: 700; cursor: pointer;
  transition: background .15s;
}
.btn-qcm:hover { background: #d97706; }

.popup-overlay { position: fixed; inset: 0; z-index: 99; }
.word-popup {
  position: fixed; z-index: 100;
  background: #1e1b4b; border: 1px solid #4c1d95; border-radius: 10px;
  padding: .55rem 1rem; display: flex; align-items: center; gap: .5rem;
  box-shadow: 0 8px 24px #00000060; pointer-events: auto; white-space: nowrap;
}
.popup-text { color: #c4b5fd; font-weight: 700; font-size: .95rem; }
.popup-arrow { color: #6d28d9; }
.popup-fr   { color: #e2e8f0; font-size: .9rem; }
.popup-tts  { background: none; border: none; cursor: pointer; font-size: .9rem; padding: 0; opacity: .6; transition: opacity .15s; }
.popup-tts:hover { opacity: 1; }

.qcm-screen { }
.question-card { background: var(--bg-card); border-radius: 14px; border: 1px solid var(--border); padding: 1.5rem; }
.question-text { font-size: 1.05rem; font-weight: 600; margin-bottom: 1.25rem; color: var(--text); line-height: 1.5; }

.options-list { display: flex; flex-direction: column; gap: .55rem; }
.opt-btn {
  background: var(--bg-card); border: 2px solid var(--border); border-radius: 10px;
  padding: .7rem 1rem; cursor: pointer; text-align: left;
  display: flex; align-items: center; gap: .75rem;
  transition: border-color .15s, background .15s;
}
.opt-btn:not(:disabled):hover { border-color: #8b5cf6; background: #1a1230; }
.opt-btn:disabled { cursor: default; }
.opt-letter {
  width: 26px; height: 26px; border-radius: 50%; background: var(--border);
  color: var(--muted2); font-size: .8rem; font-weight: 700;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.opt-label  { color: var(--text); font-size: .92rem; }
.opt-correct { border-color: #22c55e !important; background: #14532d20 !important; }
.opt-wrong   { border-color: #ef4444 !important; background: #7f1d1d20 !important; }
.opt-correct .opt-letter { background: #22c55e; color: white; }
.opt-wrong   .opt-letter { background: #ef4444; color: white; }
.opt-correct .opt-label  { color: var(--success); }
.opt-wrong   .opt-label  { color: var(--danger); }

.question-slide-enter-active { transition: opacity .3s ease, transform .3s ease; }
.question-slide-leave-active { transition: opacity .2s ease, transform .2s ease; }
.question-slide-enter-from   { opacity: 0; transform: translateX(20px); }
.question-slide-leave-to     { opacity: 0; transform: translateX(-20px); }

.qcm-next-row { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-top: 1.25rem; flex-wrap: wrap; }
.feedback-inline { font-weight: 700; font-size: .95rem; }
.fb-ok { color: #86efac; }
.fb-ko { color: #fca5a5; }
.btn-next {
  background: #0ea5e9; color: white; border: none; border-radius: 8px;
  padding: .6rem 1.4rem; font-size: .9rem; font-weight: 700; cursor: pointer;
  white-space: nowrap; margin-left: auto;
}

.results { text-align: center; padding: 3rem 1rem; }
.results-emoji { font-size: 4rem; margin-bottom: .5rem; }
.score-text { font-size: 1.2rem; color: var(--muted2); margin: .5rem 0 2rem; }
.results-actions { display: flex; gap: .75rem; justify-content: center; flex-wrap: wrap; }
.btn-primary   { background: var(--accent); color: white; border: none; border-radius: 8px; padding: .7rem 1.8rem; font-size: 1rem; cursor: pointer; }
.btn-secondary { background: var(--border); color: var(--dim); border: none; border-radius: 8px; padding: .7rem 1.8rem; font-size: 1rem; cursor: pointer; }
.empty { text-align: center; color: var(--muted); padding: 2rem; }


</style>
