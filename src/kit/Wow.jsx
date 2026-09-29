const DS_W = globalThis.NebulaDesignSystem_8e7380;

// Blizzard class colours (official). Names shown in class colour on dark; on light the name stays ink and the colour moves to the marker.
const WOW_CLASSES = {
  warrior: ['Guerriero', '#C69B6D'], paladin: ['Paladino', '#F48CBA'], hunter: ['Cacciatore', '#AAD372'], rogue: ['Ladro', '#FFF468'],
  priest: ['Sacerdote', '#FFFFFF'], shaman: ['Sciamano', '#0070DD'], mage: ['Mago', '#3FC7EB'], warlock: ['Stregone', '#8788EE'], druid: ['Druido', '#FF7C0A']
};

// Loot data provider — switch source in one place (site.config.ts in the real build).
// repo:  JSON in the repository (edit on GitHub / Pages CMS)
// sheet: Google Sheet "pubblicato sul web" as CSV — two tabs: roster(name,class,spec,faction) · awards(raid_id,instance,date,bosses,player,item,cost)
const LOOT_SOURCE = { type: 'repo', url: 'content/games/wow-forever/loot.json' };
const LOOT_KEY = 'nb-wow-loot-v3', LOOT_TTL = 10 * 60 * 1000;

const csv = (t) => { const [h, ...rows] = t.trim().split(/\r?\n/).map(l => l.split(',').map(c => c.trim())); return rows.map(r => Object.fromEntries(h.map((k, i) => [k, r[i]]))); };
async function fetchLoot() {
  if (LOOT_SOURCE.type === 'sheet') {
    const [ro, aw] = await Promise.all([fetch(LOOT_SOURCE.rosterCsv).then(r => r.text()), fetch(LOOT_SOURCE.awardsCsv).then(r => r.text())]);
    const raids = {};
    csv(aw).forEach(a => { (raids[a.raid_id] ||= { id: a.raid_id, instance: a.instance, date: a.date, bosses: a.bosses, awards: [] }).awards.push({ player: a.player, item: a.item, cost: +a.cost }); });
    return { roster: csv(ro), raids: Object.values(raids) };
  }
  if (globalThis.NB_LOOT && LOOT_SOURCE.type === 'repo') return globalThis.NB_LOOT;
  const r = await fetch(LOOT_SOURCE.url); if (!r.ok) throw new Error(r.status); return r.json();
}
function useLoot() {
  const cached = (() => { try { return JSON.parse(localStorage.getItem(LOOT_KEY) || 'null'); } catch (e) { return null; } })();
  const [data, setData] = React.useState(cached && cached.d);
  const [state, setState] = React.useState('loading');
  React.useEffect(() => {
    if (cached && Date.now() - cached.t < LOOT_TTL) { setState('ok'); return; }
    fetchLoot().then(d => { localStorage.setItem(LOOT_KEY, JSON.stringify({ d, t: Date.now() })); setData(d); setState('ok'); })
      .catch(() => setState(navigator.onLine ? 'error' : 'offline'));
  }, []);
  return { data, state };
}
function standingsAfter(data, idx) {
  const rows = data.roster.map(p => ({ ...p, credits: 0, last: null, won: [] }));
  const by = Object.fromEntries(rows.map(r => [r.name, r]));
  data.raids.slice(0, idx + 1).forEach((raid, ri) => raid.awards.forEach(a => { const p = by[a.player]; if (!p) return; p.credits += a.cost; p.last = a.item; if (ri === idx) p.won.push(a); }));
  return rows.sort((a, b) => a.credits - b.credits || a.name.localeCompare(b.name));
}

function raidGains(data, idx) {
  const raid = data.raids[idx];
  return data.roster.map(p => { const won = raid.awards.filter(a => a.player === p.name); return { ...p, won, gained: won.reduce((s, a) => s + a.cost, 0) }; })
    .sort((a, b) => b.gained - a.gained || a.name.localeCompare(b.name));
}

// One row per player, one column per run. Order is always computed here: fewest credits first (= loot priority), ties by name.
function LootTable({ data, open, onToggle }) {
  const { Icon } = DS_W;
  const [sort, setSort] = React.useState({ key: 'total', dir: 1 });
  const rows = React.useMemo(() => {
    const list = data.roster.map(p => {
      const runs = data.raids.map(r => r.awards.filter(a => a.player === p.name).reduce((s, a) => s + a.cost, 0));
      return { ...p, runs, total: runs.reduce((s, v) => s + v, 0) };
    });
    const val = (p) => sort.key === 'total' ? p.total : sort.key === 'name' ? p.name : sort.key === 'class' ? (WOW_CLASSES[p.class] || [''])[0] : p.runs[sort.key];
    return list.sort((a, b) => { const x = val(a), y = val(b); const c = typeof x === 'string' ? x.localeCompare(y) : x - y; return c * sort.dir || a.total - b.total || a.name.localeCompare(b.name); });
  }, [data, sort]);
  const priority = React.useMemo(() => Object.fromEntries([...rows].sort((a, b) => a.total - b.total || a.name.localeCompare(b.name)).map((p, i) => [p.name, i + 1])), [rows]);
  const th = (key, label, right, cls) => <th className={cls} style={right ? { textAlign: 'right' } : undefined} aria-sort={sort.key === key ? (sort.dir > 0 ? 'ascending' : 'descending') : 'none'}>
    <button className="kit-sort" onClick={() => setSort(s => ({ key, dir: s.key === key ? -s.dir : 1 }))}>{label}{sort.key === key && <Icon name={sort.dir > 0 ? 'arrow-up' : 'arrow-down'} size={12} />}</button></th>;
  return <div className={'kit-raid kit-raid--total' + (open ? ' is-open' : '')}>
    <button className="kit-raid__row" aria-expanded={open} onClick={onToggle}>
      <span className="kit-raid__n"><Icon name="sigma" size={22} /></span>
      <span style={{ display: 'grid', gap: 4, textAlign: 'left' }}><b>Season {data.season}</b><small>{data.raids.length} run · {data.closed ? 'chiusa' : 'in corso'} · agg. {data.updated}</small></span>
      <span className="kit-raid__meta">{data.roster.length} nel roster</span>
      <Icon name="chevron-down" className="kit-raid__chev" />
    </button>
    {open && <div className="kit-raid__body">
      <table className="kit-table">
        <thead><tr>
          {th('total', 'Prec.')}{th('name', 'Giocatore', false, 'kit-stick-l')}{th('class', 'Classe · spec')}
          {data.raids.map((r, i) => <React.Fragment key={r.id}>{th(i, <span className="kit-runh"><span>{r.date}</span><small>{r.instance}</small></span>, true)}</React.Fragment>)}
          {th('total', 'Totale', true, 'kit-stick-r')}
        </tr></thead>
        <tbody>{rows.map(p => <tr key={p.name}>
          <td className="kit-table__dim">{priority[p.name]}</td>
          <td className="kit-stick-l"><ClassName cls={p.class} name={p.name} /></td>
          <td className="kit-table__dim">{(WOW_CLASSES[p.class] || ['—'])[0]} · {p.spec}</td>
          {p.runs.map((v, i) => <td key={i} style={{ textAlign: 'right' }}>{v ? <span className="kit-run">+{v}</span> : <span className="kit-table__dim">·</span>}</td>)}
          <td className="kit-stick-r" style={{ textAlign: 'right' }}><span className="kit-credits">{p.total}</span></td>
        </tr>)}</tbody>
      </table>
    </div>}
  </div>;
}

function ClassName({ cls, name }) {
  const c = WOW_CLASSES[cls] || ['—', 'var(--text-3)'];
  return <span className="kit-cls" style={{ '--c': c[1] }}><i />{name}</span>;
}

function WowLoot() {
  const { Badge, Icon, Skeleton, Card } = DS_W;
  const { data, state } = useLoot();
  const [open, setOpen] = React.useState(0);
  const seasons = data ? (data.seasons || [data]) : [];
  const L = NB_WOW.loot;
  return <div style={{ display: 'grid', gap: 40 }}>
    <div className="kit-two">
      <div style={{ display: 'grid', gap: 18 }}>
        <h2 className="kit-h2">{NB_WOW.copy.loot.title}</h2>
        <p className="kit-lead">{NB_WOW.copy.loot.lead}</p>
        <ul className="kit-list">{L.rules.map(([t, d]) => <li key={t}><Icon name="scale" /><span><b>{t}</b> — {d}</span></li>)}</ul>
      </div>
      <Card style={{ display: 'grid', gap: 14 }}>
        <div style={{ font: 'var(--type-h4)' }}>Quanto costa un pezzo</div>
        {L.costs.map(([n, d]) => <div key={n} style={{ display: 'flex', gap: 14, alignItems: 'center' }}><span className="kit-cost">{n}</span><span style={{ color: 'var(--text-2)' }}>{d}</span></div>)}
        <p style={{ font: 'var(--type-small)', color: 'var(--text-3)' }}>La categoria si annuncia prima del roll. I leggendari li assegna il council, e costano 2 crediti su ogni pezzo della catena.</p>
      </Card>
    </div>
    <div style={{ display: 'grid', gap: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <h3 style={{ font: 'var(--type-h3)' }}>Crediti</h3>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {data && data.example && <Badge tone="placeholder">Dati d’esempio</Badge>}
          {state === 'ok' ? <Badge tone="ok" dot>Aggiornata</Badge> : state === 'loading' ? <Badge tone="warn" dot>Carico…</Badge> : <Badge tone="warn">{state === 'offline' ? 'Offline · ultima copia' : 'Ultima copia salvata'}</Badge>}
        </div>
      </div>
      <p style={{ color: 'var(--text-2)' }}>{NB_WOW.copy.loot.tableNote}</p>
      {!data ? [0, 1, 2].map(i => <Skeleton key={i} height={64} radius={12} />) :
        <div className="kit-raids">{seasons.map((s, i) => <LootTable key={s.season + i} data={s} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />)}</div>}
      <div className="kit-note"><Icon name="file-pen-line" size={18} /><span>Gli officers aggiornano un solo file dopo ogni serata: <code style={{ fontFamily: 'var(--font-mono)' }}>content/games/wow-forever/loot.json</code> nel repository, oppure i fogli <b>roster</b> e <b>awards</b> su Google Sheets. I totali li calcola il sito: si scrivono solo i pezzi assegnati. Se la tua riga non torna, scrivilo nel topic loot su Discord.</span></div>
    </div>
  </div>;
}

function WowInfo() {
  const { Card, Badge, Icon } = DS_W;
  const w = NB_DATA.wow;
  const spec = [...w.spec, ...NB_WOW.extraSpec];
  return <div style={{ display: 'grid', gap: 56 }}>
    <div className="kit-grid" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,260px),1fr))' }}>
      {NB_WOW.who.map(([t, d], i) => <Reveal key={t} delay={i * 70}><Card style={{ display: 'grid', gap: 10, height: '100%' }}><div style={{ font: 'var(--type-h4)' }}>{t}</div><p style={{ color: 'var(--text-2)' }}>{d}</p></Card></Reveal>)}
    </div>
    <div className="kit-two">
      <div style={{ display: 'grid', gap: 20 }}>
        <h2 className="kit-h2">{NB_WOW.copy.info.title}</h2>
        <p className="kit-lead">{NB_WOW.copy.info.lead}</p>
        <dl className="kit-spec">{spec.map(([k, v]) => <React.Fragment key={k}><dt>{k}</dt><dd>{v.includes('[[') ? <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--warn)' }}>{v}</code> : v}</dd></React.Fragment>)}</dl>
      </div>
      <div style={{ display: 'grid', gap: 20 }}>
        <Card style={{ display: 'grid', gap: 14 }}>
          {NB_WOW.factionMode === 'multi' ? <>
          <div className="nb-eyebrow">Le due bandiere</div>
          <div style={{ font: 'var(--type-h3)' }}>In gioco le fazioni non si parlano. Noi sì.</div>
          <p style={{ color: 'var(--text-2)' }}>Nebulaa e Nebulah hanno gli stessi ruoli su Discord, le stesse regole e lo stesso standard nei raid: cambia la bandiera, non la casa. Puoi tenere personaggi su entrambe — qui non è tradimento.</p>
          </> : <>
          <div className="nb-eyebrow">La bandiera</div>
          <div style={{ font: 'var(--type-h3)' }}>{NB_WOW.factions[0].name}, in {NB_WOW.factions[0].faction}.</div>
          <p style={{ color: 'var(--text-2)' }}>Oggi la gilda è una. Se ne nasce una seconda sull’altra bandiera, avrà gli stessi ruoli su Discord, le stesse regole e lo stesso standard nei raid: cambia la bandiera, non la casa.</p>
          </>}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>{NB_WOW.factions.map(x => <Badge key={x.name} tone="accent">{x.name} · {x.faction}</Badge>)}</div>
        </Card>
        <Card style={{ display: 'grid', gap: 14 }}>
          <div style={{ font: 'var(--type-h4)' }}>Chi fa cosa</div>
          <ul className="kit-list">{NB_WOW.roles.map(([ic, t, d]) => <li key={t}><Icon name={ic} /><span><b>{t}</b> — {d.includes('[[') ? <>{d.split('[[')[0]}<code style={{ fontFamily: 'var(--font-mono)', color: 'var(--warn)' }}>[[{d.split('[[')[1].split(']]')[0]}]]</code>{d.split(']]')[1]}</> : d}</span></li>)}</ul>
        </Card>
      </div>
    </div>
    <div style={{ display: 'grid', gap: 20 }}>
      <h3 style={{ font: 'var(--type-h3)' }}>{NB_WOW.copy.info.firstDayTitle}</h3>
      <div className="kit-steps" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,220px),1fr))' }}>{NB_WOW.firstDay.map(([t, d], i) => <Card key={t} style={{ display: 'grid', gap: 8 }}><span className="kit-step__n">0{i + 1}</span><div style={{ font: 'var(--type-h4)' }}>{t}</div><p style={{ color: 'var(--text-2)', font: 'var(--type-small)' }}>{d}</p></Card>)}</div>
      <p style={{ color: 'var(--text-2)' }}>{NB_WOW.copy.info.firstDayOutro}</p>
    </div>
  </div>;
}

function WowApplication() {
  const { Button, Icon } = DS_W;
  const A = NB_WOW.application;
  const [copied, setCopied] = React.useState(false);
  let n = 0;
  const text = A.groups.map(([g, qs]) => qs.map(q => (++n) + '. ' + q).join('\n')).join('\n\n');
  n = 0;
  const copy = () => {
    const done = () => { setCopied(true); setTimeout(() => setCopied(false), 2200); };
    const fallback = () => { const t = document.createElement('textarea'); t.value = text; t.style.position = 'fixed'; t.style.opacity = '0'; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); done(); } finally { t.remove(); } };
    navigator.clipboard ? navigator.clipboard.writeText(text).then(done, fallback) : fallback();
  };
  return <div className="kit-app">
    <div className="kit-app__head">
      <div style={{ display: 'grid', gap: 6 }}><div className="nb-eyebrow">Il Registro della Locanda</div><h3 style={{ font: 'var(--type-h3)' }}>Il modulo di candidatura</h3></div>
      <Button size="sm" variant={copied ? 'secondary' : 'primary'} icon={copied ? 'check' : 'copy'} onClick={copy}>{copied ? 'Copiato' : 'Copia il modulo'}</Button>
    </div>
    <p style={{ color: 'var(--text-2)' }}>{A.intro}</p>
    <div className="kit-app__form">
      {A.groups.map(([g, qs]) => <div key={g} className="kit-app__group">
        <div className="kit-app__g">## {g}</div>
        <ol className="kit-app__qs" start={n + 1}>{qs.map(q => { n++; return <li key={q}><span className="kit-app__n">{n}.</span><span>{q}</span></li>; })}</ol>
      </div>)}
    </div>
    <div className="kit-note"><Icon name="info" size={18} /><span>{A.note}</span></div>
    <p style={{ color: 'var(--text-3)', font: 'var(--type-small)' }}>Si incolla in un nuovo post nel canale candidatura su Discord e si compila lì, anche dal telefono.</p>
  </div>;
}

function WowRanks() {
  const { Card, Badge, Icon } = DS_W;
  const R = NB_WOW.ranks;
  return <div style={{ display: 'grid', gap: 48 }}>
    <div className="kit-head" style={{ marginBottom: 0 }}><h2 className="kit-h2">{NB_WOW.copy.ranks.title}</h2><p className="kit-lead">{NB_WOW.copy.ranks.lead}</p></div>
    <div style={{ display: 'grid', gap: 16 }}>
      <div className="nb-eyebrow">Su Discord</div>
      <div className="kit-ranks">{R.discord.map((r, i) => <Reveal key={r.id} delay={i * 60}><Card className="kit-rank">
        <div className="kit-rank__head"><span className="kit-rank__icon"><Icon name={r.icon} /></span><div style={{ display: 'grid', gap: 6 }}><div style={{ font: 'var(--type-h4)' }}>{r.name}</div><Badge tone={r.tone}>{r.badge}</Badge></div></div>
        <dl className="kit-rank__dl"><dt>A chi arriva</dt><dd>{r.who}</dd><dt>Cosa può fare</dt><dd>{r.can}</dd><dt>Come si ottiene</dt><dd>{r.grantedBy.includes('[[') ? <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--warn)' }}>{r.grantedBy}</code> : r.grantedBy}</dd></dl>
      </Card></Reveal>)}</div>
    </div>
    <div style={{ display: 'grid', gap: 16 }}>
      <div className="nb-eyebrow">In gioco</div>
      <div className="kit-ingame">{R.ingame.map((r, i) => <Reveal key={r.id} delay={i * 40} className="kit-ingame__row">
        <span className="kit-rank__icon" style={{ width: 40, height: 40 }}><Icon name={r.icon} size={18} /></span>
        <b>{r.name}</b><span>{r.text}</span>
      </Reveal>)}</div>
    </div>
    {R.note && <div className="kit-note"><Icon name="info" size={18} /><span>{R.note}</span></div>}
  </div>;
}

// Calendar — snapshot from the Raid-Helper sync (GitHub Action), live sign-up refresh from the public single-event endpoint.
const RH_EVENT = (id) => 'https://raid-helper.dev/api/v2/events/' + id;
function useLiveEvent(ev) {
  const [live, setLive] = React.useState(null);
  React.useEffect(() => {
    if (!ev.id || ev.id.startsWith('[[')) return;
    fetch(RH_EVENT(ev.id)).then(r => r.ok ? r.json() : null).then(j => {
      if (!j || !j.signUps) return;
      const s = { present: 0, tentative: 0, absent: 0, bench: 0 }, classes = {};
      j.signUps.forEach(u => { const c = (u.className || '').toLowerCase();
        if (c === 'tentative') s.tentative++; else if (c === 'absence') s.absent++; else if (c === 'bench') s.bench++; else if (c !== 'late') { s.present++; classes[c] = (classes[c] || 0) + 1; } });
      setLive({ signups: s, classes });
    }).catch(() => {});
  }, [ev.id]);
  return live;
}
function CalendarEvent({ ev }) {
  const { Badge, Button, Icon } = DS_W;
  const live = useLiveEvent(ev);
  const s = (live || ev).signups, cl = (live || ev).classes;
  const d = /^(\d{4})-(\d{2})-(\d{2})/.exec(ev.start || '');
  const M = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'];
  const time = (ev.start || '').split('T')[1] + (ev.end ? ' – ' + ev.end.split('T')[1] : '');
  return <div className="kit-cal">
    <div className="nb-event__date"><span className="nb-event__day">{d ? d[3] : '[[GG]]'}</span><span className="nb-event__mon">{d ? M[+d[2] - 1] : 'raid'}</span></div>
    <div style={{ display: 'grid', gap: 10, minWidth: 0 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}><b style={{ font: '600 17px/1.25 var(--font-body)' }}>{ev.title}</b><Badge>{ev.faction}</Badge>{live && <Badge tone="ok" dot>Live</Badge>}</div>
      <div className="nb-event__meta"><span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><Icon name="clock" size={14} />{time}</span><span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><Icon name="lock" size={14} />Iscrizioni fino a {(ev.closesAt || '').split('T')[1] || '—'}</span></div>
      <div className="kit-cal__counts"><span className="kit-cal__n kit-cal__n--ok"><b>{s.present}</b> presenti</span><span className="kit-cal__n"><b>{s.tentative}</b> in dubbio</span><span className="kit-cal__n"><b>{s.bench}</b> riserve</span><span className="kit-cal__n"><b>{s.absent}</b> assenti</span></div>
      <div className="kit-cal__classes">{Object.entries(cl).sort((a, b) => b[1] - a[1]).map(([c, n]) => <span key={c} className="kit-cls" style={{ '--c': (WOW_CLASSES[c] || ['', 'var(--text-3)'])[1], fontWeight: 500, fontSize: 13 }}><i />{(WOW_CLASSES[c] || [c])[0]} {n}</span>)}</div>
    </div>
    <div style={{ display: 'grid', gap: 8, alignContent: 'start' }}>
      <Button size="sm" icon="message-circle" href={ev.messageUrl || NB_DATA.site.discord} target="_blank" rel="noopener">Segnati su Discord</Button>
      {!ev.id.startsWith('[[') && <Button size="sm" variant="ghost" iconRight="external-link" href={'https://raid-helper.dev/event/' + ev.id} target="_blank" rel="noopener">Raid-Helper</Button>}
    </div>
  </div>;
}
function WowCalendar() {
  const { Badge, Icon } = DS_W;
  const C = NB_WOW.calendar;
  return <div style={{ display: 'grid', gap: 18, maxWidth: 980 }}>
    <h2 className="kit-h2">{NB_WOW.copy.calendar.title}</h2>
    <p className="kit-lead">{NB_WOW.copy.calendar.lead}</p>
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}><Badge tone="accent">Fonte: Raid-Helper</Badge>{C.example && <Badge tone="placeholder">Dati d’esempio</Badge>}<Badge>Sincronizzato: {C.syncedAt}</Badge></div>
    {C.events.map((ev, i) => <CalendarEvent key={i} ev={ev} />)}
    <div className="kit-note"><Icon name="refresh-cw" size={18} /><span>Una GitHub Action legge gli eventi da Raid-Helper ogni 30 minuti (la chiave API resta nei Secrets, mai nel sito) e rigenera il calendario. Le iscrizioni di ogni serata si aggiornano anche in tempo reale dal browser.</span></div>
  </div>;
}

const ROLE_ICON = { tank: 'shield', healer: 'heart-pulse', dps: 'swords' };
const PRIO = { high: ['Priorità', 'accent'], open: ['Aperto', 'ok'], closed: ['Chiuso', 'neutral'] };

const PRIO_ORDER = { high: 0, open: 1, closed: 2 };
const classAvailable = (c) => { const fs = NB_WOW.factions.map(x => x.faction); return !(c === 'paladin' && !fs.includes('Alleanza')) && !(c === 'shaman' && !fs.includes('Orda')); };
const classPriority = (cl) => cl.specs.reduce((best, s) => PRIO_ORDER[s.priority] < PRIO_ORDER[best] ? s.priority : best, 'closed');

function WowRecruitment() {
  const { Badge, Icon, Card } = DS_W;
  const R = NB_WOW.recruitment;
  const active = NB_WOW.factions.map(x => x.name);
  const roster = NB_WOW.roster.players.filter(p => active.includes(p.faction));
  const wanted = (r) => r.wanted != null ? r.wanted : Math.max(0, (R.targets[r.role] || 0) - roster.filter(p => p.role === r.role).length);
  const classes = R.classes.filter(c => classAvailable(c.class)).sort((a, b) => PRIO_ORDER[classPriority(a)] - PRIO_ORDER[classPriority(b)]);
  return <div style={{ display: 'grid', gap: 40 }}>
    <div className="kit-recruit">
      <div style={{ display: 'grid', gap: 12 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>{R.open ? <Badge tone="ok" dot>Reclutamento aperto</Badge> : <Badge>Reclutamento chiuso</Badge>}{R.open && R.highlight && <Badge tone="accent">{R.highlight}</Badge>}</div>
        <h2 className="kit-h2">{R.headline}</h2>
        <p className="kit-lead">{R.text}</p>
      </div>
      <div className="kit-recruit__roles">{R.roles.map(r => { const n = wanted(r); const full = r.priority === 'closed' || n === 0;
        return <div key={r.role} className={'kit-recruit__role' + (r.priority === 'high' && !full ? ' is-high' : '')}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}><Icon name={ROLE_ICON[r.role]} size={22} /><Badge tone={full ? 'neutral' : PRIO[r.priority][1]}>{full ? 'Al completo' : PRIO[r.priority][0]}</Badge></div>
          <b>{r.label}</b>
          <div className="kit-recruit__wanted">{full ? <span>Nessun posto libero</span> : <><em>{n}</em><span>{n === 1 ? 'posto che cerchiamo' : 'posti che cerchiamo'}</span></>}</div>
        </div>; })}</div>
      <p style={{ color: 'var(--text-3)', font: 'var(--type-small)' }}>{R.social}</p>
    </div>
    <div style={{ display: 'grid', gap: 18 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 12, flexWrap: 'wrap' }}>
        <div className="kit-head" style={{ marginBottom: 0 }}><h3 className="kit-h2" style={{ fontSize: 'var(--fs-30)' }}>{NB_WOW.copy.recruitment.specsTitle}</h3><p className="kit-lead">{NB_WOW.copy.recruitment.specsLead}</p></div>
        <div className="kit-legend"><span><i className="is-high" />Priorità</span><span><i className="is-open" />Aperto</span><span><i className="is-closed" />Al completo</span></div>
      </div>
      <div className="kit-specs">{classes.map(c => { const [label, color] = WOW_CLASSES[c.class];
        return <div key={c.class} className="kit-specs__card" style={{ '--c': color }}>
          <div className="kit-specs__head"><i /><b>{label}</b>{c.note && <span className="kit-table__dim" style={{ font: 'var(--type-small)' }}>{c.note}</span>}</div>
          <ul>{c.specs.map(s => <li key={s.name} className={'is-' + s.priority}><Icon name={ROLE_ICON[s.role]} size={15} /><span>{label} – {s.name}</span><em>{s.priority === 'high' ? 'Priorità' : s.priority === 'open' ? 'Aperto' : 'Al completo'}</em></li>)}</ul>
        </div>; })}</div>
    </div>
  </div>;
}

function WowRoster() {
  const { Tabs, Badge, Icon } = DS_W;
  const R = NB_WOW.roster, T = NB_WOW.recruitment.targets;
  const facs = NB_WOW.factions.map(x => x.name);
  const [f, setF] = React.useState(facs[0]);
  const list = R.players.filter(p => p.faction === f);
  const roles = ['tank', 'healer', 'dps'];
  return <div style={{ display: 'grid', gap: 28 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, flexWrap: 'wrap' }}>
      <div className="kit-head" style={{ marginBottom: 0 }}><h2 className="kit-h2">{NB_WOW.copy.roster.title}</h2><p className="kit-lead">{NB_WOW.copy.roster.lead}</p></div>
      <div style={{ display: 'grid', gap: 8, justifyItems: 'end' }}>{facs.length > 1 ? <Tabs tabs={NB_WOW.factions.map(x => ({ value: x.name, label: x.name + ' · ' + x.faction }))} value={f} onChange={setF} /> : <Badge tone="accent">{NB_WOW.factions[0].name} · {NB_WOW.factions[0].faction}</Badge>}
        <div style={{ display: 'flex', gap: 8 }}>{R.example && <Badge tone="placeholder">Dati d’esempio</Badge>}<Badge>Agg. {R.updated}</Badge></div></div>
    </div>
    <div className="kit-roster">{roles.map(r => { const ps = list.filter(p => p.role === r).sort((a, b) => a.class.localeCompare(b.class) || a.name.localeCompare(b.name)); const need = T[r]; const pct = Math.min(100, ps.length / need * 100);
      return <div key={r} className="kit-roster__col">
        <div className="kit-roster__head"><span style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}><Icon name={ROLE_ICON[r]} size={18} /><b>{r === 'dps' ? 'DPS' : r[0].toUpperCase() + r.slice(1)}</b></span><span className="kit-roster__count"><b>{ps.length}</b>/{need}</span></div>
        <div className="kit-roster__bar"><i style={{ width: pct + '%' }} /></div>
        <ul>{ps.map(p => <li key={p.name}><ClassName cls={p.class} name={p.name} /><span className="kit-table__dim">{p.spec}</span>{p.rank === 'Trial' && <Badge tone="warn">Trial</Badge>}</li>)}
          {ps.length < need && <li className="kit-roster__open"><Icon name="plus" size={14} />{need - ps.length} {need - ps.length === 1 ? 'posto libero' : 'posti liberi'}</li>}</ul>
      </div>; })}</div>
  </div>;
}

function WowProgress() {
  const { Badge, Icon } = DS_W;
  const P = NB_WOW.progress;
  return <div style={{ display: 'grid', gap: 28 }}>
    <div className="kit-head" style={{ marginBottom: 0 }}><h2 className="kit-h2">{NB_WOW.copy.progress.title}</h2><p className="kit-lead">{NB_WOW.copy.progress.lead}</p>{P.example && <div><Badge tone="placeholder">Dati d’esempio</Badge></div>}</div>
    {P.instances.map(ins => { const tot = ins.bosses.length; const k = (fac) => ins.bosses.filter(b => b[fac]).length;
      return <div key={ins.id} className={'kit-prog' + (ins.locked ? ' is-locked' : '')}>
        <div className="kit-prog__cover" style={{ backgroundImage: ins.cover ? `url(${ins.cover})` : undefined }}><div><div className="nb-eyebrow" style={{ color: '#FDA877' }}>{ins.size ? ins.size + ' giocatori' : 'In arrivo'}</div><div className="kit-prog__name">{ins.name}</div></div></div>
        {ins.locked ? <div className="kit-prog__body" style={{ color: 'var(--text-3)' }}>Si apre con la prossima fase.</div> :
        <div className="kit-prog__body">
          <div className="kit-prog__sum">{NB_WOW.factions.map(x => x.name).map(fac => <div key={fac}><div style={{ display: 'flex', justifyContent: 'space-between', font: '500 14px/1 var(--font-body)' }}><span>{fac}</span><span style={{ fontFamily: 'var(--font-mono)' }}>{k(fac)}/{tot}</span></div><div className="kit-roster__bar"><i style={{ width: (k(fac) / tot * 100) + '%' }} /></div></div>)}</div>
          <ol className="kit-prog__bosses">{ins.bosses.map((b, i) => <li key={b.name}><span className="kit-table__dim" style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>{String(i + 1).padStart(2, '0')}</span><span>{b.name}</span>
            {NB_WOW.factions.map(x => x.name).map(fac => <span key={fac} className={'kit-prog__k' + (b[fac] ? ' is-dead' : '')} title={fac + (b[fac] ? ' · ' + b[fac] : ' · da fare')}>{b[fac] ? <Icon name="skull" size={14} /> : <Icon name="circle-dashed" size={14} />}{NB_WOW.factions.length > 1 && <small>{fac.slice(-1) === 'a' ? 'A' : 'O'}</small>}</span>)}</li>)}</ol>
        </div>}
      </div>; })}
    <p style={{ color: 'var(--text-3)', font: 'var(--type-small)' }}>{NB_WOW.factions.length > 1 ? 'A = Nebulaa (Alleanza) · O = Nebulah (Orda). ' : ''}Passa sopra un teschio per la data del primo kill.</p>
  </div>;
}

function WowFaq() {
  const { Icon } = DS_W;
  return <div style={{ display: 'grid', gap: 40, maxWidth: 900 }}>
    <div className="kit-head" style={{ marginBottom: 0 }}><h2 className="kit-h2">{NB_WOW.copy.faq.title}</h2><p className="kit-lead">{NB_WOW.copy.faq.lead}</p></div>
    {NB_WOW.faq.map(([g, qs]) => <div key={g} style={{ display: 'grid', gap: 12 }}>
      <div className="nb-eyebrow">{g}</div>
      <div className="kit-faq">{qs.map(([q, a]) => <details key={q}><summary>{q}<Icon name="plus" /></summary><p>{a}</p></details>)}</div>
    </div>)}
    <p style={{ color: 'var(--text-2)' }}>{NB_WOW.copy.faq.outro}</p>
  </div>;
}

Object.assign(globalThis, { WowLoot, WowInfo, WowFaq, WowApplication, WowRanks, WowCalendar, WowRecruitment, WowRoster, WowProgress });
