<template>
  <div class="home">
    <h1>🌍 LinguaFacil</h1>

    <!-- Objectif quotidien (si connecté) -->
    <DailyGoalWidget v-if="auth.user" ref="goalWidget" />

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
          <FlagIcon :lang="lang.code" :size="36" />
          <span class="lang-name">{{ lang.name }}</span>
        </button>
      </div>
    </template>

    <!-- Langue choisie : thèmes + niveau + bouton -->
    <template v-else>
      <button class="btn-back" @click="store.currentLang = null">← Changer de langue</button>
      <h2><FlagIcon :lang="store.currentLang.code" :size="28" /> {{ store.currentLang.name }}</h2>

      <!-- Sélecteur de mode (en premier) -->
      <p class="subtitle">Mode de jeu :</p>
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

      <!-- Thème + niveau : masqués en mode Dialogue -->
      <template v-if="currentMode !== 'dialogue'">
        <p class="subtitle" style="margin-top:1rem">Choisissez un thème</p>
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
      </template>

      <!-- Sélection du scénario (mode dialogue uniquement) -->
      <template v-else>
        <p class="subtitle" style="margin-top:1rem">Choisissez un scénario</p>
        <div v-if="dialogueScenarios.length" class="scenario-grid">
          <button
            v-for="sc in dialogueScenarios"
            :key="sc.id"
            class="scenario-card"
            :class="{ active: selectedScenario === sc.id }"
            @click="selectedScenario = sc.id"
          >
            <span class="sc-emoji">{{ sc.emoji }}</span>
            <span class="sc-title">{{ sc.title_fr }}</span>
          </button>
        </div>
        <p v-else class="dialogue-info">⚠️ Aucun scénario disponible pour cette langue.</p>
      </template>

      <button
        class="btn-start"
        :disabled="currentMode === 'dialogue' ? !selectedScenario : NO_THEME_MODES.includes(currentMode) ? false : !store.currentTheme"
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
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useLangStore } from '@/stores/lang'
import { useAuthStore } from '@/stores/auth'
import DailyGoalWidget from '@/components/DailyGoalWidget.vue'
import FlagIcon from '@/components/FlagIcon.vue'
import { DIALOGUES } from '@/data/dialogues'
import type { Level } from '@/types'

const store      = useLangStore()
const auth       = useAuthStore()
const router     = useRouter()
const goalWidget = ref<InstanceType<typeof DailyGoalWidget> | null>(null)

const selectedScenario = ref<string | null>(null)
const currentMode      = ref<string>('quiz')

const dialogueScenarios = computed(() =>
  store.currentLang ? (DIALOGUES[store.currentLang.code] ?? []) : []
)

// Reset selected scenario when lang or mode changes
watch([() => store.currentLang, currentMode], () => { selectedScenario.value = null })

const levels: { key: Level; label: string }[] = [
  { key: 'debutant',      label: '🌱 Débutant' },
  { key: 'intermediaire', label: '🌿 Intermédiaire' },
  { key: 'avance',        label: '🌳 Avancé' },
]

const modes = [
  { key: 'quiz',             emoji: '🧠', label: 'QCM' },
  { key: 'cards',            emoji: '🃏', label: 'Cartes' },
  { key: 'fill-blank',       emoji: '✏️',  label: 'Phrases' },
  { key: 'listen',           emoji: '🎧', label: 'Écoute' },
  { key: 'speak',            emoji: '🎙️', label: 'Prononciation' },
  { key: 'sentence-builder', emoji: '🧩', label: 'Reconstitution' },
  { key: 'dictee',           emoji: '🎧✍️', label: 'Dictée' },
  { key: 'paires',           emoji: '🃏',   label: 'Paires' },
  { key: 'dialogue',         emoji: '💬',   label: 'Dialogue' },
  { key: 'anagram',          emoji: '🔀',   label: 'Anagramme' },
  { key: 'survival',         emoji: '🆘',   label: 'Survie' },
  { key: 'voyage',           emoji: '✈️',   label: 'Voyage' },
]

// Modes qui ne nécessitent pas de thème sélectionné
const NO_THEME_MODES = ['dialogue', 'survival', 'voyage']

onMounted(() => { if (!store.languages.length) store.loadLanguages() })

function goMode() {
  if (currentMode.value === 'dialogue') {
    if (selectedScenario.value) router.push(`/dialogue?scenario=${selectedScenario.value}`)
  } else if (currentMode.value === 'survival') {
    router.push('/survival')
  } else if (currentMode.value === 'voyage') {
    router.push('/voyage')
  } else if (store.currentTheme) {
    router.push('/' + currentMode.value)
  }
}
</script>

<style scoped>
.home { max-width: 700px; margin: 0 auto; padding: 2rem 1rem; text-align: center; }
h1 { font-size: 2.2rem; margin-bottom: 0.25rem; }
h2 { margin: 1rem 0 0.5rem; font-size: 1.4rem; }
.subtitle { color: var(--muted); margin-bottom: 1.25rem; }

.lang-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 0.75rem; }
.lang-card { background: var(--bg-card); border: 2px solid var(--border); border-radius: 10px; padding: 1rem 0.5rem;
  cursor: pointer; transition: border-color .2s, transform .15s; display: flex; flex-direction: column; align-items: center; gap: 0.4rem; }
.lang-card:hover { border-color: var(--accent); transform: translateY(-2px); }
.lang-name { font-size: 0.85rem; color: var(--dim); }

.theme-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 0.6rem; margin-bottom: 1.5rem; }
.theme-card { background: var(--bg-card); border: 2px solid var(--border); border-radius: 10px; padding: 0.75rem 0.5rem;
  cursor: pointer; transition: border-color .2s; display: flex; flex-direction: column; align-items: center; gap: 0.3rem; }
.theme-card:hover, .theme-card.active { border-color: var(--accent); background: var(--bg-hover); }
.theme-emoji { font-size: 1.6rem; }
.theme-name { font-size: 0.78rem; color: var(--dim); }

.level-row { display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
.label { color: var(--muted2); }
.btn-level { background: var(--bg-card); border: 2px solid var(--border); border-radius: 20px;
  padding: 0.4rem 1rem; cursor: pointer; color: var(--dim); font-size: 0.88rem; transition: border-color .2s; }
.btn-level:hover, .btn-level.active { border-color: var(--accent); color: var(--text); background: var(--bg-hover); }

.btn-start { background: var(--accent); color: white; border: none; border-radius: 8px;
  padding: 0.75rem 2.5rem; font-size: 1.05rem; font-weight: 700; cursor: pointer; transition: opacity .2s; }
.btn-start:disabled { opacity: 0.4; cursor: not-allowed; }
.btn-start:not(:disabled):hover { opacity: 0.88; }

.btn-back { background: none; border: none; color: var(--muted); cursor: pointer; margin-bottom: 0.5rem; font-size: 0.9rem; }
.dialogue-info { color: var(--muted2); font-size: 0.9rem; margin: 1rem 0 1.5rem; padding: 0.75rem 1rem; background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; }

.scenario-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 0.6rem; margin-bottom: 1.5rem; }
.scenario-card { background: var(--bg-card); border: 2px solid var(--border); border-radius: 10px; padding: 0.75rem 0.5rem;
  cursor: pointer; transition: border-color .2s; display: flex; flex-direction: column; align-items: center; gap: 0.3rem; }
.scenario-card:hover, .scenario-card.active { border-color: #0ea5e9; background: var(--bg-hover); }
.sc-emoji { font-size: 1.8rem; }
.sc-title { font-size: 0.75rem; color: var(--dim); text-align: center; line-height: 1.3; }
.loader { margin-top: 2rem; color: var(--muted); }

.mode-row { display: flex; gap: 0.75rem; justify-content: center; margin-bottom: 1.5rem; flex-wrap: wrap; }
.mode-btn { background: var(--bg-card); border: 2px solid var(--border); border-radius: 10px;
  padding: 0.65rem 1.4rem; cursor: pointer; color: var(--dim); display: flex; flex-direction: column;
  align-items: center; gap: 0.25rem; font-size: 0.88rem; transition: border-color .2s; min-width: 90px; }
.mode-btn span:first-child { font-size: 1.5rem; }
.mode-btn:hover, .mode-btn.active { border-color: var(--accent); background: var(--bg-hover); color: var(--text); }

.srs-row { display: flex; gap: 0.75rem; justify-content: center; margin-top: 1.25rem; flex-wrap: wrap; }
.srs-btn { border: none; border-radius: 8px; padding: 0.6rem 1.4rem; font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: opacity .2s; }
.review-btn   { background: var(--accent)20; color: #a5b4fc; border: 2px solid var(--accent); }
.difficult-btn { background: #ef444420; color: #fca5a5; border: 2px solid #ef4444; }
.srs-btn:hover { opacity: 0.8; }
</style>
