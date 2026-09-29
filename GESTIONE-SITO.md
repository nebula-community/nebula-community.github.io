# Nebula Inn — Guida alla gestione del sito

Come si crea, dove si mette e come si aggiorna tutto quello che il sito mostra. Pensata per chi gestisce i contenuti (Presidente, officers, redazione), non serve saper programmare.

> **La regola d'oro:** il sito si **genera** dai file in `content/`. Non si modifica mai l'HTML: si modifica un file di contenuto, si salva (commit) e dopo 2–3 minuti il sito è aggiornato.

---

## 1. Come funziona, in una figura

```
  Tu modifichi                GitHub Actions                 GitHub Pages
┌────────────────┐        ┌──────────────────────┐        ┌───────────────┐
│ content/*.json │ commit │ 1. sync (Drive, RH)  │ deploy │ sito statico  │
│ content/*.md   │ ─────► │ 2. validazione (Zod) │ ─────► │ nebula…/      │
│ (GitHub / CMS) │        │ 3. immagini (sharp)  │        │               │
└────────────────┘        │ 4. build (Astro)     │        └──────┬────────┘
        ▲                 └──────────────────────┘               │ nel browser
        │ Google Sheets / Docs / Drive (ogni 6h)                 ▼
        │ Raid-Helper (ogni 30')                     contatori Discord, iscrizioni
        └──────────────────────────────────────────  raid live (senza rebuild)
```

Tre sorgenti, attivabili da un unico file `site.config.ts`:

| Sorgente | Cosa | Quando si aggiorna |
|---|---|---|
| **Repository** (principale) | tutto in `content/` | a ogni commit su `main` |
| **Google Drive / Sheets / Docs** | fogli (roster, loot, eventi), documenti (lore, regolamento), cartella immagini | ogni 6 ore, o con il pulsante manuale |
| **Browser (runtime)** | membri Discord online, iscrizioni Raid-Helper | ogni visita, con cache di 5–10 minuti |

---

## 2. Struttura del repository

```
nebula-site/
├── content/                  ← I CONTENUTI (è l'unica cartella che tocchi)
│   ├── site.json
│   ├── events.json · team.json
│   ├── pages/                  locanda.md · editto.md · regolamento.json
│   ├── lore/                   00-….md, 01-….md …
│   ├── games/<slug>/           game.json + un file per tab
│   └── media/                  immagini originali (PNG/JPG, anche pesanti)
├── src/                      ← il codice del sito (Astro) — non toccare
├── scripts/
│   ├── sync-drive.mjs          Google → content/
│   ├── sync-raid-helper.mjs    Raid-Helper → events.json
│   ├── validate.mjs            controlla i file con gli schemi Zod
│   └── images.mjs              sharp: WebP/AVIF in 3 misure
├── .github/workflows/
│   ├── deploy.yml              build + pubblicazione
│   └── sync-raid-helper.yml    calendario ogni 30'
├── .pages.yml                ← configurazione del CMS (moduli per gli officers)
├── site.config.ts            ← interruttori delle sorgenti dati
└── public/CNAME              ← solo con dominio personalizzato
```

In questo design system trovi un campione funzionante di tutto:
- `ui_kits/website/content/`: i contenuti;
- `ui_kits/website/scripts/`: workflow e script;
- `ui_kits/website/loader.js`: come il sito legge i file.

---

## 3. Come si modifica un file

**A. Da GitHub (anche dal telefono)**
1. Apri il repository e vai nel file, ad esempio `content/games/wow-forever/recruitment.json`.
2. Tocca la matita ✏️, modifica e poi tocca **Commit changes** con un messaggio breve, ad esempio `reclutamento: aperti i tank`.
3. Nella scheda **Actions** vedi il deploy partire. Quando è verde ✅, il sito è aggiornato.

**B. Da Pages CMS** (consigliato per gli officers)
Su [pagescms.org](https://pagescms.org) accedi con GitHub e scegli il repository. Trovi dei moduli, invece del JSON: roster, reclutamento, lore… Il CMS fa il commit per te. La configurazione di esempio è `scripts/pages-cms.sample.yml`: copiala in `.pages.yml`.

**C. Da Google Sheets / Docs** (se attivato)
Modifichi il foglio o il documento condiviso. Entro 6 ore il sito si aggiorna; per farlo subito c'è il pulsante *Run workflow* nella scheda Actions, oppure l'Apps Script (§7.3).

> ⚠️ **JSON:** ogni testo va tra `"virgolette"`, gli elementi di una lista sono separati da virgole, e **niente virgola dopo l'ultimo**. Se sbagli, la validazione ferma il deploy e il sito resta com'era: nessun danno, basta correggere.

---

## 4. Tutti i file, uno per uno

### 4.1 Sito — `content/site.json`
Nome, slogan, invito Discord (`discord.invite`, `discord.code`), video della hero, social, SEO.
**Video hero:** carica `hero.webm` (sotto 8 MB) e `hero-mobile.webm` in `content/media/`, poi scrivi i percorsi in `hero.video` e `hero.videoMobile`. Se il campo è `null`, il sito usa la hero generata.

### 4.2 Pagine di benvenuto — `content/pages/`
| File | Pagina | Formato |
|---|---|---|
| `locanda.md` | Chi siamo → La Locanda | Markdown |
| `editto.md` | Lore → L'Editto | Markdown |
| `regolamento.json` | Chi siamo → Regolamento | JSON strutturato |

Sintassi Markdown ammessa:
```md
---
title: "La Locanda"
subtitle: "…"
teaser: "Testo breve per la card in home"
---
## Titolo di sezione
Paragrafo normale.

- **Termine in grassetto** — spiegazione
> [!nota] Riquadro evidenziato
> Riga di versi (una per riga)

— L'Oste
```

### 4.3 Lore — `content/lore/`
Un file per capitolo, nominato `NN-titolo.md`: `00` è il prologo, e il numero decide l'ordine.
```md
---
id: "1"
order: 1
numeral: "I"          # P, I, I·V, II…
kind: "Libro"         # Prologo · Libro · Veglia
title: "La sala che non chiude mai"
cover: "media/lore/libro-1.png"
date: "2026-10-01"
minutes: 18
---
Primo paragrafo del capitolo.

Secondo paragrafo…
```
Appare da solo nell'indice e nella navigazione precedente/successivo. **Non modificare** `lore/index.json`: si rigenera al build.

### 4.4 Giochi — `content/games/<slug>/`
Ogni cartella genera una pagina, ad esempio `/giochi/wow-forever`. **Un file mancante nasconde la sua tab.**

| File | Tab | Chi lo aggiorna | Frequenza |
|---|---|---|---|
| `game.json` | card, hero, Info, Il patto, regole loot, **fazioni** | Presidente / GM | raramente |
| `recruitment.json` | Chi cerchiamo, badge in testata | officers | quando cambiano le priorità |
| `application.json` | Come entrare → modulo | officers | raramente |
| `roster.json` | Roster | officers | a ogni cambio di roster |
| `progress.json` | Progress | officers | dopo ogni first kill |
| `loot.json` | Loot | officers | dopo ogni serata |
| `ranks.json` | Ranghi | GM | raramente |
| `events.json` | Calendario | **automatico** (Raid-Helper) | ogni 30' |
| `gallery.json` | Galleria | redazione | a piacere |
| `faq.json` | FAQ | officers | quando torna una domanda |

#### Reclutamento — chi cerchiamo (`recruitment.json` → tab **Chi cerchiamo**)
```json
{
  "open": true,
  "highlight": "Priorità DPS",
  "roles": [
    { "role": "tank",   "label": "Tank",   "priority": "open", "wanted": null },
    { "role": "healer", "label": "Healer", "priority": "open", "wanted": 2 },
    { "role": "dps",    "label": "DPS",    "priority": "high", "wanted": null }
  ],
  "targets": { "tank": 3, "healer": 5, "dps": 12 },
  "classes": [
    { "class": "warrior", "note": null, "specs": [
      { "name": "Arms",       "role": "dps",  "priority": "high" },
      { "name": "Fury",       "role": "dps",  "priority": "high" },
      { "name": "Protection", "role": "tank", "priority": "open" }
    ] }
  ]
}
```
- **Ruoli:** ogni card mostra **quanti cerchiamo**. Con `"wanted": null` il numero si calcola da solo (`targets` meno i giocatori di quel ruolo in `roster.json`). Scrivi un numero per forzarlo; con `0` o `"priority": "closed"` la card diventa "Al completo".
- **Combinazioni:** una riga per ogni classe–spec, 28 in tutto, compresa Priest – Smite. Per cambiare chi cerchiamo, modifica solo `priority` sulla riga della spec: `high` = priorità, `open` = aperto, `closed` = al completo (barrata).
- **Ordine:** automatico. Prima le classi con almeno una spec in priorità, poi le aperte, poi quelle al completo.
- **note:** una riga facoltativa sotto il nome della classe, ad esempio "Cerchiamo main con attunement".
- **highlight:** il testo del badge in testata; mettilo vuoto `""` per non mostrarlo. **open: false** chiude il reclutamento in tutto il sito.
- **Classi per fazione:** paladino e sciamano vengono nascosti automaticamente se la loro fazione non è attiva.

#### Tab, testi e galleria (`game.json` → `tabs`, `copy`, `hero`)
- **`tabs`:** ordine ed etichette delle tab. Togli una voce per nasconderla; `id` validi: `info pact faq ranks recruitment join progress roster loot calendar gallery`.
- **`copy`:** i titoli e i testi introduttivi di ogni tab, ad esempio `copy.loot.title` o `copy.join.steps` (i tre passi di "Come entrare").
- **`hero`:** i badge in testata (`badges`), l'immagine, la frase sotto il titolo e le etichette dei due pulsanti.
- **Galleria (`gallery.json`):** le immagini stanno in `media/gallery/<slug>/`, con nomi numerati `01-…`, `02-…`. Nel sito reale, se `items` è vuoto il build prende da solo tutte le immagini della cartella; compila `items` solo per aggiungere didascalie o cambiare l'ordine.

#### Fazioni (`game.json` → `factions`)
```json
"factions": [
  { "name": "Nebulah", "faction": "Orda",     "active": true  },
  { "name": "Nebulaa", "faction": "Alleanza", "active": false }
]
```
Quando nasce la gilda in Alleanza, metti `"active": true`. Si adattano da soli:
- il roster, con il selettore di fazione;
- il progress, con due colonne;
- le classi del reclutamento;
- i testi. Le voci con `"onlyIf": "multi"` compaiono solo con due fazioni attive, quelle con `"onlyIf": "single"` solo con una.

#### Roster (`roster.json`)
Una riga per main dichiarato: `name`, `class`, `spec`, `role` (tank/healer/dps), `faction`, `rank` (Raider/Trial). Social e Alt non si mettono.
Classi valide: `warrior paladin hunter rogue priest shaman mage warlock druid`.

#### Progress (`progress.json`)
Per ogni istanza, per ogni boss: la data del primo kill per gilda (`"Nebulah": "2026-10-14"`), oppure `null` se il boss è ancora da fare. `"locked": true` mostra l'istanza come "in arrivo".

#### Loot (`loot.json`)
```json
{ "seasons": [
  { "season": "2", "updated": "2026-10-14", "closed": false,
    "roster": [ { "name": "Aurel", "class": "warrior", "spec": "Protection", "faction": "Nebulah" } ],
    "raids":  [ { "id": "r1", "instance": "Molten Core", "date": "14/10",
                  "awards": [ { "player": "Aurel", "item": "Arma", "cost": 2 } ] } ] }
]}
```
- **Si scrivono solo i pezzi assegnati.** Totali, colonne per serata e ordine di precedenza li calcola il sito.
- Ogni nuova serata va aggiunta in `raids` e diventa una colonna.
- Ogni nuova season si aggiunge **in cima** a `seasons`; quella vecchia prende `"closed": true`.
- **Costo:** 2 = armi, trinket, oggetti di quest · 1 = tutto il resto · 0 = off-spec.

#### Ranghi (`ranks.json`)
Due liste:
- `discord`: `name`, `badge`, `who`, `can`, `grantedBy`;
- `ingame`: `name`, `text`.

Le icone vengono da [lucide.dev/icons](https://lucide.dev/icons): scrivi il nome, ad esempio `shield` o `crown`.

### 4.5 Aggiungere un nuovo gioco in 5 minuti
1. Copia la cartella `content/games/wow-forever/` e rinominala con il nuovo slug, ad esempio `content/games/ffxiv/`.
2. In `game.json` cambia `slug`, `title`, `card`, `hero`, `info`.
3. Cancella i file delle tab che non servono.
4. Metti le immagini in `content/media/sections/ffxiv/`.
5. Fai il commit: la card compare in home e in Giochi, e la pagina `/giochi/ffxiv` esiste.

---

## 5. Immagini
- **Dove:** in `content/media/`, divise per cartella: `art/`, `lore/`, `sections/<slug>/`, `gallery/<slug>/`.
- **Formato:** carica l'originale in PNG o JPG. Lo script `images.mjs` crea le versioni WebP/AVIF in 480, 960 e 1920 px.
- **Nei file:** scrivi sempre `media/…`, ad esempio `"cover": "media/lore/libro-1.png"`.
- **Nomi:** minuscolo, trattini, niente spazi né accenti, ad esempio `molten-core-first-kill.png`.
- **Limiti:** nessun file sopra 100 MB, sito intero sotto 1 GB, video hero sotto 8 MB.
- **Brand:** il logo si usa solo dai file originali in `media/brand/` (ADR-004).

---

## 6. GitHub Actions
Campioni pronti in `ui_kits/website/scripts/`:

| Workflow | File di esempio | Parte… | Fa |
|---|---|---|---|
| **Deploy** | `deploy.workflow.yml` → `.github/workflows/deploy.yml` | a ogni commit su `main`, ogni 6h, a mano, da `repository_dispatch` | sync Drive (se attivo) → validazione → immagini → build → pubblicazione |
| **Raid-Helper** | `sync-raid-helper.workflow.yml` → `.github/workflows/sync-raid-helper.yml` | ogni 30', a mano | scarica gli eventi, scrive `events.json`, fa commit **solo se cambia** (il commit fa ripartire il deploy) |

**Avvio manuale:** scheda **Actions**, scegli il workflow e premi **Run workflow**.
**Se un deploy fallisce (❌):**
1. Apri il run e leggi il passo rosso. Quasi sempre è *Validate* e indica file e riga.
2. Correggi il file e rifai il commit.

Il sito online resta quello precedente finché non c'è un deploy verde.

---

## 7. Segreti e collegamenti

### 7.1 GitHub Secrets e Variables
*Settings → Secrets and variables → Actions*

| Nome | Tipo | Cosa | Dove si prende |
|---|---|---|---|
| `RAIDHELPER_API_KEY` | Secret | chiave API del server | su Discord, comando `/apikey` (solo admin) |
| `DISCORD_SERVER_ID` | Secret | ID del server | Discord → Impostazioni → Avanzate → Modalità sviluppatore, poi clic destro sul server → *Copia ID* |
| `GOOGLE_SERVICE_ACCOUNT` | Secret | JSON del service account | Google Cloud Console (§7.2) |
| `SYNC_DRIVE` | Variable | `true` per attivare la sync Google | — |
| `SITE_URL` | Variable | ad esempio `https://nebula.example` | — |
| `BASE_PATH` | Variable | `/` con dominio proprio, `/nome-repo/` altrimenti | — |

> 🔒 Le chiavi stanno **solo** nei Secrets. Mai nei file, mai nel sito, mai in chat.

### 7.2 Google Drive / Sheets / Docs
1. In Google Cloud Console crea un progetto, abilita le API *Drive*, *Sheets* e *Docs*, poi crea un **Service account** e scarica la chiave JSON.
2. Incolla tutto il JSON nel Secret `GOOGLE_SERVICE_ACCOUNT`.
3. **Condividi** la cartella Drive con l'email del service account (`…@….iam.gserviceaccount.com`), come *Visualizzatore*.
4. Scrivi gli ID dei fogli e dei documenti in `site.config.ts`: l'ID è la parte dell'URL tra `/d/` e `/edit`.

La sync:
- scarica solo i file cambiati;
- converte gli Sheets in JSON e i Docs in Markdown;
- ottimizza le immagini;
- se i dati non passano la validazione, **si ferma senza pubblicare**.

### 7.3 Aggiornamento immediato da Google (facoltativo)
Nello Sheet o nel Doc: *Estensioni → Apps Script*, incolla questo codice e aggiungi un trigger *All'invio modifica*. Il token è un Personal Access Token GitHub fine-grained, limitato al repository, con permesso *Contents: read/write*, salvato nelle proprietà dello script.
```js
function notify() {
  const token = PropertiesService.getScriptProperties().getProperty('GH_TOKEN');
  UrlFetchApp.fetch('https://api.github.com/repos/OWNER/REPO/dispatches', {
    method: 'post', contentType: 'application/json',
    headers: { Authorization: 'Bearer ' + token, Accept: 'application/vnd.github+json' },
    payload: JSON.stringify({ event_type: 'content-updated' })
  });
}
```

### 7.4 Dati in tempo reale (nessuna chiave)
- **Membri e online Discord:** vengono dal link d'invito pubblico, `discord.code` in `site.json`, con cache di 5 minuti.
- **Iscrizioni ai raid:** vengono dall'endpoint pubblico di Raid-Helper per il singolo evento. Se il browser non riesce a leggerlo, la pagina usa l'ultimo snapshot.
- **Sheet "pubblicato sul web" (CSV):** adatto per annunci o stato del server. Si attiva in `site.config.ts` ed è sempre pubblico: niente dati sensibili.

### 7.5 Dominio e percorso
- **Senza dominio** (`utente.github.io/nebula-site`): `BASE_PATH=/nebula-site/`.
- **Con dominio:** crea `public/CNAME` con dentro solo `nebula.example`, imposta `BASE_PATH=/`, poi configura il DNS (record CNAME verso `utente.github.io`) e attiva *Enforce HTTPS* in *Settings → Pages*.

---

## 8. Convenzioni
- **`[[TOKEN]]`** = dato mancante. Il sito lo mostra come badge tratteggiato. Non inventare dati di gioco o di lore: meglio un `[[TOKEN]]` onesto.
- **Firme:** `— L'Oste` (lore e benvenuto), `— Il Presidente` (istituzionale), `— Gli Officers` (sezione). Nessun nome proprio nei testi istituzionali.
- **Voce e lessico:** ADR-005. Massimo due termini di lessico per testo, e ogni testo finisce con il prossimo passo.
- **Commit:** usa messaggi parlanti, ad esempio `roster: +2 trial`, `loot: serata 14/10`, `lore: capitolo II`.
- **File con `_readme`:** leggi la prima riga: spiega il file.
- **File marcati ⚙ generati:** `lore/index.json`, `games/index.json`, `events.json`. Non si modificano a mano.

## 9. Checklist rapide
- **Dopo una serata di raid:** aggiungi la serata in `loot.json` → aggiorna `progress.json` se c'è un first kill → fai il commit. Il calendario si aggiorna da solo.
- **Cambia chi cerchiamo:** in `recruitment.json` cambia la `priority` delle spec (e `wanted` o `targets` se serve) → fai il commit.
- **Nuovo membro nel roster:** aggiungi una riga in `roster.json` → aggiungilo anche nel `roster` della season corrente in `loot.json`.
- **Nuova season:** in `loot.json` aggiungi la season in cima con `roster` e `raids: []`, e metti `"closed": true` alla season precedente.
- **Nuovo capitolo di lore:** crea `lore/NN-titolo.md` e la copertina in `media/lore/` → fai il commit.
