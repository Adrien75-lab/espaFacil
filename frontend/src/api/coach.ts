export interface CoachTip {
  type: string
  icon: string
  message: string
  action: string | null
  action_label: string | null
  priority: number
}

export async function fetchCoachTips(): Promise<CoachTip[]> {
  try {
    const res = await fetch('/api/me/coach', {
      credentials: 'include',
      headers: { 'Accept': 'application/json' },
    })
    if (!res.ok) return []
    const data = await res.json()
    return data.tips ?? []
  } catch {
    return []
  }
}
