<template>
  <section class="results" :class="tone" aria-live="polite">
    <div v-if="showConfetti" class="confetti-layer" aria-hidden="true">
      <span
        v-for="n in 42"
        :key="n"
        class="confetto"
        :style="confettoStyle(n)"
      ></span>
    </div>

    <div class="results-card">
      <div class="shine" aria-hidden="true"></div>
      <div class="results-emoji" :class="{ perfect: isPerfect }">{{ displayEmoji }}</div>
      <p class="rating-pill">{{ ratingLabel }}</p>
      <h2>{{ displayTitle }}</h2>
      <p class="score-text">{{ scoreLabel }}</p>

      <div v-if="total && total > 0" class="score-ring" :style="{ '--score': scorePercent + '%' }">
        <span>{{ scorePercent }}%</span>
      </div>

      <slot />

      <div class="results-actions">
        <slot name="actions" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const props = withDefaults(defineProps<{
  emoji?: string
  title?: string
  scoreLabel: string
  correct?: number
  total?: number
  playSound?: boolean
}>(), {
  emoji: '',
  title: '',
  correct: 0,
  total: 0,
  playSound: true,
})

const showConfetti = ref(false)

const scorePercent = computed(() => {
  if (!props.total || props.total <= 0) return 0
  return Math.round(props.correct / props.total * 100)
})

const isPerfect = computed(() =>
  (props.total > 0 && props.correct === props.total) || props.emoji === '🏆'
)

const tone = computed(() => {
  if (isPerfect.value) return 'perfect'
  if (scorePercent.value >= 80) return 'great'
  if (scorePercent.value >= 60) return 'good'
  return 'practice'
})

const displayEmoji = computed(() => {
  if (props.emoji) return props.emoji
  return {
    perfect: '🏆',
    great: '🎉',
    good: '👏',
    practice: '💪',
  }[tone.value]
})

const ratingLabel = computed(() => {
  if (isPerfect.value) return 'Parfait'
  if (scorePercent.value >= 80) return 'Bravo'
  if (scorePercent.value >= 60) return 'Bien'
  return 'On continue'
})

const displayTitle = computed(() => {
  if (props.title) return props.title
  if (isPerfect.value) return 'Session parfaite !'
  return 'Session terminée !'
})

function confettoStyle(n: number) {
  const colors = ['#22c55e', '#6366f1', '#f59e0b', '#ec4899', '#38bdf8', '#f0abfc']
  return {
    left: `${(n * 23) % 100}%`,
    background: colors[n % colors.length],
    animationDelay: `${(n % 9) * 0.08}s`,
    animationDuration: `${1.7 + (n % 5) * 0.22}s`,
  }
}

function playVictorySound() {
  if (!props.playSound || !isPerfect.value) return
  const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!AudioContextClass) return

  const ctx = new AudioContextClass()
  const notes = [523.25, 659.25, 783.99, 1046.5]
  notes.forEach((frequency, index) => {
    const oscillator = ctx.createOscillator()
    const gain = ctx.createGain()
    oscillator.frequency.value = frequency
    oscillator.type = 'sine'
    oscillator.connect(gain)
    gain.connect(ctx.destination)
    const start = ctx.currentTime + index * 0.12
    gain.gain.setValueAtTime(0.0001, start)
    gain.gain.exponentialRampToValueAtTime(0.08, start + 0.02)
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.18)
    oscillator.start(start)
    oscillator.stop(start + 0.2)
  })
}

onMounted(() => {
  if (isPerfect.value) {
    showConfetti.value = true
    playVictorySound()
    window.setTimeout(() => { showConfetti.value = false }, 3200)
  }
})
</script>

<style scoped>
.results {
  position: relative;
  display: grid;
  min-height: min(620px, calc(100vh - 4rem));
  place-items: center;
  padding: 2rem 1rem;
  overflow: hidden;
}
.results-card {
  position: relative;
  width: min(520px, 100%);
  padding: 2rem 1.5rem;
  overflow: hidden;
  text-align: center;
  background: linear-gradient(180deg, #19192a, #11111d);
  border: 1px solid var(--border);
  border-radius: 8px;
  box-shadow: 0 24px 70px #0008;
}
.results.perfect .results-card { border-color: #22c55e; }
.results.great .results-card { border-color: #6366f1; }
.results.good .results-card { border-color: #f59e0b; }
.shine {
  position: absolute;
  inset: -40% auto auto -20%;
  width: 70%;
  height: 180%;
  background: linear-gradient(90deg, transparent, #ffffff10, transparent);
  transform: rotate(22deg);
  animation: shine 2.4s ease-out 0.25s both;
}
.results-emoji {
  position: relative;
  margin-bottom: 0.5rem;
  font-size: 4.4rem;
  animation: pop-in 0.45s cubic-bezier(.2, 1.4, .4, 1) both;
}
.results-emoji.perfect {
  filter: drop-shadow(0 0 22px #f59e0b66);
  animation: pop-in 0.45s cubic-bezier(.2, 1.4, .4, 1) both, trophy-bounce 1.35s ease-in-out 0.5s infinite;
}
.rating-pill {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  margin: 0 0 0.55rem;
  padding: 0.25rem 0.75rem;
  color: #dbeafe;
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0;
  background: #6366f126;
  border: 1px solid #6366f1;
  border-radius: 999px;
}
h2 {
  margin: 0 0 0.25rem;
  font-size: 1.8rem;
}
.score-text {
  margin: 0 0 1rem;
  color: var(--muted2);
  font-size: 1.15rem;
}
.score-ring {
  --score: 0%;
  display: grid;
  width: 92px;
  height: 92px;
  margin: 0 auto 1.2rem;
  place-items: center;
  background:
    radial-gradient(circle at center, #11111d 58%, transparent 60%),
    conic-gradient(#22c55e var(--score), #2a2a3e 0);
  border-radius: 50%;
}
.score-ring span {
  color: var(--text);
  font-weight: 900;
}
.results-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin-top: 1rem;
}
.confetti-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.confetto {
  position: absolute;
  top: -16px;
  width: 9px;
  height: 14px;
  border-radius: 2px;
  animation: confetti-fall linear forwards;
}
@keyframes pop-in {
  from { opacity: 0; transform: translateY(18px) scale(0.75); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes trophy-bounce {
  0%, 100% { transform: translateY(0) rotate(-2deg); }
  50% { transform: translateY(-8px) rotate(2deg); }
}
@keyframes shine {
  from { transform: translateX(-80%) rotate(22deg); }
  to { transform: translateX(240%) rotate(22deg); }
}
@keyframes confetti-fall {
  0% { opacity: 1; transform: translateY(0) rotate(0deg); }
  90% { opacity: 1; }
  100% { opacity: 0; transform: translateY(680px) rotate(620deg); }
}
@media (max-width: 520px) {
  .results { min-height: auto; padding: 1rem 0; }
  .results-card { padding: 1.5rem 1rem; }
  h2 { font-size: 1.45rem; }
}
</style>
