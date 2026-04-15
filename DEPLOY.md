# Deploy Telefonia Ciocca — Guida Operativa

**Data:** 2026-04-15
**Target:** messa online su Vercel + collegamento successivo al dominio Aruba
**Stack:** Next.js 16.2.1 (App Router, Turbopack), React 19

Questa guida ti porta dal progetto locale all'URL pubblico Vercel, lasciando lo swap DNS Aruba come step successivo a scelta tua.

---

## Stato attuale (pre-deploy)

- Codice completo in locale, mai pushato su remote.
- Repo Git locale con un solo commit (`Initial commit from Create Next App`) — tutto il lavoro del restyling è **unstaged**.
- `.env.local` contiene solo il placeholder `RESEND_API_KEY=re_INSERISCI_…` → il form contatto in questo stato apre WhatsApp e restituisce 503 sul canale email (fallback graceful, **niente errori rossi bruttissimi**).
- Gate E (pre-deploy build) verificato: `next build` compila, TypeScript passa, 27 pagine statiche generate.

## Modifiche pre-deploy appena applicate

| File | Cosa è cambiato | Perché |
|---|---|---|
| `.gitignore` | Aggiunti `._*`, `/tmp/`, `/OFFERTE ATTIVE CIOCCA/`, `BILL+ ORAZIO.jpg`, `DSC_5824-Modifica.jpeg`, `ANTIGRAVITY_HANDOFF.md`, `SPEC-HOME-REBRIEF-*.md`, `proposta-operativa-*` | Escludi metadata macOS + asset/doc di lavoro non parte del sito → repo pulito |
| `package.json` | `name: "telefonia-ciocca-sito"` (era `silent-cluster`) | Identificativo sensato per Vercel |
| `next.config.mjs` | Aggiunto override opzionale `distDir` via env (non tocca il comportamento Vercel) | Solo per build locale su sandbox macOS — in cloud usa sempre `.next` |
| `app/api/contact/route.js` | Early-return 503 se `RESEND_API_KEY` è mancante/placeholder, con messaggio pulito | Il form continua a funzionare via WhatsApp anche senza Resend configurata |
| `.env.example` | Commenti espansi + istruzioni Vercel | Documentazione per Gate D futuro |

---

## Step 1 — Commit delle modifiche locali

Dalla cartella del progetto:

```bash
# Verifica che i file esclusi NON compaiano
git status

# Dovresti vedere:
# - modified: .gitignore, package.json, next.config.mjs, app/api/contact/route.js, .env.example
# - tutti i file del restyling (app/, components/, public/images/, ecc.)
# - NESSUN file "._*", NESSUN "BILL+ ORAZIO.jpg", NESSUN "tmp/"

git add -A
git commit -m "Pre-deploy: gitignore cleanup, graceful form fallback, package name"
```

Se ti compaiono ancora file `._*` o `tmp/`, fermati e dimmelo — significa che il `.gitignore` non ha ripreso quei pattern (può succedere se erano già tracked).

---

## Step 2 — Crea il repo su GitHub e fai il primo push

### 2a. Creare il repo (web UI)

1. Vai su https://github.com/new
2. **Repository name:** `telefonia-ciocca-sito`
3. **Visibility:** Private (raccomandato — è codice cliente, non open source)
4. **NON** inizializzare con README, `.gitignore` o license — il repo locale ha già tutto.
5. Clicca **Create repository**.

### 2b. Collegare il remote e push

GitHub ti mostrerà i comandi. Usa **solo questi** (HTTPS; se usi SSH, adatta):

```bash
cd "/Users/daniele/…/Telefonia Ciocca Sito"   # la tua working directory reale

git remote add origin https://github.com/TUO_USERNAME/telefonia-ciocca-sito.git
git branch -M main
git push -u origin main
```

Se GitHub ti chiede credenziali, usa un **Personal Access Token** (Settings → Developer settings → Personal access tokens → Tokens classic → repo scope) come password. Le password account non funzionano più da anni.

---

## Step 3 — Importa il progetto su Vercel

### 3a. Login e Import

1. Vai su https://vercel.com/new
2. Login con GitHub (se prima volta, autorizza l'accesso al repo appena creato)
3. Nella lista **Import Git Repository** seleziona `telefonia-ciocca-sito` → **Import**

### 3b. Configurazione progetto

Vercel rileva automaticamente Next.js. **Non cambiare niente** tranne:

- **Project Name:** `telefonia-ciocca-sito` (o lascia il default)
- **Framework Preset:** Next.js (auto)
- **Root Directory:** `./` (default)
- **Build Command:** `next build` (default)
- **Output Directory:** `.next` (default)
- **Install Command:** `npm install` (default)

### 3c. Environment Variables

Prima di cliccare **Deploy**, espandi la sezione **Environment Variables** e aggiungi:

| Name | Value | Environments |
|---|---|---|
| `RESEND_API_KEY` | `re_INSERISCI_LA_TUA_API_KEY_QUI` (placeholder per ora) | Production, Preview, Development |

> **Nota Gate D:** finché questo valore è il placeholder, il form apre comunque WhatsApp e il canale email risponde 503 con messaggio pulito. Quando avrai l'account Resend e il dominio verificato, sostituisci qui e ridistribuisci (basta un **Redeploy** dal dashboard Vercel, senza pushare nulla).

### 3d. Deploy

Clicca **Deploy**. Il primo build dura 1-3 minuti. Se qualcosa rompe, leggi i log e mandami lo screenshot.

Al termine ottieni un URL tipo:
```
https://telefonia-ciocca-sito.vercel.app
https://telefonia-ciocca-sito-<hash>.vercel.app
```

Questo è l'URL di produzione Vercel di default — **funzionante, HTTPS, CDN globale, zero configurazione DNS richiesta**. Puoi usarlo per:
- Testare tutto il sito end-to-end
- Far vedere al cliente
- Lanciare Lighthouse mobile (Gate E completo)
- Testare su iPhone reale (Gate F)
- Inviarlo a Google Search Console come property temporanea (sconsigliato: meglio farlo dopo swap DNS)

---

## Step 4 — Test post-deploy (checklist rapida)

Con l'URL Vercel aperto da iPhone e desktop:

- [ ] Home carica, hero visibile, niente layout shift aggressivo
- [ ] Navbar hamburger si apre su mobile, 8 link presenti
- [ ] Tutte le 5 landing locali rispondono: `/fotovoltaico-capena`, `/fibra-capena`, `/sicurezza-capena`, `/assistenza-smartphone-capena`, `/risparmio-bolletta`
- [ ] `/passo-corese` esiste (hub doppia sede) se è già implementata
- [ ] Immagini in `public/images/` si vedono (hero, fotovoltaico-hero, bill-orazio, ecc.)
- [ ] Pulsante WhatsApp floating visibile sopra la safe-area su iPhone
- [ ] Form contatto: compila e invia → WhatsApp si apre + messaggio "Canale email momentaneamente non disponibile" (atteso finché Gate D non è chiuso)
- [ ] Footer mostra entrambe le sedi (Capena + Passo Corese) con orari identici
- [ ] `/sitemap.xml` e `/robots.txt` rispondono (se presenti nel progetto)

Dal desktop browser apri DevTools → Lighthouse → Mobile → Generate Report:
- Performance target: **≥85**
- Accessibility target: **≥90**
- SEO target: **100**
- Best Practices target: **≥90**

Se qualche metrica è sotto target, ci lavoriamo dopo: non è bloccante per il passaggio DNS.

---

## Step 5 — Collegamento dominio Aruba (SOLO quando sei pronto)

> ⚠️ **Questo step spegne il sito Aruba attuale.** Fallo solo quando il sito Vercel è validato e il cliente è avvisato. Idealmente di mattina presto o in orario di negozio chiuso.

### 5a. Aggiungi il dominio in Vercel

1. Vercel dashboard → progetto `telefonia-ciocca-sito` → **Settings** → **Domains**
2. Inserisci `telefoniaciocca.it` → **Add**
3. Vercel ti chiede di aggiungere anche `www.telefoniaciocca.it` → **Yes, add both** (serve per il redirect)
4. Vercel ti mostra le istruzioni DNS. Scegli **"A Records"** (più robusto con Aruba che non sempre gestisce ALIAS/ANAME).

Vercel ti mostrerà qualcosa tipo:
```
Per telefoniaciocca.it (apex):
  Type:  A
  Name:  @
  Value: 76.76.21.21

Per www.telefoniaciocca.it (subdomain):
  Type:  CNAME
  Name:  www
  Value: cname.vercel-dns.com
```

⚠️ I valori esatti li vedi SOLO dentro il pannello Vercel del tuo progetto — **usa quelli**, non copiare i miei.

### 5b. Modifica i DNS su Aruba

1. Login su https://admin.aruba.it
2. Pannello **Gestione Dominio** → scegli `telefoniaciocca.it` → **Gestione DNS** (o "DNS e Reindirizzamento")
3. **Prendi screenshot dei record DNS ATTUALI prima di toccare qualunque cosa.** È il tuo rollback.
4. Trova e modifica:
   - Record **A** con `Nome: @` (o vuoto) → punta a `76.76.21.21` (o al valore che Vercel ti ha dato)
   - Se esistono altri record A sull'apex (tipo più IP multipli), **cancellali tutti** tranne quello Vercel
   - Record **CNAME** con `Nome: www` → `cname.vercel-dns.com`
5. **Non toccare** i record MX (email), TXT (verifiche varie, SPF, DKIM), NS (name server Aruba).
   - Se l'email `info@telefoniaciocca.it` è gestita da Aruba Mail, i record MX e SPF devono restare esattamente come sono, altrimenti l'email smette di funzionare.
6. Salva le modifiche.

### 5c. Propagazione DNS

- Aruba dichiara "fino a 24 ore". In pratica 5-60 minuti nella maggior parte dei casi.
- Controlla con: https://dnschecker.org → inserisci `telefoniaciocca.it` → tipo `A` → vedi se il nuovo IP è propagato globalmente.
- Vercel dashboard → Domains → vedrai l'icona cambiare da rossa (Invalid) a verde (Valid) automaticamente quando rileva il cambio.
- Il certificato SSL Let's Encrypt viene emesso **automaticamente** da Vercel appena i DNS puntano giusto — non devi fare nulla.

### 5d. Verifica post-swap

Da un browser in incognito (o un device in 4G):

- [ ] `https://telefoniaciocca.it` → carica sito Vercel
- [ ] `https://www.telefoniaciocca.it` → redirect 308 → `telefoniaciocca.it`
- [ ] `http://telefoniaciocca.it` → redirect 308 → `https://`
- [ ] Lucchetto SSL valido in barra URL
- [ ] Email `info@telefoniaciocca.it` continua a funzionare (manda una mail di test da Gmail, verifica che arrivi)

Se qualcosa rompe, ripristina i record DNS dallo screenshot fatto al punto 5b.3. La propagazione del rollback è altrettanto veloce.

---

## Gate D (Resend) — da chiudere dopo il deploy

Quando il sito Vercel è online (anche solo su URL `.vercel.app`):

1. Crea account su https://resend.com
2. **Domains** → **Add Domain** → `telefoniaciocca.it`
3. Resend ti dà 3-4 record DNS (SPF `TXT`, DKIM `TXT`, return-path `MX`). **Aggiungili su Aruba nel pannello DNS** — questi stanno accanto ai record MX esistenti di Aruba Mail, non li sostituiscono. SPF va accorpato se esiste già un record SPF.
4. Aspetta la verifica "Verified" (qualche minuto).
5. **API Keys** → crea una nuova API key con permesso `send` → copia il valore `re_...`
6. Vercel dashboard → progetto → Settings → Environment Variables → `RESEND_API_KEY` → **Edit** → incolla il valore reale → Save.
7. Vercel dashboard → Deployments → ultimo deploy → **⋯ → Redeploy** (senza rebuild cache).
8. Testa il form dal sito live: compila e invia. Deve:
   - Aprire WhatsApp precompilato (era già così prima)
   - Restituire stato `success` (non più 503)
   - Arrivare una mail brandizzata a `info@telefoniaciocca.it` con il contenuto del form.

---

## Comandi utili

```bash
# Vedere lo stato Vercel del progetto (dopo install CLI)
npx vercel@latest login
npx vercel@latest link          # collega la cartella locale al progetto Vercel
npx vercel@latest env pull      # scarica le env vars in .env.local
npx vercel@latest logs          # guarda i log dell'ultimo deploy

# Rebuildare senza pushare (quando hai solo cambiato env vars)
# Dashboard Vercel → Deployments → ⋯ sull'ultimo → Redeploy

# Rollback rapido a un deploy precedente
# Dashboard Vercel → Deployments → scegli deploy verde → ⋯ → Promote to Production
```

---

## Cose che NON facciamo in questo deploy (consapevolmente)

- ❌ **Google Search Console attivazione** — da fare solo DOPO swap DNS, altrimenti indicizziamo l'URL `.vercel.app`
- ❌ **Sitemap submission** — idem, dopo swap DNS
- ❌ **Verifica Lighthouse ≥85 bloccante** — è un gate qualitativo, non un bloccante deploy
- ❌ **Modifica di qualunque record MX/TXT email esistente su Aruba** — toccare solo A e CNAME del sito

---

## Contatti e rollback

- Numero cliente: `069073674`
- WhatsApp negozio: `39069073674`
- Destinatario email form: `info@telefoniaciocca.it`
- Rollback piano B: ripristinare record A/CNAME Aruba dagli screenshot pre-modifica
