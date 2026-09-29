import React from 'react';
import { Icon } from './Icon.jsx';
const KEY = 'nb-theme';
const current = () => document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
/** Dark (warm) ⇄ light (cool). Circle-wipe via View Transitions where supported; persists to localStorage. */
export function ThemeToggle({ onChange }) {
  const [theme, setTheme] = React.useState('dark');
  React.useEffect(() => {
    const saved = localStorage.getItem(KEY);
    const t = saved || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', t); setTheme(t);
  }, []);
  const toggle = (e) => {
    const next = current() === 'light' ? 'dark' : 'light';
    const apply = () => { document.documentElement.setAttribute('data-theme', next); localStorage.setItem(KEY, next); setTheme(next); onChange && onChange(next); };
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || reduce) return apply();
    const x = e.clientX, y = e.clientY, r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    document.startViewTransition(apply).ready.then(() => document.documentElement.animate(
      { clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
      { duration: 620, easing: 'cubic-bezier(.65,0,.35,1)', pseudoElement: '::view-transition-new(root)' }));
  };
  return <button className="nb-theme-toggle" onClick={toggle} aria-label={theme === 'light' ? 'Passa al tema scuro' : 'Passa al tema chiaro'}>
    <Icon name={theme === 'light' ? 'moon' : 'sun'} size={18} />
  </button>;
}
