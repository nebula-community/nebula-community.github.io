import React from 'react';
// Opens on hover, keyboard focus and tap (touch screens have no hover); Esc closes it.
// The bubble is nudged sideways so it never leaves the screen on narrow viewports.
export function Tooltip({ text, open, children }) {
  const [shown, setShown] = React.useState(false);
  const tip = React.useRef(null);
  const root = React.useRef(null);
  const id = React.useId();
  // a tap anywhere else closes it (iOS does not move focus on tap, so blur alone is not enough)
  React.useEffect(() => {
    if (!shown) return;
    const out = (e) => { if (root.current && !root.current.contains(e.target)) setShown(false); };
    document.addEventListener('pointerdown', out);
    return () => document.removeEventListener('pointerdown', out);
  }, [shown]);
  // computed from the trigger and the bubble width, not from the bubble's (possibly animating) position
  const place = () => {
    const b = tip.current, rt = root.current;
    if (!b || !rt) return;
    const r = rt.getBoundingClientRect(), w = b.offsetWidth, pad = 8;
    const left = r.left + r.width / 2 - w / 2, right = left + w;
    const shift = left < pad ? pad - left : right > innerWidth - pad ? innerWidth - pad - right : 0;
    b.style.setProperty('--nb-tip-shift', shift + 'px');
  };
  return <span ref={root} className={['nb-tooltip', (open || shown) && 'nb-tooltip--open'].filter(Boolean).join(' ')} onMouseEnter={place}>
    <button type="button" className="nb-tooltip__trigger" aria-describedby={id}
      onFocus={place} onClick={() => { place(); setShown((v) => !v); }} onBlur={() => setShown(false)}
      onKeyDown={(e) => { if (e.key === 'Escape') setShown(false); }}>{children}</button>
    <span ref={tip} id={id} className="nb-tooltip__bubble" role="tooltip">{text}</span>
  </span>;
}
