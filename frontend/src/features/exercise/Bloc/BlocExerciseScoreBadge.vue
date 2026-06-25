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
  min-width: 112px;
  padding: 0.32rem 0.78rem;
  border: 1px solid transparent;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 800;
  white-space: nowrap;
  transition: transform 0.2s, border-color 0.2s, background 0.2s;
}

.score-badge.perfect {
  background: color-mix(in srgb, var(--success) 16%, var(--bg-card));
  color: var(--success);
  border-color: color-mix(in srgb, var(--success) 60%, transparent);
}

.score-badge.great {
  background: var(--accent-soft);
  color: var(--accent-strong);
  border-color: color-mix(in srgb, var(--accent) 60%, transparent);
}

.score-badge.good {
  background: color-mix(in srgb, var(--warning) 18%, var(--bg-card));
  color: var(--warning);
  border-color: color-mix(in srgb, var(--warning) 60%, transparent);
}

.score-badge.practice {
  background: color-mix(in srgb, var(--danger) 16%, var(--bg-card));
  color: var(--danger);
  border-color: color-mix(in srgb, var(--danger) 60%, transparent);
}
</style>
