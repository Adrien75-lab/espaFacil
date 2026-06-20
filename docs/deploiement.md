# Deploiement LinguaFacil

> Derniere mise a jour : 20 juin 2026

## Architecture actuelle

```
master (dev local, SQLite)
  └── staging (deploiement auto Vercel + Railway)
        ├── Frontend : linguafacil.vercel.app (Vercel)
        └── Backend  : espafacil-production.up.railway.app (Railway + PostgreSQL)
```

## Workflow Git

1. **master** : developpement local, les branches sont mergees ici apres recette
2. **staging** : deploiement automatique sur Vercel (frontend) et Railway (backend)

Les branches `claude/*` et `codex/*` sont creees depuis `master`. Apres recette validee par Adrien, elles sont mergees dans `master`, puis `master` est merge dans `staging` pour deployer.

```bash
# Deployer les changements valides
git checkout staging
git merge master
git push origin staging
# => Vercel et Railway redeploient automatiquement
```

**IMPORTANT** : ne jamais mettre de config de deploiement dans `master`. Master est exclusivement pour le dev local.

---

## 1. Backend — Railway

### URL actuelle

`https://espafacil-production.up.railway.app`

### Configuration du service

- **Repo** : `Adrien75-lab/espaFacil`
- **Branch** : `staging`
- **Root Directory** : `/backend`
- **Builder** : Dockerfile

### Base de donnees

PostgreSQL fourni par Railway (service separe). Les donnees persistent entre les redeploiements.

- **Host interne** : `postgres.railway.internal`
- **Port** : `5432`
- **Database** : `railway`
- **User** : `postgres`

### Variables d'environnement (service espaFacil)

| Variable | Valeur |
|----------|--------|
| `APP_NAME` | `LinguaFacil` |
| `APP_ENV` | `production` |
| `APP_KEY` | `base64:...` (generer avec `php artisan key:generate --show`) |
| `APP_DEBUG` | `false` |
| `APP_URL` | `https://espafacil-production.up.railway.app` |
| `DB_CONNECTION` | `pgsql` |
| `DB_HOST` | `postgres.railway.internal` (ou `${{Postgres.RAILWAY_PRIVATE_DOMAIN}}`) |
| `DB_PORT` | `5432` |
| `DB_DATABASE` | `railway` |
| `DB_USERNAME` | `postgres` |
| `DB_PASSWORD` | `${{Postgres.POSTGRES_PASSWORD}}` |
| `CORS_ALLOWED_ORIGINS` | `https://linguafacil.vercel.app` |
| `SANCTUM_STATEFUL_DOMAINS` | `linguafacil.vercel.app` |

### Dockerfile

Le Dockerfile (`backend/Dockerfile`) :
- Base : `php:8.3-apache`
- Extensions : `pdo_sqlite`, `pdo_pgsql`, `zip`, `bcmath`
- Desactive `mpm_event`, active `mpm_prefork` (compatible PHP)
- Au demarrage : `config:clear` → `migrate` → `db:seed` → `apache2-foreground`
- Le port est configure via la variable `PORT` de Railway

### Authentification

L'authentification utilise des **tokens API Sanctum** (Bearer tokens) au lieu des cookies. Raison : les cookies ne fonctionnent pas entre domaines differents (Vercel != Railway).

- Login/Register renvoient un token stocke dans `localStorage`
- Chaque requete API inclut le header `Authorization: Bearer <token>`
- Pas besoin de `/sanctum/csrf-cookie`

---

## 2. Frontend — Vercel

### URL actuelle

`https://linguafacil.vercel.app`

### Configuration du projet

- **Repo** : `Adrien75-lab/espaFacil`
- **Framework** : Vite
- **Root Directory** : `frontend`
- **Build Command** : `npm run build`
- **Output Directory** : `dist`
- **Production Branch** : `staging` (configure dans Settings > Environments > Production > Branch Tracking)

### Variables d'environnement (Vercel)

| Variable | Valeur | Environnements |
|----------|--------|----------------|
| `VITE_API_URL` | `https://espafacil-production.up.railway.app` | Production, Preview, Development |

Cette variable est injectee au build par Vite (`import.meta.env.VITE_API_URL`). Un fallback est code en dur dans `frontend/src/api/client.ts` au cas ou.

### vercel.json

Le fichier `frontend/vercel.json` configure :
- Le rewrite SPA (`/(.*) → /index.html`)
- Les headers de securite (X-Content-Type-Options, X-Frame-Options, Referrer-Policy)

Les appels API ne passent **pas** par des rewrites Vercel. Le frontend appelle directement le backend Railway.

---

## 3. Differences local vs production

| Aspect | Local (master) | Production (staging) |
|--------|---------------|---------------------|
| Base de donnees | SQLite | PostgreSQL (Railway) |
| Auth | Cookies Sanctum | Tokens API Sanctum |
| API URL | `/api/*` (proxy Vite) | `https://espafacil-production.up.railway.app/api/*` |
| Frontend | `localhost:5173` | `linguafacil.vercel.app` |
| Backend | `localhost:8000` | `espafacil-production.up.railway.app` |

Le code gere ces differences via :
- `DB_CONNECTION` env var (sqlite vs pgsql)
- `VITE_API_URL` env var (vide en local, URL Railway en prod)
- `import.meta.env.PROD` pour le fallback frontend
- Les seeders detectent le driver (`$driver === 'sqlite'`, `$driver === 'pgsql'`)

---

## 4. Verification apres deploiement

- [x] Page d'accueil s'affiche (frontend Vercel)
- [x] Les langues se chargent (API backend Railway)
- [x] Inscription / connexion fonctionnent (tokens API)
- [x] Un QCM se lance correctement
- [x] La PWA est installable (HTTPS)
- [x] Les pages RGPD s'affichent
- [x] La deconnexion fonctionne
- [x] Les donnees persistent entre redeploiements (PostgreSQL)

---

## 5. Problemes resolus lors du deploiement initial

| Probleme | Cause | Solution |
|----------|-------|----------|
| 502 Bad Gateway | Seeder crash : `$word['transliteration']` absent | `$word['transliteration'] ?? null` |
| Apache MPM conflict | Deux MPM charges | Desactiver `mpm_event` au runtime |
| CORS bloque | Middleware CORS uniquement sur routes API | Middleware CORS global (`prepend`) |
| 500 sur /sanctum/csrf-cookie | Sessions SQLite read-only | Passage aux tokens API (plus de cookies) |
| SQLite readonly | `www-data` n'avait pas les droits | `chown www-data:www-data database/` |
| Seeder crash PostgreSQL | `SET FOREIGN_KEY_CHECKS=0` (MySQL) | Branche `pgsql` dans le seeder |
| Frontend appelle /api/* en 404 | Rewrites Vercel ne proxient pas | Frontend appelle Railway directement via `VITE_API_URL` |
| AuthenticationException → 500 | Redirect vers page login inexistante | Handler global : 401 JSON |

---

## 6. Nom de domaine personnalise (optionnel)

Si tu achetes un domaine (ex: `linguafacil.fr`) :

1. **Vercel** : Settings → Domains → ajoute `linguafacil.fr`
2. **Railway** : Settings → Networking → ajoute `api.linguafacil.fr`
3. Configure les DNS chez ton registrar
4. Mets a jour `CORS_ALLOWED_ORIGINS` et `SANCTUM_STATEFUL_DOMAINS` dans Railway
5. Mets a jour `VITE_API_URL` dans Vercel avec `https://api.linguafacil.fr`
