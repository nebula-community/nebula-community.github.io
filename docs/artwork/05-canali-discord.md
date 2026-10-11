# Immagini dei canali Discord (D)

Un prompt pronto per **ogni canale** del server, nello stesso stile del sito e delle copertine: la community (67 canali in otto categorie, [struttura](../../../discord/community/struttura-canali.md)) e la sezione **WoW Forever** (canali, forum e topic fissi, [struttura di sezione](../../../discord/sezione-wow-forever/canali/00-struttura-canali.md)). Ogni scheda dice anche **se pubblicarla**: produrre tutto non vuol dire mostrare tutto.

Le scene partono dalle [schede di scena](../../../discord/community/media/mappa-canali-scene.md) già scritte per i canali (001–058) e dagli oggetti diegetici di [PROMPTS §3](../../../discord/community/media/PROMPTS.md), adattati alle regole di questo set: stile anime anni '90 cel-shaded, Oste dal volto scuro, un solo neon, nessun testo. Le testate della Lore riusano le **copertine rev2** ([03-lore-copertine.md](03-lore-copertine.md)), non le schede 121–156 della rev1.

**Sostituisce le testate C-03** di [04-community-discord.md](04-community-discord.md), che avevano nomi di canale che non esistono (`#benvenuto`, `#regole`, il vocale «Il Fuoco») e un formato 4:1 illeggibile da telefono.

## 1. Regole (parere del community manager, adottato)

| Tema | Decisione |
|---|---|
| **Come si mostra** | Discord non ha banner per canale. L'immagine è il **primo messaggio del canale**, da sola, come **allegato permanente** (mai link CDN: scadono, ADR-007 §2.8); il testo va nei messaggi seguenti, così l'immagine si sostituisce senza toccare il testo. Nei canali di chat va allegata al **messaggio di istruzioni fissato**. Nei forum, al post-guida fissato o al post di apertura del topic |
| **Formato dei testuali** | Master **16:9** (2560×1440), soggetto nella **fascia centrale 5:2**, consegna **1600×640**. Il 4:1 a 360 px di larghezza diventa una striscia alta 90 px. Discord non ritaglia gli allegati, li rimpicciolisce: un soggetto solo, centro-destra |
| **Formato dei forum** | Master 16:9 1920×1080, soggetto nel **quadrato centrale**: la miniatura nell'elenco dei post è un ritaglio centrale |
| **Divisori di categoria** | Nessuno: Discord non mostra immagini sulle categorie. Il riconoscimento lo danno zona e neon (sotto) |
| **Lore** | La testata di ogni Libro **riusa il motivo della sua copertina**, ricomposto in orizzontale con gli stessi riferimenti e lo stesso seed (non un ritaglio). La **Veglia usa la sua copertina 3:4** così com'è, subito prima del suo testo |
| **Copertura** | Una scheda per ogni canale, ma **non tutte si pubblicano**: vedi «Pubblicazione» in ogni scheda |

**Una zona della casa e una forma di neon per categoria**, così si riconosce la categoria scorrendo i canali senza ripetere la stessa immagine. Il neon è sempre uno solo e magenta.

| Categoria | Zona della casa | Forma del neon |
|---|---|---|
| Benvenuto | soglia, vestibolo, ingresso | arco sottile sopra una porta |
| Community Hub | sala e bancone | tubo lungo e dritto sopra il banco |
| Community Salotto | alcove e salotto | anello |
| Community Lore | quella della copertina del Libro | quella della copertina |
| Community Topics | parete dei viaggiatori, trofei e curiosità | cornice rettangolare vuota |
| Community Richieste | corridoio della bacheca | tubo verticale accanto alla bacheca |
| Community Candidature | retro-cucina, grembiuli, ganci | piccolo rettangolo sopra la porta di servizio |
| Community Staff | retro di lavoro, banco creativo, officina | tubo basso e fioco sopra il banco |
| Sezione WoW Forever | l'alcova del tavolo di sezione (fantasy generico) | cornice attorno a una mappa vuota |

**Pubblicazione.** `pubblica` = da produrre e mostrare · `facoltativa` = da decidere (aspetta un'altra decisione, per esempio l'ente o l'apertura del canale) · `sconsigliata` = la scheda c'è, ma l'immagine fa rumore o nessuno la vede (staff, vocali, feed, elenchi di servizio). Conteggio: **42 pubblica · 4 facoltativa · 52 sconsigliata**, su 98 schede.

**Cautele già applicate nelle scene.**
- `al-tavolo-nsfw` (solo se il canale apre, ADR-008 Q6): adulti evidenti, vestiti, una tenda chiusa come confine. **Mai** nudità o allusioni, tratti giovanili, alcol come richiamo, la scritta «18+». L'immagine sta solo dentro il canale, mai in guida, social o anteprime.
- `richiesta│aggiunta-compleanno`: niente torta con candele numerabili (dice l'età).
- `supportaci`: niente barattolo di monete; finché l'ente non esiste non si raccolgono soldi (ADR-016/017).
- `leveling`: niente tessera con caselle contabili (fisserebbe soglie che ADR-010 lascia aperte).
- **WoW**: nessun nome, razza, fazione, emblema, boss, armatura di classe, icona o interfaccia del gioco. Alleanza e Orda (topic di `09-direzione`) sono lo stesso tavolo visto dai due lati, distinti da due sedie e due tazze diverse, **mai** da rosso e blu. Finland non è ritratto nel topic «I consigli del Finland» (persona viva).
- Il robot di servizio, quando c'è, ha due piccole ottiche ciano: è l'unico ciano ammesso.

> **Come comporre ogni prompt:** il blocco «Prompt» è già completo (stile, scena, luce, formato, chiusura). Incolla il **negativo** qui sotto dove il generatore lo prevede (Midjourney: `--no`, con `--ar 16:9 --style raw` e `--sref` su un'immagine approvata della stessa categoria). Regole e blocchi: [README](README.md). Ordine di produzione: prima Benvenuto, Hub e Lore.

**Negativo**

```text
text, letters, words, numbers, logo, watermark, signature, caption, UI, readable signs, extra neon colors, cyan neon, green neon, blue neon, pure black shadows, flat vector art, 3D render, plastic skin, photograph, oversaturated, harsh flash, fanservice, weapons held in hands, blood, skulls, soldiers, chibi, crowd of backs forming a closed circle, deformed hands, extra fingers, duplicated faces, blurry, low resolution, jpeg artifacts, strobe, flashing lights, cigarette, pipe, smoking, drunkenness, bottles in the foreground, torii gate, katana, geisha, pseudo-kanji, temple, snow, ice, candles in a funeral mood, fantasy dwarf cliché, long beard, axe, horned helmet, posed group portrait
```

**Prima di pubblicare**: soggetto leggibile a 360 px · un solo neon, della forma della categoria · nessun testo, logo, marchio, colore di fazione · il nome del file è lo slug del canale · caricato come allegato, non come link · copia conservata in `community/media/` se diventa definitiva.

## 2. Registro

| ID | Canale | Categoria | Tipo | Pubblicazione | File | Stato |
|---|---|---|---|---|---|---|
| D-BEN-inizia-qui | `inizia-qui` | Benvenuto | testuale | pubblica | `docs/artwork/export/discord/canali/ben-inizia-qui.png` | ☐ |
| D-BEN-la-locanda | `la-locanda` | Benvenuto | testuale | pubblica | `docs/artwork/export/discord/canali/ben-la-locanda.png` | ☐ |
| D-BEN-editto-della-locanda | `editto-della-locanda` | Benvenuto | testuale | pubblica | `docs/artwork/export/discord/canali/ben-editto-della-locanda.png` | ☐ |
| D-BEN-regolamento | `regolamento` | Benvenuto | testuale | pubblica | `docs/artwork/export/discord/canali/ben-regolamento.png` | ☐ |
| D-BEN-statuto | `statuto` | Benvenuto | testuale | facoltativa | `docs/artwork/export/discord/canali/ben-statuto.png` | ☐ |
| D-BEN-ruoli | `ruoli` | Benvenuto | testuale | pubblica | `docs/artwork/export/discord/canali/ben-ruoli.png` | ☐ |
| D-BEN-leveling | `leveling` | Benvenuto | testuale | pubblica | `docs/artwork/export/discord/canali/ben-leveling.png` | ☐ |
| D-BEN-faq | `faq` | Benvenuto | testuale | sconsigliata | `docs/artwork/export/discord/canali/ben-faq.png` | ☐ |
| D-BEN-guida | `guida` | Benvenuto | testuale | pubblica | `docs/artwork/export/discord/canali/ben-guida.png` | ☐ |
| D-BEN-links | `links` | Benvenuto | testuale | sconsigliata | `docs/artwork/export/discord/canali/ben-links.png` | ☐ |
| D-BEN-supportaci | `supportaci` | Benvenuto | testuale | facoltativa | `docs/artwork/export/discord/canali/ben-supportaci.png` | ☐ |
| D-HUB-annunci | `annunci` | Community Hub | testuale | pubblica | `docs/artwork/export/discord/canali/hub-annunci.png` | ☐ |
| D-HUB-bacheca-degli-osannati | `bacheca-degli-osannati` | Community Hub | testuale | pubblica | `docs/artwork/export/discord/canali/hub-bacheca-degli-osannati.png` | ☐ |
| D-HUB-reputazione | `reputazione` | Community Hub | testuale | sconsigliata | `docs/artwork/export/discord/canali/hub-reputazione.png` | ☐ |
| D-HUB-presentati | `presentati` | Community Hub | testuale | pubblica | `docs/artwork/export/discord/canali/hub-presentati.png` | ☐ |
| D-HUB-al-bancone | `al-bancone` | Community Hub | testuale | pubblica | `docs/artwork/export/discord/canali/hub-al-bancone.png` | ☐ |
| D-HUB-al-tavolo-meme | `al-tavolo-meme` | Community Hub | testuale | sconsigliata | `docs/artwork/export/discord/canali/hub-al-tavolo-meme.png` | ☐ |
| D-HUB-al-tavolo-nsfw | `al-tavolo-nsfw` | Community Hub | testuale | facoltativa | `docs/artwork/export/discord/canali/hub-al-tavolo-nsfw.png` | ☐ |
| D-HUB-suggerimenti | `suggerimenti` | Community Hub | testuale | pubblica | `docs/artwork/export/discord/canali/hub-suggerimenti.png` | ☐ |
| D-HUB-off-topics | `off-topics` | Community Hub | testuale | sconsigliata | `docs/artwork/export/discord/canali/hub-off-topics.png` | ☐ |
| D-SAL-generale | `Generale` | Community Salotto | vocale | sconsigliata | `docs/artwork/export/discord/canali/sal-generale.png` | ☐ |
| D-SAL-adulti | `Adulti` | Community Salotto | vocale | sconsigliata | `docs/artwork/export/discord/canali/sal-adulti.png` | ☐ |
| D-SAL-musica | `Musica` | Community Salotto | vocale | sconsigliata | `docs/artwork/export/discord/canali/sal-musica.png` | ☐ |
| D-SAL-assente | `Assente` | Community Salotto | vocale | sconsigliata | `docs/artwork/export/discord/canali/sal-assente.png` | ☐ |
| D-LOR-00 | `lore│00-prologo` | Community Lore | testuale | pubblica | `docs/artwork/export/discord/canali/lor-00.png` | ☐ |
| D-LOR-01 | `lore│01-la-sala-che-non-chiude-mai` | Community Lore | testuale | pubblica | `docs/artwork/export/discord/canali/lor-01.png` | ☐ |
| D-LOR-02 | `lore│02-il-permesso-di-andarsene` | Community Lore | testuale | pubblica | `docs/artwork/export/discord/canali/lor-02.png` | ☐ |
| D-LOR-03 | `lore│03-le-case-spente` | Community Lore | testuale | pubblica | `docs/artwork/export/discord/canali/lor-03.png` | ☐ |
| D-LOR-04 | `lore│04-il-giro-delle-lanterne` | Community Lore | testuale | pubblica | `docs/artwork/export/discord/canali/lor-04.png` | ☐ |
| D-LOR-05 | `lore│05-il-primo-inverno` | Community Lore | testuale | pubblica | `docs/artwork/export/discord/canali/lor-05.png` | ☐ |
| D-LOR-06 | `lore│06-il-filo-e-il-nodo` | Community Lore | testuale | pubblica | `docs/artwork/export/discord/canali/lor-06.png` | ☐ |
| D-LOR-07 | `lore│07-la-radice` | Community Lore | testuale | pubblica | `docs/artwork/export/discord/canali/lor-07.png` | ☐ |
| D-LOR-08 | `lore│08-la-rotta-bassa` | Community Lore | testuale | pubblica | `docs/artwork/export/discord/canali/lor-08.png` | ☐ |
| D-TOP-istruzioni | `topic│istruzioni` | Community Topics | testuale | pubblica | `docs/artwork/export/discord/canali/top-istruzioni.png` | ☐ |
| D-TOP-bacheca-delle-imprese | `topic│bacheca-delle-imprese` | Community Topics | testuale | pubblica | `docs/artwork/export/discord/canali/top-bacheca-delle-imprese.png` | ☐ |
| D-TOP-giochi-gratis | `topic│giochi-gratis` | Community Topics | testuale | sconsigliata | `docs/artwork/export/discord/canali/top-giochi-gratis.png` | ☐ |
| D-TOP-giochi-in-offerta | `topic│giochi-in-offerta` | Community Topics | testuale | sconsigliata | `docs/artwork/export/discord/canali/top-giochi-in-offerta.png` | ☐ |
| D-TOP-drivers | `topic│drivers` | Community Topics | testuale | sconsigliata | `docs/artwork/export/discord/canali/top-drivers.png` | ☐ |
| D-TOP-piattaforme-di-sviluppo | `topic│piattaforme-di-sviluppo` | Community Topics | testuale | sconsigliata | `docs/artwork/export/discord/canali/top-piattaforme-di-sviluppo.png` | ☐ |
| D-TOP-world-of-warcraft | `topic│world-of-warcraft` | Community Topics | testuale | pubblica | `docs/artwork/export/discord/canali/top-world-of-warcraft.png` | ☐ |
| D-RIC-istruzioni | `richiesta│istruzioni` | Community Richieste | testuale | pubblica | `docs/artwork/export/discord/canali/ric-istruzioni.png` | ☐ |
| D-RIC-aggiunta-compleanno | `richiesta│aggiunta-compleanno` | Community Richieste | forum | sconsigliata | `docs/artwork/export/discord/canali/ric-aggiunta-compleanno.png` | ☐ |
| D-RIC-nuovo-topic | `richiesta│nuovo-topic` | Community Richieste | forum | sconsigliata | `docs/artwork/export/discord/canali/ric-nuovo-topic.png` | ☐ |
| D-RIC-nuova-sezione | `richiesta│nuova-sezione` | Community Richieste | forum | sconsigliata | `docs/artwork/export/discord/canali/ric-nuova-sezione.png` | ☐ |
| D-RIC-evento | `richiesta│evento` | Community Richieste | forum | sconsigliata | `docs/artwork/export/discord/canali/ric-evento.png` | ☐ |
| D-RIC-bot | `richiesta│bot` | Community Richieste | forum | sconsigliata | `docs/artwork/export/discord/canali/ric-bot.png` | ☐ |
| D-CAN-istruzioni | `candidatura│istruzioni` | Community Candidature | testuale | pubblica | `docs/artwork/export/discord/canali/can-istruzioni.png` | ☐ |
| D-CAN-moderatore | `candidatura│moderatore` | Community Candidature | forum | sconsigliata | `docs/artwork/export/discord/canali/can-moderatore.png` | ☐ |
| D-CAN-mentore | `candidatura│mentore` | Community Candidature | forum | sconsigliata | `docs/artwork/export/discord/canali/can-mentore.png` | ☐ |
| D-CAN-curatore-eventi | `candidatura│curatore-eventi` | Community Candidature | forum | sconsigliata | `docs/artwork/export/discord/canali/can-curatore-eventi.png` | ☐ |
| D-CAN-curatore-social | `candidatura│curatore-social` | Community Candidature | forum | sconsigliata | `docs/artwork/export/discord/canali/can-curatore-social.png` | ☐ |
| D-CAN-tecnico | `candidatura│tecnico` | Community Candidature | forum | sconsigliata | `docs/artwork/export/discord/canali/can-tecnico.png` | ☐ |
| D-CAN-creatore-contenuti | `candidatura│creatore-contenuti` | Community Candidature | forum | sconsigliata | `docs/artwork/export/discord/canali/can-creatore-contenuti.png` | ☐ |
| D-CAN-caposezione | `candidatura│caposezione` | Community Candidature | forum | sconsigliata | `docs/artwork/export/discord/canali/can-caposezione.png` | ☐ |
| D-CAN-ufficiale-di-sezione | `candidatura│ufficiale-di-sezione` | Community Candidature | forum | sconsigliata | `docs/artwork/export/discord/canali/can-ufficiale-di-sezione.png` | ☐ |
| D-STF-sistema | `staff│sistema` | Community Staff | testuale | sconsigliata | `docs/artwork/export/discord/canali/stf-sistema.png` | ☐ |
| D-STF-roadmap-interna | `staff│roadmap-interna` | Community Staff | testuale | sconsigliata | `docs/artwork/export/discord/canali/stf-roadmap-interna.png` | ☐ |
| D-STF-faq-interna | `staff│faq-interna` | Community Staff | testuale | sconsigliata | `docs/artwork/export/discord/canali/stf-faq-interna.png` | ☐ |
| D-STF-chat-cofondatori | `staff│chat-cofondatori` | Community Staff | testuale | sconsigliata | `docs/artwork/export/discord/canali/stf-chat-cofondatori.png` | ☐ |
| D-STF-chat-curatori-social | `staff│chat-curatori-social` | Community Staff | testuale | sconsigliata | `docs/artwork/export/discord/canali/stf-chat-curatori-social.png` | ☐ |
| D-STF-chat-curatori-eventi | `staff│chat-curatori-eventi` | Community Staff | testuale | sconsigliata | `docs/artwork/export/discord/canali/stf-chat-curatori-eventi.png` | ☐ |
| D-STF-chat-moderatori | `staff│chat-moderatori` | Community Staff | testuale | sconsigliata | `docs/artwork/export/discord/canali/stf-chat-moderatori.png` | ☐ |
| D-STF-chat-mentori | `staff│chat-mentori` | Community Staff | testuale | sconsigliata | `docs/artwork/export/discord/canali/stf-chat-mentori.png` | ☐ |
| D-STF-chat-tecnici | `staff│chat-tecnici` | Community Staff | testuale | sconsigliata | `docs/artwork/export/discord/canali/stf-chat-tecnici.png` | ☐ |
| D-STF-chat-debug | `staff│chat-debug` | Community Staff | testuale | sconsigliata | `docs/artwork/export/discord/canali/stf-chat-debug.png` | ☐ |
| D-STF-chat-creatori-contenuti | `staff│chat-creatori-contenuti` | Community Staff | testuale | sconsigliata | `docs/artwork/export/discord/canali/stf-chat-creatori-contenuti.png` | ☐ |
| D-STF-voce-cofondatori | `staff│voce-cofondatori` | Community Staff | vocale | sconsigliata | `docs/artwork/export/discord/canali/stf-voce-cofondatori.png` | ☐ |
| D-WOW-01-sblocca-sezione | `01 · sblocca-sezione` | Sezione WoW Forever | testuale | pubblica | `docs/artwork/export/discord/canali/wow-01-sblocca-sezione.png` | ☐ |
| D-WOW-02-informazioni | `02 · informazioni` | Sezione WoW Forever | testuale | pubblica | `docs/artwork/export/discord/canali/wow-02-informazioni.png` | ☐ |
| D-WOW-02b-faq | `02b · faq` | Sezione WoW Forever | testuale | sconsigliata | `docs/artwork/export/discord/canali/wow-02b-faq.png` | ☐ |
| D-WOW-03-candidatura | `03 · candidatura` | Sezione WoW Forever | forum | pubblica | `docs/artwork/export/discord/canali/wow-03-candidatura.png` | ☐ |
| D-WOW-04-annunci | `04 · annunci` | Sezione WoW Forever | testuale | pubblica | `docs/artwork/export/discord/canali/wow-04-annunci.png` | ☐ |
| D-WOW-05-calendario | `05 · calendario` | Sezione WoW Forever | forum | sconsigliata | `docs/artwork/export/discord/canali/wow-05-calendario.png` | ☐ |
| D-WOW-06-hub | `06 · hub` | Sezione WoW Forever | forum | facoltativa | `docs/artwork/export/discord/canali/wow-06-hub.png` | ☐ |
| D-WOW-HUB-presentazioni | `06 · hub › presentazioni` | Sezione WoW Forever | forum-topic | pubblica | `docs/artwork/export/discord/canali/wow-hub-presentazioni.png` | ☐ |
| D-WOW-HUB-informazioni | `06 · hub › informazioni` | Sezione WoW Forever | forum-topic | pubblica | `docs/artwork/export/discord/canali/wow-hub-informazioni.png` | ☐ |
| D-WOW-HUB-regolamento | `06 · hub › regolamento` | Sezione WoW Forever | forum-topic | pubblica | `docs/artwork/export/discord/canali/wow-hub-regolamento.png` | ☐ |
| D-WOW-HUB-chat | `06 · hub › chat` | Sezione WoW Forever | forum-topic | pubblica | `docs/artwork/export/discord/canali/wow-hub-chat.png` | ☐ |
| D-WOW-HUB-lfg | `06 · hub › lfg` | Sezione WoW Forever | forum-topic | pubblica | `docs/artwork/export/discord/canali/wow-hub-lfg.png` | ☐ |
| D-WOW-HUB-roster | `06 · hub › roster di raid` | Sezione WoW Forever | forum-topic | pubblica | `docs/artwork/export/discord/canali/wow-hub-roster.png` | ☐ |
| D-WOW-HUB-loot | `06 · hub › loot` | Sezione WoW Forever | forum-topic | pubblica | `docs/artwork/export/discord/canali/wow-hub-loot.png` | ☐ |
| D-WOW-HUB-banca-di-gilda | `06 · hub › banca di gilda` | Sezione WoW Forever | forum-topic | pubblica | `docs/artwork/export/discord/canali/wow-hub-banca-di-gilda.png` | ☐ |
| D-WOW-HUB-scambio-e-artigianato | `06 · hub › scambio e artigianato` | Sezione WoW Forever | forum-topic | pubblica | `docs/artwork/export/discord/canali/wow-hub-scambio-e-artigianato.png` | ☐ |
| D-WOW-HUB-addon | `06 · hub › addon` | Sezione WoW Forever | forum-topic | pubblica | `docs/artwork/export/discord/canali/wow-hub-addon.png` | ☐ |
| D-WOW-HUB-i-consigli-del-finland | `06 · hub › i consigli del Finland` | Sezione WoW Forever | forum-topic | pubblica | `docs/artwork/export/discord/canali/wow-hub-i-consigli-del-finland.png` | ☐ |
| D-WOW-HUB-assenze | `06 · hub › assenze` | Sezione WoW Forever | forum-topic | pubblica | `docs/artwork/export/discord/canali/wow-hub-assenze.png` | ☐ |
| D-WOW-07-wiki | `07 · wiki` | Sezione WoW Forever | forum | sconsigliata | `docs/artwork/export/discord/canali/wow-07-wiki.png` | ☐ |
| D-WOW-08-novelle | `08 · novelle` | Sezione WoW Forever | forum | sconsigliata | `docs/artwork/export/discord/canali/wow-08-novelle.png` | ☐ |
| D-WOW-09-direzione | `09 · direzione` | Sezione WoW Forever | forum | sconsigliata | `docs/artwork/export/discord/canali/wow-09-direzione.png` | ☐ |
| D-WOW-DIR-globale | `09 · direzione › Globale` | Sezione WoW Forever | forum-topic | sconsigliata | `docs/artwork/export/discord/canali/wow-dir-globale.png` | ☐ |
| D-WOW-DIR-alleanza | `09 · direzione › Alleanza` | Sezione WoW Forever | forum-topic | sconsigliata | `docs/artwork/export/discord/canali/wow-dir-alleanza.png` | ☐ |
| D-WOW-DIR-orda | `09 · direzione › Orda` | Sezione WoW Forever | forum-topic | sconsigliata | `docs/artwork/export/discord/canali/wow-dir-orda.png` | ☐ |
| D-WOW-DIR-reclutamento | `09 · direzione › Reclutamento` | Sezione WoW Forever | forum-topic | sconsigliata | `docs/artwork/export/discord/canali/wow-dir-reclutamento.png` | ☐ |
| D-WOW-candidatura-officer | `candidatura-officer` | Sezione WoW Forever | testuale | sconsigliata | `docs/artwork/export/discord/canali/wow-candidatura-officer.png` | ☐ |
| D-WOW-VOC-accettazione | `accettazione` | Sezione WoW Forever | vocale | sconsigliata | `docs/artwork/export/discord/canali/wow-voc-accettazione.png` | ☐ |
| D-WOW-VOC-sale | `sala-1, sala-2, sala-3…` | Sezione WoW Forever | vocale | sconsigliata | `docs/artwork/export/discord/canali/wow-voc-sale.png` | ☐ |
| D-WOW-VOC-riunione | `riunione` | Sezione WoW Forever | vocale | sconsigliata | `docs/artwork/export/discord/canali/wow-voc-riunione.png` | ☐ |
| D-WOW-VOC-ufficio | `ufficio` | Sezione WoW Forever | vocale | sconsigliata | `docs/artwork/export/discord/canali/wow-voc-ufficio.png` | ☐ |

## 3. Le schede

### 3.1 Benvenuto

#### D-BEN-inizia-qui · `inizia-qui`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/ben-inizia-qui.png`
- **Pubblicazione:** pubblica — È la prima porta del server: l'immagine dice 'sei atteso' prima di qualunque testo.
- **Mostra:** Il viaggiatore di spalle sulla soglia interna, la tazza posata accanto allo sgabello libero, l'Oste piccolo che si scosta.
- **Non mostrare:** Sala che si volta in massa verso chi entra, Oste in primo piano, volto del viaggiatore, insegna con scritte sopra la porta.
- **Fonte:** media/scene/001-il-passo-che-manca.md (Fotogramma, Regia, Blocco soggetto) + PROMPTS.md §2.5

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Inside the vestibule of the inn, a lone traveller with one hand still on a satchel strap pauses at the inner doorway, seen from behind, the indigo noren just parted. At their feet the floor changes from worn stone to warm timber. Beyond, in the softly busy hall, the Innkeeper, a robot host with a smooth dark brushed-metal face, no mouth, two round amber optics, an off-white robe with a dark obi and a small cloth cap, has set one steaming cup beside an empty stool and stepped aside. Nobody turns to stare. A single thin magenta neon arc curves above the inner doorway, the only neon. Composition: the traveller and the doorway sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Il buio in alto a sinistra della scheda diventa il quarto sinistro scuro del formato; la soglia è quella interna vestibolo-sala, così l'arco al neon sta sulla porta in vista. Oste ridotto a figura di fondo.

#### D-BEN-la-locanda · `la-locanda`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/ben-la-locanda.png`
- **Pubblicazione:** pubblica — Racconta che cos'è la casa: una sala dove i gruppi convivono e qualcuno porta una sedia a chi arriva.
- **Mostra:** La sala vista dalla soglia, un ospite che attraversa il corridoio con una sedia in più per chi è appena arrivato.
- **Non mostrare:** Folla con un protagonista al centro, gruppi di schiena che chiudono il cerchio, dettaglio minuto su tutti i tavoli a fuoco.
- **Fonte:** media/scene/002-la-sala-tiene-insieme-le-distanze.md (Fotogramma, Regia, Blocco soggetto) + PROMPTS.md §2.4

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. The great hall of the inn seen from the vestibule, framed by the timber posts of the entrance doorway, indigo noren tied back at its sides. Beyond, small islands of evening life at the tables: a paused board game, a shared dish, a small device being mended between two bowls; the long bar dim on the left, the arched window onto the violet nebula on the right. In the lit aisle one guest carries an extra chair toward someone who has just arrived, the one figure in clear focus; nobody else dominates. A single thin magenta neon arc curves along the top of the doorway frame, the only neon. Composition: the chair-carrier and the lit aisle sit centre-right inside the central horizontal band; the left quarter, the doorway post and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- La sala della scheda è ripresa dalla soglia per restare nella zona Benvenuto con l'arco sulla porta; un solo soggetto a fuoco (la sedia portata) per la lettura a 360 px. Tolto l'Oste al bancone.

#### D-BEN-editto-della-locanda · `editto-della-locanda`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/ben-editto-della-locanda.png`
- **Pubblicazione:** pubblica — L'oggetto più solenne della casa, mostrato come una riparazione fatta insieme: regge da solo la testata.
- **Mostra:** La placca d'ottone storta, tre mani che la rimettono a posto, la lanterna sollevata dall'Oste, la tazza a metà.
- **Non mostrare:** Placca come trono o altare, incisioni leggibili, volti in primo piano, chiodi decorativi o ingranaggi.
- **Fonte:** media/scene/003-il-chiodo-dell-editto.md (Fotogramma, Regia, Blocco soggetto) + PROMPTS.md §3 (editto)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Close view of an aged brass plaque on the timber beam beside the entrance doorway, in the vestibule. The plaque has slipped crooked: a veteran guest's weathered hand holds it flat while a newcomer's hand sets a small nail into the old hole, and the jointed brass-and-steel hand of the Innkeeper raises a paper lantern so the light rakes across the work. The centre of the plaque is blank and polished inside a worn engraved border. On a narrow shelf below sits a half-finished cup of tea, left mid-conversation. Faces stay out of frame or at the very edges. A single thin magenta neon arc curves over the nearby doorway, the only neon. Composition: the plaque and the three hands sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Master 4:3 della scheda portato a 16:9 con fascia 5:2; la trave è spostata accanto alla porta del vestibolo. Dell'Oste resta solo la mano con la lanterna.

#### D-BEN-regolamento · `regolamento`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/ben-regolamento.png`
- **Pubblicazione:** pubblica — Le regole come gesto che raffredda una lite, non come sanzione: tono giusto per un canale che si legge prima di entrare.
- **Mostra:** La lavagna vuota delle regole e, sotto, una mano che versa acqua fra due tazze allontanate e due mani che si aprono.
- **Non mostrare:** Bilancia, martello, sanzioni, Oste che giudica, pubblico che assiste, scritte di gesso.
- **Fonte:** media/scene/004-le-voci-si-abbassano.md (Fotogramma, Regia, Blocco soggetto) + PROMPTS.md §3 (lavagna)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. In the vestibule, a dark slate house-rules board hangs on the wall beside the inner doorway, its surface completely blank in a plain wooden frame. Below it, on a small timber bench-table, the moment a quarrel cools: two cups that had been pushed too close now stand apart, two pairs of hands have opened and eased back, and a third person's hand pours water from a ceramic pitcher between them. Their chairs stand a little further apart than before. Faces are cropped at the frame edges; the gesture carries the scene. A single thin magenta neon arc curves above the inner doorway, the only neon. Composition: the pitcher, the two cups and the blank board above them sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Fra la scheda (de-escalation), la lavagna di PROMPTS e la bilancia della vecchia C-03 '#regole' (nome errato) ho tenuto la de-escalation, stretta sulle mani per leggersi a 360 px; la lavagna passa dal bancone al vestibolo.

#### D-BEN-statuto · `statuto`  `facoltativa`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/ben-statuto.png`
- **Pubblicazione:** facoltativa — Aspetta l'ente (ADR-016): finché non esiste, l'immagine può aspettare con lui.
- **Mostra:** La custodia aperta col vetro sollevato, la lente d'ottone, la sedia libera alla stessa altezza.
- **Non mostrare:** Sigilli, timbri ufficiali, firme, pergamene solenni, scrivanie da tribunale, pagine scritte.
- **Fonte:** media/scene/005-la-carta-sotto-il-vetro.md (Fotogramma, Regia, Blocco soggetto)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. On a consultation table in the vestibule, near the entrance, a wooden document case lies open; two hands lift its hinged protective glass panel. Inside rest blank cream pages, and a brass magnifying lens waits on the margin. The soft reflection of a window crosses the glass without hiding the pages. Beside the table an empty chair, at the same height as the reader's, stands ready for anyone who wants to read, no audience required. A single thin magenta neon arc curves above the entrance doorway in the soft background, the only neon. Composition: the open case, the lens and the empty chair sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Due lettori ridotti a due mani più la sedia libera, per un solo soggetto leggibile; tavolo spostato nel vestibolo. Niente che suggerisca un ente già registrato.

#### D-BEN-ruoli · `ruoli`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/ben-ruoli.png`
- **Pubblicazione:** pubblica — Mostra i ruoli come turni che passano di mano, non come gradi: è il messaggio di ADR-009.
- **Mostra:** La bacheca delle targhette vuote, la chiave che torna al gancio, il grembiule annodato per il turno dopo.
- **Non mostrare:** Medaglie, gradi, piedistalli, targhette più grandi di altre, colori di rango, scritte sulle targhette.
- **Fonte:** media/scene/006-le-chiavi-e-i-piccoli-segni.md (Fotogramma, Regia, Blocco soggetto) + PROMPTS.md §3 (bacheca del personale)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. By the entrance, in the vestibule, a wooden staff board holds a grid of small blank brass nameplates, each with a tiny hook. A hand hangs a brass key back on its hook at the end of a shift, while beside the board another adult ties a work apron, ready to take over: one key passing from one person to the next. The brightest thing on the wall is the small work lamp over the board, there to see the work by. A single thin magenta neon arc curves above the doorway next to the board, the only neon. Composition: the board, the key and the apron sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Master 4:3 portato a 16:9; tolti il ripiano dei ricordi e il carrello in arrivo dalla scheda per lasciare un solo soggetto (il passaggio della chiave).

#### D-BEN-leveling · `leveling`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/ben-leveling.png`
- **Pubblicazione:** pubblica — Il manuale della crescita: il timbro sospeso dice 'si impara a leggere il percorso' senza fissare gradi ancora aperti.
- **Mostra:** Il timbro fermo sopra la scheda vuota, il foglio con impronte astratte sparse, chi impara dall'altro lato.
- **Non mostrare:** Tessera a caselle contabili, scale numerate, corone, conteggi di timbri, coppe o podi.
- **Fonte:** media/scene/007-prima-di-premere-il-timbro.md (Fotogramma, Regia, Blocco soggetto)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. At a small timber table in the vestibule, an experienced hand holds a brass stamp just above a blank card, pausing before pressing. Across the table a newcomer leans in to study a loose sheet with a few earlier impressions: soft abstract spiral marks, scattered freely, never in a grid or a row. A worn ink pad and a brass lens lie between them. It is a lesson, not a ceremony; there is time to ask. A single thin magenta neon arc curves above the doorway behind them, the only neon. Composition: the suspended stamp and the card sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Scartata la tessera di PROMPTS §3 (sei cerchi, tre timbrati): si contano e fisserebbero soglie che ADR-010 lascia aperte. Master 4:3 portato a 16:9; tavolino nel vestibolo.

#### D-BEN-faq · `faq`  `sconsigliata`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/ben-faq.png`
- **Pubblicazione:** sconsigliata — Elenco di servizio: si consulta e si scorre, una testata aggiunge solo peso.
- **Mostra:** Il tovagliolo piegato a striscia, il taccuino vuoto con la matita, l'Oste sfocato che aspetta.
- **Non mostrare:** Punti interrogativi, pagine scritte, Oste nitido in primo piano o che indica.
- **Fonte:** media/scene/008-la-domanda-sul-tovagliolo.md (Fotogramma, Regia, Blocco soggetto) + PROMPTS.md §3 (taccuino)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. At the small desk by the entrance, in the vestibule, a guest's hands hold a napkin folded again and again into a thin strip. Beside it lies an open notebook with blank ruled pages and a pencil just set down. Across the desk, out of focus, the Innkeeper waits without pointing to any answer: a smooth dark brushed-metal face with no mouth, two round amber optics, an off-white robe. A thread of steam from a small teapot rises between them. A single thin magenta neon arc curves above the doorway behind, the only neon. Composition: the folded napkin and the notebook sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Estremità del bancone spostata al banchetto del vestibolo; master 4:3 portato a 16:9.

#### D-BEN-guida · `guida`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/ben-guida.png`
- **Pubblicazione:** pubblica — Il canale che si usa davvero: l'immagine dell'orientamento accompagna senza promettere atmosfera al testo, che è pratico.
- **Mostra:** La guida con la lanterna bassa sugli inserti del pavimento e il nuovo arrivato attratto dal tavolo della riparazione.
- **Non mostrare:** Frecce luminose, segnaletica da interfaccia, mappe con scritte, percorso a ostacoli.
- **Fonte:** media/scene/009-il-giro-delle-lanterne.md (Fotogramma, Regia, Blocco soggetto)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. In the passage that leads from the entrance into the hall, two travellers walk side by side. The guide, an older adult, holds a small brass lantern low so its pool of light falls on brass inlays set into the timber floor. The newcomer has turned their head toward a side opening, where someone is mending a small instrument at a lit table, and the guide pauses and gently turns that way too. One destination in focus, the other openings soft. A single thin magenta neon arc curves above the passage doorway, the only neon. Composition: the two walkers and the lantern light sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- La fascia sinistra tranquilla della scheda coincide col quarto sinistro scuro; la diagonale del pavimento va tenuta corta perché il soggetto resti nella fascia centrale.

#### D-BEN-links · `links`  `sconsigliata`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/ben-links.png`
- **Pubblicazione:** sconsigliata — Elenco di servizio che cambia nel tempo: i link valgono più di un'immagine sopra.
- **Mostra:** La mano che collega il cavo al terminale d'ottone, la spia accesa, le cartoline senza indirizzi.
- **Non mostrare:** Schermi con interfacce, icone di social, loghi, indirizzi o scritte sulle cartoline.
- **Fonte:** media/scene/010-il-filo-verso-gli-altri-porti.md (Fotogramma, Regia, Blocco soggetto)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. In a small wooden alcove of the vestibule, between shelves, a hand plugs a cloth-covered cable into a brass communication terminal; one round glass indicator glows softly. Beside the terminals a few blank postcards, painted with distant docks and set tables, wait to be chosen; the other terminals rest unlit. Through the entrance beyond, the inn is softly recognisable. A single thin magenta neon arc curves above the entrance doorway, the only neon. Composition: the cable, the terminal and the postcards sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Il vano scuro a destra della scheda passa a sinistra per il formato; nicchia spostata nel vestibolo; tolto l'Oste sullo sfondo.

#### D-BEN-supportaci · `supportaci`  `facoltativa`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/ben-supportaci.png`
- **Pubblicazione:** facoltativa — Aspetta ente e soldi (ADR-016/017); oggi si chiede solo il boost, quindi nessun barattolo né monete.
- **Mostra:** Due ospiti che rimettono il vetro nuovo nella lanterna dell'ingresso, il vetro incrinato messo da parte.
- **Non mostrare:** Barattolo delle mance, monete, banconote, cartellini di prezzo, effetto premio sul vetro, chi dona celebrato.
- **Fonte:** media/scene/011-il-vetro-della-lanterna-nuova.md (Fotogramma, Regia, Blocco soggetto)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Under the entrance doorway, a paper-and-brass lantern hangs from its bracket, its cracked pane just taken out. A guest on a short step stool fits the new glass pane into the frame while another adult holds the lantern steady from below; the cracked pane rests on a ledge beside them. The light is coming back whole onto the timber of the threshold. Shared upkeep, done by hand, for everyone who passes. A single thin magenta neon arc curves above the doorway, just behind the lantern, the only neon. Composition: the lantern and the working hands sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Tolti barattolo e monete (scheda e PROMPTS §3) per la regola 'niente donazioni finché l'ente non esiste'; tolto l'Oste che serve; la lanterna è quella sopra la porta d'ingresso.

---

### 3.2 Community Hub

#### D-HUB-annunci · `annunci`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/hub-annunci.png`
- **Pubblicazione:** pubblica — Il canale che tutti seguono: l'attimo prima della campana dice 'sta per arrivare qualcosa' senza rumore.
- **Mostra:** L'Oste con la mano sulla corda della campana, il foglio bianco appena fissato, la sala che si fa attenta.
- **Non mostrare:** Campana che suona, megafoni, folla in posa rivolta all'Oste, scritte sul foglio.
- **Fonte:** media/scene/012-la-campana-aspetta.md (Fotogramma, Regia, Blocco soggetto) + PROMPTS.md §3 (campana e tabellone)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. In the great hall, beside a cork notice board near the bar, the Innkeeper, a robot host with a smooth dark brushed-metal face, no mouth, two round amber optics, an off-white robe with a dark obi and a small cloth cap, rests one hand on a brass bell cord and waits. A fresh blank sheet has just been pinned to the board, one corner still curling. Behind him the hall is turning attentive, a bowl set down, nobody posing. Through the arched window a small ship crosses the violet nebula. A single long straight magenta neon tube runs above the bar counter, the only neon. Composition: the bell, the blank notice and the Innkeeper sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- La scheda metteva la campana nel terzo destro con la sala a sinistra: tenuto, ma la sala resta scura nel quarto sinistro. Preferito alla bacheca senza figure della vecchia C-03-annunci perché l'Oste qui dà voce all'annuncio.

#### D-HUB-bacheca-degli-osannati · `bacheca-degli-osannati`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/hub-bacheca-degli-osannati.png`
- **Pubblicazione:** pubblica — L'albo del grado più alto: cornici uguali e festeggiato distratto dicono riconoscenza, non podio.
- **Mostra:** La nuova cornice appesa in fila con le altre uguali, la targhetta vuota, il festeggiato lontano che ancora aiuta.
- **Non mostrare:** Ritratti riconoscibili, cornici più grandi, folla che applaude, podio, coppe, nomi sulla targhetta.
- **Fonte:** media/scene/013-una-cornice-trova-posto.md (Fotogramma, Regia, Blocco soggetto) + PROMPTS.md §3 (muro dei ritratti)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. On the timber wall at the end of the bar, a row of modest brass portrait frames, all the same size and hung at the same height, each holding a dim, indistinct painted figure. A pair of hands sets a new frame into its place in the row; beneath it a small blank caption plate waits. Far behind, softly out of focus, the honoured guest is still helping to move a table and has not noticed yet. The gratitude is quiet and shared. A single long straight magenta neon tube runs above the bar counter, the only neon. Composition: the new frame and the row of frames sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Master 4:3 portato a 16:9; parete collocata in fondo al bancone (zona Hub). Le cornici sono d'ottone, non al neon, per non confondersi con la cornice dei Topics.

#### D-HUB-reputazione · `reputazione`  `sconsigliata`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/hub-reputazione.png`
- **Pubblicazione:** sconsigliata — Flusso automatico di avanzamenti: nessuno legge la testata di un canale che scorre da solo.
- **Mostra:** L'impronta fresca sulla scheda, la mano imbarazzata, due tazze accostate.
- **Non mostrare:** Numeri di livello, barre di progresso, medaglie, podi, timbri contabili.
- **Fonte:** media/scene/014-il-segno-appena-asciutto.md (Fotogramma, Regia, Blocco soggetto)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Close at the bar counter: a fresh abstract ink impression is drying on a guest card. Its recipient half-covers the edge with a shy hand, while a neighbour slides their own cup alongside, the two cups just touching. Behind them service goes on as usual, the bar softly busy and out of focus. A small moment that changes how the seat feels. A single long straight magenta neon tube runs above the bar counter, the only neon. Composition: the card, the fingers and the two cups sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Master 4:3 portato a 16:9; la metà superiore calma della scheda diventa quarto sinistro e fasce alte e basse scure.

#### D-HUB-presentati · `presentati`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/hub-presentati.png`
- **Pubblicazione:** pubblica — Il registro aperto e la sedia liberata dicono che presentarsi è facoltativo e già accolto (ADR-011).
- **Mostra:** Il registro aperto con la penna a riposo, il piccolo oggetto di viaggio posato accanto, uno sgabello che si libera.
- **Non mostrare:** Pagine scritte, nomi o dati personali, moduli, esami d'ingresso, Oste in primo piano.
- **Fonte:** media/scene/015-la-pagina-e-il-posto.md (Fotogramma, Regia, Blocco soggetto) + PROMPTS.md §3 (registro); vecchia C-03-presentati

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. On the worn timber bar counter, a large leather-bound guest register lies open on blank cream pages, a brass pen still resting unused in the gutter. A newly arrived traveller's hand sets a small travel keepsake beside the book, a carved wooden bird, as if it could speak for them. Just behind their shoulder, softly focused, another guest pulls out a stool for them before the introduction is even finished. A single long straight magenta neon tube runs above the bar counter, the only neon. Composition: the open register and the keepsake sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Tolto l'Oste che guarda l'oggetto (meno Oste nel lotto); l'oggetto di viaggio è fissato in un uccellino di legno, leggibile a 360 px. Master 4:3 portato a 16:9.

#### D-HUB-al-bancone · `al-bancone`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/hub-al-bancone.png`
- **Pubblicazione:** pubblica — La piazza dell'Hub: il bancone stesso è l'oggetto del canale.
- **Mostra:** Tre avventori che parlano lungo il banco in diagonale, una tazza che scorre, l'Oste che asciuga un bicchiere più in là.
- **Non mostrare:** Bottiglie in primo piano, ubriachezza, un protagonista al centro, Oste in primo piano.
- **Fonte:** media/scene/016-la-conversazione-continua.md (Fotogramma, Regia, Blocco soggetto) + PROMPTS.md §2.6

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. An intimate diagonal view along the long worn bar, camera at counter height. Three adult travellers of different ages, builds and species talk easily from different positions: one seated, one leaning on the counter, one still in a coat. A cup slides along the timber from one hand to another. Further down the bar, the Innkeeper, a robot host with a smooth dark brushed-metal face, no mouth, two round amber optics and an off-white robe, dries a glass. Faces are partly cut by the frame, nobody posing. A single long straight magenta neon tube runs above the bar counter, the only neon. Composition: the three travellers and the run of cups sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- La fascia alta scura della scheda diventa quarto sinistro e fasce alte e basse scure; il neon è il tubo dritto sopra il banco.

#### D-HUB-al-tavolo-meme · `al-tavolo-meme`  `sconsigliata`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/hub-al-tavolo-meme.png`
- **Pubblicazione:** sconsigliata — Canale di flusso fatto di immagini altrui: la testata si perde subito.
- **Mostra:** Il cucchiaio sul piedistallo di ricambi, il saluto solenne trattenuto, il robottino che aspetta il suo cucchiaio.
- **Non mostrare:** Facce deformate o caricaturali, risate sguaiate, meme o simboli riconoscibili, accento al neon sul piedistallo.
- **Fonte:** media/scene/017-il-cucchiaio-piu-solenne.md (Fotogramma, Regia, Blocco soggetto)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. At a table in the great hall, a humble spoon stands mounted on a tiny pedestal built from brass spare parts. One guest offers it an absurdly formal salute while the others at the table press their lips together so as not to laugh. Next to the table the small round service robot, knee-high, brass and dark enamel with two small cyan optics, waits with a tray that is missing exactly one spoon. Affectionate tabletop comedy carried by held-back gestures. A single long straight magenta neon tube runs above the bar counter in the background, the only neon. Composition: the spoon monument and the waiting robot sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Tolto il 'piccolo accento magenta sul piedistallo' della scheda: sarebbe un secondo neon. È l'unico uso del robot di servizio nel lotto, perché è la battuta.

#### D-HUB-al-tavolo-nsfw · `al-tavolo-nsfw`  `facoltativa`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/hub-al-tavolo-nsfw.png`
- **Pubblicazione:** facoltativa — Solo se il canale apre davvero (ADR-008 Q6, verifica dell'età): adulti evidenti, vestiti, la tenda chiusa come confine.
- **Mostra:** Due adulti dai capelli grigi, vestiti, a un tratto di bancone chiuso da una tenda color vino, tè e carte coperte.
- **Non mostrare:** Nudità o allusioni, tratti giovanili, uniformi, alcol o bicchieri da vino, documenti, '18+', sguardo da spioncino.
- **Fonte:** media/scene/018-la-tenda-color-vino.md (Fotogramma, Regia, Blocco soggetto)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. A short private stretch of the bar counter, closed off from the rest of the hall by a heavy wine-coloured curtain drawn fully shut behind it, its folds still settling. On stools at this end of the counter sit two clearly older adults, grey hair and lined faces, in layered everyday clothes, with cups of tea and a closed deck of cards with plain patterned backs between them. One talks quietly; the other listens with relaxed, open hands. Personal space is evident; the curtain is a boundary, not a secret. A single long straight magenta neon tube runs above this stretch of counter, the only neon. Composition: the two adults and the closed curtain sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Il salottino della scheda diventa un tratto di bancone separato dalla tenda (zona Hub, neon sopra il banco); bicchieri 'quasi pieni' sostituiti col tè; età resa evidente come chiedono le regole.

#### D-HUB-suggerimenti · `suggerimenti`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/hub-suggerimenti.png`
- **Pubblicazione:** pubblica — Dice che una proposta imperfetta diventa di tutti: invito diretto a scrivere nel canale.
- **Mostra:** Il modellino che cede e tre mani di persone diverse che lo sostengono, il quaderno vuoto accanto.
- **Non mostrare:** Scatole dei suggerimenti con fessure, schede scritte, voti, pollici in su, ingranaggi decorativi.
- **Fonte:** media/scene/019-il-modellino-entra-sul-tavolo.md (Fotogramma, Regia, Blocco soggetto)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. On a table in the great hall near the bar, a handmade model of a folding shelf, built from wooden sticks, wire and brass washers, tilts as one leg gives way. Before it touches the table, two hands from different guests catch it from opposite sides, while the hand of the person who built it is still reaching in. Beside it lies an open sketchbook with blank pages. Curious, collaborative, a little funny. A single long straight magenta neon tube runs above the bar counter in the background, the only neon. Composition: the tilting model and the three hands sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Master 4:3 portato a 16:9; il quaderno laterale per le note è lasciato vuoto e piccolo per non competere col modellino.

#### D-HUB-off-topics · `off-topics`  `sconsigliata`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/hub-off-topics.png`
- **Pubblicazione:** sconsigliata — Canale di flusso per ciò che non c'entra niente: una testata non serve.
- **Mostra:** La conchiglia minuscola nel guanto da lavoro, chi ascolta e chi guarda con la lente, la partita dimenticata.
- **Non mostrare:** Mare, spiagge, acqua fuori dalla finestra, cerchio chiuso di schiene, giochi da tavolo riconoscibili.
- **Fonte:** media/scene/020-una-conchiglia-fra-le-stelle.md (Fotogramma, Regia, Blocco soggetto)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. At a side table of the great hall, a traveller in a heavy work glove holds out a seashell, absurdly small in her palm. The neighbours, seated in an open half-ring, lean in: one tilts an ear toward it, another raises a brass magnifying lens. Under a forgotten cup, the board game they sat down for lies abandoned. Through the arched window behind them there is no sea, only the violet nebula. A single long straight magenta neon tube runs above the bar counter in the background, the only neon. Composition: the shell and the hands around it sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- La 'composizione circolare' della scheda è aperta a semicerchio per non chiudere il gruppo di schiena; master 4:3 portato a 16:9.

---

### 3.3 Community Salotto

#### D-SAL-generale · `Generale`  `sconsigliata`

- **Tipo:** vocale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2)
- **Dove va:** chat testuale del vocale, che è effimera: per questo è sconsigliata.
- **File:** `docs/artwork/export/discord/canali/sal-generale.png`
- **Pubblicazione:** sconsigliata — Chat vocale effimera senza testata: la scena si tiene per eventi o post, non per il canale.
- **Mostra:** Il cerchio aperto di poltrone attorno alla stufa schermata, chi racconta, chi si inserisce, la poltrona vuota in primo piano.
- **Non mostrare:** Falò centrale eroico, microfoni, cuffie, icone vocali, cerchio chiuso di schiene.
- **Fonte:** media/scene/021-il-cerchio-incompleto.md (Fotogramma, Regia, Blocco soggetto); vecchia C-03 'Il Fuoco acceso'

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. A lounge alcove of the inn with armchairs and floor cushions set in an open, incomplete circle around a screened cast-iron heater placed to one side. One adult tells a story with their hands; a newcomer shifts a cushion to slip in without interrupting. Two cups wait on the edge of the rug for guests who will come back. Their shadows meet on the sliding shoji panels behind them. In the foreground an empty armchair is turned toward the circle as an invitation. A single thin magenta neon ring hangs on the alcove wall, the only neon. Composition: the circle of seats and the empty armchair sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Scelta la scheda 021 sulla vecchia C-03 del vocale 'Il Fuoco' (canale inesistente); il neon ad anello riprende il cerchio. Formato del canale testuale per coerenza, anche se il vocale non ha testata.

#### D-SAL-adulti · `Adulti`  `sconsigliata`

- **Tipo:** vocale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2)
- **Dove va:** chat testuale del vocale, che è effimera: per questo è sconsigliata.
- **File:** `docs/artwork/export/discord/canali/sal-adulti.png`
- **Pubblicazione:** sconsigliata — Chat vocale effimera senza testata; e il nome 'Adulti' chiede doppia cautela in un'immagine pubblica.
- **Mostra:** La lavoratrice che si sfila i guanti, il pasto coperto, due compagni adulti che lasciano spazio al silenzio.
- **Non mostrare:** Qualunque allusione erotica, tratti giovanili, alcol, uniformi, pose, letti o tende da alcova.
- **Fonte:** media/scene/022-dopo-il-turno-lungo.md (Fotogramma, Regia, Blocco soggetto)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. A quiet lounge alcove late in the evening, deep armchairs beside a narrow window onto the nebula. A worker just off a long shift, a woman in her fifties, slowly pulls off worn work gloves one finger at a time. Two companions, also clearly adult, one of them grey-haired, have kept the seat for her; on the low table between them wait a covered meal and a pot of tea. Nobody asks yet how it went. A low lamp lights only the hands. A single thin magenta neon ring hangs on the alcove wall, faint, the only neon. Composition: the gloves, the hands and the covered meal sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: low night light, indigo-violet (#2A1D3B to #7E2AA8) dominant, a single small warm amber glow (one lamp) as the only warm note, and ONE soft magenta neon glow (#C45BC4) as the only neon, deep violet-black shadows (#0B0612, never pure black). Fine film grain, painterly brushwork, intimate quiet composition, tender and slightly sad mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Luce V per la sera dopo il turno, la lampada è la goccia d'ambra; età resa visibile per tutti e tre. Lo spazio testo nel pannello laterale della scheda diventa il quarto sinistro.

#### D-SAL-musica · `Musica`  `sconsigliata`

- **Tipo:** vocale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2)
- **Dove va:** chat testuale del vocale, che è effimera: per questo è sconsigliata.
- **File:** `docs/artwork/export/discord/canali/sal-musica.png`
- **Pubblicazione:** sconsigliata — Chat vocale effimera senza testata: l'immagine resta di scorta per serate musicali.
- **Mostra:** Il giradischi di legno e ottone, la musicista con lo strumento a corde, due dita del tecnico sul mobile, ascoltatori sparsi.
- **Non mostrare:** Palco, riflettori, strumenti o marchi riconoscibili, copertine di dischi disegnate, note musicali grafiche.
- **Fonte:** media/scene/023-il-disco-gira-ancora.md (Fotogramma, Regia, Blocco soggetto)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. In the music corner of the lounge, a wood-and-brass record player turns beside an adult musician holding a long note on a modest string instrument, while a technician rests two fingers on the cabinet to calm its vibration. Around them listeners in armchairs keep drinking tea and sketching, nobody facing a stage. A blank record sleeve leans against the cabinet. A single thin magenta neon ring hangs on the wall above the corner, the only neon. Composition: the record player and the musician sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Lo spazio vuoto sulla parete destra della scheda passa a sinistra per il formato; bevute rese esplicitamente come tè.

#### D-SAL-assente · `Assente`  `sconsigliata`

- **Tipo:** vocale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2)
- **Dove va:** chat testuale del vocale, che è effimera: per questo è sconsigliata.
- **File:** `docs/artwork/export/discord/canali/sal-assente.png`
- **Pubblicazione:** sconsigliata — Canale di parcheggio vocale: nessuno lo guarda, nessuna testata serve.
- **Mostra:** La poltrona vuota con la sciarpa piegata, la tazza coperta, la lampada abbassata, la sala oltre lo schermo.
- **Non mostrare:** Persone addormentate, robot che sorveglia, orologi, icone di 'assente', tristezza da lutto.
- **Fonte:** media/scene/024-la-tazza-coperta.md (Fotogramma, Regia, Blocco soggetto); vecchia C-03 'Il Fuoco spento'

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. A small rest nook off the lounge: one comfortable armchair, empty, a neatly folded scarf on its arm. On the side table a cup has been covered with its lid, and the little lamp beside it has been turned down to a low glow. The other seats are far away and nobody has taken this one. Through the slats of a timber screen, the busy hall moves softly out of focus. A brief absence, kept and respected. A single thin magenta neon ring hangs on the nook wall, the only neon. Composition: the armchair, the scarf and the covered cup sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: low night light, indigo-violet (#2A1D3B to #7E2AA8) dominant, a single small warm amber glow (one lamp) as the only warm note, and ONE soft magenta neon glow (#C45BC4) as the only neon, deep violet-black shadows (#0B0612, never pure black). Fine film grain, painterly brushwork, intimate quiet composition, tender and slightly sad mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Tolto il robot di servizio (va usato raramente): resta la traccia del suo gesto, coperchio e lampada abbassata; la presenza è la lampada accesa. Luce V.

---

### 3.4 Community Lore

#### D-LOR-00 · `lore│00-prologo`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/lor-00.png`
- **Pubblicazione:** pubblica — Un Libro ha una sola identità, sul sito e su Discord: la testata riusa il motivo della copertina L-00, ricomposto in orizzontale con gli stessi riferimenti e lo stesso seed.
- **Mostra:** lo stesso soggetto di [L-00](03-lore-copertine.md) (Prologo — Una notte di deposito), in orizzontale.
- **Non mostrare:** tutto ciò che la copertina L-00 non mostra (vedi la sua scheda): stesse soglie di spoiler.
- **Fonte:** `03-lore-copertine.md` L-00

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Interior corner of the inn beside the entrance vestibule, very late at night. A tired adult woman sits in a deep padded armchair at the tall window, seen in three-quarter profile, a soft cushion behind her head; both hands wrap a plain house cup of hot water with a thin curl of steam, her fingers still slightly curled as if around a lever; her hair is tied back and she wears plain dark work clothes with no coat; a worn travel bag with a buckle rests on the floor beside the chair. Her face is quiet and very tired, and her faint reflection looks back from the dark glass. Through the tall curved window: the domed city of Concordia far below with its tiered towers of timber balconies on brass frames, thin artificial rain falling only inside the dome over the city while the inn's own glass above the dome rim stays perfectly dry, a tram carrying a row of yellow windows into the rock, and above it a vast violet fold of nebula. Nobody else is visible, no cart, no seals. The only magenta neon is a distant city sign seen through the glass. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master, recomposed from the vertical book cover with the same subject (not a crop): keep the subject centre-right inside the central horizontal band (from 20% to 80% of the height); the left quarter and the top and bottom fifths are calm and dark; it must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Il Prologo non ha Veglia. Le schede 121–156 di `media/scene/` (rev1) non si usano come testate.

#### D-LOR-01 · `lore│01-la-sala-che-non-chiude-mai`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/lor-01.png`
- **Pubblicazione:** pubblica — Un Libro ha una sola identità, sul sito e su Discord: la testata riusa il motivo della copertina L-01, ricomposto in orizzontale con gli stessi riferimenti e lo stesso seed.
- **Mostra:** lo stesso soggetto di [L-01](03-lore-copertine.md) (Libro I — La sala che non chiude mai), in orizzontale.
- **Non mostrare:** tutto ciò che la copertina L-01 non mostra (vedi la sua scheda): stesse soglie di spoiler.
- **Fonte:** `03-lore-copertine.md` L-01

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Looking down the main aisle of the great hall late at night, vertical composition: long dark timber tables with chairs, paper lanterns at many heights, indigo noren curtains. At the far end the big front door is held wide open by a brass door stop, warm light and the violet nebula spilling in: this door has never been closed. Behind the counter on the left the small silhouette of the Innkeeper, a slender humanoid robot with a smooth dark brushed-metal face with NO mouth and NO nose, two round softly glowing amber optics (#FDA877), brushed-steel neck and jointed brass-and-steel hands, wearing a loose off-white linen kimono with a dark indigo obi sash and a small white cloth cap polishing a cup. A handful of tiny patrons sit far from the viewer, backlit with no visible faces: adults of different ages and builds, one non-human worker in an apron, one person sitting alone with a cup. One thin magenta neon tube above the bottle shelf is the only neon. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master, recomposed from the vertical book cover with the same subject (not a crop): keep the subject centre-right inside the central horizontal band (from 20% to 80% of the height); the left quarter and the top and bottom fifths are calm and dark; it must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- La **Veglia I — Una richiesta possibile** usa la sua copertina 3:4 così com'è ([L-02](03-lore-copertine.md)), allegata subito prima del suo testo: nessuna produzione nuova. Le schede 121–156 di `media/scene/` (rev1) non si usano come testate.

#### D-LOR-02 · `lore│02-il-permesso-di-andarsene`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/lor-02.png`
- **Pubblicazione:** pubblica — Un Libro ha una sola identità, sul sito e su Discord: la testata riusa il motivo della copertina L-03, ricomposto in orizzontale con gli stessi riferimenti e lo stesso seed.
- **Mostra:** lo stesso soggetto di [L-03](03-lore-copertine.md) (Libro II — Il permesso di andarsene), in orizzontale.
- **Non mostrare:** tutto ciò che la copertina L-03 non mostra (vedi la sua scheda): stesse soglie di spoiler.
- **Fonte:** `03-lore-copertine.md` L-03

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Same house style as the tavern: dark aged timber, brushed brass, paper-and-brass lamps, violet nebula light. A pressurised docking arm of the inn's berth, built of dark timber ribs and brushed brass, seen at night from along the walkway. Moored alongside is a small blunt freighter of which we see only a section of its flank and its round hatch, still held by every mooring cable and by the sealed boarding tube, as if it will stay; the light of the berth beacon slides slowly along the hull and the brass cables. The tall windows of the arm show a vast violet fold of nebula as a horizontal band at one third of the height. No people, no luggage, nobody waving: a stay, not a farewell. One small magenta neon strip on the berth control hut is the only neon. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master, recomposed from the vertical book cover with the same subject (not a crop): keep the subject centre-right inside the central horizontal band (from 20% to 80% of the height); the left quarter and the top and bottom fifths are calm and dark; it must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- La **Veglia II — Il posto lasciato libero** usa la sua copertina 3:4 così com'è ([L-04](03-lore-copertine.md)), allegata subito prima del suo testo: nessuna produzione nuova. Le schede 121–156 di `media/scene/` (rev1) non si usano come testate.

#### D-LOR-03 · `lore│03-le-case-spente`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/lor-03.png`
- **Pubblicazione:** pubblica — Un Libro ha una sola identità, sul sito e su Discord: la testata riusa il motivo della copertina L-05, ricomposto in orizzontale con gli stessi riferimenti e lo stesso seed.
- **Mostra:** lo stesso soggetto di [L-05](03-lore-copertine.md) (Libro III — Le case spente), in orizzontale.
- **Non mostrare:** tutto ciò che la copertina L-05 non mostra (vedi la sua scheda): stesse soglie di spoiler.
- **Fonte:** `03-lore-copertine.md` L-05

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Same house style as the tavern: dark aged timber, brushed brass, paper-and-brass lamps, violet nebula light. A service corridor of another, older house, seen at night: ordinary, tidy and slightly dated, dark timber wall panels and tarnished brass fittings, no ruins, no damage. In the bright beam of a work lamp coming from out of frame, the worn outer latch of a service door, its brass polished by years of use. To the side a narrow side window shows a vast violet fold of nebula, and in the far wall one single window has a light on. No people, nobody in a suit. One thin magenta strip light on the far ceiling is the only neon. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master, recomposed from the vertical book cover with the same subject (not a crop): keep the subject centre-right inside the central horizontal band (from 20% to 80% of the height); the left quarter and the top and bottom fifths are calm and dark; it must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- La **Veglia III — Il bucato delle rotte** usa la sua copertina 3:4 così com'è ([L-06](03-lore-copertine.md)), allegata subito prima del suo testo: nessuna produzione nuova. Le schede 121–156 di `media/scene/` (rev1) non si usano come testate.

#### D-LOR-04 · `lore│04-il-giro-delle-lanterne`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/lor-04.png`
- **Pubblicazione:** pubblica — Un Libro ha una sola identità, sul sito e su Discord: la testata riusa il motivo della copertina L-07, ricomposto in orizzontale con gli stessi riferimenti e lo stesso seed.
- **Mostra:** lo stesso soggetto di [L-07](03-lore-copertine.md) (Libro IV — Il giro delle lanterne), in orizzontale.
- **Non mostrare:** tutto ciò che la copertina L-07 non mostra (vedi la sua scheda): stesse soglie di spoiler.
- **Fonte:** `03-lore-copertine.md` L-07

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Same house style as the tavern: dark aged timber, brushed brass, paper-and-brass lamps, violet nebula light. A long downward ramp inside a pressurised rock gallery below the inn, empty at night: rough-hewn stone walls braced with dark timber ribs, a brass handrail; paper-and-brass lamps of different sizes, unevenly spaced, all lit, run down the ramp toward a far opening where a narrow strip of violet nebula shows at about one third of the height. Behind the viewer, a half-open service door with a soft light. No people, no walking stick, no robots. A small magenta neon strip above the service door is the only neon. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master, recomposed from the vertical book cover with the same subject (not a crop): keep the subject centre-right inside the central horizontal band (from 20% to 80% of the height); the left quarter and the top and bottom fifths are calm and dark; it must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- La **Veglia IV — La sedia rammendata** usa la sua copertina 3:4 così com'è ([L-08](03-lore-copertine.md)), allegata subito prima del suo testo: nessuna produzione nuova. Le schede 121–156 di `media/scene/` (rev1) non si usano come testate.

#### D-LOR-05 · `lore│05-il-primo-inverno`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/lor-05.png`
- **Pubblicazione:** pubblica — Un Libro ha una sola identità, sul sito e su Discord: la testata riusa il motivo della copertina L-09, ricomposto in orizzontale con gli stessi riferimenti e lo stesso seed.
- **Mostra:** lo stesso soggetto di [L-09](03-lore-copertine.md) (Libro V — Il primo inverno), in orizzontale.
- **Non mostrare:** tutto ciò che la copertina L-09 non mostra (vedi la sua scheda): stesse soglie di spoiler.
- **Fonte:** `03-lore-copertine.md` L-09

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. A closed alcove at the side of the great hall seen from the entrance at night: a blank hanging wooden sign motionless on its hook, a bare table, and a tall glass wall with a pale lavender glow of nebula on it, the glass faintly fogged. In the foreground coats hang on pegs by the entrance and a thick scarf lies over a window sill: the cold is suggested only by coats and fogged glass. Nobody in the alcove. One thin magenta neon tube above the alcove arch is the only neon. Lighting: warm amber lantern light (#FC8C46) as the key light but sparser, shadows pushed toward blue-violet (#2A1D3B), soft nebula-violet fill from the glass, exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene; no cyan or blue light sources. Fine film grain, painterly brushwork, cinematic composition, quiet and slightly cold mood. Horizontal 16:9 master, recomposed from the vertical book cover with the same subject (not a crop): keep the subject centre-right inside the central horizontal band (from 20% to 80% of the height); the left quarter and the top and bottom fifths are calm and dark; it must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- La **Veglia V — Il turno inverso** usa la sua copertina 3:4 così com'è ([L-10](03-lore-copertine.md)), allegata subito prima del suo testo: nessuna produzione nuova. Le schede 121–156 di `media/scene/` (rev1) non si usano come testate.

#### D-LOR-06 · `lore│06-il-filo-e-il-nodo`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/lor-06.png`
- **Pubblicazione:** pubblica — Un Libro ha una sola identità, sul sito e su Discord: la testata riusa il motivo della copertina L-11, ricomposto in orizzontale con gli stessi riferimenti e lo stesso seed.
- **Mostra:** lo stesso soggetto di [L-11](03-lore-copertine.md) (Libro VI — Il filo e il nodo), in orizzontale.
- **Non mostrare:** tutto ciò che la copertina L-11 non mostra (vedi la sua scheda): stesse soglie di spoiler.
- **Fonte:** `03-lore-copertine.md` L-11

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Same house style as the tavern: dark aged timber, brushed brass, paper-and-brass lamps, violet nebula light. The alcove's table in the inn's repair workshop at night, in the middle of a repair: a pale new wooden inlay has been fitted into the dark worn edge of the tabletop, the clamps still tight on it, a fine pale thread running along the joint. Workbench tools in soft focus: planes, a roll of cloth for materials, brass clamps. A window shows a vast violet fold of nebula as a horizontal band at one third of the height. The craftsperson is out of frame. A thin magenta neon tube on the workshop beam is the only neon. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master, recomposed from the vertical book cover with the same subject (not a crop): keep the subject centre-right inside the central horizontal band (from 20% to 80% of the height); the left quarter and the top and bottom fifths are calm and dark; it must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- La **Veglia VI — Il tavolo senza parole** usa la sua copertina 3:4 così com'è ([L-12](03-lore-copertine.md)), allegata subito prima del suo testo: nessuna produzione nuova. Le schede 121–156 di `media/scene/` (rev1) non si usano come testate.

#### D-LOR-07 · `lore│07-la-radice`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/lor-07.png`
- **Pubblicazione:** pubblica — Un Libro ha una sola identità, sul sito e su Discord: la testata riusa il motivo della copertina L-13, ricomposto in orizzontale con gli stessi riferimenti e lo stesso seed.
- **Mostra:** lo stesso soggetto di [L-13](03-lore-copertine.md) (Libro VII — La radice), in orizzontale.
- **Non mostrare:** tutto ciò che la copertina L-13 non mostra (vedi la sua scheda): stesse soglie di spoiler.
- **Fonte:** `03-lore-copertine.md` L-13

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Same house style as the tavern: dark aged timber, brushed brass, paper-and-brass lamps, violet nebula light. A small chamber cut into the rock under the inn, quiet at night. In profile, a very tall, extremely thin, slow-moving man, a dark band across his eyes against direct light, dressed in layered dark gallery clothes, rests the fingertips of one long hand on a stone slab laid on a brass-grilled workbench under raking amber light; the slab is carved with two grooves and one interrupted line, no inscriptions; beside the bench grille a single brass washer. Bare rock wall behind. His face is calm and attentive, partly hidden by the band. No creatures. One small magenta indicator glow behind the grille is the only neon. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master, recomposed from the vertical book cover with the same subject (not a crop): keep the subject centre-right inside the central horizontal band (from 20% to 80% of the height); the left quarter and the top and bottom fifths are calm and dark; it must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- La **Veglia VII — La prima pentola del mattino** usa la sua copertina 3:4 così com'è ([L-14](03-lore-copertine.md)), allegata subito prima del suo testo: nessuna produzione nuova. Le schede 121–156 di `media/scene/` (rev1) non si usano come testate.

#### D-LOR-08 · `lore│08-la-rotta-bassa`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/lor-08.png`
- **Pubblicazione:** pubblica — Un Libro ha una sola identità, sul sito e su Discord: la testata riusa il motivo della copertina L-15, ricomposto in orizzontale con gli stessi riferimenti e lo stesso seed.
- **Mostra:** lo stesso soggetto di [L-15](03-lore-copertine.md) (Libro VIII — La rotta bassa), in orizzontale.
- **Non mostrare:** tutto ciò che la copertina L-15 non mostra (vedi la sua scheda): stesse soglie di spoiler.
- **Fonte:** `03-lore-copertine.md` L-15

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Same house style as the tavern: dark aged timber, brushed brass, paper-and-brass lamps, violet nebula light. A pressurised docking lock of the Ninth landing seen at night: an open door with a work lamp left lit, a folded mechanical barrier, an anchoring cart parked, an empty quay, and beyond the great glass wall only the violet fold of nebula as a band at one third of the height. In the doorway, in three-quarter profile against the light, stands Egarim, a dwarf: short in stature with a lean, wiry build, light eyes, plain dark work clothes, no beard, no fantasy-dwarf costume, no helmet, no axe; one worn work glove with a smooth pale patch on the thumb rests on the control panel of the quay repeater. His height reads against the tall door frame and the folded barrier beside him. His face is partly in shadow, calm and focused. No ships, no other people, no robots, no clocks. A thin magenta neon strip on the lock frame is the only neon. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master, recomposed from the vertical book cover with the same subject (not a crop): keep the subject centre-right inside the central horizontal band (from 20% to 80% of the height); the left quarter and the top and bottom fifths are calm and dark; it must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- La **Veglia VIII — La casa dopo le voci** usa la sua copertina 3:4 così com'è ([L-16](03-lore-copertine.md)), allegata subito prima del suo testo: nessuna produzione nuova. Le schede 121–156 di `media/scene/` (rev1) non si usano come testate.

---

### 3.5 Community Topics

#### D-TOP-istruzioni · `topic│istruzioni`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/top-istruzioni.png`
- **Pubblicazione:** pubblica — È la porta d'ingresso dei topic: spiega come nasce e si coltiva un tavolo, merita una testata.
- **Mostra:** Un viaggiatore con una sedia vuota in mano davanti a tre tavoli diversi che gli fanno posto, lungo la parete delle curiosità.
- **Non mostrare:** Nessuno che lo tira per la manica, nessuna insegna sopra i tavoli, nessun oggetto di marchi o giochi riconoscibili.
- **Fonte:** `media/scene/025-scegliere-dove-fermarsi.md` (Fotogramma, Blocco soggetto)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Along the travellers' wall of the inn, where timber shelves of small curiosities climb toward the beams, three shared tables stand in a row: one with stacked books, one with brass components and hand tools, one with a board game left half-played. A traveller in a long coat holds an empty chair by its back, deciding where to sit. Each table offers a small gesture without calling him over: a book turned toward him, a tool slid aside, a seat cleared. Cups of tea on every table. On the wall above the tables hangs a single magenta neon tube shaped as an empty rectangular frame. Composition: the traveller and his chair sit centre-right inside the central horizontal band, the tables as clear silhouettes behind him; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Tolti i telai di legno in successione (troppo dettaglio a 360 px): i tre tavoli stanno in fila lungo la parete dei viaggiatori, zona della categoria. La fascia alta neutra della regia diventa il neon a cornice vuota.

#### D-TOP-bacheca-delle-imprese · `topic│bacheca-delle-imprese`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/top-bacheca-delle-imprese.png`
- **Pubblicazione:** pubblica — Celebra il lavoro fatto insieme: l'immagine della parete dei trofei spiega il canale senza leggere.
- **Mostra:** Una cerniera d'ottone piegata appesa fra i ricordi di viaggio, mani impolverate, una ciotola vuota in attesa della cena.
- **Non mostrare:** Coppe, medaglie, armi o trofei di caccia; pose trionfali; scritte sulla targhetta e sui nastri.
- **Fonte:** `media/scene/026-il-trofeo-e-una-cerniera.md` (Fotogramma, Regia) + `media/PROMPTS.md` §3 (parete dei trofei)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. On the travellers' wall, among shelves of humble keepsakes brought back from journeys (a dented kettle, a coil of old rope, a chipped lantern glass, small plain ribbon pennants), a group just back from a trip hangs a bent brass door hinge on a wooden peg. Dust is still on their sleeves. One adult traces the bend of the hinge with a finger, quietly proud; another sets an empty dinner bowl on the shelf below, ready for supper. A small brass plaque under the hinge is blank. Beside the new keepsake hangs a single magenta neon tube shaped as an empty rectangular frame. Composition: the hinge and the hands sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Fusa la scheda con la parete dei trofei di PROMPTS §3, tenendo ricordi umili invece dei trofei. Inquadratura allargata quanto basta per leggere la parete e il neon a cornice vuota.

#### D-TOP-giochi-gratis · `topic│giochi-gratis`  `sconsigliata`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/top-giochi-gratis.png`
- **Pubblicazione:** sconsigliata — È un feed di segnalazioni: un'immagine fissa aggiunge poco e il soggetto confina con i marchi.
- **Mostra:** Una scatola di gioco riparata che passa di mano, pedine di legno fatte a mano nel coperchio, uno sgabello avvicinato.
- **Non mostrare:** Copertine, scatole o loghi di giochi e store riconoscibili; prezzi; vetrine da negozio.
- **Fonte:** `media/scene/027-la-scatola-senza-prezzo.md` (Fotogramma, Blocco soggetto)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. At a low shelf on the travellers' wall, plain board-game boxes of different sizes and colours sit side by side, none behind glass, their covers painted with simple abstract patterns. One adult hands a repaired box to another, pointing with a smile at the mended corner; the open lid reveals a small cloth bag spilling hand-carved wooden pieces. A third guest drags a stool over to join them. Curiosities fill the shelves above. On the wall hangs a single magenta neon tube shaped as an empty rectangular frame. Composition: the open box between the two pairs of hands sits centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Lo scaffale di casa diventa quello della parete dei viaggiatori. Copertine a motivi astratti per escludere ogni marchio, come chiede il feed.

#### D-TOP-giochi-in-offerta · `topic│giochi-in-offerta`  `sconsigliata`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/top-giochi-in-offerta.png`
- **Pubblicazione:** sconsigliata — Feed di offerte: rischio marchi e messaggio commerciale, l'immagine non serve.
- **Mostra:** Due scatole aperte messe a confronto con calma, una clessidra coricata non ancora girata, un pacco trattenuto.
- **Non mostrare:** Prezzi, cartellini, percentuali di sconto, marchi o scatole riconoscibili, monete.
- **Fonte:** `media/scene/028-il-segnalino-dell-occasione.md` (Fotogramma, Blocco soggetto)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. On a timber table set against the travellers' wall, two similar plain game boxes lie open side by side, their wooden components laid out. A traveller compares the pieces of both, one in each hand, taking her time; her neighbour holds back a third parcel still tied with string, just delivered. Between them a small brass hourglass lies on its side, not yet turned. Two cups of tea. Shelves of curiosities behind them, and on the wall a single magenta neon tube shaped as an empty rectangular frame. Composition: the hands, the open boxes and the hourglass sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Tolta la vista dall'alto (nasconderebbe parete e neon) e il corriere: resta il pacco già consegnato. Niente prezzi né etichette.

#### D-TOP-drivers · `topic│drivers`  `sconsigliata`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/top-drivers.png`
- **Pubblicazione:** sconsigliata — Canale di servizio a flusso: un'immagine fissa non aiuta e la tecnica rischia di evocare prodotti reali.
- **Mostra:** Un vecchio visore d'ottone che torna nitido mentre una tecnica gira una manopola e il proprietario allenta la presa.
- **Non mostrare:** Schermi, schede video, interfacce o componenti di marchi reali; spie luminose colorate.
- **Fonte:** `media/scene/029-la-lente-torna-nitida.md` (Fotogramma, Regia)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. At a small bench beneath the trophy shelves of the travellers' wall, an old brass optical viewer is linked to a palm-sized brass cartridge by a short cloth-wrapped cable. A technician turns a single dial; in the viewer's round glass the reflection becomes even again. The owner, who was holding the device with both hands, loosens their grip. An open manual lies beside them, its pages showing only faint abstract marks. On the wall behind hangs a single magenta neon tube shaped as an empty rectangular frame. Composition: the viewer, the dial and the two pairs of hands sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Tolta la spia ciano della scheda (l'unico ciano ammesso è il carrello). Il banco d'officina è spostato sotto le mensole della parete dei viaggiatori.

#### D-TOP-piattaforme-di-sviluppo · `topic│piattaforme-di-sviluppo`  `sconsigliata`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/top-piattaforme-di-sviluppo.png`
- **Pubblicazione:** sconsigliata — Feed tecnico: rischio di loghi di piattaforme, la testata non è necessaria.
- **Mostra:** Un modellino di passerella fatto di tre pezzi diversi con l'incastro centrale mancante, mani che misurano, il carrello che osserva.
- **Non mostrare:** Schermi, codice, loghi di piattaforme; progetti con scritte leggibili; folla attorno al modello.
- **Fonte:** `media/scene/030-il-ponte-di-prova.md` (Fotogramma, Regia)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Below the shelves of curiosities on the travellers' wall, a tabletop model walkway spans two wooden crates. It is built from three visibly different sections that do not yet meet: one joint in the middle is missing, an obvious gap. One hand balances a small brass weight on the model, another marks with a pencil where to cut. On the floor, the inn's small service robot, low and rounded in brass and dark enamel with two small cyan eyes, watches the gap. On the wall above hangs a single magenta neon tube shaped as an empty rectangular frame. Composition: the model walkway reads as a clear horizontal profile centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Tenuto il carrello della scheda (unico ciano ammesso, uso raro). Ridotte le persone a due mani per leggere il vuoto centrale a 360 px.

#### D-TOP-world-of-warcraft · `topic│world-of-warcraft`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/top-world-of-warcraft.png`
- **Pubblicazione:** pubblica — Il topic del gioco con cui nasce la community: una testata riconoscibile, purché senza IP di terzi.
- **Mostra:** Un tavolo di locanda con una mappa fantasy inventata e senza nomi, segnalini di legno lisci, un piatto che passa di mano.
- **Non mostrare:** Razze, fazioni, boss, armature, armi, icone di classe, colori rosso/blu come codice, simboli o paesaggi del gioco.
- **Fonte:** `media/scene/031-la-mappa-oltre-il-tavolo.md` (Fotogramma, Blocco soggetto)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. At an ordinary inn table set against the travellers' wall, a large hand-drawn map of an invented land covers most of the tabletop: soft coastlines, hills and rivers, no names or symbols. Two guests slide small plain wooden tokens across it, talking over a route; a third listens leaning back in his chair, a cup of tea in hand, dressed for an evening indoors. A plate of bread is passed over the map from hand to hand. Shelves of curiosities behind them. On the wall hangs a single magenta neon tube shaped as an empty rectangular frame, apart from the map. Composition: the map and the passing plate sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Le miniature di viaggiatori e creature diventano segnalini di legno lisci (niente figure che evochino razze). Il neon è la cornice vuota dei Topics appesa al muro, non la cornice attorno alla mappa della Sezione WoW.

---

### 3.6 Community Richieste

#### D-RIC-istruzioni · `richiesta│istruzioni`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/ric-istruzioni.png`
- **Pubblicazione:** pubblica — Spiega a tutti dove si porta un'idea e che ogni richiesta riceve un esito: l'unica di categoria da pubblicare.
- **Mostra:** Una busta che passa dal vassoio d'ingresso a quello in esame su un banco basso sotto la bacheca delle richieste.
- **Non mostrare:** Timbri di approvazione, grate o sportelli, scrivanie rialzate; scritte su vassoi, note e registro.
- **Fonte:** `media/scene/032-la-richiesta-cambia-ripiano.md` (Fotogramma, Regia) + `media/PROMPTS.md` §3 (bacheca delle richieste)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. In the corridor of the request board, a low wooden desk stands at the foot of the board, where blank paper notes are pinned with brass tacks, a few curling, some joined by string. On either side of the desk, seated at the same height, an attendant moves a sealed envelope from an incoming tray to a second tray, while the guest who brought it follows the gesture with their eyes. An open register and a pencil lie ready beside the trays. Beside the board stands a single vertical magenta neon tube. Composition: the envelope between the two trays and the hands sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Il tavolino della scheda è messo ai piedi della bacheca di PROMPTS §3, nel corridoio di categoria. Restano la stessa altezza per entrambi e l'assenza di timbri.

#### D-RIC-aggiunta-compleanno · `richiesta│aggiunta-compleanno`  `sconsigliata`

- **Tipo:** forum · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post-guida fissato del forum.
- **File:** `docs/artwork/export/discord/canali/ric-aggiunta-compleanno.png`
- **Pubblicazione:** sconsigliata — Modulo di servizio su un dato personale: meglio niente immagine, e se c'è non deve suggerire età.
- **Mostra:** Due mani che scelgono una sola candela da una scatola colorata, un taccuino aperto che aspetta.
- **Non mostrare:** Torte, candele contabili, numeri, date, calendari, volti che lascino stimare l'età.
- **Fonte:** `media/scene/033-una-candela-da-scegliere.md` (Fotogramma, Regia)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. In the corridor of the request board, at a narrow shelf beneath the pinned blank notes, a pair of adult hands picks one slim candle from a wooden box of candles in many colours. Beside it, an attendant holds a small notebook open on an empty page, waiting for the guest to choose before writing anything. The framing stays close on the hands and the single candle; faces fall outside the frame. Beside the board stands a single vertical magenta neon tube. Composition: the hand with the chosen candle sits at the centre, inside the central horizontal band and within the central square; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Tolta la torta coperta (porta con sé il conteggio delle candele) e tenuti i volti fuori campo: la scena non dice l'età. Canale-modulo trattato come forum: soggetto centrato perché regga sia la fascia 5:2 sia il ritaglio quadrato.

#### D-RIC-nuovo-topic · `richiesta│nuovo-topic`  `sconsigliata`

- **Tipo:** forum · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post-guida fissato del forum.
- **File:** `docs/artwork/export/discord/canali/ric-nuovo-topic.png`
- **Pubblicazione:** sconsigliata — È un modulo: basta il testo delle istruzioni, l'immagine non aggiunge orientamento.
- **Mostra:** Un tavolino girato verso il corridoio con tre minerali e una lente, un passante che si ferma incuriosito.
- **Non mostrare:** Inaugurazioni, nastri da tagliare, targhe con nomi, folla.
- **Fonte:** `media/scene/034-un-argomento-trova-sedia.md` (Fotogramma, Blocco soggetto)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Where the request-board corridor widens, a small side table has just been turned toward passers-by. On it lie three mineral samples brought by different guests, a brass magnifying lens and an open notebook. The guest who proposed the meeting adjusts a small lamp over the stones, while a passer-by stops, curious, one hand still on the strap of a bag. On the wall behind, the request board with blank notes pinned by brass tacks; beside it stands a single vertical magenta neon tube. Composition: the table with the three stones sits at the centre, inside the central horizontal band and within the central square; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- L'alcova affacciata sulla sala diventa lo slargo del corridoio della bacheca (zona di categoria); tolta la targa vuota, già fa da segno la bacheca. Forum: soggetto centrato.

#### D-RIC-nuova-sezione · `richiesta│nuova-sezione`  `sconsigliata`

- **Tipo:** forum · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post-guida fissato del forum.
- **File:** `docs/artwork/export/discord/canali/ric-nuova-sezione.png`
- **Pubblicazione:** sconsigliata — Modulo di proposta: l'immagine non serve, il percorso lo spiegano le istruzioni.
- **Mostra:** Un grande tavolo coricato che quattro persone verificano pezzo per pezzo, sedie spaiate in attesa, lanterna ancora spenta.
- **Non mostrare:** Entusiasmo da inaugurazione, pose eroiche, cornici o targhe con nomi di sezione.
- **Fonte:** `media/scene/035-le-gambe-del-tavolo-nuovo.md` (Fotogramma, Blocco soggetto)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. In the request-board corridor, a large wooden table lies on its side against the wall. Four adults assess it, each with one plain task: one tests a joint, one measures a leg, one paces the width of the passage, one sorts a small box of tools. Mismatched chairs wait in a row nearby and a plain folder rests on one of them. A lantern hangs above the spot, still unlit. On the wall, the request board with blank notes pinned by brass tacks, and beside it a single vertical magenta neon tube. Composition: the tilted table sits at the centre, inside the central horizontal band and within the central square, the four figures as simple silhouettes around it; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Tolta la cornice vuota al muro (doppione del neon). Il tavolo è nel corridoio della bacheca; le quattro figure restano sagome, il soggetto è il tavolo inclinato.

#### D-RIC-evento · `richiesta│evento`  `sconsigliata`

- **Tipo:** forum · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post-guida fissato del forum.
- **File:** `docs/artwork/export/discord/canali/ric-evento.png`
- **Pubblicazione:** sconsigliata — Modulo di proposta eventi: le copertine vere le avranno gli eventi, non il canale.
- **Mostra:** Nastri di stoffa a terra che disegnano una festa, una persona che prova il percorso con un vassoio, una risata per la campanella.
- **Non mostrare:** Festa già in corso, palco con artisti, scritte sulla pianta, bottiglie.
- **Fonte:** `media/scene/036-la-festa-disegnata-a-terra.md` (Fotogramma, Regia)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. In the request-board corridor, strips of cloth laid on the floorboards mark where chairs would stand for a future party. One organiser walks the marked route carrying a tray of tea cups, checking that the kitchen could still pass. Pinned to the request board beside her, a plain floor plan drawn only in lines; a second organiser holds a small test bell he has just rung far too loudly, and both are laughing. Beside the board stands a single vertical magenta neon tube. Composition: the organiser with the tray on the cloth-marked route sits at the centre, inside the central horizontal band and within the central square; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- La sala vuota diventa il corridoio della bacheca; tolto il modellino del palco, la pianta è appesa alla bacheca. Forum: soggetto centrato.

#### D-RIC-bot · `richiesta│bot`  `sconsigliata`

- **Tipo:** forum · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post-guida fissato del forum.
- **File:** `docs/artwork/export/discord/canali/ric-bot.png`
- **Pubblicazione:** sconsigliata — Modulo tecnico per pochi: niente testata.
- **Mostra:** Un piccolo automa d'ottone che si ferma con la tazza davanti a un cuscino, un pulsante di arresto grande e indicato.
- **Non mostrare:** Schermi, codice, robot minacciosi, ottiche ciano (non è il carrello), simboli sul pulsante.
- **Fonte:** `media/scene/037-il-vassoio-e-l-ostacolo.md` (Fotogramma, Regia)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. On a long narrow bench in the request-board corridor, a small brass delivery automaton with a simple jointed arm and no face rolls along a tabletop test track carrying an empty cup. Someone has laid a soft cushion across the track, and the automaton has stopped a few centimetres short of it. Its maker smiles; the person who will use it points at a large round stop button on its side, easy to reach. One task lamp over the bench. Above, the request board with blank notes; beside it stands a single vertical magenta neon tube. Composition: the automaton and the cushion, seen in a low side view, sit at the centre, inside the central horizontal band and within the central square; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Banco di prova spostato nel corridoio della bacheca. L'automa è senza volto né luci, per non confonderlo col carrello e non aggiungere un secondo ciano.

---

### 3.7 Community Candidature

#### D-CAN-istruzioni · `candidatura│istruzioni`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/can-istruzioni.png`
- **Pubblicazione:** pubblica — Dice a tutti come si entra nello staff e che l'incarico è fatto di cose ordinarie: l'unica da pubblicare.
- **Mostra:** Una candidata apre il suo quaderno a un tavolo di cucina alla pari, grembiule sullo schienale, chiavi ancora appese.
- **Non mostrare:** Tribunale, palco, colloquio dall'alto in basso, divise, chiavi consegnate, scritte sul cartello.
- **Fonte:** `media/scene/038-il-grembiule-sullo-schienale.md` (Fotogramma, Regia) + `media/PROMPTS.md` §3 (cartello «cercasi»)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. In the inn's back kitchen, aprons hang on a row of hooks and a clean apron is folded over the back of an empty chair. At a plain wooden work table, everyone seated at the same height, a candidate opens a worn notebook toward the others. Across from her sit two adults and the Oste, the robot innkeeper with a smooth dark brushed-metal face without a mouth, two round amber optics, an ivory robe with a dark obi and a small cloth cap, listening. Beside the service door hangs a blank wooden shingle with keys on a brass hook below, untouched. Above the service door glows a single small magenta neon rectangle. Composition: the notebook and the four seated figures sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Uno dei tre valutatori è l'Oste nel suo canone (volto scuro, niente bocca), non protagonista. Il cartello «cercasi» di PROMPTS §3 si sposta accanto alla porta di servizio, zona di categoria.

#### D-CAN-moderatore · `candidatura│moderatore`  `sconsigliata`

- **Tipo:** forum · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post-guida fissato del forum.
- **File:** `docs/artwork/export/discord/canali/can-moderatore.png`
- **Pubblicazione:** sconsigliata — Modulo di candidatura: il processo lo spiegano le istruzioni, l'immagine non serve.
- **Mostra:** Una candidata che allarga lo spazio fra due sedie e si siede di lato ad ascoltare, durante una prova.
- **Non mostrare:** Divise, distintivi, martelletti, simboli di potere, qualcuno che incombe sugli altri.
- **Fonte:** `media/scene/039-lo-spazio-fra-due-sedie.md` (Fotogramma, Regia)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. In the cleared back kitchen, during a calm practice exercise, two regulars sit on chairs turned slightly away from each other, acting out a disagreement. The candidate has just widened the space between their chairs and now sits to one side, leaning in to listen, hands open on her knees. At the edge, a quiet observer holds a notebook without writing yet. Aprons hang on hooks along the wall, pots stacked on a shelf. Above the service door glows a single small magenta neon rectangle. Composition: the three chairs form an open triangle at the centre, inside the central horizontal band and within the central square; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Ambientata nella retro-cucina di categoria. Forum: la geometria triangolare resta centrata per il ritaglio quadrato.

#### D-CAN-mentore · `candidatura│mentore`  `sconsigliata`

- **Tipo:** forum · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post-guida fissato del forum.
- **File:** `docs/artwork/export/discord/canali/can-mentore.png`
- **Pubblicazione:** sconsigliata — Modulo di candidatura: niente testata.
- **Mostra:** Una pianta della locanda spinta verso il nuovo arrivato, che indica per primo; la mano della mentore vicina ma non sopra.
- **Non mostrare:** Etichette o nomi sulla pianta, gesto da maestra in cattedra, mani sovrapposte.
- **Fonte:** `media/scene/040-la-mappa-passa-di-mano.md` (Fotogramma, Regia)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. At the back-kitchen work table, a mentor candidate slides a simple hand-drawn floor plan of the inn, only lines and rooms, toward a newcomer and lets him point first at the place he does not understand. Her hand stays close to his without covering it. A third adult watches from the side, beside a cup of tea gone cold. Aprons hang on hooks behind them. Above the service door glows a single small magenta neon rectangle. Composition: the plan and the two hands sit at the centre, inside the central horizontal band and within the central square; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Tavolo della retro-cucina al posto di un tavolo generico. Forum: soggetto centrato.

#### D-CAN-curatore-eventi · `candidatura│curatore-eventi`  `sconsigliata`

- **Tipo:** forum · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post-guida fissato del forum.
- **File:** `docs/artwork/export/discord/canali/can-curatore-eventi.png`
- **Pubblicazione:** sconsigliata — Modulo di candidatura: l'immagine non aiuta chi si candida.
- **Mostra:** Una candidata che apre un passaggio fra le sedie per un ospite in carrozzina, dalla porta di servizio al tavolo.
- **Non mostrare:** Gesti di gratitudine imposti, l'ospite messo al centro come caso, palchi, inquadrature eroiche.
- **Fonte:** `media/scene/041-la-prova-della-sedia-in-piu.md` (Fotogramma, Regia)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. In the back kitchen, cleared for a staff supper, chairs are already set around two joined tables when an adult guest arrives in a wheelchair. The candidate moves two chairs aside and walks the new route herself, checking that it runs straight from the service door to the table without a pillar in the way; a companion helps carry one seat. The guest waits at the same level as everyone else, unhurried. Aprons hang on hooks along the wall. Above the service door glows a single small magenta neon rectangle. Composition: the newly opened route between the chairs sits at the centre, inside the central horizontal band and within the central square; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- La sala con palco diventa la retro-cucina allestita per una cena dello staff; tolto il palco. L'ausilio ingombrante è precisato come carrozzina per leggerlo a 360 px.

#### D-CAN-curatore-social · `candidatura│curatore-social`  `sconsigliata`

- **Tipo:** forum · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post-guida fissato del forum.
- **File:** `docs/artwork/export/discord/canali/can-curatore-social.png`
- **Pubblicazione:** sconsigliata — Modulo di candidatura: niente testata.
- **Mostra:** Una cornice di cartone spostata su una stampa per includere anche chi tiene ferma la scala.
- **Non mostrare:** Schermi, telefoni, icone di social, didascalie scritte, loghi.
- **Fonte:** `media/scene/042-il-racconto-dentro-la-cornice.md` (Fotogramma, Regia)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. On the back-kitchen work table, three painted prints of the same evening lie side by side, each showing people repairing a lamp from a ladder. A candidate slides a cardboard crop frame across one print until it takes in the person steadying the ladder as well as the one doing the repair. Brass clips and empty caption strips lie beside the prints. Seen in three-quarter view from the table's edge, aprons on hooks behind. Above the service door glows a single small magenta neon rectangle. Composition: the cardboard frame over the print sits at the centre, inside the central horizontal band and within the central square; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Tolta la vista zenitale per lasciare in campo la porta di servizio e il suo neon; stampe sul tavolo della retro-cucina.

#### D-CAN-tecnico · `candidatura│tecnico`  `sconsigliata`

- **Tipo:** forum · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post-guida fissato del forum.
- **File:** `docs/artwork/export/discord/canali/can-tecnico.png`
- **Pubblicazione:** sconsigliata — Modulo di candidatura: niente testata.
- **Mostra:** Una candidata che ascolta un tubo di rame senza toccarlo, l'esperto che aspetta con la chiave, una goccia sempre nello stesso punto.
- **Non mostrare:** Ingranaggi decorativi, vapore drammatico, mani su parti calde, quadranti numerati.
- **Fonte:** `media/scene/043-la-valvola-prima-del-guasto.md` (Fotogramma, Regia)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. In the back kitchen, along the wall behind the stoves, an insulated copper pipe runs to a valve and a small round pressure gauge with an unmarked dial. A technician candidate leans her ear close to the pipe without touching it, while an experienced worker waits beside her holding a wrench, not using it yet. On the floor below the valve a single droplet falls, always on the same spot. Timber beams frame the pipe; aprons hang on hooks nearby. Above the service door glows a single small magenta neon rectangle. Composition: the candidate's listening ear, the valve and the droplet sit at the centre, inside the central horizontal band and within the central square; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Il tubo è quello della retro-cucina, zona di categoria. Manometro senza numeri; rame funzionale.

#### D-CAN-creatore-contenuti · `candidatura│creatore-contenuti`  `sconsigliata`

- **Tipo:** forum · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post-guida fissato del forum.
- **File:** `docs/artwork/export/discord/canali/can-creatore-contenuti.png`
- **Pubblicazione:** sconsigliata — Modulo di candidatura: niente testata.
- **Mostra:** Un pennello porto a chi guarda, accanto a una tavola della locanda con un riquadro lasciato vuoto.
- **Non mostrare:** Fumetti con balloon o scritte, schermi, tavolette grafiche, logo della locanda sulla pagina.
- **Fonte:** `media/scene/044-il-margine-lasciato-a-un-altro.md` (Fotogramma, Regia)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. At the back-kitchen work table under a low lamp, an illustrator has almost finished a large page drawing the inn's hall in panels, told only in pictures; one panel is deliberately left empty. Seen over her shoulder, she holds out her brush to an adult who stopped by to watch, the brush suspended between them. Ink stains on her wrists, ink pots beside a bowl of tea. Aprons hang on hooks behind. Above the service door glows a single small magenta neon rectangle. Composition: the suspended brush and the empty panel sit at the centre, inside the central horizontal band and within the central square; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Banco dell'illustratrice spostato sul tavolo della retro-cucina. Forum: soggetto centrato.

#### D-CAN-caposezione · `candidatura│caposezione`  `sconsigliata`

- **Tipo:** forum · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post-guida fissato del forum.
- **File:** `docs/artwork/export/discord/canali/can-caposezione.png`
- **Pubblicazione:** sconsigliata — Modulo di candidatura: niente testata.
- **Mostra:** Due persone che si dividono le sedie da riordinare dopo un incontro, una cassetta di cose da restituire.
- **Non mostrare:** Calendari con numeri, gesti da capo, festa ancora in corso.
- **Fonte:** `media/scene/045-un-tavolo-che-regga-domani.md` (Fotogramma, Regia)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. After a gathering, the back kitchen empties. A prospective section lead stays behind to set the work table back in order, stacking chairs; another adult turns back through the service door and lifts half of the stack, the load now shared evenly between them. On the table remain an empty planning board laid flat and a wooden box of borrowed things to return. Aprons hang on hooks along the wall. Above the service door glows a single small magenta neon rectangle. Composition: the two figures with their balanced loads sit at the centre, inside the central horizontal band and within the central square; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Il tavolo d'alcova diventa il tavolo della retro-cucina; il calendario senza scritte è sostituito da una tavola di pianificazione vuota (un calendario porta numeri). Tolta l'inquadratura attraverso la porta.

#### D-CAN-ufficiale-di-sezione · `candidatura│ufficiale-di-sezione`  `sconsigliata`

- **Tipo:** forum · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post-guida fissato del forum.
- **File:** `docs/artwork/export/discord/canali/can-ufficiale-di-sezione.png`
- **Pubblicazione:** sconsigliata — Modulo di candidatura: niente testata.
- **Mostra:** Una cassa di materiali raggruppati, una rondella aggiunta, un dito che indica la cerniera che si blocca.
- **Non mostrare:** Cerimonie di consegna, inventari in fila perfetta, etichette scritte, armi o equipaggiamento da gioco.
- **Fonte:** `media/scene/046-la-consegna-delle-piccole-cose.md` (Fotogramma, Regia)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. On the back-kitchen counter, an open wooden chest holds supplies grouped in small cloth bags, sorted the way the next meeting will need them. A candidate adds a spare brass washer to one bag and ties a protective cloth around something fragile, while the officer handing over points to a small hinge on the chest lid that tends to stick. The tags on the bags are left empty. Aprons hang on hooks behind. Above the service door glows a single small magenta neon rectangle. Composition: the hands, the bags and the half-open lid sit at the centre, inside the central horizontal band and within the central square; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Cassa poggiata sul banco della retro-cucina. Forum: soggetto centrato.

---

### 3.8 Community Staff

#### D-STF-sistema · `staff│sistema`  `sconsigliata`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/stf-sistema.png`
- **Pubblicazione:** sconsigliata — Canale invisibile ai membri: l'immagine resta interna e non è una priorità.
- **Mostra:** Un pannello di servizio aperto con tre circuiti ordinati, due addetti che ne osservano il ritmo.
- **Non mostrare:** Muro di cavi caotico, schermi, ingranaggi decorativi, spie ciano.
- **Fonte:** `media/scene/047-il-respiro-dietro-la-parete.md` (Fotogramma, Regia)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. In the inn's workshop behind the hall, a timber service panel stands open on the wall above a workbench, revealing an orderly run of three copper pipes, cloth-covered cables and three small brass indicator lamps. Two maintainers compare the rhythm of the lamps, one with a hand resting near a valve. Light from the hall slips through a grille in the wall. On the bench, a closed manual with a cup of tea on top. Just above the bench runs a single low, dim magenta neon tube. Composition: the open panel and the two maintainers sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Tolta la spia ciano della scheda (unico ciano ammesso: il carrello). Ambiente: officina dello staff.

#### D-STF-roadmap-interna · `staff│roadmap-interna`  `sconsigliata`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/stf-roadmap-interna.png`
- **Pubblicazione:** sconsigliata — Canale interno dello staff: immagine facoltativa, mai pubblica.
- **Mostra:** Una parete di schede vuote con pochi fili, una scheda troppo carica spostata più avanti.
- **Non mostrare:** Date, scadenze, diagrammi leggibili, fogli strappati, fili di molti colori.
- **Fonte:** `media/scene/048-il-filo-spostato-di-un-mese.md` (Fotogramma, Regia) + `media/PROMPTS.md` §3 (stanza sul retro)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. In the back room behind a curtain, a wooden planning wall hangs above a workbench, with rows of blank cards linked by a few cotton threads of a single colour. One coordinator unpins a card weighed down by clipped scraps and moves it further along the wall; another gathers into a basket the few materials of a small task that can start now. Nothing is torn. The round table with ledgers and keys stands behind them. Just above the workbench runs a single low, dim magenta neon tube. Composition: the hand moving the card sits centre-right inside the central horizontal band, the wall seen at an angle; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- La parete di pianificazione sta nella stanza sul retro di PROMPTS §3, sopra il banco con il neon dello staff.

#### D-STF-faq-interna · `staff│faq-interna`  `sconsigliata`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/stf-faq-interna.png`
- **Pubblicazione:** sconsigliata — Canale interno dello staff: immagine facoltativa, mai pubblica.
- **Mostra:** Un manuale consumato aperto sul segnalibro di stoffa, due persone che lo confrontano con un oggetto sul banco.
- **Non mostrare:** Testo leggibile sulle pagine, schermi, lavagne di domande e risposte.
- **Fonte:** `media/scene/049-la-risposta-sul-bordo.md` (Fotogramma, Blocco soggetto)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. At the workshop bench, a heavily used manual falls open at the same place, its edge worn dark by many hands, a cloth bookmark sticking out. A worker new to the shift and a veteran lean in together, comparing the page with a small brass device on the bench, one lamp lighting both book and object. The pages show only faint abstract diagrams. Hand tools hang on the wall behind. Just above the bench runs a single low, dim magenta neon tube. Composition: the worn manual and the brass device sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Officina dello staff come ambiente; il primo piano del bordo consumato si allarga quanto basta per leggere le due persone a 360 px.

#### D-STF-chat-cofondatori · `staff│chat-cofondatori`  `sconsigliata`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/stf-chat-cofondatori.png`
- **Pubblicazione:** sconsigliata — Chat riservata: invisibile ai membri, l'immagine non ha pubblico.
- **Mostra:** Un campione di trave vecchia sul tavolo fra piatti, mani che ne seguono i segni, la sala che continua oltre la tenda.
- **Non mostrare:** Ritratti regali, capotavola, troni, documenti con scritte, bottiglie.
- **Fonte:** `media/scene/050-la-trave-sul-tavolo.md` (Fotogramma, Regia) + `media/PROMPTS.md` §3 (stanza sul retro)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. In the back room behind a curtain, three adults sit around the round table among half-finished meals, a sample of old timber beam laid across the middle. One hand follows a mark cut into the wood years ago; another holds a repair drawing on plain paper. One low lamp lights all their faces equally. Through the curtain left ajar, a sliver of the ordinary evening in the hall. Along the wall stands a workbench with a single low, dim magenta neon tube above it. Composition: the timber sample and the hands on it sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- La porta socchiusa diventa la tenda della stanza sul retro di PROMPTS §3. Persone ridotte a tre per la leggibilità.

#### D-STF-chat-curatori-social · `staff│chat-curatori-social`  `sconsigliata`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/stf-chat-curatori-social.png`
- **Pubblicazione:** sconsigliata — Chat interna dello staff: immagine non necessaria.
- **Mostra:** Stampe ad asciugare su fili sotto le travi, una curatrice che ne allontana una per giudicarla da lontano.
- **Non mostrare:** Loghi o lettering generati sulle stampe, schermi, icone di social.
- **Fonte:** `media/scene/051-le-stampe-ad-asciugare.md` (Fotogramma, Regia)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. In the creative workroom, painted prints of scenes from the inn dry on lines strung beneath the timber beams. Two image curators walk along them; one has unclipped a print and steps back toward the door to judge it from a distance, holding it at arm's length. On the creative bench below lie brushes, wooden clips and an empty card frame. Just above the bench runs a single low, dim magenta neon tube. Composition: the curator holding the print at arm's length sits centre-right inside the central horizontal band, the drying lines running across; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Ambiente: banco creativo dello staff. La cornice vuota «per l'identità» resta vuota e piccola, sul banco.

#### D-STF-chat-curatori-eventi · `staff│chat-curatori-eventi`  `sconsigliata`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/stf-chat-curatori-eventi.png`
- **Pubblicazione:** sconsigliata — Chat interna dello staff: immagine non necessaria.
- **Mostra:** Un modellino della sala eventi sul banco, tre mani che provano percorso, luce e un filo d'inciampo.
- **Non mostrare:** Pubblico, artisti in scena, scritte sulla pianta, lampade colorate.
- **Fonte:** `media/scene/052-l-ultima-prova-senza-pubblico.md` (Fotogramma, Regia)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. On the creative bench, a tabletop scale model of the inn's event room is set out for a last rehearsal: rows of tiny empty chairs, a small stage, a thread laid across the aisle like a loose cable. One organiser slides a miniature bowl along the aisle with a fingertip; another holds a tiny lamp over the farthest seat; a third points at the stray thread. Plain sketches of the room are pinned behind. Just above the bench runs a single low, dim magenta neon tube. Composition: the model room and the three hands sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- La sala eventi reale diventa un modellino sul banco creativo, per riusare gli ambienti dello staff senza una stanza nuova. Restano ciotola, lampada lontana e cavo nel passaggio.

#### D-STF-chat-moderatori · `staff│chat-moderatori`  `sconsigliata`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/stf-chat-moderatori.png`
- **Pubblicazione:** sconsigliata — Chat riservata alla moderazione: nessuna immagine pubblica, nessun nome.
- **Mostra:** Tre moderatori stanchi a un tavolo chiuso, tazze fredde, una penna posata per ascoltare.
- **Non mostrare:** Nomi, fogli leggibili, martelletti, gesti punitivi, imputati, schermi.
- **Fonte:** `media/scene/053-le-parole-rimaste-sul-tavolo.md` (Fotogramma, Regia) + `media/PROMPTS.md` §3 (stanza sul retro)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. In the back room with the door closed, three adult moderators sit at the round table beside three cold cups of tea, going through plain sheets of notes one at a time. One sets down her pen to listen to the one who had stayed silent. A thin line of light from the hall slips under the door. Ledgers and keys rest on a shelf, one low lamp on the table. Along the wall stands a workbench with a single low, dim magenta neon tube above it. Composition: the three seated figures and the cold cups sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: low night light, indigo-violet (#2A1D3B to #7E2AA8) dominant, a single small warm amber glow (one lamp) as the only warm note, and ONE soft magenta neon glow (#C45BC4) as the only neon, deep violet-black shadows (#0B0612, never pure black). Fine film grain, painterly brushwork, intimate quiet composition, tender and slightly sad mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Luce di notte (V) per la conversazione difficile appena finita. Stanza sul retro di PROMPTS §3.

#### D-STF-chat-mentori · `staff│chat-mentori`  `sconsigliata`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/stf-chat-mentori.png`
- **Pubblicazione:** sconsigliata — Chat interna dello staff: immagine non necessaria.
- **Mostra:** Una mentore che posa due lanterne, una sedia che le viene offerta, una lanterna raccolta per il prossimo giro.
- **Non mostrare:** Volti eroici, registri con nomi leggibili, applausi.
- **Fonte:** `media/scene/054-chi-accompagna-puo-sedersi.md` (Fotogramma, Regia) + `media/PROMPTS.md` §3 (stanza sul retro)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. In the back room, a tired mentor has just set two portable paper-and-brass lanterns down on the floor. A colleague slides a chair toward her; another adult bends to pick up one of the lanterns for the next welcome round. The arrivals book lies open on the round table, pushed to one side, not in front of her. Along the wall stands a workbench with a single low, dim magenta neon tube above it. Composition: the mentor, the offered chair and the two lanterns sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Ambientata nella stanza sul retro. I tre gesti restano, il registro è spinto di lato.

#### D-STF-chat-tecnici · `staff│chat-tecnici`  `sconsigliata`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/stf-chat-tecnici.png`
- **Pubblicazione:** sconsigliata — Chat interna dello staff: immagine non necessaria.
- **Mostra:** Un rotore smontato e quattro mani che rimontano una boccola, un terzo tecnico che confronta due ricambi.
- **Non mostrare:** Ingranaggi decorativi, banco ingombro, schermi, spie ciano.
- **Fonte:** `media/scene/055-la-riparazione-a-quattro-mani.md` (Fotogramma, Blocco soggetto)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. On the workshop bench, a dismantled ventilation rotor lies open. One pair of hands holds the rotor still while another aligns a salvaged brass bearing into its hub; neither could finish the gesture alone. At the edge of the bench a third technician compares two nearly identical spare parts. A few tools, one task lamp overhead, a ventilation duct on the wall. Just above the bench runs a single low, dim magenta neon tube. Composition: the rotor and the four hands sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Tolto l'accento ciano sul fondo (unico ciano ammesso: il carrello). Ambiente: officina dello staff.

#### D-STF-chat-debug · `staff│chat-debug`  `sconsigliata`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/stf-chat-debug.png`
- **Pubblicazione:** sconsigliata — Chat tecnica interna: immagine non necessaria.
- **Mostra:** Un piccolo meccanismo fermo al terzo anello, una tecnica in ginocchio che osserva, un granello rimesso sul binario.
- **Non mostrare:** Schermate di codice, computer, insetti come metafora del bug, frustrazione esagerata.
- **Fonte:** `media/scene/056-l-errore-torna-al-terzo-giro.md` (Fotogramma, Regia)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. On the workshop bench, a small brass test mechanism walks along a tabletop track through three brass hoops set in a row. At the third hoop it always lifts the same foot and stops. One technician kneels at bench height to watch from the side; another sets a tiny metal shaving back on the track, so the fault will repeat when they ask it to. The viewpoint is low, at the level of the fault. Just above the bench runs a single low, dim magenta neon tube. Composition: the third hoop and the halted mechanism sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Officina dello staff come ambiente. Nessuna modifica di momento.

#### D-STF-chat-creatori-contenuti · `staff│chat-creatori-contenuti`  `sconsigliata`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/stf-chat-creatori-contenuti.png`
- **Pubblicazione:** sconsigliata — Chat interna dello staff: immagine non necessaria.
- **Mostra:** Una fila di bozzetti sul muro con l'ultimo foglio girato, tre autori che studiano il gesto della tazza.
- **Non mostrare:** Balloon, didascalie, testo nei disegni, personaggi della lore riconoscibili.
- **Fonte:** `media/scene/057-il-finale-ancora-sul-filo.md` (Fotogramma, Regia)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. In the creative workroom, a sequence of hand-drawn story boards is pinned along a timber wall above the creative bench; the last sheet hangs turned to face the wall. Three storytellers study the earlier drawings, which repeat one gesture: a hand offering a cup, drawing it back, then leaving it on a table. Rejected drafts lie folded neatly on the floor. Just above the bench runs a single low, dim magenta neon tube. Composition: the row of boards ending in the turned sheet sits centre-right inside the central horizontal band, the three figures before it; the left quarter and the top and bottom fifths stay calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Banco creativo dello staff; nei bozzetti solo mani e tazze, nessun personaggio con nome.

#### D-STF-voce-cofondatori · `staff│voce-cofondatori`  `sconsigliata`

- **Tipo:** vocale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2)
- **Dove va:** chat testuale del vocale, che è effimera: per questo è sconsigliata.
- **File:** `docs/artwork/export/discord/canali/stf-voce-cofondatori.png`
- **Pubblicazione:** sconsigliata — Vocale riservato: chat effimera e invisibile, nessuna testata.
- **Mostra:** Un cornetto acustico d'ottone al centro del tavolo, due persone in ascolto, una tazza spinta verso il posto vuoto.
- **Non mostrare:** Microfoni moderni, cuffie, schermi, anello neon (è del Salotto).
- **Fonte:** `media/scene/058-una-voce-oltre-il-tubo.md` (Fotogramma, Regia)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. In the back room, an old brass acoustic receiver, a flared horn on a short stand, rests at the centre of the round table. Two adults lean in toward it, listening to a distant voice during a pause; a third slides a cup of tea toward the empty chair of someone absent. The circle of chairs around the table is left incomplete. Wooden acoustic panels line the walls, one low lamp on the table. Along the wall stands a workbench with a single low, dim magenta neon tube above it. Composition: the brass receiver and the empty chair sit centre-right inside the central horizontal band; the left quarter and the top and bottom fifths stay calm and dark. Lighting: low night light, indigo-violet (#2A1D3B to #7E2AA8) dominant, a single small warm amber glow (one lamp) as the only warm note, and ONE soft magenta neon glow (#C45BC4) as the only neon, deep violet-black shadows (#0B0612, never pure black). Fine film grain, painterly brushwork, intimate quiet composition, tender and slightly sad mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Vocale dello Staff: neon a tubo basso dello staff, non l'anello del Salotto. Luce di notte (V). Nome canale senza l'annotazione «(voice)» della struttura.

---

### 3.9 Sezione WoW Forever

#### D-WOW-01-sblocca-sezione · `01 · sblocca-sezione`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/wow-01-sblocca-sezione.png`
- **Pubblicazione:** pubblica — Pubblica: è la porta della sezione e la prima immagine che vede chi non ha ancora nessun ruolo.
- **Mostra:** Il noren della sezione che si scosta a metà: dietro, il tavolo delle mappe pronto e ancora vuoto.
- **Non mostrare:** Logo del gioco, stemmi o scritte sul tendaggio, pulsanti o spunte da interfaccia, armi, figure in armatura.
- **Fonte:** `discord/sezione-wow-forever/canali/01-sblocca-sezione.md` (funzione del canale) · stile da `docs/artwork/02-sito.md` S-06

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. At the edge of the tavern's main hall an adult hand draws aside an indigo noren that hides a side alcove, and warm lantern light spills across the floorboards. Through the opening: a long oak table with a large unrolled blank map weighed down by carved wooden tokens, a lantern and two steaming teacups, chairs waiting, nobody seated yet. The curtain is only half open and could easily fall closed again; the gesture is curious and unhurried. On the alcove's back wall the single magenta neon is a thin frame around a blank map. Composition: the subject sits centre-right inside the central horizontal band; the left quarter and the top and bottom fifths are calm and dark; one clear subject, readable small. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- La reaction che apre e richiude la sezione diventa una tenda che si scosta e si può lasciar ricadere; nessuna spunta verde disegnata (sarebbe interfaccia).

#### D-WOW-02-informazioni · `02 · informazioni`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/wow-02-informazioni.png`
- **Pubblicazione:** pubblica — Pubblica: è la vetrina della sezione, letta da chi sta decidendo se candidarsi.
- **Mostra:** Adulti che arrivano dopo il lavoro e si siedono al tavolo delle mappe; due tazze diverse sullo stesso vassoio (due gilde, una casa).
- **Non mostrare:** Stendardi, colori di fazione rosso/blu, razze riconoscibili, armature, orologi con numeri leggibili.
- **Fonte:** `discord/sezione-wow-forever/canali/02-informazioni.md` (funzione del canale) · stile da `docs/artwork/02-sito.md` S-06

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Early evening in the section alcove: three adults between their thirties and sixties settle around the long map table after work — a man hanging a worn jacket on his chair back, a grey-haired woman with reading glasses pouring tea, a broad-shouldered person with a hearing aid smoothing the blank map flat. A brass hourglass has just been turned. On one tray beside the map sit two different teacups, one tall and pale, one squat and dark: two houses, one table. Carved wooden tokens wait at the map's edge. The single magenta neon is a thin frame around a blank map on the timber wall behind them. Composition: the subject sits centre-right inside the central horizontal band; the left quarter and the top and bottom fifths are calm and dark; one clear subject, readable small. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- «Due gilde, una sola casa» reso con due tazze neutre sullo stesso vassoio, non con bandiere; età e ritmo serale dal testo (adulti, si parte dopo le 20).

#### D-WOW-02b-faq · `02b · faq`  `sconsigliata`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/wow-02b-faq.png`
- **Pubblicazione:** sconsigliata — Sconsigliata per analogia con la faq del Benvenuto (elenco di servizio); il canale non compare nella lista WoW del CM.
- **Mostra:** Una domanda e una risposta date a voce, fra un nuovo arrivato e un veterano, al tavolo delle mappe.
- **Non mostrare:** Punti interrogativi, cartelli, fogli leggibili, personaggi della lore con nome, armature.
- **Fonte:** `discord/sezione-wow-forever/canali/02b-faq.md` (funzione del canale)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. A quiet corner of the section alcove: a newcomer in a travel coat sits at the end of the map table, both hands around a cup, leaning forward with a question in their eyes. Across from them an older regular with silver stubble, a cane hooked on the chair, answers with one open hand resting on the blank map and the other gesturing gently, plain and honest. A teapot between them, a lantern burning low, an empty chair beside the newcomer. The single magenta neon is a thin frame around a blank map on the wall. Composition: the subject sits centre-right inside the central horizontal band; the left quarter and the top and bottom fifths are calm and dark; one clear subject, readable small. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Il sottotitolo «la risposta che daremmo a voce» diventa un dialogo a due; niente simbolo ❓ disegnato.

#### D-WOW-03-candidatura · `03 · candidatura`  `pubblica`

- **Tipo:** forum · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post-guida fissato del forum.
- **File:** `docs/artwork/export/discord/canali/wow-03-candidatura.png`
- **Pubblicazione:** pubblica — Pubblica per analogia con «Candidature: solo istruzioni»: il post-guida pinnato è l'istruzione del Registro; non è nella lista WoW del CM, da confermare.
- **Mostra:** Il Registro della Locanda aperto su un leggio, una mano che comincia a scrivere sulla pagina nuova.
- **Non mostrare:** Moduli leggibili, nomi, classi o fazioni scritti, timbri, sigilli con stemmi, penne d'oca con ornamenti di fazione.
- **Fonte:** `discord/sezione-wow-forever/canali/03-candidatura.md` (post-guida pinnato del forum)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. A large open ledger rests on a slanted wooden stand at the entrance of the section alcove: thick cream pages with rows of unreadable abstract handwriting, one fresh page still empty, a dip pen in a brass holder and a cup of tea set beside it. An adult hand, plain sleeve rolled up, has just begun writing on the new page. Behind, out of focus, the long map table with carved wooden tokens and one chair already pulled out. The single magenta neon is a thin frame around a blank map on the back wall. Composition: the subject sits in the central square, whole in a centre crop; the outer sides are calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Forum senza topic fissi: una voce di canale, formato post di forum (quadrato centrale). La sedia già scostata dice «poi si decide insieme», senza esame.

#### D-WOW-04-annunci · `04 · annunci`  `pubblica`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/wow-04-annunci.png`
- **Pubblicazione:** pubblica — Pubblica: è la Bacheca della gilda, il canale a sola lettura con le notifiche accese.
- **Mostra:** Un solo foglio nuovo appuntato sulla bacheca, quelli vecchi piegati e conservati sotto.
- **Non mostrare:** Testo leggibile sui fogli, megafoni o trombe, stendardi, loghi del gioco.
- **Fonte:** `discord/sezione-wow-forever/canali/04-annunci.md` (post inaugurale e guida della Bacheca)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. A small wooden notice board hangs beside the map table in the section alcove, almost empty on purpose: a single fresh sheet of unreadable abstract strokes is being pressed into place with a brass pin by an adult hand. At the table below, two people look up from their cups toward it, calm and attentive; nobody crowds the board. Older sheets are not torn down but folded neatly into a small tray underneath. The single magenta neon is a thin frame around a blank map just beside the board. Composition: the subject sits centre-right inside the central horizontal band; the left quarter and the top and bottom fifths are calm and dark; one clear subject, readable small. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Dalla guida: «scriviamo poco» (un foglio solo) e «un annuncio non si corregge di nascosto» (i vecchi restano, piegati nel vassoio).

#### D-WOW-05-calendario · `05 · calendario`  `sconsigliata`

- **Tipo:** forum · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post-guida fissato del forum.
- **File:** `docs/artwork/export/discord/canali/wow-05-calendario.png`
- **Pubblicazione:** sconsigliata — Sconsigliata: i post del calendario hanno già le copertine Raid-Helper.
- **Mostra:** Le iscrizioni alla serata come gettoni di legno lasciati in tre vassoi senza etichette.
- **Non mostrare:** Calendari con date o numeri, etichette sui vassoi, icone del bot, nomi di istanze, boss.
- **Fonte:** `discord/sezione-wow-forever/canali/05-calendario.md` (funzione del canale)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Close view of the edge of the map table in the section alcove: three small wooden trays in a row, and adult hands of different ages dropping carved wooden tokens into them — most into the first tray, one hand hesitating over the middle one, a single token laid in the last. Beyond the trays the blank map already carries a few tokens for the evening, with a brass hourglass and a lantern beside it. Dark wood and brass, unhurried. The single magenta neon is a thin frame around a blank map on the wall in the soft background. Composition: the subject sits in the central square, whole in a centre crop; the outer sides are calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Presente / In dubbio / Assente di Raid-Helper diventano tre vassoi muti; nessun riferimento al bot né all'istanza dell'esempio nel titolo.

#### D-WOW-06-hub · `06 · hub`  `facoltativa`

- **Tipo:** forum · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post-guida fissato del forum.
- **File:** `docs/artwork/export/discord/canali/wow-06-hub.png`
- **Pubblicazione:** facoltativa — Facoltativa: le immagini da pubblicare sono quelle dei dodici topic fissi; questa serve solo come copertina d'insieme del forum.
- **Mostra:** Un mobile a nicchie, un oggetto per nicchia: un topic per argomento, e la mano di chi sa dove trovare le cose.
- **Non mostrare:** Etichette o numeri sulle nicchie, oggetti di gioco riconoscibili, ingranaggi decorativi.
- **Fonte:** `discord/sezione-wow-forever/canali/00-struttura-canali.md` §3.1 e `06-hub-informazioni.md` (mappa dei topic)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. A tall timber cabinet of small open cubbyholes stands beside the map table in the section alcove, each niche holding one different ordinary object: a folded cloak, a short candle, a small ledger, a coil of rope, a brass key, a bundle of herbs, a teacup, a little lens case. An adult reaches into one niche with an easy, familiar gesture, like someone who knows where things live. Lantern light falls across the cabinet; the long table and its blank map wait behind. The single magenta neon is a thin frame around a blank map on the wall. Composition: the subject sits in the central square, whole in a centre crop; the outer sides are calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Voce di canale del forum hub, oltre alle dodici dei topic: gli oggetti nelle nicchie richiamano i topic (mantello, candela, registro, chiave, erbe, lenti) senza etichette.

#### D-WOW-HUB-presentazioni · `06 · hub › presentazioni`  `pubblica`

- **Tipo:** forum-topic · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post di apertura del topic.
- **File:** `docs/artwork/export/discord/canali/wow-hub-presentazioni.png`
- **Pubblicazione:** pubblica — Pubblica: topic fisso dell'hub, il primo gesto di accoglienza per chi è appena entrato.
- **Mostra:** Il mantello appena appeso, una sedia scostata e una tazza spinta verso il posto del nuovo arrivato.
- **Non mostrare:** Strette di mano in posa da foto di gruppo, mantelli con stemmi, armature, razze riconoscibili.
- **Fonte:** `discord/sezione-wow-forever/canali/06-hub-presentazioni.md` (funzione del topic)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. In the section alcove a newcomer has just hung a travel cloak on a wooden peg by the map table and still holds the strap of a worn bag. A seated regular, a heavyset man in his fifties, pulls out the chair beside him and turns toward them with an open, welcoming hand; a woman across the table slides a freshly poured cup of tea to the empty place. Natural faces caught mid-gesture, nobody posing. The blank map and carved tokens lie between them. The single magenta neon is a thin frame around a blank map on the wall behind. Composition: the subject sits in the central square, whole in a centre crop; the outer sides are calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- «Hai appena appeso il mantello» preso alla lettera: il gesto d'ingresso è il mantello sul piolo, l'accoglienza è la sedia e la tazza.

#### D-WOW-HUB-informazioni · `06 · hub › informazioni`  `pubblica`

- **Tipo:** forum-topic · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post di apertura del topic.
- **File:** `docs/artwork/export/discord/canali/wow-hub-informazioni.png`
- **Pubblicazione:** pubblica — Pubblica: topic fisso dell'hub, il manuale di casa che si consulta quando serve.
- **Mostra:** Il libro di casa consumato, pieno di segnalibri, con la bussola sopra: dove si trova cosa.
- **Non mostrare:** Pagine leggibili, piante con nomi di stanze, mappe di luoghi del gioco, simboli sulla copertina.
- **Fonte:** `discord/sezione-wow-forever/canali/06-hub-informazioni.md` (funzione del topic)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Still life on the map table of the section alcove: a thick, well-worn leather house-book lies open, its pages covered in unreadable abstract handwriting and small sketches of rooms, with many cloth ribbon markers hanging out at different places. A brass compass rests on the open page while an adult finger traces a line toward one of the markers. A cup of tea and a lantern beside it; the long table fades into soft shadow. The single magenta neon is a thin frame around a blank map on the wall behind. Composition: the subject sits in the central square, whole in a centre crop; the outer sides are calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- La bussola viene dall'emoji del topic (🧭); i segnalibri dicono «ti serve quando non ricordi dove sta una cosa».

#### D-WOW-HUB-regolamento · `06 · hub › regolamento`  `pubblica`

- **Tipo:** forum-topic · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post di apertura del topic.
- **File:** `docs/artwork/export/discord/canali/wow-hub-regolamento.png`
- **Pubblicazione:** pubblica — Pubblica: topic fisso dell'hub, il Patto della Locanda che vale per tutti.
- **Mostra:** Una stretta di mano sopra il foglio del Patto, tenuto fermo dalle tazze di tutti.
- **Non mostrare:** Pergamene con sigilli o stemmi, testo leggibile, giuramenti con armi, gesti solenni da cerimonia.
- **Fonte:** `discord/sezione-wow-forever/canali/06-hub-regolamento.md` (funzione del topic)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Across the long map table of the section alcove two adults of different ages shake hands, firm and friendly, over a single sheet of unreadable abstract lines. The sheet is held flat by a ring of mismatched cups, one from every seat, as if each person at the table has set down their own. Others sit around, relaxed, one nodding along. Lantern light; the carved wooden tokens have been pushed to the side. The single magenta neon is a thin frame around a blank map on the wall. Composition: the subject sits in the central square, whole in a centre crop; the outer sides are calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- «Valide per tutti, GM e officers compresi»: ogni tazza tiene fermo lo stesso foglio; la stretta di mano viene dall'emoji del topic (🤝).

#### D-WOW-HUB-chat · `06 · hub › chat`  `pubblica`

- **Tipo:** forum-topic · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post di apertura del topic.
- **File:** `docs/artwork/export/discord/canali/wow-hub-chat.png`
- **Pubblicazione:** pubblica — Pubblica: topic fisso dell'hub, il tavolo grande dove ci si siede senza motivo.
- **Mostra:** Chiacchiere libere al tavolo grande, la mappa spinta in là per far posto alle tazze.
- **Non mostrare:** Schermi, meme o immagini disegnate, bottiglie in primo piano, ubriachezza, risate in posa.
- **Fonte:** `discord/sezione-wow-forever/canali/06-hub-chat.md` (funzione del topic)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. A relaxed evening at the long table of the section alcove with nothing planned: four adults of different ages and builds sit close, one mid-story with a wide gesture, the others laughing quietly, a woman in a wheelchair at the table's end refilling cups from a big teapot. The blank map has been pushed aside to make room for cups, a bowl of snacks and somebody's elbow. Warm, loose, ordinary. The single magenta neon is a thin frame around a blank map on the wall behind them. Composition: the subject sits in the central square, whole in a centre crop; the outer sides are calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- La mappa spostata dice che qui non si pianifica: si racconta. La carrozzina è dentro un'azione ordinaria (versa il tè).

#### D-WOW-HUB-lfg · `06 · hub › lfg`  `pubblica`

- **Tipo:** forum-topic · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post di apertura del topic.
- **File:** `docs/artwork/export/discord/canali/wow-hub-lfg.png`
- **Pubblicazione:** pubblica — Pubblica: topic fisso dell'hub, la ricerca di gruppo.
- **Mostra:** Sedie vuote attorno a un tavolino, una candela per posto: una accesa, una che si accende, due in attesa.
- **Non mostrare:** Icone di ruolo (scudo, cuore, spada), armi, simboli sulle candele, numeri.
- **Fonte:** `discord/sezione-wow-forever/canali/06-hub-lfg.md` (funzione del topic) · indicazione del brief (sedie vuote e una candela per posto)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. A small round side table in a corner of the section alcove with four empty chairs drawn around it. In front of each chair stands a short candle in a brass holder: one already lit, a second being lit right now by an adult hand with a long taper, the other two still waiting, unlit. A folded blank map and a few carved wooden tokens lie in the middle, a cup of tea at the lit place. Soft and inviting: a group about to form. The single magenta neon is a thin frame around a blank map on the wall behind the table. Composition: the subject sits in the central square, whole in a centre crop; the outer sides are calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Le reaction di ruolo 🛡️💚⚔️ non si disegnano (sarebbero icone di classe/ruolo): chi si unisce accende la sua candela.

#### D-WOW-HUB-roster · `06 · hub › roster di raid`  `pubblica`

- **Tipo:** forum-topic · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post di apertura del topic.
- **File:** `docs/artwork/export/discord/canali/wow-hub-roster.png`
- **Pubblicazione:** pubblica — Pubblica: topic fisso dell'hub, chi raida nella season e con quale spec.
- **Mostra:** Segnalini di legno sulla mappa e altrettanti, curati uguale, sulla mensola dei ricambi: si ruota.
- **Non mostrare:** Figurine riconoscibili come classi o razze del gioco, armi o armature sui segnalini, nomi o numeri nel registro.
- **Fonte:** `discord/sezione-wow-forever/canali/06-hub-roster.md` (guida pinnata e roster vivo)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Along the map table of the section alcove a row of hand-carved wooden figures stands on the blank map, each slightly different. On a narrow shelf just behind, more figures wait, just as polished and cared for. An adult hand lifts one figure from the shelf and sets it gently onto the map, while another figure goes back to the shelf without being set apart. An open ledger of abstract columns, a cup and a lantern lie nearby. The single magenta neon is a thin frame around a blank map on the wall. Composition: the subject sits in the central square, whole in a centre crop; the outer sides are calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- «Panchina non vuol dire seconda scelta»: le figure in attesa sono lucidate come le altre e il cambio avviene senza esclusione.

#### D-WOW-HUB-loot · `06 · hub › loot`  `pubblica`

- **Tipo:** forum-topic · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post di apertura del topic.
- **File:** `docs/artwork/export/discord/canali/wow-hub-loot.png`
- **Pubblicazione:** pubblica — Pubblica: topic fisso dell'hub, il sistema a crediti scritto prima della season.
- **Mostra:** Oggetti fantasy generici su un panno e pile di gettoni: il pezzo va a chi ha la pila più bassa.
- **Non mostrare:** Armi, armature di classe, oggetti leggendari riconoscibili, dadi con numeri, monete con effigi, denaro reale.
- **Fonte:** `discord/sezione-wow-forever/canali/06-hub-loot.md` (regole pinnate e tabella dei crediti) · indicazione del brief (oggetti generici su un panno)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. On the section alcove table a dark felt cloth is spread with a few generic fantasy treasures: a plain silver ring, a folded travel cloak, a small carved amulet, a pair of soft leather gloves. A small brass balance scale stands beside the cloth. In front of each seated person sits a little stack of wooden counters, some tall, some short; a hand slides the ring across the cloth toward the person with the shortest stack, and the others watch at ease. The single magenta neon is a thin frame around a blank map on the wall. Composition: the subject sits in the central square, whole in a centre crop; the outer sides are calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- I crediti diventano pile di gettoni di legno e la regola «ha la precedenza chi ne ha meno» è il gesto; la bilancia viene dall'emoji del topic (⚖️). Niente armi anche se il testo cita le armi a 2 crediti.

#### D-WOW-HUB-banca-di-gilda · `06 · hub › banca di gilda`  `pubblica`

- **Tipo:** forum-topic · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post di apertura del topic.
- **File:** `docs/artwork/export/discord/canali/wow-hub-banca-di-gilda.png`
- **Pubblicazione:** pubblica — Pubblica: topic fisso dell'hub, il Banco dell'Oste dove si dona e si preleva.
- **Mostra:** Il forziere di legno e ottone aperto, una donazione che entra e l'Oste che la annota nel registro.
- **Non mostrare:** Denaro reale, banconote, monete con simboli o effigi, sacchi d'oro debordanti, l'Oste al centro o con armi.
- **Fonte:** `discord/sezione-wow-forever/canali/06-hub-banca-di-gilda.md` (guida del Banco dell'Oste) · indicazione del brief (forziere di legno e ottone)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. A sturdy wooden chest bound in brass stands open on a low shelf of the section alcove, holding plain unmarked coins, bundles of dried herbs, small sacks of ore and a rolled bolt of cloth. A traveller lays one more bundle of herbs inside. At the edge of the frame, small and calm, the Innkeeper robot — smooth dark brushed-metal face with no mouth, two round amber optics, ivory robe with a dark obi, small cloth cap — notes the entry in an open ledger of unreadable abstract columns. A lantern hangs above the chest. The single magenta neon is a thin frame around a blank map on the wall. Composition: the subject sits in the central square, whole in a centre crop; the outer sides are calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Unica comparsa dell'Oste nel lotto, motivata dal nome «Banco dell'Oste»; resta al margine, volto scuro senza bocca. Si dona e si tiene il conto: niente accumulo di ricchezza.

#### D-WOW-HUB-scambio-e-artigianato · `06 · hub › scambio e artigianato`  `pubblica`

- **Tipo:** forum-topic · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post di apertura del topic.
- **File:** `docs/artwork/export/discord/canali/wow-hub-scambio-e-artigianato.png`
- **Pubblicazione:** pubblica — Pubblica: topic fisso dell'hub, baratti, crafting e il registro di chi sa fare cosa.
- **Mostra:** Un baratto equo, erbe contro minerale, fra gli attrezzi di mestieri diversi.
- **Non mostrare:** Forgiatura di armi, lingotti o gemme riconoscibili del gioco, cartellini con prezzi, monete in primo piano.
- **Fonte:** `discord/sezione-wow-forever/canali/06-hub-scambio-e-artigianato.md` (guida e registro delle professioni)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. At the end of the long table in the section alcove two adults trade across a corner: one hands over a tied bundle of dried herbs, the other passes back a small sack of ore nuggets, both smiling at a fair deal. Around them lie the tools of different crafts: a spool of thread and shears, a leather punch, a mortar and pestle, a small jeweller's loupe. A lantern, two cups, and the blank map rolled up to make room. The single magenta neon is a thin frame around a blank map on the wall behind. Composition: the subject sits in the central square, whole in a centre crop; the outer sides are calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- L'esempio del testo («forgiatura armi, spadoni e asce») non entra: si mostrano mestieri senza armi (cucito, cuoio, alchimia, gioielli).

#### D-WOW-HUB-addon · `06 · hub › addon`  `pubblica`

- **Tipo:** forum-topic · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post di apertura del topic.
- **File:** `docs/artwork/export/discord/canali/wow-hub-addon.png`
- **Pubblicazione:** pubblica — Pubblica: topic fisso dell'hub, come attrezzarsi bene prima di giocare.
- **Mostra:** Una cassetta di lenti e attrezzi d'ottone: si mette a punto il proprio strumento, con calma.
- **Non mostrare:** Interfacce di gioco, schermi, barre, finestre, loghi di addon o di store, ingranaggi decorativi.
- **Fonte:** `discord/sezione-wow-forever/canali/06-hub-addon.md` (funzione del topic)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Close view on the section alcove table: an open wooden instrument case lined with felt holds small brass tools, interchangeable glass lenses and a folding loupe, each in its own slot. An adult with reading glasses pushed up on their forehead clips an extra lens onto a brass spyglass and adjusts it with a tiny screwdriver, taking their time. A cup of tea and a lantern beside the case, the blank map in soft focus behind. The single magenta neon is a thin frame around a blank map on the wall. Composition: the subject sits in the central square, whole in a centre crop; the outer sides are calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Gli addon sono interfaccia del gioco (vietata): diventano lenti aggiuntive su un cannocchiale, cioè «vedere meglio». Niente ingranaggi anche se l'emoji è ⚙️.

#### D-WOW-HUB-i-consigli-del-finland · `06 · hub › i consigli del Finland`  `pubblica`

- **Tipo:** forum-topic · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post di apertura del topic.
- **File:** `docs/artwork/export/discord/canali/wow-hub-i-consigli-del-finland.png`
- **Pubblicazione:** pubblica — Pubblica: topic fisso dell'hub, il pezzo d'autore firmato; l'autore non compare nell'immagine.
- **Mostra:** Taccuino aperto, tisana e candela sul banco, lo sgabello scostato: chi scrive si è alzato a fare due passi.
- **Non mostrare:** Qualsiasi figura che possa leggersi come Finland, firme o iniziali, caffè o bevande gasate, bottiglie.
- **Fonte:** `discord/sezione-wow-forever/canali/06-hub-i-consigli-del-finland.md` (funzione del topic) · indicazione del brief (taccuino e tazza sul banco)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. On the small counter at the side of the section alcove, with nobody present, a worn notebook lies open, its pages filled with unreadable abstract handwriting and a pen resting in the fold. Next to it a cup of herbal tea is still steaming and a single short candle burns in a brass holder. The stool in front of the counter has been pushed back, as if the writer has just stood up for a short walk and will be back soon. Quiet, kind, unhurried. The single magenta neon is a thin frame around a blank map on the wall above. Composition: the subject sits in the central square, whole in a centre crop; the outer sides are calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Finland è una persona viva: nessun ritratto. Lo sgabello scostato e la tisana vengono dal consiglio «alzati, cammina, bevi una tisana»; la candela dall'emoji 🕯️.

#### D-WOW-HUB-assenze · `06 · hub › assenze`  `pubblica`

- **Tipo:** forum-topic · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post di apertura del topic.
- **File:** `docs/artwork/export/discord/canali/wow-hub-assenze.png`
- **Pubblicazione:** pubblica — Pubblica: topic fisso dell'hub, partenze e ritorni comunicati invece di sparire.
- **Mostra:** Il posto lasciato con la sciarpa piegata e la tazza coperta dal carrello, mentre il tavolo continua.
- **Non mostrare:** Valigie con adesivi o scritte, figure tristi, il carrello come sorvegliante, testo sul cartellino.
- **Fonte:** `community/media/scene/024-la-tazza-coperta.md` (Fotogramma) · `discord/sezione-wow-forever/canali/06-hub-assenze.md`

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. At the long map table of the section alcove the evening goes on: hands move tokens on the blank map, cups are refilled. One chair is left empty, a neatly folded scarf on its seat and a blank luggage tag hanging from its back. The small round service robot — brass and dark enamel, two tiny cyan optics — gently sets a wooden lid on the cup at that place to keep it warm. Nobody takes the seat. The absence is short, legitimate and welcome. The single magenta neon is a thin frame around a blank map on the wall. Composition: the subject sits in the central square, whole in a centre crop; the outer sides are calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Dalla 024: poltrona diventa sedia del tavolo delle mappe, aggiunto il cartellino da viaggio (vacanze e impegni). Carrello usato solo qui; luce ambra perché la sala continua attorno al posto vuoto.

#### D-WOW-07-wiki · `07 · wiki`  `sconsigliata`

- **Tipo:** forum · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post-guida fissato del forum.
- **File:** `docs/artwork/export/discord/canali/wow-07-wiki.png`
- **Pubblicazione:** sconsigliata — Sconsigliata: l'immagine va sul singolo post-guida, non sul canale.
- **Mostra:** La Biblioteca: nove scaffali di guide senza titoli, chi ne prende una e chi la consulta.
- **Non mostrare:** Titoli sui dorsi, tomi con stemmi, libri d'incantesimi luminosi, nomi di dungeon o raid.
- **Fonte:** `discord/sezione-wow-forever/canali/07-wiki.md` (post-guida pinnato)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. A narrow timber bookcase with nine shelves stands at the side of the section alcove, filled with books with plain blank spines, rolled scrolls tied with string and a few loose folders. An adult in a cardigan pulls one volume halfway out, a finger on its spine; at the table nearby another person reads an open guide beside a cup of tea, a small paper slip sticking out of its pages. Lantern light, the long table and blank map in soft focus. The single magenta neon is a thin frame around a blank map on the wall. Composition: the subject sits in the central square, whole in a centre crop; the outer sides are calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- I nove scaffali sono i nove tag del forum; il foglietto fra le pagine dice «chiedi sotto la guida».

#### D-WOW-08-novelle · `08 · novelle`  `sconsigliata`

- **Tipo:** forum · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post-guida fissato del forum.
- **File:** `docs/artwork/export/discord/canali/wow-08-novelle.png`
- **Pubblicazione:** sconsigliata — Sconsigliata: l'immagine va sul singolo testo del Canzoniere, non sul canale.
- **Mostra:** Il Canzoniere: chi scrive a lume di lanterna e chi legge i libretti già cuciti.
- **Non mostrare:** Paesaggi o personaggi riconoscibili del mondo di gioco, eroi in armatura, testo leggibile, ritratti dei personaggi della lore.
- **Fonte:** `discord/sezione-wow-forever/canali/08-novelle.md` (post-guida pinnato)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Late at the section alcove table, an adult wrapped in a shawl writes by lantern light with a dip pen on loose pages of unreadable abstract handwriting; a small stack of handmade booklets tied with string sits beside the inkwell. Across the table another person reads one of the booklets, smiling quietly over a cup of tea. The blank map has been rolled aside, and a few carved wooden tokens stand like little characters at the edge of the page. The single magenta neon is a thin frame around a blank map on the wall. Composition: the subject sits in the central square, whole in a centre crop; the outer sides are calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- La regola «storie all'altezza degli occhi» resta nell'immagine: segnalini come personaggi, nessun eroe che salva il mondo.

#### D-WOW-09-direzione · `09 · direzione`  `sconsigliata`

- **Tipo:** forum · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post-guida fissato del forum.
- **File:** `docs/artwork/export/discord/canali/wow-09-direzione.png`
- **Pubblicazione:** sconsigliata — Sconsigliata: forum visibile solo agli officer.
- **Mostra:** La Stanza sul Retro vista dalla porta socchiusa: un tavolo di lavoro, non un covo.
- **Non mostrare:** Atmosfera da complotto, ombre minacciose, sigilli, stendardi di fazione, figure in armatura.
- **Fonte:** `discord/sezione-wow-forever/canali/09-direzione.md` (intestazione del forum)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Behind the section alcove a sliding shoji door stands half open onto a small back room: a round table, a few mismatched chairs, cups and an open ledger, a lantern hanging low. A brass key hangs on a hook by the doorframe. Through the gap two figures are seen from behind, leaning over a small blank map together. It reads as a working room, not a secret one. The single magenta neon is a thin frame around a blank map on the back room wall. Composition: the subject sits in the central square, whole in a centre crop; the outer sides are calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Voce di canale del forum oltre ai quattro topic; la chiave viene dall'emoji 🗝️, la porta socchiusa da «chiuso non per segretezza» (06-hub-informazioni).

#### D-WOW-DIR-globale · `09 · direzione › Globale`  `sconsigliata`

- **Tipo:** forum-topic · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post di apertura del topic.
- **File:** `docs/artwork/export/discord/canali/wow-dir-globale.png`
- **Pubblicazione:** sconsigliata — Sconsigliata: topic visibile solo agli officer.
- **Mostra:** Un tavolo rotondo con un numero dispari di sedie, tre occupate e due che aspettano chi deve ancora rispondere.
- **Non mostrare:** Colori o oggetti di una sola fazione, toni da tribunale, una persona sola che decide.
- **Fonte:** `discord/sezione-wow-forever/canali/09-direzione.md` (post Globale)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. In the small back room behind the section alcove, a round table with five mismatched chairs: three adults of different ages sit and talk over an open ledger, one leaning in, one listening with her chin on her hand, while the other two chairs stand pulled out and waiting, a cup already poured at each. A brass key rests in the middle of the table. A lantern hangs low; the tavern's hum is muted beyond the shoji. The single magenta neon is a thin frame around a blank map on the wall. Composition: the subject sits in the central square, whole in a centre crop; the outer sides are calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Dal testo: numero dispari per evitare stalli, «mai una persona sola», e chi tace si aspetta (le due tazze già versate).

#### D-WOW-DIR-alleanza · `09 · direzione › Alleanza`  `sconsigliata`

- **Tipo:** forum-topic · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post di apertura del topic.
- **File:** `docs/artwork/export/discord/canali/wow-dir-alleanza.png`
- **Pubblicazione:** sconsigliata — Sconsigliata: topic visibile solo agli officer.
- **Mostra:** Lo stesso tavolo visto dal lato della sedia alta di frassino chiaro e della tazza sottile di porcellana.
- **Non mostrare:** Blu come codice di fazione, stendardi, leoni o altri emblemi, oro e azzurro abbinati.
- **Fonte:** `discord/sezione-wow-forever/canali/09-direzione.md` (post Alleanza)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. The small back room behind the section alcove, seen from one side of the round table: in the foreground a tall-backed chair of pale ash wood with a woven cushion, and before it a tall, slim cup of pale glazed porcelain. On the table in front of it an adult hand arranges carved wooden tokens on a small blank map for a coming evening. Across the table, soft and out of focus, a low dark walnut chair and its squat cup wait. Lantern light. The single magenta neon is a thin frame around a blank map on the wall. Composition: the subject sits in the central square, whole in a centre crop; the outer sides are calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Fazione distinta solo da oggetti neutri: sedia alta di frassino chiaro e tazza sottile; fa coppia con D-WOW-DIR-orda (stesso tavolo, lato opposto).

#### D-WOW-DIR-orda · `09 · direzione › Orda`  `sconsigliata`

- **Tipo:** forum-topic · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post di apertura del topic.
- **File:** `docs/artwork/export/discord/canali/wow-dir-orda.png`
- **Pubblicazione:** sconsigliata — Sconsigliata: topic visibile solo agli officer.
- **Mostra:** Lo stesso tavolo visto dal lato della sedia bassa di noce scuro e della tazza tozza di gres.
- **Non mostrare:** Rosso come codice di fazione, stendardi, teschi, zanne o altri emblemi, toni minacciosi.
- **Fonte:** `discord/sezione-wow-forever/canali/09-direzione.md` (post Orda)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. The small back room behind the section alcove, seen from the other side of the round table: in the foreground a low, sturdy chair of dark walnut with a worn leather seat, and before it a squat, heavy stoneware cup. On the table in front of it an adult hand arranges carved wooden tokens on a small blank map for a coming evening. Across the table, soft and out of focus, a tall pale ash chair and its slim porcelain cup wait. Lantern light. The single magenta neon is a thin frame around a blank map on the wall. Composition: the subject sits in the central square, whole in a centre crop; the outer sides are calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Specchio di D-WOW-DIR-alleanza: cambia solo il lato del tavolo e la coppia sedia/tazza; nessuna delle due è «quella cattiva».

#### D-WOW-DIR-reclutamento · `09 · direzione › Reclutamento`  `sconsigliata`

- **Tipo:** forum-topic · **Formato:** 16:9 · master 1920×1080 · consegna PNG 1920×1080 (soggetto nel quadrato centrale: la miniatura è un ritaglio)
- **Dove va:** allegata al post di apertura del topic.
- **File:** `docs/artwork/export/discord/canali/wow-dir-reclutamento.png`
- **Pubblicazione:** sconsigliata — Sconsigliata: topic visibile solo agli officer.
- **Mostra:** Lettere tutte uguali che partono dal tubo pneumatico: lo stesso testo, incollato fuori senza cambiarlo.
- **Non mostrare:** Bersagli o mirini (dall'emoji 🎯), megafoni, manifesti con scritte, loghi di piattaforme.
- **Fonte:** `discord/sezione-wow-forever/canali/09-direzione-reclutamento.md` (funzione del topic)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. At a small desk by a round window in the back room behind the section alcove, an adult slides a folded blank letter into a brass pneumatic tube that runs out through the wall; a neat stack of identical folded letters tied with string waits beside it, with a cup of tea and a short list of abstract strokes pinned above the desk. Through the window, far off under the violet nebula, a small ship is docking. The only corner of the room that looks outward. The single magenta neon is a thin frame around a blank map on the wall. Composition: the subject sits in the central square, whole in a centre crop; the outer sides are calm and dark. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the whole subject inside the central square of the frame, so that a centred square crop shows all of it; the outer sides are calm and dark. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- «L'unico topic che guarda fuori»: finestra sul molo e posta pneumatica in rame funzionale; le lettere identiche sono i sette fatti uguali in ogni post.

#### D-WOW-candidatura-officer · `candidatura-officer`  `sconsigliata`

- **Tipo:** testuale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2, ritaglio della fascia centrale)
- **Dove va:** primo messaggio del canale, solo immagine, come allegato permanente; il testo va nei messaggi seguenti. Nei canali di chat va allegata al messaggio di istruzioni **fissato**.
- **File:** `docs/artwork/export/discord/canali/wow-candidatura-officer.png`
- **Pubblicazione:** sconsigliata — Sconsigliata: nome, tipo e categoria del canale non sono ancora confermati, e il pubblico è ristretto; scena scritta per completezza.
- **Mostra:** Una lettera lasciata sulla sedia del tavolo di direzione e una tazza versata per chi l'ha scritta.
- **Non mostrare:** Gradi, distintivi, chiavi consegnate con cerimonia, uniformi, armature.
- **Fonte:** `discord/sezione-wow-forever/canali/00-struttura-canali.md` §1-§2 (ID 1428058437438148668) · `06-hub-regolamento.md` 1/5

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. In the back room behind the section alcove, one chair at the round table is pulled slightly out, and on its seat lies a single folded blank letter, just left there. Two seated adults glance toward it without hurry while a third pours an extra cup of tea and sets it at that place. Nothing is decided yet: the letter only opens a conversation. A lantern hangs low and a brass key waits on a hook. The single magenta neon is a thin frame around a blank map on the wall behind. Composition: the subject sits centre-right inside the central horizontal band; the left quarter and the top and bottom fifths are calm and dark; one clear subject, readable small. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Nessun file di canale: funzione presa dalla struttura («la candidatura apre la pratica, non la chiude»). Se il canale finisce fra quelli di community va spostato nella categoria Candidature (zona retro-cucina).

#### D-WOW-VOC-accettazione · `accettazione`  `sconsigliata`

- **Tipo:** vocale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2)
- **Dove va:** chat testuale del vocale, che è effimera: per questo è sconsigliata.
- **File:** `docs/artwork/export/discord/canali/wow-voc-accettazione.png`
- **Pubblicazione:** sconsigliata — Sconsigliata: canale vocale senza testata, come i vocali del Salotto.
- **Mostra:** Due chiacchiere fra candidato e officer, seduti alla pari, con il tè fra loro.
- **Non mostrare:** Scrivanie da colloquio, cartelline, fogli di valutazione, posture da esame, cuffie o microfoni.
- **Fonte:** `discord/sezione-wow-forever/canali/00-struttura-canali.md` §4 · `03-candidatura.md` 3/3

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Night in a quiet nook of the section alcove: two armchairs face each other across a low table with a teapot and two cups, an indigo noren drawn behind them. A newcomer with a bag still on their lap and a regular with greying hair talk at ease, both leaning back; a short friendly chat, not an interview. A small lantern burns low between them. The single magenta neon is a thin frame around a blank map on the wall. Composition: the subject sits centre-right inside the central horizontal band; the left quarter and the top and bottom fifths are calm and dark; one clear subject, readable small. Lighting: low night light, indigo-violet (#2A1D3B to #7E2AA8) dominant, a single small warm amber glow (one lamp) as the only warm note, and ONE soft magenta neon glow (#C45BC4) as the only neon, deep violet-black shadows (#0B0612, never pure black). Fine film grain, painterly brushwork, intimate quiet composition, tender and slightly sad mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Vocale della sezione, non nell'elenco del brief: aggiunto per completezza. «Venti minuti, niente prova pratica» resi con due poltrone alla pari.

#### D-WOW-VOC-sale · `sala-1, sala-2, sala-3…`  `sconsigliata`

- **Tipo:** vocale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2)
- **Dove va:** chat testuale del vocale, che è effimera: per questo è sconsigliata.
- **File:** `docs/artwork/export/discord/canali/wow-voc-sale.png`
- **Pubblicazione:** sconsigliata — Sconsigliata: canali vocali senza testata, come i vocali del Salotto.
- **Mostra:** Stare in compagnia senza dover parlare: ognuno fa la sua cosa allo stesso tavolo.
- **Non mostrare:** Cuffie, microfoni, schermi, la sala piena come a un evento.
- **Fonte:** `discord/sezione-wow-forever/canali/00-struttura-canali.md` §4 · `02b-faq.md` («Non conosco nessuno»)

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Night in the section alcove with nothing scheduled: a few adults sit around the map table doing different things side by side — one mending a strap, one reading, one simply listening with eyes half closed and a cup held in both hands. A teapot keeps warm under a quilted cosy, the lanterns are turned low and the blank map is rolled up at the end of the table. Company without any need to talk. The single magenta neon is a thin frame around a blank map on the wall. Composition: the subject sits centre-right inside the central horizontal band; the left quarter and the top and bottom fifths are calm and dark; one clear subject, readable small. Lighting: low night light, indigo-violet (#2A1D3B to #7E2AA8) dominant, a single small warm amber glow (one lamp) as the only warm note, and ONE soft magenta neon glow (#C45BC4) as the only neon, deep violet-black shadows (#0B0612, never pure black). Fine film grain, painterly brushwork, intimate quiet composition, tender and slightly sad mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Una sola voce per le sale numerate (identiche). Dalla faq: «entrare in vocale e restare lì mentre gli altri fanno altro».

#### D-WOW-VOC-riunione · `riunione`  `sconsigliata`

- **Tipo:** vocale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2)
- **Dove va:** chat testuale del vocale, che è effimera: per questo è sconsigliata.
- **File:** `docs/artwork/export/discord/canali/wow-voc-riunione.png`
- **Pubblicazione:** sconsigliata — Sconsigliata: canale stage senza testata, come i vocali del Salotto.
- **Mostra:** Una riunione aperta a tutti: una persona parla calma, la sala ascolta.
- **Non mostrare:** Palco, podio, microfono, folla tutta uguale, toni da comizio.
- **Fonte:** `discord/sezione-wow-forever/canali/00-struttura-canali.md` §4

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Night in the section alcove with the whole community gathered: rows of mismatched chairs and benches face the map table, where one adult stands speaking calmly, a hand resting on the rolled-up map. The listeners, of many ages and builds, lean in, some holding cups, one standing at the back with a cane. Lanterns hang at different heights over the crowd. The single magenta neon is a thin frame around a blank map on the wall behind the speaker. Composition: the subject sits centre-right inside the central horizontal band; the left quarter and the top and bottom fifths are calm and dark; one clear subject, readable small. Lighting: low night light, indigo-violet (#2A1D3B to #7E2AA8) dominant, a single small warm amber glow (one lamp) as the only warm note, and ONE soft magenta neon glow (#C45BC4) as the only neon, deep violet-black shadows (#0B0612, never pure black). Fine film grain, painterly brushwork, intimate quiet composition, tender and slightly sad mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Vocale (stage) della sezione, aggiunto per completezza; nessuna amplificazione disegnata.

#### D-WOW-VOC-ufficio · `ufficio`  `sconsigliata`

- **Tipo:** vocale · **Formato:** 16:9 · master 2560×1440 · consegna PNG 1600×640 (5:2)
- **Dove va:** chat testuale del vocale, che è effimera: per questo è sconsigliata.
- **File:** `docs/artwork/export/discord/canali/wow-voc-ufficio.png`
- **Pubblicazione:** sconsigliata — Sconsigliata: vocale solo officer, senza testata.
- **Mostra:** Gli officer al lavoro a tarda sera nella stanza sul retro, porta chiusa ma luce calda dall'altra parte.
- **Non mostrare:** Atmosfera da complotto, cuffie, schermi, documenti leggibili.
- **Fonte:** `discord/sezione-wow-forever/canali/00-struttura-canali.md` §4

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Night in the back room behind the section alcove: two adults sit at the round table with the lanterns turned low, one with a shawl around her shoulders, talking quietly over an open ledger and a pot of tea; a third chair stands empty with a cup waiting. The shoji to the alcove is closed, its paper glowing faintly from the hall beyond. The single magenta neon is a thin frame around a blank map on the wall. Composition: the subject sits centre-right inside the central horizontal band; the left quarter and the top and bottom fifths are calm and dark; one clear subject, readable small. Lighting: low night light, indigo-violet (#2A1D3B to #7E2AA8) dominant, a single small warm amber glow (one lamp) as the only warm note, and ONE soft magenta neon glow (#C45BC4) as the only neon, deep violet-black shadows (#0B0612, never pure black). Fine film grain, painterly brushwork, intimate quiet composition, tender and slightly sad mood. Horizontal 16:9 master. Keep the subject inside the central horizontal band (from 20% to 80% of the height), centre-right; the left quarter is calm and dark; the image must read clearly at 360 pixels wide. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

- Vocale della sezione, aggiunto per completezza; staff notturno quindi luce V.
