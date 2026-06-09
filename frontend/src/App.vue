<template>
  <div>
    <!-- Auth bar -->
    <div class="auth-bar">
      <template v-if="auth.user">
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

const auth = useAuthStore()

onMounted(() => auth.fetchUser())

async function doLogout() {
  await auth.logout()
}
</script>

<style>
* { box-sizing: border-box; }
body { margin: 0; background: #0f0f1a; color: #e2e8f0; font-family: system-ui, sans-serif; }
a { color: inherit; }
</style>

<style scoped>
.auth-bar { display: flex; justify-content: flex-end; align-items: center;
  gap: 0.5rem; padding: 0.5rem 1rem; background: #12121f; border-bottom: 1px solid #1e1e2e; }
.auth-name { color: #888; font-size: 0.85rem; }
.auth-btn { background: none; border: 1px solid #333; border-radius: 6px;
  color: #ccc; padding: 0.3rem 0.8rem; font-size: 0.82rem; cursor: pointer;
  text-decoration: none; display: inline-block; transition: border-color .15s; }
.auth-btn:hover { border-color: #4f46e5; color: #fff; }
.auth-btn.accent { background: #4f46e5; border-color: #4f46e5; color: white; }
</style>
