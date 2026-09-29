import React from 'react';
export function Checkbox({ label, type = 'checkbox', className, ...rest }) {
  return <label className={['nb-check', className].filter(Boolean).join(' ')}><input type={type} {...rest} /><span>{label}</span></label>;
}
