import React from 'react';
export function Input({ label, hint, error, multiline, id, className, ...rest }) {
  const auto = React.useId();
  const fid = id || auto;
  const El = multiline ? 'textarea' : 'input';
  return <div className={['nb-field', className].filter(Boolean).join(' ')}>
    {label && <label className="nb-label" htmlFor={fid}>{label}</label>}
    <El id={fid} className="nb-input" aria-invalid={!!error} aria-describedby={hint || error ? fid + '-h' : undefined} {...rest} />
    {(error || hint) && <div id={fid + '-h'} className={error ? 'nb-hint nb-hint--err' : 'nb-hint'}>{error || hint}</div>}
  </div>;
}
