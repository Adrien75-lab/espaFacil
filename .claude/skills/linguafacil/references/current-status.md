# État courant de LinguaFacil

Dernière vérification : 14 juin 2026, après le correctif des dialogues de la phase 27.

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
- Branche poussée sur `origin` mais pas encore fusionnée dans `master` lors du dernier relevé.
- Avant de poursuivre, vérifier si une PR a depuis été créée ou fusionnée.

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
