<template>
  <footer class="app-footer">
    <nav>
      <RouterLink to="/mentions-legales">Mentions légales</RouterLink>
      <span class="sep">·</span>
      <RouterLink to="/confidentialite">Confidentialité</RouterLink>
      <span class="sep">·</span>
      <RouterLink to="/cgu">CGU</RouterLink>
    </nav>
    <p class="copy">&copy; {{ year }} LinguaFacil</p>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
const year = new Date().getFullYear()
</script>

<style scoped>
.app-footer { text-align: center; padding: 1.5rem 1rem; border-top: 1px solid var(--border);
  margin-top: 2rem; font-size: 0.82rem; color: var(--muted); }
nav { display: flex; justify-content: center; gap: 0.3rem; flex-wrap: wrap; }
nav a { color: var(--muted2); text-decoration: none; }
nav a:hover { color: var(--accent); }
.sep { color: var(--border); }
.copy { margin-top: 0.4rem; color: var(--muted); font-size: 0.75rem; }
</style>
