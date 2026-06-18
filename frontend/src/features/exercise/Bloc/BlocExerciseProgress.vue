<template>
  <div
    class="progress-bar"
    role="progressbar"
    aria-label="Progression de l'exercice"
    :aria-valuemin="0"
    :aria-valuemax="total"
    :aria-valuenow="current"
  >
    <div class="progress-fill" :style="{ width: percentage + '%' }"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  current: number
  total: number
}>()

const percentage = computed(() => {
  if (props.total <= 0) return 0
  return Math.min(100, Math.max(0, props.current / props.total * 100))
})
</script>

<style scoped>
.progress-bar {
  height: 6px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  background: var(--border);
  border-radius: 3px;
}

.progress-fill {
  height: 100%;
  background: var(--accent);
  border-radius: 3px;
  transition: width 0.3s;
}
</style>
