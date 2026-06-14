# Workflow de développement LinguaFacil

## Reprendre le projet

Depuis la racine :

```powershell
git status --short --branch
git branch --all --sort=-committerdate
git log --oneline --decorate --graph --all -20
```

Ne change pas de branche si le worktree contient des modifications non comprises. Ne supprime jamais les changements d'Adrien.

## Créer une phase

1. Vérifie que la phase précédente est fusionnée ou décide explicitement de la branche parente.
2. Reviens sur la branche stable et actualise-la :

```powershell
git switch master
git pull --ff-only
```

3. Crée la branche demandée :

```powershell
git switch -c codex/YYYY-MM-DD-nom-fonctionnalite
```

4. Annonce immédiatement le nom de branche à Adrien.

## Lancer l'application

Terminal frontend :

```powershell
cd C:\Users\adric\Claude\Projects\Website-Project\frontend
npm install
npm run dev
```

Terminal backend :

```powershell
cd C:\Users\adric\Claude\Projects\Website-Project\backend
composer install
php artisan serve
```

URLs habituelles : frontend `http://localhost:5173`, API `http://127.0.0.1:8000`.

## Base de données

### Quand lancer une migration

Lance `php artisan migrate` uniquement si un nouveau fichier de migration a été ajouté ou si des migrations non appliquées existent.

### Quand lancer un seeder

Lance le seeder concerné lorsque le catalogue ou sa transformation a changé :

```powershell
php artisan db:seed --class=LinguaFacilSeeder
php artisan db:seed --class=DialogueSeeder
php artisan db:seed --class=StorySeeder
php artisan db:seed --class=ConjugationSeeder
```

Pour tout réensemencer :

```powershell
php artisan db:seed
```

N'utilise `migrate:fresh --seed` qu'avec l'accord explicite d'Adrien, car cette commande détruit les données locales.

### Exigence de livraison

Termine toujours une tâche backend par ce format :

```markdown
**Commandes à lancer**

Branche : `codex/...`

```powershell
git switch codex/...
git pull
cd backend
php artisan migrate        # seulement si nécessaire
php artisan db:seed --class=NomSeeder
```

Migration : oui/non.
Seeder : oui/non, avec le nom exact.
```

## Générateurs

Après modification des sources :

```powershell
node scripts/generate_dialogue_expansions.mjs
node scripts/generate_seeders.mjs
```

Contrôle le diff du fichier généré et commit les deux côtés : source et sortie.

## Tests

Frontend :

```powershell
cd frontend
npm run lint
npm test
npm run build
```

Backend :

```powershell
cd backend
vendor\bin\pint --test app routes tests database\migrations database\seeders
php artisan test
```

CI GitHub exécute ces validations sur push et pull request.

## Commit et push

Avant de committer :

```powershell
git status --short
git diff --check
git diff --stat
```

N'ajoute que les fichiers de la fonctionnalité. N'inclus pas `AGENTS.md` ou un fichier local non lié sans demande explicite.

Après demande d'Adrien :

```powershell
git add <fichiers ciblés>
git commit -m "type: description concise"
git push -u origin HEAD
```

Indique le hash du commit, la branche poussée, les tests exécutés et si une PR reste à créer.

## Fin de phase

Avant de déclarer une phase terminée :

- vérifie le comportement utilisateur réel;
- vérifie les volumes attendus dans les 14 langues;
- vérifie la qualité pédagogique, pas seulement la forme des données;
- teste l'idempotence des seeders en les exécutant deux fois dans les tests;
- mets à jour `references/current-status.md` de cette skill avec branche, commits, migrations, seeders, tests et prochaine phase.
