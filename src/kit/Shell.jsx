const { Logo, Button, IconButton, ThemeToggle, Icon } = globalThis.NebulaDesignSystem_8e7380;

const NAV = [['home', 'Home'], ['about', 'Chi siamo'], ['lore', 'Lore'], ['games', 'Giochi'], ['join', 'Unisciti']];
const SOCIAL = [['youtube', 'YouTube'], ['instagram', 'Instagram'], ['twitch', 'Twitch']];

function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('is-in'); io.disconnect(); } }, { threshold: .15 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={'kit-reveal ' + className} style={{ transitionDelay: delay + 'ms' }} {...rest}>{children}</Tag>;
}

function SiteHeader({ route }) {
  const [solid, setSolid] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => { const f = () => setSolid(scrollY > 24); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f); }, []);
  // Mobile menu open: the page behind does not scroll and is out of reach (keyboard, screen readers); Esc closes it
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const behind = [document.getElementById('contenuto'), document.querySelector('.kit-footer')].filter(Boolean);
    behind.forEach((el) => el.setAttribute('inert', ''));
    const onKey = (e) => { if (e.key !== 'Escape') return; setOpen(false); const b = document.querySelector('.kit-burger'); b && b.focus(); };
    addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prev; behind.forEach((el) => el.removeAttribute('inert')); removeEventListener('keydown', onKey); };
  }, [open]);
  const top = route.split('/')[0];
  const current = (r) => top === r || (r === 'games' && top === 'game') || (r === 'lore' && top === 'read') ? 'page' : undefined;
  // the link to the page already open only closes the menu
  const close = (r) => (e) => { if (r === route) { e.preventDefault(); setOpen(false); } };
  return <>
    <header className={'kit-header' + (solid || open || top !== 'home' ? ' kit-header--solid' : '')}>
      <div className="kit-container kit-header__in">
        <Logo size={34} text="NEBULA INN" href={NB_HREF('home')} />
        <nav className="kit-nav" aria-label="Principale">
          {NAV.map(([r, l]) => <a key={r} href={NB_HREF(r)} aria-current={current(r)}>{l}</a>)}
        </nav>
        <div className="kit-header__actions">
          <ThemeToggle />
          <Button className="kit-header__cta" size="sm" icon="message-circle" href={NB_DATA.site.discord} target="_blank" rel="noopener">Discord</Button>
          <IconButton className="kit-burger" icon={open ? 'x' : 'menu'} label={open ? 'Chiudi menu' : 'Apri menu'} aria-expanded={open} aria-controls="kit-mobile-menu" variant="secondary" onClick={() => setOpen(!open)} />
        </div>
      </div>
    </header>
    {open && <nav id="kit-mobile-menu" className="kit-mobile" aria-label="Menu">{NAV.map(([r, l], i) => <a key={r} href={NB_HREF(r)} onClick={close(r)} aria-current={current(r)} style={{ animationDelay: i * 60 + 'ms' }}>{l}</a>)}
      <div style={{ marginTop: 24 }}><Button block size="lg" icon="message-circle" href={NB_HREF('join')} onClick={close('join')}>Entra nella Locanda</Button></div></nav>}
  </>;
}

function SiteFooter() {
  const l = (r, t) => <li><a href={NB_HREF(r)}>{t}</a></li>;
  // only the profiles that already have a real address: no buttons that lead nowhere
  const social = SOCIAL.filter(([k]) => /^https?:\/\//.test((NB_DATA.site.social || {})[k] || ''));
  return <footer className="kit-footer">
    <div className="kit-container">
      <div className="kit-footer__grid">
        <div style={{ display: 'grid', gap: 16, alignContent: 'start' }}>
          <Logo size={40} />
          <p style={{ color: 'var(--text-2)', maxWidth: '34ch' }}>{NB_DATA.site.tagline}.</p>
          <div style={{ display: 'flex', gap: 8 }}>
            <a className="nb-btn nb-btn--secondary nb-btn--icon" href={NB_DATA.site.discord} target="_blank" rel="noopener" aria-label="Discord"><Icon name="message-circle" /></a>
            {social.map(([k, label]) => <a key={k} className="nb-btn nb-btn--secondary nb-btn--icon" href={NB_DATA.site.social[k]} target="_blank" rel="noopener" aria-label={label}><Icon name={k} /></a>)}
          </div>
        </div>
        <div><h2>La locanda</h2><ul>{l('about', 'Chi siamo')}{l('lore', 'La storia')}{l('join', 'Unisciti')}</ul></div>
        <div><h2>Tavoli</h2><ul>{l('game/wow-forever', 'WoW Forever')}{l('games', 'Tutti i giochi')}</ul></div>
        <div><h2>Casa</h2><ul>{l('about/editto', 'Editto della Locanda')}{l('about/regolamento', 'Regolamento')}{l('join', 'Contatti')}</ul></div>
      </div>
      <div className="kit-footer__base"><span>© Nebula · Nebula Inn · Illustrazioni generate con l’intelligenza artificiale</span>{social.length < SOCIAL.length && <span>Social: <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--warn)' }}>[[LINK SOCIAL]]</code></span>}</div>
    </div>
  </footer>;
}

function Loader() {
  const [done, setDone] = React.useState(() => { try { return sessionStorage.getItem('nb-loaded') === '1'; } catch (e) { return false; } });
  React.useEffect(() => { if (done) return; const t = setTimeout(() => { setDone(true); try { sessionStorage.setItem('nb-loaded', '1'); } catch (e) {} }, 1100); return () => clearTimeout(t); }, []);
  return <div className={'kit-loader' + (done ? ' is-done' : '')} aria-hidden={done}><Logo size={88} wordmark={false} colorway="warm" /></div>;
}

Object.assign(globalThis, { Reveal, SiteHeader, SiteFooter, Loader });
