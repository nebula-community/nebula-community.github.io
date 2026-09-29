const DS_G = globalThis.NebulaDesignSystem_8e7380;

function GamesIndex({ go }) {
  const { GameCard, Tag } = DS_G;
  const [f, setF] = React.useState('Tutti');
  const genres = ['Tutti', ...new Set(NB_DATA.games.map(g => g.genre))];
  const list = NB_DATA.games.filter(g => f === 'Tutti' || g.genre === f);
  return <main className="kit-page">
    <section className="kit-phero" data-screen-label="Games index"><div className="kit-container kit-phero__in">
      <div className="nb-eyebrow">I tavoli della locanda</div>
      <h1 className="kit-h1">Giochi</h1>
      <p className="kit-lead" style={{ maxWidth: '56ch' }}>Ogni sezione porta il nome Nebula. Cambia il gioco, non la casa.</p>
    </div></section>
    <section className="kit-container" style={{ paddingBottom: 'var(--section-y)' }}>
      <div className="kit-filters">{genres.map(g => <Tag key={g} selected={f === g} onClick={() => setF(g)}>{g}</Tag>)}</div>
      <div className="kit-grid">{list.map((g, i) => <Reveal key={g.slug} delay={i * 100}><GameCard {...g} href={'#game/' + g.slug} onClick={(e) => { e.preventDefault(); !g.placeholder && go('game/' + g.slug); }} /></Reveal>)}</div>
    </section>
  </main>;
}

function GamePage({ go }) {
  const { Tabs, Badge, Button, Card, Icon, EventItem, Dialog } = DS_G;
  const g = NB_DATA.games[0], w = NB_DATA.wow;
  const TABS = NB_WOW.tabs || [];
  const [tab, setTab] = React.useState(TABS[0] ? TABS[0].id : 'info');
  const C = NB_WOW.copy, H = NB_WOW.hero || {};
  const [img, setImg] = React.useState(null);
  const gallery = w.gallery;
  return <main className="kit-page">
    <section className="kit-ghero" style={{ backgroundImage: `url(${g.heroImage || g.image})` }} data-screen-label="Game page">
      <div className="kit-container kit-ghero__in">
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}><Badge tone="ok" dot>Sezione attiva</Badge>{NB_WOW.recruitment.open && <Badge tone="accent">Reclutamento aperto{NB_WOW.recruitment.highlight ? ' · ' + NB_WOW.recruitment.highlight.charAt(0).toLowerCase() + NB_WOW.recruitment.highlight.slice(1) : ''}</Badge>}{(H.badges || []).map(b => <Badge key={b}>{b}</Badge>)}</div>
        <h1 className="kit-h1" style={{ fontSize: 'var(--fs-display-m)', maxWidth: '18ch' }}>{g.title}</h1>
        <p className="kit-lead">{g.description} {g.lead}</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}><Button size="lg" icon="scroll-text" onClick={() => setTab('join')}>{H.ctaApply}</Button><Button size="lg" variant="secondary" icon="message-circle" href={NB_DATA.site.discord} target="_blank" rel="noopener">{H.ctaDiscord}</Button></div>
      </div>
    </section>
    <div className="kit-tabsbar"><div className="kit-container"><Tabs variant="underline" tabs={TABS.map(t => ({ value: t.id, label: t.label }))} value={tab} onChange={setTab} label="Sezioni del gioco" /></div></div>
    <section className="kit-container" style={{ padding: '48px var(--gutter) var(--section-y)' }}>
      <div key={tab} className="kit-page">
        {tab === 'info' && <WowInfo />}
        {tab === 'recruitment' && <WowRecruitment />}
        {tab === 'loot' && <WowLoot />}
        {tab === 'roster' && <WowRoster />}
        {tab === 'progress' && <WowProgress />}
        {tab === 'join' && <div style={{ display: 'grid', gap: 28 }}>
          <h2 className="kit-h2">{C.join.title}</h2>
          <div className="kit-steps">{C.join.steps.map(({ title: t, text: d }, i) => <Card key={t} style={{ display: 'grid', gap: 10 }}><span className="kit-step__n">0{i + 1}</span><div style={{ font: 'var(--type-h4)' }}>{t}</div><p style={{ color: 'var(--text-2)' }}>{d}</p></Card>)}</div>
          <WowApplication />
          <p style={{ color: 'var(--text-2)' }}>{C.join.next}</p>
        </div>}
        {tab === 'pact' && <div className="kit-two">
          <div style={{ display: 'grid', gap: 20 }}><h2 className="kit-h2">{C.pact.title}</h2>
            <ul className="kit-list">{w.patto.map(([ic, t, d]) => <li key={t}><Icon name={ic} /><span><b>{t}</b> — {d}</span></li>)}</ul></div>
          <Card style={{ display: 'grid', gap: 14 }}><div style={{ font: 'var(--type-h3)' }}>{C.pact.notForYouTitle}</div>
            <ul className="kit-list">{w.nonFa.map(t => <li key={t}><Icon name="minus" /><span>{t}</span></li>)}</ul>
            <p style={{ color: 'var(--text-3)', font: 'var(--type-small)' }}>{C.pact.notForYouNote}</p></Card>
        </div>}
        {tab === 'ranks' && <WowRanks />}
        {tab === 'calendar' && <WowCalendar />}
        {tab === 'gallery' && <div style={{ display: 'grid', gap: 24 }}><div className="kit-head" style={{ marginBottom: 0 }}><h2 className="kit-h2">{C.gallery.title}</h2><p className="kit-lead">{C.gallery.lead}</p></div><div className="kit-gallery">{gallery.map(s => <div key={s.src} role="button" aria-label={s.alt} style={{ backgroundImage: `url(${s.src})` }} onClick={() => setImg(s.src)} />)}</div></div>}
        {tab === 'faq' && <WowFaq />}
      </div>
    </section>
    <Dialog open={!!img} title="Galleria" onClose={() => setImg(null)}>{img && <img src={img} alt="" style={{ borderRadius: 12 }} />}</Dialog>
  </main>;
}

function EventsPage() {
  const { EventItem, Skeleton, Toast, Tabs, Badge } = DS_G;
  const [loading, setLoading] = React.useState(true);
  const [view, setView] = React.useState('Lista');
  React.useEffect(() => { const t = setTimeout(() => setLoading(false), 1400); return () => clearTimeout(t); }, []);
  return <main className="kit-page">
    <section className="kit-phero" data-screen-label="Events"><div className="kit-container kit-phero__in">
      <div className="nb-eyebrow">Missioni</div><h1 className="kit-h1">Eventi</h1>
      <p className="kit-lead" style={{ maxWidth: '56ch' }}>Il calendario si aggiorna da solo: vedi subito l’ultima versione salvata, poi quella fresca.</p>
    </div></section>
    <section className="kit-container" style={{ paddingBottom: 'var(--section-y)', maxWidth: 940 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
        <Tabs tabs={['Lista', 'Mese']} value={view} onChange={setView} />
        {loading ? <Badge tone="warn" dot>Aggiorno…</Badge> : <Badge tone="ok" dot>Aggiornato</Badge>}
      </div>
      <div style={{ display: 'grid', gap: 12 }}>
        {loading ? [0, 1, 2].map(i => <Skeleton key={i} height={82} radius={12} />) : NB_DATA.events.map((e, i) => <Reveal key={i} delay={i * 70}><EventItem {...e} action={<Badge tone="placeholder">[[DATA]]</Badge>} /></Reveal>)}
      </div>
    </section>
  </main>;
}

Object.assign(globalThis, { GamesIndex, GamePage, EventsPage });
