<template>
  <select class="lang-select" :value="langStore.currentLang?.code ?? ''" @change="onChange">
    <option value="" disabled>Choisir une langue</option>
    <option v-for="lang in langStore.languages" :key="lang.code" :value="lang.code">
      {{ lang.flag }} {{ lang.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useLangStore } from '@/stores/lang'

const langStore = useLangStore()

onMounted(() => {
  if (!langStore.languages.length) void langStore.loadLanguages()
})

function onChange(event: Event) {
  void langStore.selectLanguage((event.target as HTMLSelectElement).value)
}
</script>

<style scoped>
.lang-select {
  padding: 0.5rem 1rem;
  border: 2px solid var(--accent);
  border-radius: 6px;
  background: var(--bg-card);
  color: var(--text);
  font-size: 1rem;
  cursor: pointer;
}
</style>
