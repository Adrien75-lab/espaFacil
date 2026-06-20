export type ExerciseMode =
  | 'quiz'
  | 'cards'
  | 'fill-blank'
  | 'listen'
  | 'speak'
  | 'sentence-builder'
  | 'dictee'
  | 'paires'
  | 'dialogue'
  | 'anagram'
  | 'stories'
  | 'conjugaison'
  | 'traduction'
  | 'devinette'

export interface SessionPayload {
  language:  string
  theme:     string
  level:     string
  mode:      ExerciseMode
  score:     number   // 0-100
  xp_gained: number
  correct:   number
  total:     number
}

export interface SessionResult {
  lingos_balance: number
  lingos_gained: number
  lingo_rewards: string[]
  [key: string]: unknown
}

export async function postSession(payload: SessionPayload): Promise<SessionResult | null> {
  try {
    const res = await fetch('/api/me/session', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (res.ok) return await res.json()
    return null
  } catch {
    return null
  }
}

/** Calcul XP côté front */
export function calcXp(mode: ExerciseMode, correct: number, total: number): number {
  const xpPerCorrect: Record<ExerciseMode, number> = {
    quiz: 5,
    cards: 3,
    'fill-blank': 7,
    listen: 5,
    speak: 5,
    'sentence-builder': 8,
    dictee: 9,
    paires: 7,
    dialogue: 6,
    anagram: 5,
    stories: 6,
    conjugaison: 7,
    traduction: 7,
    devinette: 7,
  }
  const perCorrect = xpPerCorrect[mode]
  const base       = correct * perCorrect
  const pct        = total > 0 ? correct / total : 0
  const bonus      = pct === 1 ? 20 : pct >= 0.8 ? 10 : 0
  return base + bonus
}

export interface LeaderboardEntry {
  rank:     number
  id:       number
  name:     string
  total_xp: number
}

export interface LeaderboardData {
  leaderboard: LeaderboardEntry[]
  my_rank:     number | null
  my_xp:       number | null
}

export async function fetchLeaderboard(): Promise<LeaderboardData | null> {
  try {
    const r = await fetch('/api/leaderboard', {
      credentials: 'include',
      headers: { 'Accept': 'application/json' },
    })
    if (!r.ok) return null
    return await r.json()
  } catch {
    return null
  }
}
