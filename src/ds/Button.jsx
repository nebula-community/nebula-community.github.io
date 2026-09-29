import React from 'react';
import { Icon } from './Icon.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');
export function Button({ variant = 'primary', size = 'md', block, icon, iconRight, href, children, className, ...rest }) {
  const cls = cx('nb-btn', 'nb-btn--' + variant, size !== 'md' && 'nb-btn--' + size, block && 'nb-btn--block', className);
  const s = size === 'sm' ? 16 : 18;
  const inner = <>{icon && <Icon name={icon} size={s} />}{children}{iconRight && <Icon name={iconRight} size={s} />}</>;
  return href ? <a className={cls} href={href} {...rest}>{inner}</a> : <button className={cls} {...rest}>{inner}</button>;
}
