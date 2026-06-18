<template>
  <main class="progression">
    <div v-if="loading" class="loader">Chargement de la progression...</div>

    <div v-else-if="!data" class="empty">
      <p>Impossible de charger la progression.</p>
      <button class="btn-secondary" @click="router.push('/')">Accueil</button>
    </div>

    <template v-else>
      <header class="page-header">
        <button class="btn-back" @click="router.push('/')">Accueil</button>
        <div>
          <p class="eyebrow">Suivi pédagogique</p>
          <h1>Progression</h1>
        </div>
      </header>

      <section class="language-strip" aria-label="Langues">
        <button
          v-for="language in activeLanguages"
          :key="language.code"
          class="language-pill"
          :class="{ active: selectedCode === language.code }"
          @click="selectLanguage(language.code)"
        >
          <FlagIcon :lang="language.code" :size="18" />
          <span>{{ language.name }}</span>
          <strong>{{ language.summary.average_mastery }}%</strong>
        </button>
      </section>

      <section v-if="selectedLanguage" class="summary-band">
        <div class="summary-item">
          <strong>{{ selectedLanguage.summary.average_mastery }}%</strong>
          <span>Maîtrise moyenne</span>
        </div>
        <div class="summary-item">
          <strong>{{ selectedLanguage.summary.mastered_levels }}</strong>
          <span>Niveaux maîtrisés</span>
        </div>
        <div class="summary-item warning">
          <strong>{{ selectedLanguage.summary.srs_due }}</strong>
          <span>Mots à revoir</span>
        </div>
        <div class="summary-item">
          <strong>{{ selectedLanguage.summary.available_levels }}</strong>
          <span>Niveaux disponibles</span>
        </div>
      </section>

      <section v-if="nextStep" class="next-step">
        <div>
          <p class="next-label">Prochaine action</p>
          <h2>{{ nextStep.theme.emoji }} {{ nextStep.theme.name }} - {{ levelLabel(nextStep.level.level) }}</h2>
          <p>{{ statusText(nextStep.level.status) }}</p>
        </div>
        <button class="btn-primary" @click="startTheme(nextStep.theme.key, nextStep.level.level)">
          Travailler
        </button>
      </section>

      <section v-if="selectedLanguage" class="theme-list">
        <article
          v-for="theme in visibleThemes"
          :key="theme.key"
          class="theme-row"
        >
          <div class="theme-title">
            <span class="theme-emoji">{{ theme.emoji }}</span>
            <div>
              <h2>{{ theme.name }}</h2>
              <p>{{ themeProgress(theme) }}% moyen</p>
            </div>
          </div>

          <div class="level-grid">
            <button
              v-for="level in theme.levels"
              :key="level.level"
              class="level-tile"
              :class="level.status"
              :disabled="level.status === 'unavailable'"
              @click="startTheme(theme.key, level.level)"
            >
              <span class="level-name">{{ levelLabel(level.level) }}</span>
              <span class="level-percent">{{ level.mastery_percent }}%</span>
              <span class="level-meta">
                {{ level.best_score }}% meilleur score
                <template v-if="level.srs_due > 0"> · {{ level.srs_due }} à revoir</template>
              </span>
            </button>
          </div>
        </article>
      </section>
    </template>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import FlagIcon from '@/components/FlagIcon.vue'
import {
  fetchLearningProgress,
  type LearningProgressData,
  type LearningProgressLevel,
  type LearningProgressTheme,
  type ProgressLevel,
  type ProgressStatus,
} from '@/api/learningProgress'
import { useAuthStore } from '@/stores/auth'
import { useLangStore } from '@/stores/lang'

const router = useRouter()
const auth = useAuthStore()
const langStore = useLangStore()

const data = ref<LearningProgressData | null>(null)
const loading = ref(true)
const selectedCode = ref('es')

const activeLanguages = computed(() =>
  data.value?.languages.filter(language => language.summary.available_levels > 0) ?? []
)

const selectedLanguage = computed(() =>
  activeLanguages.value.find(language => language.code === selectedCode.value) ?? activeLanguages.value[0] ?? null
)

const visibleThemes = computed(() =>
  selectedLanguage.value?.themes.filter(theme => theme.levels.some(level => level.word_count > 0)) ?? []
)

const nextStep = computed(() => {
  const candidates: Array<{ theme: LearningProgressTheme; level: LearningProgressLevel }> = []
  for (const theme of visibleThemes.value) {
    for (const level of theme.levels) {
      if (['review', 'in_progress', 'not_started'].includes(level.status)) {
        candidates.push({ theme, level })
      }
    }
  }

  return candidates.sort((left, right) =>
    statusPriority(left.level.status) - statusPriority(right.level.status)
    || left.level.mastery_percent - right.level.mastery_percent
  )[0] ?? null
})

function levelLabel(level: ProgressLevel): string {
  return {
    debutant: 'Débutant',
    intermediaire: 'Intermédiaire',
    avance: 'Avancé',
  }[level]
}

function statusText(status: ProgressStatus): string {
  return {
    unavailable: 'Aucun contenu disponible pour ce niveau.',
    not_started: 'Commencer ce niveau pour ouvrir la progression.',
    in_progress: 'Continuer ce niveau pour consolider les acquis.',
    review: 'Réviser les mots dus avant d’avancer.',
    mastered: 'Niveau maîtrisé.',
  }[status]
}

function statusPriority(status: ProgressStatus): number {
  return {
    review: 0,
    in_progress: 1,
    not_started: 2,
    mastered: 3,
    unavailable: 4,
  }[status]
}

function themeProgress(theme: LearningProgressTheme): number {
  const levels = theme.levels.filter(level => level.word_count > 0)
  if (levels.length === 0) return 0
  return Math.round(levels.reduce((sum, level) => sum + level.mastery_percent, 0) / levels.length)
}

async function selectLanguage(code: string) {
  selectedCode.value = code
  await langStore.selectLanguage(code)
}

async function startTheme(themeKey: string, level: ProgressLevel) {
  const language = selectedLanguage.value
  if (!language) return
  await langStore.selectLanguage(language.code)
  langStore.selectTheme(themeKey)
  langStore.setLevel(level)
  router.push('/')
}

onMounted(async () => {
  if (!auth.user) {
    router.push('/login')
    return
  }

  await langStore.loadLanguages()
  const result = await fetchLearningProgress()
  data.value = result
  selectedCode.value = langStore.currentLang?.code ?? result?.languages[0]?.code ?? 'es'
  if (selectedCode.value) await langStore.selectLanguage(selectedCode.value)
  loading.value = false
})
</script>

<style scoped>
.progression { max-width: 980px; margin: 0 auto; padding: 1.25rem 1rem 3rem; }
.loader, .empty { text-align: center; color: var(--muted); margin-top: 4rem; }
.page-header { display: flex; align-items: end; justify-content: space-between; gap: 1rem; margin-bottom: 1rem; }
.page-header h1 { margin: 0; font-size: 1.9rem; }
.eyebrow { margin: 0 0 .25rem; color: var(--muted); font-size: .82rem; text-transform: uppercase; letter-spacing: 0; }
.btn-back, .btn-secondary { background: none; border: 1px solid var(--border); color: var(--dim); border-radius: 6px; padding: .45rem .8rem; cursor: pointer; }
.btn-primary { background: var(--accent); border: 1px solid var(--accent); color: white; border-radius: 6px; padding: .65rem 1rem; cursor: pointer; font-weight: 700; }
.language-strip { display: flex; gap: .5rem; overflow-x: auto; padding: .25rem 0 1rem; }
.language-pill { display: inline-flex; align-items: center; gap: .45rem; min-height: 38px; background: var(--bg-card); border: 1px solid var(--border); color: var(--muted2); border-radius: 6px; padding: .45rem .65rem; cursor: pointer; white-space: nowrap; }
.language-pill.active { border-color: var(--accent); color: var(--text); }
.language-pill strong { color: #a5b4fc; font-size: .8rem; }
.summary-band { display: grid; grid-template-columns: repeat(4, 1fr); gap: .75rem; margin: .5rem 0 1rem; }
.summary-item { background: var(--bg-card); border: 1px solid var(--border); border-radius: 6px; padding: .85rem; display: flex; flex-direction: column; gap: .2rem; }
.summary-item strong { font-size: 1.45rem; }
.summary-item span { color: var(--muted); font-size: .78rem; }
.summary-item.warning strong { color: #f59e0b; }
.next-step { display: flex; align-items: center; justify-content: space-between; gap: 1rem; background: #1e1e2e; border: 1px solid var(--accent); border-radius: 6px; padding: 1rem; margin-bottom: 1rem; }
.next-step h2 { margin: .15rem 0; font-size: 1.1rem; }
.next-step p { margin: 0; color: var(--muted); }
.next-label { color: #a5b4fc !important; font-size: .78rem; text-transform: uppercase; letter-spacing: 0; }
.theme-list { display: grid; gap: .75rem; }
.theme-row { display: grid; grid-template-columns: minmax(180px, 1fr) 2fr; gap: 1rem; align-items: center; background: var(--bg-card); border: 1px solid var(--border); border-radius: 6px; padding: .9rem; }
.theme-title { display: flex; align-items: center; gap: .75rem; min-width: 0; }
.theme-emoji { font-size: 1.7rem; }
.theme-title h2 { margin: 0; font-size: 1rem; }
.theme-title p { margin: .2rem 0 0; color: var(--muted); font-size: .8rem; }
.level-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: .5rem; }
.level-tile { min-height: 86px; text-align: left; border: 1px solid var(--border); background: #161625; color: var(--text); border-radius: 6px; padding: .65rem; cursor: pointer; display: grid; gap: .25rem; }
.level-tile:disabled { cursor: not-allowed; opacity: .45; }
.level-tile.review { border-color: #f59e0b; }
.level-tile.mastered { border-color: #22c55e; }
.level-tile.in_progress { border-color: #6366f1; }
.level-name { color: var(--muted); font-size: .78rem; }
.level-percent { font-size: 1.25rem; font-weight: 800; }
.level-meta { color: var(--muted); font-size: .72rem; line-height: 1.25; }
@media (max-width: 760px) {
  .summary-band { grid-template-columns: repeat(2, 1fr); }
  .next-step { align-items: stretch; flex-direction: column; }
  .theme-row { grid-template-columns: 1fr; }
}
@media (max-width: 520px) {
  .page-header { align-items: start; flex-direction: column-reverse; }
  .level-grid { grid-template-columns: 1fr; }
}
</style>
