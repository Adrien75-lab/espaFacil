<template>
  <header class="exercise-header">
    <button class="quit-button" type="button" @click="$emit('quit')">← Quitter</button>
    <span class="mode-label">{{ label }}</span>
    <span class="header-status">
      <BlocExerciseScoreBadge v-if="showScore" :correct="correct ?? 0" :answered="answered ?? 0" />
      <span class="counter">{{ current }} / {{ total }}</span>
    </span>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BlocExerciseScoreBadge from './BlocExerciseScoreBadge.vue'

const props = defineProps<{
  label: string
  current: number
  total: number
  correct?: number
  answered?: number
}>()

defineEmits<{ quit: [] }>()

const showScore = computed(() => props.correct !== undefined && props.answered !== undefined)
</script>

<style scoped>
.exercise-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.9rem;
  padding: 0.75rem 0.85rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow-card);
}

.quit-button {
  background: var(--bg-hover);
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--muted2);
  padding: 0.4rem 0.75rem;
  cursor: pointer;
  font-size: 0.9rem;
}

.mode-label,
.counter {
  color: var(--muted2);
  font-size: 0.9rem;
  font-weight: 800;
}

.mode-label {
  color: var(--text);
  font-size: 0.92rem;
  font-weight: 900;
}

.header-status {
  display: flex;
  align-items: center;
  gap: 0.55rem;
}

@media (max-width: 520px) {
  .exercise-header {
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .header-status {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
