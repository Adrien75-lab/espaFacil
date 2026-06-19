<template>
  <div>
    <OfflineBanner />
    <!-- Auth bar -->
    <div class="auth-bar">
      <button class="theme-toggle" @click="toggle" :title="theme === 'dark' ? 'Mode clair' : 'Mode sombre'">
        {{ theme === 'dark' ? '☀️' : '🌙' }}
      </button>
      <PwaInstallPrompt />
      <template v-if="auth.user">
        <RouterLink class="auth-btn" to="/leaderboard">🏆</RouterLink>
        <RouterLink class="auth-btn" to="/progression">Progression</RouterLink>
        <RouterLink class="auth-btn" to="/profile">👤 {{ auth.user.name }}</RouterLink>
        <button class="auth-btn" @click="doLogout">Déconnexion</button>
      </template>
      <template v-else>
        <RouterLink class="auth-btn" to="/login">Connexion</RouterLink>
        <RouterLink class="auth-btn accent" to="/register">S'inscrire</RouterLink>
      </template>
    </div>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useTheme } from '@/composables/useTheme'
import PwaInstallPrompt from '@/components/PwaInstallPrompt.vue'
import OfflineBanner from '@/components/OfflineBanner.vue'

const auth = useAuthStore()
const { theme, toggle } = useTheme()

onMounted(() => auth.fetchUser())

async function doLogout() {
  await auth.logout()
}
</script>

<style>
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg-app); color: var(--text); font-family: system-ui, sans-serif; }
a { color: inherit; }
</style>

<style scoped>
.auth-bar { display: flex; justify-content: flex-end; align-items: center;
  gap: 0.5rem; padding: 0.5rem 1rem; background: var(--bg-nav); border-bottom: 1px solid var(--border);
  flex-wrap: wrap; }
.auth-name { color: var(--muted); font-size: 0.85rem; }
.auth-btn { background: none; border: 1px solid var(--border); border-radius: 6px;
  color: var(--dim); padding: 0.3rem 0.8rem; font-size: 0.82rem; cursor: pointer;
  text-decoration: none; display: inline-block; transition: border-color .15s; white-space: nowrap; }
.auth-btn:hover { border-color: var(--accent); color: var(--text); }
.auth-btn.accent { background: var(--accent); border-color: var(--accent); color: white; }
.theme-toggle { background: none; border: 1px solid var(--border); border-radius: 6px;
  padding: 0.3rem 0.6rem; cursor: pointer; font-size: 1rem; margin-right: auto; transition: border-color .15s; }
.theme-toggle:hover { border-color: var(--accent); }
@media (max-width: 480px) {
  .auth-bar { gap: 0.35rem; padding: 0.4rem 0.5rem; }
  .auth-btn { padding: 0.25rem 0.5rem; font-size: 0.75rem; }
}
</style>
