import { API_URL } from '@/api/client'

export interface ReviewWord {
  id:               number
  term:             string
  translation_fr:   string
  transliteration?: string
  clue?:            string
  example_sentence?: string
  example_gloss?:   Array<{ w: string; t: string | null }>
  theme_key?:       string
  level?:           string
  // SRS meta
  times_seen:    number
  times_correct: number
  times_wrong:   number
  ease:          number
  next_review_at?: string
}

export async function postReview(wordId: number, languageCode: string, correct: boolean): Promise<void> {
  try {
    await fetch(`${API_URL}/api/me/reviews`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ word_id: wordId, language_code: languageCode, correct }),
    })
  } catch {
    // silencieux
  }
}

export async function fetchDue(language: string, limit = 20): Promise<ReviewWord[]> {
  const res = await fetch(`${API_URL}/api/me/reviews/due?language=${language}&limit=${limit}`, {
    credentials: 'include',
    headers: { 'Accept': 'application/json' },
  })
  if (!res.ok) return []
  const data = await res.json()
  return data.words ?? []
}

export async function fetchDifficult(language: string, limit = 20): Promise<ReviewWord[]> {
  const res = await fetch(`${API_URL}/api/me/reviews/difficult?language=${language}&limit=${limit}`, {
    credentials: 'include',
    headers: { 'Accept': 'application/json' },
  })
  if (!res.ok) return []
  const data = await res.json()
  return data.words ?? []
}
