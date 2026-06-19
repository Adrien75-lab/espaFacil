<template>
  <div class="voyage">

    <!-- Setup du voyage -->
    <div v-if="!trip" class="setup-screen">
      <div class="sv-header">
        <button class="btn-back" @click="router.push('/')">← Accueil</button>
        <span class="mode-badge">✈️ Préparer un voyage</span>
        <span></span>
      </div>

      <div class="setup-card">
        <div class="setup-icon">✈️</div>
        <h2>Planifie ton voyage</h2>
        <p class="setup-sub">Je crée un programme d'apprentissage personnalisé jusqu'à ton départ.</p>

        <div class="form-group">
          <label>Destination</label>
          <input v-model="form.destination" placeholder="Ex : Tokyo, Barcelone…" class="form-input" />
        </div>

        <div class="form-group">
          <label>Langue à pratiquer</label>
          <div class="lang-select-row">
            <button
              v-for="l in store.languages"
              :key="l.code"
              class="lang-chip"
              :class="{ active: form.langCode === l.code }"
              @click="form.langCode = l.code"
            >
              {{ l.flag }} {{ l.name }}
            </button>
          </div>
        </div>

        <div class="form-group">
          <label>Date de départ</label>
          <input v-model="form.departureDate" type="date" class="form-input" :min="minDate" />
        </div>

        <button
          class="btn-start"
          :disabled="!form.destination || !form.langCode || !form.departureDate"
          @click="createTrip"
        >
          🗺️ Créer mon plan
        </button>
      </div>
    </div>

    <!-- Plan de voyage actif -->
    <div v-else class="plan-screen">
      <div class="plan-header">
        <button class="btn-back" @click="router.push('/')">← Accueil</button>
        <div class="header-center">
          <span class="dest-flag">{{ langInfo?.flag }}</span>
          <span class="dest-name">{{ trip.destination }}</span>
        </div>
        <button class="btn-reset" @click="resetTrip" title="Nouveau voyage">✕</button>
      </div>

      <!-- Compte à rebours -->
      <div class="countdown-card" :class="daysLeft <= 1 ? 'cnt-urgent' : daysLeft <= 7 ? 'cnt-warning' : 'cnt-ok'">
        <div class="cnt-days">{{ daysLeft <= 0 ? '🎉' : daysLeft }}</div>
        <div class="cnt-label">{{ daysLeft <= 0 ? 'Bon voyage !' : daysLeft === 1 ? 'jour restant' : 'jours restants' }}</div>
        <div class="cnt-date">Départ le {{ formatDate(trip.departureDate) }}</div>
      </div>

      <!-- Aujourd'hui -->
      <section v-if="todayTasks.length && daysLeft > 0" class="section">
        <h3>📌 À faire aujourd'hui</h3>
        <div class="today-tasks">
          <button
            v-for="task in todayTasks"
            :key="task.key"
            class="task-btn"
            :class="{ done: isStepDone(task.key) }"
            @click="goTask(task)"
          >
            <span class="task-icon">{{ isStepDone(task.key) ? '✅' : task.emoji }}</span>
            <div class="task-info">
              <span class="task-label">{{ task.label }}</span>
              <span class="task-desc">{{ task.desc }}</span>
            </div>
            <span class="task-arrow">→</span>
          </button>
        </div>
      </section>

      <!-- Plan complet -->
      <section class="section">
        <h3>📋 Programme complet</h3>
        <div class="phases">
          <div
            v-for="phase in phases"
            :key="phase.id"
            class="phase-card"
            :class="{
              'phase-active': phase.isActive,
              'phase-done':   phase.isDone,
              'phase-future': phase.isFuture,
            }"
          >
            <div class="phase-header">
              <span class="phase-range">{{ phase.range }}</span>
              <span class="phase-status">{{ phase.isDone ? '✅' : phase.isActive ? '▶ En cours' : '' }}</span>
            </div>
            <div class="phase-title">{{ phase.title }}</div>
            <div class="phase-tasks">
              <span v-for="t in phase.tasks" :key="t.key" class="phase-tag" :class="{ 'tag-done': isStepDone(t.key) }">
                {{ t.emoji }} {{ t.label }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Progression globale -->
      <section class="section">
        <div class="progress-row">
          <span class="prog-label">Progression globale</span>
          <span class="prog-pct">{{ completionPct }}%</span>
        </div>
        <div class="prog-bar">
          <div class="prog-fill" :style="{ width: completionPct + '%' }"></div>
        </div>
      </section>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useLangStore } from '@/stores/lang'

const router = useRouter()
const store  = useLangStore()

const STORAGE_KEY = 'lf-voyage'

interface Trip { destination: string; langCode: string; departureDate: string; doneTasks: string[] }

const trip = ref<Trip | null>(null)
const form = ref({ destination: '', langCode: store.currentLang?.code ?? '', departureDate: '' })

const minDate = new Date(Date.now() + 86400000).toISOString().slice(0, 10)

const langInfo = computed(() => store.languages.find(l => l.code === trip.value?.langCode))

const daysLeft = computed(() => {
  if (!trip.value) return 0
  const dep = new Date(trip.value.departureDate + 'T00:00:00').getTime()
  const now = new Date().setHours(0, 0, 0, 0)
  return Math.max(0, Math.ceil((dep - now) / 86400000))
})

// Définition de toutes les tâches du programme
interface Task { key: string; emoji: string; label: string; desc: string; route: string; query?: Record<string,string> }

const ALL_TASKS: Task[] = [
  { key: 'quiz-basic',    emoji: '🧠', label: 'QCM vocabulaire',     desc: 'Apprends les mots essentiels',       route: '/quiz' },
  { key: 'cards-basic',   emoji: '🃏', label: 'Cartes mémoire',       desc: 'Mémorise avec des flash cards',      route: '/cards' },
  { key: 'listen-basic',  emoji: '🎧', label: 'Écoute active',        desc: 'Entraîne ton oreille',               route: '/listen' },
  { key: 'dialogue-cafe', emoji: '☕', label: 'Dialogue : café',      desc: 'Commander au café',                  route: '/dialogue', query: { scenario: `${trip.value?.langCode ?? 'es'}-cafe` } },
  { key: 'dialogue-hotel',emoji: '🏨', label: 'Dialogue : hôtel',     desc: 'À la réception',                     route: '/dialogue', query: { scenario: `${trip.value?.langCode ?? 'es'}-hotel` } },
  { key: 'dialogue-resto', emoji: '🍽️', label: 'Dialogue : restaurant',desc: 'Commander un repas',                route: '/dialogue', query: { scenario: `${trip.value?.langCode ?? 'es'}-restaurant` } },
  { key: 'dialogue-taxi', emoji: '🚕', label: 'Dialogue : taxi',      desc: 'Prendre un taxi',                    route: '/dialogue', query: { scenario: `${trip.value?.langCode ?? 'es'}-taxi` } },
  { key: 'survival',      emoji: '🆘', label: 'Phrases de survie',    desc: '10 phrases vitales en urgence',      route: '/survival' },
  { key: 'speak-1',       emoji: '🎙️', label: 'Prononciation',        desc: 'Soigne ton accent',                  route: '/speak' },
  { key: 'paires-1',      emoji: '🃏', label: 'Paires associées',     desc: 'Consolide ton vocabulaire',          route: '/paires' },
  { key: 'anagram-1',     emoji: '🔀', label: 'Anagramme',            desc: 'Jeu de lettres pour mémoriser',      route: '/anagram' },
  { key: 'dictee-1',      emoji: '🎧✍️', label: 'Dictée',              desc: 'Entraîne ton orthographe',           route: '/dictee' },
  { key: 'fill-blank',    emoji: '✏️',  label: 'Phrases à trous',      desc: 'Construis des phrases',              route: '/fill-blank' },
  { key: 'survival-final',emoji: '🆘', label: 'Révision survie',      desc: 'Dernier rappel des phrases vitales', route: '/survival' },
  { key: 'listen-final',  emoji: '🎧', label: 'Écoute finale',        desc: 'Dernière session d\'écoute',         route: '/listen' },
]

// Phases du programme selon le nb de jours
const phases = computed(() => {
  const d = daysLeft.value

  return [
    {
      id: 'vocab', range: 'J-30 → J-15', title: '📚 Vocabulaire de base',
      tasks: tasksByKeys(['quiz-basic', 'cards-basic', 'listen-basic', 'fill-blank']),
      isActive: d >= 15 && d <= 30, isDone: d < 15, isFuture: d > 30,
    },
    {
      id: 'dialogue', range: 'J-14 → J-8', title: '💬 Dialogues pratiques',
      tasks: tasksByKeys(['dialogue-cafe', 'dialogue-hotel', 'dialogue-resto', 'dialogue-taxi']),
      isActive: d >= 8 && d < 15, isDone: d < 8, isFuture: d >= 15,
    },
    {
      id: 'urgence', range: 'J-7 → J-4', title: '🆘 Urgences & prononciation',
      tasks: tasksByKeys(['survival', 'speak-1', 'dictee-1']),
      isActive: d >= 4 && d < 8, isDone: d < 4, isFuture: d >= 8,
    },
    {
      id: 'consolidation', range: 'J-3 → J-2', title: '🔁 Consolidation',
      tasks: tasksByKeys(['paires-1', 'anagram-1']),
      isActive: d >= 2 && d < 4, isDone: d < 2, isFuture: d >= 4,
    },
    {
      id: 'final', range: 'J-1', title: '🎯 Dernière révision',
      tasks: tasksByKeys(['survival-final', 'listen-final']),
      isActive: d === 1, isDone: d === 0, isFuture: d > 1,
    },
  ]
})

const todayTasks = computed<Task[]>(() => {
  const d = daysLeft.value
  if (d === 0) return []
  if (d >= 15) return tasksByKeys(['quiz-basic', 'cards-basic', 'listen-basic'])
  if (d >= 8)  return tasksByKeys(['dialogue-cafe', 'dialogue-hotel', 'dialogue-resto'])
  if (d >= 4)  return tasksByKeys(['survival', 'speak-1'])
  if (d >= 2)  return tasksByKeys(['paires-1', 'anagram-1'])
  return tasksByKeys(['survival-final', 'listen-final'])
})

const completionPct = computed(() => {
  if (!trip.value) return 0
  const allKeys = ALL_TASKS.map(t => t.key)
  const done = allKeys.filter(k => isStepDone(k)).length
  return Math.round(done / allKeys.length * 100)
})

function tasksByKeys(keys: string[]): Task[] {
  return keys.map(k => ALL_TASKS.find(t => t.key === k)!).filter(Boolean)
}

function isStepDone(key: string): boolean {
  return trip.value?.doneTasks.includes(key) ?? false
}

function markDone(key: string) {
  if (!trip.value || isStepDone(key)) return
  trip.value.doneTasks.push(key)
  saveTrip()
}

function goTask(task: Task) {
  // Sélectionner la langue du voyage
  if (trip.value) store.selectLanguage(trip.value.langCode)
  markDone(task.key)
  if (task.query) {
    const params = new URLSearchParams(task.query).toString()
    router.push(`${task.route}?${params}`)
  } else {
    router.push(task.route)
  }
}

function createTrip() {
  trip.value = { ...form.value, doneTasks: [] }
  store.selectLanguage(form.value.langCode)
  saveTrip()
}

function resetTrip() {
  if (!confirm('Supprimer ce voyage et recommencer ?')) return
  trip.value = null
  localStorage.removeItem(STORAGE_KEY)
}

function saveTrip() {
  if (trip.value) localStorage.setItem(STORAGE_KEY, JSON.stringify(trip.value))
}

function formatDate(dateStr: string): string {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

onMounted(() => {
  if (!store.languages.length) store.loadLanguages()
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    try { trip.value = JSON.parse(saved) } catch {}
  }
})
</script>

<style scoped>
.voyage { max-width: 620px; margin: 0 auto; padding: 1.5rem 1rem 3rem; }

/* Header */
.sv-header, .plan-header {
  display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;
}
.btn-back  { background: none; border: none; color: var(--muted); cursor: pointer; font-size: .9rem; }
.btn-reset { background: none; border: 1px solid var(--border); border-radius: 6px;
  color: var(--muted); cursor: pointer; font-size: .8rem; padding: .2rem .6rem; }
.mode-badge { background: #3b82f620; color: #93c5fd; padding: .2rem .7rem; border-radius: 20px; font-size: .8rem; }

/* Setup */
.setup-card {
  background: var(--bg-card); border: 1px solid var(--border); border-radius: 20px;
  padding: 2rem 1.5rem; text-align: center;
}
.setup-icon { font-size: 3rem; margin-bottom: .5rem; }
.setup-card h2 { font-size: 1.4rem; margin: 0 0 .5rem; }
.setup-sub { color: var(--muted); font-size: .9rem; margin-bottom: 1.75rem; }

.form-group { text-align: left; margin-bottom: 1.25rem; }
.form-group label { display: block; color: var(--muted2); font-size: .8rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: .05em; margin-bottom: .5rem; }
.form-input {
  width: 100%; background: var(--bg-app); border: 1px solid var(--border); border-radius: 10px;
  color: var(--text); padding: .65rem .9rem; font-size: .95rem;
  transition: border-color .15s; box-sizing: border-box;
}
.form-input:focus { outline: none; border-color: var(--accent); }

.lang-select-row { display: flex; flex-wrap: wrap; gap: .4rem; }
.lang-chip {
  background: var(--bg-app); border: 1px solid var(--border); border-radius: 20px;
  color: var(--muted2); padding: .3rem .75rem; font-size: .82rem; cursor: pointer;
  transition: border-color .15s, color .15s;
}
.lang-chip.active { border-color: var(--accent); color: #a5b4fc; background: #6366f115; }

.btn-start {
  width: 100%; background: var(--accent); color: white; border: none; border-radius: 12px;
  padding: .85rem; font-size: 1rem; font-weight: 700; cursor: pointer; margin-top: .5rem;
  transition: opacity .2s;
}
.btn-start:disabled { opacity: .35; cursor: not-allowed; }

/* Countdown */
.countdown-card {
  border-radius: 16px; padding: 1.5rem; text-align: center; margin-bottom: 1.75rem;
  border: 2px solid;
}
.cnt-ok      { background: #6366f115; border-color: #6366f140; }
.cnt-warning { background: #f59e0b15; border-color: #f59e0b40; }
.cnt-urgent  { background: #ef444415; border-color: #ef444440; }
.cnt-days  { font-size: 3.5rem; font-weight: 800; color: var(--text); line-height: 1; }
.cnt-label { font-size: 1rem; color: var(--muted2); margin: .2rem 0; }
.cnt-date  { font-size: .82rem; color: var(--muted); }

/* Header plan */
.header-center { display: flex; align-items: center; gap: .4rem; font-weight: 700; font-size: 1rem; }
.dest-flag { font-size: 1.4rem; }

/* Sections */
.section { margin-bottom: 2rem; }
.section h3 { font-size: .95rem; font-weight: 700; color: var(--muted2); margin-bottom: .75rem;
  text-transform: uppercase; letter-spacing: .05em; }

/* Today tasks */
.today-tasks { display: flex; flex-direction: column; gap: .5rem; }
.task-btn {
  display: flex; align-items: center; gap: .75rem;
  background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px;
  padding: .75rem 1rem; cursor: pointer; text-align: left;
  transition: border-color .15s, opacity .15s;
}
.task-btn:hover { border-color: var(--accent); }
.task-btn.done { opacity: .5; }
.task-icon { font-size: 1.3rem; flex-shrink: 0; }
.task-info { flex: 1; display: flex; flex-direction: column; gap: .1rem; }
.task-label { color: var(--text); font-size: .9rem; font-weight: 600; }
.task-desc  { color: var(--muted); font-size: .78rem; }
.task-arrow { color: var(--muted); font-size: .9rem; }

/* Phases */
.phases { display: flex; flex-direction: column; gap: .6rem; }
.phase-card {
  background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px;
  padding: .9rem 1rem; opacity: .55; transition: opacity .15s;
}
.phase-active { opacity: 1; border-color: var(--accent); }
.phase-done   { opacity: .7; }
.phase-future { opacity: .4; }

.phase-header { display: flex; justify-content: space-between; margin-bottom: .3rem; }
.phase-range  { font-size: .75rem; color: var(--muted); font-weight: 600; }
.phase-status { font-size: .75rem; color: var(--accent); font-weight: 700; }
.phase-title  { font-size: .92rem; font-weight: 700; color: var(--text); margin-bottom: .5rem; }
.phase-tasks  { display: flex; flex-wrap: wrap; gap: .3rem; }
.phase-tag {
  background: var(--bg-app); border: 1px solid var(--border); border-radius: 20px;
  padding: .2rem .6rem; font-size: .75rem; color: var(--muted2);
}
.phase-tag.tag-done { background: #22c55e20; border-color: #22c55e40; color: #86efac; }

/* Progress */
.progress-row { display: flex; justify-content: space-between; margin-bottom: .4rem; }
.prog-label { color: var(--muted2); font-size: .85rem; }
.prog-pct   { color: var(--accent); font-weight: 700; font-size: .85rem; }
.prog-bar   { height: 8px; background: var(--border); border-radius: 4px; overflow: hidden; }
.prog-fill  { height: 100%; background: var(--accent); border-radius: 4px; transition: width .5s; }

@media (max-width: 480px) {
  .setup-card { padding: 1.25rem 1rem; }
  .setup-icon { font-size: 2.2rem; }
  .setup-card h2 { font-size: 1.15rem; }
  .cnt-days { font-size: 2.5rem; }
  .countdown-card { padding: 1rem; }
  .lang-chip { font-size: .75rem; padding: .25rem .55rem; }
  .btn-start { padding: .7rem; font-size: .92rem; }
  .task-btn { padding: .6rem .75rem; gap: .5rem; }
  .task-icon { font-size: 1.1rem; }
  .phase-tag { font-size: .7rem; padding: .15rem .45rem; }
}
</style>
