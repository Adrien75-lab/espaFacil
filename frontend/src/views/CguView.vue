<template>
  <div class="legal-page">
    <div class="legal-card">
      <button class="btn-back" @click="router.back()">← Retour</button>
      <h1>Conditions Générales d'Utilisation</h1>

      <section>
        <h2>1. Objet</h2>
        <p>Les présentes conditions régissent l'utilisation de LinguaFacil, application web
           d'apprentissage des langues.</p>
      </section>

      <section>
        <h2>2. Accès au service</h2>
        <p>L'inscription est gratuite. L'utilisateur doit fournir des informations exactes
           et maintenir la confidentialité de ses identifiants de connexion.</p>
      </section>

      <section>
        <h2>3. Utilisation du service</h2>
        <p>L'utilisateur s'engage à :</p>
        <ul>
          <li>Utiliser le service dans le respect de la loi</li>
          <li>Ne pas tenter de perturber le fonctionnement du site</li>
          <li>Ne pas créer plusieurs comptes pour manipuler le classement</li>
        </ul>
      </section>

      <section>
        <h2>4. Contenu</h2>
        <p>Le contenu pédagogique (mots, phrases, exercices) est fourni à titre éducatif.
           L'éditeur ne garantit pas l'absence d'erreurs dans les traductions ou les exercices.</p>
      </section>

      <section>
        <h2>5. Données personnelles</h2>
        <p>Le traitement des données personnelles est décrit dans notre
           <RouterLink to="/confidentialite">politique de confidentialité</RouterLink>.</p>
      </section>

      <section>
        <h2>6. Suppression de compte</h2>
        <p>L'utilisateur peut supprimer son compte à tout moment depuis son profil.
           La suppression est définitive et entraîne l'effacement de toutes les données associées.</p>
      </section>

      <section>
        <h2>7. Modification des CGU</h2>
        <p>L'éditeur se réserve le droit de modifier les présentes conditions.
           Les utilisateurs seront informés de toute modification substantielle.</p>
      </section>

      <section>
        <h2>8. Droit applicable</h2>
        <p>Les présentes conditions sont régies par le droit français.
           Tout litige sera soumis aux tribunaux compétents.</p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
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
