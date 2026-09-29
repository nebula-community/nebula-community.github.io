const { Logo, Button, IconButton, ThemeToggle, Icon } = globalThis.NebulaDesignSystem_8e7380;

const NAV = [['home', 'Home'], ['about', 'Chi siamo'], ['lore', 'Lore'], ['games', 'Giochi'], ['join', 'Unisciti']];

function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('is-in'); io.disconnect(); } }, { threshold: .15 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={'kit-reveal ' + className} style={{ transitionDelay: delay + 'ms' }} {...rest}>{children}</Tag>;
}

function SiteHeader({ route, go }) {
  const [solid, setSolid] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => { const f = () => setSolid(scrollY > 24); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f); }, []);
  const nav = (r) => (e) => { e.preventDefault(); setOpen(false); go(r); };
  const top = route.split('/')[0];
  return <>
    <header className={'kit-header' + (solid || top !== 'home' ? ' kit-header--solid' : '')}>
      <div className="kit-container kit-header__in">
        <Logo size={34} text="NEBULA INN" href="#home" onClick={nav('home')} />
        <nav className="kit-nav" aria-label="Principale">
          {NAV.map(([r, l]) => <a key={r} href={'#' + r} onClick={nav(r)} aria-current={top === r || (r === 'games' && top === 'game') || (r === 'lore' && top === 'read') ? 'page' : undefined}>{l}</a>)}
        </nav>
        <div className="kit-header__actions">
          <ThemeToggle />
          <Button className="kit-header__cta" size="sm" icon="message-circle" href={NB_DATA.site.discord} target="_blank" rel="noopener">Discord</Button>
          <IconButton className="kit-burger" icon={open ? 'x' : 'menu'} label={open ? 'Chiudi menu' : 'Apri menu'} variant="secondary" onClick={() => setOpen(!open)} />
        </div>
      </div>
    </header>
    {open && <div className="kit-mobile">{NAV.map(([r, l], i) => <a key={r} href={'#' + r} onClick={nav(r)} style={{ animationDelay: i * 60 + 'ms' }}>{l}</a>)}
      <div style={{ marginTop: 24 }}><Button block size="lg" icon="message-circle" onClick={() => { setOpen(false); go('join'); }}>Entra nella Locanda</Button></div></div>}
  </>;
}

function SiteFooter({ go }) {
  const l = (r, t) => <li><a href={'#' + r} onClick={(e) => { e.preventDefault(); go(r); }}>{t}</a></li>;
  return <footer className="kit-footer">
    <div className="kit-container">
      <div className="kit-footer__grid">
        <div style={{ display: 'grid', gap: 16, alignContent: 'start' }}>
          <Logo size={40} />
          <p style={{ color: 'var(--text-2)', maxWidth: '34ch' }}>{NB_DATA.site.tagline}.</p>
          <div style={{ display: 'flex', gap: 8 }}>
            <a className="nb-btn nb-btn--secondary nb-btn--icon" href={NB_DATA.site.discord} target="_blank" rel="noopener" aria-label="Discord"><Icon name="message-circle" /></a>
            <IconButton icon="youtube" label="YouTube" variant="secondary" />
            <IconButton icon="instagram" label="Instagram" variant="secondary" />
            <IconButton icon="twitch" label="Twitch" variant="secondary" />
          </div>
        </div>
        <div><h4>La locanda</h4><ul>{l('about', 'Chi siamo')}{l('lore', 'La storia')}{l('join', 'Unisciti')}</ul></div>
        <div><h4>Tavoli</h4><ul>{l('game/wow-forever', 'WoW Forever')}{l('games', 'Tutti i giochi')}</ul></div>
        <div><h4>Casa</h4><ul>{l('read/editto', 'Editto della Locanda')}{l('about/regolamento', 'Regolamento')}{l('join', 'Contatti')}</ul></div>
      </div>
      <div className="kit-footer__base"><span>© Nebula · Nebula Inn</span><span>Social: <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--warn)' }}>[[LINK SOCIAL]]</code></span></div>
    </div>
  </footer>;
}

function Loader() {
  const [done, setDone] = React.useState(() => { try { return sessionStorage.getItem('nb-loaded') === '1'; } catch (e) { return false; } });
  React.useEffect(() => { if (done) return; const t = setTimeout(() => { setDone(true); try { sessionStorage.setItem('nb-loaded', '1'); } catch (e) {} }, 1100); return () => clearTimeout(t); }, []);
  return <div className={'kit-loader' + (done ? ' is-done' : '')} aria-hidden={done}><Logo size={88} wordmark={false} colorway="warm" /></div>;
}

Object.assign(globalThis, { Reveal, SiteHeader, SiteFooter, Loader });
