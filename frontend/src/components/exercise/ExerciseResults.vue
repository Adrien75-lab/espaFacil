<template>
  <section class="results" aria-live="polite">
    <div class="results-emoji">{{ emoji }}</div>
    <h2>{{ title }}</h2>
    <p class="score-text">{{ scoreLabel }}</p>
    <slot />
    <div class="results-actions">
      <slot name="actions" />
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  emoji: string
  title?: string
  scoreLabel: string
}>(), {
  title: 'Session terminée !',
})
</script>

<style scoped>
.results {
  text-align: center;
}

.results-emoji {
  margin-bottom: 0.5rem;
  font-size: 3rem;
}

h2 {
  margin-bottom: 0.25rem;
}

.score-text {
  margin-bottom: 1.25rem;
  color: var(--muted);
}

.results-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin-top: 0.5rem;
}
</style>
