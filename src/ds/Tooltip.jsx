import React from 'react';
export function Tooltip({ text, open, children }) {
  return <span className={['nb-tooltip', open && 'nb-tooltip--open'].filter(Boolean).join(' ')}>{children}<span className="nb-tooltip__bubble" role="tooltip">{text}</span></span>;
}
