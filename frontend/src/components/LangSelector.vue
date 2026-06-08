<template>
  <select class="lang-select" :value="langStore.currentLang" @change="onChange">
    <option v-for="lang in langStore.availableLangs" :key="lang" :value="lang">
      {{ labels[lang] ?? lang }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { useLangStore } from '@/stores/useLangStore'
const langStore = useLangStore()

const labels: Record<string, string> = {
  es: '🇪🇸 Espagnol', en: '🇬🇧 Anglais', it: '🇮🇹 Italien',
  de: '🇩🇪 Allemand', pt: '🇵🇹 Portugais', nl: '🇳🇱 Néerlandais',
  ru: '🇷🇺 Russe', ja: '🇯🇵 Japonais', ko: '🇰🇷 Coréen',
  zh: '🇨🇳 Mandarin', ar: '🇸🇦 Arabe', pl: '🇵🇱 Polonais',
  tr: '🇹🇷 Turc', hi: '🇮🇳 Hindi'
}

function onChange(e: Event) {
  langStore.setLang((e.target as HTMLSelectElement).value)
}
</script>

<style scoped>
.lang-select { padding: 0.5rem 1rem; border-radius: 6px; border: 2px solid #4f46e5; font-size: 1rem; cursor: pointer; }
</style>
