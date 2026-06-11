<template>
  <div class="profile">
    <div v-if="loading" class="loader">Chargement du profil…</div>

    <div v-else-if="!data" class="empty">
      <p>Impossible de charger le profil.</p>
      <button class="btn-secondary" @click="router.push('/')">← Accueil</button>
    </div>

    <template v-else>
      <!-- En-tête -->
      <div class="profile-header">
        <button class="btn-back" @click="router.push('/')">← Accueil</button>
        <div class="avatar">{{ initials }}</div>
        <h1>{{ data.user.name }}</h1>
        <p class="email">{{ data.user.email }}</p>
      </div>

      <!-- Objectif quotidien -->
      <section class="section goal-section">
        <h2>🎯 Objectif quotidien</h2>
        <div class="goal-row">
          <span class="goal-label">XP par jour :</span>
          <div class="goal-options">
            <button
              v-for="opt in goalOptions"
              :key="opt"
              class="goal-opt"
              :class="{ active: currentGoal === opt }"
              @click="changeGoal(opt)"
            >{{ opt }} XP</button>
          </div>
        </div>
      </section>

      <!-- Chiffres clés -->
      <div class="stats-row">
        <div class="stat-card">
          <span class="stat-value">{{ data.total_xp }}</span>
          <span class="stat-label">XP total</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">{{ data.total_sessions }}</span>
          <span class="stat-label">Sessions</span>
        </div>
        <div class="stat-card streak">
          <span class="stat-value">{{ data.current_streak }}🔥</span>
          <span class="stat-label">Série actuelle</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">{{ data.languages.length }}</span>
          <span class="stat-label">Langue{{ data.languages.length > 1 ? 's' : '' }}</span>
        </div>
      </div>

      <!-- Graphe XP 30 jours -->
      <section class="section">
        <h2>📈 XP — 30 derniers jours</h2>
        <div class="xp-chart">
          <div
            v-for="day in data.xp_history"
            :key="day.date"
            class="xp-bar-wrap"
            :title="`${day.date} : ${day.xp} XP`"
          >
            <div
              class="xp-bar"
              :style="{ height: barHeight(day.xp) + '%' }"
              :class="{ today: day.date === todayStr }"
            ></div>
          </div>
        </div>
        <div class="chart-labels">
          <span>{{ data.xp_history[0]?.date.slice(5) }}</span>
          <span>{{ todayStr.slice(5) }}</span>
        </div>
      </section>

      <!-- Calendrier de série (30 jours) -->
      <section class="section">
        <h2>📅 Activité</h2>
        <div class="cal-grid">
          <div
            v-for="day in calendarDays"
            :key="day.date"
            class="cal-day"
            :class="{
              active: day.active,
              today: day.date === todayStr,
            }"
            :title="day.date"
          ></div>
        </div>
        <p class="cal-hint">● = jour actif · dernier mois</p>
      </section>

      <!-- Badges -->
      <section class="section">
        <h2>🏅 Badges ({{ data.badges.length }})</h2>
        <div v-if="data.badges.length === 0" class="empty-badges">
          Complète ta première session pour débloquer des badges !
        </div>
        <div v-else class="badges-grid">
          <div
            v-for="b in uniqueBadges"
            :key="b.key"
            class="badge-card"
            :title="badgeMeta[b.key]?.label ?? b.key"
          >
            <span class="badge-emoji">{{ badgeMeta[b.key]?.emoji ?? '🏅' }}</span>
            <span class="badge-label">{{ badgeMeta[b.key]?.label ?? b.key }}</span>
          </div>
        </div>
      </section>

      <!-- Langues -->
      <section class="section">
        <h2>🌍 Par langue</h2>
        <div class="lang-table">
          <div class="lang-row header-row">
            <span>Langue</span><span>XP</span><span>Sessions</span>
            <span>Meilleure série</span><span>Mots SRS</span>
          </div>
          <div
            v-for="l in data.languages"
            :key="l.code"
            class="lang-row"
          >
            <span class="lang-name-cell"><FlagIcon :lang="l.code" :size="20" /> {{ l.name }}</span>
            <span class="xp-cell">⚡{{ l.xp }}</span>
            <span>{{ l.sessions }}</span>
            <span>🔥{{ l.max_serie }}j</span>
            <span class="srs-cell">
              {{ l.srs_total }}
              <span v-if="l.srs_due > 0" class="due-badge">{{ l.srs_due }} dûs</span>
            </span>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import FlagIcon from '@/components/FlagIcon.vue'
import { useRouter } from 'vue-router'
import { fetchDashboard, type DashboardData } from '@/api/dashboard'
import { fetchToday, updateGoal } from '@/api/today'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const auth   = useAuthStore()

const data        = ref<DashboardData | null>(null)
const loading     = ref(true)
const todayStr    = new Date().toISOString().slice(0, 10)
const currentGoal = ref(50)
const goalOptions = [20, 50, 100, 200]

async function changeGoal(xp: number) {
  currentGoal.value = xp
  await updateGoal(xp)
}

const initials = computed(() => {
  if (!data.value) return '?'
  return data.value.user.name.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase()
})

const badgeMeta: Record<string, { emoji: string; label: string }> = {
  first_session:  { emoji: '🎯', label: '1ère session' },
  score_perfect:  { emoji: '💯', label: 'Score parfait' },
  xp_100:         { emoji: '⚡', label: '100 XP' },
  xp_500:         { emoji: '🔥', label: '500 XP' },
  sessions_10:    { emoji: '📚', label: '10 sessions' },
  serie_3:        { emoji: '🌱', label: 'Série 3 jours' },
  serie_7:        { emoji: '🌳', label: 'Série 7 jours' },
  phrases_master: { emoji: '✍️', label: 'Maître des phrases' },
}

// Dédoublonne les badges (même badge, plusieurs langues → 1 seul affichage)
const uniqueBadges = computed(() => {
  if (!data.value) return []
  const seen = new Set<string>()
  return data.value.badges.filter(b => {
    if (seen.has(b.key)) return false
    seen.add(b.key); return true
  })
})

// Calendrier 30 jours
const calendarDays = computed(() => {
  if (!data.value) return []
  const allActive = new Set<string>()
  for (const l of data.value.languages) {
    for (const d of l.activity_days) allActive.add(d)
  }
  const days = []
  for (let i = 29; i >= 0; i--) {
    const d = new Date()
    d.setDate(d.getDate() - i)
    const date = d.toISOString().slice(0, 10)
    days.push({ date, active: allActive.has(date) })
  }
  return days
})

// Hauteur barre XP (% du max)
function barHeight(xp: number): number {
  if (!data.value) return 0
  const max = Math.max(...data.value.xp_history.map(d => d.xp), 1)
  return Math.round((xp / max) * 100)
}

onMounted(async () => {
  if (!auth.user) { router.push('/login'); return }
  const [dash, today] = await Promise.all([fetchDashboard(), fetchToday()])
  data.value = dash
  if (today) currentGoal.value = today.daily_goal
  loading.value = false
})
</script>

<style scoped>
.profile { max-width: 700px; margin: 0 auto; padding: 1.5rem 1rem 3rem; }
.loader  { text-align: center; color: var(--muted); margin-top: 4rem; }
.empty   { text-align: center; padding: 3rem; }

/* Header */
.profile-header { text-align: center; margin-bottom: 2rem; }
.btn-back { background: none; border: none; color: var(--muted); cursor: pointer; font-size: .9rem; display: block; margin-bottom: 1rem; }
.avatar { width: 72px; height: 72px; border-radius: 50%; background: var(--accent);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.8rem; font-weight: 700; color: var(--text); margin: 0 auto .75rem; }
.profile-header h1 { font-size: 1.6rem; margin: 0 0 .25rem; }
.email { color: #666; font-size: .85rem; margin: 0; }

/* Stats row */
.stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: .75rem; margin-bottom: 2rem; }
@media (max-width: 480px) { .stats-row { grid-template-columns: repeat(2, 1fr); } }
.stat-card { background: var(--bg-card); border: 2px solid var(--bg-hover); border-radius: 12px;
  padding: 1rem; text-align: center; display: flex; flex-direction: column; gap: .25rem; }
.stat-card.streak { border-color: #f59e0b40; }
.stat-value { font-size: 1.6rem; font-weight: 700; color: var(--text); }
.stat-label { font-size: .75rem; color: #666; }

/* Sections */
.section { margin-bottom: 2.5rem; }
.section h2 { font-size: 1.05rem; color: #a5b4fc; margin-bottom: 1rem; border-bottom: 1px solid var(--bg-card); padding-bottom: .5rem; }

/* XP chart */
.xp-chart { display: flex; align-items: flex-end; gap: 2px; height: 80px;
  background: var(--bg-nav); border-radius: 8px; padding: 6px 6px 0; }
.xp-bar-wrap { flex: 1; display: flex; align-items: flex-end; height: 100%; }
.xp-bar { width: 100%; background: var(--accent)60; border-radius: 2px 2px 0 0; min-height: 2px;
  transition: height .3s; }
.xp-bar.today { background: var(--accent); }
.chart-labels { display: flex; justify-content: space-between; color: #555; font-size: .72rem; margin-top: .3rem; padding: 0 6px; }

/* Calendrier */
.cal-grid { display: grid; grid-template-columns: repeat(10, 1fr); gap: 4px; }
@media (max-width: 400px) { .cal-grid { grid-template-columns: repeat(7, 1fr); } }
.cal-day { aspect-ratio: 1; border-radius: 4px; background: var(--bg-card); transition: background .2s; }
.cal-day.active { background: var(--accent); }
.cal-day.today  { outline: 2px solid #a5b4fc; }
.cal-hint { color: #444; font-size: .72rem; margin-top: .4rem; }

/* Badges */
.empty-badges { color: #555; font-size: .9rem; }
.badges-grid { display: flex; flex-wrap: wrap; gap: .75rem; }
.badge-card { background: var(--bg-card); border: 2px solid var(--bg-hover); border-radius: 10px;
  padding: .6rem .9rem; display: flex; flex-direction: column; align-items: center; gap: .2rem;
  min-width: 80px; transition: border-color .2s; }
.badge-card:hover { border-color: var(--accent); }
.badge-emoji { font-size: 1.6rem; }
.badge-label { font-size: .7rem; color: var(--muted); text-align: center; }

/* Table langues */
.lang-table { background: var(--bg-card); border-radius: 10px; overflow: hidden; }
.lang-row { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1.2fr;
  gap: .5rem; padding: .6rem 1rem; font-size: .88rem; align-items: center; }
.header-row { color: #555; font-size: .78rem; border-bottom: 1px solid var(--bg-hover); }
.lang-row:not(.header-row):hover { background: #252535; }
.lang-name-cell { color: #ddd; }
.xp-cell { color: #a5b4fc; font-weight: 600; }
.srs-cell { display: flex; align-items: center; gap: .4rem; }
.due-badge { background: #f59e0b20; color: #f59e0b; border-radius: 10px;
  padding: .1rem .4rem; font-size: .72rem; }

.btn-secondary { background: var(--border); color: var(--dim); border: none; border-radius: 8px; padding: .7rem 1.8rem; font-size: 1rem; cursor: pointer; }

.goal-section { }
.goal-row { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
.goal-label { color: var(--muted); font-size: .9rem; }
.goal-options { display: flex; gap: .5rem; flex-wrap: wrap; }
.goal-opt { background: var(--bg-card); border: 2px solid var(--border); border-radius: 20px;
  color: var(--muted2); padding: .3rem .9rem; font-size: .85rem; cursor: pointer; transition: border-color .15s; }
.goal-opt:hover, .goal-opt.active { border-color: var(--accent); color: #a5b4fc; }
</style>
