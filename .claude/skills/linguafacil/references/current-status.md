# État courant de LinguaFacil

Dernière vérification : 14 juin 2026, après la fusion de la PR GitHub no 2 (PHPStan/PHPMD) et de la PR no 3 (phase 27, dialogues) dans `master`.

## Dépôt

- Chemin : `C:\Users\adric\Claude\Projects\Website-Project`
- Dépôt GitHub : `Adrien75-lab/espaFacil`
- Branche stable locale et distante : `master`
- Commit stable observé : `9a6bad78 Merge pull request #3 from Adrien75-lab/codex/2026-06-14-phase-27-dialogues`
- `AGENTS.md` et `CLAUDE.md` sont désormais suivis et présents sur `master`.

## Branches importantes

### `master`

- Pointe sur `9a6bad78` lors du dernier relevé.
- Contient les phases jusqu'à la phase 26, la refonte R1-R5, PHPStan/Larastan et PHPMD (PR no 2), ainsi que la phase 27 - dialogues enrichis (PR no 3, 280 dialogues, 20 par langue x 14 langues).
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

## Prochaine phase prévue

- Phase 28 : enrichissement des histoires.
- Objectif historique : atteindre environ 10 histoires par niveau et par langue.
- La phase 27 est fusionnée dans `master` (PR no 3) : créer la nouvelle branche depuis `master` à jour :
  `codex/YYYY-MM-DD-phase-28-histoires`.
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
