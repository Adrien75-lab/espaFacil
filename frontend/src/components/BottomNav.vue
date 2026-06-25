<template>
  <nav v-if="auth.user" class="bottom-nav">
    <RouterLink to="/" class="nav-item" :class="{ active: route.path === '/' }">
      <span class="nav-icon">🏠</span>
      <span class="nav-label">Accueil</span>
    </RouterLink>
    <RouterLink to="/progression" class="nav-item" :class="{ active: route.path === '/progression' }">
      <span class="nav-icon">📊</span>
      <span class="nav-label">Progrès</span>
    </RouterLink>
    <RouterLink to="/leaderboard" class="nav-item" :class="{ active: route.path === '/leaderboard' }">
      <span class="nav-icon">🏆</span>
      <span class="nav-label">Classement</span>
    </RouterLink>
    <RouterLink to="/profile" class="nav-item" :class="{ active: route.path === '/profile' }">
      <span class="nav-icon">👤</span>
      <span class="nav-label">Profil</span>
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const route = useRoute()
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
  background: var(--bg-nav);
  border-top: 1px solid var(--border);
  z-index: 100;
  padding: 0.35rem 0 calc(0.35rem + env(safe-area-inset-bottom, 0px));
}
.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  text-decoration: none;
  color: var(--muted);
  font-size: 0.68rem;
  padding: 0.2rem 0;
  transition: color 0.15s;
  flex: 1;
}
.nav-item.active {
  color: var(--accent);
}
.nav-icon {
  font-size: 1.25rem;
  line-height: 1;
}
.nav-label {
  font-weight: 600;
  letter-spacing: -0.01em;
}
@media (max-width: 640px) {
  .bottom-nav {
    display: flex;
  }
}
</style>
