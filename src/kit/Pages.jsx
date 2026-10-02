const DS_P = globalThis.NebulaDesignSystem_8e7380;

function Blocks({ blocks, read }) {
  const { Icon } = DS_P;
  return <div className={'kit-blocks' + (read ? ' kit-blocks--read' : '')}>
    {blocks.map((b, i) => b.h ? <Reveal as="h2" key={i} className="kit-blocks__h">{b.h}</Reveal>
      : b.p ? <Reveal as="p" key={i}>{b.p}</Reveal>
      : b.v ? <Reveal key={i} className="kit-verse">{b.v.map((l, j) => l ? <span key={j}>{l}</span> : <br key={j} />)}</Reveal>
      : b.note ? <Reveal key={i} className="kit-note"><Icon name="sparkles" size={18} /><span>{b.note}</span></Reveal>
      : b.li ? <Reveal as="ul" key={i} className="kit-list">{b.li.map(([t, d]) => <li key={t}><Icon name="chevron-right" /><span><b>{t}</b> — {d}</span></li>)}</Reveal>
      : b.sign ? <p key={i} className="kit-sign">{b.sign}</p> : null)}
  </div>;
}

function ChannelSection({ eyebrow, title, text, image, flip, alt, cta }) {
  return <section className="kit-section" style={{ background: alt ? 'var(--surface-1)' : undefined }}>
    <div className={'kit-container kit-channel' + (flip ? ' kit-channel--flip' : '')}>
      <Reveal className="kit-channel__art" style={{ backgroundImage: `url(${image})` }} />
      <Reveal delay={120} className="kit-channel__txt">
        <div className="nb-eyebrow">{eyebrow}</div>
        <h2 className="kit-h2">{title}</h2>
        <p className="kit-lead">{text}</p>
        <div>{cta}</div>
      </Reveal>
    </div>
  </section>;
}

function WelcomeChannels({ go }) {
  const { Button } = DS_P;
  const C = NB_CONTENT;
  return <>
    <ChannelSection eyebrow="Chi siamo · La Locanda" title={C.locanda.sub} text={C.locanda.teaser} image={C.locanda.cover}
      cta={<Button variant="secondary" iconRight="arrow-right" onClick={() => go('about')}>Conosci la Locanda</Button>} />
    <ChannelSection flip alt eyebrow="L’Editto della Locanda" title="Perché stiamo qui." text={C.editto.teaser} image={C.editto.cover}
      cta={<Button variant="secondary" icon="scroll-text" onClick={() => go('read/editto')}>Leggi l’Editto</Button>} />
    <ChannelSection eyebrow="Il Regolamento" title={C.regolamento.sub} text={C.regolamento.teaser} image={NB_DATA.site.images.regolamento}
      cta={<Button variant="secondary" iconRight="arrow-right" onClick={() => go('about/regolamento')}>Consulta il Regolamento</Button>} />
  </>;
}

function Regolamento() {
  const { Card, Icon, Badge } = DS_P;
  const R = NB_CONTENT.regolamento;
  return <div style={{ display: 'grid', gap: 48 }}>
    <div className="kit-head" style={{ marginBottom: 0 }}><h2 className="kit-h2">{R.sub}</h2>
      <p className="kit-lead">Questo è il testo che si consulta. Il perché sta nell’Editto, e comincia da due verbi: portare e sostenere. Ogni regola ha il suo perché, scritto accanto.</p></div>
    <div className="kit-grid" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,340px),1fr))' }}>
      {R.groups.map((g, i) => <Reveal key={g.t} delay={i * 80}><Card style={{ display: 'grid', gap: 16, height: '100%' }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', color: 'var(--accent-text)' }}><Icon name={g.icon} /><span style={{ font: 'var(--type-h4)', color: 'var(--text-1)' }}>{g.t}</span></div>
        <ul className="kit-list">{g.items.map(([t, d]) => <li key={t}><Icon name="minus" /><span><b>{t}</b> — {d}</span></li>)}</ul>
      </Card></Reveal>)}
    </div>
    <div className="kit-two">
      <Reveal style={{ display: 'grid', gap: 16 }}>
        <h3 style={{ font: 'var(--type-h3)' }}>Cosa succede se</h3>
        <p style={{ color: 'var(--text-2)' }}>Una scala, dichiarata in anticipo perché nessuno debba indovinare.</p>
        <ol className="kit-scale">{R.scale.map(([t, d], i) => <li key={t}><span className="kit-step__n">{i + 1}</span><div><b>{t}</b><p>{d}</p></div></li>)}</ol>
        <div className="kit-note"><Icon name="alert-triangle" size={18} /><span>Senza scala, subito, in quattro casi: molestia, discriminazione, minacce, contenuti illegali.</span></div>
      </Reveal>
      <Reveal delay={120} style={{ display: 'grid', gap: 20 }}>
        <Card style={{ display: 'grid', gap: 14 }}><div style={{ font: 'var(--type-h4)' }}>Cosa intendiamo per tossicità</div>
          <p style={{ color: 'var(--text-2)', font: 'var(--type-small)' }}>Su questi interveniamo anche senza che sia stato infranto un articolo.</p>
          <ul className="kit-list">{R.toxic.map(t => <li key={t}><Icon name="minus" /><span>{t}</span></li>)}</ul></Card>
        <Card style={{ display: 'grid', gap: 14 }}><div style={{ font: 'var(--type-h4)' }}>Come la applichiamo</div>
          <ul className="kit-list">{R.apply.map(([t, d]) => <li key={t}><Icon name="check" /><span><b>{t}</b> — {d}</span></li>)}</ul></Card>
      </Reveal>
    </div>
    <p className="kit-sign" style={{ textAlign: 'left' }}>— Il Presidente</p>
  </div>;
}

function AboutPage({ sub, go }) {
  const { Tabs, Button } = DS_P;
  const tab = sub === 'regolamento' ? 'regolamento' : 'locanda';
  return <main className="kit-page">
    <section className="kit-phero" data-screen-label="Chi siamo"><div className="kit-container kit-phero__in">
      <div className="nb-eyebrow">Chi siamo</div>
      <h1 className="kit-h1">{tab === 'locanda' ? 'La Locanda' : 'Il Regolamento'}</h1>
      <p className="kit-lead" style={{ maxWidth: '58ch' }}>{tab === 'locanda' ? NB_CONTENT.locanda.sub : 'Il perché sta nell’Editto. Qui c’è il poco che serve perché portare e sostenere restino possibili.'}</p>
    </div></section>
    <div className="kit-tabsbar"><div className="kit-container"><Tabs variant="underline" label="Chi siamo" value={tab} onChange={(v) => go(v === 'locanda' ? 'about' : 'about/regolamento')}
      tabs={[{ value: 'locanda', label: 'La Locanda' }, { value: 'regolamento', label: 'Regolamento' }]} /></div></div>
    <section className="kit-container" style={{ padding: '56px var(--gutter) var(--section-y)' }}>
      <div key={tab} className="kit-page">
        {tab === 'locanda' ? <div className="kit-narrow" style={{ maxWidth: 820 }}><Blocks blocks={NB_CONTENT.locanda.blocks} />
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 40 }}><Button icon="message-circle" onClick={() => go('join')}>Entra e presentati</Button><Button variant="secondary" icon="scroll-text" onClick={() => go('read/editto')}>Leggi l’Editto</Button></div></div>
          : <Regolamento />}
      </div>
    </section>
  </main>;
}

Object.assign(globalThis, { Blocks, WelcomeChannels, AboutPage });
