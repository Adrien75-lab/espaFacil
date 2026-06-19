# État courant de LinguaFacil

## Mise à jour Codex — 19 juin 2026 — fiche recette branches

- Branche de travail : `codex/2026-06-19-doc-recette-branches`, créée depuis `origin/master`.
- Ajout de `docs/recettes/2026-06-19-recette-branches-codex.md` pour guider la recette des branches Codex en attente.
- La fiche couvre les branches `tests-selecteur-exercices`, `audit-contenu-pedagogique`, `aide-lecture-langues-non-latines` et rappelle aussi la branche UX thème clair/sélecteur.
- Aucun changement applicatif, aucune migration et aucun seeder.
- Validation : `git diff --check` OK.

## Mise à jour Codex — 18 juin 2026

- Recette validée par Adrien, puis fusion locale dans `master` par le commit `74672e8 merge: intégrer progression et refacto exercices`.
- `master` contient désormais la pile Codex progression/gamification + refacto frontend exercice.
- Branche de travail actuelle : `codex/2026-06-18-refacto-exercise-front`, poussée sur `origin`.
- Cette branche était empilée sur `codex/2026-06-18-progression-lingos` avant fusion dans `master`.
- `codex/2026-06-18-progression-lingos` contient la gamification validée par Adrien : XP, Lingos, bonus journaliers, jauge d'objectif, badge de performance sur les exercices et célébrations de fin de session. Commit principal : `c9c7222 feat: harmoniser la gamification des exercices`.
- `codex/2026-06-18-refacto-exercise-front` contient la phase 1 de refacto frontend validée : les composants partagés d'exercice ont quitté `frontend/src/components/exercise/` pour `frontend/src/features/exercise/Bloc/`, avec des fichiers préfixés `BlocExercise...` et un export groupé dans `Bloc/index.ts`. Commit principal : `9dc001c refactor: structurer les blocs d'exercice frontend`.
- La logique de statut/performance d'exercice est désormais portée par `frontend/src/features/exercise/composables/useExercisePerformance.ts`.
- Validations de la refacto front : `npm run lint`, `npm test`, `npm run build` et `git diff --check` OK.
- Aucun changement backend, aucune migration et aucun seeder pour cette phase de refacto.
- Pour reprendre une nouvelle fonctionnalité depuis l'état validé par Adrien, ne touche pas aux branches `claude/*`; repars d'une base Git explicite et conserve le préfixe `codex/`.

## Refacto backend phase 2 — 18 juin 2026

- Branche de travail : `codex/2026-06-18-refacto-back-services`, créée depuis `master` après fusion de la pile progression/gamification/refacto front.
- Recette déléguée validée par Codex après tests automatisés et parcours navigateur, puis fusion locale dans `master` par le commit `2de50bf merge: intégrer la refacto backend progression`.
- Première tranche : extraction de la logique métier des contrôleurs de progression vers des services dédiés.
- Nouveaux enums : `backend/app/Enums/ExerciseMode.php` et `backend/app/Enums/LearningLevel.php`.
- Nouveaux services : `StreakService`, `UserSessionProgressService`, `LearningProgressService`.
- Contrôleurs allégés : `ProgressController`, `TodayController`, `LearningProgressController`.
- Objectif : conserver les routes et réponses JSON existantes tout en préparant les phases back suivantes vers services/repositories/assemblers plus explicites.
- `references/architecture.md` contient désormais les schémas frontend exercice, backend progression et les règles Controller/Service/Enum à respecter.
- Aucun changement de base de données, aucune migration, aucun seeder.
- Deuxième tranche démarrée sur la même branche : ajout des couches `Assemblers` et `Repositories`.
- Nouveaux assemblers : `LearningProgressPayloadAssembler`, `UserSessionResultAssembler`.
- Nouveaux repositories : `LearningProgressRepository`, `UserBadgeRepository`, `UserProgressRepository`.
- Nouveau service domaine : `TodaySummaryService`.
- Règle ajoutée : créer un repository seulement pour une requête métier réutilisable ou une mutation de persistance significative, pas pour un simple accès Eloquent isolé.

Dernière vérification : 17 juin 2026, après la fusion des PR no 7 (indices espagnol), no 8 (indices 13 langues), no 9 (phrases d'exemple 14 langues) et no 10 (phase 28 suite, boulangerie) dans `master`.

## Dépôt

- Chemin : `C:\Users\adric\Claude\Projects\Website-Project`
- Dépôt GitHub : `Adrien75-lab/espaFacil`
- Branche stable locale et distante : `master`
- Commit stable observé : `220224a Phase 28 (suite) : histoire À la boulangerie pour 14 langues` (PR #10).
- `AGENTS.md` et `CLAUDE.md` sont désormais suivis et présents sur `master`.
- Convention de branches : `claude/YYYY-MM-DD-nom` pour le travail réalisé par Claude (Claude Code), `codex/YYYY-MM-DD-nom` pour Codex. Permet de distinguer rapidement qui a produit quelle branche.

## Branches importantes

### `master`

- Pointe sur `220224a` lors du dernier relevé.
- Contient les phases jusqu'à la phase 26, la refonte R1-R5, PHPStan/Larastan et PHPMD (PR no 2), la phase 27 (PR no 3), le correctif UX (PR no 4), la page d'accueil marketing (PR no 5), la phase 28 partielle (PR no 6), les indices manquants pour les 14 langues (PR no 7 espagnol + PR no 8 les 13 autres), les phrases d'exemple et gloses pour les 14 langues (PR no 9, 2190 mots), et la phase 28 suite avec l'histoire "À la boulangerie" (PR no 10, 10 histoires/langue).
- Contient les skills `.claude/skills/linguafacil` et `.claude/skills/feature-delivery-workflow`, ainsi que `AGENTS.md`/`CLAUDE.md`.
- `composer analyse` et `composer mess-detect` sont disponibles (voir détails ci-dessous).

### `codex/refactor-r1-r5`

- Branche historique de la refonte, commit `39f2793`.
- La refonte est déjà intégrée à `master`; ne repars pas de cette branche pour une nouvelle fonctionnalité.

### `codex/2026-06-14-phase-27-dialogues`

- Branche de la phase 27, **rebasée sur `master` à jour puis fusionnée via la PR no 3** (commit de fusion `9a6bad78`). Conservée mais n'a plus besoin d'être réutilisée.
- Contenu : `b8d62d3`/`6eca10b` réécrits en `67000cb`/`c36b37f` après rebase (les commits docs `2e54447`/`30c036e` étaient redondants avec `master` et ont été absorbés/vidés par le rebase).

### `claude/optimistic-mendel-yqz0h4`

- Branche qualité (PHPStan/Larastan + PHPMD), **fusionnée dans `master` via la PR no 2** (commit de fusion `334bd10`). Conservée mais n'a plus besoin d'être réutilisée.
- Détails de la configuration (désormais sur `master`) :
  - PHPStan/Larastan :
    - `larastan/larastan ^3.0` en dépendance dev de `backend/composer.json`.
    - `backend/phpstan.neon.dist` : niveau 5, analyse `app`, `routes`, `database/seeders`.
    - Script `composer analyse` (avec `--memory-limit=512M` pour éviter les crashs avec un `php.ini` par défaut à 128M) ; étape ajoutée dans `.github/workflows/ci.yml`.
    - Tous les modèles Eloquent ont reçu des blocs `@property` et des génériques de relation (`@return HasMany<X, $this>` / `@return BelongsTo<X, $this>`).
    - Les Resources (`WordResource`, `ThemeResource`, `LanguageResource`, `GrammarTipResource`) ont un `@mixin` vers leur modèle.
    - Bug corrigé : `mode_xp` sur `UserStat` n'avait pas de cast `array`.
    - Comparaisons strictes `=== 1` sur `diffInDays()` (float) corrigées par un cast `(int)` dans `DashboardController`, `ProgressController`, `TodayController`.
    - `composer analyse` → 0 erreur ; `php artisan test` → 5/5 ; `vendor/bin/pint --test` → 2 échecs préexistants sur `StorySeeder.php`/`LinguaFacilSeeder.php` (déjà présents sur `master` avant cette PR, hors périmètre).
  - PHPMD :
    - Isolé dans `backend/tools/phpmd/` (son propre `composer.json`/`composer.lock`, `vendor` non versionné) car PHPMD 2.x est incompatible avec Symfony 8 (Laravel 13).
    - `backend/phpmd.xml.dist` : règles `codesize`, `design`, `naming` (sans `ShortVariable`), `unusedcode` (sans `UnusedFormalParameter`), périmètre `app` et `routes` (les seeders de données sont exclus).
    - Script `composer mess-detect` ; étape ajoutée dans la CI (avec `composer install` dans `tools/phpmd` au préalable).
    - `composer mess-detect` → 0 violation sur `app`/`routes`.
  - Correctif compatibilité : `composer.json` fixe `config.platform.php` à `8.3.0` et `composer.lock` reverrouillé (Symfony 7.4.x au lieu de 8.1.0) pour rester compatible avec `"php": "^8.3"`.

## Phases fonctionnelles récentes

- Phase 22 : mode Conjugaison.
  - 14 langues, 6 verbes, présent/passé/futur.
  - Fiche de révision avant le quiz.
  - Données désormais côté backend dans `conjugations.json` et `ConjugationSeeder`.
- Phase 23 : révision SRS.
  - Déjà fonctionnelle avec `ReviewView`, `DifficultView`, `ReviewController`, `WordReview` et l'algorithme SM-2.
- Phase 24 : mode Traduction.
  - Mot en langue cible vers traduction française, saisie libre et tolérance Levenshtein.
- Phase 25 : mode Devinettes.
  - Français vers mot cible, indices progressifs.
- Phase 26 : enrichissement vocabulaire.
  - Passage d'environ 10 à 30 thèmes par langue.
  - Catalogue principal dans `backend/database/data/linguafacil.json`.
  - Le seeder a été rendu idempotent et supprime les tables dans l'ordre inverse des clés étrangères.
- R1-R5 : refonte qualité et architecture, intégrée à `master`.
- Qualité backend (PHPStan/Larastan + PHPMD) : intégrée à `master` via la PR no 2.
- Phase 27 : enrichissement des dialogues, intégrée à `master` via la PR no 3.
- Correctif UX modes/thèmes/niveaux sans contenu (hors numérotation de phase), intégré à `master` via la PR no 4.
- Page d'accueil marketing + mode démo pour les visiteurs (hors numérotation de phase), intégrée à `master` via la PR no 5.
- Phase 28 (partielle) : enrichissement des histoires, intégrée à `master` via la PR no 6.

## Phase 27 en détail

- Objectif : passer de 8 à 20 scénarios par langue pour 14 langues.
- Base historique : `backend/database/data/dialogues.json`.
- Extension compacte : `backend/database/data/dialogue_expansions.json`.
- Source génératrice : `scripts/generate_dialogue_expansions.mjs`.
- Seeder : `backend/database/seeders/DialogueSeeder.php`.
- Total attendu : 280 dialogues, soit 20 par langue.
- Nouveaux scénarios : aéroport, gare, médecin, banque, poste, entretien, école, téléphone, police, location de voiture, coiffeur et cinéma.
- Chaque nouveau dialogue doit avoir exactement 6 étapes, dont 3 étapes `choice`.
- Le test backend contrôle les 168 nouveaux dialogues et impose 3 QCM pour chacun.
- Dernière validation : 6 tests PHP, 436 assertions, toutes passantes.
- Aucune migration n'est nécessaire pour ce correctif.
- Intégrée à `master` (PR no 3). Pour mettre à jour une base locale :

```powershell
git switch master
git pull
cd backend
php artisan db:seed --class=DialogueSeeder
```

## Correctif UX : modes/thèmes/niveaux sans contenu

- Constat : pour environ 17 thèmes sur 30 (toutes langues), les phrases d'exemple manquent pour certains niveaux, ce qui menait les modes "Phrases" (`fill-blank`) et "Reconstitution" (`sentence-builder`) vers une page vide "Aucune phrase d'exemple disponible pour ce thème/niveau.".
- Correctif livré via la PR no 4 (branche `codex/2026-06-14-empty-modes-ux`, fusionnée en `ce1c834`) :
  - `LanguageController::themes()` renvoie désormais, par thème, des compteurs par niveau (`words`, `with_example`) via `withCount`.
  - `ThemeResource` expose ces compteurs dans un champ `stats` (`debutant`/`intermediaire`/`avance`).
  - `frontend/src/types/index.ts` : nouvelle interface `ThemeLevelStats`, `Theme.stats` optionnel.
  - `HomeView.vue` : les boutons de mode, de thème et de niveau sont grisés/désactivés (et le bouton "Commencer" aussi) quand la combinaison n'a pas de contenu adapté, avec un message d'avertissement explicite.
- Ne génère aucun contenu : le manque de phrases d'exemple sur certains thèmes/niveaux reste un sujet ouvert, à traiter séparément si souhaité (génération de contenu, pas UX).
- Aucune migration nécessaire.

## Page d'accueil marketing + mode démo (PR no 5)

- Branche `claude/2026-06-14-landing-page`, fusionnée en `ad99c6c`.
- Les visiteurs non connectés voient désormais sur `/` une page d'accueil marketing (`frontend/src/components/LandingHero.vue`) : hero, accroche, drapeaux des 14 langues, sections "Pourquoi LinguaFacil ?", CTA "Créer un compte gratuit" / "Essayer une leçon gratuite" / "Se connecter".
- Le CTA "Essayer une leçon gratuite" donne accès au sélecteur habituel (`HomeView.vue`) en **mode démo limité**, persisté via `localStorage` (clé `lf_demo_started`) :
  - seule la langue espagnole (`es`) est jouable, les autres sont grisées avec 🔒 et redirigent vers `/register` au clic ;
  - seul le niveau Débutant est jouable ;
  - seuls les modes QCM et Cartes sont jouables ;
  - un bandeau rappelle la limitation avec un lien d'inscription.
- Les constantes de démo (`DEMO_LANG`, `DEMO_LEVEL`, `DEMO_MODES`) sont en dur dans `HomeView.vue`, modifiables facilement.
- Les utilisateurs connectés ne voient aucun changement (sélecteur complet, comme avant).
- Aucune migration, aucun changement d'API.

## Phase 28 (partielle) : enrichissement des histoires (PR no 6)

- Branche `claude/2026-06-14-phase-28-histoires`, fusionnée en `582c56f`.
- Objectif historique : atteindre environ 10 histoires par niveau et par langue (420 au total). Cette phase est une étape intermédiaire, cadrée et validée avec Adrien le 14 juin 2026.
- Contenu livré : pour chacune des 14 langues, 1 nouvelle histoire niveau 2 ("À l'hôtel" 🏨, id `hotel`) et 2 nouvelles histoires niveau 3 ("Une journée à la plage" 🏖️, id `plage`, et "Au cinéma" 🎬, id `cinema`), chacune avec 4 phrases et traduction française mot à mot (`w`/`p`).
- Chaque langue passe de 6 à 9 histoires (3 niveau 1, 3 niveau 2, 3 niveau 3) : 42 nouvelles histoires au total (84 → 126).
- Ajoutées dans `STORIES_EXTRA` (`frontend/src/data/stories.ts`), avec 3 nouvelles catégories de questions de compréhension (`hotel`, `plage`, `cinema`) dans `scripts/generate_seeders.mjs` (`QUESTIONS` + `getQuestions`).
- `backend/database/seeders/StorySeeder.php` régénéré via `node scripts/generate_seeders.mjs`.
- Dernière validation : 6 tests PHP, 436 assertions, toutes passantes ; `npm run lint`/`npm test`/`npm run build` OK ; vérification manuelle dans StoryView (es, ja, ar).
- Aucune migration nécessaire. Pour mettre à jour une base locale :

```powershell
git switch master
git pull
cd backend
php artisan db:seed --class=StorySeeder
```

## Correctif des indices (clue) et phrases d'exemple manquants (PRs no 7, 8, 9)

- Constat (14 juin 2026) : le bouton indice (💡) du mode Traduction et les modes Phrases/Reconstitution ne fonctionnaient pas pour les 20 thèmes de la phase 26. Diagnostic : trou de contenu (pas une régression de code).
- PR no 7 (`claude/2026-06-14-clue-es`, `7deeed0`) : indices espagnol (160 mots).
- PR no 8 (`claude/2026-06-17-clue-all-languages`, `4f8dcb3`) : indices pour les 13 langues restantes (2024 mots), réutilisant les définitions françaises de la PR #7.
- PR no 9 (`claude/2026-06-17-examples-all-languages`, `7a06318`) : phrases d'exemple + gloses mot-à-mot pour les 14 langues (2190 mots). Les modes Phrases et Reconstitution fonctionnent désormais pour tous les thèmes de la phase 26.
- Résultat : 0 mot sans `clue` et 0 mot sans `example_sentence` dans les 20 thèmes de la phase 26, toutes langues confondues.

## Phase 28 (suite) : histoire "À la boulangerie" (PR no 10)

- Branche `claude/2026-06-14-phase-28-suite`, fusionnée en `220224a`.
- Ajoute 1 histoire niveau 1 par langue ("À la boulangerie" 🥖, id `boulangerie`), portant chaque langue de 9 à 10 histoires (4L1 + 3L2 + 3L3 = 140 au total).
- `frontend/src/data/stories.ts`, `scripts/generate_seeders.mjs`, `backend/database/seeders/StorySeeder.php` mis à jour.

## Prochaine phase prévue

- Migration SQLite vers PostgreSQL (voir section ci-dessous, à ne démarrer qu'après accord explicite d'Adrien).
- Créer toute nouvelle branche depuis `master` à jour : `claude/YYYY-MM-DD-nom` (Claude) ou `codex/YYYY-MM-DD-nom` (Codex).
- Ne commence pas l'i18n sans accord explicite d'Adrien.

## Phase prévue (après la 28) : migration SQLite vers PostgreSQL

Cadrée le 14 juin 2026, à ne démarrer qu'après accord explicite d'Adrien sur le moment.

- Objectif : passer la base de données du projet de SQLite à PostgreSQL pour se rapprocher d'un environnement de production réaliste, sans changement fonctionnel.
- Périmètre inclus :
  - configuration Laravel pour PostgreSQL (`.env`, `config/database.php`, driver `pgsql`) ;
  - audit de toutes les migrations, modèles, seeders et requêtes brutes pour les éléments spécifiques à SQLite (types de colonnes, fonctions de date, JSON/casts, contraintes uniques, auto-increment) ;
  - mise à jour de la CI pour faire tourner les tests contre PostgreSQL (service Docker dans `ci.yml`) ;
  - documentation pour lancer PostgreSQL en local ;
  - exécution complète de toutes les migrations et de tous les seeders contre PostgreSQL, et de la suite de tests.
- Hors périmètre : aucune nouvelle fonctionnalité, aucune migration de données de production (projet en développement), suppression du support SQLite à décider au cadrage final.
- Critères d'acceptation :
  - `php artisan migrate:fresh --seed` fonctionne sans erreur sur PostgreSQL ;
  - `php artisan test` passe entièrement sur PostgreSQL ;
  - l'application fonctionne normalement en local avec PostgreSQL ;
  - CI verte avec PostgreSQL comme base de test.
- Risques : PostgreSQL requis en local/CI (Docker), typage strict de Postgres pouvant révéler des bugs latents masqués par SQLite (à corriger).
- À traiter sur une branche dédiée, indépendante des phases fonctionnelles.

## Points de vigilance

- Un catalogue volumineux n'est pas une fonctionnalité réussie si chaque exercice est trop court ou incohérent.
- Vérifier le nombre de questions et la qualité des distracteurs, pas seulement le nombre de scénarios.
- `StorySeeder.php` est généré depuis `frontend/src/data/stories.ts` par `scripts/generate_seeders.mjs`; modifier la source puis régénérer.
- `dialogue_expansions.json` est généré depuis `scripts/generate_dialogue_expansions.mjs`; ne modifier le JSON généré seul que pour un diagnostic ponctuel.
- SQLite est la configuration locale par défaut. Ne pas utiliser uniquement des commandes MySQL dans les seeders.
