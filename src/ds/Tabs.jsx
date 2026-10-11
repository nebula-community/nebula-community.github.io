import React from 'react';
// Tabs that switch content on the same page (WAI-ARIA tabs): arrows, Home and End move between them.
// id names the tabs (id-tab-<value>), panelId is the element they control.
// collapse: on phones and tablets (≤ 900px) the tabs turn into a select, which is easier to reach and read when there are many.
export function Tabs({ tabs = [], value, onChange, variant = 'pill', label, id, panelId, collapse }) {
  const auto = React.useId();
  const base = id || auto;
  const refs = React.useRef({});
  const list = tabs.map((t) => typeof t === 'string' ? { value: t, label: t } : t);
  // the selected tab stays visible in a bar that scrolls sideways (narrow screens); only the bar moves, never the page
  React.useEffect(() => {
    const el = refs.current[value], bar = el && el.parentElement;
    if (!bar || bar.scrollWidth <= bar.clientWidth) return;
    const b = bar.getBoundingClientRect(), r = el.getBoundingClientRect();
    if (r.left < b.left) bar.scrollLeft += r.left - b.left - 24;
    else if (r.right > b.right) bar.scrollLeft += r.right - b.right + 24;
  }, [value]);
  const onKey = (e, i) => {
    const n = list.length;
    const j = e.key === 'ArrowRight' ? (i + 1) % n : e.key === 'ArrowLeft' ? (i - 1 + n) % n : e.key === 'Home' ? 0 : e.key === 'End' ? n - 1 : -1;
    if (j < 0) return;
    e.preventDefault();
    onChange && onChange(list[j].value);
    const el = refs.current[list[j].value]; el && el.focus();
  };
  return <>
  {collapse && <select className="nb-input nb-select nb-tabselect" aria-label={label} value={value} onChange={(e) => onChange && onChange(e.target.value)}>{list.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}</select>}
  <div role="tablist" aria-label={label} className={['nb-tabs', variant === 'underline' && 'nb-tabs--underline', collapse && 'nb-tabs--collapse'].filter(Boolean).join(' ')}>
    {list.map((t, i) => <button key={t.value} ref={(el) => { refs.current[t.value] = el; }} type="button" role="tab" id={base + '-tab-' + t.value}
      aria-controls={panelId} aria-selected={value === t.value} tabIndex={value === t.value ? 0 : -1} className="nb-tab"
      onClick={() => onChange && onChange(t.value)} onKeyDown={(e) => onKey(e, i)}>{t.label}</button>)}
  </div>
  </>;
}

// Same look, but each item is a separate page: links with aria-current, inside a nav.
export function TabNav({ items = [], current, label, variant = 'underline', collapse }) {
  return <nav aria-label={label} className={collapse ? 'nb-tabnav--collapse' : undefined}>
    {collapse && <select className="nb-input nb-select nb-tabselect" aria-label={label} value={current} onChange={(e) => { const it = items.find((x) => x.value === e.target.value); if (it) location.href = it.href; }}>{items.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}</select>}
    <div className={['nb-tabs', variant === 'underline' && 'nb-tabs--underline'].filter(Boolean).join(' ')}>
    {items.map((t) => <a key={t.value} className="nb-tab" href={t.href} aria-current={current === t.value ? 'page' : undefined}>{t.label}</a>)}
  </div></nav>;
}
