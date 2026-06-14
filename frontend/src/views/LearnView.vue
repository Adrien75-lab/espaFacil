<template>
  <div class="learn">
    <h2>Mode apprentissage</h2>
    <p>Langue active : <strong>{{ langStore.currentLang?.name ?? 'Aucune' }}</strong></p>
    <RouterLink to="/">← Retour</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useLangStore } from '@/stores/lang'
const langStore = useLangStore()
</script>
