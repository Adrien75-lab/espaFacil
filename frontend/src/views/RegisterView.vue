<template>
  <div class="auth-page">
    <div class="auth-card">
      <h2>✨ Créer un compte</h2>
      <form @submit.prevent="submit">
        <label>Nom</label>
        <input v-model="name" type="text" required autocomplete="name" />
        <label>Email</label>
        <input v-model="email" type="email" required autocomplete="email" />
        <label>Mot de passe (8 caractères min.)</label>
        <input v-model="password" type="password" required autocomplete="new-password" />
        <label>Confirmer le mot de passe</label>
        <input v-model="password_confirmation" type="password" required autocomplete="new-password" />
        <p v-if="error" class="error">{{ error }}</p>
        <button type="submit" :disabled="loading">
          {{ loading ? 'Inscription…' : 'Créer mon compte' }}
        </button>
      </form>
      <p class="switch">Déjà un compte ?
        <RouterLink to="/login">Se connecter</RouterLink>
      </p>
      <button class="btn-back" @click="router.back()">← Retour</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const auth                 = useAuthStore()
const router               = useRouter()
const name                 = ref('')
const email                = ref('')
const password             = ref('')
const password_confirmation = ref('')
const error                = ref('')
const loading              = ref(false)

async function submit() {
  error.value   = ''
  loading.value = true
  try {
    await auth.register(name.value, email.value, password.value, password_confirmation.value)
    router.push('/')
  } catch (e: any) {
    error.value = e.message
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.auth-page { display: flex; justify-content: center; align-items: center;
  min-height: 100vh; padding: 2rem 1rem; }
.auth-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px;
  padding: 2rem; width: 100%; max-width: 380px; }
h2 { margin-bottom: 1.5rem; text-align: center; font-size: 1.4rem; }
label { display: block; color: var(--muted2); font-size: 0.85rem; margin-bottom: 0.3rem; }
input { width: 100%; background: var(--bg-nav); border: 1px solid var(--border); border-radius: 8px;
  color: #eee; padding: 0.6rem 0.75rem; font-size: 0.95rem; margin-bottom: 1rem;
  box-sizing: border-box; }
input:focus { outline: none; border-color: var(--accent); }
button[type=submit] { width: 100%; background: var(--accent); color: white; border: none;
  border-radius: 8px; padding: 0.7rem; font-size: 1rem; font-weight: 600; cursor: pointer; }
button[type=submit]:disabled { opacity: 0.5; cursor: not-allowed; }
.error { color: #f87171; font-size: 0.85rem; margin-bottom: 0.75rem; }
.switch { text-align: center; margin-top: 1rem; color: var(--muted); font-size: 0.9rem; }
.switch a { color: #818cf8; text-decoration: none; }
.btn-back { background: none; border: none; color: #666; cursor: pointer;
  font-size: 0.85rem; display: block; margin: 0.75rem auto 0; }
</style>
