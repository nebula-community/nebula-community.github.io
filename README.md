# Nebula Inn — sito

Sito statico (Astro + React) per GitHub Pages. Tutti i contenuti stanno in `content/`: **la guida completa è in [`GESTIONE-SITO.md`](GESTIONE-SITO.md).**

## Primo avvio in locale
```bash
npm install
npm run dev          # http://localhost:4321
npm run validate     # controlla i file in content/
npm run build        # genera dist/
```
Serve Node 20 o superiore.

## Pubblicare su GitHub Pages
1. Crea un repository e carica tutta questa cartella (branch `main`).
2. Vai in **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. In **Settings → Secrets and variables → Actions → Variables** crea:
   - `SITE_URL`: ad esempio `https://utente.github.io` o `https://nebula.example`;
   - `BASE_PATH`: `/nome-repo/` senza dominio proprio, `/` con un dominio proprio.
4. Fai un commit su `main`: il workflow **Deploy** pubblica il sito in 2–3 minuti.
5. **Dominio proprio (facoltativo):** crea `public/CNAME` con dentro solo il dominio.
6. **Calendario Raid-Helper (facoltativo):** aggiungi i Secrets `RAIDHELPER_API_KEY` e `DISCORD_SERVER_ID`.

## Struttura
```
content/            i contenuti (vedi GESTIONE-SITO.md)
public/media/       immagini servite così come sono
src/pages/          una pagina per rotta (giochi e capitoli generati dai dati)
src/kit/            schermate (React)
src/ds/             componenti del design system Nebula
src/styles/         token, componenti, layout
src/lib/content.mjs lettura di content/ al build
scripts/            validazione e sync Raid-Helper
.github/workflows/  deploy + sync calendario
```

## Limiti noti di questa versione
- **Pagine renderizzate nel browser:** ogni pagina è statica, con titolo, meta, Open Graph e sitemap, ma il contenuto visibile lo disegna React nel browser. I motori di ricerca vedono i meta e il testo di fallback. Il prossimo passo è il rendering lato server delle sezioni testuali.
- **Una sola pagina gioco:** il layout dei giochi è pensato per WoW Forever. Un secondo gioco con tab diverse richiede di generalizzare `src/kit/Games.jsx`.
- **Immagini non ottimizzate:** vengono servite così come sono. Lo script `sharp` per WebP/AVIF non è ancora incluso.
- **Niente Tailwind:** lo stile usa i token CSS del design system (`src/styles/tokens/`) invece di Tailwind.
