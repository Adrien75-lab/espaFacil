<template>
  <div class="auth-page">
    <div class="auth-card verify-card">
      <div class="icon">📧</div>
      <h2>Vérifiez votre email</h2>
      <p class="desc">
        Un email de confirmation a été envoyé à <strong>{{ auth.user?.email }}</strong>.
        Cliquez sur le lien dans l'email pour activer votre compte.
      </p>
      <p class="hint">Vérifiez aussi vos spams.</p>
      <button @click="resend" :disabled="cooldown > 0" class="btn-resend">
        {{ cooldown > 0 ? `Renvoyer (${cooldown}s)` : 'Renvoyer l\'email' }}
      </button>
      <p v-if="message" class="success">{{ message }}</p>
      <p v-if="error" class="error">{{ error }}</p>
      <button class="btn-back" @click="doLogout">Se déconnecter</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const router = useRouter()
const message = ref('')
const error = ref('')
const cooldown = ref(0)

let timer: ReturnType<typeof setInterval> | null = null

async function resend() {
  error.value = ''
  message.value = ''
  try {
    message.value = await auth.resendVerification()
    cooldown.value = 60
    timer = setInterval(() => {
      cooldown.value--
      if (cooldown.value <= 0 && timer) {
        clearInterval(timer)
        timer = null
      }
    }, 1000)
  } catch (e: any) {
    error.value = e.message
  }
}

async function doLogout() {
  await auth.logout()
  router.push('/login')
}
</script>

<style scoped>
.auth-page { display: flex; justify-content: center; align-items: center;
  min-height: 100vh; padding: 2rem 1rem; }
.verify-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px;
  padding: 2.5rem 2rem; width: 100%; max-width: 420px; text-align: center; }
.icon { font-size: 3rem; margin-bottom: 1rem; }
h2 { margin-bottom: 1rem; font-size: 1.3rem; }
.desc { color: var(--muted2); font-size: 0.9rem; line-height: 1.5; margin-bottom: 0.5rem; }
.desc strong { color: #eee; }
.hint { color: var(--muted); font-size: 0.8rem; margin-bottom: 1.5rem; }
.btn-resend { width: 100%; background: var(--accent); color: white; border: none;
  border-radius: 8px; padding: 0.7rem; font-size: 1rem; font-weight: 600; cursor: pointer; }
.btn-resend:disabled { opacity: 0.5; cursor: not-allowed; }
.success { color: #34d399; font-size: 0.85rem; margin-top: 0.75rem; }
.error { color: #f87171; font-size: 0.85rem; margin-top: 0.75rem; }
.btn-back { background: none; border: none; color: #666; cursor: pointer;
  font-size: 0.85rem; display: block; margin: 1rem auto 0; }
</style>
