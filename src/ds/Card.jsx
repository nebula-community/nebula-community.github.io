import React from 'react';
/** Surface container. interactive = 3D tilt + glow that follows the cursor (disabled on touch / reduced motion). */
export function Card({ interactive, padded = true, as: Tag = 'div', children, className, style, ...rest }) {
  const ref = React.useRef(null);
  const onMove = (e) => {
    const el = ref.current; if (!el || !interactive) return;
    const r = el.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.style.setProperty('--mx', x * 100 + '%'); el.style.setProperty('--my', y * 100 + '%');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 8}deg) translateY(-2px)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = ''; };
  return <Tag ref={ref} onPointerMove={onMove} onPointerLeave={onLeave} style={style}
    className={['nb-card', padded && 'nb-card--pad', interactive && 'nb-card--interactive', className].filter(Boolean).join(' ')} {...rest}>
    {interactive && <span className="nb-card__glow" aria-hidden="true" />}{children}
  </Tag>;
}
