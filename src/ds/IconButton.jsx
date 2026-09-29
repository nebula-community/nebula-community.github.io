import React from 'react';
import { Icon } from './Icon.jsx';
export function IconButton({ icon, label, variant = 'ghost', size = 'md', className, ...rest }) {
  const cls = ['nb-btn', 'nb-btn--' + variant, 'nb-btn--icon', size !== 'md' && 'nb-btn--' + size, className].filter(Boolean).join(' ');
  return <button className={cls} aria-label={label} title={label} {...rest}><Icon name={icon} size={size === 'sm' ? 16 : 20} /></button>;
}
