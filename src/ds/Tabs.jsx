import React from 'react';
export function Tabs({ tabs = [], value, onChange, variant = 'pill', label }) {
  return <div role="tablist" aria-label={label} className={['nb-tabs', variant === 'underline' && 'nb-tabs--underline'].filter(Boolean).join(' ')}>
    {tabs.map(t => { const id = typeof t === 'string' ? t : t.value; const l = typeof t === 'string' ? t : t.label;
      return <button key={id} role="tab" className="nb-tab" aria-selected={value === id} onClick={() => onChange && onChange(id)}>{l}</button>; })}
  </div>;
}
