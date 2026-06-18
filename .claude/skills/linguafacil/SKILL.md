---
name: linguafacil
description: >
  Contexte de travail complet et procédure de reprise du projet LinguaFacil d'Adrien.
  Utiliser obligatoirement cette skill dès que l'utilisateur mentionne LinguaFacil, son application
  d'apprentissage des langues, une phase R1-R5 ou 22+, une branche codex, Vue, Laravel, HomeView,
  un mode d'exercice, les dialogues, histoires, conjugaisons, traductions, devinettes, vocabulaire,
  migrations ou seeders. Elle fournit l'architecture réelle, les branches, l'état des phases et les
  commandes de validation afin de ne jamais reprendre le projet depuis un contexte périmé.
---

# LinguaFacil

## Démarrage obligatoire d'une session

Le dépôt évolue vite. Considère les références comme un point de départ, jamais comme une vérité plus récente que Git.

1. Localise le dépôt. Chemin Windows habituel :
   `C:\Users\adric\Claude\Projects\Website-Project`.
2. Exécute `scripts/project_snapshot.ps1` fourni avec cette skill, ou les commandes équivalentes.
3. Lis `references/current-status.md` pour connaître le dernier passage de relais documenté.
4. Compare ce document à la branche courante, `git status`, `git log` et aux branches distantes.
5. Lis `references/architecture.md` avant toute décision structurelle.
6. Lis `references/workflow.md` avant de créer une branche, modifier la base, tester ou livrer.
7. Résume brièvement à Adrien : branche courante, phase en cours, changements non commités et prochaine action.

Ne demande pas à Adrien de répéter un contexte vérifiable dans le dépôt.

## Règle critique

Ne modifie jamais `index.html`, `style.css` ou `script.js` à la racine. Ce sont les fichiers de l'ancienne application abandonnée. Le produit actif se trouve exclusivement dans `frontend/`, `backend/` et `scripts/`.

## Principes de travail

- Inspecte le code existant avant de proposer ou d'écrire une solution.
- Ne remets jamais de gros catalogues applicatifs directement dans une vue Vue.
- Le contenu durable vit côté backend, dans `backend/database/data/`, puis est chargé par un seeder.
- Les générateurs restent dans `scripts/`; les fichiers générés et leur source doivent rester synchronisés.
- Utilise les composants, composables, types, utilitaires, Resources et modèles introduits par la refonte R1-R5.
- Évite toute duplication importante. Si deux vues reproduisent le même algorithme ou le même affichage, extrais-le dans `utils/`, `composables/`, `features/exercise/Bloc/` ou `features/exercise/composables/`.
- Pour les blocs UI partagés des exercices, utilise `frontend/src/features/exercise/Bloc/` avec des fichiers préfixés `BlocExercise...` et un import via `@/features/exercise/Bloc`.
- Préserve les changements d'Adrien et ne réinitialise jamais brutalement le worktree.
- Ne commit et ne pousse que lorsque l'utilisateur le demande, sauf instruction explicite contraire dans la conversation.

## Contrat avec Adrien

- Crée une branche distincte pour chaque nouvelle phase ou fonctionnalité.
- Format demandé : `codex/YYYY-MM-DD-nom-fonctionnalite`.
- Indique toujours la branche exacte sur laquelle travailler et tester.
- Après toute modification backend, termine par une section **Commandes à lancer**.
- Dis explicitement s'il faut une migration, un seeder, les deux, ou aucun des deux.
- Pour un seeder ciblé, donne la commande exacte, par exemple :
  `php artisan db:seed --class=DialogueSeeder`.
- Ne considère pas une phase terminée après une simple génération de données : vérifie l'expérience réelle, le nombre d'exercices et la cohérence pédagogique.

## Validation minimale

Pour toute modification frontend :

```powershell
cd frontend
npm run lint
npm test
npm run build
```

Pour toute modification backend :

```powershell
cd backend
vendor\bin\pint --test app routes tests database\migrations database\seeders
php artisan test
```

Pour un changement transversal, exécute les deux suites. Après une modification visuelle importante, teste aussi l'écran dans le navigateur local.

## Références

- `references/current-status.md` : état daté des branches, phases, commits et prochaine étape.
- `references/architecture.md` : architecture frontend/backend, données et conventions.
- `references/workflow.md` : branches, commandes locales, base de données, seeders et livraison.

Mets à jour `references/current-status.md` à la fin d'une phase importante afin que la prochaine session puisse reprendre sans ambiguïté.
