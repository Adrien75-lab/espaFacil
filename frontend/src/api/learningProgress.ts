export type ProgressLevel = 'debutant' | 'intermediaire' | 'avance'

export type ProgressStatus =
  | 'unavailable'
  | 'not_started'
  | 'in_progress'
  | 'review'
  | 'mastered'

export interface LearningProgressLevel {
  level: ProgressLevel
  word_count: number
  best_score: number
  total_seen: number
  coverage_percent: number
  mastery_percent: number
  status: ProgressStatus
  srs_total: number
  srs_due: number
}

export interface LearningProgressTheme {
  key: string
  name: string
  emoji: string
  levels: LearningProgressLevel[]
}

export interface LearningProgressLanguage {
  code: string
  name: string
  flag: string
  summary: {
    available_levels: number
    mastered_levels: number
    in_progress_levels: number
    review_levels: number
    not_started_levels: number
    average_mastery: number
    srs_due: number
    next_status: ProgressStatus | null
    next_level: ProgressLevel | null
  }
  themes: LearningProgressTheme[]
}

export interface LearningProgressData {
  languages: LearningProgressLanguage[]
}

export async function fetchLearningProgress(): Promise<LearningProgressData | null> {
  try {
    const res = await fetch('/api/me/learning-progress', {
      credentials: 'include',
      headers: { 'Accept': 'application/json' },
    })
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}
