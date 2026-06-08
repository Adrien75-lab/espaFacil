import type { Language, Theme, Word, GrammarTip, Level } from '@/types'

const BASE = '/api'

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`)
  if (!res.ok) throw new Error(`API error ${res.status}: ${path}`)
  const json = await res.json()
  return json.data ?? json
}

export const getLanguages = ()                                               => get<Language[]>('/languages')
export const getLanguage  = (code: string)                                   => get<Language>(`/languages/${code}`)
export const getThemes    = (code: string)                                   => get<Theme[]>(`/languages/${code}/themes`)
export const getWords     = (code: string, themeKey: string, level: Level)   =>
  get<Word[]>(`/languages/${code}/themes/${themeKey}/words?level=${level}`)
export const getGrammar   = (code: string)                                   => get<GrammarTip[]>(`/languages/${code}/grammar`)
