import React from 'react';
export function Logo({ size = 40, wordmark = true, text = 'NEBULA', layout = 'row', colorway = 'auto', href, className, ...rest }) {
  const cls = ['nb-logo', layout === 'stack' && 'nb-logo--stack', colorway !== 'auto' && 'nb-logo--' + colorway, className].filter(Boolean).join(' ');
  const inner = <><span className="nb-logo__mark" style={{ width: size, height: size * 1.054 }} aria-hidden="true" />{wordmark && <span className="nb-logo__word" style={{ fontSize: size * 0.5 }}>{text}</span>}</>;
  return href ? <a className={cls} href={href} aria-label="Nebula — home" {...rest}>{inner}</a> : <span className={cls} role="img" aria-label="Nebula" {...rest}>{inner}</span>;
}
