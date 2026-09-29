import React from 'react';
/** Big Atomed number that counts up once when scrolled into view. */
export function StatCounter({ value, label, suffix = '', duration = 1400 }) {
  const ref = React.useRef(null);
  const [n, setN] = React.useState(0);
  const num = typeof value === 'number' ? value : null;
  React.useEffect(() => {
    if (num == null) return;
    const el = ref.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) { setN(num); return; }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      const t0 = performance.now();
      const tick = (t) => { const p = Math.min(1, (t - t0) / duration); setN(Math.round(num * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }, { threshold: .4 });
    io.observe(el); return () => io.disconnect();
  }, [num, duration]);
  return <div className="nb-stat" ref={ref}><div className="nb-stat__value">{num == null ? value : n.toLocaleString('it-IT')}{suffix}</div><div className="nb-stat__label">{label}</div></div>;
}
