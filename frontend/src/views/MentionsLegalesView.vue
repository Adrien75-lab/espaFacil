<template>
  <div class="legal-page">
    <div class="legal-card">
      <button class="btn-back" @click="router.back()">← Retour</button>
      <h1>Mentions légales</h1>

      <section>
        <h2>Éditeur du site</h2>
        <p>LinguaFacil est un projet personnel édité par :</p>
        <ul>
          <li><strong>Responsable :</strong> Adrien Christophe</li>
          <li><strong>Email :</strong> adrichristophe@gmail.com</li>
        </ul>
      </section>

      <section>
        <h2>Hébergement</h2>
        <p>Le site est hébergé par un prestataire technique dont les coordonnées seront précisées lors de la mise en production.</p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>L'ensemble du contenu du site (textes, images, code source) est la propriété de l'éditeur,
           sauf mention contraire. Toute reproduction est interdite sans autorisation préalable.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Pour toute question, vous pouvez nous contacter à : <a href="mailto:adrichristophe@gmail.com">adrichristophe@gmail.com</a></p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style scoped>
.legal-page { display: flex; justify-content: center; padding: 2rem 1rem; min-height: 100vh; }
.legal-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px;
  padding: 2rem; width: 100%; max-width: 700px; }
h1 { font-size: 1.5rem; margin-bottom: 1.5rem; }
h2 { font-size: 1.1rem; color: var(--accent); margin: 1.5rem 0 0.5rem; }
p, li { color: var(--muted2); font-size: 0.92rem; line-height: 1.6; }
ul { padding-left: 1.2rem; }
a { color: #818cf8; }
.btn-back { background: none; border: none; color: #666; cursor: pointer;
  font-size: 0.85rem; margin-bottom: 1rem; padding: 0; }
</style>
