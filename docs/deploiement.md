# Déploiement LinguaFacil

## Architecture

```
master → staging → production
  │         │          │
  │         │          └── Vercel (frontend) + Railway (backend)
  │         └── Pré-production / recette finale
  └── Développement (branches claude/* et codex/*)
```

## Workflow Git

1. **master** : développement, les branches sont mergées ici après recette
2. **staging** : pré-production, pour tester avant mise en ligne
3. **production** : déployée automatiquement sur Railway + Vercel

Pour promouvoir :
```bash
# master → staging (après recette sur master)
git checkout staging
git merge master
git push origin staging

# staging → production (après validation staging)
git checkout production
git merge staging
git push origin production
```

---

## 1. Backend — Railway

### Création du projet

1. Va sur [railway.app](https://railway.app) et connecte-toi avec GitHub
2. Clique **New Project → Deploy from GitHub repo**
3. Sélectionne le repo `Adrien75-lab/espaFacil`
4. Configure :
   - **Branch** : `production`
   - **Root Directory** : `backend`
   - **Builder** : Dockerfile

### Variables d'environnement (Railway)

Dans l'onglet **Variables** du service, ajoute :

| Variable | Valeur |
|----------|--------|
| `APP_NAME` | `LinguaFacil` |
| `APP_ENV` | `production` |
| `APP_KEY` | (générer avec `php artisan key:generate --show`) |
| `APP_DEBUG` | `false` |
| `APP_URL` | `https://ton-service.up.railway.app` |
| `DB_CONNECTION` | `sqlite` |
| `SESSION_DRIVER` | `database` |
| `SANCTUM_STATEFUL_DOMAINS` | `ton-frontend.vercel.app` |
| `CORS_ALLOWED_ORIGINS` | `https://ton-frontend.vercel.app` |

### Générer APP_KEY

Sur ton PC local :
```powershell
cd backend
php artisan key:generate --show
```
Copie la valeur `base64:...` dans Railway.

---

## 2. Frontend — Vercel

### Création du projet

1. Va sur [vercel.com](https://vercel.com) et connecte-toi avec GitHub
2. Clique **Add New → Project → Import** le repo `espaFacil`
3. Configure :
   - **Framework Preset** : Vite
   - **Root Directory** : `frontend`
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
   - **Branch** : `production`

### Après déploiement

1. Note l'URL Vercel (ex: `linguafacil.vercel.app`)
2. Modifie `frontend/vercel.json` : remplace `votre-backend.up.railway.app` par ton URL Railway réelle
3. Dans Railway, mets à jour `SANCTUM_STATEFUL_DOMAINS` et `CORS_ALLOWED_ORIGINS` avec l'URL Vercel

---

## 3. Vérification

Après déploiement, vérifie :

- [ ] Page d'accueil s'affiche (frontend Vercel)
- [ ] Les langues se chargent (API backend Railway)
- [ ] Inscription / connexion fonctionnent
- [ ] Un QCM se lance correctement
- [ ] La PWA est installable (HTTPS requis ✅)
- [ ] Les pages RGPD s'affichent

---

## 4. Nom de domaine personnalisé (optionnel)

Si tu achètes un domaine (ex: `linguafacil.fr`) :

1. **Vercel** : Settings → Domains → ajoute `linguafacil.fr`
2. **Railway** : Settings → Domains → ajoute `api.linguafacil.fr`
3. Configure les DNS chez ton registrar (Vercel te donne les valeurs)
4. Mets à jour `SANCTUM_STATEFUL_DOMAINS` dans Railway avec le nouveau domaine
