import type { Language, Theme, Word, GrammarTip, Level } from '@/types'

export const API_URL = import.meta.env.VITE_API_URL ?? (import.meta.env.PROD ? 'https://espafacil-production.up.railway.app' : '')

const BASE = `${API_URL}/api`

export async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`, { credentials: 'include' })
  if (!res.ok) throw new Error(`API error ${res.status}: ${path}`)
  const json = await res.json()
  return json.data ?? json
}

export const getLanguages = ()                                               => apiGet<Language[]>('/languages')
export const getLanguage  = (code: string)                                   => apiGet<Language>(`/languages/${code}`)
export const getThemes    = (code: string)                                   => apiGet<Theme[]>(`/languages/${code}/themes`)
export const getWords     = (code: string, themeKey: string, level: Level)   =>
  apiGet<Word[]>(`/languages/${code}/themes/${themeKey}/words?level=${level}`)
export const getAllWords  = (code: string, themeKey: string)                 =>
  apiGet<Word[]>(`/languages/${code}/themes/${themeKey}/words`)
export const getGrammar   = (code: string)                                   => apiGet<GrammarTip[]>(`/languages/${code}/grammar`)
