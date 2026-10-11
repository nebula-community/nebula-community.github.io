const DS_H = globalThis.NebulaDesignSystem_8e7380;

// Live Discord counts via the public invite endpoint (no key needed). Stale-while-revalidate: cached snapshot first, then refresh.
const DC_KEY = 'nb-discord-counts', DC_TTL = 5 * 60 * 1000;
function useDiscordCounts() {
  const read = () => { try { return JSON.parse(localStorage.getItem(DC_KEY) || 'null'); } catch (e) { return null; } };
  const [data, setData] = React.useState(read);
  const [state, setState] = React.useState('loading');
  React.useEffect(() => {
    let alive = true;
    const load = () => {
      const c = read();
      if (c && Date.now() - c.t < DC_TTL) { setData(c); setState('ok'); return; }
      fetch('https://discord.com/api/v10/invites/' + NB_DATA.site.discordCode + '?with_counts=true')
        .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(j => { if (!alive) return; const v = { members: j.approximate_member_count, online: j.approximate_presence_count, t: Date.now() }; try { localStorage.setItem(DC_KEY, JSON.stringify(v)); } catch (e) {} setData(v); setState('ok'); })
        .catch(() => alive && setState(navigator.onLine ? 'error' : 'offline'));
    };
    load();
    const id = setInterval(load, DC_TTL);
    return () => { alive = false; clearInterval(id); };
  }, []);
  return { data, state };
}

function About() {
  const { StatCounter, Tooltip, Badge } = DS_H;
  const { data, state } = useDiscordCounts();
  return <section className="kit-section" id="chi-siamo" data-screen-label="Chi siamo">
    <div className="kit-container kit-about">
      <Reveal>
        <div className="kit-head" style={{ marginBottom: 0 }}>
          <div className="nb-eyebrow">Benvenuto · Inizia qui</div>
          <h2 className="kit-h2">Hai varcato la soglia. Per ora non ti chiediamo niente.</h2>
          <p className="kit-lead">Non un server da consumare, non una bacheca da leggere fino in fondo. Un posto dove appendere il mantello e vedere se ti ci trovi. Chi arriva è un <Tooltip text="Chi arriva, chi cerca"><b style={{ color: 'var(--text-1)', borderBottom: '1px dashed var(--text-3)' }}>Nomade</b></Tooltip>: ce l’hai da quando sei entrato.</p>
        </div>
        <div className="kit-stats">
          <StatCounter value={data ? data.members : '—'} label="Nomadi alla locanda" />
          <StatCounter value={data ? data.online : '—'} label="Online adesso" />
          <StatCounter value={1} label="Tavolo aperto" />
        </div>
        <div style={{ marginTop: 16, display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          {state === 'ok' && <Badge tone="ok" dot>Dati live da Discord</Badge>}
          {state === 'loading' && <Badge tone="warn" dot>Aggiorno…</Badge>}
          {state === 'offline' && <Badge tone="warn">Offline · ultimo dato salvato</Badge>}
          {state === 'error' && <Badge>{data ? 'Ultimo dato salvato' : 'Conteggio non disponibile'}</Badge>}
        </div>
      </Reveal>
      <Reveal delay={150}>
        <div style={{ display: 'grid', gap: 20 }}>
          <div style={{ aspectRatio: '4/3', borderRadius: 'var(--radius-xl)', background: `url(${NB_DATA.site.images.homeWelcome}) center/cover`, boxShadow: 'var(--shadow-3)' }} />
          <p className="kit-quote">«Quando scrivi, qualcuno ti risponde. È l’unica promessa che ti facciamo oggi, ed è anche quella a cui teniamo di più.»<br /><span style={{ font: 'var(--type-small)', color: 'var(--text-3)', fontStyle: 'normal' }}>— L’Oste</span></p>
        </div>
      </Reveal>
    </div>
  </section>;
}

function GamesPreview() {
  const { GameCard, Button } = DS_H;
  return <section className="kit-section" style={{ background: 'var(--surface-1)' }} data-screen-label="Giochi">{/* game events & info live on each game page */}
    <div className="kit-container">
      <Reveal className="kit-head"><div className="nb-eyebrow">I tavoli</div><h2 className="kit-h2">Ogni gioco ha il suo tavolo. La casa è una.</h2><p className="kit-lead">Le sezioni si aprono solo se le chiedi tu, ognuna con la sua porta.</p></Reveal>
      <div className="kit-grid">
        {NB_DATA.games.map((g, i) => <Reveal key={g.slug} delay={i * 120}><GameCard {...g} href={g.placeholder ? undefined : NB_HREF('game/' + g.slug)} /></Reveal>)}
      </div>
      <div style={{ marginTop: 32 }}><Button variant="secondary" iconRight="arrow-right" href={NB_HREF('games')}>Tutti i giochi</Button></div>
    </div>
  </section>;
}

function LoreBand() {
  const { Button } = DS_H;
  const book = NB_DATA.book, first = NB_DATA.chapters[0];
  return <section className="kit-section" data-screen-label="Lore">
    <div className="kit-container">
      <Reveal className="kit-band" style={{ backgroundImage: `url(${NB_DATA.site.images.homeLore})` }}>
        <div className="kit-band__in">
          <div className="nb-eyebrow" style={{ color: '#FDA877' }}>{['La storia', book.kind].filter(Boolean).join(' · ')}</div>
          <h2 className="kit-h1" style={{ fontSize: 'var(--fs-display-m)' }}>{book.title}</h2>
          <p className="kit-lead">{book.teaser}</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>{first && <Button size="lg" icon="book-open" href={NB_HREF('read/' + first.id)}>Inizia a leggere</Button>}<Button size="lg" variant="ghost" href={NB_HREF('lore')} style={{ color: '#F3EEF7' }}>Tutti i capitoli</Button></div>
        </div>
      </Reveal>
    </div>
  </section>;
}

function EventsPreview({ go }) {
  const { EventItem, Button, Badge } = DS_H;
  return <section className="kit-section" style={{ paddingTop: 0 }} data-screen-label="Eventi">
    <div className="kit-container kit-narrow" style={{ maxWidth: 900 }}>
      <Reveal className="kit-head"><div className="nb-eyebrow">Missioni in programma</div><h2 className="kit-h2">Ti segni, il roster si fa da solo.</h2></Reveal>
      <div style={{ display: 'grid', gap: 12 }}>
        {NB_DATA.events.slice(0, 3).map((e, i) => <Reveal key={i} delay={i * 80}><EventItem {...e} action={<Badge tone="placeholder">da calendario</Badge>} /></Reveal>)}
      </div>
      <div style={{ marginTop: 28 }}><Button variant="secondary" iconRight="calendar" onClick={() => go('events')}>Calendario completo</Button></div>
    </div>
  </section>;
}

function Join({ standalone }) {
  const { Button, Input, Select, Checkbox, Toast } = DS_H;
  // The form appears only when a real receiving service is set in content/site.json → contact: never a form that pretends to send.
  const contact = NB_DATA.site.contact || {};
  const endpoint = contact.formEndpoint;
  const [state, setState] = React.useState('idle'); // idle · sending · ok · error
  React.useEffect(() => { if (state !== 'ok' && state !== 'error') return; const t = setTimeout(() => setState('idle'), 6000); return () => clearTimeout(t); }, [state]);
  const submit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setState('sending');
    try {
      const r = await fetch(endpoint, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) });
      if (!r.ok) throw new Error(String(r.status));
      form.reset();
      setState('ok');
    } catch (err) { setState('error'); }
  };
  return <section className="kit-section" style={{ background: 'var(--surface-1)', paddingTop: standalone ? 'calc(var(--header-h) + 72px)' : undefined }} data-screen-label="Unisciti">
    <div className={'kit-container kit-join' + (endpoint ? '' : ' kit-join--solo')}>
      <Reveal>
        <div className="kit-head">
          <div className="nb-eyebrow">Unisciti a noi</div>
          {standalone ? <h1 className="kit-h1">C’è una cosa sola da fare.</h1> : <h2 className="kit-h2">C’è una cosa sola da fare.</h2>}
          <p className="kit-lead">Entra nel Discord e vai in <b style={{ color: 'var(--text-1)' }}>presentati</b>: dicci chi sei, due righe bastano. Non è obbligatorio e non ha una scadenza — ma da lì in poi qualcuno ti conosce per nome.</p>
        </div>
        <div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
          <Button variant="neon" size="lg" icon="message-circle" href={NB_DATA.site.discord} target="_blank" rel="noopener">Apri il Discord</Button>
        </div>
      </Reveal>
      {endpoint && <Reveal delay={120}>
        <form className="kit-form nb-card nb-card--pad" onSubmit={submit}>
          <div style={{ font: 'var(--type-h3)' }}>Preferisci scriverci?</div>
          {contact.accessKey && <input type="hidden" name="access_key" value={contact.accessKey} />}
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />
          <Input label="Come ti chiamiamo?" name="nick" autoComplete="nickname" placeholder="Il tuo nick" required />
          <Input label="Email" name="email" type="email" autoComplete="email" placeholder="nomade@esempio.it" required />
          <Select label="Per cosa ci scrivi?" name="motivo" options={['Voglio entrare', 'Proporre un evento', 'Collaborazioni', 'Altro']} />
          <Input label="Due righe su di te" name="messaggio" multiline rows={3} hint="Il form passa da un servizio esterno (Formspree o Web3Forms): nessun dato resta sul sito." />
          <Checkbox label="Ho letto l’Editto della Locanda" name="editto" value="sì" required />
          <Button type="submit" size="lg" iconRight="send" disabled={state === 'sending'}>{state === 'sending' ? 'Invio in corso…' : 'Invia'}</Button>
        </form>
      </Reveal>}
    </div>
    {endpoint && <div className="kit-toasts" role="status">{state === 'ok'
      ? <Toast tone="ok" title="Messaggio arrivato" onClose={() => setState('idle')}>Ti rispondiamo entro tre giorni.</Toast>
      : state === 'error' ? <Toast tone="err" title="Il messaggio non è partito" onClose={() => setState('idle')}>Riprova fra poco, oppure scrivici su Discord.</Toast> : null}</div>}
  </section>;
}

function HomePage({ go }) {
  return <main><Hero /><About /><WelcomeChannels /><GamesPreview /><LoreBand /><Join /></main>;
}

Object.assign(globalThis, { HomePage, Join });
