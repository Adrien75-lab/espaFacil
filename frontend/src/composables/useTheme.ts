import { ref, watch, onMounted } from 'vue'

const STORAGE_KEY = 'lf-theme'
const theme = ref<'dark' | 'light'>('dark')

function applyTheme(t: 'dark' | 'light') {
  if (t === 'light') {
    document.documentElement.setAttribute('data-theme', 'light')
  } else {
    document.documentElement.removeAttribute('data-theme')
  }
}

export function useTheme() {
  onMounted(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as 'dark' | 'light' | null
    theme.value = saved ?? 'dark'
    applyTheme(theme.value)
  })

  watch(theme, (t) => {
    applyTheme(t)
    localStorage.setItem(STORAGE_KEY, t)
  })

  function toggle() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  return { theme, toggle }
}
