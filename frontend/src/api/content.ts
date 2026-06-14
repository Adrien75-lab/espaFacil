import { apiGet } from '@/api/client'
import type { ConjugationVerb, Dialogue } from '@/types'

export const getDialogues = (lang: string) =>
  apiGet<Dialogue[]>(`/dialogues?lang=${encodeURIComponent(lang)}`)

export const getConjugations = (lang: string) =>
  apiGet<ConjugationVerb[]>(`/conjugations?lang=${encodeURIComponent(lang)}`)
