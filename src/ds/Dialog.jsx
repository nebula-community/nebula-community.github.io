import React from 'react';
import { IconButton } from './IconButton.jsx';
export function Dialog({ open, title, onClose, footer, children }) {
  React.useEffect(() => { if (!open) return; const k = e => e.key === 'Escape' && onClose && onClose(); addEventListener('keydown', k); return () => removeEventListener('keydown', k); }, [open, onClose]);
  if (!open) return null;
  return <div className="nb-dialog-scrim" onClick={e => e.target === e.currentTarget && onClose && onClose()}>
    <div className="nb-dialog" role="dialog" aria-modal="true" aria-label={title}>
      <div className="nb-dialog__head"><div className="nb-dialog__title">{title}</div>{onClose && <IconButton icon="x" label="Chiudi" size="sm" onClick={onClose} />}</div>
      <div style={{ font: 'var(--type-body)', color: 'var(--text-2)' }}>{children}</div>
      {footer && <div className="nb-dialog__foot">{footer}</div>}
    </div>
  </div>;
}
