export interface TodayData {
  xp_today:     number
  daily_goal:   number
  goal_reached: boolean
  streak:       number
  played_today: boolean
}

export async function fetchToday(): Promise<TodayData | null> {
  try {
    const res = await fetch('/api/me/today', {
      credentials: 'include',
      headers: { 'Accept': 'application/json' },
    })
    if (!res.ok) return null
    return await res.json()
  } catch { return null }
}

export async function updateGoal(daily_goal_xp: number): Promise<void> {
  await fetch('/api/me/goal', {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({ daily_goal_xp }),
  })
}
