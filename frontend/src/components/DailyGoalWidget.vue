<template>
  <div class="daily-widget">
    <Teleport to="body">
      <div v-if="showConfetti" class="confetti-container" aria-hidden="true">
        <div v-for="n in 40" :key="n" class="confetto" :style="confettoStyle(n)"></div>
      </div>
    </Teleport>

    <div v-if="streakWarning" class="streak-banner">
      🔥 Ta série de <strong>{{ data.streak }} jour{{ data.streak > 1 ? 's' : '' }}</strong> est en danger ! Joue aujourd'hui pour la conserver.
    </div>

    <div class="goal-card" :class="{ reached: data.goal_reached }">
      <div class="goal-header">
        <span class="goal-title">{{ goalTitle }}</span>
        <button class="goal-edit" @click="showPicker = !showPicker" title="Changer l'objectif">⚙️</button>
      </div>

      <div v-if="showPicker" class="goal-picker">
        <button
          v-for="opt in goalOptions"
          :key="opt"
          class="goal-opt"
          :class="{ active: data.daily_goal === opt }"
          @click="changeGoal(opt)"
        >{{ opt }} XP</button>
      </div>

      <div class="goal-progress-bar">
        <div
          class="goal-progress-fill"
          :style="{ width: Math.min(progressPct, 100) + '%' }"
        ></div>
      </div>

      <div class="goal-numbers">
        <span class="xp-today">⚡ {{ data.xp_today }} XP</span>
        <span class="xp-goal">/ {{ data.daily_goal }} XP</span>
      </div>

      <div class="reward-panel">
        <div>
          <span class="reward-label">Lingos</span>
          <strong class="reward-value">● {{ data.lingos_balance }}</strong>
        </div>
        <div>
          <span class="reward-label">Aujourd'hui</span>
          <strong class="reward-earned">+{{ data.lingos_today }}</strong>
        </div>
      </div>

      <div class="bonus-row">
        <span v-if="data.next_lingo_bonus">
          Encore {{ data.next_lingo_bonus.remaining_xp }} XP pour +{{ data.next_lingo_bonus.amount }} Lingos
        </span>
        <span v-else-if="data.goal_reached">Tous les bonus du jour sont débloqués.</span>
        <span v-else>Atteins ton objectif pour gagner tes premiers Lingos.</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { fetchToday, updateGoal, type TodayData } from '@/api/today'

const data = ref<TodayData>({
  xp_today: 0,
  daily_goal: 50,
  goal_reached: false,
  streak: 0,
  played_today: false,
  lingos_balance: 0,
  lingos_today: 0,
  next_lingo_bonus: null,
})

const showPicker = ref(false)
const showConfetti = ref(false)
const goalOptions = [20, 50, 100, 200]

const progressPct = computed(() =>
  data.value.daily_goal > 0
    ? Math.round(data.value.xp_today / data.value.daily_goal * 100)
    : 0
)

const achievedMultiplier = computed(() =>
  data.value.daily_goal > 0
    ? Math.floor(data.value.xp_today / data.value.daily_goal)
    : 0
)

const goalTitle = computed(() => {
  if (!data.value.goal_reached) return '🎯 Objectif du jour'
  if (achievedMultiplier.value >= 10) return '✅ Objectif x10 atteint !'
  if (achievedMultiplier.value >= 5) return '✅ Objectif x5 atteint !'
  if (achievedMultiplier.value >= 2) return '✅ Objectif doublé !'
  return '✅ Objectif atteint !'
})

const streakWarning = computed(() =>
  data.value.streak >= 1 && !data.value.played_today
)

function confettoStyle(n: number) {
  const colors = ['#4f46e5', '#22c55e', '#f59e0b', '#ec4899', '#0ea5e9', '#a855f7']
  return {
    left: Math.random() * 100 + 'vw',
    background: colors[n % colors.length],
    animationDelay: (Math.random() * 1.5) + 's',
    animationDuration: (1.5 + Math.random() * 1.5) + 's',
    width: (6 + Math.random() * 8) + 'px',
    height: (6 + Math.random() * 8) + 'px',
    borderRadius: Math.random() > 0.5 ? '50%' : '2px',
  }
}

async function changeGoal(xp: number) {
  data.value.daily_goal = xp
  showPicker.value = false
  await updateGoal(xp)
}

const CONFETTI_KEY = 'lf-confetti-date'

async function load() {
  const result = await fetchToday()
  if (result) {
    const wasReached = data.value.goal_reached
    data.value = result
    const today = new Date().toISOString().slice(0, 10)
    const alreadyCelebrated = sessionStorage.getItem(CONFETTI_KEY) === today
    if (!alreadyCelebrated && !wasReached && result.goal_reached) {
      showConfetti.value = true
      sessionStorage.setItem(CONFETTI_KEY, today)
      setTimeout(() => { showConfetti.value = false }, 4000)
    }
  }
}

onMounted(load)

defineExpose({ reload: load })
</script>

<style scoped>
.daily-widget { margin-bottom: 1.25rem; }
.streak-banner {
  background: #78350f30;
  border: 1px solid #f59e0b60;
  border-radius: 10px;
  padding: .6rem 1rem;
  color: #fde68a;
  font-size: .88rem;
  margin-bottom: .75rem;
  text-align: center;
}
.goal-card {
  background: #1e1e2e;
  border: 2px solid #2a2a3e;
  border-radius: 12px;
  padding: .9rem 1rem;
  transition: border-color .3s;
}
.goal-card.reached { border-color: #22c55e60; background: #14532d18; }
.goal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: .6rem; }
.goal-title { font-size: .88rem; color: #ccc; font-weight: 600; }
.goal-edit { background: none; border: none; cursor: pointer; font-size: .9rem; opacity: .5; }
.goal-edit:hover { opacity: 1; }
.goal-picker { display: flex; gap: .5rem; margin-bottom: .75rem; flex-wrap: wrap; }
.goal-opt { background: #12121f; border: 1px solid #333; border-radius: 20px;
  color: #aaa; padding: .25rem .75rem; font-size: .82rem; cursor: pointer; }
.goal-opt:hover, .goal-opt.active { border-color: #4f46e5; color: #a5b4fc; }
.goal-progress-bar { height: 8px; background: #333; border-radius: 4px; overflow: hidden; margin-bottom: .4rem; }
.goal-progress-fill { height: 100%; background: linear-gradient(90deg, #4f46e5, #22c55e); border-radius: 4px; transition: width .5s ease; }
.goal-card.reached .goal-progress-fill { background: #22c55e; }
.goal-numbers { display: flex; justify-content: space-between; font-size: .82rem; }
.xp-today { color: #a5b4fc; font-weight: 700; }
.xp-goal { color: #555; }
.reward-panel { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .6rem; margin-top: .75rem; }
.reward-panel > div { background: #12121f; border: 1px solid #2a2a3e; border-radius: 8px; padding: .55rem .65rem; }
.reward-label { display: block; color: var(--muted); font-size: .72rem; margin-bottom: .15rem; }
.reward-value { color: #f0abfc; font-size: .98rem; }
.reward-earned { color: #86efac; font-size: .98rem; }
.bonus-row { margin-top: .55rem; color: var(--muted); font-size: .78rem; }
.confetti-container {
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 0;
  pointer-events: none;
  z-index: 9999;
  overflow: visible;
}
.confetto {
  position: absolute;
  top: -10px;
  animation: fall linear forwards;
}
@keyframes fall {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}
</style>
