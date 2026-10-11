# Immagini del sito (S)

Un’immagine **dedicata** per ogni slot: oggi molte sono riusate in 2–3 punti. Le immagini esistenti che restano valide (benvenuto in home, Locanda, card WoW) non hanno un prompt: vedi la tabella “Tenere o sostituire” nel README. **S-01…S-09** coprono gli slot già nel sito; **S-10…S-18**, in fondo, aggiungono la card WoW con il centro libero, la galleria WoW e quattro slot che il sito non ha ancora. Tutte le immagini restano **scure anche nel tema chiaro**.

> **Come comporre ogni prompt:** copia il blocco “Prompt” (è già completo di stile, luce e chiusura) e incolla il **negative** qui sotto dove il generatore lo prevede; altrimenti la frase finale “No text, no letters…” del prompt basta. Regole e blocchi: [README](README.md).

**Negative standard**

```text
text, letters, words, numbers, logo, watermark, signature, caption, UI, readable signs, extra neon colors, cyan neon, green neon, blue neon, pure black shadows, flat vector art, 3D render, plastic skin, photograph, oversaturated, harsh flash, fanservice, weapons held in hands, blood, skulls, soldiers, chibi, crowd of backs forming a closed circle, deformed hands, extra fingers, duplicated faces, blurry, low resolution, jpeg artifacts
```

---

### S-01 · Hero della home  `P0`

- **Dove va:** `content/site.json` → `hero.poster` (sfondo della hero a tutto schermo, 100svh). Sostituisce `concept-nebula-inn.webp`, che contiene la scritta “TAVERNULA”.
- **File:** `public/media/art/hero-la-locanda-sul-dorso.webp`
- **Formato:** 16:9 · master 2560×1440 · consegna: WebP 1920 + 1280 px, ≤250 KB
- **Zone di sicurezza:** Titolo, sottotitolo e bottoni sono centrati: terzo centrale e terzo basso calmi e scuri, nessun dettaglio fine. Soggetto nella metà destra. Margine 8% su ogni lato (la hero ha dolly ±4% e parallasse). Il CSS aggiunge un riflesso magenta in alto a destra (78% / 30%): il neon va lì.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Wide cinematic establishing shot at night: the tavern’s long glass-fronted timber hall on the shoulder of a huge drifting asteroid, arched windows glowing amber, hanging lanterns, steam rising from chimneys. In the upper right a single geometric magenta neon tube-sign frame above the entrance, abstract, no letters. Behind it a vast violet fold of nebula with drifting asteroids; far lower left the faint glass dome of a city. In one lit window the tiny silhouette of the Innkeeper, a slender humanoid robot with a smooth dark brushed-metal face with NO mouth and NO nose, two round softly glowing amber optics (#FDA877), brushed-steel neck and jointed brass-and-steel hands, wearing a loose off-white linen kimono with a dark indigo obi sash and a small white cloth cap with glowing amber optics. On a glass-roofed pressurised gangway a tiny traveler with a bag, seen from behind, walks toward the lit door. Composition: all detail clustered in the right half and upper half; the centre third and the whole lower third are quiet dark negative space with soft atmospheric haze, low horizon. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**Note**

- Il viaggiatore cammina su una passerella **pressurizzata e coperta**: all’esterno, senza atmosfera, servirebbe una tuta (bibbia visiva).
- Variante mobile 9:16 facoltativa: stesso prompt con “vertical composition, the tavern in the upper half, lower half quiet dark haze”.

---

### S-02 · Immagine social (Open Graph)  `P0`

- **Dove va:** `content/site.json` → `seo.ogImage` (anteprima link su Discord, WhatsApp, Telegram, X).
- **File:** `public/media/art/og-la-porta-sempre-aperta.jpg`
- **Formato:** 1.91:1 · master 2400×1260 · consegna: JPG 1200×630, ≤300 KB (non WebP: non tutti i crawler lo leggono)
- **Zone di sicurezza:** Soggetto nel 60% centrale (larghezza) × 70% (altezza), nessun dettaglio nel 10% dei bordi: ogni social ritaglia in modo diverso. Fondo scuro con vignetta calda e un punto luce ambra al centro, così non sparisce su feed scuri. Il marchio, se serve, si aggiunge in post dai file originali.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Centered, symmetrical, frontal composition: the warm lit arched doorway of the tavern seen straight on from outside, framed by heavy indigo noren curtains, a pool of amber light spilling over timber planks, the small silhouette of the Innkeeper, a slender humanoid robot with a smooth dark brushed-metal face with NO mouth and NO nose, two round softly glowing amber optics (#FDA877), brushed-steel neck and jointed brass-and-steel hands, wearing a loose off-white linen kimono with a dark indigo obi sash and a small white cloth cap standing inside with glowing amber optics, violet nebula sky behind, a small geometric magenta neon sign above the arch, abstract and without letters. Strong soft vignette, darker toward the corners, the brightest point in the exact centre. Subject small and contained: it must read as a clean icon even at thumbnail size. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**Note**

- Controlla l’anteprima su Discord, WhatsApp e Telegram prima di fissarla.

---

### S-03 · Fascia “La storia” in home  `P0`

- **Dove va:** `content/site.json` → `images.homeLore` (banda larga con titolo “Una notte di deposito”). Sostituisce `005-la-citta-nel-vetro.webp`, oggi usata anche per il Regolamento.
- **File:** `public/media/art/home-lore-concordia-dal-balcone.webp`
- **Formato:** 16:9 (la banda è alta almeno 560 px e si ritaglia a cover) · master 2560×1440 · consegna: WebP 1920 px, ≤220 KB
- **Zone di sicurezza:** Il testo sta a sinistra su un gradiente scuro (92% → 55% → 0%): metà sinistra e fascia bassa calme, soggetto nel 45% destro.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. View from a glass-enclosed observation balcony of the tavern at night, looking out past the edge of a glass dome: the vertical domed city of Concordia far below, tiered towers with timber balconies on burnished brass frames, suspended walkways, neon signs in narrow contained bands, thin artificial rain falling only inside the dome while the balcony glass stays perfectly dry, a tram of yellow windows entering a tunnel in the rock, and above it all a vast violet fold of nebula. Foreground: a dark brass railing in deep shadow across the left and bottom; a lantern hanging on the rail. At the far right, tiny, Ines, an adult woman, a crane operator at the end of a long shift, tired but steady, hair tied back, a worn travel bag with a buckle across her body, fingers still slightly curled as if around a lever seen from behind, leaning on the rail and looking out. One magenta neon sign belongs to the city, small and abstract, no letters. Composition: the city and the nebula occupy the right half; the left half is deep shadow and soft haze with little detail. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**Note**

- Corrisponde alla frase della home: “Sopra Concordia, oltre il bordo della cupola, c’è una casa che non chiude mai”.
- Concordia come da ADR-022: una cupola, torri a balconi di legno su strutture d’ottone, **nessun tetto a pagoda**. Ines è di spalle e piccola: nessun volto, nessun cappotto (quello rattoppato è di Runa).

---

### S-04 · Il Regolamento  `P1`

- **Dove va:** `content/site.json` → `images.regolamento` (card 4:3 in Chi siamo). Sostituisce `005-la-citta-nel-vetro.webp` (doppione).
- **File:** `public/media/art/regolamento-il-libro-e-la-bilancia.webp`
- **Formato:** 4:3 · master 2400×1800 · consegna: WebP 1280 px, ≤150 KB
- **Zone di sicurezza:** Soggetto centrato, sfondo sfocato ai bordi (la card ha angoli molto arrotondati, raggio 28 px).

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Close composition on the innkeeper’s counter at night: a heavy open ledger with blank pages, a small brass balance scale with two little pans and tiny weights, a steaming house cup, a brass lamp. At the edge of the frame the brass-and-steel hand and linen sleeve of the Innkeeper, a slender humanoid robot with a smooth dark brushed-metal face with NO mouth and NO nose, two round softly glowing amber optics (#FDA877), brushed-steel neck and jointed brass-and-steel hands, wearing a loose off-white linen kimono with a dark indigo obi sash and a small white cloth cap resting calmly next to the ledger, no face visible. Shallow depth of field: behind, a blurred warm hall with amber bokeh and a tall window onto the violet nebula, a thin magenta neon tube reflected in the glass. The mood is fair and gentle, not stern: rules with reasons written beside them. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**Note**

- La bilancia richiama la “scala delle conseguenze” dichiarata in anticipo nel regolamento.

---

### S-05 · Pagina 404  `P1`

- **Dove va:** `src/pages/404.astro` (oggi solo marchio + testo). Pensata come sfondo scurito (overlay 70%).
- **File:** `public/media/art/404-il-corridoio-delle-porte.webp`
- **Formato:** 16:9 · master 2560×1440 · consegna: WebP 1600 px, ≤160 KB
- **Zone di sicurezza:** Marchio, titolo, testo e bottone sono centrati: centro e terzo sinistro quasi vuoti e scuri. Il punto di fuga e la luce stanno a destra.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. A long timber corridor of the tavern seen from inside, vanishing to the right third of the frame: along the left wall many sliding shoji doors, all closed and dark; at the far right end a doorway opens onto the warm amber glow of the main hall. Halfway down the corridor, small, the Innkeeper, a slender humanoid robot with a smooth dark brushed-metal face with NO mouth and NO nose, two round softly glowing amber optics (#FDA877), brushed-steel neck and jointed brass-and-steel hands, wearing a loose off-white linen kimono with a dark indigo obi sash and a small white cloth cap holding an unlit paper lantern and gently extending an open palm toward the viewer as if to say “this way”. Polished planks reflecting the far light. A faint geometric magenta neon tube above the far doorway, abstract, no letters. The left half and centre of the frame are dark, soft and nearly empty. Gentle, a little funny, never frightening. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**Note**

- Testo del sito: “Questa stanza non c’è”. Il gag è L’Oste con la lanterna spenta, non una porta chiusa.

---

### S-06 · Hero di WoW Forever (“Il tavolo delle mappe”)  `P1`

- **Dove va:** `content/games/wow-forever/game.json` → `hero.image` (oggi uguale all’immagine della card, `004-b`). La card resta com’è.
- **File:** `public/media/art/wow-forever-il-tavolo-delle-mappe.webp`
- **Formato:** 16:9 (si ritaglia a cover in una fascia ≥520 px) · master 2560×1440 · consegna: WebP 1920 px, ≤220 KB
- **Zone di sicurezza:** Titolo, badge e bottoni in basso a sinistra su un gradiente (55% → 35%): angolo basso-sinistro calmo. Soggetto nella metà alta/destra. Deve reggere anche un ritaglio 4:1 nella fascia centrale (banner di sezione Discord 1200×300).

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. A quiet side hall of the tavern where a raiding guild plans its nights. A long oak table covered with a large hand-drawn unrolled map of an unnamed fantasy continent, weighed down by brass paperweights and carved wooden tokens (small towers, small plain banners with no symbols), an hourglass, steaming cups, a lantern. Three adults between thirty and fifty-five, different ethnicities and body types, relaxed in worn travel clothes, no armor, no weapons, one grey-haired woman with glasses, lean over the map pointing and talking, one chair left empty and pulled out. Behind them framed oil paintings of a cave, a volcano and a coiled dragon silhouette hang on the timber wall as trophies. Tall arched window onto the nebula on the right. A thin magenta neon tube runs along the window frame. Composition: people and map in the upper-right two thirds; the lower-left corner is dark and empty. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. Generic fantasy only: no recognizable game characters, factions, emblems or symbols.
```

**Note**

- Nessun riferimento a nomi o fazioni di giochi di terzi nel prompt. Il nome del gioco sta solo nel testo del sito.
- Nebulaa/Alleanza non ha ancora una gilda: nessuna variante per fazione finché non è confermata.

---

### S-07 · Kit “Tavolo” per ogni nuovo gioco (modello)  `P2`

- **Dove va:** Card gioco (16:10), hero gioco (16:9) e banner Discord di sezione (4:1) di ogni futuro tavolo. Si produce quando una sezione si apre.
- **File:** `public/media/art/<slug>-card.webp · <slug>-hero.webp`
- **Formato:** card 16:10 · hero 16:9 · master card 2400×1500 · hero 2560×1440 · consegna: card WebP 960 px ≤80 KB · hero WebP 1920 px ≤220 KB
- **Zone di sicurezza:** Card: con il logo del gioco al centro (altezza 170 px su 227) serve il centro calmo e una sfumatura scura sul 40% basso. Hero: come S-06.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. A long table in the tavern dedicated to {TABLE_THEME}. On the table: {TABLE_OBJECTS}. Seated or leaning around it: {FIGURES}. Through the arched window: {WINDOW_VIEW}. One small object on the table carries a single secondary accent colour, {ACCENT} (a small prop only, never the neon). One thin magenta neon tube is the only neon. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. Generic fantasy or sci-fi only: no recognizable game characters, factions, emblems, logos or symbols.
```

**Note**

- Cambiano SOLO: tavolo, oggetti, figure, vista dalla finestra e una nota di colore piccola. Restano uguali: locanda, luce, neon magenta, ottone, nebulosa, grana.
- Esempio · GdR da tavolo — TABLE_THEME: “a table-top role-playing campaign”; TABLE_OBJECTS: “a set of polyhedral dice, blank character sheets, hand-painted miniatures, a game-master screen turned blank, a lantern”; FIGURES: “four adults, mixed ages and body types, laughing quietly, one with a cane”; WINDOW_VIEW: “a small dock with a moored ship under the nebula”; ACCENT: “soft jade green”.
- Esempio · gioco cooperativo di costruzione — TABLE_THEME: “a cosy building and crafting game night”; TABLE_OBJECTS: “wooden blueprints, brass tools, small model houses, steaming tea”; FIGURES: “three adults, one non-human worker in an apron, one teenager-looking elder with white hair”; WINDOW_VIEW: “scaffolding and small gardens built onto the asteroid”; ACCENT: “warm terracotta”.
- Esempio · gioco di strategia — TABLE_THEME: “a long-form strategy game”; TABLE_OBJECTS: “a large brass-framed star chart with blank coordinates, wooden ship tokens, a sand timer”; FIGURES: “two adults leaning over the chart, one pouring tea”; WINDOW_VIEW: “a fleet of small ships passing in front of the nebula”; ACCENT: “deep teal-grey, only on one token”.

---

### S-08 · “Prossimo tavolo” (card segnaposto)  `P1`

- **Dove va:** `content/games/_coming-soon/game.json` → `card.image` (oggi `009-b`, doppione). Si riusa in ogni card “in arrivo”.
- **File:** `public/media/art/prossimo-tavolo-il-posto-apparecchiato.webp`
- **Formato:** 16:10 · master 2400×1500 · consegna: WebP 960 px, ≤80 KB
- **Zone di sicurezza:** Soggetto nel 60% alto (la card sfuma al fondo scuro dal 40%). Niente dettagli ai bordi.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. An empty table in a quiet corner of the tavern, set and waiting: a single chair pulled out invitingly, a clean place setting with a house cup, folded linen napkin and a small lit lantern, a second empty chair behind it. Through the arched window beside it a distant ship docking under the violet nebula. Above the table a geometric magenta neon tube frame, abstract and without letters, the only neon. No people; the feeling is “a table opens when someone looks after it”. Soft and hopeful, not lonely. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**Note**

- Sostituisce la frase vuota con un’immagine che invita invece di sembrare un buco.

---

### S-09a · Istanza — “La forgia sotto la roccia” (Molten Core)  `P2`

- **Dove va:** `content/games/wow-forever/progress.json` → `instances[mc].cover` (card larga ≥180 px di altezza, con gradiente scuro dal basso).
- **File:** `public/media/art/progress-la-forgia-sotto-la-roccia.webp`
- **Formato:** 2:1 · master 2400×1200 · consegna: WebP 1200 px, ≤120 KB
- **Zone di sicurezza:** Titolo istanza in basso a sinistra: angolo basso-sinistro calmo e scuro.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A large framed oil painting hung on the dark timber wall of a tavern, lit from above by a small brass picture lamp, the frame and a slice of the wall visible at the edges. The painting shows a vast underground forge-cavern: rivers of glowing orange lava, black basalt columns, a huge dark furnace gate in the distance, drifting embers. Amber and deep red-orange tones with violet-black shadows. A thin magenta neon tube reflected on the wall, the only neon. Generic fantasy cavern only, no recognizable game creatures or symbols. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**Note**

- Le istanze sono “quadri appesi alla parete della locanda”: la gilda racconta dove è stata, e il brand resta coerente senza imitare l’IP di un gioco.

---

### S-09b · Istanza — “Il nido nero” (Onyxia)  `P2`

- **Dove va:** `content/games/wow-forever/progress.json` → `instances[ony].cover`.
- **File:** `public/media/art/progress-il-nido-nero.webp`
- **Formato:** 2:1 · master 2400×1200 · consegna: WebP 1200 px, ≤120 KB
- **Zone di sicurezza:** Angolo basso-sinistro calmo e scuro.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A large framed oil painting hung on the dark timber wall of a tavern, lit from above by a small brass picture lamp, the frame and a slice of the wall visible at the edges. The painting shows a dim cave nest with a huge black dragon coiled asleep on a bed of ash and old gold, thin shafts of pale violet light from a hole in the cavern roof, glowing embers. Deep violet and ember-orange. A thin magenta neon tube reflected on the wall, the only neon. Generic fantasy dragon only, no recognizable game creature design or symbols. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

---

### S-09c · Istanza — “La porta chiusa” (istanza in arrivo)  `P2`

- **Dove va:** `content/games/wow-forever/progress.json` → `instances[next].cover` (il sito la rende da solo in scala di grigi quando `locked: true`).
- **File:** `public/media/art/progress-la-porta-chiusa.webp`
- **Formato:** 2:1 · master 2400×1200 · consegna: WebP 1200 px, ≤100 KB
- **Zone di sicurezza:** Angolo basso-sinistro calmo.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A large framed oil painting hung on the dark timber wall of a tavern, lit by a small brass picture lamp, partly veiled by a dark indigo cloth. Under the cloth: a heavy brass-bound door set into a rock face, sealed with chains and a big padlock, a single lantern beside it. Violet-black and muted amber, very quiet. A thin magenta neon tube reflected on the wall, the only neon. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

---

## Slot aggiunti dopo la rev2 (S-10 … S-18)

Il primo gruppo non copriva la **galleria WoW** (quattro immagini, oggi arte della locanda con l’alt ancora `[[DESCRIZIONE]]`), né una **card WoW con il centro libero per il logo**. Gli ultimi quattro (S-15…S-18) sono slot che **il sito non ha ancora**: richiedono una modifica al sito, e il marketing li consiglia nell’ordine S-15 (Unisciti), S-16 (Chi siamo), S-17, S-18. Le tre decisioni del README restano valide: benvenuto in home e Locanda **si tengono**, e le immagini WoW non citano nulla di terzi (README §3.4).

---

### S-10 · Card di WoW Forever (alternativa, centro libero per il logo)  `P2`

- **Dove va:** `content/games/wow-forever/game.json` → `card.image`. Oggi `004-b-il-neon-fra-noi.webp`, che compare anche nella hero di gioco.
- **File:** `public/media/art/wow-forever-card-il-tavolo-da-quaranta.webp`
- **Formato:** 16:10 · master 2400×1500 · consegna WebP 960 px, ≤80 KB
- **Zone di sicurezza:** La card ha 227 px di altezza e il logo da 170 px sta **al centro**: centro scuro e calmo, soggetto nel terzo basso e ai lati. Leggibile a ~300 px.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Wide view along a very long timber table laid for forty, about half the places taken by bowls and cups and half still empty, receding toward the tall arched window with a violet nebula; paper lanterns hanging at different heights; only tiny backlit shapes at far seats. Composition: the table in the lower third and along the sides, the whole centre of the frame deep calm shadow and haze, no detail. One thin magenta neon tube above the window is the only neon. Horizontal 16:10, nothing sharp within 8% of the borders. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

**Note**

- **Alternativa**, non obbligatoria: il README prevede di *tenere* `004-b` per la card (§6). Va fatta solo se si vuole un'immagine propria per la card e un'altra per la hero (S-06), dove oggi sono la stessa.

---

### S-11 · Galleria WoW 1 — La sala dopo la serata  `P2`

- **Dove va:** `content/games/wow-forever/gallery.json` (cartella `media/gallery/wow-forever/`).
- **File:** `public/media/gallery/wow-forever/90-la-sala-dopo-la-serata.webp`
- **Formato:** 4:3 · master 2000×1500 · consegna WebP 1200 px, ≤120 KB
- **Zone di sicurezza:** Si apre a pieno formato in finestra: nessun testo sopra, nessun vincolo di centro. Prefisso `90-` perché il build ordina per nome e questi **segnaposto stiano dopo gli screenshot veri**.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Wide interior seen from behind the bar late in the evening after a long gathering: long timber tables with leftover bowls and cups, a few chairs pushed back, paper lanterns burning low, two tiny backlit figures far away sharing a pot of tea, the tall arched window with a violet nebula. Nothing posed. One thin magenta neon tube over the bottle shelf is the only neon. Horizontal 4:3. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

**Note**

- Segnaposto dichiarato (didascalia: «Dalla Locanda, in attesa dei vostri screenshot»). Da eliminare quando arrivano le immagini di gioco.

---

### S-12 · Galleria WoW 2 — Un tavolo fa posto  `P2`

- **Dove va:** Come S-11.
- **File:** `public/media/gallery/wow-forever/91-un-tavolo-fa-posto.webp`
- **Formato:** 4:3 · master 2000×1500 · consegna WebP 1200 px, ≤120 KB
- **Zone di sicurezza:** Come S-11.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Mid shot at the end of a long timber table at night: a gap has been left at the table end and a chair drawn away so that a wheelchair can roll in; hands passing a steaming bowl along the table; the people seen in three-quarter view or from behind, faces natural and unposed, adults of different ages and builds: a silver-haired woman with thick glasses, a man with a brass prosthetic forearm, a heavyset person in a patched scarf. Everything ordinary, nobody posing. Warm lantern pools on the table, dark aisles beyond. One magenta neon glow far in the blur is the only neon. Horizontal 4:3. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

**Note**

- La rappresentazione è nell'azione (fare posto), non nel decoro. Volti naturali e non in posa: si evita il look «foto di gruppo» e il tokenismo.

---

### S-13 · Galleria WoW 3 — Il tavolo delle mappe, dopo  `P2`

- **Dove va:** Come S-11.
- **File:** `public/media/gallery/wow-forever/92-il-tavolo-delle-mappe-dopo.webp`
- **Formato:** 4:3 · master 2000×1500 · consegna WebP 1200 px, ≤120 KB
- **Zone di sicurezza:** Come S-11.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Same house style as the tavern: dark aged timber, brushed brass, paper-and-brass lamps, violet nebula light. Close still life at an alcove table at night: a large blank map of unreadable abstract lines weighted down by mismatched cups, small carved wooden markers, a few dice, a brass compass, a half-burned lantern-candle, a pot of tea. Shallow depth of field, a violet window and one soft magenta neon glow in the blur. No people, no hands. Horizontal 4:3. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

**Note**

- Evoca «il raid» senza citare nulla di terzi: niente simboli, fazioni, boss, interfacce. I marcatori sono pezzi di legno intagliati, non icone di gioco.

---

### S-14 · Galleria WoW 4 — La vetrata a ora di chiusura  `P2`

- **Dove va:** Come S-11.
- **File:** `public/media/gallery/wow-forever/93-la-vetrata-a-ora-di-chiusura.webp`
- **Formato:** 4:3 · master 2000×1500 · consegna WebP 1200 px, ≤120 KB
- **Zone di sicurezza:** Come S-11.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. The great arched window of the hall seen from inside at closing time: a row of mismatched cups and a teapot on the deep sill, lanterns turned low, beyond the glass a vast violet fold of nebula with a drifting asteroid fragment. Quiet, empty, calm. One soft magenta neon glow reflected in the glass is the only neon. No people. Horizontal 4:3. Lighting: low night light, indigo-violet (#2A1D3B to #7E2AA8) dominant, a single small warm amber glow (one lamp) as the only warm note, and ONE soft magenta neon glow (#C45BC4) as the only neon, deep violet-black shadows (#0B0612, never pure black). Fine film grain, painterly brushwork, intimate quiet composition, tender and slightly sad mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

**Note**

- Il quarto taglio: panorama quieto, per variare scena (S-11), gesto (S-12) e dettaglio (S-13).

---

### S-15 · Unisciti — La soglia vista da dentro  *(nuovo slot)*  `P1`

- **Dove va:** **Richiede una modifica al sito**: la pagina `/unisciti` oggi non ha immagine. Va aggiunta una colonna o un fondo nel componente `Join` (`src/kit/Home.jsx`).
- **File:** `public/media/art/unisciti-il-noren-alla-soglia.webp`
- **Formato:** 4:3 · master 2000×1500 · consegna WebP 1200 px, ≤120 KB
- **Zone di sicurezza:** Nessun testo sopra: soggetto al centro, bordi calmi. Funziona a ~300 px.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. The inn's entrance seen from inside at night: an indigo noren curtain lifted slightly by the airlock draft, warm lantern light behind the viewer spilling on the worn stone floor toward the doorway, a row of wooden pegs on the wall with one cloak hanging and one empty peg waiting, the open door showing the violet nebula outside. Nobody present. One thin magenta neon bracket above the door, abstract, is the only neon. Horizontal 4:3. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

**Note**

- Il pegno vuoto è l'invito: «c'è un posto per il tuo mantello» (la promessa della home). È lo slot con più impatto sul funnel dopo OG e hero.

---

### S-16 · Chi siamo — Il tavolo grande  *(nuovo slot)*  `P2`

- **Dove va:** **Richiede una modifica al sito**: `.kit-phero` della pagina Chi siamo (`src/kit/Pages.jsx`) ha oggi solo un gradiente.
- **File:** `public/media/art/chi-siamo-il-tavolo-grande.webp`
- **Formato:** 16:9 · master 2560×1440 · consegna WebP 1920 px, ≤200 KB
- **Zone di sicurezza:** Il titolo della pagina sta in alto a sinistra: quella zona scura e calma; soggetto nella metà destra e nel terzo basso.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Wide interior of the hall at night, seen slightly from above: adults of many ages, builds and species sharing long tables, eating, passing dishes, listening to someone out of frame; seen in three-quarter view, in profile or from behind, faces natural and unposed, nobody posing, nobody the protagonist; one non-human worker in an apron clearing bowls; a person alone with a cup at the edge. Pools of lantern light on each table, dark aisles between. The upper left quarter of the frame is deep calm shadow. One thin magenta neon tube over the bar is the only neon. Horizontal 16:9. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

**Note**

- È l'unica scena corale della serie: ricorda che nessun personaggio è protagonista tranne l'Oste (PROMPTS §2.2).

---

### S-17 · Indice Lore — Il Dorso dall'alto  *(nuovo slot)*  `P2`

- **Dove va:** **Richiede una modifica al sito**: l'indice Lore (`src/kit/Lore.jsx`, `.kit-phero`) ha oggi solo un gradiente. Fondale **molto scurito** dietro il titolo.
- **File:** `public/media/art/lore-il-dorso-dall-alto.webp`
- **Formato:** 16:9 · master 2560×1440 · consegna WebP 1920 px, ≤150 KB
- **Zone di sicurezza:** Metà superiore quasi nera e calma (titolo e filtri); soggetto nel terzo basso; contrasto basso, nessun dettaglio fine.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. High wide view of the Spine, the broad shoulder of a huge drifting asteroid, at night: the inn's long glass-and-timber hall seated on its rim above the edge of a transparent dome; below the dome the vertical city of Concordia in tiers with thousands of tiny amber windows and a thin tram line threading into the rock; a vast violet fold of nebula above. Rain falls only over the city, inside the dome. The upper half of the frame is dark calm sky. One tiny magenta neon sign far down in the city is the only neon. Horizontal 16:9. Lighting: low night light, indigo-violet (#2A1D3B to #7E2AA8) dominant, a single small warm amber glow (one lamp) as the only warm note, and ONE soft magenta neon glow (#C45BC4) as the only neon, deep violet-black shadows (#0B0612, never pure black). Fine film grain, painterly brushwork, intimate quiet composition, tender and slightly sad mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

**Note**

- Fondale, non immagine di lettura: si usa dietro il titolo con l'overlay scuro già presente negli altri `kit-phero`.

---

### S-18 · Eventi — Il tavolo apparecchiato  *(nuovo slot)*  `P2`

- **Dove va:** **Richiede una modifica al sito**: la pagina Eventi (`src/kit/Games.jsx`, `.kit-phero`) ha oggi solo un gradiente.
- **File:** `public/media/art/eventi-il-tavolo-apparecchiato.webp`
- **Formato:** 16:9 · master 2560×1440 · consegna WebP 1920 px, ≤150 KB
- **Zone di sicurezza:** Come S-17: metà superiore calma, soggetto basso.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Same house style as the tavern: dark aged timber, brushed brass, paper-and-brass lamps, violet nebula light. Quiet still life across the whole width: a long timber table in an alcove set for a gathering that has not started, bowls and mismatched cups, a teapot, small brass candle-lanterns unlit, a blank brass plaque on the wall behind; no people. A tall window with a violet nebula far behind, softly out of focus. One soft magenta neon glow in the blur is the only neon. Horizontal 16:9. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon. No weapons.
```

**Note**

- **Mai date, mai persone, mai folla**: finché l'ente non è costituito non si promuovono eventi dal vivo (decisione del 20/09). Qui l'evento è solo online: il tavolo aspetta.

---
