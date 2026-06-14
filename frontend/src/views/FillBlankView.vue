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
        <button class="btn-back" @click="showQuit = true">← Quitter</button>
        <span class="counter">{{ idx + 1 }} / {{ total }}</span>
        <span class="score-badge">✓ {{ score }}</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: (idx / total * 100) + '%' }"></div>
      </div>

      <!-- Phrase avec gloss interactif -->
      <div class="sentence-box" :class="{ rtl: store.currentLang?.is_rtl }" @click.self="closePopover">
        <template v-if="current.example_gloss">
          <span
            v-for="(token, ti) in glossTokens"
            :key="ti"
            :class="['token', token.isBlank ? 'token-blank' : token.hasGloss ? 'token-gloss' : 'token-plain']"
            @click.stop="token.hasGloss && !token.isBlank ? togglePopover(ti, $event) : null"
          >
            <template v-if="token.isBlank">
              <span class="blank">_____</span>
            </template>
            <template v-else>
              {{ token.text }}
              <span
                v-if="activePopover === ti"
                class="popover"
                @click.stop
              >{{ token.translation }}</span>
            </template>
          </span>
        </template>
        <!-- Fallback sans gloss -->
        <template v-else>
          {{ blankedBefore }}<span class="blank">_____</span>{{ blankedAfter }}
        </template>
      </div>

      <p class="gloss-hint" v-if="current.example_gloss">
        💬 Cliquez sur un mot souligné pour sa traduction
      </p>

      <!-- Actions -->
      <div class="word-actions">
        <button class="btn-icon" @click="speak">🔊</button>
        <button class="btn-icon" @click="showClue = !showClue">💡</button>
      </div>
      <div v-if="showClue && current.clue" class="clue-box">💡 {{ current.clue }}</div>
      <div v-if="current.transliteration" class="rom-hint">{{ current.transliteration }}</div>

      <!-- Choix -->
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
        <div>
          <div class="feedback-text" :class="isCorrect ? 'correct' : 'wrong'">
            {{ isCorrect ? '✓ Correct !' : `✗ C'était : ${current.term}` }}
          </div>
          <div class="reveal-pair">
            <span class="reveal-term" :class="{ rtl: store.currentLang?.is_rtl }">{{ current.term }}</span>
            <span class="reveal-arrow">→</span>
            <span class="reveal-fr">{{ current.translation_fr }}</span>
          </div>
        </div>
        <button class="btn-next" @click="next">Suivant →</button>
      </div>
    </div>

    <div v-else class="no-sentences">
      <p>Aucune phrase d'exemple disponible pour ce thème/niveau.</p>
      <button class="btn-secondary" @click="router.push('/')">← Retour</button>
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
import { useSessionRecorder } from '@/composables/useSessionRecorder'
import { postReview } from '@/api/reviews'
import type { Word } from '@/types'
import { speakText } from '@/utils/speech'

const store  = useLangStore()
const showQuit = ref(false)
const auth   = useAuthStore()
const router = useRouter()
const { recordSession } = useSessionRecorder()

interface Card { word: Word; choices: Word[] }

const cards        = ref<Card[]>([])
const idx          = ref(0)
const score        = ref(0)
const answered     = ref(false)
const selected     = ref<Word | null>(null)
const showClue     = ref(false)
const done         = ref(false)
const activePopover = ref<number | null>(null)

const total   = computed(() => cards.value.length)
const current = computed(() => cards.value[idx.value].word)
const choices = computed(() => cards.value[idx.value].choices)
const isCorrect = computed(() => selected.value?.id === current.value.id)

// Build interactive tokens from gloss
interface Token {
  text: string
  isBlank: boolean
  hasGloss: boolean
  translation: string | null
}

const glossTokens = computed((): Token[] => {
  const w = current.value
  if (!w.example_gloss || !w.example_sentence) return []
  const termLower = w.term.toLowerCase()
  const tokens: Token[] = []

  for (const entry of w.example_gloss) {
    const wordLower = entry.w.toLowerCase()
    const isBlank = wordLower === termLower ||
      // handle articles attached: "el pan" → term="el pan", word in gloss="pan"
      termLower.endsWith(wordLower) || termLower.includes(wordLower)
        ? termLower.split(/\s+/).some(p => p === wordLower)
        : false

    tokens.push({
      text: entry.w,
      isBlank,
      hasGloss: entry.t != null,
      translation: entry.t,
    })
    tokens.push({ text: ' ', isBlank: false, hasGloss: false, translation: null })
  }
  // Remove trailing space
  if (tokens.length && tokens[tokens.length-1].text === ' ') tokens.pop()
  return tokens
})

// Fallback (no gloss)
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

function togglePopover(ti: number, e: Event) {
  e.stopPropagation()
  activePopover.value = activePopover.value === ti ? null : ti
}
function closePopover() { activePopover.value = null }

function choiceClass(c: Word) {
  if (!answered.value) return {}
  if (c.id === current.value.id) return { correct: true }
  if (c.id === selected.value?.id) return { wrong: true }
  return {}
}

function answer(c: Word) {
  selected.value = c; answered.value = true
  const ok = c.id === current.value.id
  if (ok) score.value++
  if (auth.user && store.currentLang) postReview(current.value.id, store.currentLang.code, ok)
}

function next() {
  if (idx.value + 1 >= total.value) { done.value = true; return }
  idx.value++; answered.value = false; selected.value = null
  showClue.value = false; activePopover.value = null
}

function restart() {
  const shuffled = [...store.words.filter(w => w.example_sentence)].sort(() => Math.random() - 0.5)
  cards.value = buildCards(shuffled)
  idx.value = 0; score.value = 0; answered.value = false
  selected.value = null; showClue.value = false; done.value = false; activePopover.value = null
}

function buildCards(words: Word[]): Card[] {
  const pool = store.words
  return words.map(word => {
    const distractors = pool
      .filter(w => w.id !== word.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2)
    return { word, choices: [word, ...distractors].sort(() => Math.random() - 0.5) }
  })
}

function speak() {
  speakText(current.value.example_sentence ?? current.value.term, store.currentLang?.voice_locale ?? 'fr-FR')
}

function handleOutsideClick() { activePopover.value = null }

watch(done, (val) => {
  if (val) void recordSession('fill-blank', score.value, total.value)
})

onMounted(async () => {
  if (!store.words.length) await store.loadWords()
  const withSentence = store.words.filter(w => w.example_sentence).sort(() => Math.random() - 0.5)
  cards.value = buildCards(withSentence)
  document.addEventListener('click', handleOutsideClick)
})
onUnmounted(() => document.removeEventListener('click', handleOutsideClick))
</script>

<style scoped>
.fill { max-width: 560px; margin: 0 auto; padding: 1.5rem 1rem; }
.loader { text-align: center; color: var(--muted); margin-top: 4rem; }
.quiz-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: .75rem; }
.btn-back { background: none; border: none; color: var(--muted); cursor: pointer; font-size: .9rem; }
.counter { color: var(--muted2); font-size: .9rem; }
.score-badge { background: #22c55e20; color: #22c55e; padding: .2rem .6rem; border-radius: 20px; font-size: .85rem; }
.progress-bar { height: 6px; background: var(--border); border-radius: 3px; margin-bottom: 1.5rem; }
.progress-fill { height: 100%; background: var(--accent); border-radius: 3px; transition: width .3s; }

/* Sentence box */
.sentence-box { font-size: 1.2rem; color: #ddd; line-height: 2.2;
  background: var(--bg-card); border-radius: 12px; padding: 1.25rem 1rem;
  margin-bottom: .5rem; text-align: center; word-break: break-word; }
.sentence-box.rtl { direction: rtl; }

/* Tokens */
.token { position: relative; display: inline; }
.token-plain { color: #ddd; }
.token-gloss {
  color: #a5b4fc;
  border-bottom: 2px dashed #6366f1;
  cursor: pointer;
  transition: color .15s;
}
.token-gloss:hover { color: var(--text); }
.token-blank .blank {
  color: var(--accent); font-weight: 700; letter-spacing: 2px;
  border-bottom: 2px solid var(--accent); padding: 0 2px;
}

/* Popover */
.popover {
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: #2d2b55;
  border: 1px solid var(--accent);
  border-radius: 6px;
  padding: .3rem .6rem;
  font-size: .78rem;
  color: #c7d2fe;
  white-space: nowrap;
  z-index: 10;
  pointer-events: none;
  box-shadow: 0 4px 12px #0006;
}
.popover::after {
  content: '';
  position: absolute;
  top: 100%; left: 50%; transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: var(--accent);
}

.gloss-hint { text-align: center; color: #555; font-size: .78rem; margin-bottom: .75rem; }

.word-actions { display: flex; justify-content: center; gap: .5rem; margin-bottom: .5rem; }
.btn-icon { background: none; border: 2px solid #444; border-radius: 50%; width: 36px; height: 36px; font-size: 1rem; cursor: pointer; }
.btn-icon:hover { border-color: var(--accent); }
.clue-box { text-align: center; background: #2a2000; border: 2px solid #b87a00; border-radius: 8px;
  padding: .4rem 1rem; color: #f5d080; font-size: .85rem; margin-bottom: .5rem; }
.rom-hint { text-align: center; color: #666; font-style: italic; font-size: .85rem; margin-bottom: .75rem; }

.choices { display: flex; flex-direction: column; gap: .65rem; margin-bottom: 1rem; }
.choice-btn { background: var(--bg-card); border: 2px solid #444; border-radius: 10px;
  color: #ddd; padding: .75rem 1rem; font-size: 1rem; cursor: pointer; text-align: center; transition: border-color .15s; }
.choice-btn:hover:not(:disabled) { border-color: var(--accent); color: var(--text); }
.choice-btn.correct { background: #14532d40; border-color: #22c55e; color: #86efac; }
.choice-btn.wrong   { background: #7f1d1d40; border-color: #ef4444; color: #fca5a5; }
.choice-btn:disabled { cursor: default; }

.reveal-pair { display: flex; align-items: center; gap: .4rem; margin-top: .3rem; flex-wrap: wrap; }
.reveal-term { font-size: .85rem; font-weight: 700; color: var(--dim); }
.reveal-arrow { font-size: .8rem; color: var(--muted); }
.reveal-fr { font-size: .85rem; color: #86efac; font-weight: 600; }
.feedback-row { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
.feedback-text { font-size: 1rem; font-weight: 600; }
.feedback-text.correct { color: #22c55e; }
.feedback-text.wrong   { color: #ef4444; }
.btn-next { background: var(--accent); color: white; border: none; border-radius: 8px; padding: .6rem 1.4rem; font-size: .95rem; cursor: pointer; }

.no-sentences { text-align: center; padding: 3rem 1rem; color: var(--muted); }
.results { text-align: center; padding: 2rem 1rem; }
.results-emoji { font-size: 3.5rem; margin-bottom: .5rem; }
.score-text { font-size: 1.3rem; color: var(--muted2); margin: .5rem 0 1.5rem; }
.results-actions { display: flex; gap: 1rem; justify-content: center; }
.btn-primary  { background: var(--accent); color: white; border: none; border-radius: 8px; padding: .7rem 1.8rem; font-size: 1rem; cursor: pointer; }
.btn-secondary { background: var(--border); color: var(--dim); border: none; border-radius: 8px; padding: .7rem 1.8rem; font-size: 1rem; cursor: pointer; }
</style>
