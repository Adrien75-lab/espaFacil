# LinguaFacil

This repository includes its complete Claude Cowork handoff in:

`/.claude/skills/linguafacil/SKILL.md`

At the start of every session concerning this project:

1. Read that skill completely.
2. Read its three files under `references/`.
3. Run `/.claude/skills/linguafacil/scripts/project_snapshot.ps1`.
4. Compare the documented status with the current Git branch and commits.
5. Tell Adrien which branch and phase are currently active before modifying files.

The root files `index.html`, `style.css`, and `script.js` belong to an abandoned version and must never be modified.

For feature delivery and user acceptance, also read:

`/.claude/skills/feature-delivery-workflow/SKILL.md`

Do not create a pull request until Adrien explicitly writes `Recette validée` or gives an equivalent unambiguous approval.

## Règles de déploiement et merge — CRITIQUES

Ces règles sont non-négociables. Elles protègent les utilisateurs en production.

1. **JAMAIS de merge direct vers staging ou prod** sans avoir testé le flux complet en local (inscription, login, logout, navigation, exercices).
2. **JAMAIS merger une branche qui touche à l'authentification** sans avoir vérifié la compatibilité avec l'architecture en place (master = session auth, staging = token auth).
3. **Tester en local AVANT de merger** : lancer le backend (`php artisan serve`) + frontend (`npm run dev`), vérifier que tout fonctionne de bout en bout.
4. **Ne jamais casser une fonctionnalité qui marche** — si l'inscription, le login ou une feature existante fonctionne, ne pas la toucher sans validation que le remplacement fonctionne.
5. **Demander l'accord explicite d'Adrien** avant tout merge vers staging ou production. Un simple "allez-y" pour développer une feature ne signifie PAS "mergez en prod".
6. **En cas de doute, ne pas merger** — mieux vaut demander que casser la prod.
7. **Après un merge en staging**, surveiller les logs Railway et tester immédiatement en navigation privée avant de considérer le déploiement comme réussi.
8. **APP_DEBUG doit toujours être `false` en production** sauf pour un diagnostic temporaire, et remis à `false` immédiatement après.
