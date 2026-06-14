# État courant de LinguaFacil

Dernière vérification : 14 juin 2026, après la fusion de la PR GitHub no 2 (PHPStan/PHPMD), de la PR no 3 (phase 27, dialogues), de la PR no 4 (UX modes/thèmes/niveaux sans contenu), de la PR no 5 (page d'accueil marketing + mode démo), de la PR no 6 (phase 28 partielle, histoires) et de la PR no 7 (indices manquants, espagnol) dans `master`.

## Dépôt

- Chemin : `C:\Users\adric\Claude\Projects\Website-Project`
- Dépôt GitHub : `Adrien75-lab/espaFacil`
- Branche stable locale et distante : `master`
- Commit stable observé : `7deeed0 Ajout des indices (clue) manquants pour 160 mots espagnols (phase 26)` (PR #7).
- `AGENTS.md` et `CLAUDE.md` sont désormais suivis et présents sur `master`.
- Convention de branches : `claude/YYYY-MM-DD-nom` pour le travail réalisé par Claude (Claude Code), `codex/YYYY-MM-DD-nom` pour Codex. Permet de distinguer rapidement qui a produit quelle branche.

## Branches importantes

### `master`

- Pointe sur `7deeed0` lors du dernier relevé.
- Contient les phases jusqu'à la phase 26, la refonte R1-R5, PHPStan/Larastan et PHPMD (PR no 2), la phase 27 - dialogues enrichis (PR no 3, 280 dialogues, 20 par langue x 14 langues), le correctif UX modes/thèmes/niveaux sans contenu (PR no 4), la nouvelle page d'accueil marketing + mode démo (PR no 5), la phase 28 partielle - enrichissement des histoires (PR no 6, 42 nouvelles histoires, 9 par langue x 14 langues), ainsi que le correctif des indices (clue) manquants pour les 160 mots espagnols des thèmes de la phase 26 (PR no 7).
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

## Correctif des indices (clue) manquants - espagnol (PR no 7)

- Constat (14 juin 2026) : le bouton indice (💡) du mode Traduction n'affichait rien pour de nombreux mots (ex. "dinero" en espagnol). Diagnostic : pas une régression de code (`TranslationView.vue` inchangé depuis la phase 24), mais un trou de contenu de la phase 26 - les 20 thèmes ajoutés alors (`banque, cuisine, culture, ecole, emotions, environnement, fetes, geographie, heure, loisirs, musique, nature, nombres, professions, sante, shopping, technologie, travail, vetements, voyage`) n'avaient jamais reçu de champ `clue`.
- Ampleur totale estimée : environ 2170 mots sans `clue` sur ces 20 thèmes, toutes langues confondues (~155-160 par langue x 14 langues).
- PR no 7 (branche `claude/2026-06-14-clue-es`, fusionnée en `7deeed0`) : traite uniquement l'espagnol (160 mots), avec une courte définition en français pour chacun, dans `backend/database/data/linguafacil.json`.
- Vérifié : `php artisan db:seed --class=LinguaFacilSeeder` (14 langs, 433 thèmes, 6380 mots, 48 grammar tips), `php artisan test` (6/6, 436 assertions), vérification API du champ `clue` pour le thème "banque" (es).
- Reste à faire : compléter les ~2010 mots restants pour les 13 autres langues (~155-158 chacune), langue par langue, dans des PR séparées (même approche que pour l'espagnol).

## Branche en attente de recette : `claude/2026-06-14-phase-28-suite`

- Ajoute 1 histoire niveau 1 supplémentaire par langue ("À la boulangerie" 🥖, id `boulangerie`), portant chaque langue de 9 à 10 histoires (4 niveau 1, 3 niveau 2, 3 niveau 3).
- Commit `18eb643`, poussée mais PR non créée : une recette a été présentée à Adrien, qui n'a pas encore donné son accord ("Recette validée") - il a été interrompu par la demande urgente sur les indices manquants (PR no 7).
- À reprendre : obtenir la validation d'Adrien, puis créer la PR, CI verte, fusion, mise à jour de ce document.

## Prochaine phase prévue

- Compléter les indices (`clue`) manquants pour les 13 langues restantes (voir section ci-dessus), langue par langue.
- Finaliser la branche `claude/2026-06-14-phase-28-suite` (histoire "boulangerie", en attente de recette validée).
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
