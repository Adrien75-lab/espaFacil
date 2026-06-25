<template>
  <div class="home">
    <!-- Visiteur non connecté : page d'accueil marketing -->
    <LandingHero v-if="isGuest && showLanding" @start-demo="startDemo" />

    <template v-else>
      <div class="home-hero">
        <p class="eyebrow">Apprendre en douceur</p>
        <h1>🌍 LinguaFacil</h1>
        <p class="hero-copy">Choisissez votre parcours, lancez une leçon courte et progressez avec des retours immédiats.</p>
      </div>

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

        <p class="step-label"><span>1</span> Choisissez une langue</p>
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

        <section class="selection-panel" aria-label="Configuration de la leçon">
          <div class="selection-summary">
            <span class="summary-pill">{{ currentModeLabel }}</span>
            <span v-if="store.currentTheme" class="summary-pill subtle">{{ store.currentTheme.emoji }} {{ store.currentTheme.name }}</span>
            <span class="summary-pill subtle">{{ currentLevelLabel }}</span>
          </div>

          <!-- Sélecteur de mode (en premier) -->
          <p class="step-label"><span>2</span> Choisissez un mode de jeu</p>
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
            <p class="step-label"><span>3</span> Choisissez un thème</p>
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

            <div class="level-row" aria-label="Choisir un niveau">
              <span class="label">4. Niveau :</span>
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

            <p v-if="store.currentTheme && !modeAvailable(currentMode)" class="dialogue-info warning">
              ⚠️ Ce parcours n'a pas encore de contenu pour cette combinaison. Essayez un autre thème, un autre niveau ou le mode QCM.
            </p>
          </template>

          <!-- Sélection du scénario (mode dialogue uniquement) -->
          <template v-else-if="currentMode === 'dialogue'">
            <p class="step-label"><span>3</span> Choisissez un scénario</p>
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
            <p v-else class="dialogue-info warning">⚠️ Aucun scénario n'est disponible pour cette langue. Revenez au choix du mode ou essayez une autre langue.</p>
          </template>

          <div class="start-panel">
            <p class="start-help">{{ startHelpText }}</p>
            <button
              class="btn-start"
              :disabled="startDisabled"
              @click="goMode"
            >▶ Commencer la leçon</button>
          </div>
        </section>

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
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
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

const currentModeMeta = computed(() => modes.find((mode) => mode.key === currentMode.value))
const currentModeLabel = computed(() => `${currentModeMeta.value?.emoji ?? '🎯'} ${currentModeMeta.value?.label ?? 'Mode'}`)
const currentLevelLabel = computed(() => levels.find((level) => level.key === store.currentLevel)?.label ?? 'Niveau')
const startDisabled = computed(() => (
  currentMode.value === 'dialogue'
    ? !selectedScenario.value
    : NO_THEME_MODES.includes(currentMode.value)
      ? false
      : !store.currentTheme || !modeAvailable(currentMode.value)
))
const startHelpText = computed(() => {
  if (currentMode.value === 'dialogue' && !selectedScenario.value) return 'Choisissez un scénario pour démarrer le dialogue.'
  if (!NO_THEME_MODES.includes(currentMode.value) && !store.currentTheme) return 'Sélectionnez un thème pour préparer votre leçon.'
  if (!NO_THEME_MODES.includes(currentMode.value) && !modeAvailable(currentMode.value)) return 'Changez de thème, de niveau ou de mode pour trouver du contenu disponible.'
  return `Prêt : ${currentModeLabel.value} · ${store.currentLang?.name ?? 'Langue'} · ${currentLevelLabel.value}`
})

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

onMounted(() => {
  if (!store.languages.length) store.loadLanguages()
  goalWidget.value?.reload()
  document.addEventListener('visibilitychange', onVisibility)
})

function onVisibility() {
  if (document.visibilityState === 'visible') goalWidget.value?.reload()
}

onUnmounted(() => {
  document.removeEventListener('visibilitychange', onVisibility)
})

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
.home { max-width: 860px; margin: 0 auto; padding: 2rem 1rem 3rem; text-align: center; }
.home-hero { margin-bottom: 1.4rem; }
.eyebrow { color: var(--accent-strong); font-size: .78rem; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; margin-bottom: .35rem; }
h1 { font-size: clamp(2.2rem, 6vw, 3.4rem); line-height: 1; margin-bottom: 0.45rem; }
h2 { display: inline-flex; align-items: center; gap: .45rem; margin: 1rem 0 0.8rem; font-size: 1.45rem; color: var(--text); }
.hero-copy { max-width: 560px; margin: 0 auto; color: var(--muted2); font-weight: 600; line-height: 1.45; }
.subtitle { color: var(--muted); margin-bottom: 1.25rem; }
.start-guide, .lesson-guide { background: color-mix(in srgb, var(--bg-card) 94%, var(--accent-soft)); border: 1px solid var(--border); border-radius: 20px; margin: 1rem 0 1.5rem; padding: 1rem; text-align: left; box-shadow: var(--shadow-card); }
.start-guide h2, .lesson-guide h3 { color: var(--text); margin: 0 0 .75rem; }
.guide-steps, .recommendation-grid { display: grid; gap: .75rem; grid-template-columns: repeat(3, minmax(0, 1fr)); }
.guide-step, .recommendation-card { background: var(--bg-card); border: 2px solid var(--border); border-radius: 16px; box-shadow: 0 10px 24px rgba(15, 23, 42, .06); display: grid; gap: .35rem; padding: .85rem; }
.step-number, .recommendation-rank { align-items: center; background: var(--accent); border-radius: 999px; color: #fff; display: inline-flex; font-size: .8rem; font-weight: 900; height: 1.65rem; justify-content: center; width: 1.65rem; }
.guide-step strong, .recommendation-card strong { color: var(--text); }
.guide-step small, .recommendation-card small, .lesson-guide-copy p { color: var(--muted2); line-height: 1.45; }
.lesson-guide { gap: 1rem; }
.recommendation-card { color: var(--dim); cursor: pointer; text-align: left; transition: border-color .2s, transform .15s, background .2s, box-shadow .2s; }
.recommendation-card:hover, .recommendation-card.active { background: var(--bg-hover); border-color: var(--accent); color: var(--text); transform: translateY(-1px); }
.recommendation-card.active { box-shadow: 0 0 0 4px var(--accent-soft); }
.recommendation-card.locked { opacity: .72; }
.recommendation-emoji { font-size: 1.55rem; }

.step-label { display: flex; align-items: center; justify-content: center; gap: .55rem; color: var(--text); font-weight: 900; margin: 1.2rem 0 .85rem; }
.step-label span { display: inline-grid; place-items: center; width: 1.65rem; height: 1.65rem; border-radius: 999px; background: var(--accent); color: white; font-size: .85rem; box-shadow: 0 8px 20px color-mix(in srgb, var(--accent) 28%, transparent); }

.selection-panel { background: color-mix(in srgb, var(--bg-card) 92%, var(--accent-soft)); border: 1px solid var(--border); border-radius: 24px; padding: 1rem; box-shadow: var(--shadow-card); }
.selection-summary { display: flex; justify-content: center; gap: .5rem; flex-wrap: wrap; margin-bottom: .35rem; }
.summary-pill { background: var(--accent); color: white; border-radius: 999px; padding: .35rem .75rem; font-size: .82rem; font-weight: 800; }
.summary-pill.subtle { background: var(--accent-soft); color: var(--accent-strong); border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent); }

.lang-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(135px, 1fr)); gap: 0.85rem; }
.lang-card, .theme-card, .scenario-card, .mode-btn { background: var(--bg-card); border: 2px solid var(--border); box-shadow: 0 10px 24px rgba(15, 23, 42, .06); }
.lang-card { border-radius: 16px; padding: 1rem 0.5rem; cursor: pointer; transition: border-color .2s, transform .15s, box-shadow .2s, background .2s; display: flex; flex-direction: column; align-items: center; gap: 0.45rem; }
.lang-card:hover { border-color: var(--accent); transform: translateY(-2px); box-shadow: var(--shadow-card); }
.lang-name { font-size: 0.9rem; color: var(--dim); font-weight: 750; }

.unavailable { opacity: 0.55; cursor: not-allowed; filter: grayscale(.35); }
.unavailable:hover { border-color: var(--border) !important; background: var(--bg-card) !important; transform: none !important; box-shadow: none !important; }

.locked { position: relative; opacity: 0.72; }
.locked:hover { border-color: var(--warning) !important; }
.lock-badge { position: absolute; top: 6px; right: 8px; font-size: 0.85rem; }

.demo-banner, .dialogue-info { color: var(--muted2); font-size: 0.92rem; line-height: 1.45; margin: 0 0 1.25rem; padding: 0.85rem 1rem; background: var(--bg-card); border: 1px solid var(--warning); border-left: 5px solid var(--warning); border-radius: 14px; box-shadow: 0 10px 22px rgba(15, 23, 42, .06); }
.demo-link { color: var(--warning); font-weight: 900; }
.dialogue-info.warning { color: var(--text); background: color-mix(in srgb, var(--warning) 12%, var(--bg-card)); }

.theme-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(118px, 1fr)); gap: 0.7rem; margin-bottom: 1.35rem; }
.theme-card { border-radius: 16px; padding: 0.8rem 0.5rem; cursor: pointer; transition: border-color .2s, transform .15s, background .2s, box-shadow .2s; display: flex; flex-direction: column; align-items: center; gap: 0.35rem; }
.theme-card:hover, .theme-card.active { border-color: var(--accent); background: var(--bg-hover); transform: translateY(-1px); }
.theme-card.active { box-shadow: 0 0 0 4px var(--accent-soft); }
.theme-emoji { font-size: 1.65rem; }
.theme-name { font-size: 0.82rem; color: var(--dim); font-weight: 750; }

.level-row { display: flex; align-items: center; justify-content: center; gap: 0.55rem; margin-bottom: 1.25rem; flex-wrap: wrap; }
.label { color: var(--muted2); font-weight: 850; }
.btn-level { background: var(--bg-card); border: 2px solid var(--border); border-radius: 999px; padding: 0.5rem 1rem; cursor: pointer; color: var(--dim); font-size: 0.9rem; font-weight: 800; transition: border-color .2s, background .2s, transform .15s; }
.btn-level:hover, .btn-level.active { border-color: var(--accent); color: var(--text); background: var(--bg-hover); transform: translateY(-1px); }
.btn-level.active { box-shadow: 0 0 0 4px var(--accent-soft); }

.start-panel { margin-top: .5rem; padding-top: 1rem; border-top: 1px dashed var(--border); }
.start-help { color: var(--muted2); font-weight: 750; margin-bottom: .75rem; }
.btn-start { background: linear-gradient(135deg, var(--success), #22c55e); color: white; border: none; border-radius: 999px; padding: 0.85rem 2.6rem; font-size: 1.05rem; font-weight: 950; cursor: pointer; transition: opacity .2s, transform .15s, box-shadow .2s; box-shadow: 0 14px 28px color-mix(in srgb, var(--success) 28%, transparent); }
.btn-start:disabled { opacity: 0.45; cursor: not-allowed; box-shadow: none; background: var(--muted); }
.btn-start:not(:disabled):hover { transform: translateY(-2px); box-shadow: 0 18px 34px color-mix(in srgb, var(--success) 36%, transparent); }

.btn-back { background: var(--bg-card); border: 1px solid var(--border); border-radius: 999px; color: var(--muted2); cursor: pointer; margin-bottom: 0.65rem; padding: .45rem .85rem; font-size: 0.9rem; font-weight: 800; }

.scenario-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(135px, 1fr)); gap: 0.7rem; margin-bottom: 1.3rem; }
.scenario-card { border-radius: 16px; padding: 0.8rem 0.5rem; cursor: pointer; transition: border-color .2s, background .2s, transform .15s; display: flex; flex-direction: column; align-items: center; gap: 0.35rem; }
.scenario-card:hover, .scenario-card.active { border-color: var(--accent); background: var(--bg-hover); transform: translateY(-1px); }
.scenario-card.active { box-shadow: 0 0 0 4px var(--accent-soft); }
.sc-emoji { font-size: 1.8rem; }
.sc-title { font-size: 0.78rem; color: var(--dim); text-align: center; line-height: 1.3; font-weight: 750; }
.loader { margin-top: 2rem; color: var(--muted); font-weight: 800; }

.mode-row { display: flex; gap: 0.75rem; justify-content: center; margin-bottom: 1.35rem; flex-wrap: wrap; }
.mode-btn { border-radius: 16px; padding: 0.7rem 1.15rem; cursor: pointer; color: var(--dim); display: flex; flex-direction: column; align-items: center; gap: 0.28rem; font-size: 0.9rem; font-weight: 800; transition: border-color .2s, background .2s, transform .15s, box-shadow .2s; min-width: 98px; }
.mode-btn span:first-child { font-size: 1.55rem; }
.mode-btn:hover, .mode-btn.active { border-color: var(--accent); background: var(--bg-hover); color: var(--text); transform: translateY(-1px); }
.mode-btn.active { box-shadow: 0 0 0 4px var(--accent-soft); }

.srs-row { display: flex; gap: 0.75rem; justify-content: center; margin-top: 1.25rem; flex-wrap: wrap; }
.srs-btn { border: none; border-radius: 999px; padding: 0.65rem 1.4rem; font-size: 0.92rem; font-weight: 850; cursor: pointer; transition: opacity .2s, transform .15s; }
.review-btn { background: var(--accent-soft); color: var(--accent-strong); border: 2px solid var(--accent); }
.difficult-btn { background: color-mix(in srgb, var(--danger) 14%, var(--bg-card)); color: var(--danger); border: 2px solid var(--danger); }
.srs-btn:hover { opacity: 0.9; transform: translateY(-1px); }

@media (max-width: 560px) {
  .selection-panel { padding: .75rem; border-radius: 18px; }
  .guide-steps, .recommendation-grid { grid-template-columns: 1fr; }
  .mode-btn { min-width: 86px; padding-inline: .7rem; }
  .btn-start { width: 100%; padding-inline: 1rem; }
}
</style>
