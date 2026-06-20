# Recette — branches Codex en attente

Date : 19 juin 2026

Cette fiche couvre les **3 branches préparées après l'autorisation de travailler en parallèle sans merge** :

1. `codex/2026-06-19-tests-selecteur-exercices`
2. `codex/2026-06-19-audit-contenu-pedagogique`
3. `codex/2026-06-19-aide-lecture-langues-non-latines`

La branche UX initiale `codex/2026-06-19-ux-theme-clair-selecteur` est rappelée en fin de document, car elle reste aussi en attente de recette.

## Règles de recette

- Ne mergez aucune branche tant que la recette n'est pas explicitement validée.
- Testez une branche à la fois.
- Revenez toujours sur `master` entre deux branches pour éviter de mélanger les changements.
- Si une branche ne convient pas, notez le scénario exact, la langue, le mode, le thème et le niveau utilisés.

## Préparation commune

Depuis votre dépôt local :

```bash
git checkout master
git pull origin master
git fetch origin
```

Lancer le frontend si la branche contient une modification visible :

```bash
cd frontend
npm install
npm run dev
```

URL habituelle :

```text
http://localhost:5173
```

Backend si nécessaire pour tester avec les vraies données :

```bash
cd backend
composer install
php artisan serve
```

URL API habituelle :

```text
http://127.0.0.1:8000
```

## 1. Branche tests sélecteur

Branche : `codex/2026-06-19-tests-selecteur-exercices`

### Objectif

Vérifier que la logique qui décide si un mode, thème ou niveau est disponible est maintenant isolée et testée.

Cette branche est surtout technique. Elle ne doit presque rien changer visuellement.

### Checkout

```bash
git checkout master
git pull origin master
git fetch origin
git checkout codex/2026-06-19-tests-selecteur-exercices
```

### Commandes à lancer

```bash
cd frontend
npm install
npm test
npm run lint
npm run build
```

### Scénarios de recette

1. Ouvrir la page d'accueil et choisir une langue.
   Résultat attendu : le sélecteur fonctionne comme sur `master`, sans régression visible.

2. Tester un mode classique comme `QCM` ou `Cartes`.
   Résultat attendu : les thèmes et niveaux restent disponibles quand des mots existent.

3. Tester un mode à phrases comme `Phrases` ou `Reconstitution`.
   Résultat attendu : les thèmes/niveaux sans phrases d'exemple seraient désactivés, mais les combinaisons avec contenu restent jouables.

4. Tester un mode sans thème comme `Dialogue`, `Histoires`, `Survie`, `Voyage` ou `Conjugaison`.
   Résultat attendu : le sélecteur de thème/niveau n'est pas requis pour démarrer ces modes.

### Validation attendue

Répondez :

```text
Recette validée pour codex/2026-06-19-tests-selecteur-exercices
```

ou listez les anomalies.

Migration : non.
Seeder : non.

## 2. Branche audit contenu pédagogique

Branche : `codex/2026-06-19-audit-contenu-pedagogique`

### Objectif

Lire un rapport qui vérifie la couverture du contenu : langues, thèmes, mots, phrases d'exemple, glosses et aides de lecture pour les écritures non latines.

### Checkout

```bash
git checkout master
git pull origin master
git fetch origin
git checkout codex/2026-06-19-audit-contenu-pedagogique
```

### Commandes à lancer

```bash
node scripts/audit_content_coverage.mjs
```

Puis ouvrir :

```text
docs/audits/content-coverage.md
```

### Scénarios de recette

1. Lancer le script d'audit.
   Résultat attendu : le script termine sans erreur et régénère `docs/audits/content-coverage.md`.

2. Lire la synthèse du rapport.
   Résultat attendu : le rapport indique 14 langues, 433 thèmes, 6380 mots, 100% de phrases d'exemple et 100% de glosses.

3. Lire la section des combinaisons sans contenu.
   Résultat attendu : aucune combinaison langue/thème/niveau sans mot ni phrase d'exemple n'est signalée.

4. Lire la section sur les écritures non latines.
   Résultat attendu : le rapport explique le risque UX pour le japonais, chinois, coréen, arabe, hindi et russe, notamment le manque partiel de translittérations.

5. Vérifier si les recommandations produit vous semblent utiles.
   Résultat attendu : vous pouvez décider si on lance ensuite une phase de correction UX ou de complément de translittérations.

### Validation attendue

Répondez :

```text
Recette validée pour codex/2026-06-19-audit-contenu-pedagogique
```

ou indiquez ce que vous voulez ajouter au rapport.

Migration : non.
Seeder : non.

## 3. Branche aide lecture langues non latines

Branche : `codex/2026-06-19-aide-lecture-langues-non-latines`

### Objectif

Tester l'aide activable dans le mode `Phrases` pour les langues à écriture non latine.

Exemple attendu sur le japonais :

```text
水
mizu
eau
```

L'écriture native reste visible, mais l'utilisateur peut activer une aide de lecture et de sens.

### Checkout

```bash
git checkout master
git pull origin master
git fetch origin
git checkout codex/2026-06-19-aide-lecture-langues-non-latines
```

### Commandes à lancer

Terminal frontend :

```bash
cd frontend
npm install
npm run dev
```

Terminal backend si l'API n'est pas déjà lancée :

```bash
cd backend
composer install
php artisan serve
```

### Scénarios de recette

1. Tester en japonais.
   - Choisir `Japonais`.
   - Choisir un thème disponible.
   - Choisir le mode `Phrases`.
   - Démarrer l'exercice.

   Résultat attendu : un panneau apparaît au-dessus des choix avec un texte du type `Besoin d’un coup de pouce pour lire les choix ?` et un bouton `Afficher l’aide`.

2. Cliquer sur `Afficher l’aide`.
   Résultat attendu : les choix affichent le terme cible, puis la translittération si disponible, puis la traduction française.

3. Cliquer sur `Masquer l’aide`.
   Résultat attendu : les choix reviennent à l'affichage simple avec seulement le terme cible.

4. Répondre à une question avec l'aide affichée.
   Résultat attendu : le clic sur le choix fonctionne toujours ; le feedback correct/incorrect apparaît normalement.

5. Tester une langue latine, par exemple espagnol.
   Résultat attendu : le panneau `Afficher l’aide` ne doit pas apparaître, car les choix sont déjà lisibles pour un francophone débutant.

6. Tester une langue RTL, par exemple arabe.
   Résultat attendu : le terme arabe reste dans le bon sens d'écriture, et l'aide s'affiche sous le choix.

7. Tester sur écran étroit ou mobile.
   Résultat attendu : le panneau d'aide reste lisible et le bouton occupe la largeur disponible si nécessaire.

### Points à juger subjectivement

- Est-ce que l'aide est trop visible ou bien dosée ?
- Faut-il afficher la traduction française dès le départ ou seulement après activation ?
- Faut-il mettre la translittération avant ou après la traduction ?
- Faut-il appliquer la même logique au mode `Reconstitution` ?

### Validation attendue

Répondez :

```text
Recette validée pour codex/2026-06-19-aide-lecture-langues-non-latines
```

ou donnez vos corrections souhaitées.

Migration : non.
Seeder : non.

## Rappel — branche UX thème clair / sélecteur

Branche : `codex/2026-06-19-ux-theme-clair-selecteur`

Cette branche est antérieure aux trois branches ci-dessus, mais elle reste à tester.

### Checkout

```bash
git checkout master
git pull origin master
git fetch origin
git checkout codex/2026-06-19-ux-theme-clair-selecteur
```

### Scénarios rapides

1. Tester le thème clair.
   Résultat attendu : les textes, cartes, boutons et messages sont plus lisibles.

2. Tester le sélecteur d'accueil.
   Résultat attendu : le parcours mode/thème/niveau est plus clair et le bouton de démarrage est explicite.

3. Tester un mode indisponible ou une combinaison sans contenu.
   Résultat attendu : le message explique quoi faire au lieu d'être trop technique.

4. Tester le thème sombre.
   Résultat attendu : le thème sombre reste fonctionnel et lisible.

5. Tester un exercice.
   Résultat attendu : l'en-tête, la progression et le score restent lisibles.

Migration : non.
Seeder : non.

## Ordre recommandé de test

1. `codex/2026-06-19-ux-theme-clair-selecteur`
2. `codex/2026-06-19-tests-selecteur-exercices`
3. `codex/2026-06-19-audit-contenu-pedagogique`
4. `codex/2026-06-19-aide-lecture-langues-non-latines`

Pourquoi cet ordre : la branche UX change le ressenti global, les tests sélecteur sécurisent la logique, l'audit explique le problème de contenu/lisibilité, puis l'aide de lecture corrige le cas japonais/non latin dans le mode Phrases.

## Réponse de fin de recette

Si tout est conforme pour une branche, répondez avec la phrase exacte :

```text
Recette validée pour <nom-de-branche>
```

Si vous validez toutes les branches :

```text
Recette validée pour les branches Codex du 19 juin 2026
```

Si vous voyez un problème, indiquez :

- branche ;
- langue ;
- mode ;
- thème ;
- niveau ;
- action réalisée ;
- résultat obtenu ;
- résultat attendu.
