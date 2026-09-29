import React from 'react';
import { Icon } from './Icon.jsx';
import { IconButton } from './IconButton.jsx';
const ICON = { info: 'sparkles', ok: 'check-circle-2', warn: 'wifi-off', err: 'alert-triangle' };
export function Toast({ tone = 'info', title, children, onClose }) {
  return <div className={'nb-toast nb-toast--' + tone} role="status">
    <span className="nb-toast__icon"><Icon name={ICON[tone]} size={20} /></span>
    <div style={{ flex: 1, display: 'grid', gap: 2 }}><div className="nb-toast__title">{title}</div>{children && <div className="nb-toast__text">{children}</div>}</div>
    {onClose && <IconButton icon="x" label="Chiudi" size="sm" onClick={onClose} />}
  </div>;
}
