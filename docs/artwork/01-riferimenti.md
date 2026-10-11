# Schede di riferimento (R)

Si producono **prima di tutto il resto** e **non si pubblicano**. Servono a bloccare il volto de L’Oste, ciò che il testo dice davvero di Ines, Egarim, Runa, Elma e Calco (i cinque che compaiono con il volto nelle copertine), l’architettura della locanda e della città (secondo i testi rev2, R01, R03, ADR-022 e ADR-023): le immagini successive le usano come riferimento. Salvale in `docs/artwork/ref/`.

> **Come comporre ogni prompt:** copia il blocco “Prompt” (è già completo di stile, luce e chiusura) e incolla il **negative** qui sotto dove il generatore lo prevede; altrimenti la frase finale “No text, no letters…” del prompt basta. Regole e blocchi: [README](README.md).

**Negative standard**

```text
text, letters, words, numbers, logo, watermark, signature, caption, UI, readable signs, extra neon colors, cyan neon, green neon, blue neon, pure black shadows, flat vector art, 3D render, plastic skin, photograph, oversaturated, harsh flash, fanservice, weapons held in hands, blood, skulls, soldiers, chibi, crowd of backs forming a closed circle, deformed hands, extra fingers, duplicated faces, blurry, low resolution, jpeg artifacts
```

---

### R-01 · Scheda personaggio — L’Oste  `P0`

- **Dove va:** Riferimento interno: ancora per tutte le immagini in cui compare L’Oste (via image reference / character reference del generatore).
- **File:** `docs/artwork/ref/R-01-oste-sheet.png`
- **Formato:** 16:9 · master 3200×1800 · consegna: non si pubblica
- **Zone di sicurezza:** Nessuna: la tavola deve restare pulita, senza etichette.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Character model sheet of the Innkeeper, a humanoid robot host with a smooth dark brushed-metal face with NO mouth and NO nose, two round softly glowing amber optics (#FDA877), brushed-steel neck and jointed brass-and-steel hands, wearing a loose off-white ivory linen robe in kimono style with a dark obi sash and a small soft cloth cap. Calm, very still, composed posture: the frame under the robe reads only through a slightly squared line of the shoulders, never as armour, with no plates, no panels and no weapon. On the left hip, where the robe falls open, a tiny empty socket in lighter metal, small and never the focal point. Four full-body poses in a row on a plain background: front view, three-quarter view, side profile, back view, identical proportions and costume details across poses, arms relaxed, hands visible. Below them a row of three close-ups of the head showing the optics in three states: calm round glow, narrowed contented glow, dim glow (asleep). A few small props beside the figures: a brass teapot and a plain ceramic house cup. Lighting: even, soft, neutral studio light on a flat dark violet-grey background (#1E142C), no cast shadows beyond a faint contact shadow, no neon, no scenery. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**Note**

- Scegli UNA versione e rinominala `R-01-oste-sheet.png`: da quel momento non si cambia più il volto (nessuna bocca, due ottiche ambra).
- **Volto di metallo scuro** («Metallo scuro senza bocca, ottiche ambra, veste avorio, obi scuro»: R03 §Oste). La prima versione di questa scheda lo faceva grigio chiaro.
- **Telaio e attacco all’anca** (ADR-023): il telaio di scorta si legge solo dalla linea delle spalle e dall’immobilità, **mai come armatura** (nessuna placca, nessuna silhouette da combattente). L’attacco all’anca sinistra è piccolo, vuoto, di metallo più chiaro (prologo r.33), mai punto focale. **Nelle scene ambientate nel Libro IV non si vede.** Nessuna arma compare, si allude o si cerca, in nessuna immagine.
- Il cappello è piccolo e di stoffa; il cappellone da cuoco di `concept-nebula-inn.webp` non è canone.

---

### R-02 · Scheda personaggio — Ines (v0.2, dal testo rev2)  `P0`

- **Dove va:** Riferimento interno: Ines compare nel prologo, nella Veglia V e nella Veglia VIII. Nelle copertine **non compare** (nessun volto): la scheda serve alle immagini di sito e di community in cui è di spalle o piccola.
- **File:** `docs/artwork/ref/R-02-ines-sheet.png`
- **Formato:** 16:9 · master 3200×1800 · consegna: non si pubblica
- **Zone di sicurezza:** Nessuna.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Character model sheet of Ines, an adult woman, a crane operator at the end of a long shift, tired but steady; hair tied back, plain practical dark work clothes with no coat, a worn travel bag with a buckle across her body with a rigid cup case tucked inside, a crane operator's work helmet carried under one arm, fingers still slightly curled as if around a lever. Four full-body poses in a row on a plain background: back view, three-quarter back view, side profile, front view, identical costume and proportions across poses. Next to the poses: a close-up of the bag with its buckle and the rigid cup case, a close-up of the work helmet with a curved strip of lamp reflection along its visor, and a close-up of one hand with curled fingers as if still gripping a crane lever. Lighting: even, soft, neutral studio light on a flat dark violet-grey background (#1E142C), no cast shadows beyond a faint contact shadow, no neon, no scenery. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**Note**

- **Quello che il testo fissa** (prologo r.17, 31–33; Veglia V r.17, 59; Veglia VIII r.64–66): mano con le dita ancora curve intorno a una leva, borsa con la fibbia e la custodia rigida della sua tazza, casco da gruista. Il resto **non è canone**: R03 dice «non si fissano età numeriche» e che la descrizione fisica entra solo quando modifica un gesto.
- La v0.1 inventava età, carnagione, capelli, scialle prugna e un **cappotto rattoppato, che nel testo è di Runa** (Veglia III): tolti. Ciò che manca (volto, capelli, carnagione) si decide con chi scrive la lettura esterna R25, non lo decide il generatore.
- Se il generatore sceglie un volto, quello è un volto di lavoro: non si usa nelle copertine.

---

### R-03 · Riferimento architettura — La sala  `P0`

- **Dove va:** Riferimento interno: planimetria visiva della locanda (banco, tavoli, vetrata, ingresso con noren).
- **File:** `docs/artwork/ref/R-03-sala-master.png`
- **Formato:** 16:9 · master 3200×1800 · consegna: non si pubblica
- **Zone di sicurezza:** Nessuna.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Wide establishing view of the tavern’s great hall at night, empty of guests. Left: a long polished timber counter with bottle shelves, brass kettles and copper pipes, the Innkeeper, a slender humanoid robot with a smooth dark brushed-metal face with NO mouth and NO nose, two round softly glowing amber optics (#FDA877), brushed-steel neck and jointed brass-and-steel hands, wearing a loose off-white linen kimono with a dark indigo obi sash and a small white cloth cap standing small behind it. Centre: five long dark timber tables with simple wooden chairs, a few padded chairs near the entrance vestibule. Right: a tall curved arched window wall of glass and brass ribs opening onto a huge violet nebula and drifting asteroids. Entrance at far back with heavy indigo noren curtains and a brass door stop. Many paper lanterns hanging at different heights from exposed beams, shoji screens in the back wall. The one magenta neon is a geometric tube-sign frame above the counter, abstract and without letters. Straight symmetrical perspective, one-point, so the layout is easy to reuse. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**Note**

- Se un’immagine successiva “sbaglia” la sala, incolla questa tavola come riferimento.

---

### R-04 · Riferimento esterno — Il Dorso e Concordia  `P0`

- **Dove va:** Riferimento interno: come si vede la locanda da fuori e la città a cupola sotto di lei.
- **File:** `docs/artwork/ref/R-04-dorso-concordia.png`
- **Formato:** 16:9 · master 3200×1800 · consegna: non si pubblica
- **Zone di sicurezza:** Nessuna.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Exterior establishing view in deep space. A huge cratered dark-brown asteroid whose broad ridge is called the Spine: on its shoulder sits a long timber-and-brass tavern hall with arched windows glowing amber, hanging lanterns and steam from chimneys, a glass-roofed pressurised gangway and a small dock. Below it, built into the rock and covered by one large transparent glass dome, the vertical city of Concordia, home to about thirty thousand people: tiered towers with timber balconies on burnished brass frames, suspended walkways, steam, trams of lit yellow windows disappearing into tunnels in the rock, docks at several heights with a few small cargo ships, and neon signs only in narrow contained bands. The tavern hall sits on the rock above the rim of the dome, in its own pressurised volume. Thin artificial rain falls only inside the dome. Above everything a vast violet fold of nebula covers the sky, with drifting asteroids and a pale distant planet. Exactly one magenta neon: a geometric tube-sign frame above the tavern door, abstract, no letters. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**Note**

- Parente stretto di `asteroide1.webp` (che resta valido): qui la locanda è visibile e c’è il neon.
- **Canone duro, ADR-022:** una sola cupola trasparente, circa trentamila abitanti, torri a balconi di legno su strutture d’ottone brunito (non a pagoda), insegne al neon in fasce contenute, la casa **sopra il bordo** della cupola con un volume proprio. La pioggia è artificiale e sta solo dentro la cupola: mai nel vuoto, mai sul vetro esposto al Velo. Il raccordo fra casa e cupola resta fuori quadro (ADR-022: non è fissato).

---

### R-05 · Tavola degli oggetti ricorrenti  `P1`

- **Dove va:** Riferimento interno: i “pezzi canonici” che devono sembrare identici in ogni immagine.
- **File:** `docs/artwork/ref/R-05-props.png`
- **Formato:** 16:9 · master 3200×1800 · consegna: non si pubblica
- **Zone di sicurezza:** Nessuna.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Props sheet laid out in a neat grid on a flat dark background, each object shown alone, three-quarter view: a paper-and-brass hanging lantern, an indigo noren curtain, a sliding shoji door panel, a brass kettle, a plain ceramic house cup, a plain wooden chair, a padded armchair with a soft cushion, a round timber table, a brass door stop, a brass balance scale, a dark instrument case with two pale cloth patches and a repaired strap, a sand-coloured ceramic cup with two dents beside a rigid cup case, a crane operator's work helmet, a dark wooden chair whose rear leg is re-bound with an almost white cord, a worn travel bag with a buckle, a geometric neon tube-sign frame glowing magenta with no letters. Lighting: even, soft, neutral studio light on a flat dark violet-grey background (#1E142C), no cast shadows beyond a faint contact shadow, no neon, no scenery. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**Note**

- Gli oggetti che tornano **nei testi** sono: la custodia scura con due toppe chiare (Veglie II, VI, VIII), la tazza color sabbia con due ammaccature e la sua custodia rigida (prologo, Veglie V e VIII), il casco da gruista (prologo, Veglia V), la sedia scura con la gamba rilegata a cordino (Veglia IV). Se riappaiono devono restare uguali.
- Lanterna, noren, shoji e ferma-porta vengono dal concept visivo e non dai testi: sono atmosfera della casa, non oggetti ricorrenti da citare. Il **colore del cuscino non è fissato** dal testo (la prima versione lo faceva «prugna»); la **tazza «scheggiata» e il noren «a mezzaluna» non esistono nei testi**.
- Tolti dalla tavola: il pertico del lampionaio (nessun lampionaio nei testi) e la carrucola dello stendibiancheria (la Veglia III è in una lavanderia con tamburo).

---

### R-06 · Scheda personaggio — Egarim (nano)  `P1`

- **Dove va:** Riferimento interno: Egarim compare in L-15 (Libro VIII) e nelle immagini di sito e community in cui servirà.
- **File:** `docs/artwork/ref/R-06-egarim-sheet.png`
- **Formato:** 16:9 · master 3200×1800 · consegna: non si pubblica
- **Zone di sicurezza:** Nessuna.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Character model sheet of Egarim, an adult man who is a dwarf. Short in stature with a lean, wiry build and compact proportions typical of dwarfism, light eyes, no beard, plain practical dark work clothes, worn work gloves; a faint second eyelid fold that can lower against glare, subtle and not a second pair of eyes. Next to him, for scale, a plain wooden chair and a standard doorway, so that his height reads clearly against them. No fantasy-dwarf costume, no axe, no helmet. Four full-body poses in a row on a plain background: front view, three-quarter view, side profile, back view, identical costume and proportions across poses. Next to the poses: a close-up of one worn glove with the thumb worn smooth and pale; a close-up of the eyes with the second eyelid half lowered against glare; a height comparison against the chair and the doorway. Lighting: even, soft, neutral studio light on a flat dark violet-grey background (#1E142C), no cast shadows beyond a faint contact shadow, no neon, no scenery. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**Note**

- **Egarim è nano** (decisione del Presidente, 02/10/2026): registrata in `personaggi.md` §2.2, bibbia §4.4, R03 e `regia-lore.md`. Compatibile con quello che il canone dice: «asciutto, occhi chiari», doppia palpebra contro il riverbero (`personaggi.md` r.91–92; Libro III r.171), guanti consumati sul pollice (r.93; Libro VIII r.29). **Corporatura magra, niente barba**: il nanismo è proporzione, non cliché fantasy.
- **Libero:** età, capelli, abiti civili, volto. Origine del nanismo: non si inventa. La tuta del Consorzio (personaggi.md r.93) è marcata ○ (facoltativa).
- **Distinguerlo da Finland**, che nel canone è «piccolo» ma di taglia umana ridotta: Egarim è più basso. Se le due schede non si distinguono a colpo d’occhio, si rifà una delle due.
- **Persona viva**: la regola del ritratto (bibbia §2.5) dà a chi presta il nome un diritto di veto, anche a Libro chiuso. Il Presidente ha detto che il volto si può fare; **il volto resta in ombra in L-15 finché Egarim non conferma**.

---

### R-07 · Scheda personaggio — Runa  `P1`

- **Dove va:** Riferimento interno: Runa compare in L-06 (Veglia III), riflessa nel vetro, mai frontale.
- **File:** `docs/artwork/ref/R-07-runa-sheet.png`
- **Formato:** 16:9 · master 3200×1800 · consegna: non si pubblica
- **Zone di sicurezza:** Nessuna.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Character model sheet of Runa, an adult woman courier. A long coat buttoned crookedly, one sleeve darker from elbow to wrist and heavy with water, one arm bandaged, a strap bag across her body, a small rectangle of faded cloth about three fingers wide with two eyelets and a dark stripe, sewn crookedly onto the edge of the coat with pale thread. Hair, age and face unspecified: practical, plain. Four full-body poses in a row on a plain background: front view, three-quarter view, side profile, back view, identical costume and proportions across poses. Next to the poses: a close-up of the crooked cloth flag on the coat edge; a close-up of the bandaged forearm and the strap bag; a close-up of the face laughing in profile. Lighting: even, soft, neutral studio light on a flat dark violet-grey background (#1E142C), no cast shadows beyond a faint contact shadow, no neon, no scenery. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**Note**

- **Quello che il testo fissa:** cappotto abbottonato male e manica scura dal gomito al polso (prologo r.41); borsa a tracolla (r.129); braccio fasciato e «mano sana» (Veglia III r.25, 109; il lato non è indicato); rettangolo di stoffa e riga scura (r.43, 97–111).
- **Libero:** età, capelli, carnagione, volto. Non si inventano.

---

### R-08 · Scheda personaggio — Elma  `P1`

- **Dove va:** Riferimento interno: Elma compare in L-12 (Veglia VI). La custodia è la stessa di Veglie II, VI e VIII.
- **File:** `docs/artwork/ref/R-08-elma-sheet.png`
- **Formato:** 16:9 · master 3200×1800 · consegna: non si pubblica
- **Zone di sicurezza:** Nessuna.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Character model sheet of Elma, an elderly woman. Hair gathered up, knotted work-worn hands, plain comfortable dark clothes, a dark instrument case with two pale cloth patches and a repaired strap beside her. Face and further details unspecified: kind, tired, attentive. Four full-body poses in a row on a plain background: front view, three-quarter view, side profile, back view, identical costume and proportions across poses. Next to the poses: a close-up of the knotted hands around a cup of tea; a close-up of the instrument case with the two pale patches and the repaired strap; a close-up of the face in three-quarter view with a small laugh and wet eyes. Lighting: even, soft, neutral studio light on a flat dark violet-grey background (#1E142C), no cast shadows beyond a faint contact shadow, no neon, no scenery. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**Note**

- **Quello che il testo fissa:** «anziana» (R03 r.88, 354); capelli raccolti (Veglia II r.21); mani nodose (r.75); custodia scura con due toppe chiare e cinghia riparata (r.37, 71, 93); occhi bagnati e un piccolo riso (Veglia VI r.111).
- **Libero:** tutto il resto.

---

### R-09 · Scheda personaggio — Calco  `P1`

- **Dove va:** Riferimento interno: Calco compare in L-13 (Libro VII).
- **File:** `docs/artwork/ref/R-09-calco-sheet.png`
- **Formato:** 16:9 · master 3200×1800 · consegna: non si pubblica
- **Zone di sicurezza:** Nessuna.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Character model sheet of Calco, a very tall, extremely thin, slow-moving man of a low-radiation lineage. A dark band across his eyes against direct light (he is not blind), layered dark clothes for the rock galleries, long careful hands with sensitive fingertips. Face and age unspecified; calm, patient. Four full-body poses in a row on a plain background: front view, three-quarter view, side profile, back view, identical costume and proportions across poses. Next to the poses: a close-up of the dark eye band and the lower face; a close-up of one long hand resting on a stone slab; a height comparison against a standard doorway. Lighting: even, soft, neutral studio light on a flat dark violet-grey background (#1E142C), no cast shadows beyond a faint contact shadow, no neon, no scenery. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**Note**

- **Quello che il testo fissa:** alto, sottilissimo, lentissimo, vita lunga; fascia scura sugli occhi (`personaggi.md` r.205–207; antefatto r.38; Libro VII); non è cieco, il tocco e la luce radente sono tecniche (R03 r.224); abiti da galleria a strati scuri.
- **Libero:** volto, età («nessuno gliel’ha mai chiesta e lui non la dice»), carnagione.
