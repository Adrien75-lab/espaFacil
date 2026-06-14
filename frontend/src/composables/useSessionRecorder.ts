import { calcXp, postSession, type ExerciseMode } from '@/api/progress'
import { useAuthStore } from '@/stores/auth'
import { useLangStore } from '@/stores/lang'

export function useSessionRecorder() {
  const auth = useAuthStore()
  const lang = useLangStore()

  async function recordSession(
    mode: ExerciseMode,
    correct: number,
    total: number,
    theme = lang.currentTheme?.key ?? 'general',
  ): Promise<void> {
    if (!auth.user || !lang.currentLang || total < 1) return

    await postSession({
      language: lang.currentLang.code,
      theme,
      level: lang.currentLevel,
      mode,
      score: Math.round(correct / total * 100),
      xp_gained: calcXp(mode, correct, total),
      correct,
      total,
    })
  }

  return { recordSession }
}
