<template>
  <header class="exercise-header">
    <button class="quit-button" type="button" @click="$emit('quit')">← Quitter</button>
    <span class="mode-label">{{ label }}</span>
    <span class="counter">{{ current }} / {{ total }}</span>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  current: number
  total: number
}>()

defineEmits<{ quit: [] }>()
</script>

<style scoped>
.exercise-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.quit-button {
  background: none;
  border: none;
  color: var(--muted);
  cursor: pointer;
  font-size: 0.9rem;
}

.mode-label,
.counter {
  color: var(--muted2);
  font-size: 0.9rem;
}

.mode-label {
  font-size: 0.88rem;
}
</style>
