import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface AuthUser {
  id: number
  name: string
  email: string
}

async function apiFetch(url: string, options: RequestInit = {}) {
  return fetch(url, {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...(options.headers ?? {}),
    },
  })
}

export const useAuthStore = defineStore('auth', () => {
  const user    = ref<AuthUser | null>(null)
  const loading = ref(false)

  async function csrfCookie() {
    await apiFetch('/sanctum/csrf-cookie')
  }

  async function fetchUser() {
    loading.value = true
    try {
      const res = await apiFetch('/api/user')
      user.value = res.ok ? (await res.json()).user : null
    } catch {
      user.value = null
    } finally {
      loading.value = false
    }
  }

  async function login(email: string, password: string) {
    await csrfCookie()
    const res  = await apiFetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.message ?? 'Identifiants incorrects.')
    user.value = data.user
  }

  async function register(name: string, email: string, password: string, password_confirmation: string) {
    await csrfCookie()
    const res  = await apiFetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, password_confirmation }),
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.message ?? 'Erreur d\'inscription.')
    user.value = data.user
  }

  async function logout() {
    await apiFetch('/api/logout', { method: 'POST' })
    user.value = null
  }

  async function deleteAccount() {
    const res = await apiFetch('/api/me', { method: 'DELETE' })
    if (!res.ok) {
      const data = await res.json()
      throw new Error(data.message ?? 'Erreur lors de la suppression.')
    }
    user.value = null
  }

  return { user, loading, fetchUser, login, register, logout, deleteAccount }
})
