<template>
  <span class="score-badge" :class="tone" aria-live="polite">
    {{ label }} · {{ correct }}
  </span>
</template>

<script setup lang="ts">
import { toRef } from 'vue'
import { useExercisePerformance } from '../composables/useExercisePerformance'

const props = defineProps<{
  correct: number
  answered: number
}>()

const { label, tone } = useExercisePerformance({
  correct: toRef(props, 'correct'),
  answered: toRef(props, 'answered'),
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
