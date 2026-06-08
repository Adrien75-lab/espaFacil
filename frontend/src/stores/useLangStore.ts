import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useLangStore = defineStore('lang', () => {
  const currentLang = ref<string>('es')
  const availableLangs = ref(['es', 'en', 'it', 'de', 'pt', 'nl', 'ru', 'ja', 'ko', 'zh', 'ar', 'pl', 'tr', 'hi'])

  const langLabel = computed(() => {
    const labels: Record<string, string> = {
      es: '🇪🇸 Espagnol', en: '🇬🇧 Anglais', it: '🇮🇹 Italien',
      de: '🇩🇪 Allemand', pt: '🇵🇹 Portugais', nl: '🇳🇱 Néerlandais',
      ru: '🇷🇺 Russe', ja: '🇯🇵 Japonais', ko: '🇰🇷 Coréen',
      zh: '🇨🇳 Mandarin', ar: '🇸🇦 Arabe', pl: '🇵🇱 Polonais',
      tr: '🇹🇷 Turc', hi: '🇮🇳 Hindi'
    }
    return labels[currentLang.value] ?? currentLang.value
  })

  function setLang(lang: string) {
    if (availableLangs.value.includes(lang)) currentLang.value = lang
  }

  return { currentLang, availableLangs, langLabel, setLang }
})
