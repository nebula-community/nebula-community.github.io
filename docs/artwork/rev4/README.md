# Immagini del sito — set rev4

Tutte le immagini del sito si rifanno da zero partendo dai concept rev4 della lore. Qui c’è un prompt pronto per ognuna, con l’elenco dei concept da allegare. In tutto sono 30: 12 immagini del sito, 9 copertine dei capitoli e 9 ritratti di fondatori e co-fondatori (6 P0 · 20 P1 · 4 P2).

Restano come sono, per decisione già presa: la **hero** della home (`concept-nebula-inn.webp`) e la **foto di gruppo** di «Chi siamo», che è già un’illustrazione rev4. Copertina e tavole del libro hanno il loro progetto nella lore (NI4-26, vedi sotto).

## Le regole del set

Ogni prompt ha le sezioni dei tuoi concept rev4: apertura, `STYLE`, `LAYOUT`, `SCENE` (o `PORTRAIT`), `REFERENCES`, `RULES` e la cartella di salvataggio.

- **STYLE e RULES sono i tuoi, parola per parola**, uguali in tutti i prompt:
  - STYLE: anime cel di fine anni Novanta, atmosfera space-western, linee pulite e visibili, ombre piatte, palette leggermente desaturata, grana calda, personaggi rifiniti con anatomia risolta, volti e mani dettagliati.
  - RULES: proporzioni, abiti, colori e dettagli coerenti; nessun titolo, nome o scritta; niente etichette, frecce, callout o campioni colore. Le scritte nel mondo si compongono a parte.
- **I riferimenti sono obbligatori.** `REFERENCES` elenca i PNG di `discord/community/lore/artworks/png/rev4` da allegare, in ordine di importanza: se lo strumento ne accetta meno, allega i primi. Ogni scheda mostra un solo personaggio, luogo, struttura o mezzo da sette angolazioni. Il `LAYOUT` chiede di prenderne il disegno, mai l’impaginazione, lo sfondo grigio o la posa neutra.
- **I personaggi sono quelli delle schede.** La descrizione nel prompt ripete ciò che la scheda mostra (corporatura, volto, abiti, colori, lati delle protesi e delle riparazioni), così il risultato resta riconoscibile anche se lo strumento legge male un allegato.
- **Fondatori e co-fondatori compaiono dove la storia li mette.** Sono persone reali: ognuno vede le immagini in cui compare prima che vadano online e può chiedere di cambiarle (bibbia visiva §2.5).
- **Nessuna scritta.** Insegne, fogli, schermi e scatole restano vuoti; titoli e testi li aggiunge il sito.
- **Le copertine dei capitoli si vedono prima di leggere:** mostrano la situazione d’inizio del capitolo, mai il suo esito.
- **Due epoche.** Le immagini del sito mostrano **la Nebula Inn restaurata di oggi**: banco a sinistra, vetrata del Velo a destra, soppalco, lanterne e neon con insegne vuote. Le copertine dei capitoli mostrano **Casa Nona com’era nella storia**: modesta, riparata, senza neon.

## Come si producono

1. Apri il `.txt`, allega i PNG elencati in `REFERENCES` (in ChatGPT basta trascinarli nella conversazione) e incolla tutto il testo.
2. Scegli il formato più vicino: **3:2 orizzontale** (1536×1024) per le immagini del sito, **2:3 verticale** (1024×1536) per copertine dei capitoli e ritratti. Il `LAYOUT` dice cosa deve restare dentro il ritaglio finale.
3. Salva il PNG con il nome indicato in fondo al prompt, nella cartella indicata: `docs/artwork/rev4/png/sito/`, `png/lore/` o `png/team/`.
4. Dalla cartella del sito esegui `npm run art`. Lo script ritaglia e converte i PNG in WebP leggeri, li mette in `public/media/…` e aggiorna da solo i file di contenuto.
   - `npm run art -- --dry` mostra cosa farebbe, senza scrivere.
   - `npm run art -- SITO-03` lavora su una sola immagine.
5. Controlla il risultato con `npm run dev`, poi fai il commit.

Un’immagine non ancora generata non rompe niente: il sito tiene quella di adesso finché `npm run art` non la sostituisce. I ritratti di «Chi siamo» restano, fino ad allora, la vista frontale della scheda. `npm run validate` elenca le immagini che mancano.

La cartella `discord/community/lore` si legge soltanto: i prompt salvano nel repository del sito.

## Registro

Priorità: **P0** per primi · **P1** subito dopo · **P2** quando serve. Stato: ☐ da fare · ◐ in lavorazione · ☑ nel sito.

| ID | Immagine | Dove va | Formato | Allegati | Prio | Stato |
|---|---|---|---|---|---|---|
| [SITO-02](<prompts/sito/SITO-02_Anteprima social - La locanda sulla spalla.txt>) | Immagine di anteprima (Open Graph) | `content/site.json` → `seo.ogImage` | 1.91:1 | 4 | P0 | ☐ |
| [SITO-03](<prompts/sito/SITO-03_Benvenuto - Il genkan.txt>) | Benvenuto in home | `content/site.json` → `images.homeWelcome` | 4:3 | 4 | P0 | ☐ |
| [SITO-04](<prompts/sito/SITO-04_La Locanda - Molti tavoli.txt>) | La Locanda (Chi siamo) | `content/pages/locanda.md` → `cover` | 4:3 | 5 | P1 | ☐ |
| [SITO-05](<prompts/sito/SITO-05_Editto - La salita delle lanterne.txt>) | L’Editto della Locanda | `content/pages/editto.md` → `cover` (card in home; l’Editto è in Chi siamo) | 4:3 | 4 | P1 | ☐ |
| [SITO-06](<prompts/sito/SITO-06_Regolamento - Il ripiano asciutto.txt>) | Il Regolamento | `content/site.json` → `images.regolamento` | 4:3 | 5 | P1 | ☐ |
| [SITO-07](<prompts/sito/SITO-07_La storia - Un lettore davanti al Velo.txt>) | Fascia «La storia» in home | `content/site.json` → `images.homeLore` (anche anteprima della pagina Lore) | 16:9 | 5 | P0 | ☐ |
| [SITO-08](<prompts/sito/SITO-08_WoW Forever - La serata di gioco.txt>) | WoW Forever: testata e card | `content/games/wow-forever/game.json` → `hero.image` e `card.image` (due ritagli dallo stesso PNG) | 16:9 + 16:10 | 3 | P1 | ☐ |
| [SITO-09](<prompts/sito/SITO-09_Prossimo tavolo - Il tavolo che si apre.txt>) | Card «Prossimo tavolo» | `content/games/_coming-soon/game.json` → `card.image` | 16:10 | 4 | P1 | ☐ |
| [SITO-10](<prompts/sito/SITO-10_Pagina 404 - La porta spostata.txt>) | Pagina 404 | `content/site.json` → `images.notFound` (la 404 lo usa come sfondo scurito) | 16:9 | 3 | P2 | ☐ |
| [SITO-11](<prompts/sito/SITO-11_Istanza - La lanterna di brace.txt>) | Istanza: Molten Core | `content/games/wow-forever/progress.json` → `instances[id=mc].cover` | 2:1 | 1 | P2 | ☐ |
| [SITO-12](<prompts/sito/SITO-12_Istanza - La lanterna a squame.txt>) | Istanza: Onyxia’s Lair | `content/games/wow-forever/progress.json` → `instances[id=ony].cover` | 2:1 | 1 | P2 | ☐ |
| [SITO-13](<prompts/sito/SITO-13_Istanza - La lanterna spenta.txt>) | Istanza in arrivo (bloccata) | `content/games/wow-forever/progress.json` → `instances[id=next].cover` | 2:1 | 1 | P2 | ☐ |
| [LN-01](<prompts/lore/LN-01_Capitolo 01 - Il lavoro prima della partenza.txt>) | Capitolo 01 — Il lavoro prima della partenza | `content/lore/01-il-lavoro-prima-della-partenza.md` → `cover` | 3:4 | 6 | P0 | ☐ |
| [LN-02](<prompts/lore/LN-02_Capitolo 02 - La partenza contesa.txt>) | Capitolo 02 — La partenza contesa | `content/lore/02-la-partenza-contesa.md` → `cover` | 3:4 | 5 | P1 | ☐ |
| [LN-03](<prompts/lore/LN-03_Capitolo 03 - Tornare tutti.txt>) | Capitolo 03 — Tornare tutti | `content/lore/03-tornare-tutti.md` → `cover` | 3:4 | 4 | P1 | ☐ |
| [LN-04](<prompts/lore/LN-04_Capitolo 04 - La notte senza progetto comune.txt>) | Capitolo 04 — La notte senza progetto comune | `content/lore/04-la-notte-senza-progetto-comune.md` → `cover` | 3:4 | 6 | P1 | ☐ |
| [LN-05](<prompts/lore/LN-05_Capitolo 05 - Una casa possibile.txt>) | Capitolo 05 — Una casa possibile | `content/lore/05-una-casa-possibile.md` → `cover` | 3:4 | 5 | P0 | ☐ |
| [LN-06](<prompts/lore/LN-06_Capitolo 06 - Le condizioni per restare.txt>) | Capitolo 06 — Le condizioni per restare | `content/lore/06-le-condizioni-per-restare.md` → `cover` | 3:4 | 5 | P1 | ☐ |
| [LN-07](<prompts/lore/LN-07_Capitolo 07 - Il posto dopo il lavoro.txt>) | Capitolo 07 — Il posto dopo il lavoro | `content/lore/07-il-posto-dopo-il-lavoro.md` → `cover` | 3:4 | 5 | P1 | ☐ |
| [LN-08](<prompts/lore/LN-08_Capitolo 08 - La porta aperta.txt>) | Capitolo 08 — La porta aperta | `content/lore/08-la-porta-aperta.md` → `cover` | 3:4 | 6 | P1 | ☐ |
| [LN-09](<prompts/lore/LN-09_Capitolo 09 - Il posto per chi riparte.txt>) | Capitolo 09 — Il posto per chi riparte | `content/lore/09-il-posto-per-chi-riparte.md` → `cover` | 3:4 | 5 | P0 | ☐ |
| [TEAM-finland](<prompts/team/TEAM-finland_Ritratto - Finland.txt>) | Ritratto: Finland | `public/media/team/finland.webp` (letto da `content/pages/fondatori.json`) | 2:3 | 2 | P1 | ☐ |
| [TEAM-egarim](<prompts/team/TEAM-egarim_Ritratto - Egarim.txt>) | Ritratto: Egarim | `public/media/team/egarim.webp` (letto da `content/pages/fondatori.json`) | 2:3 | 3 | P1 | ☐ |
| [TEAM-sanchio](<prompts/team/TEAM-sanchio_Ritratto - Sanchio.txt>) | Ritratto: Sanchio | `public/media/team/sanchio.webp` (letto da `content/pages/fondatori.json`) | 2:3 | 2 | P1 | ☐ |
| [TEAM-scudi](<prompts/team/TEAM-scudi_Ritratto - Scudi.txt>) | Ritratto: Scudi | `public/media/team/scudi.webp` (letto da `content/pages/fondatori.json`) | 2:3 | 3 | P1 | ☐ |
| [TEAM-ada-vey](<prompts/team/TEAM-ada-vey_Ritratto - Ada Vey.txt>) | Ritratto: Ada Vey | `public/media/team/ada-vey.webp` (letto da `content/pages/fondatori.json`) | 2:3 | 2 | P1 | ☐ |
| [TEAM-oris](<prompts/team/TEAM-oris_Ritratto - Oris.txt>) | Ritratto: Oris | `public/media/team/oris.webp` (letto da `content/pages/fondatori.json`) | 2:3 | 3 | P1 | ☐ |
| [TEAM-calco](<prompts/team/TEAM-calco_Ritratto - Calco.txt>) | Ritratto: Calco | `public/media/team/calco.webp` (letto da `content/pages/fondatori.json`) | 2:3 | 2 | P1 | ☐ |
| [TEAM-oste](<prompts/team/TEAM-oste_Ritratto - L'Oste.txt>) | Ritratto: L'Oste | `public/media/team/oste.webp` (letto da `content/pages/fondatori.json`) | 2:3 | 2 | P1 | ☐ |
| [TEAM-donut](<prompts/team/TEAM-donut_Ritratto - D. Donut.txt>) | Ritratto: D. Donut | `public/media/team/donut.webp` (letto da `content/pages/fondatori.json`) | 2:3 | 2 | P1 | ☐ |

### In una riga

- **SITO-02** — La locanda di notte sulla spalla del Dorso, Concordia sotto, il Velo dietro: deve leggersi anche come quadratino su Discord, WhatsApp e Telegram.
- **SITO-03** — «Hai varcato la soglia. Per ora non ti chiediamo niente.» Dal genkan: un gancio libero, l’Oste che alza la testa senza venirti incontro, Nuuk che solleva il muso.
- **SITO-04** — «A ognuno siede gente diversa»: la ludoteca vista dal soppalco. Oris accompagna un nuovo arrivato, Sanchio porta le ciotole, Donut ascolta dal suo angolo.
- **SITO-05** — «Oh tu che varchi la soglia…»: un viaggiatore sull’ultima rampa della salita, Egarim che scende a prendergli l’altra cinghia, l’Oste che scosta il noren in cima.
- **SITO-06** — «Ogni regola ha il suo perché scritto accanto»: il foglio a due colonne sul ripiano asciutto, Finland che legge, Ada con la matita, la mano dell’Oste che allontana una tazza.
- **SITO-07** — Sera tarda nel salotto della vetrata: un ospite legge un libro sotto una lanterna, Nuuk accanto, il Velo che riempie il vetro. Lato sinistro scuro per il testo.
- **SITO-08** — Serata di raid sul soppalco: chi arriva tardi si siede nel posto tenuto libero, nessuno si ferma. Sanchio passa con un vassoio. Niente del gioco sugli schermi.
- **SITO-09** — «Un nuovo tavolo si apre quando c’è chi lo coltiva»: chi l’ha proposto apre la scatola, Calco orienta la lampada, Scudi porta una sedia.
- **SITO-10** — «Questa stanza non c’è»: il segno di una porta spostata nell’intonaco, la vecchia linea sul pavimento e quella nuova che porta verso la sala. Nuuk alla curva.
- **SITO-11** — Sulla parete del soppalco la gilda appende una lanterna per ogni posto da cui è tornata: stessa parete e stessa inquadratura per le tre istanze.
- **SITO-12** — Sulla parete del soppalco la gilda appende una lanterna per ogni posto da cui è tornata: stessa parete e stessa inquadratura per le tre istanze.
- **SITO-13** — Sulla parete del soppalco la gilda appende una lanterna per ogni posto da cui è tornata: stessa parete e stessa inquadratura per le tre istanze. Il sito la mostra in grigio finché l’istanza è bloccata.
- **LN-01** — «Questa no.» Egarim alza una borsa, Ada ne stacca l’etichetta senza rimprovero, l’Oste posa un’altra borsa accanto al suo proprietario. Sullo sfondo i sei lavoratori.
- **LN-02** — Poco dopo mezzogiorno: Ada gira verso la sala il foglio appena firmato dal gestore del sito, perché tutti possano leggerlo. Sullo sfondo Oris davanti all’uomo col cappotto: una correzione, non un’umiliazione.
- **LN-03** — Fuori, nel vuoto, all’inizio della manovra: la navetta del trasferimento col macchinario sul fianco destro, la navetta tozza di Donut che si sposta di lato, il traino che si avvicina con le pinze aperte. Nessuno ancora fuori.
- **LN-04** — Il terminale di Concordia sotto una luce piatta: Scudi con una tazza vuota tra le mani, Ada che spinge il conto verso gli altri, Egarim seduto sul bordo della sedia, Donut con la ricevuta, Oris che guarda l’uscita.
- **LN-05** — La curva della rampa tecnica: Egarim si ferma col carrello a noleggio, Finland gli porge una mano aperta senza prendergli il manico, Nuuk passa sul lato esterno.
- **LN-06** — Sotto una sola lampada, Ada ed Egarim guardano le stesse caselle vuote del calendario; le due offerte di lavoro accanto, non sopra. Intorno, in penombra, Calco, Finland e Oris.
- **LN-07** — Il pomeriggio prima dell’apertura: Donut entra dalla rampa col poncho, la custodia e un fagotto, e prima di posare qualcosa chiede a Scudi dove ha verificato i punti di fissaggio.
- **LN-08** — Le sei di sera del giorno dell’apertura: Finland pulisce una macchia sul vetro con gli occhiali in mano, Nuuk alza il muso ai suoi piedi; dietro, l’Oste mette le ciotole e Ada sta al banco.
- **LN-09** — Prima della cena: l’Oste posa il vecchio registro, chiuso, accanto ai fogli nuovi di Ada; Finland ci tiene sopra un dito senza toccarlo. La vetrata è ancora buia.
- **TEAM-finland** — Al capo del banco, una mano sul foglio degli arrivi ancora bianco: alza lo sguardo come per chiedere chi prende il banco dopo di lui.
- **TEAM-egarim** — Alla porta di servizio in cima alla rampa, una mano guantata sul carrello carico, l’altra che tiene aperta la porta. La camera è alla sua altezza.
- **TEAM-sanchio** — Dopo il servizio, seduto al passe con la sua ciotola: quando la pentola è vuota, mangia anche lui.
- **TEAM-scudi** — In ginocchio alla guarnizione della grande vetrata, il manometro nella destra sana, l’orecchio sinistro verso chi parla; dietro, il Velo.
- **TEAM-ada-vey** — Al tavolo della sala, gira verso chi guarda uno dei due fogli del fermaglio: prima si legge, poi si firma.
- **TEAM-oris** — Sul pianerottolo in cima alla salita delle lanterne, la lista in mano, girato verso chi sta salendo.
- **TEAM-calco** — Inclina una lampada perché illumini il tavolo e non gli occhi di chi è seduto. Molto alto, molto verticale.
- **TEAM-oste** — Seduto dal lato libero di un tavolo durante la pausa che sceglie lui, le mani su un panno piegato. Niente da mangiare o da bere.
- **TEAM-donut** — Seduto di traverso nell’angolo quieto, la custodia di traverso sul ripiano basso, una tazza sul tavolo, la gamba meccanica distesa.

## Copertina e tavole del libro

Hanno già i loro prompt nel progetto illustrativo NI4-26 (`artworks/prompts/rev4/scene/novel-1`): la copertina è a colori senza personaggi riconoscibili, le tre tavole sono in bianco e nero. Quando le generi nella cartella della lore, `npm run art` le copia nel sito da sola.

| ID | Dove va nel sito | Concept da allegare |
|---|---|---|
| NI26-CF · Una luce sopra la città | copertina nell’indice della Lore (`content/lore/libro.json` → `cover`) | banco della Nona, sala comune (solo per la pianta), vetrata del Velo, Concordia rev3, Velo |
| NI26-A01 · La mano lontana dal tasto | tavola in fondo al capitolo 03 | Ada, postazione di coordinamento (ha quattro persone disegnate: va detto di non copiarle), navetta del trasferimento, traino, navetta di Donut v1 |
| NI26-A02 · Il vassoio non passa | tavola in fondo al capitolo 07 | Sanchio, Donut, Calco, Egarim, Finland, Ada, L’Oste (se lo strumento ne accetta meno: i primi quattro) |
| NI26-A03 · La tazza che si raffredda | tavola in fondo al capitolo 07, dopo A02 | Donut, Scudi, L’Oste, banco della Nona |

## Scelte fatte sulle schede (da confermare)

Dove le schede rev4 e i testi della lore non coincidono, i prompt seguono le schede, perché sono loro che si allegano:

- **Vetrata:** rettangolare ad angoli smussati, come in tutte le schede. Il prompt della copertina NI26-CF e la bibbia visiva la vogliono ad arco: se la copertina resta ad arco, conviene dirlo anche qui.
- **Navetta di Donut:** la v1, tozza crema e oliva, che corrisponde ai prompt dei mezzi. La v2 (affusolata, con pinne e bande blu e ocra) sembra un caccia.
- **Locanda restaurata:** lanterne a scatola e noren indaco, come nei PNG 00 e 01. I prompt di testo chiedono lanterne tonde a costole e noren crema.
- **Figure senza nome:** le versioni rev2 (lavoratrice rettile, gestore del sito insettoide, referente comunale aviana). Le v1 erano umane.
- **Esclusi come riferimento:** le due foto di gruppo, perché appiattiscono le altezze e mettono Nuuk seduto come un orsacchiotto; le navette armate; i tram al neon.
- **Cinghia di Finland:** nella scheda è un mezzo cinturino di lana dietro il cappotto. L’oggetto 13 la descrive come una cinghia color tabacco con fibbia. Nessuna immagine del sito la mostra staccata.

## Da decidere

1. **Contributi dei fondatori.** In `content/pages/fondatori.json` ogni scheda ha `contribution: "[[CONTRIBUTO]]"`, che il sito mostra come dato mancante. Va scritto cosa ha fatto davvero ognuno per Nebula.
2. **Approvazione delle persone ritratte.** Prima di pubblicare, ognuno dei nove vede il proprio ritratto e le scene in cui compare. Se qualcuno preferisce non comparire, la scena si rifà mostrando solo mani, oggetti o una figura di spalle.
3. **Immagini vecchie.** Quando i `SITO-…` sono tutti nel sito, i vecchi file di `public/media/art/` non servono più e si possono archiviare. La galleria WoW contiene copie di quelle immagini: lì vanno screenshot veri della gilda, non illustrazioni.
