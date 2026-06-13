<template>
  <div class="story-wrap" @click="closePopup">
    <Teleport to="body">
      <ConfirmQuit v-if="showQuit" @cancel="showQuit = false" @confirm="router.push('/')" />
    </Teleport>

    <!-- Header -->
    <div class="story-header">
      <button class="btn-quit" @click.stop="showQuit = true">✕</button>
      <div class="lang-info">
        <FlagIcon v-if="store.currentLang" :lang="store.currentLang.code" :size="20" />
        <span>{{ store.currentLang?.name ?? '—' }}</span>
      </div>
      <div class="xp-badge" v-if="totalXpGained > 0">+{{ totalXpGained }} XP</div>
    </div>

    <!-- Instruction -->
    <p class="hint">Appuyez sur un mot pour voir sa traduction 👇</p>

    <!-- Story tabs -->
    <div class="story-tabs">
      <button
        v-for="(s, i) in stories"
        :key="s.id"
        class="story-tab"
        :class="{ active: currentIdx === i, done: readStatus[i] }"
        @click.stop="selectStory(i)"
      >
        {{ s.emoji }} {{ s.title_fr }}
        <span v-if="readStatus[i]" class="check">✓</span>
      </button>
    </div>

    <!-- Story body -->
    <div v-if="currentStory" class="story-body">
      <template v-for="(tok, i) in currentStory.tokens" :key="i">
        <!-- Mot cliquable -->
        <span
          v-if="!tok.punct"
          class="word"
          :class="{ highlighted: activeIdx === i }"
          @click.stop="onWordClick(tok, i, $event)"
        >{{ tok.text }}</span>
        <!-- Ponctuation non cliquable -->
        <span v-else class="punct">{{ tok.text }}</span>
        <!-- Espace après chaque mot (pas après ponctuation) -->
        <span v-if="!tok.punct" class="sp"> </span>
      </template>
    </div>

    <!-- Bouton lire -->
    <div class="story-footer">
      <template v-if="!readStatus[currentIdx]">
        <button class="btn-read" @click.stop="markRead">✅ J'ai lu cette histoire</button>
      </template>
      <div v-else class="read-msg">✅ Histoire lue !</div>

      <div v-if="allRead" class="all-done">
        🎉 Bravo ! Toutes les histoires terminées&nbsp;!
        <br><span class="xp-total">+{{ totalXpGained }} XP gagnés</span>
      </div>
    </div>

    <!-- Popup traduction (Teleport pour éviter z-index) -->
    <Teleport to="body">
      <Transition name="pop">
        <div
          v-if="popup"
          class="word-popup"
          :style="popupStyle"
          @click.stop
        >
          <div class="popup-word">{{ popup.text }}</div>
          <div class="popup-arrow">→</div>
          <div class="popup-fr">{{ popup.fr }}</div>
          <button class="popup-tts" @click="speak(popup.text)" title="Écouter">🔊</button>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useLangStore } from '@/stores/lang'
import ConfirmQuit from '@/components/ConfirmQuit.vue'
import FlagIcon from '@/components/FlagIcon.vue'
import { STORIES, type StoryToken } from '@/data/stories'
import { postSession, calcXp } from '@/api/progress'

const router = useRouter()
const store  = useLangStore()

const showQuit   = ref(false)
const currentIdx = ref(0)
const activeIdx  = ref<number | null>(null)
const readStatus = ref<boolean[]>([false, false, false])
const totalXpGained = ref(0)

// Popup
const popup      = ref<StoryToken | null>(null)
const popupStyle = ref<Record<string, string>>({})

const BCP47: Record<string, string> = {
  es:'es-ES', en:'en-US', de:'de-DE', it:'it-IT', pt:'pt-PT', nl:'nl-NL',
  pl:'pl-PL', tr:'tr-TR', ru:'ru-RU', ja:'ja-JP', ko:'ko-KR', zh:'zh-CN',
  ar:'ar-SA', hi:'hi-IN',
}

const langCode = computed(() => store.currentLang?.code ?? 'es')
const stories  = computed(() => STORIES[langCode.value] ?? STORIES['es'])
const currentStory = computed(() => stories.value[currentIdx.value] ?? null)
const allRead = computed(() => readStatus.value.every(Boolean))

function selectStory(i: number) {
  currentIdx.value = i
  closePopup()
}

function onWordClick(tok: StoryToken, idx: number, e: MouseEvent) {
  if (!tok.fr) return
  activeIdx.value = idx
  popup.value = tok

  // Positionner le popup près du clic, en restant dans la fenêtre
  const x = Math.min(e.clientX, window.innerWidth - 200)
  const y = e.clientY - 80
  popupStyle.value = {
    left: `${x}px`,
    top: `${y < 10 ? e.clientY + 20 : y}px`,
  }
}

function closePopup() {
  popup.value = null
  activeIdx.value = null
}

function speak(text: string) {
  if (!('speechSynthesis' in window)) return
  window.speechSynthesis.cancel()
  const utt  = new SpeechSynthesisUtterance(text)
  utt.lang   = BCP47[langCode.value] ?? 'es-ES'
  utt.rate   = 0.85
  window.speechSynthesis.speak(utt)
}

async function markRead() {
  if (readStatus.value[currentIdx.value]) return
  readStatus.value[currentIdx.value] = true

  // XP pour cette histoire
  const storyXp = calcXp('stories', 1, 1)
  totalXpGained.value += storyXp

  await postSession({
    language:  langCode.value,
    theme:     'story',
    level:     'intermediaire',
    mode:      'stories',
    score:     100,
    xp_gained: storyXp,
    correct:   1,
    total:     1,
  })

  // Passer à la suivante si disponible
  if (currentIdx.value < stories.value.length - 1 && !readStatus.value[currentIdx.value + 1]) {
    setTimeout(() => { currentIdx.value++ }, 800)
  }
}

// Réinitialiser si la langue change
watch(langCode, () => {
  currentIdx.value = 0
  readStatus.value = [false, false, false]
  totalXpGained.value = 0
  closePopup()
})

// Fermer popup sur Escape
function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closePopup()
}
onMounted(() => document.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown))
</script>

<style scoped>
.story-wrap {
  max-width: 680px;
  margin: 0 auto;
  padding: 1.25rem 1rem 3rem;
  min-height: 100vh;
}

.story-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}
.btn-quit {
  background: none;
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--muted);
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  font-size: 0.85rem;
}
.btn-quit:hover { color: var(--text); border-color: var(--text); }
.lang-info {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--dim);
  font-size: 0.9rem;
  flex: 1;
}
.xp-badge {
  background: var(--accent);
  color: white;
  border-radius: 20px;
  padding: 0.2rem 0.75rem;
  font-size: 0.82rem;
  font-weight: 700;
}

.hint {
  color: var(--muted);
  font-size: 0.82rem;
  margin: 0 0 1rem;
  text-align: center;
}

/* Story tabs */
.story-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}
.story-tab {
  background: var(--bg-card);
  border: 2px solid var(--border);
  border-radius: 10px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.88rem;
  color: var(--dim);
  transition: border-color .15s, color .15s;
  display: flex;
  align-items: center;
  gap: 0.35rem;
}
.story-tab:hover { border-color: var(--accent); color: var(--text); }
.story-tab.active { border-color: var(--accent); color: var(--text); background: var(--bg-hover); }
.story-tab.done { border-color: #22c55e; color: #22c55e; }
.check { font-weight: 700; }

/* Story body */
.story-body {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.5rem 1.75rem;
  font-size: 1.15rem;
  line-height: 2.1;
  color: var(--text);
  margin-bottom: 1.5rem;
  direction: ltr; /* RTL languages: override in JS if needed */
}

/* Mots cliquables */
.word {
  cursor: pointer;
  border-bottom: 2px solid transparent;
  border-radius: 3px;
  padding: 0.05rem 0.15rem;
  transition: background .12s, border-color .12s;
  display: inline;
}
.word:hover {
  background: color-mix(in srgb, var(--accent) 15%, transparent);
  border-bottom-color: var(--accent);
}
.word.highlighted {
  background: color-mix(in srgb, var(--accent) 25%, transparent);
  border-bottom-color: var(--accent);
}

.punct { color: var(--dim); display: inline; }
.sp { display: inline; }

/* Footer */
.story-footer { text-align: center; }
.btn-read {
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: opacity .2s;
}
.btn-read:hover { opacity: 0.85; }
.read-msg { color: #22c55e; font-weight: 600; font-size: 1rem; }

.all-done {
  margin-top: 1.25rem;
  background: color-mix(in srgb, #22c55e 10%, var(--bg-card));
  border: 2px solid #22c55e;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  color: var(--text);
  line-height: 1.6;
}
.xp-total { color: #22c55e; font-weight: 700; font-size: 1.1rem; }

/* Popup flottant */
.word-popup {
  position: fixed;
  z-index: 9999;
  background: var(--bg-card);
  border: 2px solid var(--accent);
  border-radius: 12px;
  padding: 0.6rem 0.9rem;
  box-shadow: 0 8px 24px rgba(0,0,0,.3);
  min-width: 160px;
  max-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  pointer-events: auto;
}
.popup-word {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--accent);
  word-break: break-word;
}
.popup-arrow { font-size: 0.75rem; color: var(--muted); line-height: 1; }
.popup-fr {
  font-size: 0.95rem;
  color: var(--text);
  font-style: italic;
}
.popup-tts {
  align-self: flex-end;
  background: none;
  border: 1px solid var(--border);
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.2rem 0.5rem;
  margin-top: 0.2rem;
  transition: background .12s;
}
.popup-tts:hover { background: var(--bg-hover); }

/* Transition popup */
.pop-enter-active, .pop-leave-active { transition: opacity .12s, transform .12s; }
.pop-enter-from, .pop-leave-to { opacity: 0; transform: scale(0.9) translateY(4px); }
</style>
