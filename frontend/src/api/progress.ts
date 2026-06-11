export interface SessionPayload {
  language:  string
  theme:     string
  level:     string
  mode:      'quiz' | 'cards' | 'fill-blank' | 'listen' | 'speak' | 'sentence-builder' | 'dictee' | 'paires'
  score:     number   // 0-100
  xp_gained: number
  correct:   number
  total:     number
}

export async function postSession(payload: SessionPayload): Promise<void> {
  try {
    await fetch('/api/me/session', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch {
    // silencieux : mode invité ou réseau
  }
}

/** Calcul XP côté front */
export function calcXp(mode: 'quiz' | 'cards' | 'fill-blank' | 'listen' | 'speak' | 'sentence-builder' | 'dictee' | 'paires', correct: number, total: number): number {
  const perCorrect = mode === 'dictee' ? 9 : mode === 'sentence-builder' ? 8 : mode === 'paires' ? 7 : mode === 'fill-blank' ? 7 : mode === 'cards' ? 3 : 5
  const base       = correct * perCorrect
  const pct        = total > 0 ? correct / total : 0
  const bonus      = pct === 1 ? 20 : pct >= 0.8 ? 10 : 0
  return base + bonus
}
