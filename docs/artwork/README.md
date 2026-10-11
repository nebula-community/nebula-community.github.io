# Artwork Nebula Inn — bibbia visiva e prompt di generazione

Tutto ciò che serve per produrre le immagini del sito, della Lore e della community **con lo stesso sguardo**: regole di stile, scheda dei personaggi, e un prompt pronto per ogni immagine.

> **Dall’11/10/2026 il sito usa il set rev4** → [`rev4/README.md`](rev4/README.md). La Lore mostra la light novel *La nascita della Nebula Inn*; i prompt usano lo STYLE e le RULES dei concept rev4 della cartella lore e allegano le loro schede come riferimento, e `npm run art` converte e collega le immagini generate ([`manifest.json`](manifest.json)). Per il sito, i file `01`–`03` qui sotto restano come archivio del set precedente; il `03` serve ancora alle testate Lore dei canali Discord (`05`). I file `04` e `05` (community e Discord) non cambiano.

| File | Contenuto |
|---|---|
| **README.md** (questo) | regole di stile, blocchi di prompt, flusso di produzione, registro, decisioni aperte |
| [`01-riferimenti.md`](01-riferimenti.md) | **R-01…R-09** — schede di riferimento (L’Oste, Ines, sala, Dorso, oggetti, Egarim, Runa, Elma, Calco). Si fanno per prime e non si pubblicano |
| [`02-sito.md`](02-sito.md) | **S-01…S-18** — hero, social card, banda Lore, Regolamento, 404, hero di gioco, kit “Tavolo”, segnaposto, istanze; poi card WoW, galleria WoW e quattro slot nuovi |
| [`03-lore-copertine.md`](03-lore-copertine.md) | **L-00…L-E** — prologo, otto Libri, otto Veglie, antefatto, libro intero ed Editto: tutte le uscite di `lore/libri/rev2` |
| [`04-community-discord.md`](04-community-discord.md) | **C-01…C-09** — avatar, splash, emblemi dei ruoli, eventi, sticker, emote (le testate C-03 sono superate da 05) |
| [`05-canali-discord.md`](05-canali-discord.md) | **D-…** — un’immagine per **ogni canale** Discord: community (Benvenuto, Hub, Salotto, Lore, Topics, Richieste, Candidature, Staff) e sezione WoW Forever, con la priorità di pubblicazione |

## 1. In sintesi

**Il look, in una frase.** *Dipinto denso e lofi di una locanda-izakaya di legno e ottone ancorata a una nebulosa viola, illuminata da lanterne ambra e da un solo neon magenta, con un ospite robot dalle ottiche ambra.*

**Le 7 regole che valgono per OGNI immagine** (se una immagine ne rompe una, si rifà):

1. **Al massimo un neon, ed è magenta.** È “l’unico elemento luminoso per composizione” dei token del sito. Niente neon ciano, verde o blu.
2. **La luce vera è ambra** (lanterne, ottiche dell’Oste). **Ombre viola-nere** (`#0B0612`), mai nero piatto.
3. **Dalla vetrata si vede la nebulosa viola** (il Velo): è la firma “siamo dentro la locanda”.
4. **Materia**: legno scuro, ottone, carta (noren, shoji), pittura a olio con grana fine e linee da cel animation anni ’90.
5. **Ogni immagine ospita una presenza**: L’Oste (anche solo le ottiche ambra o una mano), una persona di spalle, o una lampada accesa. Il neon è il punto di richiamo, mai sui volti. **Volti ammessi** (decisione del 02/10/2026), ma con giudizio: 5 copertine su 19 hanno una figura, le altre restano oggetto (§2).
6. **Nessun testo nelle immagini** (lettere, numeri, loghi, insegne leggibili). Titoli, numerali, date e nomi li disegna il sito o Discord. Il marchio si usa solo dai file originali in `public/media/brand/` (ADR-004).
7. **Accogliere, non escludere**: adulti di età, corpi ed etnie diversi, anche persone sole con una tazza; almeno una presenza non umana “normale” (un lavoratore con il grembiule, non un mostro); mai armi in primo piano, pose da battaglia, gruppi di schiena che chiudono il cerchio.

**Come si usa.** (1) Genera R-01…R-04 e scegli UNA versione per ciascuna: da lì in poi sono i riferimenti di volto e luogo. (2) Per ogni immagine copia il blocco “Prompt” del suo ID e il negative qui sotto. (3) Controlla la lista di verifica e salva col nome indicato.

## 2. Cosa hanno detto editore, marketing e community manager

I tre pareri sono stati chiesti prima di scrivere i prompt. Dove si contraddicevano ho scelto così:

| Tema | Parere | Decisione |
|---|---|---|
| **Libri e Veglie** | Editore: i Libri sono “il luogo” (largo, caldo, ambra); le Veglie sono “il gesto” (macro, notturno, indaco-viola, una goccia d’ambra, niente volti) | Adottato in `03-lore-copertine.md` |
| **Testi rev2** | Editore: i testi esistono tutti e le copertine provvisorie ne contraddicevano quattro (L-04, L-06, L-07, L-08) | Tutte le copertine sono riscritte sui testi rev2 e coprono 8 Libri e 8 Veglie (`03-lore-copertine.md`). L-05-ALT eliminata |
| **Nome di film/anime nei prompt** | Tu: “alla Cowboy Bebop”. Marketing: niente nomi di franchise o artisti nei prompt (rischio IP, e i generatori rispondono peggio di una descrizione) | **Nei prompt non compaiono nomi.** Si usa “1990s lofi sci-fi anime, cel-shaded linework, oil-paint texture”. Se vuoi più taglio noir-jazz aggiungi “jazzy noir space-western mood” |
| **Giochi di terzi (WoW)** | Marketing: mai nomi di giochi, fazioni, razze, loghi, simboli, colori di fazione | Le immagini WoW sono “tavolo da locanda in stile fantasy generico”. Nebulah e Nebulaa non ricalcano rosso/blu di fazione |
| **Icona del server** | Marketing: il marchio caldo. CM: L’Oste o lanterna | **Marchio ufficiale** (ADR-004). L’Oste fa da avatar di bot/social/sticker (C-01) |
| **Esplorazione = azzurro** (CM) | Brand: la colorway fredda “Aurora” non si mischia mai con la calda | **Indaco/lavanda spento**, niente verde acqua né azzurro |
| **Persone nelle immagini** | CM: adulti diversi e accoglienti. Editore e CM: meglio oggetti e luoghi, volti solo dopo R25. **Il Presidente (02/10/2026): i volti si possono fare** | **Volti ammessi, 5 copertine su 19** (L-00 Ines, L-06 Runa, L-12 Elma, L-13 Calco, L-15 Egarim), ciascuna con variante oggetto di riserva. Nessun Oste, nessun Finland/Sanchio/Scudi/D. Donut (veto del ritratto). Immagini di accoglienza (C-02, S-06) = adulti diversi, piccoli, naturali e senza posa |
| **Tema chiaro** | Marketing: non invertire le illustrazioni | Restano **scure** anche con il tema chiaro, dentro cornici/ombre. Nessuna versione chiara |
| **Peso** | Marketing: hero ≤250 KB, card ≤80 KB, galleria ≤120 KB | Indicato in ogni scheda come “consegna” |
| **Quanto produrre subito** | Marketing: 6–8 asset P0, il resto a ondate | P0 = 8 immagini pubbliche + 4 schede di riferimento (vedi Registro) |

## 3. Bibbia visiva

### 3.1 Palette (dai token del sito)

| Ruolo | Valore | Uso |
|---|---|---|
| Fondo notte | `#0B0612` · `#110A1A` · `#170F22` · `#1E142C` · `#2A1D3B` | ombre e fondi: sempre viola-nero |
| Ambra (luce chiave) | `#FC7E46` · `#FC8C46` · `#FDA877` | lanterne, ottiche, bagliore del legno |
| Corallo | `#EE4662` | solo tocchi piccoli (ricami, sigilli) |
| Magenta (il neon) | `#9A2A9A` nucleo · `#C45BC4` alone | **l’unico neon** |
| Viola nebulosa | `#7E2AA8` · `#702AA8` · `#A66BD1` | fondale e vetrate |
| Ciano `#5CE1E6` | — | solo micro-indicatori UI, **mai nelle immagini** |

### 3.2 Canone

- **L’Oste** — robot locandiere, volto di **metallo scuro** spazzolato **senza bocca e senza naso**, due ottiche ambra rotonde, veste avorio con obi scuro, piccolo copricapo di stoffa, mani di acciaio e ottone. Voce: calma, accogliente. **Telaio di scorta (ADR-023):** si legge solo dalla linea delle spalle e dall’immobilità, mai come armatura; l’attacco vuoto all’anca sinistra, di metallo più chiaro, nelle scene di oggi si vede ma è piccolo e mai punto focale; **nelle scene del Libro IV non si vede**; nessuna arma in nessuna immagine. (Scheda: R-01.)
- **Egarim** — persona viva, **nano** (decisione del Presidente, 02/10/2026): statura bassa, corporatura magra, occhi chiari, doppia palpebra discreta, guanti consumati sul pollice; **niente barba né cliché del nano fantasy**. La statura è nel canone dal 02/10/2026 (§8). (Scheda: R-06.)
- **Ines** — gruista dopo un turno: dita ancora curve intorno a una leva, borsa con la fibbia e la custodia rigida della sua tazza, casco da gruista. **Il testo non fissa età, carnagione o capelli** (R03: «non si fissano età numeriche»): la scheda R-02 v0.2 li lascia aperti. Il cappotto rattoppato è di Runa. Compare con il volto in L-00 (prologo).
- **La Locanda** — sala lunga di travi scure, banco con rame e ottone, noren indaco, shoji, lanterne di carta a varie altezze, vetrata ad arco sulla nebulosa. Ingresso con vestibolo e sedia imbottita. (R-03.)
- **Il Dorso** — la “spalla” dell’asteroide dove sta la locanda. **Concordia** (ADR-022) — città verticale di circa trentamila abitanti sotto **una** cupola trasparente: torri a balconi di legno su strutture d’ottone brunito (**niente tetti a pagoda**), passerelle sospese, tram con finestre gialle che entrano nella roccia, moli a più altezze, vapore, neon solo in fasce contenute. La pioggia è artificiale e cade **solo dentro la cupola**; la casa sta sopra il bordo, in un volume pressurizzato proprio. **Il Velo** — la piega violetta della nebulosa. (R-04.)
- **Oggetti** — *dai testi rev2*: la custodia scura con due toppe chiare e la cinghia riparata (Veglie II, VI, VIII), la tazza color sabbia con due ammaccature (Ines), il casco da gruista, la sedia scura con la gamba rilegata a cordino (Veglia IV), il cappotto di Runa. *Dal concept visivo, non dai testi*: lanterna di carta e ottone, noren, shoji, ferma-porta, cornice neon geometrica **senza lettere**. Il colore del cuscino non è fissato; la tazza «scheggiata» e il noren «a mezzaluna» delle prime versioni non esistono nei testi. (R-05.)
- Il neon è sempre una **cornice geometrica astratta o un tubo sottile**, mai una scritta: non ricreare il marchio a spirale.

### 3.3 Composizione e zone di sicurezza

- Ogni scheda indica **dove il sito mette il testo** e quindi dove l’immagine deve restare calma. Regola generale: il testo trova sempre una zona scura e a basso contrasto.
- **Copertine Lore 3:4**: il titolo sta *sotto* la card; il numerale (corpo 40 px) in basso a sinistra; la sfumatura scura parte dal 45% dell’altezza. Quindi: soggetto nella banda **28–68%**, terzo basso scuro e angolo basso-sinistro vuoto. Così regge anche il ritaglio centrale 1.91:1 che i social ricavano dal 3:4.
- Il centro di ogni immagine deve funzionare **a 160 px di larghezza** (prova da miniatura).
- Margine 8–10% sui bordi per i ritagli (social, dolly della hero, angoli arrotondati delle card).

### 3.4 Cosa non scrivere mai in un prompt

Nomi di giochi, aziende, franchise, personaggi, fazioni, razze o stemmi di terzi; “nello stile di [artista vivente]”; “Cowboy Bebop”, “Ghibli”, “Blizzard”, “Azeroth”, “Orda/Alleanza” con simboli; armi o armature iconiche. Il nome del gioco compare solo nel testo del sito, mai nell’immagine. Il sito deve dichiarare “community non affiliata”.

## 4. Blocchi di prompt

Ogni prompt dei file è già completo. Questi sono i blocchi che lo compongono, nel caso tu voglia scriverne di nuovi: **prefisso di stile + scena + luce + chiusura**. Se cambi un blocco qui, va cambiato anche nei prompt già scritti (sono copiati per intero perché ogni generatore vuole una sola stringa).

**Prefisso di stile (scene con la locanda)**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass.
```

**Prefisso breve (schede, oggetti, emblemi, still life)**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework.
```

**Luce A — di default (ambra, un neon magenta)**

```text
Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood.
```

**Luce V — Veglie e scene notturne (indaco-viola, una goccia d’ambra)**

```text
Lighting: low night light, indigo-violet (#2A1D3B to #7E2AA8) dominant, a single small warm amber glow (a lantern or the optics of the innkeeper) as the only warm note, and ONE soft magenta neon glow (#C45BC4) as the only neon, deep violet-black shadows (#0B0612, never pure black). Fine film grain, painterly brushwork, intimate quiet composition, tender and slightly sad mood.
```

**Chiusura (sempre)**

```text
No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**L’Oste (da inserire nelle scene con lui)**

```text
the Innkeeper, a slender humanoid robot with a smooth dark brushed-metal face with NO mouth and NO nose, two round softly glowing amber optics (#FDA877), brushed-steel neck and jointed brass-and-steel hands, wearing a loose off-white linen kimono with a dark indigo obi sash and a small white cloth cap
```

**Ines (v0.1, da confermare)**

```text
Ines, an adult woman, a crane operator at the end of a long shift, tired but steady, hair tied back, a worn travel bag with a buckle across her body, fingers still slightly curled as if around a lever
```

**Negative standard**

```text
text, letters, words, numbers, logo, watermark, signature, caption, UI, readable signs, extra neon colors, cyan neon, green neon, blue neon, pure black shadows, flat vector art, 3D render, plastic skin, photograph, oversaturated, harsh flash, fanservice, weapons held in hands, blood, skulls, soldiers, chibi, crowd of backs forming a closed circle, deformed hands, extra fingers, duplicated faces, blurry, low resolution, jpeg artifacts
```

## 5. Flusso di produzione

1. **Scegli il generatore** e fissa la versione del modello (cambiarla a metà serie rompe la coerenza). Se non l’hai già deciso, vedi “Da decidere”.
2. **Riferimenti prima.** R-01 (L’Oste), R-02 (Ines), R-03 (sala), R-04 (Dorso/Concordia). Quando ne hai scelte e rinominate le versioni definitive, **allegale come riferimento** (character/style reference, IP-Adapter o immagine allegata) in ogni generazione successiva. Aggiungi anche `002-la-nebulosa-a-cena.webp` e `001-a-la-soglia-fra-due-luci.webp` come riferimento di *stile*.
3. **Genera a grande formato**: il “master” indicato in ogni scheda (o il massimo del tool, poi upscale). Fai almeno 4 candidati e scegli.
4. **Verifica** con la lista qui sotto.
5. **Post-produzione** (a mano o con script): ridurre un po’ il rumore (la grana pittorica comprime male), ritagli, esportare in WebP/AVIF alla misura “consegna”. Nessun testo né marchio nell’immagine; il marchio si sovrappone solo dove serve (OG) dai file originali.
6. **Salva col nome della scheda**, annota la riga nel Registro, poi aggiorna il file di contenuto indicato (vedi “Dove va”).
7. **Tieni traccia** di prompt, modello, versione, seed e data: serve per eventuali contestazioni e per rifare l’immagine uguale.

**Adattamento al generatore** (indicativo): *Midjourney* — aggiungi `--ar`, usa i riferimenti con `--cref` (personaggi) e `--sref` (stile), il negative va in `--no`. *Flux/SDXL/ComfyUI* — usa il negative separato e un IP-Adapter/reference per i personaggi. *GPT-image/Gemini* — allega i riferimenti nella stessa conversazione e usa il formato più vicino, poi ritaglia.

**Lista di verifica per ogni immagine**

- [ ] Nessun testo, numero, logo o scritta leggibile (anche su insegne, libri, fogli)
- [ ] Al massimo UN neon, magenta; nessun ciano/verde/blu luminoso
- [ ] Ombre viola-nere, niente nero piatto `#000`
- [ ] Nebulosa viola visibile da una vetrata (dove la scena la prevede)
- [ ] Ogni figura ha mani e dita sensate; L’Oste ha **nessuna bocca** e due ottiche ambra
- [ ] Zona calma per il testo rispettata (prova con il gradiente reale del sito)
- [ ] Reggere a 160 px di larghezza e a ritaglio 1.91:1 (se è una copertina)
- [ ] Nessun riferimento riconoscibile a un gioco o franchise di terzi
- [ ] Peso nei limiti della “consegna”

## 6. Immagini già presenti: tenere o sostituire

Oggi **ogni immagine è riusata in più punti**, e questo fa sembrare il sito ripetitivo. I nuovi prompt danno a ogni slot la sua immagine.

| File in `public/media/art/` | Dove è usata oggi | Verdetto |
|---|---|---|
| `001-a-la-soglia-fra-due-luci.webp` | Benvenuto in home · copertina Libro II | **Tenere per il benvenuto in home**; L-03 dà al Libro II la sua |
| `001-c-citta-verticale.webp` | Copertina Prologo | Da archivio/galleria; la sostituisce L-00 |
| `002-la-nebulosa-a-cena.webp` | Pagina Locanda · copertina Libro I | **Tenere per la Locanda**; L-01 dà al Libro I la sua |
| `004-b-il-neon-fra-noi.webp` | Card WoW · hero WoW · copertina Veglia I·V | **Tenere per la card WoW**; S-06 e L-02 la sostituiscono altrove |
| `005-la-citta-nel-vetro.webp` | Banda Lore in home · Regolamento · Libro III · istanza Onyxia | Da archivio/galleria; la sostituiscono S-03, S-04, L-05, S-09b |
| `009-b-geometria-ospitalita.webp` | Editto · card “Prossimo tavolo” · Veglia II·V | Da archivio/galleria; la sostituiscono L-E, S-08, L-04 |
| `asteroide1.webp` | Veglia III·V | **Tenere** come riferimento di R-04 e per la galleria; L-06 la sostituisce |
| `concept-nebula-inn.webp` | Hero · social card · istanza Molten Core · Libro IV | **Va tolta dalle pagine**: contiene la scritta “TAVERNULA”, in contrasto con la regola 6. La sostituiscono S-01, S-02, S-09a, L-07 |
| `kepler-10c-001.webp` | Veglia IV·V | Fuori palette (cielo arancio, mare blu, niente viola né neon): **non usarla come riferimento di stile**. Può restare come illustrazione del mondo da cui arrivano i Nomadi |

## 7. Registro

Segna qui lo stato. Priorità: **P0** apertura (8 immagini pubbliche + schede di riferimento) · **P1** subito dopo · **P2** quando serve. Stato: ☐ da fare · ◐ in lavorazione · ☑ pubblicata.

| ID | Immagine | Prio | Formato | File di destinazione | Stato |
|---|---|---|---|---|---|
| [R-01](01-riferimenti.md) | Scheda personaggio — L’Oste | P0 | 16:9 | `docs/artwork/ref/R-01-oste-sheet.png` | ☐ |
| [R-02](01-riferimenti.md) | Scheda personaggio — Ines (v0.1, da confermare) | P0 | 16:9 | `docs/artwork/ref/R-02-ines-sheet.png` | ☐ |
| [R-03](01-riferimenti.md) | Riferimento architettura — La sala | P0 | 16:9 | `docs/artwork/ref/R-03-sala-master.png` | ☐ |
| [R-04](01-riferimenti.md) | Riferimento esterno — Il Dorso e Concordia | P0 | 16:9 | `docs/artwork/ref/R-04-dorso-concordia.png` | ☐ |
| [R-05](01-riferimenti.md) | Tavola degli oggetti ricorrenti | P1 | 16:9 | `docs/artwork/ref/R-05-props.png` | ☐ |
| [R-06](01-riferimenti.md) | Scheda personaggio — Egarim (nano) | P1 | 16:9 | `docs/artwork/ref/R-06-egarim-sheet.png` | ☐ |
| [R-07](01-riferimenti.md) | Scheda personaggio — Runa | P1 | 16:9 | `docs/artwork/ref/R-07-runa-sheet.png` | ☐ |
| [R-08](01-riferimenti.md) | Scheda personaggio — Elma | P1 | 16:9 | `docs/artwork/ref/R-08-elma-sheet.png` | ☐ |
| [R-09](01-riferimenti.md) | Scheda personaggio — Calco | P1 | 16:9 | `docs/artwork/ref/R-09-calco-sheet.png` | ☐ |
| [S-01](02-sito.md) | Hero della home | P0 | 16:9 | `public/media/art/hero-la-locanda-sul-dorso.webp` | ☐ |
| [S-02](02-sito.md) | Immagine social (Open Graph) | P0 | 1.91:1 | `public/media/art/og-la-porta-sempre-aperta.jpg` | ☐ |
| [S-03](02-sito.md) | Fascia “La storia” in home | P0 | 16:9 | `public/media/art/home-lore-concordia-dal-balcone.webp` | ☐ |
| [S-04](02-sito.md) | Il Regolamento | P1 | 4:3 | `public/media/art/regolamento-il-libro-e-la-bilancia.webp` | ☐ |
| [S-05](02-sito.md) | Pagina 404 | P1 | 16:9 | `public/media/art/404-il-corridoio-delle-porte.webp` | ☐ |
| [S-06](02-sito.md) | Hero di WoW Forever (“Il tavolo delle mappe”) | P1 | 16:9 | `public/media/art/wow-forever-il-tavolo-delle-mappe.webp` | ☐ |
| [S-07](02-sito.md) | Kit “Tavolo” per ogni nuovo gioco (modello) | P2 | card 16:10 · hero 16:9 | `public/media/art/<slug>-card.webp · <slug>-hero.webp` | ☐ |
| [S-08](02-sito.md) | “Prossimo tavolo” (card segnaposto) | P1 | 16:10 | `public/media/art/prossimo-tavolo-il-posto-apparecchiato.webp` | ☐ |
| [S-09a](02-sito.md) | Istanza — “La forgia sotto la roccia” (Molten Core) | P2 | 2:1 | `public/media/art/progress-la-forgia-sotto-la-roccia.webp` | ☐ |
| [S-09b](02-sito.md) | Istanza — “Il nido nero” (Onyxia) | P2 | 2:1 | `public/media/art/progress-il-nido-nero.webp` | ☐ |
| [S-09c](02-sito.md) | Istanza — “La porta chiusa” (istanza in arrivo) | P2 | 2:1 | `public/media/art/progress-la-porta-chiusa.webp` | ☐ |
| [S-10](02-sito.md) | Card di WoW Forever (alternativa, centro libero per il logo) | P2 | 16:10 | `public/media/art/wow-forever-card-il-tavolo-da-quaranta.webp` | ☐ |
| [S-11](02-sito.md) | Galleria WoW 1 — La sala dopo la serata | P2 | 4:3 | `public/media/gallery/wow-forever/90-la-sala-dopo-la-serata.webp` | ☐ |
| [S-12](02-sito.md) | Galleria WoW 2 — Un tavolo fa posto | P2 | 4:3 | `public/media/gallery/wow-forever/91-un-tavolo-fa-posto.webp` | ☐ |
| [S-13](02-sito.md) | Galleria WoW 3 — Il tavolo delle mappe, dopo | P2 | 4:3 | `public/media/gallery/wow-forever/92-il-tavolo-delle-mappe-dopo.webp` | ☐ |
| [S-14](02-sito.md) | Galleria WoW 4 — La vetrata a ora di chiusura | P2 | 4:3 | `public/media/gallery/wow-forever/93-la-vetrata-a-ora-di-chiusura.webp` | ☐ |
| [S-15](02-sito.md) | Unisciti — La soglia vista da dentro *(nuovo)* | P1 | 4:3 | `public/media/art/unisciti-il-noren-alla-soglia.webp` | ☐ |
| [S-16](02-sito.md) | Chi siamo — Il tavolo grande *(nuovo)* | P2 | 16:9 | `public/media/art/chi-siamo-il-tavolo-grande.webp` | ☐ |
| [S-17](02-sito.md) | Indice Lore — Il Dorso dall'alto *(nuovo)* | P2 | 16:9 | `public/media/art/lore-il-dorso-dall-alto.webp` | ☐ |
| [S-18](02-sito.md) | Eventi — Il tavolo apparecchiato *(nuovo)* | P2 | 16:9 | `public/media/art/eventi-il-tavolo-apparecchiato.webp` | ☐ |
| [L-00](03-lore-copertine.md) | Prologo — Una notte di deposito | P0 | 3:4 | `public/media/lore/lore-00-una-notte-di-deposito.webp` | ☐ |
| [L-01](03-lore-copertine.md) | Libro I — La sala che non chiude mai | P0 | 3:4 | `public/media/lore/lore-01-la-sala-che-non-chiude-mai.webp` | ☐ |
| [L-02](03-lore-copertine.md) | Veglia I — Una richiesta possibile | P1 | 3:4 | `public/media/lore/lore-02-una-richiesta-possibile.webp` | ☐ |
| [L-03](03-lore-copertine.md) | Libro II — Il permesso di andarsene | P1 | 3:4 | `public/media/lore/lore-03-il-permesso-di-andarsene.webp` | ☐ |
| [L-04](03-lore-copertine.md) | Veglia II — Il posto lasciato libero | P1 | 3:4 | `public/media/lore/lore-04-il-posto-lasciato-libero.webp` | ☐ |
| [L-05](03-lore-copertine.md) | Libro III — Le case spente | P1 | 3:4 | `public/media/lore/lore-05-le-case-spente.webp` | ☐ |
| [L-06](03-lore-copertine.md) | Veglia III — Il bucato delle rotte | P1 | 3:4 | `public/media/lore/lore-06-il-bucato-delle-rotte.webp` | ☐ |
| [L-07](03-lore-copertine.md) | Libro IV — Il giro delle lanterne | P1 | 3:4 | `public/media/lore/lore-07-il-giro-delle-lanterne.webp` | ☐ |
| [L-08](03-lore-copertine.md) | Veglia IV — La sedia rammendata | P1 | 3:4 | `public/media/lore/lore-08-la-sedia-rammendata.webp` | ☐ |
| [L-09](03-lore-copertine.md) | Libro V — Il primo inverno | P1 | 3:4 | `public/media/lore/lore-09-il-primo-inverno.webp` | ☐ |
| [L-10](03-lore-copertine.md) | Veglia V — Il turno inverso | P1 | 3:4 | `public/media/lore/lore-10-il-turno-inverso.webp` | ☐ |
| [L-11](03-lore-copertine.md) | Libro VI — Il filo e il nodo | P1 | 3:4 | `public/media/lore/lore-11-il-filo-e-il-nodo.webp` | ☐ |
| [L-12](03-lore-copertine.md) | Veglia VI — Il tavolo senza parole | P1 | 3:4 | `public/media/lore/lore-12-il-tavolo-senza-parole.webp` | ☐ |
| [L-13](03-lore-copertine.md) | Libro VII — La radice | P1 | 3:4 | `public/media/lore/lore-13-la-radice.webp` | ☐ |
| [L-14](03-lore-copertine.md) | Veglia VII — La prima pentola del mattino | P1 | 3:4 | `public/media/lore/lore-14-la-prima-pentola-del-mattino.webp` | ☐ |
| [L-15](03-lore-copertine.md) | Libro VIII — La rotta bassa | P1 | 3:4 | `public/media/lore/lore-15-la-rotta-bassa.webp` | ☐ |
| [L-16](03-lore-copertine.md) | Veglia VIII — La casa dopo le voci | P1 | 3:4 | `public/media/lore/lore-16-la-casa-dopo-le-voci.webp` | ☐ |
| [L-A](03-lore-copertine.md) | Antefatto — La prima notte della Nebula Inn | P2 | 3:4 | `public/media/lore/lore-a-la-prima-notte-della-nebula-inn.webp` | ☐ |
| [L-B](03-lore-copertine.md) | Copertina del libro — La Rotta Bassa | P0 | 3:4 + variante 16:9 | `public/media/lore/la-rotta-bassa-copertina.webp` | ☐ |
| [L-E](03-lore-copertine.md) | L’Editto della Locanda | P1 | 3:2 | `public/media/lore/editto-il-rotolo-sul-leggio.webp` | ☐ |
| [C-01](04-community-discord.md) | Avatar de L’Oste | P0 | 1:1 | `docs/artwork/export/discord/c01-avatar-oste.png` | ☐ |
| [C-02](04-community-discord.md) | Splash di invito e banner del server | P0 | 16:9 | `docs/artwork/export/discord/c02-splash-invito.png` | ☐ |
| [C-03-benvenuto](04-community-discord.md) | Header #benvenuto *(superata da 05)* | P1 | 4:1 | `docs/artwork/export/discord/c03-benvenuto.png` | ☐ |
| [C-03-presentati](04-community-discord.md) | Header #presentati *(superata da 05)* | P1 | 4:1 | `docs/artwork/export/discord/c03-presentati.png` | ☐ |
| [C-03-regole](04-community-discord.md) | Header #regole *(superata da 05)* | P1 | 4:1 | `docs/artwork/export/discord/c03-regole.png` | ☐ |
| [C-03-annunci](04-community-discord.md) | Header #annunci *(superata da 05)* | P1 | 4:1 | `docs/artwork/export/discord/c03-annunci.png` | ☐ |
| [C-03-fuoco-acceso](04-community-discord.md) | Header vocale “Il Fuoco acceso” *(superata da 05)* | P1 | 4:1 | `docs/artwork/export/discord/c03-fuoco-acceso.png` | ☐ |
| [C-03-fuoco-spento](04-community-discord.md) | Header vocale “Il Fuoco spento” (variante) *(superata da 05)* | P1 | 4:1 | `docs/artwork/export/discord/c03-fuoco-spento.png` | ☐ |
| [C-04-ospite](04-community-discord.md) | Emblema — Ospite | P1 | 1:1 | `docs/artwork/export/discord/c04-emblema-ospite.png` | ☐ |
| [C-04-recluta](04-community-discord.md) | Emblema — Recluta | P1 | 1:1 | `docs/artwork/export/discord/c04-emblema-recluta.png` | ☐ |
| [C-04-membro](04-community-discord.md) | Emblema — Membro | P1 | 1:1 | `docs/artwork/export/discord/c04-emblema-membro.png` | ☐ |
| [C-04-ufficiale](04-community-discord.md) | Emblema — Ufficiale | P1 | 1:1 | `docs/artwork/export/discord/c04-emblema-ufficiale.png` | ☐ |
| [C-04-gm](04-community-discord.md) | Emblema — GM | P1 | 1:1 | `docs/artwork/export/discord/c04-emblema-gm.png` | ☐ |
| [C-04-raider](04-community-discord.md) | Emblema — Raider | P1 | 1:1 | `docs/artwork/export/discord/c04-emblema-raider.png` | ☐ |
| [C-04-trial](04-community-discord.md) | Emblema — Trial | P1 | 1:1 | `docs/artwork/export/discord/c04-emblema-trial.png` | ☐ |
| [C-04-social](04-community-discord.md) | Emblema — Social | P1 | 1:1 | `docs/artwork/export/discord/c04-emblema-social.png` | ☐ |
| [C-04-alt](04-community-discord.md) | Emblema — Alt | P1 | 1:1 | `docs/artwork/export/discord/c04-emblema-alt.png` | ☐ |
| [C-04-inattivo](04-community-discord.md) | Emblema — Inattivo | P1 | 1:1 | `docs/artwork/export/discord/c04-emblema-inattivo.png` | ☐ |
| [C-05](04-community-discord.md) | Copertina evento — “La sala comune” (tavola base) | P1 | 16:9 con zona sicura 2:1 | `docs/artwork/export/discord/c05-evento-sala-comune.png` | ☐ |
| [C-06-brindisi](04-community-discord.md) | Sticker “Brindisi” | P1 | 1:1 | `docs/artwork/export/discord/c06-sticker-brindisi.png` | ☐ |
| [C-06-inchino](04-community-discord.md) | Sticker “Inchino” | P1 | 1:1 | `docs/artwork/export/discord/c06-sticker-inchino.png` | ☐ |
| [C-06-servito](04-community-discord.md) | Sticker “Servito” | P1 | 1:1 | `docs/artwork/export/discord/c06-sticker-servito.png` | ☐ |
| [C-06-dorme](04-community-discord.md) | Sticker “Dorme” | P1 | 1:1 | `docs/artwork/export/discord/c06-sticker-dorme.png` | ☐ |
| [C-06-lanterna](04-community-discord.md) | Sticker “Lanterna” | P1 | 1:1 | `docs/artwork/export/discord/c06-sticker-lanterna.png` | ☐ |
| [C-07-cin-cin](04-community-discord.md) | Emote “Cin cin” | P1 | 1:1 | `docs/artwork/export/discord/c07-emote-cin-cin.png` | ☐ |
| [C-07-grazie](04-community-discord.md) | Emote “Grazie” | P1 | 1:1 | `docs/artwork/export/discord/c07-emote-grazie.png` | ☐ |
| [C-07-cuore-lanterna](04-community-discord.md) | Emote “Cuore-lanterna” | P1 | 1:1 | `docs/artwork/export/discord/c07-emote-cuore-lanterna.png` | ☐ |
| [C-07-tazza](04-community-discord.md) | Emote “Tazza” | P1 | 1:1 | `docs/artwork/export/discord/c07-emote-tazza.png` | ☐ |
| [C-07-zzz](04-community-discord.md) | Emote “Zzz” | P1 | 1:1 | `docs/artwork/export/discord/c07-emote-zzz.png` | ☐ |
| [C-07-sbuffa](04-community-discord.md) | Emote “Sbuffa” | P1 | 1:1 | `docs/artwork/export/discord/c07-emote-sbuffa.png` | ☐ |
| [C-07-ciao](04-community-discord.md) | Emote “Ciao” | P1 | 1:1 | `docs/artwork/export/discord/c07-emote-ciao.png` | ☐ |
| [C-07-ok](04-community-discord.md) | Emote “Va bene” | P1 | 1:1 | `docs/artwork/export/discord/c07-emote-ok.png` | ☐ |
| [C-08](04-community-discord.md) | Immagine di benvenuto per messaggio privato | P1 | 5:2 | `docs/artwork/export/discord/c08-benvenuto-dm.png` | ☐ |
| [C-09](04-community-discord.md) | Banner social (modello unico) | P2 | 16:9 | `docs/artwork/export/discord/c09-banner-social.png` | ☐ |
| [D-BEN-inizia-qui](05-canali-discord.md) | Canale `inizia-qui` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/ben-inizia-qui.png` | ☐ |
| [D-BEN-la-locanda](05-canali-discord.md) | Canale `la-locanda` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/ben-la-locanda.png` | ☐ |
| [D-BEN-editto-della-locanda](05-canali-discord.md) | Canale `editto-della-locanda` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/ben-editto-della-locanda.png` | ☐ |
| [D-BEN-regolamento](05-canali-discord.md) | Canale `regolamento` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/ben-regolamento.png` | ☐ |
| [D-BEN-statuto](05-canali-discord.md) | Canale `statuto` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/ben-statuto.png` | ☐ |
| [D-BEN-ruoli](05-canali-discord.md) | Canale `ruoli` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/ben-ruoli.png` | ☐ |
| [D-BEN-leveling](05-canali-discord.md) | Canale `leveling` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/ben-leveling.png` | ☐ |
| [D-BEN-faq](05-canali-discord.md) | Canale `faq` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/ben-faq.png` | ☐ |
| [D-BEN-guida](05-canali-discord.md) | Canale `guida` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/ben-guida.png` | ☐ |
| [D-BEN-links](05-canali-discord.md) | Canale `links` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/ben-links.png` | ☐ |
| [D-BEN-supportaci](05-canali-discord.md) | Canale `supportaci` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/ben-supportaci.png` | ☐ |
| [D-HUB-annunci](05-canali-discord.md) | Canale `annunci` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/hub-annunci.png` | ☐ |
| [D-HUB-bacheca-degli-osannati](05-canali-discord.md) | Canale `bacheca-degli-osannati` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/hub-bacheca-degli-osannati.png` | ☐ |
| [D-HUB-reputazione](05-canali-discord.md) | Canale `reputazione` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/hub-reputazione.png` | ☐ |
| [D-HUB-presentati](05-canali-discord.md) | Canale `presentati` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/hub-presentati.png` | ☐ |
| [D-HUB-al-bancone](05-canali-discord.md) | Canale `al-bancone` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/hub-al-bancone.png` | ☐ |
| [D-HUB-al-tavolo-meme](05-canali-discord.md) | Canale `al-tavolo-meme` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/hub-al-tavolo-meme.png` | ☐ |
| [D-HUB-al-tavolo-nsfw](05-canali-discord.md) | Canale `al-tavolo-nsfw` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/hub-al-tavolo-nsfw.png` | ☐ |
| [D-HUB-suggerimenti](05-canali-discord.md) | Canale `suggerimenti` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/hub-suggerimenti.png` | ☐ |
| [D-HUB-off-topics](05-canali-discord.md) | Canale `off-topics` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/hub-off-topics.png` | ☐ |
| [D-SAL-generale](05-canali-discord.md) | Canale `Generale` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/sal-generale.png` | ☐ |
| [D-SAL-adulti](05-canali-discord.md) | Canale `Adulti` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/sal-adulti.png` | ☐ |
| [D-SAL-musica](05-canali-discord.md) | Canale `Musica` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/sal-musica.png` | ☐ |
| [D-SAL-assente](05-canali-discord.md) | Canale `Assente` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/sal-assente.png` | ☐ |
| [D-LOR-00](05-canali-discord.md) | Canale `lore│00-prologo` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/lor-00.png` | ☐ |
| [D-LOR-01](05-canali-discord.md) | Canale `lore│01-la-sala-che-non-chiude-mai` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/lor-01.png` | ☐ |
| [D-LOR-02](05-canali-discord.md) | Canale `lore│02-il-permesso-di-andarsene` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/lor-02.png` | ☐ |
| [D-LOR-03](05-canali-discord.md) | Canale `lore│03-le-case-spente` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/lor-03.png` | ☐ |
| [D-LOR-04](05-canali-discord.md) | Canale `lore│04-il-giro-delle-lanterne` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/lor-04.png` | ☐ |
| [D-LOR-05](05-canali-discord.md) | Canale `lore│05-il-primo-inverno` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/lor-05.png` | ☐ |
| [D-LOR-06](05-canali-discord.md) | Canale `lore│06-il-filo-e-il-nodo` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/lor-06.png` | ☐ |
| [D-LOR-07](05-canali-discord.md) | Canale `lore│07-la-radice` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/lor-07.png` | ☐ |
| [D-LOR-08](05-canali-discord.md) | Canale `lore│08-la-rotta-bassa` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/lor-08.png` | ☐ |
| [D-TOP-istruzioni](05-canali-discord.md) | Canale `topic│istruzioni` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/top-istruzioni.png` | ☐ |
| [D-TOP-bacheca-delle-imprese](05-canali-discord.md) | Canale `topic│bacheca-delle-imprese` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/top-bacheca-delle-imprese.png` | ☐ |
| [D-TOP-giochi-gratis](05-canali-discord.md) | Canale `topic│giochi-gratis` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/top-giochi-gratis.png` | ☐ |
| [D-TOP-giochi-in-offerta](05-canali-discord.md) | Canale `topic│giochi-in-offerta` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/top-giochi-in-offerta.png` | ☐ |
| [D-TOP-drivers](05-canali-discord.md) | Canale `topic│drivers` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/top-drivers.png` | ☐ |
| [D-TOP-piattaforme-di-sviluppo](05-canali-discord.md) | Canale `topic│piattaforme-di-sviluppo` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/top-piattaforme-di-sviluppo.png` | ☐ |
| [D-TOP-world-of-warcraft](05-canali-discord.md) | Canale `topic│world-of-warcraft` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/top-world-of-warcraft.png` | ☐ |
| [D-RIC-istruzioni](05-canali-discord.md) | Canale `richiesta│istruzioni` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/ric-istruzioni.png` | ☐ |
| [D-RIC-aggiunta-compleanno](05-canali-discord.md) | Canale `richiesta│aggiunta-compleanno` | P2 | 16:9 | `docs/artwork/export/discord/canali/ric-aggiunta-compleanno.png` | ☐ |
| [D-RIC-nuovo-topic](05-canali-discord.md) | Canale `richiesta│nuovo-topic` | P2 | 16:9 | `docs/artwork/export/discord/canali/ric-nuovo-topic.png` | ☐ |
| [D-RIC-nuova-sezione](05-canali-discord.md) | Canale `richiesta│nuova-sezione` | P2 | 16:9 | `docs/artwork/export/discord/canali/ric-nuova-sezione.png` | ☐ |
| [D-RIC-evento](05-canali-discord.md) | Canale `richiesta│evento` | P2 | 16:9 | `docs/artwork/export/discord/canali/ric-evento.png` | ☐ |
| [D-RIC-bot](05-canali-discord.md) | Canale `richiesta│bot` | P2 | 16:9 | `docs/artwork/export/discord/canali/ric-bot.png` | ☐ |
| [D-CAN-istruzioni](05-canali-discord.md) | Canale `candidatura│istruzioni` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/can-istruzioni.png` | ☐ |
| [D-CAN-moderatore](05-canali-discord.md) | Canale `candidatura│moderatore` | P2 | 16:9 | `docs/artwork/export/discord/canali/can-moderatore.png` | ☐ |
| [D-CAN-mentore](05-canali-discord.md) | Canale `candidatura│mentore` | P2 | 16:9 | `docs/artwork/export/discord/canali/can-mentore.png` | ☐ |
| [D-CAN-curatore-eventi](05-canali-discord.md) | Canale `candidatura│curatore-eventi` | P2 | 16:9 | `docs/artwork/export/discord/canali/can-curatore-eventi.png` | ☐ |
| [D-CAN-curatore-social](05-canali-discord.md) | Canale `candidatura│curatore-social` | P2 | 16:9 | `docs/artwork/export/discord/canali/can-curatore-social.png` | ☐ |
| [D-CAN-tecnico](05-canali-discord.md) | Canale `candidatura│tecnico` | P2 | 16:9 | `docs/artwork/export/discord/canali/can-tecnico.png` | ☐ |
| [D-CAN-creatore-contenuti](05-canali-discord.md) | Canale `candidatura│creatore-contenuti` | P2 | 16:9 | `docs/artwork/export/discord/canali/can-creatore-contenuti.png` | ☐ |
| [D-CAN-caposezione](05-canali-discord.md) | Canale `candidatura│caposezione` | P2 | 16:9 | `docs/artwork/export/discord/canali/can-caposezione.png` | ☐ |
| [D-CAN-ufficiale-di-sezione](05-canali-discord.md) | Canale `candidatura│ufficiale-di-sezione` | P2 | 16:9 | `docs/artwork/export/discord/canali/can-ufficiale-di-sezione.png` | ☐ |
| [D-STF-sistema](05-canali-discord.md) | Canale `staff│sistema` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/stf-sistema.png` | ☐ |
| [D-STF-roadmap-interna](05-canali-discord.md) | Canale `staff│roadmap-interna` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/stf-roadmap-interna.png` | ☐ |
| [D-STF-faq-interna](05-canali-discord.md) | Canale `staff│faq-interna` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/stf-faq-interna.png` | ☐ |
| [D-STF-chat-cofondatori](05-canali-discord.md) | Canale `staff│chat-cofondatori` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/stf-chat-cofondatori.png` | ☐ |
| [D-STF-chat-curatori-social](05-canali-discord.md) | Canale `staff│chat-curatori-social` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/stf-chat-curatori-social.png` | ☐ |
| [D-STF-chat-curatori-eventi](05-canali-discord.md) | Canale `staff│chat-curatori-eventi` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/stf-chat-curatori-eventi.png` | ☐ |
| [D-STF-chat-moderatori](05-canali-discord.md) | Canale `staff│chat-moderatori` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/stf-chat-moderatori.png` | ☐ |
| [D-STF-chat-mentori](05-canali-discord.md) | Canale `staff│chat-mentori` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/stf-chat-mentori.png` | ☐ |
| [D-STF-chat-tecnici](05-canali-discord.md) | Canale `staff│chat-tecnici` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/stf-chat-tecnici.png` | ☐ |
| [D-STF-chat-debug](05-canali-discord.md) | Canale `staff│chat-debug` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/stf-chat-debug.png` | ☐ |
| [D-STF-chat-creatori-contenuti](05-canali-discord.md) | Canale `staff│chat-creatori-contenuti` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/stf-chat-creatori-contenuti.png` | ☐ |
| [D-STF-voce-cofondatori](05-canali-discord.md) | Canale `staff│voce-cofondatori` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/stf-voce-cofondatori.png` | ☐ |
| [D-WOW-01-sblocca-sezione](05-canali-discord.md) | Canale `01 · sblocca-sezione` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/wow-01-sblocca-sezione.png` | ☐ |
| [D-WOW-02-informazioni](05-canali-discord.md) | Canale `02 · informazioni` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/wow-02-informazioni.png` | ☐ |
| [D-WOW-02b-faq](05-canali-discord.md) | Canale `02b · faq` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/wow-02b-faq.png` | ☐ |
| [D-WOW-03-candidatura](05-canali-discord.md) | Canale `03 · candidatura` | P1 | 16:9 | `docs/artwork/export/discord/canali/wow-03-candidatura.png` | ☐ |
| [D-WOW-04-annunci](05-canali-discord.md) | Canale `04 · annunci` | P1 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/wow-04-annunci.png` | ☐ |
| [D-WOW-05-calendario](05-canali-discord.md) | Canale `05 · calendario` | P2 | 16:9 | `docs/artwork/export/discord/canali/wow-05-calendario.png` | ☐ |
| [D-WOW-06-hub](05-canali-discord.md) | Canale `06 · hub` | P2 | 16:9 | `docs/artwork/export/discord/canali/wow-06-hub.png` | ☐ |
| [D-WOW-HUB-presentazioni](05-canali-discord.md) | Canale `06 · hub › presentazioni` | P1 | 16:9 | `docs/artwork/export/discord/canali/wow-hub-presentazioni.png` | ☐ |
| [D-WOW-HUB-informazioni](05-canali-discord.md) | Canale `06 · hub › informazioni` | P1 | 16:9 | `docs/artwork/export/discord/canali/wow-hub-informazioni.png` | ☐ |
| [D-WOW-HUB-regolamento](05-canali-discord.md) | Canale `06 · hub › regolamento` | P1 | 16:9 | `docs/artwork/export/discord/canali/wow-hub-regolamento.png` | ☐ |
| [D-WOW-HUB-chat](05-canali-discord.md) | Canale `06 · hub › chat` | P1 | 16:9 | `docs/artwork/export/discord/canali/wow-hub-chat.png` | ☐ |
| [D-WOW-HUB-lfg](05-canali-discord.md) | Canale `06 · hub › lfg` | P1 | 16:9 | `docs/artwork/export/discord/canali/wow-hub-lfg.png` | ☐ |
| [D-WOW-HUB-roster](05-canali-discord.md) | Canale `06 · hub › roster di raid` | P1 | 16:9 | `docs/artwork/export/discord/canali/wow-hub-roster.png` | ☐ |
| [D-WOW-HUB-loot](05-canali-discord.md) | Canale `06 · hub › loot` | P1 | 16:9 | `docs/artwork/export/discord/canali/wow-hub-loot.png` | ☐ |
| [D-WOW-HUB-banca-di-gilda](05-canali-discord.md) | Canale `06 · hub › banca di gilda` | P1 | 16:9 | `docs/artwork/export/discord/canali/wow-hub-banca-di-gilda.png` | ☐ |
| [D-WOW-HUB-scambio-e-artigianato](05-canali-discord.md) | Canale `06 · hub › scambio e artigianato` | P1 | 16:9 | `docs/artwork/export/discord/canali/wow-hub-scambio-e-artigianato.png` | ☐ |
| [D-WOW-HUB-addon](05-canali-discord.md) | Canale `06 · hub › addon` | P1 | 16:9 | `docs/artwork/export/discord/canali/wow-hub-addon.png` | ☐ |
| [D-WOW-HUB-i-consigli-del-finland](05-canali-discord.md) | Canale `06 · hub › i consigli del Finland` | P1 | 16:9 | `docs/artwork/export/discord/canali/wow-hub-i-consigli-del-finland.png` | ☐ |
| [D-WOW-HUB-assenze](05-canali-discord.md) | Canale `06 · hub › assenze` | P1 | 16:9 | `docs/artwork/export/discord/canali/wow-hub-assenze.png` | ☐ |
| [D-WOW-07-wiki](05-canali-discord.md) | Canale `07 · wiki` | P2 | 16:9 | `docs/artwork/export/discord/canali/wow-07-wiki.png` | ☐ |
| [D-WOW-08-novelle](05-canali-discord.md) | Canale `08 · novelle` | P2 | 16:9 | `docs/artwork/export/discord/canali/wow-08-novelle.png` | ☐ |
| [D-WOW-09-direzione](05-canali-discord.md) | Canale `09 · direzione` | P2 | 16:9 | `docs/artwork/export/discord/canali/wow-09-direzione.png` | ☐ |
| [D-WOW-DIR-globale](05-canali-discord.md) | Canale `09 · direzione › Globale` | P2 | 16:9 | `docs/artwork/export/discord/canali/wow-dir-globale.png` | ☐ |
| [D-WOW-DIR-alleanza](05-canali-discord.md) | Canale `09 · direzione › Alleanza` | P2 | 16:9 | `docs/artwork/export/discord/canali/wow-dir-alleanza.png` | ☐ |
| [D-WOW-DIR-orda](05-canali-discord.md) | Canale `09 · direzione › Orda` | P2 | 16:9 | `docs/artwork/export/discord/canali/wow-dir-orda.png` | ☐ |
| [D-WOW-DIR-reclutamento](05-canali-discord.md) | Canale `09 · direzione › Reclutamento` | P2 | 16:9 | `docs/artwork/export/discord/canali/wow-dir-reclutamento.png` | ☐ |
| [D-WOW-candidatura-officer](05-canali-discord.md) | Canale `candidatura-officer` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/wow-candidatura-officer.png` | ☐ |
| [D-WOW-VOC-accettazione](05-canali-discord.md) | Canale `accettazione` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/wow-voc-accettazione.png` | ☐ |
| [D-WOW-VOC-sale](05-canali-discord.md) | Canale `sala-1, sala-2, sala-3…` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/wow-voc-sale.png` | ☐ |
| [D-WOW-VOC-riunione](05-canali-discord.md) | Canale `riunione` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/wow-voc-riunione.png` | ☐ |
| [D-WOW-VOC-ufficio](05-canali-discord.md) | Canale `ufficio` | P2 | 16:9 → 5:2 | `docs/artwork/export/discord/canali/wow-voc-ufficio.png` | ☐ |

Totale: **181** prompt (12 P0 · 99 P1 · 70 P2). Per i canali Discord (D-) P1 = da pubblicare, P2 = facoltativa o sconsigliata: dettaglio in `05-canali-discord.md`.

## 8. Già deciso e da decidere

### Deciso dal Presidente il 02/10/2026

1. **Stile unico:** anime lofi anni ’90, linee cel-shaded, texture a olio. Allineato anche `community/media/bibbia-visiva.md`, che chiedeva pittura digitale. Una scelta di questo peso, se vuoi che resti, merita un ADR che sostituisca la parte visiva di ADR-004.
2. **Volti ammessi.** Con giudizio: 5 copertine su 19 hanno una figura; ognuna ha una variante oggetto. **Egarim è un nano.**
3. **Le immagini sono generate con IA**, e il sito lo dichiara: piè di pagina (`src/kit/Shell.jsx`) e nota in `GESTIONE-SITO.md` §5.

### Riportato nel canone (02/10/2026)

Egarim nano è scritto in `lore/personaggi.md` §2.2 (Razza, Aspetto) e nella scheda di Finland («più alto di Egarim»), in `lore/bibbia-della-lore.md` §4.4 (riga *Corpo*), in `R03` («Corpo, percezione e voce») e in `media/regia-lore.md` (cast). Nessun testo rev2 ne fissava la statura, quindi nessun capitolo va riscritto. Resta aperto: `personaggi.md` dice guanto consumato sul pollice **destro**, R03 e il Libro VIII non dicono il lato. Chi presta il nome a Egarim ha diritto di veto (bibbia §2.5).

### Da decidere

Non blocca l’inizio (i prompt partono dal predefinito indicato), ma cambia il risultato:

1. **Quale generatore e quale modello?** Se non è già scelto, serve per fissare i riferimenti (punto 2 del flusso) e la licenza d’uso commerciale. Va anche deciso se le immagini si etichettano come illustrazioni generate con AI.
2. **Ines**: la scheda R-02 v0.2 fissa solo ciò che il testo dice (gruista, mano curva, borsa, casco) e lascia aperti età, carnagione e capelli, come chiede R03. Va deciso con chi scrive la lettura esterna R25.
3. **Ordine di serializzazione**: i testi rev2 esistono e le copertine li seguono. Il sito ordina per numero di file e la Veglia VII va letta *dentro* il Libro VII, fra VII.2 e VII.3: come entra nell’indice decide i nomi `.md` di L-13 e L-14.
4. **GM**: emblema = faro della locanda (predefinito), cappello da cuoco dorato, oppure corona?
5. **Seconda gilda (Nebulaa/Alleanza)**: confermata? Se sì servono varianti di banner ed emblemi; per ora non si producono.
6. **Livello boost del server Discord**: banner, icone ruolo e sticker animati dipendono da quello.
7. **Social (YouTube/Instagram/Twitch)**: si aprono davvero? C-09 aspetta i link.
8. **Editto in Lore**: categoria propria “Fondamenta” nel filtro, o resta fuori?
9. **Concept “TAVERNULA”**: la togliamo dal sito o resta solo in galleria?
10. **Chi ritocca** (grana, ritagli, esportazione) e chi ha l’ultima parola sulla scelta tra i candidati?
11. **Galleria WoW (S-11…S-14).** Segnaposto dichiarati con prefisso `90-` fino all’arrivo degli screenshot veri, oppure tab nascosto? Gli screenshot reali pongono due questioni: i nick visibili e le regole del gioco sui contenuti dei fan.
12. **Età di Ines**: `regia-lore.md` r.45 dice 29 anni, la prima scheda diceva «metà trenta», R03 vieta le età numeriche. Il generatore ne sceglierà una: va fissata o lasciata volutamente vaga.
13. **Volto di Egarim in L-15**: resta in ombra finché non conferma la persona. Se conferma, si può rigenerare in luce piena.

## 9. Interventi sul sito suggeriti (non applicati)

Nessun file del sito è stato toccato. Quando le immagini esistono, in ordine:

1. Aggiornare i percorsi: `content/site.json` (`hero.poster`, `seo.ogImage`, `images.homeLore`, `images.regolamento`), `cover` nei `.md` di `content/lore/` e in `content/pages/editto.md`, `hero.image` e `card.image` dei giochi, `cover` delle istanze in `progress.json`.
2. **Anteprima social per capitolo**: oggi la copertina 3:4 viene usata come `og:image` (`src/pages/lore/[id].astro`): la regola della banda 28–68% la salva, ma un campo `ogImage` separato (16:9) sarebbe più pulito.
3. **404**: usare S-05 come sfondo scurito (overlay ≈70%).
4. **Lore**: filetto d’ottone sottile attorno alle copertine (doppio per i Libri, singolo per le Veglie) e numerale in serif editoriale, fatti in CSS e non nell’immagine.
5. Dimensioni `width`/`height` e `srcset` per le immagini, perché oggi vengono servite così come sono (lo script `sharp` non è ancora incluso).

### Dopo la serializzazione dei testi rev2

6. `src/kit/Lore.jsx` r.13 e `src/pages/lore/index.astro` r.4 dicono «un prologo, quattro libri e quattro veglie»: vero oggi, falso quando il sito pubblica tutta la rev2 (otto Libri, otto Veglie, antefatto).
7. La Veglia VII sta dentro il Libro VII: l’indice del sito ordina per numero di file e non lo sa.
