# Architecture de LinguaFacil

## Vue d'ensemble

```text
Website-Project/
├── frontend/                 Vue 3 + TypeScript + Vite
│   ├── src/api/              Client HTTP et API métier
│   ├── src/components/       Composants généraux
│   ├── src/components/exercise/ Composants d'exercice partagés
│   ├── src/composables/      Logique réutilisable
│   ├── src/data/             Données encore statiques uniquement
│   ├── src/stores/           Pinia
│   ├── src/types/            Types partagés
│   ├── src/utils/            Speech, comparaison de texte, drapeaux
│   ├── src/views/            Écrans et modes
│   └── src/router/index.ts    Routes frontend
├── backend/                  Laravel 13, PHP 8.3, Sanctum
│   ├── app/Http/Controllers/Api/
│   ├── app/Http/Resources/
│   ├── app/Models/
│   ├── database/data/        Catalogues JSON durables
│   ├── database/migrations/
│   ├── database/seeders/
│   ├── routes/api.php
│   └── tests/
├── scripts/                  Générateurs de catalogues/seeders
└── .github/workflows/ci.yml  CI frontend et backend
```

Les fichiers `index.html`, `style.css` et `script.js` à la racine appartiennent à l'ancienne application et sont hors périmètre.

## Frontend

- Vue 3.5, TypeScript, Composition API avec `<script setup>`.
- Pinia : `stores/lang.ts` et `stores/auth.ts`.
- Vue Router : routes paresseuses dans `router/index.ts`.
- Vite écoute sur `http://localhost:5173` et proxy `/api` et `/sanctum` vers `http://127.0.0.1:8000`.
- CSS global dans `src/assets/main.css`, avec variables de thème clair/sombre.

### Architecture R1-R5 à préserver

- Types partagés : `src/types/index.ts`.
- Comparaison normalisée/Levenshtein : `src/utils/textMatching.ts`.
- Synthèse vocale et mapping BCP47 : `src/utils/speech.ts`.
- Enregistrement de sessions/XP : `src/composables/useSessionRecorder.ts`.
- Composants d'exercice :
  - `ExerciseHeader.vue`
  - `ExerciseProgress.vue`
  - `ExerciseResults.vue`
- Les vues doivent assembler ces briques au lieu de recopier leur logique.

### Modes actuellement routés

`quiz`, `cards`, `fill-blank`, `learn`, `listen`, `speak`, `review`, `difficult`, `sentence-builder`, `dictee`, `paires`, `dialogue`, `anagram`, `survival`, `voyage`, `stories`, `conjugaison`, `traduction`, `devinette`, plus login, inscription, profil et classement.

### HomeView

- Les modes sont déclarés dans le tableau `modes`.
- Les modes sans thème sont dans `NO_THEME_MODES`.
- Valeur observée : `dialogue`, `survival`, `voyage`, `stories`, `conjugaison`.
- Ajouter une fonctionnalité nécessite une route, un mode HomeView, un cas de navigation et éventuellement une extension des modes XP.

## Backend

- Laravel 13.8, PHP 8.3, Sanctum 4.3.
- Base locale par défaut : SQLite dans `backend/database/database.sqlite`.
- Contrôleurs API fins, modèles Eloquent avec relations, Resources pour le catalogue standard.
- Routes privées sous `/api/me` avec `auth:sanctum`.
- Contenu public : langues, thèmes, mots, grammaire, dialogues, histoires et conjugaisons.

### Données et responsabilité

- Vocabulaire, thèmes, langues et grammaire : `database/data/linguafacil.json` puis `LinguaFacilSeeder`.
- Dialogues historiques : `database/data/dialogues.json`.
- Dialogues phase 27 : générateur `scripts/generate_dialogue_expansions.mjs`, sortie `dialogue_expansions.json`, puis `DialogueSeeder`.
- Conjugaisons : `database/data/conjugations.json`, puis `ConjugationSeeder`.
- Histoires : source `frontend/src/data/stories.ts`, générateur `scripts/generate_seeders.mjs`, sortie `StorySeeder.php`.
- `DatabaseSeeder` appelle LinguaFacil, Dialogue, Story et Conjugation dans cet ordre.

### SRS et progression

- `ProgressController` enregistre les sessions, XP, historique, activité, badges et XP par mode.
- `ReviewController` gère les révisions espacées.
- Tables/modèles clés : `UserStat`, `UserProgress`, `UserBadge`, `WordReview`.

## R1-R5 consolidées

La refonte `refactor: structure application et qualité R1-R5` a notamment :

- centralisé types, utilitaires, composants d'exercice et session recorder côté Vue;
- déplacé dialogues et conjugaisons volumineux vers les catalogues backend;
- renforcé modèles, relations, contrôleurs et Resources Laravel;
- ajouté des tests frontend Vitest et backend PHPUnit;
- ajouté ESLint, Pint et une CI GitHub exécutant lint, tests et build.

Ne réintroduis pas les anciennes structures supprimées, notamment les gros fichiers `frontend/src/data/dialogues.ts` et `frontend/src/data/conjugations.ts`.

## Langues prises en charge

`es`, `en`, `de`, `it`, `pt`, `nl`, `pl`, `tr`, `ru`, `ja`, `ko`, `zh`, `ar`, `hi`.

Pour le texte arabe, prévoir le sens RTL. Pour la parole, utiliser les mappings BCP47 centralisés plutôt qu'une table locale dans chaque vue.
