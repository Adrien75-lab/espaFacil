<template>
  <div class="landing">
    <section class="hero">
      <h1 class="hero-title">🌍 LinguaFacil</h1>
      <p class="hero-tagline">
        Apprenez une langue étrangère gratuitement, à votre rythme,
        avec des exercices ludiques et une révision intelligente.
      </p>

      <div v-if="store.languages.length" class="hero-flags">
        <FlagIcon v-for="lang in store.languages" :key="lang.code" :lang="lang.code" :size="28" />
      </div>

      <div class="hero-actions">
        <RouterLink to="/register" class="btn btn-primary">Créer un compte gratuit</RouterLink>
        <button class="btn btn-secondary" @click="$emit('start-demo')">Essayer une leçon gratuite</button>
      </div>

      <p class="hero-login">Déjà inscrit ? <RouterLink to="/login">Se connecter</RouterLink></p>
    </section>

    <section class="features">
      <h2>Pourquoi LinguaFacil ?</h2>
      <div class="feature-grid">
        <div v-for="f in features" :key="f.title" class="feature-card">
          <span class="feature-emoji">{{ f.emoji }}</span>
          <h3>{{ f.title }}</h3>
          <p>{{ f.text }}</p>
        </div>
      </div>
    </section>

    <section class="cta-final">
      <h2>Prêt à apprendre ?</h2>
      <p>Créez votre compte gratuit et débloquez toutes les langues, tous les niveaux et tous les modes de jeu.</p>
      <RouterLink to="/register" class="btn btn-primary">Créer mon compte gratuit</RouterLink>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useLangStore } from '@/stores/lang'
import FlagIcon from '@/components/FlagIcon.vue'

defineEmits<{ 'start-demo': [] }>()

const store = useLangStore()

const features = [
  { emoji: '🌍', title: '14 langues', text: 'Espagnol, anglais, japonais, allemand, italien, portugais, arabe et bien plus encore.' },
  { emoji: '🎮', title: '16 modes de jeu', text: 'QCM, cartes, dictée, dialogues, histoires, anagrammes, conjugaison, traduction...' },
  { emoji: '🧠', title: 'Révision intelligente', text: 'Un système de répétition espacée (SRS) qui vous fait réviser au bon moment.' },
  { emoji: '🏆', title: 'Objectifs & classement', text: 'Suivez votre progression au quotidien et comparez-vous aux autres apprenants.' },
]
</script>

<style scoped>
.landing { max-width: 900px; margin: 0 auto; padding: 1rem 0 2rem; text-align: center; }

.hero { padding: 2rem 1rem 3rem; }
.hero-title { font-size: 2.6rem; margin-bottom: 0.75rem; }
.hero-tagline { color: var(--muted); font-size: 1.1rem; max-width: 540px; margin: 0 auto 1.5rem; line-height: 1.6; }

.hero-flags { display: flex; justify-content: center; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2rem; }

.hero-actions { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem; }
.btn { display: inline-block; border-radius: 8px; padding: 0.85rem 2rem; font-size: 1rem; font-weight: 700;
  text-decoration: none; cursor: pointer; border: 2px solid transparent; transition: opacity .2s, transform .15s; }
.btn:hover { transform: translateY(-1px); }
.btn-primary { background: var(--accent); color: white; }
.btn-primary:hover { opacity: 0.9; }
.btn-secondary { background: var(--bg-card); color: var(--text); border-color: var(--border); }
.btn-secondary:hover { border-color: var(--accent); }

.hero-login { color: var(--muted2); font-size: 0.9rem; }

.features { padding: 2rem 1rem; }
.features h2 { font-size: 1.6rem; margin-bottom: 1.5rem; }
.feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; }
.feature-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem 1rem; text-align: left; }
.feature-emoji { font-size: 2rem; display: block; margin-bottom: 0.5rem; }
.feature-card h3 { font-size: 1.05rem; margin-bottom: 0.4rem; }
.feature-card p { color: var(--muted); font-size: 0.88rem; line-height: 1.5; }

.cta-final { padding: 2.5rem 1rem 1rem; }
.cta-final h2 { font-size: 1.6rem; margin-bottom: 0.5rem; }
.cta-final p { color: var(--muted); margin-bottom: 1.25rem; max-width: 480px; margin-left: auto; margin-right: auto; }

@media (max-width: 480px) {
  .hero-title { font-size: 1.8rem; }
  .hero-tagline { font-size: 0.95rem; }
  .btn { padding: 0.75rem 1.2rem; font-size: 0.9rem; }
  .hero-actions { flex-direction: column; align-items: center; }
  .features h2, .cta-final h2 { font-size: 1.25rem; }
  .feature-grid { grid-template-columns: 1fr; }
}
</style>
