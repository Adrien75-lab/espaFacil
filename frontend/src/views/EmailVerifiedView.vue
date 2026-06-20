<template>
  <div class="auth-page">
    <div class="auth-card verified-card">
      <div class="icon">✅</div>
      <h2>Email vérifié !</h2>
      <p class="desc">Votre compte est maintenant activé. Vous pouvez commencer à apprendre.</p>
      <button class="btn-start" @click="goHome">C'est parti !</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const auth = useAuthStore()

async function goHome() {
  await auth.fetchUser()
  router.push('/')
}
</script>

<style scoped>
.auth-page { display: flex; justify-content: center; align-items: center;
  min-height: 100vh; padding: 2rem 1rem; }
.verified-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px;
  padding: 2.5rem 2rem; width: 100%; max-width: 420px; text-align: center; }
.icon { font-size: 3rem; margin-bottom: 1rem; }
h2 { margin-bottom: 1rem; font-size: 1.3rem; color: #34d399; }
.desc { color: var(--muted2); font-size: 0.9rem; line-height: 1.5; margin-bottom: 1.5rem; }
.btn-start { width: 100%; background: var(--accent); color: white; border: none;
  border-radius: 8px; padding: 0.7rem; font-size: 1rem; font-weight: 600; cursor: pointer; }
</style>
