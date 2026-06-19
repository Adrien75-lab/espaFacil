<template>
  <div class="survival">

    <div class="sv-header">
      <button class="btn-back" @click="router.push('/')">← Accueil</button>
      <span class="mode-badge">🆘 Phrases de survie</span>
      <span class="counter">{{ current + 1 }} / {{ phrases.length }}</span>
    </div>

    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: ((current + 1) / phrases.length * 100) + '%' }"></div>
    </div>

    <!-- Pas de langue sélectionnée -->
    <div v-if="!phrases.length" class="empty">
      <p>Sélectionnez une langue sur l'accueil.</p>
      <button class="btn-primary" @click="router.push('/')">← Retour</button>
    </div>

    <!-- Carte flash -->
    <div v-else class="card-area">
      <div class="category-badge" :class="phrase.category">
        {{ CATEGORY_LABELS[phrase.category] }}
      </div>

      <div class="flash-card" :class="{ revealed }" @click="revealed = true">
        <!-- Recto : français -->
        <div class="card-face card-front">
          <span class="card-lang">🇫🇷 Français</span>
          <p class="card-text">{{ phrase.fr }}</p>
          <span class="tap-hint" v-if="!revealed">Appuyez pour voir la traduction</span>
        </div>

        <!-- Verso : langue cible -->
        <div class="card-face card-back">
          <span class="card-lang">{{ store.currentLang?.flag }} {{ store.currentLang?.name }}</span>
          <p class="card-text target" :dir="isRtl ? 'rtl' : 'ltr'">{{ phrase.text }}</p>
          <button class="tts-btn" @click.stop="speak(phrase.text)">🔊 Écouter</button>
        </div>
      </div>

      <!-- Navigation -->
      <div class="nav-row">
        <button class="nav-btn" :disabled="current === 0" @click="prev">← Précédent</button>
        <button v-if="current < phrases.length - 1" class="nav-btn primary" @click="next">
          Suivant →
        </button>
        <button v-else class="nav-btn primary" @click="restart">
          🔄 Recommencer
        </button>
      </div>

      <!-- Toutes les phrases (vue rapide) -->
      <details class="quick-list">
        <summary>Voir toutes les phrases</summary>
        <div class="quick-row" v-for="(p, i) in phrases" :key="i" @click="jumpTo(i)">
          <span class="ql-cat" :class="p.category">{{ CATEGORY_ICONS[p.category] }}</span>
          <span class="ql-fr">{{ p.fr }}</span>
          <span class="ql-text" :dir="isRtl ? 'rtl' : 'ltr'">{{ p.text }}</span>
          <button class="ql-tts" @click.stop="speak(p.text)">🔊</button>
        </div>
      </details>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useLangStore } from '@/stores/lang'
import { SURVIVAL, type SurvivalPhrase } from '@/data/survival'

const router = useRouter()
const store  = useLangStore()

const current  = ref(0)
const revealed = ref(false)

const isRtl  = computed(() => store.currentLang?.is_rtl ?? false)
const phrases = computed<SurvivalPhrase[]>(() =>
  store.currentLang ? (SURVIVAL[store.currentLang.code] ?? []) : []
)
const phrase = computed(() => phrases.value[current.value])

const CATEGORY_LABELS: Record<string, string> = {
  urgence:       '🚨 Urgence',
  santé:         '🏥 Santé',
  orientation:   '🗺️ Orientation',
  communication: '💬 Communication',
}
const CATEGORY_ICONS: Record<string, string> = {
  urgence: '🚨', santé: '🏥', orientation: '🗺️', communication: '💬',
}

const LANG_BCP47: Record<string, string> = {
  es: 'es-ES', en: 'en-US', de: 'de-DE', it: 'it-IT',
  pt: 'pt-PT', nl: 'nl-NL', pl: 'pl-PL', tr: 'tr-TR',
  ru: 'ru-RU', ja: 'ja-JP', ko: 'ko-KR', zh: 'zh-CN',
  ar: 'ar-SA', hi: 'hi-IN',
}

function speak(text: string) {
  if (!window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const utt = new SpeechSynthesisUtterance(text)
  utt.lang = LANG_BCP47[store.currentLang?.code ?? ''] ?? ''
  window.speechSynthesis.speak(utt)
}

function next() {
  if (current.value < phrases.value.length - 1) {
    current.value++
    revealed.value = false
  }
}
function prev() {
  if (current.value > 0) {
    current.value--
    revealed.value = false
  }
}
function restart() {
  current.value  = 0
  revealed.value = false
}
function jumpTo(i: number) {
  current.value  = i
  revealed.value = true
}

// Reset quand la langue change
watch(() => store.currentLang, () => {
  current.value  = 0
  revealed.value = false
})
</script>

<style scoped>
.survival { max-width: 560px; margin: 0 auto; padding: 1.5rem 1rem; }

.sv-header {
  display: flex; align-items: center; justify-content: space-between; margin-bottom: .75rem;
}
.btn-back   { background: none; border: none; color: var(--muted); cursor: pointer; font-size: .9rem; }
.mode-badge { background: #ef444420; color: #f87171; padding: .2rem .7rem; border-radius: 20px; font-size: .8rem; }
.counter    { color: var(--muted2); font-size: .9rem; }

.progress-bar  { height: 6px; background: var(--border); border-radius: 3px; margin-bottom: 1.5rem; }
.progress-fill { height: 100%; background: #ef4444; border-radius: 3px; transition: width .4s; }

.empty { text-align: center; color: var(--muted); padding: 3rem 1rem; }

/* Category badge */
.category-badge {
  display: inline-block; border-radius: 20px; padding: .25rem .85rem;
  font-size: .8rem; font-weight: 700; margin-bottom: 1rem;
}
.urgence       { background: #ef444420; color: #f87171; }
.santé         { background: #22c55e20; color: #86efac; }
.orientation   { background: #f59e0b20; color: #fcd34d; }
.communication { background: #6366f120; color: #a5b4fc; }

/* Flash card */
.card-area { display: flex; flex-direction: column; align-items: center; gap: 1.25rem; }

.flash-card {
  width: 100%; min-height: 200px;
  background: var(--bg-card); border: 2px solid var(--border);
  border-radius: 20px; padding: 2rem 1.5rem;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  cursor: pointer; transition: border-color .2s, box-shadow .2s;
  position: relative; text-align: center;
}
.flash-card:hover { border-color: #ef4444; box-shadow: 0 4px 20px #ef444415; }

.card-face { display: flex; flex-direction: column; align-items: center; gap: .75rem; width: 100%; }
.card-back { display: none; }
.flash-card.revealed .card-front { display: none; }
.flash-card.revealed .card-back  { display: flex; }

.card-lang { font-size: .78rem; color: var(--muted2); font-weight: 600; letter-spacing: .04em; }
.card-text { font-size: 1.4rem; font-weight: 700; color: var(--text); margin: 0; line-height: 1.4; }
.card-text.target { color: #f87171; }
.tap-hint  { font-size: .75rem; color: var(--muted); margin-top: .5rem; }

.tts-btn {
  background: #ef444420; border: 1px solid #ef444440; color: #f87171;
  border-radius: 8px; padding: .4rem 1rem; font-size: .85rem; cursor: pointer;
  transition: background .15s;
}
.tts-btn:hover { background: #ef444435; }

/* Navigation */
.nav-row { display: flex; gap: .75rem; width: 100%; justify-content: center; }
.nav-btn {
  background: var(--bg-card); border: 1px solid var(--border); border-radius: 10px;
  padding: .6rem 1.4rem; font-size: .9rem; cursor: pointer; color: var(--dim);
  transition: border-color .15s;
}
.nav-btn:disabled { opacity: .35; cursor: default; }
.nav-btn:not(:disabled):hover { border-color: var(--accent); }
.nav-btn.primary { background: #ef4444; border-color: #ef4444; color: white; font-weight: 700; }
.nav-btn.primary:hover { background: #dc2626; }

/* Quick list */
.quick-list {
  width: 100%; margin-top: .5rem;
  background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px;
  overflow: hidden;
}
.quick-list summary {
  padding: .75rem 1rem; cursor: pointer; color: var(--muted2); font-size: .85rem;
  user-select: none;
}
.quick-row {
  display: flex; align-items: center; gap: .75rem;
  padding: .55rem 1rem; border-top: 1px solid var(--border);
  cursor: pointer; transition: background .1s;
}
.quick-row:hover { background: var(--bg-hover); }
.ql-cat  { font-size: .85rem; flex-shrink: 0; }
.ql-fr   { flex: 1; font-size: .82rem; color: var(--muted2); }
.ql-text { flex: 1; font-size: .82rem; color: var(--text); font-weight: 600; }
.ql-tts  { background: none; border: none; cursor: pointer; font-size: .85rem; opacity: .5; }
.ql-tts:hover { opacity: 1; }

@media (max-width: 480px) {
  .flash-card { padding: 1.25rem 1rem; min-height: 160px; }
  .card-text { font-size: 1.15rem; }
  .nav-row { flex-direction: column; }
  .nav-btn { width: 100%; text-align: center; }
  .quick-row { gap: .5rem; padding: .5rem .75rem; }
  .ql-fr, .ql-text { font-size: .75rem; }
}
</style>
