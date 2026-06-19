<template>
  <div class="leaderboard">
    <div class="lb-header">
      <button class="btn-back" @click="router.push('/')">← Accueil</button>
      <h2>🏆 Classement XP</h2>
      <span></span>
    </div>

    <div v-if="loading" class="loader">Chargement…</div>

    <template v-else-if="data">
      <!-- Ma position (si connecté) -->
      <div v-if="data.my_rank" class="my-rank-card">
        <span class="my-rank-label">Ta position</span>
        <span class="my-rank-num">#{{ data.my_rank }}</span>
        <span class="my-rank-xp">{{ data.my_xp?.toLocaleString() }} XP</span>
      </div>

      <!-- Top 20 -->
      <div class="lb-list">
        <div
          v-for="entry in data.leaderboard"
          :key="entry.id"
          class="lb-row"
          :class="{
            'rank-1': entry.rank === 1,
            'rank-2': entry.rank === 2,
            'rank-3': entry.rank === 3,
            'is-me':  auth.user?.id === entry.id,
          }"
        >
          <span class="lb-rank">
            {{ entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : '#' + entry.rank }}
          </span>
          <span class="lb-name">{{ entry.name }}</span>
          <span class="lb-xp">{{ entry.total_xp.toLocaleString() }} <span class="xp-label">XP</span></span>
        </div>

        <div v-if="!data.leaderboard.length" class="empty">
          Aucun joueur pour l'instant. Sois le premier !
        </div>
      </div>
    </template>

    <div v-else class="empty">Impossible de charger le classement.</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { fetchLeaderboard, type LeaderboardData } from '@/api/progress'

const router = useRouter()
const auth   = useAuthStore()

const loading = ref(true)
const data    = ref<LeaderboardData | null>(null)

onMounted(async () => {
  data.value    = await fetchLeaderboard()
  loading.value = false
})
</script>

<style scoped>
.leaderboard { max-width: 560px; margin: 0 auto; padding: 1.5rem 1rem; }

.lb-header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 1.5rem;
}
.lb-header h2 { font-size: 1.3rem; margin: 0; }
.btn-back { background: none; border: none; color: var(--muted); cursor: pointer; font-size: .9rem; }

.loader { text-align: center; color: var(--muted); margin-top: 4rem; }
.empty  { text-align: center; color: var(--muted); padding: 2rem; }

/* My rank card */
.my-rank-card {
  display: flex; align-items: center; justify-content: space-between;
  background: #4f46e520; border: 2px solid var(--accent);
  border-radius: 12px; padding: .9rem 1.25rem; margin-bottom: 1.25rem;
}
.my-rank-label { color: var(--muted2); font-size: .85rem; }
.my-rank-num   { font-size: 1.6rem; font-weight: 800; color: var(--accent); }
.my-rank-xp    { font-size: 1rem; font-weight: 700; color: var(--text); }

/* List */
.lb-list { display: flex; flex-direction: column; gap: .4rem; }

.lb-row {
  display: flex; align-items: center; gap: .75rem;
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: 10px; padding: .7rem 1rem;
  transition: border-color .15s;
}
.lb-row.rank-1 { background: #fef08a18; border-color: #fbbf24; }
.lb-row.rank-2 { background: #e2e8f018; border-color: #94a3b8; }
.lb-row.rank-3 { background: #fed7aa18; border-color: #fb923c; }
.lb-row.is-me  { border-color: var(--accent); }

.lb-rank { min-width: 36px; font-size: 1rem; font-weight: 700; color: var(--muted2); }
.lb-name { flex: 1; font-weight: 600; color: var(--text); font-size: .95rem; }
.lb-xp   { font-weight: 700; color: #a78bfa; font-size: .95rem; white-space: nowrap; }
.xp-label { font-size: .75rem; font-weight: 400; color: var(--muted); }

.rank-1 .lb-rank { color: #fbbf24; }
.rank-2 .lb-rank { color: #94a3b8; }
.rank-3 .lb-rank { color: #fb923c; }

@media (max-width: 480px) {
  .lb-header h2 { font-size: 1.1rem; }
  .my-rank-card { padding: .7rem .9rem; }
  .my-rank-num { font-size: 1.3rem; }
  .lb-row { padding: .55rem .75rem; gap: .5rem; }
  .lb-name { font-size: .88rem; }
  .lb-xp { font-size: .88rem; }
}
</style>
