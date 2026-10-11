# Community, Discord e social (C)

Per la vita quotidiana del server e dei social. **Titoli, nomi evento e date non si disegnano mai nell’immagine**: li aggiunge Discord, Raid-Helper o il sito. Salvali in `docs/artwork/export/discord/` (fuori da `public/`, per non pubblicarli con il sito).

**Dimensioni Discord di riferimento:** icona server 512×512 (qui: marchio ufficiale, nessuna generazione) · banner server 960×540 · splash invito 1920×1080 · icona ruolo 64–256 px · sticker 320×320 · emote 128×128 · copertina evento 800×320 (2:1) · Raid-Helper 1280×720.

**Regola di consegna (community manager):** per ogni asset tieni PNG finale + sorgente a livelli, in versione **con e senza testo**. Meglio 10 asset sobri e riutilizzabili che 30 spettacolari che non si aggiornano.

> **Come comporre ogni prompt:** copia il blocco “Prompt” (è già completo di stile, luce e chiusura) e incolla il **negative** qui sotto dove il generatore lo prevede; altrimenti la frase finale “No text, no letters…” del prompt basta. Regole e blocchi: [README](README.md).

**Negative standard**

```text
text, letters, words, numbers, logo, watermark, signature, caption, UI, readable signs, extra neon colors, cyan neon, green neon, blue neon, pure black shadows, flat vector art, 3D render, plastic skin, photograph, oversaturated, harsh flash, fanservice, weapons held in hands, blood, skulls, soldiers, chibi, crowd of backs forming a closed circle, deformed hands, extra fingers, duplicated faces, blurry, low resolution, jpeg artifacts
```

---

### C-01 · Avatar de L’Oste  `P0`

- **Dove va:** Avatar di bot, webhook, profilo social, firma “— L’Oste”. NB: l’icona del server è il marchio caldo ufficiale (`public/media/brand/nebula-mark-warm.png`), non un’illustrazione (ADR-004).
- **File:** `docs/artwork/export/discord/c01-avatar-oste.png`
- **Formato:** 1:1 · master 2048×2048 · consegna: PNG 1024 (usato a 256, 128 e 64 px)
- **Zone di sicurezza:** Tutto ciò che conta nel 70% centrale (ritaglio circolare). Le ottiche ambra devono leggersi a 64 px.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Centered head-and-shoulders portrait of the Innkeeper, a slender humanoid robot with a smooth dark brushed-metal face with NO mouth and NO nose, two round softly glowing amber optics (#FDA877), brushed-steel neck and jointed brass-and-steel hands, wearing a loose off-white linen kimono with a dark indigo obi sash and a small white cloth cap, facing the viewer, calm and welcoming, the two amber optics exactly on the horizontal centreline slightly above the middle of the frame. Plain deep violet backdrop (#170F22) with a soft amber halo behind the head and a few out-of-focus lantern bokeh dots. Bold clear silhouette and high contrast so it still reads at 64 pixels. No neon. Lighting: warm amber key light from the front-left, deep violet-black shadows (#0B0612, never pure black), fine film grain. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**Note**

- Volto fisso (R-01): niente bocca, due ottiche rotonde ambra.

---

### C-02 · Splash di invito e banner del server  `P0`

- **Dove va:** Discord → Impostazioni server: sfondo dell’invito (1920×1080) e banner (960×540). Un solo master, due ritagli.
- **File:** `docs/artwork/export/discord/c02-splash-invito.png`
- **Formato:** 16:9 · master 2560×1440 · consegna: PNG/JPG 1920×1080 (splash) + 960×540 (banner)
- **Zone di sicurezza:** Zona sicura centrale 1280×720; il terzo sinistro resta calmo (lì Discord mette nome e pulsanti); niente dettagli sui bordi.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. The view from the threshold, from the point of view of someone about to enter for the first time: in the foreground left and right, heavy indigo noren curtains parted to frame the scene. Beyond them the warm great hall with long timber tables. In the centre foreground a free table with a single empty chair pulled out invitingly and a steaming cup waiting. Behind the counter the small figure of the Innkeeper, a slender humanoid robot with a smooth dark brushed-metal face with NO mouth and NO nose, two round softly glowing amber optics (#FDA877), brushed-steel neck and jointed brass-and-steel hands, wearing a loose off-white linen kimono with a dark indigo obi sash and a small white cloth cap. Guests in small relaxed groups, some alone with a cup: adults between thirty and sixty, different ethnicities and body types, grey hair, glasses, comfortable work clothes, one in a wheelchair, one non-human worker in an apron; nobody forms a closed circle. A tall window onto the violet nebula. A small geometric magenta neon tube above the arch of the door, abstract, the only neon. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**Note**

- Messaggio visivo: “c’è un posto libero e nessuno ti guarda male”. Evita gruppi di schiena che chiudono il cerchio.

---

> **Le testate C-03 sono superate** da [05-canali-discord.md](05-canali-discord.md), che copre tutti i canali con i nomi veri e un formato leggibile da telefono (16:9 con fascia 5:2 invece di 4:1). Corrispondenze: C-03-benvenuto → `D-BEN-inizia-qui` · C-03-presentati → `D-HUB-presentati` · C-03-regole → `D-BEN-regolamento` · C-03-annunci → `D-HUB-annunci` · C-03-fuoco-acceso/spento → nessun canale (i vocali sono Generale, Adulti, Musica, Assente: `D-SAL-*`). Restano qui come archivio.

### C-03-benvenuto · Header #benvenuto  `P1`

- **Dove va:** Immagine in testa al canale (embed o messaggio fissato). Il testo del regolamento resta testo vero, accessibile.
- **File:** `docs/artwork/export/discord/c03-benvenuto.png`
- **Formato:** 4:1 · master 3200×800 (se il generatore non fa 4:1, genera 21:9 o 3:1 e ritaglia) · consegna: PNG 1200×300
- **Zone di sicurezza:** Sinistra calma, soggetto al centro-destra, niente dettagli nel 5% dei bordi.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A half-open timber doorway hung with heavy indigo noren curtains seen from outside, warm amber light spilling over the threshold onto the planks, a small brass bell on the lintel, a hint of the violet nebula behind. Small geometric magenta neon tube above the door, abstract, no letters, the only neon. Very wide thin horizontal banner composition, 4:1. Keep the left quarter calm and low-detail, the subject centered-right. The same timber wall, brass fittings and warm lantern light run through all banners of this set so they read as four rooms of the same inn. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

---

### C-03-presentati · Header #presentati  `P1`

- **Dove va:** Immagine in testa al canale (embed o messaggio fissato). Il testo del regolamento resta testo vero, accessibile.
- **File:** `docs/artwork/export/discord/c03-presentati.png`
- **Formato:** 4:1 · master 3200×800 (se il generatore non fa 4:1, genera 21:9 o 3:1 e ritaglia) · consegna: PNG 1200×300
- **Zone di sicurezza:** Sinistra calma, soggetto al centro-destra, niente dettagli nel 5% dei bordi.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. On a worn timber counter: a thick guest book lying open with completely blank pages, a pen with a brass nib, a small inkwell, a steaming cup and a small lamp. Blurred warm hall behind with amber bokeh and a window onto the violet nebula; one thin magenta neon tube in the blur. Very wide thin horizontal banner composition, 4:1. Keep the left quarter calm and low-detail, the subject centered-right. The same timber wall, brass fittings and warm lantern light run through all banners of this set so they read as four rooms of the same inn. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

---

### C-03-regole · Header #regole  `P1`

- **Dove va:** Immagine in testa al canale (embed o messaggio fissato). Il testo del regolamento resta testo vero, accessibile.
- **File:** `docs/artwork/export/discord/c03-regole.png`
- **Formato:** 4:1 · master 3200×800 (se il generatore non fa 4:1, genera 21:9 o 3:1 e ritaglia) · consegna: PNG 1200×300
- **Zone di sicurezza:** Sinistra calma, soggetto al centro-destra, niente dettagli nel 5% dei bordi.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A small brass balance scale with two pans and tiny weights next to a closed leather-bound ledger and a lit brass lamp on a timber shelf. Blurred warm wall and a window onto the violet nebula; one thin magenta neon tube reflected in the glass. Fair and gentle, not stern. Very wide thin horizontal banner composition, 4:1. Keep the left quarter calm and low-detail, the subject centered-right. The same timber wall, brass fittings and warm lantern light run through all banners of this set so they read as four rooms of the same inn. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

---

### C-03-annunci · Header #annunci  `P1`

- **Dove va:** Immagine in testa al canale (embed o messaggio fissato). Il testo del regolamento resta testo vero, accessibile.
- **File:** `docs/artwork/export/discord/c03-annunci.png`
- **Formato:** 4:1 · master 3200×800 (se il generatore non fa 4:1, genera 21:9 o 3:1 e ritaglia) · consegna: PNG 1200×300
- **Zone di sicurezza:** Sinistra calma, soggetto al centro-destra, niente dettagli nel 5% dei bordi.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A timber notice board on a brick-and-timber wall with several blank paper slips and cards pinned with brass tacks, a small brass bell hanging beside it, a lit lantern on a bracket. One thin magenta neon tube along the top of the board frame, the only neon. Very wide thin horizontal banner composition, 4:1. Keep the left quarter calm and low-detail, the subject centered-right. The same timber wall, brass fittings and warm lantern light run through all banners of this set so they read as four rooms of the same inn. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

---

### C-03-fuoco-acceso · Header vocale “Il Fuoco acceso”  `P1`

- **Dove va:** Immagine fissa del canale vocale “Il Fuoco acceso” (acceso/spento).
- **File:** `docs/artwork/export/discord/c03-fuoco-acceso.png`
- **Formato:** 4:1 · master 3200×800 (se il generatore non fa 4:1, genera 21:9 o 3:1 e ritaglia) · consegna: PNG 1200×300
- **Zone di sicurezza:** Sinistra calma, soggetto al centro-destra, niente dettagli nel 5% dei bordi.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A cast-iron stove glowing with orange embers in a cozy corner of the tavern, a brass kettle steaming on top, two empty armchairs with soft cushions angled toward it, a small round table with two cups. Violet nebula in a small round window. One thin magenta neon tube on the wall, the only neon. Inviting: someone is about to sit. Very wide thin horizontal banner composition, 4:1. Keep the left quarter calm and low-detail, the subject centered-right. The same timber wall, brass fittings and warm lantern light run through all banners of this set so they read as four rooms of the same inn. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

---

### C-03-fuoco-spento · Header vocale “Il Fuoco spento” (variante)  `P1`

- **Dove va:** Immagine fissa del canale vocale “Il Fuoco acceso” (acceso/spento).
- **File:** `docs/artwork/export/discord/c03-fuoco-spento.png`
- **Formato:** 4:1 · master 3200×800 (se il generatore non fa 4:1, genera 21:9 o 3:1 e ritaglia) · consegna: PNG 1200×300
- **Zone di sicurezza:** Sinistra calma, soggetto al centro-destra, niente dettagli nel 5% dei bordi.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. The same corner: the cast-iron stove with only a faint dull glow in the embers, the brass kettle cold and still, the two armchairs with soft cushions angled toward it, the small table with two upturned cups. Everything dimmer and more violet; one tiny amber lantern still lit on the table. One thin magenta neon tube on the wall, very faint, the only neon. Quiet, resting, not sad. Very wide thin horizontal banner composition, 4:1. Keep the left quarter calm and low-detail, the subject centered-right. The same timber wall, brass fittings and warm lantern light run through all banners of this set so they read as four rooms of the same inn. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**Note**

- Si può ottenere anche editando C-03-fuoco-acceso: stesso inquadramento, brace spenta, tazze capovolte, luce più viola.

---

### C-04-ospite · Emblema — Ospite  `P1`

- **Dove va:** Icona del ruolo Discord “Ospite” (richiede il livello boost che sblocca le icone ruolo) e badge da usare nel sito al posto delle icone Lucide.
- **File:** `docs/artwork/export/discord/c04-emblema-ospite.png`
- **Formato:** 1:1 · master 1024×1024, sfondo piatto da ritagliare · consegna: PNG trasparente 256 e 64 + versione monocromatica per il sito
- **Zone di sicurezza:** Medaglione al 85% del quadro, nitido a 64 px; niente testo.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Round embossed brass medallion seal seen straight on, centered, filling 85% of the frame, with a plain simple rim, a deep violet-black enamel field (#170F22), and in the centre a timber door standing ajar with a slit of warm amber light and a small brass bell on the frame, painted in aged metal and amber glass with a soft amber glow, subtle green-brown patina, clean soft rim light. Icon-like clarity, bold simple shapes, readable at 64 pixels. Isolated on a plain flat dark background (#110A1A) so it can be cut out. Lighting: warm amber glow only, no neon. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**Note**

- Set unico: cornice e materiali identici; più si sale di rango più il bordo è lavorato, ma Social e Inattivo hanno dignità piena (non sono “serie B”).
- Scegli prima l’Ospite e usalo come riferimento di stile per gli altri nove.

---

### C-04-recluta · Emblema — Recluta  `P1`

- **Dove va:** Icona del ruolo Discord “Recluta” (richiede il livello boost che sblocca le icone ruolo) e badge da usare nel sito al posto delle icone Lucide.
- **File:** `docs/artwork/export/discord/c04-emblema-recluta.png`
- **Formato:** 1:1 · master 1024×1024, sfondo piatto da ritagliare · consegna: PNG trasparente 256 e 64 + versione monocromatica per il sito
- **Zone di sicurezza:** Medaglione al 85% del quadro, nitido a 64 px; niente testo.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Round embossed brass medallion seal seen straight on, centered, filling 85% of the frame, with a simple rim with small studs, a deep violet-black enamel field (#170F22), and in the centre a rolled scroll tied with a cord and a quill pen crossed over it, painted in aged metal and amber glass with a soft amber glow, subtle green-brown patina, clean soft rim light. Icon-like clarity, bold simple shapes, readable at 64 pixels. Isolated on a plain flat dark background (#110A1A) so it can be cut out. Lighting: warm amber glow only, no neon. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

---

### C-04-membro · Emblema — Membro  `P1`

- **Dove va:** Icona del ruolo Discord “Membro” (richiede il livello boost che sblocca le icone ruolo) e badge da usare nel sito al posto delle icone Lucide.
- **File:** `docs/artwork/export/discord/c04-emblema-membro.png`
- **Formato:** 1:1 · master 1024×1024, sfondo piatto da ritagliare · consegna: PNG trasparente 256 e 64 + versione monocromatica per il sito
- **Zone di sicurezza:** Medaglione al 85% del quadro, nitido a 64 px; niente testo.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Round embossed brass medallion seal seen straight on, centered, filling 85% of the frame, with a beaded rim, a deep violet-black enamel field (#170F22), and in the centre a brass house key hanging on a hook from a short cord, painted in aged metal and amber glass with a soft amber glow, subtle green-brown patina, clean soft rim light. Icon-like clarity, bold simple shapes, readable at 64 pixels. Isolated on a plain flat dark background (#110A1A) so it can be cut out. Lighting: warm amber glow only, no neon. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

---

### C-04-ufficiale · Emblema — Ufficiale  `P1`

- **Dove va:** Icona del ruolo Discord “Ufficiale” (richiede il livello boost che sblocca le icone ruolo) e badge da usare nel sito al posto delle icone Lucide.
- **File:** `docs/artwork/export/discord/c04-emblema-ufficiale.png`
- **Formato:** 1:1 · master 1024×1024, sfondo piatto da ritagliare · consegna: PNG trasparente 256 e 64 + versione monocromatica per il sito
- **Zone di sicurezza:** Medaglione al 85% del quadro, nitido a 64 px; niente testo.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Round embossed brass medallion seal seen straight on, centered, filling 85% of the frame, with a double rim with fine engraving, a deep violet-black enamel field (#170F22), and in the centre a lit lantern hanging from a bracket shaped like a small flag, a shield-shaped brass plate behind it, painted in aged metal and amber glass with a soft amber glow, subtle green-brown patina, clean soft rim light. Icon-like clarity, bold simple shapes, readable at 64 pixels. Isolated on a plain flat dark background (#110A1A) so it can be cut out. Lighting: warm amber glow only, no neon. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

---

### C-04-gm · Emblema — GM  `P1`

- **Dove va:** Icona del ruolo Discord “GM” (richiede il livello boost che sblocca le icone ruolo) e badge da usare nel sito al posto delle icone Lucide.
- **File:** `docs/artwork/export/discord/c04-emblema-gm.png`
- **Formato:** 1:1 · master 1024×1024, sfondo piatto da ritagliare · consegna: PNG trasparente 256 e 64 + versione monocromatica per il sito
- **Zone di sicurezza:** Medaglione al 85% del quadro, nitido a 64 px; niente testo.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Round embossed brass medallion seal seen straight on, centered, filling 85% of the frame, with a triple ornate rim with a tiny magenta gem glowing in the rim as the only neon, a deep violet-black enamel field (#170F22), and in the centre a tall brass beacon-lamp tower with a bright amber light at its top, like a small lighthouse, painted in aged metal and amber glass with a soft amber glow, subtle green-brown patina, clean soft rim light. Icon-like clarity, bold simple shapes, readable at 64 pixels. Isolated on a plain flat dark background (#110A1A) so it can be cut out. Lighting: warm amber glow only, no neon except the tiny magenta gem in the rim. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**Note**

- Il GM è un simbolo “di casa” (il faro della locanda), non di potere: niente corona. Alternativa: cappello da cuoco dorato, richiamo all’Oste. Da confermare.

---

### C-04-raider · Emblema — Raider  `P1`

- **Dove va:** Emblema del rango in gioco “Raider” (tab Ranghi).
- **File:** `docs/artwork/export/discord/c04-emblema-raider.png`
- **Formato:** 1:1 · master 1024×1024, sfondo piatto da ritagliare · consegna: PNG trasparente 256 e 64 + versione monocromatica per il sito
- **Zone di sicurezza:** Medaglione al 85% del quadro, nitido a 64 px; niente testo.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Round embossed brass medallion seal seen straight on, centered, filling 85% of the frame, with a beaded rim, a deep violet-black enamel field (#170F22), and in the centre a short sword fully sheathed in a scabbard tied with a ribbon, never drawn, painted in aged metal and amber glass with a soft amber glow, subtle green-brown patina, clean soft rim light. Icon-like clarity, bold simple shapes, readable at 64 pixels. Isolated on a plain flat dark background (#110A1A) so it can be cut out. Lighting: warm amber glow only, no neon. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

---

### C-04-trial · Emblema — Trial  `P1`

- **Dove va:** Emblema del rango in gioco “Trial” (tab Ranghi).
- **File:** `docs/artwork/export/discord/c04-emblema-trial.png`
- **Formato:** 1:1 · master 1024×1024, sfondo piatto da ritagliare · consegna: PNG trasparente 256 e 64 + versione monocromatica per il sito
- **Zone di sicurezza:** Medaglione al 85% del quadro, nitido a 64 px; niente testo.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Round embossed brass medallion seal seen straight on, centered, filling 85% of the frame, with a simple rim with small studs, a deep violet-black enamel field (#170F22), and in the centre a brass hourglass with amber sand, painted in aged metal and amber glass with a soft amber glow, subtle green-brown patina, clean soft rim light. Icon-like clarity, bold simple shapes, readable at 64 pixels. Isolated on a plain flat dark background (#110A1A) so it can be cut out. Lighting: warm amber glow only, no neon. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

---

### C-04-social · Emblema — Social  `P1`

- **Dove va:** Emblema del rango in gioco “Social” (tab Ranghi).
- **File:** `docs/artwork/export/discord/c04-emblema-social.png`
- **Formato:** 1:1 · master 1024×1024, sfondo piatto da ritagliare · consegna: PNG trasparente 256 e 64 + versione monocromatica per il sito
- **Zone di sicurezza:** Medaglione al 85% del quadro, nitido a 64 px; niente testo.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Round embossed brass medallion seal seen straight on, centered, filling 85% of the frame, with a beaded rim, a deep violet-black enamel field (#170F22), and in the centre a steaming brass teapot with a small cup, painted in aged metal and amber glass with a soft amber glow, subtle green-brown patina, clean soft rim light. Icon-like clarity, bold simple shapes, readable at 64 pixels. Isolated on a plain flat dark background (#110A1A) so it can be cut out. Lighting: warm amber glow only, no neon. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

---

### C-04-alt · Emblema — Alt  `P1`

- **Dove va:** Emblema del rango in gioco “Alt” (tab Ranghi).
- **File:** `docs/artwork/export/discord/c04-emblema-alt.png`
- **Formato:** 1:1 · master 1024×1024, sfondo piatto da ritagliare · consegna: PNG trasparente 256 e 64 + versione monocromatica per il sito
- **Zone di sicurezza:** Medaglione al 85% del quadro, nitido a 64 px; niente testo.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Round embossed brass medallion seal seen straight on, centered, filling 85% of the frame, with a simple rim with small studs, a deep violet-black enamel field (#170F22), and in the centre two small twin paper lanterns hanging side by side, painted in aged metal and amber glass with a soft amber glow, subtle green-brown patina, clean soft rim light. Icon-like clarity, bold simple shapes, readable at 64 pixels. Isolated on a plain flat dark background (#110A1A) so it can be cut out. Lighting: warm amber glow only, no neon. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

---

### C-04-inattivo · Emblema — Inattivo  `P1`

- **Dove va:** Emblema del rango in gioco “Inattivo” (tab Ranghi).
- **File:** `docs/artwork/export/discord/c04-emblema-inattivo.png`
- **Formato:** 1:1 · master 1024×1024, sfondo piatto da ritagliare · consegna: PNG trasparente 256 e 64 + versione monocromatica per il sito
- **Zone di sicurezza:** Medaglione al 85% del quadro, nitido a 64 px; niente testo.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Round embossed brass medallion seal seen straight on, centered, filling 85% of the frame, with a beaded rim, a deep violet-black enamel field (#170F22), and in the centre an unlit paper lantern still hanging from its hook beside a drawn indigo curtain, one tiny ember inside: the place is kept, painted in aged metal and amber glass with a soft amber glow, subtle green-brown patina, clean soft rim light. Icon-like clarity, bold simple shapes, readable at 64 pixels. Isolated on a plain flat dark background (#110A1A) so it can be cut out. Lighting: warm amber glow only, no neon. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

---

### C-05 · Copertina evento — “La sala comune” (tavola base)  `P1`

- **Dove va:** Immagine degli eventi Discord (2:1, minimo 800×320) e di Raid-Helper (16:9, 1280×720). Una tavola base + varianti, senza illustrare ogni serata da capo.
- **File:** `docs/artwork/export/discord/c05-evento-sala-comune.png`
- **Formato:** 16:9 con zona sicura 2:1 · master 3200×1800 · consegna: JPG 1280×720 (Raid-Helper) + 1280×640 (evento Discord)
- **Zone di sicurezza:** Tutto ciò che conta nella fascia centrale 2:1 (il 90% dell’altezza centrale); fascia bassa calma per la barra colorata di tipo evento. Titolo e data li aggiunge Discord.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Wide view of the tavern’s common hall in the evening, one long central timber table set for gathering, with an empty spot at its centre where an object can later be added by editing; around it empty chairs, lanterns and steaming cups. A large arched window on the right opens onto the nebula. Behind the counter on the left the small figure of the Innkeeper, a slender humanoid robot with a smooth dark brushed-metal face with NO mouth and NO nose, two round softly glowing amber optics (#FDA877), brushed-steel neck and jointed brass-and-steel hands, wearing a loose off-white linen kimono with a dark indigo obi sash and a small white cloth cap. Horizontal composition, the central table in the exact middle, symmetrical enough that the picture survives a 2:1 crop. One thin magenta neon tube above the counter is the only neon. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**Note**

- Per ogni evento NON si genera da capo: si ritocca la tavola base (inpainting/edit) cambiando solo tre cose. Istruzione di modifica: “Keep everything identical. Replace the empty spot on the central table with {OGGETTO}. Change the view in the arched window to {VISTA}. Shift the overall light to {LUCE}.”
- Luci: **ambra** = serata; **viola** = raid (`LIGHT_V`: indaco-viola dominante, goccia ambra); **indaco/lavanda spento** = esplorazione o vocale libero (niente verde acqua o azzurro: resta nella palette calda).
- Viste: il Dorso · il Velo · Concordia · una nave che attracca.
- Oggetti (riusabili): una pietra runica incisa (senza lettere leggibili) · un uovo di drago generico · un cristallo di brace · una clessidra · dadi e una miniatura · una tazza fumante · una mappa arrotolata · una campanella di ottone.
- Serate ricorrenti: ruota 4 scene fisse invece di una nuova ogni volta.

---

### C-06-brindisi · Sticker “Brindisi”  `P1`

- **Dove va:** Sticker del server (PNG 320×320).
- **File:** `docs/artwork/export/discord/c06-sticker-brindisi.png`
- **Formato:** 1:1 · master 1024×1024, sfondo piatto da ritagliare · consegna: PNG 320×320 con bordo bianco sticker, trasparente
- **Zone di sicurezza:** Figura intera nel 85% centrale; silhouette leggibile.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Die-cut sticker illustration of the Innkeeper, a slender humanoid robot with a smooth dark brushed-metal face with NO mouth and NO nose, two round softly glowing amber optics (#FDA877), brushed-steel neck and jointed brass-and-steel hands, wearing a loose off-white linen kimono with a dark indigo obi sash and a small white cloth cap, stylized, slightly larger head, full figure raising a small ceramic cup in a toast with one hand, optics glowing bright. Flat cel shading with a bold clean dark outline, simple colour blocks in amber, off-white, indigo and brushed brass, a thick off-white sticker border around the whole shape. Isolated on a plain flat dark background (#110A1A) for cut-out. No neon, no background scenery. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**Note**

- Gli sticker sono più grafici delle illustrazioni (outline marcato): resta lo stesso volto (R-01).

---

### C-06-inchino · Sticker “Inchino”  `P1`

- **Dove va:** Sticker del server (PNG 320×320).
- **File:** `docs/artwork/export/discord/c06-sticker-inchino.png`
- **Formato:** 1:1 · master 1024×1024, sfondo piatto da ritagliare · consegna: PNG 320×320 con bordo bianco sticker, trasparente
- **Zone di sicurezza:** Figura intera nel 85% centrale; silhouette leggibile.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Die-cut sticker illustration of the Innkeeper, a slender humanoid robot with a smooth dark brushed-metal face with NO mouth and NO nose, two round softly glowing amber optics (#FDA877), brushed-steel neck and jointed brass-and-steel hands, wearing a loose off-white linen kimono with a dark indigo obi sash and a small white cloth cap, stylized, slightly larger head, full figure bowing politely with both hands together, optics lowered into curved glowing arcs. Flat cel shading with a bold clean dark outline, simple colour blocks in amber, off-white, indigo and brushed brass, a thick off-white sticker border around the whole shape. Isolated on a plain flat dark background (#110A1A) for cut-out. No neon, no background scenery. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

---

### C-06-servito · Sticker “Servito”  `P1`

- **Dove va:** Sticker del server (PNG 320×320).
- **File:** `docs/artwork/export/discord/c06-sticker-servito.png`
- **Formato:** 1:1 · master 1024×1024, sfondo piatto da ritagliare · consegna: PNG 320×320 con bordo bianco sticker, trasparente
- **Zone di sicurezza:** Figura intera nel 85% centrale; silhouette leggibile.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Die-cut sticker illustration of the Innkeeper, a slender humanoid robot with a smooth dark brushed-metal face with NO mouth and NO nose, two round softly glowing amber optics (#FDA877), brushed-steel neck and jointed brass-and-steel hands, wearing a loose off-white linen kimono with a dark indigo obi sash and a small white cloth cap, stylized, slightly larger head, full figure placing a steaming bowl on the table with both hands, optics warm. Flat cel shading with a bold clean dark outline, simple colour blocks in amber, off-white, indigo and brushed brass, a thick off-white sticker border around the whole shape. Isolated on a plain flat dark background (#110A1A) for cut-out. No neon, no background scenery. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

---

### C-06-dorme · Sticker “Dorme”  `P1`

- **Dove va:** Sticker del server (PNG 320×320).
- **File:** `docs/artwork/export/discord/c06-sticker-dorme.png`
- **Formato:** 1:1 · master 1024×1024, sfondo piatto da ritagliare · consegna: PNG 320×320 con bordo bianco sticker, trasparente
- **Zone di sicurezza:** Figura intera nel 85% centrale; silhouette leggibile.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Die-cut sticker illustration of the Innkeeper, a slender humanoid robot with a smooth dark brushed-metal face with NO mouth and NO nose, two round softly glowing amber optics (#FDA877), brushed-steel neck and jointed brass-and-steel hands, wearing a loose off-white linen kimono with a dark indigo obi sash and a small white cloth cap, stylized, slightly larger head, full figure asleep sitting upright with chin on chest, optics dimmed to thin dim lines, a small lantern on his lap. Flat cel shading with a bold clean dark outline, simple colour blocks in amber, off-white, indigo and brushed brass, a thick off-white sticker border around the whole shape. Isolated on a plain flat dark background (#110A1A) for cut-out. No neon, no background scenery. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

---

### C-06-lanterna · Sticker “Lanterna”  `P1`

- **Dove va:** Sticker del server (PNG 320×320).
- **File:** `docs/artwork/export/discord/c06-sticker-lanterna.png`
- **Formato:** 1:1 · master 1024×1024, sfondo piatto da ritagliare · consegna: PNG 320×320 con bordo bianco sticker, trasparente
- **Zone di sicurezza:** Figura intera nel 85% centrale; silhouette leggibile.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Die-cut sticker illustration of the Innkeeper, a slender humanoid robot with a smooth dark brushed-metal face with NO mouth and NO nose, two round softly glowing amber optics (#FDA877), brushed-steel neck and jointed brass-and-steel hands, wearing a loose off-white linen kimono with a dark indigo obi sash and a small white cloth cap, stylized, slightly larger head, full figure holding up a lit paper lantern with an outstretched arm as if lighting the way, optics bright. Flat cel shading with a bold clean dark outline, simple colour blocks in amber, off-white, indigo and brushed brass, a thick off-white sticker border around the whole shape. Isolated on a plain flat dark background (#110A1A) for cut-out. No neon, no background scenery. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

---

### C-07-cin-cin · Emote “Cin cin”  `P1`

- **Dove va:** Emote del server (PNG 128×128; deve leggersi a 22 px).
- **File:** `docs/artwork/export/discord/c07-emote-cin-cin.png`
- **Formato:** 1:1 · master 1024×1024, sfondo piatto da ritagliare · consegna: PNG 128×128 trasparente
- **Zone di sicurezza:** Un solo soggetto, 90% del quadro, forme piene e semplici.

**Prompt**

```text
Simple bold emote icon: two small cups clinking with a tiny spark. Flat cel shading, thick clean dark outline, only three or four colour blocks (amber, off-white, indigo, brass), huge simplicity so it reads at 22 pixels, centered, filling 90% of the frame. Isolated on a plain flat dark background (#110A1A) for cut-out. No neon, no text. The style matches the tavern’s lofi sci-fi anime look.
```

**Note**

- Otto emote bastano al lancio; testale a 22 px prima di tenerle.

---

### C-07-grazie · Emote “Grazie”  `P1`

- **Dove va:** Emote del server (PNG 128×128; deve leggersi a 22 px).
- **File:** `docs/artwork/export/discord/c07-emote-grazie.png`
- **Formato:** 1:1 · master 1024×1024, sfondo piatto da ritagliare · consegna: PNG 128×128 trasparente
- **Zone di sicurezza:** Un solo soggetto, 90% del quadro, forme piene e semplici.

**Prompt**

```text
Simple bold emote icon: two brass hands pressed together. Flat cel shading, thick clean dark outline, only three or four colour blocks (amber, off-white, indigo, brass), huge simplicity so it reads at 22 pixels, centered, filling 90% of the frame. Isolated on a plain flat dark background (#110A1A) for cut-out. No neon, no text. The style matches the tavern’s lofi sci-fi anime look.
```

---

### C-07-cuore-lanterna · Emote “Cuore-lanterna”  `P1`

- **Dove va:** Emote del server (PNG 128×128; deve leggersi a 22 px).
- **File:** `docs/artwork/export/discord/c07-emote-cuore-lanterna.png`
- **Formato:** 1:1 · master 1024×1024, sfondo piatto da ritagliare · consegna: PNG 128×128 trasparente
- **Zone di sicurezza:** Un solo soggetto, 90% del quadro, forme piene e semplici.

**Prompt**

```text
Simple bold emote icon: a heart-shaped paper lantern glowing amber. Flat cel shading, thick clean dark outline, only three or four colour blocks (amber, off-white, indigo, brass), huge simplicity so it reads at 22 pixels, centered, filling 90% of the frame. Isolated on a plain flat dark background (#110A1A) for cut-out. No neon, no text. The style matches the tavern’s lofi sci-fi anime look.
```

---

### C-07-tazza · Emote “Tazza”  `P1`

- **Dove va:** Emote del server (PNG 128×128; deve leggersi a 22 px).
- **File:** `docs/artwork/export/discord/c07-emote-tazza.png`
- **Formato:** 1:1 · master 1024×1024, sfondo piatto da ritagliare · consegna: PNG 128×128 trasparente
- **Zone di sicurezza:** Un solo soggetto, 90% del quadro, forme piene e semplici.

**Prompt**

```text
Simple bold emote icon: a steaming cup seen from the side. Flat cel shading, thick clean dark outline, only three or four colour blocks (amber, off-white, indigo, brass), huge simplicity so it reads at 22 pixels, centered, filling 90% of the frame. Isolated on a plain flat dark background (#110A1A) for cut-out. No neon, no text. The style matches the tavern’s lofi sci-fi anime look.
```

---

### C-07-zzz · Emote “Zzz”  `P1`

- **Dove va:** Emote del server (PNG 128×128; deve leggersi a 22 px).
- **File:** `docs/artwork/export/discord/c07-emote-zzz.png`
- **Formato:** 1:1 · master 1024×1024, sfondo piatto da ritagliare · consegna: PNG 128×128 trasparente
- **Zone di sicurezza:** Un solo soggetto, 90% del quadro, forme piene e semplici.

**Prompt**

```text
Simple bold emote icon: the innkeeper’s round face with dimmed optics and a tiny nightcap. Flat cel shading, thick clean dark outline, only three or four colour blocks (amber, off-white, indigo, brass), huge simplicity so it reads at 22 pixels, centered, filling 90% of the frame. Isolated on a plain flat dark background (#110A1A) for cut-out. No neon, no text. The style matches the tavern’s lofi sci-fi anime look.
```

---

### C-07-sbuffa · Emote “Sbuffa”  `P1`

- **Dove va:** Emote del server (PNG 128×128; deve leggersi a 22 px).
- **File:** `docs/artwork/export/discord/c07-emote-sbuffa.png`
- **Formato:** 1:1 · master 1024×1024, sfondo piatto da ritagliare · consegna: PNG 128×128 trasparente
- **Zone di sicurezza:** Un solo soggetto, 90% del quadro, forme piene e semplici.

**Prompt**

```text
Simple bold emote icon: the innkeeper’s round face with optics half-narrowed and a puff of steam. Flat cel shading, thick clean dark outline, only three or four colour blocks (amber, off-white, indigo, brass), huge simplicity so it reads at 22 pixels, centered, filling 90% of the frame. Isolated on a plain flat dark background (#110A1A) for cut-out. No neon, no text. The style matches the tavern’s lofi sci-fi anime look.
```

---

### C-07-ciao · Emote “Ciao”  `P1`

- **Dove va:** Emote del server (PNG 128×128; deve leggersi a 22 px).
- **File:** `docs/artwork/export/discord/c07-emote-ciao.png`
- **Formato:** 1:1 · master 1024×1024, sfondo piatto da ritagliare · consegna: PNG 128×128 trasparente
- **Zone di sicurezza:** Un solo soggetto, 90% del quadro, forme piene e semplici.

**Prompt**

```text
Simple bold emote icon: a single brass hand waving. Flat cel shading, thick clean dark outline, only three or four colour blocks (amber, off-white, indigo, brass), huge simplicity so it reads at 22 pixels, centered, filling 90% of the frame. Isolated on a plain flat dark background (#110A1A) for cut-out. No neon, no text. The style matches the tavern’s lofi sci-fi anime look.
```

---

### C-07-ok · Emote “Va bene”  `P1`

- **Dove va:** Emote del server (PNG 128×128; deve leggersi a 22 px).
- **File:** `docs/artwork/export/discord/c07-emote-ok.png`
- **Formato:** 1:1 · master 1024×1024, sfondo piatto da ritagliare · consegna: PNG 128×128 trasparente
- **Zone di sicurezza:** Un solo soggetto, 90% del quadro, forme piene e semplici.

**Prompt**

```text
Simple bold emote icon: a brass hand making a calm thumbs-up. Flat cel shading, thick clean dark outline, only three or four colour blocks (amber, off-white, indigo, brass), huge simplicity so it reads at 22 pixels, centered, filling 90% of the frame. Isolated on a plain flat dark background (#110A1A) for cut-out. No neon, no text. The style matches the tavern’s lofi sci-fi anime look.
```

---

### C-08 · Immagine di benvenuto per messaggio privato  `P1`

- **Dove va:** Messaggio di benvenuto automatico a un nuovo Nomade (DM o canale).
- **File:** `docs/artwork/export/discord/c08-benvenuto-dm.png`
- **Formato:** 5:2 · master 2500×1000 · consegna: PNG 1000×400
- **Zone di sicurezza:** Soggetto al centro; angoli calmi.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. Close still life on a timber peg-rail by the entrance at night: a traveler’s worn coat hung on a wooden peg, a steaming house cup waiting on a small shelf beside it, a paper lantern glowing. A thin curtain of indigo noren at one edge, a faint violet nebula window behind. No people. A thin magenta neon glow in the blur is the only neon. Warm and unhurried. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**Note**

- Messaggio visivo: “appendi il mantello, siediti quando vuoi”.

---

### C-09 · Banner social (modello unico)  `P2`

- **Dove va:** YouTube (2560×1440, zona sicura 1546×423), Twitch (1200×480), Instagram. IN ATTESA: i link social in `site.json` sono ancora `[[LINK]]`; non produrre banner per canali non aperti.
- **File:** `docs/artwork/export/discord/c09-banner-social.png`
- **Formato:** 16:9 · master 2560×1440 · consegna: Ritagli per piattaforma
- **Zone di sicurezza:** Tutto ciò che conta nella fascia centrale 1546×423; ai lati texture calme.

**Prompt**

```text
Dense hand-painted digital illustration, 1990s lofi sci-fi anime atmosphere with oil-paint texture and cel-shaded linework. A steampunk space tavern built like a Japanese izakaya: dark aged timber beams, brushed brass pipes and valves, paper lanterns, indigo noren curtains, shoji screens, steaming teapots; a violet nebula with drifting asteroids visible beyond the glass. Ultra-wide panoramic view of the tavern’s long glass front on the asteroid shoulder at night, amber windows in a continuous row, steam, hanging lanterns, the violet nebula spreading across the whole width of the sky, drifting asteroids. All important elements inside the central horizontal band; the left and right ends fade into calm dark haze. One small geometric magenta neon tube sign above the central door, abstract and without letters, the only neon. Lighting: warm amber lantern light (#FC8C46) as the key light, deep violet-black shadows (#0B0612, never pure black), exactly ONE magenta neon light source (#C45BC4 glow) as the only neon in the scene, soft nebula-violet fill from the windows. Fine film grain, painterly brushwork, cinematic composition, melancholic yet welcoming mood. No text, no letters, no numbers, no logos, no watermark, no signature; any sign, book or paper is blank or has unreadable abstract strokes. No cyan, green or blue neon.
```

**Note**

- Produrre solo quando i canali esistono davvero.
