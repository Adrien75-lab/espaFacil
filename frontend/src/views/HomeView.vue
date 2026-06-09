<template>
  <div class="home">
    <h1>🌍 LinguaFacil</h1>

    <!-- Langue non choisie : grille des 14 langues -->
    <template v-if="!store.currentLang">
      <p class="subtitle">Choisissez une langue</p>
      <div class="lang-grid">
        <button
          v-for="lang in store.languages"
          :key="lang.code"
          class="lang-card"
          @click="store.selectLanguage(lang.code)"
        >
          <span class="lang-flag">{{ lang.flag }}</span>
          <span class="lang-name">{{ lang.name }}</span>
        </button>
      </div>
    </template>

    <!-- Langue choisie : thèmes + niveau + bouton -->
    <template v-else>
      <button class="btn-back" @click="store.currentLang = null">← Changer de langue</button>
      <h2>{{ store.currentLang.flag }} {{ store.currentLang.name }}</h2>

      <p class="subtitle">Choisissez un thème</p>
      <div class="theme-grid">
        <button
          v-for="theme in store.themes"
          :key="theme.key"
          class="theme-card"
          :class="{ active: store.currentTheme?.key === theme.key }"
          @click="store.selectTheme(theme.key)"
        >
          <span class="theme-emoji">{{ theme.emoji }}</span>
          <span class="theme-name">{{ theme.name }}</span>
        </button>
      </div>

      <div class="level-row">
        <span class="label">Niveau :</span>
        <button
          v-for="lvl in levels"
          :key="lvl.key"
          class="btn-level"
          :class="{ active: store.currentLevel === lvl.key }"
          @click="store.setLevel(lvl.key)"
        >{{ lvl.label }}</button>
      </div>

      <!-- Sélecteur de mode -->
      <p class="subtitle" style="margin-top:1rem">Mode de jeu :</p>
      <div class="mode-row">
        <button
          v-for="m in modes"
          :key="m.key"
          class="mode-btn"
          :class="{ active: currentMode === m.key }"
          @click="currentMode = m.key"
        >
          <span>{{ m.emoji }}</span>
          <span>{{ m.label }}</span>
        </button>
      </div>

      <button
        class="btn-start"
        :disabled="!store.currentTheme"
        @click="goMode"
      >▶ Commencer</button>

      <!-- SRS : visible uniquement si connecté -->
      <div v-if="auth.user" class="srs-row">
        <button class="srs-btn review-btn" @click="router.push('/review')">
          🔁 Révision SRS
        </button>
        <button class="srs-btn difficult-btn" @click="router.push('/difficult')">
          🔥 Mots difficiles
        </button>
      </div>
    </template>

    <div v-if="store.loading" class="loader">Chargement…</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useLangStore } from '@/stores/lang'
import { useAuthStore } from '@/stores/auth'
import type { Level } from '@/types'

const store  = useLangStore()
const auth   = useAuthStore()
const router = useRouter()

const levels: { key: Level; label: string }[] = [
  { key: 'debutant',      label: '🌱 Débutant' },
  { key: 'intermediaire', label: '🌿 Intermédiaire' },
  { key: 'avance',        label: '🌳 Avancé' },
]

const modes = [
  { key: 'quiz',       emoji: '🧠', label: 'QCM' },
  { key: 'cards',      emoji: '🃏', label: 'Cartes' },
  { key: 'fill-blank', emoji: '✏️',  label: 'Phrases' },
]
const currentMode = ref<string>('quiz')

onMounted(() => { if (!store.languages.length) store.loadLanguages() })

function goMode() {
  if (store.currentTheme) router.push('/' + currentMode.value)
}
</script>

<style scoped>
.home { max-width: 700px; margin: 0 auto; padding: 2rem 1rem; text-align: center; }
h1 { font-size: 2.2rem; margin-bottom: 0.25rem; }
h2 { margin: 1rem 0 0.5rem; font-size: 1.4rem; }
.subtitle { color: #888; margin-bottom: 1.25rem; }

.lang-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 0.75rem; }
.lang-card { background: #1e1e2e; border: 2px solid #333; border-radius: 10px; padding: 1rem 0.5rem;
  cursor: pointer; transition: border-color .2s, transform .15s; display: flex; flex-direction: column; align-items: center; gap: 0.4rem; }
.lang-card:hover { border-color: #4f46e5; transform: translateY(-2px); }
.lang-flag { font-size: 2rem; }
.lang-name { font-size: 0.85rem; color: #ccc; }

.theme-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 0.6rem; margin-bottom: 1.5rem; }
.theme-card { background: #1e1e2e; border: 2px solid #333; border-radius: 10px; padding: 0.75rem 0.5rem;
  cursor: pointer; transition: border-color .2s; display: flex; flex-direction: column; align-items: center; gap: 0.3rem; }
.theme-card:hover, .theme-card.active { border-color: #4f46e5; background: #2a2a3e; }
.theme-emoji { font-size: 1.6rem; }
.theme-name { font-size: 0.78rem; color: #ccc; }

.level-row { display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
.label { color: #aaa; }
.btn-level { background: #1e1e2e; border: 2px solid #333; border-radius: 20px;
  padding: 0.4rem 1rem; cursor: pointer; color: #ccc; font-size: 0.88rem; transition: border-color .2s; }
.btn-level:hover, .btn-level.active { border-color: #4f46e5; color: #fff; background: #2a2a3e; }

.btn-start { background: #4f46e5; color: white; border: none; border-radius: 8px;
  padding: 0.75rem 2.5rem; font-size: 1.05rem; font-weight: 700; cursor: pointer; transition: opacity .2s; }
.btn-start:disabled { opacity: 0.4; cursor: not-allowed; }
.btn-start:not(:disabled):hover { opacity: 0.88; }

.btn-back { background: none; border: none; color: #888; cursor: pointer; margin-bottom: 0.5rem; font-size: 0.9rem; }
.loader { margin-top: 2rem; color: #888; }

.mode-row { display: flex; gap: 0.75rem; justify-content: center; margin-bottom: 1.5rem; flex-wrap: wrap; }
.mode-btn { background: #1e1e2e; border: 2px solid #333; border-radius: 10px;
  padding: 0.65rem 1.4rem; cursor: pointer; color: #ccc; display: flex; flex-direction: column;
  align-items: center; gap: 0.25rem; font-size: 0.88rem; transition: border-color .2s; min-width: 90px; }
.mode-btn span:first-child { font-size: 1.5rem; }
.mode-btn:hover, .mode-btn.active { border-color: #4f46e5; background: #2a2a3e; color: #fff; }

.srs-row { display: flex; gap: 0.75rem; justify-content: center; margin-top: 1.25rem; flex-wrap: wrap; }
.srs-btn { border: none; border-radius: 8px; padding: 0.6rem 1.4rem; font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: opacity .2s; }
.review-btn   { background: #4f46e520; color: #a5b4fc; border: 2px solid #4f46e5; }
.difficult-btn { background: #ef444420; color: #fca5a5; border: 2px solid #ef4444; }
.srs-btn:hover { opacity: 0.8; }
</style>
