import React from 'react';
import { Badge } from './Badge.jsx';
export function ChapterCard({ number, title, meta, cover, state, href = '#', onClick }) {
  return <a className={['nb-chapter', state === 'locked' && 'nb-chapter--locked'].filter(Boolean).join(' ')} href={href} onClick={onClick}>
    <div className="nb-chapter__cover" style={{ backgroundImage: cover ? `url(${cover})` : undefined }}>
      {state === 'new' && <span style={{ position: 'absolute', top: 12, left: 12, zIndex: 1 }}><Badge tone="accent">Nuovo</Badge></span>}
      {state === 'reading' && <span style={{ position: 'absolute', top: 12, left: 12, zIndex: 1 }}><Badge tone="ok" dot>In lettura</Badge></span>}
      <span className="nb-chapter__num">{number}</span>
    </div>
    <div style={{ display: 'grid', gap: 4 }}><div className="nb-chapter__title">{title}</div>{meta && <div className="nb-chapter__meta">{meta}</div>}</div>
  </a>;
}
