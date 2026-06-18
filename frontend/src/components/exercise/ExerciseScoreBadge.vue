<template>
  <span class="score-badge" :class="performanceClass" aria-live="polite">
    {{ performanceLabel }} · {{ correct }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  correct: number
  answered: number
}>()

const ratio = computed(() => (props.answered > 0 ? props.correct / props.answered : 1))

const performanceLabel = computed(() => {
  if (ratio.value >= 1) return 'Parfait'
  if (ratio.value >= 0.8) return 'Bravo'
  if (ratio.value >= 0.6) return 'Bien'
  return 'On se reprend'
})

const performanceClass = computed(() => {
  if (ratio.value >= 1) return 'perfect'
  if (ratio.value >= 0.8) return 'great'
  if (ratio.value >= 0.6) return 'good'
  return 'practice'
})
</script>

<style scoped>
.score-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 104px;
  padding: 0.25rem 0.7rem;
  border: 1px solid transparent;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 800;
  white-space: nowrap;
  transition: transform 0.2s, border-color 0.2s, background 0.2s;
}

.score-badge.perfect {
  background: #22c55e20;
  color: #86efac;
  border-color: #22c55e80;
}

.score-badge.great {
  background: #6366f120;
  color: #c4b5fd;
  border-color: #6366f180;
}

.score-badge.good {
  background: #f59e0b20;
  color: #fde68a;
  border-color: #f59e0b80;
}

.score-badge.practice {
  background: #ef444420;
  color: #fca5a5;
  border-color: #ef444480;
}
</style>
