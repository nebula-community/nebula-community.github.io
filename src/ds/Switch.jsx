import React from 'react';
export function Switch({ label, className, ...rest }) {
  return <label className={['nb-switch', className].filter(Boolean).join(' ')}><input type="checkbox" role="switch" {...rest} /><span>{label}</span></label>;
}
