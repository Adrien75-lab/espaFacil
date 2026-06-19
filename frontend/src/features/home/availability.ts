import type { ThemeLevelStats } from '@/types'

export const NO_THEME_MODES = ['dialogue', 'survival', 'voyage', 'stories', 'conjugaison'] as const
export const EXAMPLE_MODES = ['fill-blank', 'sentence-builder'] as const

export function isNoThemeMode(modeKey: string): boolean {
  return NO_THEME_MODES.includes(modeKey as (typeof NO_THEME_MODES)[number])
}

export function isExampleMode(modeKey: string): boolean {
  return EXAMPLE_MODES.includes(modeKey as (typeof EXAMPLE_MODES)[number])
}

export function statsSatisfyMode(stats: ThemeLevelStats | undefined, modeKey: string): boolean {
  if (!stats) return true
  return isExampleMode(modeKey) ? stats.with_example > 0 : stats.words > 0
}
