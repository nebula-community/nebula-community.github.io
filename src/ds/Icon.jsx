import React from 'react';
const CDN = 'https://unpkg.com/lucide-static@0.460.0/icons/';
/** Lucide icon rendered as a CSS mask so it inherits currentColor. */
export function Icon({ name, size = 20, label, className, style, ...rest }) {
  return <span role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}
    className={['nb-icon', className].filter(Boolean).join(' ')}
    style={{ width: size, height: size, '--src': `url(${CDN}${name}.svg)`, ...style }} {...rest} />;
}
