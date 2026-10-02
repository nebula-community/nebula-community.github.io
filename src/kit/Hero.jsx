const { Button: HeroButton } = globalThis.NebulaDesignSystem_8e7380;

function useEmbers(ref) {
  React.useEffect(() => {
    const c = ref.current; if (!c) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = c.getContext('2d'); let raf, w, h;
    const count = innerWidth < 700 ? 28 : 70;
    const cols = ['252,140,70', '238,70,98', '196,91,196', '243,238,247'];
    const resize = () => { const d = Math.min(devicePixelRatio, 2); w = c.clientWidth; h = c.clientHeight; c.width = w * d; c.height = h * d; ctx.setTransform(d, 0, 0, d, 0, 0); };
    resize(); addEventListener('resize', resize);
    const P = Array.from({ length: count }, () => ({ x: Math.random(), y: Math.random(), r: Math.random() * 1.8 + .4, s: Math.random() * .00035 + .0001, a: Math.random() * .6 + .2, c: cols[Math.random() * cols.length | 0], p: Math.random() * 6.28 }));
    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      for (const p of P) {
        if (!reduce) { p.y -= p.s; p.x += Math.sin(t / 2400 + p.p) * .00012; if (p.y < -.02) { p.y = 1.02; p.x = Math.random(); } }
        const tw = .6 + .4 * Math.sin(t / 700 + p.p);
        ctx.beginPath(); ctx.fillStyle = `rgba(${p.c},${p.a * tw})`; ctx.shadowColor = `rgba(${p.c},.9)`; ctx.shadowBlur = 8;
        ctx.arc(p.x * w, p.y * h, p.r, 0, 6.28); ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize); };
  }, []);
}

function useGrain() {
  return React.useMemo(() => {
    const c = document.createElement('canvas'); c.width = c.height = 160; const x = c.getContext('2d'); const d = x.createImageData(160, 160);
    for (let i = 0; i < d.data.length; i += 4) { const v = Math.random() * 255; d.data[i] = d.data[i + 1] = d.data[i + 2] = v; d.data[i + 3] = 255; }
    x.putImageData(d, 0, 0); return c.toDataURL();
  }, []);
}

function Hero({ go }) {
  const root = React.useRef(null), canvas = React.useRef(null);
  const layers = React.useRef([]);
  useEmbers(canvas);
  const grain = useGrain();
  React.useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || matchMedia('(pointer: coarse)').matches) return;
    let tx = 0, ty = 0, cx = 0, cy = 0, raf;
    const move = (e) => { tx = e.clientX / innerWidth - .5; ty = e.clientY / innerHeight - .5; };
    const loop = () => { cx += (tx - cx) * .06; cy += (ty - cy) * .06;
      layers.current.forEach((el, i) => { if (el) el.style.translate = `${-cx * (i + 1) * 14}px ${-cy * (i + 1) * 10}px`; });
      raf = requestAnimationFrame(loop); };
    addEventListener('pointermove', move); raf = requestAnimationFrame(loop);
    return () => { removeEventListener('pointermove', move); cancelAnimationFrame(raf); };
  }, []);
  const L = (i) => (el) => (layers.current[i] = el);
  const words = ['Nebula', 'Inn'];
  let k = 0;
  const video = NB_DATA.site.heroVideo;
  return <section className="kit-hero" ref={root} data-screen-label="Hero">
    {video ? <video className="kit-hero__video" src={video} poster={NB_DATA.site.heroPoster} autoPlay muted loop playsInline /> : <>
      <div className="kit-hero__layer kit-hero__art" ref={L(0)} />
      <div className="kit-hero__layer kit-hero__rays" ref={L(1)} />
      <div className="kit-hero__layer kit-hero__mesh" ref={L(2)} />
      <div className="kit-hero__layer kit-hero__fog" ref={L(3)} />
    </>}
    <canvas className="kit-hero__canvas" ref={canvas} aria-hidden="true" />
    <div className="kit-hero__shade" />
    <div className="kit-hero__grain" style={{ backgroundImage: `url(${grain})` }} />
    <div className="kit-hero__content">
      <div className="nb-eyebrow kit-hero__eyebrow">{NB_DATA.site.tagline}</div>
      <h1 className="kit-hero__title" aria-label="Nebula Inn">
        {words.map(w => <span className="kit-hero__word" key={w} aria-hidden="true">{w.split('').map(ch => <span className="kit-hero__ch" key={k} style={{ animationDelay: 300 + (k++) * 70 + 'ms' }}>{ch}</span>)}</span>)}
      </h1>
      <p className="kit-hero__sub">Se hai già attraversato altri server senza fermarti da nessuna parte, sei in buona compagnia.</p>
      <div className="kit-hero__ctas">
        <HeroButton size="lg" icon="message-circle" onClick={() => go('join')}>Entra nella Locanda</HeroButton>
        <HeroButton size="lg" variant="secondary" iconRight="arrow-right" onClick={() => go('lore')}>Leggi la storia</HeroButton>
      </div>
    </div>
    <button className="kit-scroll" onClick={() => scrollTo({ top: innerHeight - 40, behavior: 'smooth' })}><i />Scorri</button>
  </section>;
}

Object.assign(globalThis, { Hero });
