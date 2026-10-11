const DS_L = globalThis.NebulaDesignSystem_8e7380;
const LAST_KEY = 'nb-lore-last';

// Last chapter read, only if it still exists (chapter ids can change between editions).
function readLast() {
  try { const v = JSON.parse(localStorage.getItem(LAST_KEY) || 'null'); return v && NB_DATA.chapters.some((c) => c.id === v.id) ? v : null; } catch (e) { return null; }
}

// *corsivo* in the text → <em>
function Inline({ text }) {
  return text.split(/(\*[^*\n]+\*)/g).map((s, i) => /^\*[^*\n]+\*$/.test(s) ? <em key={i}>{s.slice(1, -1)}</em> : s);
}

// Book cover; until the image exists, a typographic cover with title and author.
function BookCover({ book }) {
  return book.cover
    ? <img className="kit-book__cover" src={book.cover} alt={'Copertina di ' + book.title} />
    : <div className="kit-book__cover kit-book__cover--type" role="img" aria-label={'Copertina di ' + book.title}>
        <span className="kit-book__cover-title">{book.title}</span>
        {book.author && <span className="kit-book__cover-author">{book.author}</span>}
      </div>;
}

function LoreIndex() {
  const { ChapterCard, Button, Badge } = DS_L;
  const book = NB_DATA.book, list = NB_DATA.chapters;
  const last = readLast();
  const lastCh = last && list.find((c) => c.id === last.id);
  const minutes = list.reduce((s, c) => s + (c.minutes || 0), 0);
  const link = (id) => NB_HREF('read/' + id);
  return <main className="kit-page">
    <section className="kit-phero" data-screen-label="Lore index"><div className="kit-container kit-book">
      <Reveal className="kit-book__art"><BookCover book={book} /></Reveal>
      <div className="kit-book__txt">
        <div className="nb-eyebrow">{['La storia della Nebula Inn', book.kind].filter(Boolean).join(' · ')}</div>
        <h1 className="kit-h1" style={{ fontSize: 'var(--fs-display-m)' }}>{book.title}</h1>
        {book.author && <p className="kit-book__by">di {book.author}</p>}
        <p className="kit-lead" style={{ maxWidth: '58ch' }}>{book.presentation}</p>
        <div className="kit-book__meta">{[list.length + ' capitoli', minutes && 'circa ' + Math.max(5, Math.round(minutes / 5) * 5) + ' minuti di lettura', book.genre].filter(Boolean).join(' · ')}</div>
        {list.length > 0 && <div className="kit-book__ctas">
          {lastCh
            ? <><Button size="lg" icon="book-open" href={link(lastCh.id) + '#riprendi'}>Riprendi la lettura</Button><Button size="lg" variant="ghost" href={link(list[0].id)}>Dall’inizio</Button><Badge tone="ok" dot>{lastCh.kind} {lastCh.n} · {Math.round(last.p)}%</Badge></>
            : <Button size="lg" icon="book-open" href={link(list[0].id)}>Inizia a leggere</Button>}
        </div>}
      </div>
    </div></section>
    <section className="kit-container" style={{ paddingBottom: 'var(--section-y)' }}>
      <h2 className="kit-h2 kit-chapters__head">I capitoli</h2>
      <div className="kit-chapters">
        {list.map((c, i) => <Reveal key={c.id} delay={i * 60}><ChapterCard number={c.n} title={c.title} meta={[c.kind, c.minutes && c.minutes + ' min'].filter(Boolean).join(' · ')} cover={c.cover}
          state={lastCh && lastCh.id === c.id ? 'reading' : undefined} href={link(c.id)} /></Reveal>)}
      </div>
    </section>
  </main>;
}

// Reading progress in its own component: scrolling re-renders the bar, not the whole chapter.
function ReadProgress() {
  const { ProgressBar } = DS_L;
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    let raf = 0;
    const f = () => { if (raf) return; raf = requestAnimationFrame(() => { raf = 0; const h = document.documentElement.scrollHeight - innerHeight; setP(h > 0 ? Math.min(100, scrollY / h * 100) : 0); }); };
    f(); addEventListener('scroll', f, { passive: true }); addEventListener('resize', f);
    return () => { cancelAnimationFrame(raf); removeEventListener('scroll', f); removeEventListener('resize', f); };
  }, []);
  return <div className="kit-reader__bar"><ProgressBar value={p} label="Avanzamento lettura" /></div>;
}

function Reader({ id }) {
  const { IconButton, Button } = DS_L;
  const idx = Math.max(0, NB_DATA.chapters.findIndex(c => c.id === id));
  const ch = NB_DATA.chapters[idx];
  const prev = NB_DATA.chapters[idx - 1], next = NB_DATA.chapters[idx + 1];
  const [size, setSize] = React.useState(() => { try { return +localStorage.getItem('nb-read-size') || 19; } catch (e) { return 19; } });
  React.useEffect(() => { try { localStorage.setItem('nb-read-size', size); } catch (e) {} }, [size]);
  const prose = React.useRef(null);
  // Saves where the reader is (percentage for the index, first paragraph on screen to resume exactly there);
  // "Riprendi la lettura" arrives with #riprendi and goes back to that paragraph.
  React.useEffect(() => {
    const art = prose.current; if (!art) return;
    const headerH = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;
    const at = () => { const top = headerH(), ps = art.children; for (let i = 0; i < ps.length; i++) if (ps[i].getBoundingClientRect().bottom > top) return i; return Math.max(0, ps.length - 1); };
    if (location.hash === '#riprendi') {
      history.replaceState(history.state, '', location.pathname + location.search);
      const last = readLast();
      const resume = () => { const el = last && last.id === ch.id && art.children[last.i]; if (el) el.scrollIntoView({ block: 'start' }); };
      (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => requestAnimationFrame(resume));
    }
    let t;
    const save = () => { const h = document.documentElement.scrollHeight - innerHeight; const p = h > 0 ? Math.min(100, scrollY / h * 100) : 0;
      try { localStorage.setItem(LAST_KEY, JSON.stringify({ id: ch.id, p, i: at() })); } catch (e) {} };
    const f = () => { clearTimeout(t); t = setTimeout(save, 250); };
    addEventListener('scroll', f, { passive: true });
    return () => { clearTimeout(t); removeEventListener('scroll', f); };
  }, [ch.id]);
  const body = ch.body;
  // built once per chapter: changing the text size does not rebuild a hundred paragraphs
  const text = React.useMemo(() => body && body.map((t, i) => t === '***' ? <hr key={i} className="kit-scene" /> : <p key={i}><Inline text={t} /></p>), [body]);
  return <main className="kit-page kit-reader" data-screen-label="Lore reader">
    <ReadProgress />
    <div className="kit-container">
      <div className="kit-reader__tools" style={{ maxWidth: 'var(--measure-read)', margin: '0 auto 48px' }}>
        <Button variant="ghost" size="sm" icon="arrow-left" href={NB_HREF('lore')}>Indice</Button>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <IconButton icon="a-arrow-down" label="Testo più piccolo" size="sm" variant="secondary" disabled={size <= 16} onClick={() => setSize(s => Math.max(16, s - 1))} />
          <span style={{ font: '500 13px/1 var(--font-mono)', color: 'var(--text-3)', width: 36, textAlign: 'center' }} aria-live="polite">{size}px</span>
          <IconButton icon="a-arrow-up" label="Testo più grande" size="sm" variant="secondary" disabled={size >= 26} onClick={() => setSize(s => Math.min(26, s + 1))} />
        </div>
      </div>
      <header style={{ maxWidth: 'var(--measure-read)', margin: '0 auto 48px', display: 'grid', gap: 14, textAlign: 'center', justifyItems: 'center' }}>
        <div className="nb-eyebrow">{ch.kind + ' ' + ch.n + ' · ' + NB_DATA.book.title}</div>
        <h1 className="kit-h1" style={{ fontSize: 'var(--fs-display-m)' }}>{ch.title}</h1>
      </header>
      <article ref={prose} className="kit-prose" style={{ fontSize: size }}>
        {text || <div className="kit-ph"><DS_L.Icon name="file-text" /><div>Testo del capitolo non ancora importato: esegui <code>npm run lore:import</code>.</div></div>}
      </article>
      {ch.plates && ch.plates.length > 0 && <div className="kit-plates">
        {ch.plates.map((pl) => <figure key={pl.src} className="kit-plate"><img src={pl.src} alt={pl.alt} loading="lazy" /></figure>)}
      </div>}
      {!next && <p className="kit-fine">Fine</p>}
      <nav className="kit-chapnav" aria-label="Capitoli">
        {prev ? <a href={NB_HREF('read/' + prev.id)} rel="prev"><small>← Precedente</small>{prev.title}</a> : <span />}
        {next ? <a href={NB_HREF('read/' + next.id)} rel="next" style={{ textAlign: 'right' }}><small>Successivo →</small>{next.title}</a>
          : <a href={NB_HREF('lore')} style={{ textAlign: 'right' }}><small>Indice →</small>Tutti i capitoli</a>}
      </nav>
    </div>
  </main>;
}

Object.assign(globalThis, { LoreIndex, Reader });
