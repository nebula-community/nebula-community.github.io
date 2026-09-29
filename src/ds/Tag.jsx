import React from 'react';
export function Tag({ selected, children, className, ...rest }) {
  return <button type="button" aria-pressed={!!selected} className={['nb-tag', className].filter(Boolean).join(' ')} {...rest}>{children}</button>;
}
