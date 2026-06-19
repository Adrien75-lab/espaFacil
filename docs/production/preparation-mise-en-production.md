# Préparation mise en production — LinguaFacil

Date : 19 juin 2026

Ce document résume le plan conseillé pour passer LinguaFacil d'un projet personnel avancé à une application déployée, testable par de vrais utilisateurs.

## Conclusion rapide

LinguaFacil peut être déployé techniquement assez vite, mais un vrai lancement utile pour des apprenants demande une étape de bêta et de validation produit.

| Objectif | Délai réaliste |
| --- | ---: |
| Déploiement technique privé | 2 à 5 jours |
| Bêta privée testable | 1 à 2 semaines |
| Bêta publique crédible | 3 à 6 semaines |
| Produit sérieux avec utilisateurs récurrents | 2 à 3 mois |
| Produit monétisable ou fortement scalable | 3 à 6 mois |

## Pourquoi le projet dépasse déjà le simple prototype

Le projet possède déjà plusieurs éléments d'une vraie application :

- frontend Vue 3 + TypeScript + Vite ;
- backend Laravel + API ;
- authentification ;
- progression utilisateur ;
- XP, objectifs, révisions et gamification ;
- plusieurs modes d'exercice ;
- contenu structuré par langues, thèmes et niveaux ;
- seeders et catalogues de données ;
- tests frontend et backend ;
- CI ;
- documentation de workflow et de recette.

Le sujet principal n'est donc plus seulement de coder des fonctionnalités. Le sujet devient :

> Est-ce qu'un utilisateur débutant comprend quoi faire, réussit sa première session, ressent une progression et a envie de revenir ?

## Objectif produit

Positionnement conseillé :

> Une application claire et progressive pour apprendre du vocabulaire, des phrases utiles et des situations concrètes dans plusieurs langues, avec une expérience plus simple et plus transparente que les grandes apps généralistes.

Il ne faut pas chercher à copier Duolingo à court terme. Il faut d'abord réussir une promesse plus ciblée :

- apprendre rapidement des mots utiles ;
- comprendre des phrases simples ;
- pratiquer des mini-situations ;
- revenir chaque jour pour consolider ;
- ne jamais laisser l'utilisateur perdu devant une interface trop dense.

## Phase 1 — Déploiement technique privé

Délai estimé : 2 à 5 jours.

### Objectif

Mettre l'application en ligne pour Adrien et quelques testeurs techniques.

### À préparer

- Choisir l'hébergement frontend.
- Choisir l'hébergement backend Laravel.
- Choisir la base de données de production.
- Configurer HTTPS et domaine.
- Configurer les variables d'environnement frontend/backend.
- Configurer CORS / Sanctum / cookies si authentification web.
- Lancer les migrations.
- Lancer les seeders nécessaires.
- Vérifier que les assets frontend appellent bien l'API de production.
- Vérifier les logs applicatifs.
- Vérifier les sauvegardes base de données.

### Checklist technique minimale

- [ ] `npm run build` passe côté frontend.
- [ ] `npm test` passe côté frontend.
- [ ] `npm run lint` passe côté frontend.
- [ ] `php artisan test` passe côté backend.
- [ ] Pint / analyse statique backend passent ou les écarts sont documentés.
- [ ] Les migrations s'exécutent sur une base vide.
- [ ] Les seeders remplissent les catalogues.
- [ ] Inscription fonctionne.
- [ ] Connexion fonctionne.
- [ ] Déconnexion fonctionne.
- [ ] Les langues se chargent.
- [ ] Les thèmes se chargent.
- [ ] Les exercices principaux démarrent.
- [ ] Les sessions utilisateur enregistrent la progression.
- [ ] HTTPS actif.
- [ ] Logs accessibles.
- [ ] Sauvegarde base configurée.

### Critère de sortie

L'application est accessible en ligne, utilisable par Adrien, et les parcours principaux fonctionnent sans erreur bloquante.

## Phase 2 — Bêta privée

Délai estimé : 1 à 2 semaines.

### Objectif

Faire tester l'application par 5 à 20 personnes pour observer ce qu'elles comprennent réellement.

### Public conseillé

- personnes qui veulent apprendre l'espagnol ou l'anglais ;
- un ou deux testeurs sur une langue plus difficile comme japonais, arabe ou chinois ;
- utilisateurs non techniques ;
- utilisateurs qui acceptent de donner un retour honnête.

### Questions à poser aux testeurs

- Comprenez-vous quoi faire dès l'accueil ?
- Savez-vous quel mode choisir ?
- La première leçon est-elle claire ?
- Le thème clair est-il lisible ?
- Les exercices sont-ils trop faciles ou trop durs ?
- Avez-vous compris votre progression ?
- Avez-vous envie de revenir demain ?
- Sur japonais/arabe/chinois, savez-vous lire ou comprendre les choix ?
- À quel moment êtes-vous perdu ?

### Mesures qualitatives

- Temps avant première leçon démarrée.
- Nombre d'utilisateurs qui terminent une première session.
- Modes les plus testés.
- Points de blocage fréquents.
- Mots exacts utilisés par les testeurs pour décrire leur confusion.

### Critère de sortie

Au moins 5 testeurs terminent une première session et savent expliquer ce qu'ils ont appris.

## Phase 3 — Bêta publique crédible

Délai estimé : 3 à 6 semaines.

### Objectif

Ouvrir l'application plus largement sans donner une impression de prototype fragile.

### À stabiliser avant ouverture

- parcours d'accueil clair ;
- mode démo propre ;
- inscription simple ;
- messages d'erreur compréhensibles ;
- aide de lecture pour les langues non latines ;
- progression visible ;
- objectif quotidien compréhensible ;
- responsive mobile correct ;
- politique de confidentialité ;
- mentions légales si nécessaire ;
- monitoring erreurs ;
- sauvegardes automatiques ;
- canal de feedback utilisateur.

### Fonctionnalités importantes pour la bêta

- Parcours guidé : quoi faire en premier.
- Révision : quoi faire quand on revient.
- Feedback pédagogique : pourquoi une réponse est juste ou fausse.
- Aide de lecture : translittération/traduction pour les écritures non latines.
- Progression : montrer à l'utilisateur qu'il avance.

### Critère de sortie

Les utilisateurs peuvent s'inscrire, démarrer une première leçon, comprendre leur résultat et revenir le lendemain sans assistance.

## Phase 4 — Produit sérieux avec rétention

Délai estimé : 2 à 3 mois.

### Objectif

Transformer l'application en produit d'apprentissage crédible.

### Priorités produit

1. Parcours débutant guidé.
2. Progression par objectifs courts.
3. Révision intelligente.
4. Expérience mobile fluide.
5. Qualité pédagogique des contenus.
6. Aide renforcée sur les langues difficiles.
7. Tableaux de progression clairs.
8. Boucle de retour utilisateur.

### Risque principal

Le risque principal n'est pas le manque de modes. Le risque principal est la surcharge : trop de modes, trop de choix et pas assez de chemin recommandé.

L'utilisateur doit toujours savoir :

- ce qu'il doit faire maintenant ;
- pourquoi il le fait ;
- combien de temps cela va prendre ;
- ce qu'il a appris ;
- quoi faire ensuite.

## Branches à valider avant une bêta

Avant de préparer la mise en production, les branches suivantes doivent être testées et validées ou corrigées :

- `codex/2026-06-19-ux-theme-clair-selecteur` ;
- `codex/2026-06-19-tests-selecteur-exercices` ;
- `codex/2026-06-19-audit-contenu-pedagogique` ;
- `codex/2026-06-19-aide-lecture-langues-non-latines` ;
- `codex/2026-06-19-parcours-guide-utilisateur`.

## Recommandation de roadmap immédiate

### Étape A — Recette des branches UX

Valider ou corriger :

1. thème clair et sélecteur ;
2. tests sélecteur ;
3. audit contenu ;
4. aide lecture non latine ;
5. parcours guidé.

### Étape B — Branche pré-déploiement

Créer une branche :

```text
codex/YYYY-MM-DD-pre-deploiement
```

Objectif : préparer la configuration de production.

Contenu recommandé :

- document `.env.production.example` si nécessaire ;
- checklist variables frontend ;
- checklist variables backend ;
- commandes migrations/seeders ;
- stratégie de sauvegarde ;
- contrôle CORS/Sanctum ;
- checklist smoke tests production.

### Étape C — Bêta privée

Inviter 5 à 20 testeurs avec une fiche de retour simple.

### Étape D — Itérations produit

Corriger les points de confusion avant de chercher plus d'utilisateurs.

## Critères “prêt pour bêta publique”

L'application peut être considérée prête pour bêta publique quand :

- [ ] un visiteur comprend la proposition de valeur en moins de 10 secondes ;
- [ ] un visiteur peut essayer une leçon sans compte ;
- [ ] un utilisateur peut créer un compte sans friction ;
- [ ] un utilisateur peut terminer une première session ;
- [ ] le résultat de session est compréhensible ;
- [ ] la progression est visible ;
- [ ] les erreurs sont compréhensibles ;
- [ ] les langues non latines ne bloquent pas l'utilisateur débutant ;
- [ ] l'application fonctionne sur mobile ;
- [ ] les données sont sauvegardées ;
- [ ] les logs erreurs sont consultables ;
- [ ] un canal de feedback existe.

## Décision conseillée

Ne pas attendre 6 mois pour mettre en ligne.

Plan conseillé :

1. terminer les recettes actuelles ;
2. préparer le déploiement technique ;
3. lancer une bêta privée ;
4. observer les utilisateurs ;
5. corriger les blocages ;
6. ouvrir progressivement.

La question n'est plus seulement :

> Est-ce que l'application fonctionne ?

La vraie question devient :

> Est-ce qu'un utilisateur comprend, apprend, réussit, et revient ?
