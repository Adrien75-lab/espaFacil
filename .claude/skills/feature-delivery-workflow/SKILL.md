---
name: feature-delivery-workflow
description: >
  Workflow professionnel de livraison d'une fonctionnalité, depuis le cadrage jusqu'à la fusion.
  Utiliser obligatoirement cette skill dès que l'utilisateur demande une nouvelle fonctionnalité,
  une phase, une branche, une recette, des instructions de test, une pull request, une validation,
  une fusion ou demande comment travailler comme en entreprise. Elle impose une branche dédiée,
  des critères d'acceptation, des tests automatisés, une recette utilisateur explicite et interdit
  la création de la PR avant la validation fonctionnelle du Product Owner.
---

# Feature Delivery Workflow

## Rôles

- L'utilisateur agit comme **Product Owner** : il précise le besoin, arbitre les priorités et valide le comportement fonctionnel.
- L'agent agit comme **développeur responsable de la livraison** : il analyse, implémente, teste, documente la recette, corrige les anomalies et prépare la PR.
- La CI agit comme **contrôle automatique** : elle vérifie le code après ouverture de la PR.

La validation automatisée ne remplace pas la recette utilisateur. La recette utilisateur ne remplace pas les tests automatisés.

## États du cycle

Une fonctionnalité se trouve toujours dans un seul de ces états :

1. `À cadrer`
2. `Prête à développer`
3. `En développement`
4. `Prête pour recette`
5. `Corrections de recette`
6. `Recette validée`
7. `PR ouverte`
8. `CI validée`
9. `Fusionnée`

Annonce l'état actuel dans les comptes rendus importants. Ne saute pas directement de développement à fusion.

## 1. Cadrage

Avant d'écrire du code, transforme la demande en fiche courte :

- objectif utilisateur;
- périmètre inclus;
- hors périmètre;
- critères d'acceptation observables;
- données, migrations ou seeders potentiels;
- risques ou dépendances.

Si le dépôt permet de lever une ambiguïté, inspecte-le au lieu de demander à l'utilisateur. Demande une décision uniquement lorsqu'elle change réellement le produit.

## 2. Branche dédiée

Pars de la branche stable actualisée, sauf décision explicite contraire :

```powershell
git switch master
git pull --ff-only
git switch -c codex/YYYY-MM-DD-nom-fonctionnalite
```

Annonce le nom exact de la branche. Une branche porte une seule fonctionnalité cohérente. Ne commence pas la fonctionnalité suivante sur une branche en attente de recette ou de fusion.

## 3. Développement

- Inspecte l'architecture et respecte les conventions existantes.
- Garde les changements concentrés sur le besoin.
- Ajoute des tests proportionnés au risque.
- Exécute lint, tests, build et formatage adaptés au dépôt.
- Vérifie l'expérience réelle, pas uniquement la compilation.
- Commit et pousse les changements lorsque la fonctionnalité est prête pour recette.

Si une migration ou un seeder est nécessaire, teste son exécution et son éventuelle idempotence avant de remettre la recette.

## 4. Livraison pour recette

Quand le développement est terminé, utilise exactement la structure de `references/acceptance-template.md`.

La fiche doit toujours indiquer :

- état `Prête pour recette`;
- branche et dernier commit;
- résumé fonctionnel;
- commandes exactes;
- migration : oui ou non;
- seeder : oui ou non, avec la classe exacte;
- scénarios de test numérotés;
- résultat attendu pour chaque scénario;
- tests automatisés exécutés et résultats;
- risques ou limites connus.

Ne dis jamais seulement « vous pouvez tester ». Guide la recette comme un protocole reproductible.

## 5. Retour de recette

Si l'utilisateur signale une anomalie :

1. reproduis-la;
2. corrige-la sur la même branche;
3. ajoute ou adapte un test de non-régression;
4. pousse le correctif;
5. fournis uniquement les étapes de recette impactées, plus la fiche complète si le périmètre a changé;
6. replace l'état à `Prête pour recette`.

Ne crée pas une nouvelle branche pour une correction appartenant à la fonctionnalité encore en recette.

## 6. Validation Product Owner

Attends une approbation explicite telle que :

- `Recette validée`
- `Je valide la recette`
- `Tout est conforme, crée la PR`

Une absence de retour, un « ça a l'air bien » avant la fin des tests ou la réussite de la CI ne constituent pas automatiquement une validation.

Après validation, annonce l'état `Recette validée` et seulement alors prépare la PR.

## 7. Pull Request

Avant la PR :

- vérifie que le worktree ne contient pas de fichiers étrangers;
- synchronise la branche cible si nécessaire;
- réexécute les validations importantes;
- vérifie le diff complet et les commits;
- pousse la branche.

La PR doit contenir :

- contexte et objectif;
- changements principaux;
- méthode de test;
- migrations/seeders et commandes de déploiement;
- captures d'écran si l'interface a changé;
- risques, compatibilité et retour arrière;
- mention `Recette utilisateur validée`.

Utilise `references/pull-request-template.md` comme modèle.

## 8. CI et fusion

- Consulte tous les contrôles de CI.
- Si un contrôle échoue, diagnostique et corrige sur la même branche.
- Ne contourne pas un contrôle sans raison documentée.
- Quand la CI est verte, indique que la PR est prête à fusionner.
- Ne fusionne que sur demande explicite ou si l'utilisateur a préalablement délégué cette action.
- Après fusion, actualise la branche stable et supprime la branche fonctionnelle si demandé.

## Compte rendu final

Après fusion, fournis :

- numéro et URL de PR;
- commit de fusion;
- état CI;
- migrations/seeders de production;
- branche supprimée ou conservée;
- prochaine fonctionnalité possible, sans la commencer automatiquement.

## Exceptions

- Un correctif urgent peut suivre une branche `codex/YYYY-MM-DD-hotfix-nom`, mais conserve recette et CI adaptées au risque.
- Un changement purement documentaire peut avoir une recette simplifiée, mais doit tout de même être relu avant PR.
- Si l'utilisateur demande explicitement une PR brouillon avant recette, crée une **draft PR** et indique clairement qu'elle n'est pas validée ni fusionnable.
