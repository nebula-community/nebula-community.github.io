import React from 'react';
import { IconButton } from './IconButton.jsx';
const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
// Modal: focus moves inside on open, Tab stays inside, Esc closes, and focus goes back to what opened it.
export function Dialog({ open, title, onClose, footer, children }) {
  const box = React.useRef(null);
  const close = React.useRef(onClose);
  close.current = onClose;
  React.useEffect(() => {
    if (!open) return;
    const back = document.activeElement;
    const el = box.current;
    const first = el && el.querySelector(FOCUSABLE);
    (first || el) && (first || el).focus();
    const k = (e) => {
      if (e.key === 'Escape') { close.current && close.current(); return; }
      if (e.key !== 'Tab' || !el) return;
      const f = [...el.querySelectorAll(FOCUSABLE)];
      if (!f.length) { e.preventDefault(); return; }
      const a = f[0], z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
      else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    };
    addEventListener('keydown', k);
    return () => { removeEventListener('keydown', k); if (back && back.focus) back.focus(); };
  }, [open]);
  if (!open) return null;
  return <div className="nb-dialog-scrim" onClick={e => e.target === e.currentTarget && onClose && onClose()}>
    <div ref={box} className="nb-dialog" role="dialog" aria-modal="true" aria-label={title} tabIndex={-1}>
      <div className="nb-dialog__head"><div className="nb-dialog__title">{title}</div>{onClose && <IconButton icon="x" label="Chiudi" size="sm" onClick={onClose} />}</div>
      <div style={{ font: 'var(--type-body)', color: 'var(--text-2)' }}>{children}</div>
      {footer && <div className="nb-dialog__foot">{footer}</div>}
    </div>
  </div>;
}
