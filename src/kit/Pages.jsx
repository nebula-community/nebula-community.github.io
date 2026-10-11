const DS_P = globalThis.NebulaDesignSystem_8e7380;

// Running text appears at once (no fade-in per paragraph): it stays readable after a jump, with Page Down and in print.
function Blocks({ blocks, read }) {
  const { Icon } = DS_P;
  return <div className={'kit-blocks' + (read ? ' kit-blocks--read' : '')}>
    {blocks.map((b, i) => b.h ? <h2 key={i} className="kit-blocks__h">{b.h}</h2>
      : b.p ? <p key={i}>{b.p}</p>
      : b.v ? <div key={i} className="kit-verse">{b.v.map((l, j) => l ? <span key={j}>{l}</span> : <br key={j} />)}</div>
      : b.note ? <div key={i} className="kit-note"><Icon name="sparkles" size={18} /><span>{b.note}</span></div>
      : b.li ? <ul key={i} className="kit-list">{b.li.map(([t, d]) => <li key={t}><Icon name="chevron-right" /><span><b>{t}</b> — {d}</span></li>)}</ul>
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

function WelcomeChannels() {
  const { Button } = DS_P;
  const C = NB_CONTENT;
  return <>
    <ChannelSection alt eyebrow="Chi siamo · La Locanda" title={C.locanda.sub} text={C.locanda.teaser} image={C.locanda.cover}
      cta={<Button variant="secondary" iconRight="arrow-right" href={NB_HREF('about')}>Conosci la Locanda</Button>} />
    <ChannelSection flip eyebrow="L’Editto della Locanda" title="Perché stiamo qui." text={C.editto.teaser} image={C.editto.cover}
      cta={<Button variant="secondary" icon="scroll-text" href={NB_HREF('about/editto')}>Leggi l’Editto</Button>} />
    <ChannelSection alt eyebrow="Il Regolamento" title={C.regolamento.sub} text={C.regolamento.teaser} image={NB_DATA.site.images.regolamento}
      cta={<Button variant="secondary" iconRight="arrow-right" href={NB_HREF('about/regolamento')}>Consulta il Regolamento</Button>} />
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
        <div className="kit-note"><Icon name="triangle-alert" size={18} /><span>Senza scala, subito, in quattro casi: molestia, discriminazione, minacce, contenuti illegali.</span></div>
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

// [[TOKEN]] = data not written yet: shown in the same "missing" style as the rest of the site
function Tok({ text }) {
  return String(text).split(/(\[\[[^\]]+\]\])/g).map((s, i) => s.startsWith('[[') ? <code key={i} style={{ fontFamily: 'var(--font-mono)', color: 'var(--warn)' }}>{s}</code> : s);
}

// Founders and co-founders (content/pages/fondatori.json), closed by the group photo.
function Founders() {
  const F = NB_CONTENT.founders;
  if (!F) return null;
  return <section className="kit-founders" aria-labelledby="fondatori">
    <Reveal className="kit-head" style={{ marginBottom: 0 }}>
      <div className="nb-eyebrow">Chi siamo · Fondatori e co-fondatori</div>
      <h2 className="kit-h2" id="fondatori">{F.title}</h2>
      {F.lead && <p className="kit-lead">{F.lead}</p>}
    </Reveal>
    {F.groups.map((g) => <div key={g.title} className="kit-founders__group">
      <Reveal className="kit-founders__gh"><h3>{g.title}</h3>{g.text && <p>{g.text}</p>}</Reveal>
      <div className="kit-people">
        {g.people.map((p, i) => <Reveal key={p.name} delay={i * 60} className="kit-person">
          {p.image ? <img className="kit-person__img" src={p.image} alt={p.alt || p.name} loading="lazy" />
            : <div className="kit-person__img kit-person__img--empty" aria-hidden="true">{p.name.charAt(0)}</div>}
          <div className="kit-person__body">
            <div className="kit-person__role">{p.role}</div>
            <div className="kit-person__name">{p.name}</div>
            {p.line && <div className="kit-person__line">{p.line}</div>}
            {p.text && <p className="kit-person__text">{p.text}</p>}
            {p.contribution && <p className="kit-person__did"><span>Per Nebula</span><Tok text={p.contribution} /></p>}
          </div>
        </Reveal>)}
      </div>
    </div>)}
    {F.photo && F.photo.src && <Reveal as="figure" className="kit-groupphoto">
      <img src={F.photo.src} alt={F.photo.alt || ''} loading="lazy" />
      {F.photo.caption && <figcaption>{F.photo.caption}</figcaption>}
    </Reveal>}
  </section>;
}

const ABOUT_TABS = [
  { value: 'locanda', label: 'La Locanda', route: 'about' },
  { value: 'editto', label: 'L’Editto', route: 'about/editto' },
  { value: 'regolamento', label: 'Regolamento', route: 'about/regolamento' },
];

function AboutPage({ sub }) {
  const { TabNav, Button } = DS_P;
  const C = NB_CONTENT;
  const tab = ABOUT_TABS.some((t) => t.value === sub) ? sub : 'locanda';
  const [title, lead] = {
    locanda: ['La Locanda', C.locanda.sub],
    editto: [C.editto.title, C.editto.sub],
    regolamento: ['Il Regolamento', 'Il perché sta nell’Editto. Qui c’è il poco che serve perché portare e sostenere restino possibili.'],
  }[tab];
  return <main className="kit-page">
    <section className="kit-phero" data-screen-label="Chi siamo"><div className="kit-container kit-phero__in">
      <div className="nb-eyebrow">Chi siamo</div>
      <h1 className="kit-h1">{title}</h1>
      <p className="kit-lead" style={{ maxWidth: '58ch' }}>{lead}</p>
    </div></section>
    <div className="kit-tabsbar"><div className="kit-container"><TabNav label="Chi siamo" current={tab}
      items={ABOUT_TABS.map(({ value, label, route }) => ({ value, label, href: NB_HREF(route) }))} /></div></div>
    <section className="kit-container" style={{ padding: '56px var(--gutter) var(--section-y)' }}>
      <div key={tab} className="kit-page">
        {tab === 'locanda' && <>
          <div className="kit-narrow" style={{ maxWidth: 820 }}><Blocks blocks={C.locanda.blocks} /></div>
          <Founders />
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 48 }}><Button icon="message-circle" href={NB_HREF('join')}>Entra e presentati</Button><Button variant="secondary" icon="scroll-text" href={NB_HREF('about/editto')}>Leggi l’Editto</Button></div>
        </>}
        {tab === 'editto' && <div className="kit-narrow" style={{ maxWidth: 760 }}>
          <div className="nb-eyebrow" style={{ marginBottom: 28 }}>La voce del Bardo</div>
          <article className="kit-prose"><Blocks blocks={C.editto.blocks} read /></article>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 48 }}><Button icon="message-circle" href={NB_HREF('join')}>Entra e presentati</Button><Button variant="secondary" iconRight="arrow-right" href={NB_HREF('about/regolamento')}>Il Regolamento</Button></div>
        </div>}
        {tab === 'regolamento' && <Regolamento />}
      </div>
    </section>
  </main>;
}

Object.assign(globalThis, { Blocks, WelcomeChannels, AboutPage });
