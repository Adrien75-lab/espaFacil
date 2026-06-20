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
  height: 10px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  background: color-mix(in srgb, var(--border) 55%, var(--bg-card));
  border: 1px solid var(--border);
  border-radius: 999px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--success), var(--accent));
  border-radius: 999px;
  transition: width 0.3s;
}
</style>
