import React from 'react';
export function Badge({ tone = 'neutral', dot, children, className, ...rest }) {
  return <span className={['nb-badge', tone !== 'neutral' && 'nb-badge--' + tone, className].filter(Boolean).join(' ')} {...rest}>{dot && <span className="nb-badge__dot" />}{children}</span>;
}
