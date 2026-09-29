const DS_L = globalThis.NebulaDesignSystem_8e7380;
const LAST_KEY = 'nb-lore-last';

function LoreIndex({ go }) {
  const { ChapterCard, Tabs, Badge } = DS_L;
  const [f, setF] = React.useState('Tutti');
  const last = (() => { try { return JSON.parse(localStorage.getItem(LAST_KEY) || 'null'); } catch (e) { return null; } })();
  const list = NB_DATA.chapters.filter(c => f === 'Tutti' || (f === 'Libri' ? c.kind !== 'Veglia' : c.kind === 'Veglia'));
  return <main className="kit-page">
    <section className="kit-phero" data-screen-label="Lore index"><div className="kit-container kit-phero__in">
      <div className="nb-eyebrow">La storia della Nebula Inn</div>
      <h1 className="kit-h1">La Rotta Bassa</h1>
      <p className="kit-lead" style={{ maxWidth: '58ch' }}>Un prologo, quattro libri e quattro veglie. Si legge in ordine, dal banco dell’Oste fino all’ultima lanterna.</p>
      {last && <div><Badge tone="ok" dot>Riprendi da: {NB_DATA.chapters.find(c => c.id === last.id)?.title} · {Math.round(last.p)}%</Badge></div>}
    </div></section>
    <section className="kit-container" style={{ paddingBottom: 'var(--section-y)' }}>
      <Reveal as="a" className="kit-edict" href="#read/editto" onClick={(e) => { e.preventDefault(); go('read/editto'); }}>
        <div className="kit-edict__art" />
        <div className="kit-edict__txt">
          <div className="nb-eyebrow">Prima di cominciare</div>
          <div className="kit-h2">{NB_CONTENT.editto.title}</div>
          <p className="kit-lead">{NB_CONTENT.editto.teaser}</p>
          <span style={{ display: 'inline-flex', gap: 8, alignItems: 'center', font: '600 15px/1 var(--font-body)', color: 'var(--accent-text)' }}>Leggi l’Editto <DS_L.Icon name="arrow-right" size={16} /></span>
        </div>
      </Reveal>
      <div className="kit-filters"><Tabs tabs={['Tutti', 'Libri', 'Veglie']} value={f} onChange={setF} label="Filtra capitoli" /></div>
      <div className="kit-chapters">
        {list.map((c, i) => <Reveal key={c.id} delay={i * 60}><ChapterCard number={c.n} title={c.title} meta={c.kind + (c.minutes ? ' · ' + c.minutes + ' min' : '')} cover={c.cover}
          state={last && last.id === c.id ? 'reading' : c.id === '4v' ? 'new' : undefined} href={'#read/' + c.id} onClick={(e) => { e.preventDefault(); go('read/' + c.id); }} /></Reveal>)}
      </div>
    </section>
  </main>;
}

function Reader({ id, go }) {
  const { ProgressBar, IconButton, Button, Badge } = DS_L;
  const isEdict = id === 'editto';
  const idx = NB_DATA.chapters.findIndex(c => c.id === id);
  const ch = isEdict ? { id: 'editto', kind: 'Editto', title: NB_CONTENT.editto.title } : (NB_DATA.chapters[idx] || NB_DATA.chapters[0]);
  const prev = isEdict ? null : NB_DATA.chapters[idx - 1], next = isEdict ? NB_DATA.chapters[0] : NB_DATA.chapters[idx + 1];
  const [size, setSize] = React.useState(() => +localStorage.getItem('nb-read-size') || 19);
  const [p, setP] = React.useState(0);
  React.useEffect(() => { localStorage.setItem('nb-read-size', size); }, [size]);
  React.useEffect(() => {
    const f = () => { const h = document.documentElement.scrollHeight - innerHeight; const v = h > 0 ? scrollY / h * 100 : 0; setP(v); localStorage.setItem(LAST_KEY, JSON.stringify({ id: ch.id, p: v })); };
    addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f);
  }, [ch.id]);
  const body = ch.body;
  return <main className="kit-page kit-reader" data-screen-label="Lore reader">
    <div className="kit-reader__bar"><ProgressBar value={p} label="Avanzamento lettura" /></div>
    <div className="kit-container">
      <div className="kit-reader__tools" style={{ maxWidth: 'var(--measure-read)', margin: '0 auto 48px' }}>
        <Button variant="ghost" size="sm" icon="arrow-left" onClick={() => go('lore')}>Indice</Button>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <IconButton icon="a-arrow-down" label="Testo più piccolo" size="sm" variant="secondary" onClick={() => setSize(s => Math.max(16, s - 1))} />
          <span style={{ font: '500 13px/1 var(--font-mono)', color: 'var(--text-3)', width: 36, textAlign: 'center' }}>{size}px</span>
          <IconButton icon="a-arrow-up" label="Testo più grande" size="sm" variant="secondary" onClick={() => setSize(s => Math.min(26, s + 1))} />
        </div>
      </div>
      <header style={{ maxWidth: 'var(--measure-read)', margin: '0 auto 48px', display: 'grid', gap: 14, textAlign: 'center', justifyItems: 'center' }}>
        <div className="nb-eyebrow">{isEdict ? 'La voce del Bardo · Nebula Inn' : ch.kind + ' · La Rotta Bassa'}</div>
        <h1 className="kit-h1" style={{ fontSize: 'var(--fs-display-m)' }}>{ch.title}</h1>
      </header>
      <article className="kit-prose" style={{ fontSize: size }}>
        {isEdict ? <Blocks blocks={NB_CONTENT.editto.blocks} read /> : body ? body.map((t, i) => <Reveal as="p" key={i}>{t}</Reveal>) :
          <div className="kit-ph"><DS_L.Icon name="file-text" /><div>Testo del capitolo da <code>content/lore/{String(idx).padStart(2, '0')}-….md</code>. Non è stato importato in questo kit: <code>[[TESTO CAPITOLO]]</code></div></div>}
      </article>
      <nav className="kit-chapnav" aria-label="Capitoli">
        {prev ? <a onClick={() => { go('read/' + prev.id); scrollTo(0, 0); }}><small>← Precedente</small>{prev.title}</a> : <span />}
        {next && <a onClick={() => { go('read/' + next.id); scrollTo(0, 0); }} style={{ textAlign: 'right' }}><small>Successivo →</small>{next.title}</a>}
      </nav>
    </div>
  </main>;
}

Object.assign(globalThis, { LoreIndex, Reader });
