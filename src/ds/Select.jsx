import React from 'react';
export function Select({ label, hint, options = [], id, className, ...rest }) {
  const auto = React.useId();
  const fid = id || auto;
  return <div className={['nb-field', className].filter(Boolean).join(' ')}>
    {label && <label className="nb-label" htmlFor={fid}>{label}</label>}
    <select id={fid} className="nb-input nb-select" {...rest}>
      {options.map(o => typeof o === 'string' ? <option key={o}>{o}</option> : <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
    {hint && <div className="nb-hint">{hint}</div>}
  </div>;
}
