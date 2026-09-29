import React from 'react';
export function ProgressBar({ value = 0, label, style }) {
  const v = Math.max(0, Math.min(100, value));
  return <div className="nb-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(v)} aria-label={label} style={style}><div className="nb-progress__bar" style={{ width: v + '%' }} /></div>;
}
