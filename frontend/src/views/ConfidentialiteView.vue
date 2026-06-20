<template>
  <div class="legal-page">
    <div class="legal-card">
      <button class="btn-back" @click="router.back()">← Retour</button>
      <h1>Politique de confidentialité</h1>

      <section>
        <h2>Données collectées</h2>
        <p>Lors de votre inscription, nous collectons :</p>
        <ul>
          <li>Votre nom</li>
          <li>Votre adresse email</li>
          <li>Votre mot de passe (stocké de manière chiffrée)</li>
        </ul>
        <p>Lors de l'utilisation de l'application, nous collectons :</p>
        <ul>
          <li>Vos données de progression (XP, sessions, scores)</li>
          <li>Vos mots personnalisés</li>
          <li>Vos données de révision espacée (SRS)</li>
        </ul>
      </section>

      <section>
        <h2>Base légale</h2>
        <p>Le traitement de vos données repose sur :</p>
        <ul>
          <li><strong>Votre consentement</strong> lors de la création de votre compte</li>
          <li><strong>L'exécution du contrat</strong> (conditions d'utilisation) pour le fonctionnement du service</li>
        </ul>
      </section>

      <section>
        <h2>Finalité du traitement</h2>
        <p>Vos données sont utilisées uniquement pour :</p>
        <ul>
          <li>Assurer le fonctionnement de votre compte</li>
          <li>Sauvegarder et afficher votre progression</li>
          <li>Afficher le classement entre utilisateurs</li>
        </ul>
        <p>Vos données ne sont ni vendues ni partagées avec des tiers.</p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>Le site utilise uniquement des <strong>cookies techniques</strong> nécessaires à l'authentification
           (cookie de session Laravel Sanctum). Aucun cookie publicitaire ou de suivi n'est utilisé.</p>
      </section>

      <section>
        <h2>Durée de conservation</h2>
        <p>Vos données sont conservées tant que votre compte est actif. Elles sont supprimées
           définitivement lorsque vous supprimez votre compte.</p>
      </section>

      <section>
        <h2>Vos droits (RGPD)</h2>
        <p>Conformément au Règlement Général sur la Protection des Données, vous disposez des droits suivants :</p>
        <ul>
          <li><strong>Droit d'accès :</strong> consulter vos données depuis votre profil</li>
          <li><strong>Droit de rectification :</strong> modifier vos informations</li>
          <li><strong>Droit de suppression :</strong> supprimer votre compte depuis votre profil</li>
          <li><strong>Droit à la portabilité :</strong> demander l'export de vos données par email</li>
        </ul>
        <p>Pour exercer vos droits, contactez-nous à : <a href="mailto:adrichristophe@gmail.com">adrichristophe@gmail.com</a></p>
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
