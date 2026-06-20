<template>
  <div class="auth-page">
    <div class="auth-card">
      <h2>✨ Créer un compte</h2>
      <form @submit.prevent="submit">
        <label>Pseudo</label>
        <input v-model="name" type="text" required autocomplete="username" placeholder="ex: SuperLearner42" />
        <p v-if="fieldErrors.name" class="field-error">{{ fieldErrors.name }}</p>
        <label>Email</label>
        <input v-model="email" type="email" required autocomplete="email" placeholder="votre@email.com" />
        <p v-if="fieldErrors.email" class="field-error">{{ fieldErrors.email }}</p>
        <label>Mot de passe</label>
        <input v-model="password" type="password" required autocomplete="new-password" />
        <div class="password-rules" v-if="password">
          <p :class="{ ok: rules.length }">{{ rules.length ? '✓' : '✗' }} 12 caractères minimum</p>
          <p :class="{ ok: rules.uppercase }">{{ rules.uppercase ? '✓' : '✗' }} Une majuscule</p>
          <p :class="{ ok: rules.lowercase }">{{ rules.lowercase ? '✓' : '✗' }} Une minuscule</p>
          <p :class="{ ok: rules.number }">{{ rules.number ? '✓' : '✗' }} Un chiffre</p>
          <p :class="{ ok: rules.special }">{{ rules.special ? '✓' : '✗' }} Un caractère spécial (@#$!…)</p>
          <div class="strength-bar">
            <div class="strength-fill" :style="{ width: strengthPercent + '%' }" :class="strengthClass"></div>
          </div>
          <p class="strength-label" :class="strengthClass">{{ strengthLabel }}</p>
        </div>
        <label>Confirmer le mot de passe</label>
        <input v-model="password_confirmation" type="password" required autocomplete="new-password" />
        <p v-if="password_confirmation && password !== password_confirmation" class="field-error">Les mots de passe ne correspondent pas.</p>
        <p v-if="fieldErrors.password" class="field-error">{{ fieldErrors.password }}</p>
        <label class="cgu-check">
          <input type="checkbox" v-model="cguAccepted" />
          J'accepte les <RouterLink to="/cgu" target="_blank">conditions générales d'utilisation</RouterLink>
        </label>
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
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const auth                 = useAuthStore()
const router               = useRouter()
const name                 = ref('')
const email                = ref('')
const password             = ref('')
const password_confirmation = ref('')
const cguAccepted          = ref(false)
const error                = ref('')
const fieldErrors          = ref<Record<string, string>>({})
const loading              = ref(false)

const rules = computed(() => ({
  length: password.value.length >= 12,
  uppercase: /[A-Z]/.test(password.value),
  lowercase: /[a-z]/.test(password.value),
  number: /\d/.test(password.value),
  special: /[^A-Za-z0-9]/.test(password.value),
}))

const strengthScore = computed(() =>
  Object.values(rules.value).filter(Boolean).length
)

const strengthPercent = computed(() => (strengthScore.value / 5) * 100)

const strengthClass = computed(() => {
  if (strengthScore.value <= 2) return 'weak'
  if (strengthScore.value <= 3) return 'medium'
  if (strengthScore.value <= 4) return 'strong'
  return 'excellent'
})

const strengthLabel = computed(() => {
  if (strengthScore.value <= 2) return 'Faible'
  if (strengthScore.value <= 3) return 'Moyen'
  if (strengthScore.value <= 4) return 'Fort'
  return 'Excellent'
})

const allRulesValid = computed(() => strengthScore.value === 5)

async function submit() {
  error.value = ''
  fieldErrors.value = {}
  if (!cguAccepted.value) {
    error.value = 'Vous devez accepter les conditions générales d\'utilisation.'
    return
  }
  if (!allRulesValid.value) {
    error.value = 'Le mot de passe ne respecte pas tous les critères de sécurité.'
    return
  }
  if (password.value !== password_confirmation.value) {
    error.value = 'Les mots de passe ne correspondent pas.'
    return
  }
  loading.value = true
  try {
    await auth.register(name.value, email.value, password.value, password_confirmation.value)
    router.push('/verify-email')
  } catch (e: any) {
    if (e.errors && Object.keys(e.errors).length) {
      const errs: Record<string, string> = {}
      for (const [key, msgs] of Object.entries(e.errors)) {
        errs[key] = (msgs as string[])[0]
      }
      fieldErrors.value = errs
    } else {
      error.value = e.message
    }
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
.field-error { color: #f87171; font-size: 0.8rem; margin: -0.75rem 0 0.75rem; }
.switch { text-align: center; margin-top: 1rem; color: var(--muted); font-size: 0.9rem; }
.switch a { color: #818cf8; text-decoration: none; }
.btn-back { background: none; border: none; color: #666; cursor: pointer;
  font-size: 0.85rem; display: block; margin: 0.75rem auto 0; }
.cgu-check { display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem;
  color: var(--muted2); margin-bottom: 1rem; cursor: pointer; }
.cgu-check input[type=checkbox] { width: auto; margin: 0; cursor: pointer; }
.cgu-check a { color: #818cf8; text-decoration: none; }

.password-rules { margin: -0.5rem 0 1rem; padding: 0.75rem; background: rgba(255,255,255,0.03);
  border-radius: 8px; border: 1px solid var(--border); }
.password-rules p { font-size: 0.8rem; margin: 0.2rem 0; color: #f87171; transition: color 0.2s; }
.password-rules p.ok { color: #34d399; }

.strength-bar { height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px;
  margin-top: 0.5rem; overflow: hidden; }
.strength-fill { height: 100%; border-radius: 2px; transition: width 0.3s, background 0.3s; }
.strength-fill.weak { background: #f87171; }
.strength-fill.medium { background: #fbbf24; }
.strength-fill.strong { background: #60a5fa; }
.strength-fill.excellent { background: #34d399; }

.strength-label { font-size: 0.75rem; margin-top: 0.25rem; font-weight: 600; }
.strength-label.weak { color: #f87171; }
.strength-label.medium { color: #fbbf24; }
.strength-label.strong { color: #60a5fa; }
.strength-label.excellent { color: #34d399; }
</style>
