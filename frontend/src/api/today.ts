import { API_URL } from '@/api/client'
import { authHeaders } from '@/stores/auth'

export interface TodayData {
  xp_today:     number
  daily_goal:   number
  goal_reached: boolean
  streak:       number
  played_today: boolean
  lingos_balance: number
  lingos_today:   number
  next_lingo_bonus: {
    multiplier:   number
    xp_required:  number
    remaining_xp: number
    amount:       number
    label:        string
  } | null
}

export async function fetchToday(): Promise<TodayData | null> {
  try {
    const res = await fetch(`${API_URL}/api/me/today`, {
      headers: { 'Accept': 'application/json', ...authHeaders() },
    })
    if (!res.ok) return null
    return await res.json()
  } catch { return null }
}

export async function updateGoal(daily_goal_xp: number): Promise<void> {
  await fetch(`${API_URL}/api/me/goal`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', ...authHeaders() },
    body: JSON.stringify({ daily_goal_xp }),
  })
}
