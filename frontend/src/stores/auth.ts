import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { API_URL } from '@/api/client'

export interface AuthUser {
  id: number
  name: string
  email: string
  email_verified_at: string | null
}

const TOKEN_KEY = 'auth_token'

function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY)
}

function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token)
}

function clearToken() {
  localStorage.removeItem(TOKEN_KEY)
}

export function authHeaders(): Record<string, string> {
  const token = getToken()
  return token ? { Authorization: `Bearer ${token}` } : {}
}

async function apiFetch(url: string, options: RequestInit = {}) {
  return fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...authHeaders(),
      ...(options.headers ?? {}),
    },
  })
}

export const useAuthStore = defineStore('auth', () => {
  const user    = ref<AuthUser | null>(null)
  const loading = ref(false)

  async function fetchUser() {
    if (!getToken()) { user.value = null; return }
    loading.value = true
    try {
      const res = await apiFetch(`${API_URL}/api/user`)
      user.value = res.ok ? (await res.json()).user : null
      if (!res.ok) clearToken()
    } catch {
      user.value = null
    } finally {
      loading.value = false
    }
  }

  async function login(email: string, password: string) {
    const res  = await apiFetch(`${API_URL}/api/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.message ?? 'Identifiants incorrects.')
    setToken(data.token)
    user.value = data.user
  }

  async function register(name: string, email: string, password: string, password_confirmation: string) {
    const res  = await apiFetch(`${API_URL}/api/register`, {
      method: 'POST',
      body: JSON.stringify({ name, email, password, password_confirmation }),
    })
    const data = await res.json()
    if (!res.ok) {
      const err: any = new Error(data.message ?? 'Erreur d\'inscription.')
      err.errors = data.errors ?? {}
      throw err
    }
    setToken(data.token)
    user.value = data.user
  }

  async function logout() {
    await apiFetch(`${API_URL}/api/logout`, { method: 'POST' })
    clearToken()
    user.value = null
  }

  async function deleteAccount() {
    const res = await apiFetch(`${API_URL}/api/me`, { method: 'DELETE' })
    if (!res.ok) {
      const data = await res.json()
      throw new Error(data.message ?? 'Erreur lors de la suppression.')
    }
    clearToken()
    user.value = null
  }

  const emailVerified = computed(() => !!user.value?.email_verified_at)

  async function resendVerification() {
    const res = await apiFetch(`${API_URL}/api/email/resend`, { method: 'POST' })
    const data = await res.json()
    if (!res.ok) throw new Error(data.message ?? 'Erreur lors de l\'envoi.')
    return data.message
  }

  return { user, loading, emailVerified, fetchUser, login, register, logout, deleteAccount, resendVerification }
})
