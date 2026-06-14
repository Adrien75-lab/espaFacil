# État courant de LinguaFacil

Dernière vérification : 14 juin 2026, après le correctif des dialogues de la phase 27 et l'ajout de PHPStan/PHPMD sur `claude/optimistic-mendel-yqz0h4`.

## Dépôt

- Chemin : `C:\Users\adric\Claude\Projects\Website-Project`
- Dépôt GitHub : `Adrien75-lab/espaFacil`
- Branche stable locale et distante : `master`
- Commit stable observé : `ad16b2c refactor: structure application et qualité R1-R5`
- `AGENTS.md` est actuellement un fichier local non suivi. Ne l'ajoute pas à un commit sans demande explicite.

## Branches importantes

### `master`

- Pointe sur `ad16b2c` lors du dernier relevé.
- Contient les phases jusqu'à la phase 26.
- Contient la refonte R1-R5 fusionnée via la PR GitHub no 1.

### `codex/refactor-r1-r5`

- Branche historique de la refonte, commit `39f2793`.
- La refonte est déjà intégrée à `master`; ne repars pas de cette branche pour une nouvelle fonctionnalité.

### `codex/2026-06-14-phase-27-dialogues`

- Branche de travail active lors du dernier relevé.
- Basée sur `master` après R1-R5.
- `b8d62d3` : ajout de 12 scénarios par langue.
- `6eca10b` : correction pédagogique, chaque nouveau scénario contient désormais 3 QCM au lieu d'un seul.
- Contient aussi les deux skills `.claude/skills/linguafacil` et `.claude/skills/feature-delivery-workflow`, ainsi que `AGENTS.md`/`CLAUDE.md`.
- Branche poussée sur `origin` mais pas encore fusionnée dans `master` lors du dernier relevé.
- Avant de poursuivre, vérifier si une PR a depuis été créée ou fusionnée.

### `claude/optimistic-mendel-yqz0h4`

- Branche basée sur `master` (`ad16b2c`), créée pour une amélioration qualité indépendante de la phase 28.
- Aucun changement fonctionnel ni de base de données.
- PHPStan/Larastan installés et configurés :
  - `larastan/larastan ^3.0` en dépendance dev de `backend/composer.json`.
  - `backend/phpstan.neon.dist` : niveau 5, analyse `app`, `routes`, `database/seeders`.
  - Script `composer analyse` ; étape ajoutée dans `.github/workflows/ci.yml`.
  - Tous les modèles Eloquent ont reçu des blocs `@property` et des génériques de relation (`@return HasMany<X, $this>` / `@return BelongsTo<X, $this>`).
  - Les Resources (`WordResource`, `ThemeResource`, `LanguageResource`, `GrammarTipResource`) ont un `@mixin` vers leur modèle.
  - Bug corrigé : `mode_xp` sur `UserStat` n'avait pas de cast `array`.
  - Comparaisons strictes `=== 1` sur `diffInDays()` (float) corrigées par un cast `(int)` dans `DashboardController`, `ProgressController`, `TodayController`.
  - `composer analyse` → 0 erreur ; `php artisan test` → 5/5 ; `vendor/bin/pint --test` → OK.
- PHPMD installé et configuré :
  - Isolé dans `backend/tools/phpmd/` (son propre `composer.json`/`composer.lock`, `vendor` non versionné) car PHPMD 2.x est incompatible avec Symfony 8 (Laravel 13).
  - `backend/phpmd.xml.dist` : règles `codesize`, `design`, `naming` (sans `ShortVariable`), `unusedcode` (sans `UnusedFormalParameter`), périmètre `app` et `routes` (les seeders de données sont exclus).
  - Script `composer mess-detect` ; étape ajoutée dans la CI (avec `composer install` dans `tools/phpmd` au préalable).
  - `composer mess-detect` → 0 violation sur `app`/`routes`.
- A reçu une copie des deux skills (`linguafacil`, `feature-delivery-workflow`) et de `AGENTS.md`/`CLAUDE.md` depuis `codex/2026-06-14-phase-27-dialogues`, en attendant la fusion de cette dernière dans `master`.
- Avant de repartir sur la phase 28 : fusionner (ou rebaser sur) cette branche pour récupérer la configuration PHPStan/PHPMD, sinon `composer analyse` et `composer mess-detect` n'existeront pas encore.

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
- Phase 27 : enrichissement des dialogues, en attente de fusion lors du dernier relevé.

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
- Pour mettre à jour une base locale :

```powershell
git switch codex/2026-06-14-phase-27-dialogues
git pull
cd backend
php artisan db:seed --class=DialogueSeeder
```

## Prochaine phase prévue

- Phase 28 : enrichissement des histoires.
- Objectif historique : atteindre environ 10 histoires par niveau et par langue.
- Avant de commencer : vérifier que la phase 27 a été testée, qu'une PR existe ou est fusionnée, puis créer une nouvelle branche depuis `master` à jour :
  `codex/YYYY-MM-DD-phase-28-histoires`.
- Ne commence pas l'i18n sans accord explicite d'Adrien.

## Points de vigilance

- Un catalogue volumineux n'est pas une fonctionnalité réussie si chaque exercice est trop court ou incohérent.
- Vérifier le nombre de questions et la qualité des distracteurs, pas seulement le nombre de scénarios.
- `StorySeeder.php` est généré depuis `frontend/src/data/stories.ts` par `scripts/generate_seeders.mjs`; modifier la source puis régénérer.
- `dialogue_expansions.json` est généré depuis `scripts/generate_dialogue_expansions.mjs`; ne modifier le JSON généré seul que pour un diagnostic ponctuel.
- SQLite est la configuration locale par défaut. Ne pas utiliser uniquement des commandes MySQL dans les seeders.
