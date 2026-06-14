# Modèle de fiche de recette

Utilise cette structure sans supprimer de rubrique. Écris `Aucun` ou `Non` lorsqu'une rubrique ne s'applique pas.

```markdown
**Recette — [Nom de la fonctionnalité]**

État : `Prête pour recette`
Branche : `codex/YYYY-MM-DD-nom`
Dernier commit : `[hash]`

**Ce qui a été réalisé**

- [Changement visible 1]
- [Changement visible 2]

**Préparation**

```powershell
git switch codex/YYYY-MM-DD-nom
git pull
```

Terminal backend :

```powershell
cd backend
[commandes exactes]
```

Terminal frontend :

```powershell
cd frontend
[commandes exactes]
```

Migration : `Oui/Non`
Commande : `[commande exacte ou Aucune]`

Seeder : `Oui/Non`
Commande : `[commande exacte ou Aucune]`

**Scénarios de recette**

1. [Action utilisateur précise]
   Résultat attendu : [résultat observable]
2. [Action utilisateur précise]
   Résultat attendu : [résultat observable]
3. [Cas de régression ou cas limite]
   Résultat attendu : [résultat observable]

**Tests automatisés**

- `[commande]` : [résultat]
- `[commande]` : [résultat]

**Points connus**

- [Limite, risque ou Aucun]

Lorsque tout est conforme, répondez : `Recette validée`.
```

Les résultats attendus doivent être suffisamment précis pour permettre à une personne qui n'a pas écrit le code de décider objectivement si le test réussit.
