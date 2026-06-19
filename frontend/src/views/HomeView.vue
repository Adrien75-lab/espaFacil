<template>
  <div class="home">
    <!-- Visiteur non connecté : page d'accueil marketing -->
    <LandingHero v-if="isGuest && showLanding" @start-demo="startDemo" />

    <template v-else>
      <h1>🌍 LinguaFacil</h1>

      <!-- Objectif quotidien (si connecté) -->
      <DailyGoalWidget v-if="auth.user" ref="goalWidget" />

      <!-- Bandeau mode démo (visiteur non connecté) -->
      <div v-if="isGuest" class="demo-banner">
        🔓 Mode démo — l'espagnol, le niveau débutant et les modes QCM/Cartes sont disponibles sans compte.
        <RouterLink to="/register" class="demo-link">Inscrivez-vous gratuitement</RouterLink> pour tout débloquer.
      </div>

      <!-- Langue non choisie : grille des 14 langues -->
      <template v-if="!store.currentLang">
        <section class="start-guide" aria-labelledby="start-guide-title">
          <p class="eyebrow">Parcours conseillé</p>
          <h2 id="start-guide-title">Commencez en 3 étapes simples</h2>
          <div class="guide-steps">
            <div class="guide-step">
              <span class="step-number">1</span>
              <strong>Choisissez une langue</strong>
              <small>La démo démarre en espagnol débutant.</small>
            </div>
            <div class="guide-step">
              <span class="step-number">2</span>
              <strong>Faites une leçon courte</strong>
              <small>QCM ou cartes pour découvrir les premiers mots.</small>
            </div>
            <div class="guide-step">
              <span class="step-number">3</span>
              <strong>Revenez demain</strong>
              <small>La révision consolide ce que vous avez appris.</small>
            </div>
          </div>
        </section>

        <p class="subtitle">Choisissez une langue</p>
        <div class="lang-grid">
          <button
            v-for="lang in store.languages"
            :key="lang.code"
            class="lang-card"
            :class="{ locked: isGuestLangLocked(lang.code) }"
            :title="isGuestLangLocked(lang.code) ? '🔒 Inscrivez-vous gratuitement pour débloquer cette langue' : ''"
            @click="onLangClick(lang)"
          >
            <FlagIcon :lang="lang.code" :size="36" />
            <span class="lang-name">{{ lang.name }}</span>
            <span v-if="isGuestLangLocked(lang.code)" class="lock-badge">🔒</span>
          </button>
        </div>
      </template>

      <!-- Langue choisie : thèmes + niveau + bouton -->
      <template v-else>
        <button class="btn-back" @click="store.currentLang = null">← Changer de langue</button>
        <h2><FlagIcon :lang="store.currentLang.code" :size="28" /> {{ store.currentLang.name }}</h2>

        <section class="lesson-guide" aria-labelledby="lesson-guide-title">
          <div class="lesson-guide-copy">
            <p class="eyebrow">Que faire maintenant ?</p>
            <h3 id="lesson-guide-title">Suivez un parcours simple</h3>
            <p>Si vous débutez, choisissez d’abord un mode court. Vous pourrez ensuite passer aux phrases, dialogues et histoires.</p>
          </div>
          <div class="recommendation-grid">
            <button
              v-for="step in recommendedSteps"
              :key="step.mode"
              type="button"
              class="recommendation-card"
              :class="{ active: currentMode === step.mode, locked: isGuestModeLocked(step.mode) }"
              :title="isGuestModeLocked(step.mode) ? '🔒 Créez un compte gratuit pour débloquer cette étape' : step.help"
              @click="applyRecommendation(step.mode)"
            >
              <span class="recommendation-rank">{{ step.rank }}</span>
              <span class="recommendation-emoji">{{ step.emoji }}</span>
              <strong>{{ step.title }}</strong>
              <small>{{ isGuestModeLocked(step.mode) ? 'Compte requis' : step.help }}</small>
            </button>
          </div>
        </section>

        <!-- Sélecteur de mode (en premier) -->
        <p class="subtitle">Ou choisissez directement un mode :</p>
        <div class="mode-row">
          <button
            v-for="m in modes"
            :key="m.key"
            class="mode-btn"
            :class="{ active: currentMode === m.key, unavailable: !modeAvailable(m.key), locked: isGuestModeLocked(m.key) }"
            :disabled="!modeAvailable(m.key)"
            :title="isGuestModeLocked(m.key) ? '🔒 Inscrivez-vous gratuitement pour débloquer ce mode' : modeAvailable(m.key) ? '' : 'Aucun contenu disponible pour ce thème et ce niveau'"
            @click="onModeClick(m.key)"
          >
            <span>{{ m.emoji }}</span>
            <span>{{ m.label }}</span>
            <span v-if="isGuestModeLocked(m.key)" class="lock-badge">🔒</span>
          </button>
        </div>

        <!-- Thème + niveau : masqués pour les modes sans thème -->
        <template v-if="!NO_THEME_MODES.includes(currentMode)">
          <p class="subtitle" style="margin-top:1rem">Choisissez un thème</p>
          <div class="theme-grid">
            <button
              v-for="theme in store.themes"
              :key="theme.key"
              class="theme-card"
              :class="{ active: store.currentTheme?.key === theme.key, unavailable: !themeAvailable(theme) }"
              :disabled="!themeAvailable(theme)"
              :title="themeAvailable(theme) ? '' : 'Aucun contenu disponible pour ce mode et ce niveau'"
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
              :class="{ active: store.currentLevel === lvl.key, unavailable: !levelAvailable(lvl.key), locked: isGuestLevelLocked(lvl.key) }"
              :disabled="!levelAvailable(lvl.key)"
              :title="isGuestLevelLocked(lvl.key) ? '🔒 Inscrivez-vous gratuitement pour débloquer ce niveau' : levelAvailable(lvl.key) ? '' : 'Aucun contenu disponible pour ce mode et ce thème'"
              @click="onLevelClick(lvl.key)"
            >{{ lvl.label }}<span v-if="isGuestLevelLocked(lvl.key)" class="lock-badge">🔒</span></button>
          </div>

          <p v-if="store.currentTheme && !modeAvailable(currentMode)" class="dialogue-info">
            ⚠️ Aucun contenu disponible pour ce mode avec ce thème et ce niveau. Essayez un autre thème, niveau ou mode.
          </p>
        </template>

        <!-- Sélection du scénario (mode dialogue uniquement) -->
        <template v-else-if="currentMode === 'dialogue'">
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
          :disabled="currentMode === 'dialogue' ? !selectedScenario : NO_THEME_MODES.includes(currentMode) ? false : !store.currentTheme || !modeAvailable(currentMode)"
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
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { useLangStore } from '@/stores/lang'
import { useAuthStore } from '@/stores/auth'
import DailyGoalWidget from '@/components/DailyGoalWidget.vue'
import FlagIcon from '@/components/FlagIcon.vue'
import LandingHero from '@/components/LandingHero.vue'
import { getDialogues } from '@/api/content'
import type { Dialogue, Language, Level, Theme, ThemeLevelStats } from '@/types'

const store      = useLangStore()
const auth       = useAuthStore()
const router     = useRouter()
const goalWidget = ref<InstanceType<typeof DailyGoalWidget> | null>(null)

const selectedScenario = ref<string | null>(null)
const currentMode      = ref<string>('quiz')

// Page d'accueil marketing pour les visiteurs non connectés
const DEMO_KEY = 'lf_demo_started'
const DEMO_LANG = 'es'
const DEMO_LEVEL: Level = 'debutant'
const DEMO_MODES = ['quiz', 'cards']

const isGuest      = computed(() => !auth.user)
const demoStarted  = ref(!!localStorage.getItem(DEMO_KEY))
const showLanding  = computed(() => !demoStarted.value)

function startDemo() {
  localStorage.setItem(DEMO_KEY, '1')
  demoStarted.value = true
}

function isGuestLangLocked(code: string): boolean {
  return isGuest.value && code !== DEMO_LANG
}

function isGuestModeLocked(modeKey: string): boolean {
  return isGuest.value && !DEMO_MODES.includes(modeKey)
}

function isGuestLevelLocked(level: Level): boolean {
  return isGuest.value && level !== DEMO_LEVEL
}

function onLangClick(lang: Language) {
  if (isGuestLangLocked(lang.code)) { router.push('/register'); return }
  store.selectLanguage(lang.code)
}

function onModeClick(modeKey: string) {
  if (isGuestModeLocked(modeKey)) { router.push('/register'); return }
  currentMode.value = modeKey
}

function onLevelClick(level: Level) {
  if (isGuestLevelLocked(level)) { router.push('/register'); return }
  store.setLevel(level)
}

function applyRecommendation(modeKey: string) {
  if (isGuestModeLocked(modeKey)) { router.push('/register'); return }
  currentMode.value = modeKey
  if (store.currentLevel !== DEMO_LEVEL) store.setLevel(DEMO_LEVEL)
}

// Une fois l'état de connexion connu, ramène les visiteurs non connectés
// sur la combinaison de démo (langue/niveau) si une session précédente a laissé d'autres valeurs
let authChecked = false
watch(() => auth.loading, (loading) => {
  if (loading || authChecked) return
  authChecked = true
  if (!isGuest.value) return
  if (store.currentLevel !== DEMO_LEVEL) store.setLevel(DEMO_LEVEL)
  if (store.currentLang && store.currentLang.code !== DEMO_LANG) store.currentLang = null
})

const dialogueScenarios = ref<Dialogue[]>([])

// Reset selected scenario when lang or mode changes
watch([() => store.currentLang?.code, currentMode], async ([lang, mode]) => {
  selectedScenario.value = null
  dialogueScenarios.value = []
  if (lang && mode === 'dialogue') {
    try {
      dialogueScenarios.value = await getDialogues(lang)
    } catch {
      dialogueScenarios.value = []
    }
  }
}, { immediate: true })

const levels: { key: Level; label: string }[] = [
  { key: 'debutant',      label: '🌱 Débutant' },
  { key: 'intermediaire', label: '🌿 Intermédiaire' },
  { key: 'avance',        label: '🌳 Avancé' },
]

const recommendedSteps = [
  { rank: '1', mode: 'quiz', emoji: '🧠', title: 'Découvrir', help: 'Idéal pour apprendre les premiers mots.' },
  { rank: '2', mode: 'fill-blank', emoji: '✏️', title: 'Comprendre', help: 'Complétez une phrase avec le bon mot.' },
  { rank: '3', mode: 'dialogue', emoji: '💬', title: 'Pratiquer', help: 'Utilisez la langue dans une situation réelle.' },
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
  { key: 'stories',          emoji: '📖',   label: 'Histoires' },
  { key: 'conjugaison',      emoji: '🔀',   label: 'Conjugaison' },
  { key: 'traduction',       emoji: '✍️',   label: 'Traduction' },
  { key: 'devinette',        emoji: '🔍',   label: 'Devinettes' },
]

// Modes qui ne nécessitent pas de thème sélectionné
const NO_THEME_MODES = ['dialogue', 'survival', 'voyage', 'stories', 'conjugaison']

// Modes qui exploitent les phrases d'exemple plutôt que le vocabulaire brut
const EXAMPLE_MODES = ['fill-blank', 'sentence-builder']

// Indique si des statistiques de thème couvrent le besoin du mode pour un niveau donné
function statsSatisfyMode(stats: ThemeLevelStats | undefined, modeKey: string): boolean {
  if (!stats) return true
  return EXAMPLE_MODES.includes(modeKey) ? stats.with_example > 0 : stats.words > 0
}

// Un mode est disponible si le thème/niveau courants ont du contenu adapté
function modeAvailable(modeKey: string): boolean {
  if (NO_THEME_MODES.includes(modeKey)) return true
  return statsSatisfyMode(store.currentTheme?.stats?.[store.currentLevel], modeKey)
}

// Un thème est disponible s'il a du contenu adapté au mode/niveau courants
function themeAvailable(theme: Theme): boolean {
  if (NO_THEME_MODES.includes(currentMode.value)) return true
  return statsSatisfyMode(theme.stats?.[store.currentLevel], currentMode.value)
}

// Un niveau est disponible si le thème courant a du contenu adapté au mode/niveau
function levelAvailable(level: Level): boolean {
  if (NO_THEME_MODES.includes(currentMode.value)) return true
  return statsSatisfyMode(store.currentTheme?.stats?.[level], currentMode.value)
}

onMounted(() => { if (!store.languages.length) store.loadLanguages() })

function goMode() {
  if (currentMode.value === 'dialogue') {
    if (selectedScenario.value) router.push(`/dialogue?scenario=${selectedScenario.value}`)
  } else if (currentMode.value === 'survival') {
    router.push('/survival')
  } else if (currentMode.value === 'voyage') {
    router.push('/voyage')
  } else if (currentMode.value === 'stories') {
    router.push('/stories')
  } else if (currentMode.value === 'conjugaison') {
    router.push('/conjugaison')
  } else if (currentMode.value === 'traduction') {
    router.push('/traduction')
  } else if (currentMode.value === 'devinette') {
    router.push('/devinette')
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
.eyebrow { color: var(--accent); font-size: .78rem; font-weight: 800; letter-spacing: .08em; margin: 0 0 .35rem; text-transform: uppercase; }
.start-guide, .lesson-guide { background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; margin: 1rem 0 1.5rem; padding: 1rem; text-align: left; }
.start-guide h2, .lesson-guide h3 { color: var(--text); margin: 0 0 .75rem; }
.guide-steps, .recommendation-grid { display: grid; gap: .75rem; grid-template-columns: repeat(3, minmax(0, 1fr)); }
.guide-step { background: var(--bg); border: 1px solid var(--border); border-radius: 12px; padding: .8rem; display: grid; gap: .25rem; }
.step-number, .recommendation-rank { align-items: center; background: var(--accent); border-radius: 999px; color: #fff; display: inline-flex; font-size: .8rem; font-weight: 800; height: 1.6rem; justify-content: center; width: 1.6rem; }
.guide-step strong, .recommendation-card strong { color: var(--text); }
.guide-step small, .recommendation-card small, .lesson-guide-copy p { color: var(--muted2); line-height: 1.45; }
.lesson-guide { display: grid; gap: 1rem; }
.recommendation-card { background: var(--bg); border: 2px solid var(--border); border-radius: 14px; color: var(--dim); cursor: pointer; display: grid; gap: .35rem; padding: .85rem; text-align: left; transition: border-color .2s, transform .15s; }
.recommendation-card:hover, .recommendation-card.active { border-color: var(--accent); color: var(--text); transform: translateY(-1px); }
.recommendation-card.locked { opacity: .55; }
.recommendation-emoji { font-size: 1.5rem; }

.lang-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 0.75rem; }
.lang-card { background: var(--bg-card); border: 2px solid var(--border); border-radius: 10px; padding: 1rem 0.5rem;
  cursor: pointer; transition: border-color .2s, transform .15s; display: flex; flex-direction: column; align-items: center; gap: 0.4rem; }
.lang-card:hover { border-color: var(--accent); transform: translateY(-2px); }
.lang-name { font-size: 0.85rem; color: var(--dim); }

.unavailable { opacity: 0.35; cursor: not-allowed; }
.unavailable:hover { border-color: var(--border) !important; background: none !important; transform: none !important; }

.locked { position: relative; opacity: 0.55; }
.locked:hover { border-color: #f59e0b !important; }
.lock-badge { position: absolute; top: 4px; right: 6px; font-size: 0.85rem; }

.demo-banner { color: var(--muted2); font-size: 0.9rem; margin: 0 0 1.25rem; padding: 0.75rem 1rem;
  background: var(--bg-card); border: 1px solid #f59e0b; border-radius: 8px; }
.demo-link { color: #f59e0b; font-weight: 600; }

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

@media (max-width: 700px) {
  .guide-steps, .recommendation-grid { grid-template-columns: 1fr; }
}
</style>
