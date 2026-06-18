<template>
  <div v-if="offline" class="offline-banner">
    Mode hors-ligne — certaines fonctionnalités sont limitées
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const offline = ref(!navigator.onLine)

function goOffline() { offline.value = true }
function goOnline() { offline.value = false }

onMounted(() => {
  window.addEventListener('offline', goOffline)
  window.addEventListener('online', goOnline)
})
onUnmounted(() => {
  window.removeEventListener('offline', goOffline)
  window.removeEventListener('online', goOnline)
})
</script>

<style scoped>
.offline-banner { background: #f59e0b; color: #1a1a2e; text-align: center;
  padding: 0.4rem; font-size: 0.8rem; font-weight: 600; }
</style>
