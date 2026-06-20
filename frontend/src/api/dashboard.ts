import { API_URL } from '@/api/client'
import { authHeaders } from '@/stores/auth'

export interface DashboardData {
  user:            { name: string; email: string }
  total_xp:        number
  total_sessions:  number
  current_streak:  number
  xp_history:      Array<{ date: string; xp: number }>
  badges:          Array<{ key: string; language_id: number; unlocked_at: string }>
  mode_xp:         Record<string, number>
  languages:       Array<{
    code:           string
    name:           string
    flag:           string
    xp:             number
    sessions:       number
    max_serie:      number
    current_streak: number
    activity_days:  string[]
    srs_due:        number
    srs_total:      number
  }>
}

export async function fetchDashboard(): Promise<DashboardData | null> {
  try {
    const res = await fetch(`${API_URL}/api/me/dashboard`, {
      headers: { 'Accept': 'application/json', ...authHeaders() },
    })
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}
