<template>
  <button v-if="canInstall" class="pwa-install" @click="install">
    📲 Installer l'app
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const canInstall = ref(false)
let deferredPrompt: any = null

onMounted(() => {
  window.addEventListener('beforeinstallprompt', (e: Event) => {
    e.preventDefault()
    deferredPrompt = e
    canInstall.value = true
  })

  window.addEventListener('appinstalled', () => {
    canInstall.value = false
    deferredPrompt = null
  })
})

async function install() {
  if (!deferredPrompt) return
  deferredPrompt.prompt()
  const { outcome } = await deferredPrompt.userChoice
  if (outcome === 'accepted') canInstall.value = false
  deferredPrompt = null
}
</script>

<style scoped>
.pwa-install { background: var(--accent); color: white; border: none; border-radius: 6px;
  padding: 0.3rem 0.8rem; font-size: 0.82rem; cursor: pointer; font-weight: 600;
  transition: opacity 0.15s; }
.pwa-install:hover { opacity: 0.85; }
</style>
