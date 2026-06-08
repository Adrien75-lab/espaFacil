import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getLanguages, getThemes, getWords } from '@/api/client'
import type { Language, Theme, Word, Level } from '@/types'

const LS_LANG  = 'lf_lang'
const LS_LEVEL = 'lf_level'

export const useLangStore = defineStore('lang', () => {
  const languages       = ref<Language[]>([])
  const currentLang     = ref<Language | null>(null)
  const themes          = ref<Theme[]>([])
  const currentTheme    = ref<Theme | null>(null)
  const currentLevel    = ref<Level>((localStorage.getItem(LS_LEVEL) as Level) || 'debutant')
  const words           = ref<Word[]>([])
  const loading         = ref(false)

  const langCode = computed(() => currentLang.value?.code ?? '')

  async function loadLanguages() {
    loading.value = true
    try {
      languages.value = await getLanguages()
      // Restore persisted language
      const saved = localStorage.getItem(LS_LANG)
      if (saved) {
        const found = languages.value.find(l => l.code === saved)
        if (found) await selectLanguage(found.code)
      }
    } finally { loading.value = false }
  }

  async function selectLanguage(code: string) {
    const lang = languages.value.find(l => l.code === code)
    if (!lang) return
    currentLang.value = lang
    currentTheme.value = null
    words.value = []
    localStorage.setItem(LS_LANG, code)
    loading.value = true
    try { themes.value = await getThemes(code) }
    finally { loading.value = false }
  }

  function selectTheme(themeKey: string) {
    currentTheme.value = themes.value.find(t => t.key === themeKey) ?? null
    words.value = []
  }

  function setLevel(level: Level) {
    currentLevel.value = level
    localStorage.setItem(LS_LEVEL, level)
    words.value = []
  }

  async function loadWords() {
    if (!currentLang.value || !currentTheme.value) return
    loading.value = true
    try {
      words.value = await getWords(langCode.value, currentTheme.value.key, currentLevel.value)
    } finally { loading.value = false }
  }

  return { languages, currentLang, themes, currentTheme, currentLevel, words, loading,
           loadLanguages, selectLanguage, selectTheme, setLevel, loadWords }
})
