# Audit de couverture du contenu pédagogique

Généré par `node scripts/audit_content_coverage.mjs`.

## Synthèse

- Langues : 14
- Thèmes déclarés : 433
- Mots : 6380
- Mots avec phrase d'exemple : 6380 (100%)
- Mots avec gloss mot à mot : 6380 (100%)
- Combinaisons langue/thème/niveau sans mot : 0
- Combinaisons langue/thème/niveau sans phrase d'exemple : 0

## Couverture par langue

| Langue | Code | Thèmes | Mots | Exemples | % exemples | Glosses | % glosses | Translittérations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Espagnol | es | 30 | 460 | 460 | 100% | 460 | 100% | 0 |
| Anglais | en | 31 | 455 | 455 | 100% | 455 | 100% | 0 |
| Italien | it | 31 | 456 | 456 | 100% | 456 | 100% | 0 |
| Allemand | de | 31 | 454 | 454 | 100% | 454 | 100% | 0 |
| Portugais | pt | 31 | 456 | 456 | 100% | 456 | 100% | 0 |
| Néerlandais | nl | 31 | 456 | 456 | 100% | 456 | 100% | 0 |
| Russe | ru | 31 | 456 | 456 | 100% | 456 | 100% | 300 |
| Japonais | ja | 31 | 457 | 457 | 100% | 457 | 100% | 299 |
| Coréen | ko | 31 | 455 | 455 | 100% | 455 | 100% | 300 |
| Mandarin | zh | 31 | 455 | 455 | 100% | 455 | 100% | 299 |
| Arabe | ar | 31 | 455 | 455 | 100% | 455 | 100% | 300 |
| Polonais | pl | 31 | 455 | 455 | 100% | 455 | 100% | 0 |
| Turc | tr | 31 | 455 | 455 | 100% | 455 | 100% | 0 |
| Hindi | hi | 31 | 455 | 455 | 100% | 455 | 100% | 300 |

## Modes bloqués par manque de contenu

Les modes vocabulaire peuvent fonctionner avec des mots. Les modes `fill-blank` et `sentence-builder` ont besoin de phrases d'exemple.

### Combinaisons sans mot

- Aucun



### Combinaisons sans phrase d'exemple

- Aucun



## Lisibilité des langues à écriture non latine

Votre remarque sur le japonais est confirmée côté produit : même quand le mode `fill-blank` a des phrases et des choix, l'utilisateur débutant peut ne pas savoir lire les réponses si les choix affichent seulement le terme en écriture native.

| Langue | Code | Mots | Translittérations | % translittéré | Sans aide lecture | Exemples | Glosses complets |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Russe | ru | 456 | 300 | 66% | 156 | 456 | 456 |
| Japonais | ja | 457 | 299 | 65% | 158 | 457 | 457 |
| Coréen | ko | 455 | 300 | 66% | 155 | 455 | 455 |
| Mandarin | zh | 455 | 299 | 66% | 156 | 455 | 455 |
| Arabe | ar | 455 | 300 | 66% | 155 | 455 | 455 |
| Hindi | hi | 455 | 300 | 66% | 155 | 455 | 455 |

### Risque UX identifié

- En japonais, coréen, chinois, arabe et hindi, les choix de réponse des modes à phrase devraient probablement afficher une aide de lecture ou une traduction courte.
- La translittération existe sur une partie du vocabulaire, mais pas sur tous les mots avancés.
- Le mode `fill-blank` aide déjà la phrase via gloss interactif, mais les boutons de choix restent difficiles si l'apprenant ne lit pas encore l'écriture cible.

### Recommandations produit

1. Ajouter une option d'aide dans les choix : terme cible + translittération quand disponible + traduction française discrète.
2. Pour les langues à écriture non latine, afficher la translittération dans les choix au moins aux niveaux débutant et intermédiaire.
3. Garder l'écriture native visible pour apprendre, mais ne pas en faire la seule information dans les modes de reconnaissance.
4. Compléter les translittérations manquantes avant de durcir les exercices sur les niveaux avancés.
