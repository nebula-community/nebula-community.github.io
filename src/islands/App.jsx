// Island entry: sets the globals the screens expect, then renders the route.
import React from 'react';
import './runtime.js';
import '../kit/Shell.jsx';
import '../kit/Pages.jsx';
import '../kit/Hero.jsx';
import '../kit/Home.jsx';
import '../kit/Lore.jsx';
import '../kit/Wow.jsx';
import '../kit/Games.jsx';

const PATHS = { home: '', about: 'chi-siamo/', lore: 'lore/', games: 'giochi/', join: 'unisciti/' };
function toPath(r) {
  const [top, arg] = r.split('/');
  if (top === 'about' && arg) return 'chi-siamo/' + arg + '/';
  if (top === 'read') return 'lore/' + arg + '/';
  if (top === 'game') return 'giochi/' + arg + '/';
  return PATHS[top] ?? '';
}

// A screen that fails to render shows a way out instead of a blank page.
class Boundary extends React.Component {
  constructor(props) { super(props); this.state = { failed: false }; }
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(err) { console.error(err); }
  render() {
    if (!this.state.failed) return this.props.children;
    return <main className="kit-page"><section className="kit-phero"><div className="kit-container kit-phero__in">
      <div className="nb-eyebrow">Qualcosa si è inceppato</div>
      <h1 className="kit-h1">Questa pagina non si è caricata.</h1>
      <p className="kit-lead">Prova a ricaricarla. Se succede di nuovo, scrivici su Discord.</p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <a className="nb-btn nb-btn--primary nb-btn--lg" href={location.href}>Ricarica la pagina</a>
        {this.props.discord && <a className="nb-btn nb-btn--secondary nb-btn--lg" href={this.props.discord} target="_blank" rel="noopener">Apri il Discord</a>}
      </div>
    </div></section></main>;
  }
}

export default function App({ route, data, base }) {
  Object.assign(globalThis, data);
  // Internal links are real URLs (one static page per route): they open in a new tab, can be copied and are followed by search engines.
  globalThis.NB_HREF = (r) => base + toPath(r);
  const go = (r) => { if (r !== route) location.href = NB_HREF(r); };
  const [top, arg] = route.split('/');
  let page;
  if (top === 'lore') page = <LoreIndex go={go} />;
  else if (top === 'read') page = <Reader id={arg} go={go} />;
  else if (top === 'games') page = <GamesIndex go={go} />;
  else if (top === 'game') page = <GamePage go={go} />;
  else if (top === 'about') page = <AboutPage sub={arg} go={go} />;
  else if (top === 'join') page = <main className="kit-page"><Join standalone /></main>;
  else page = <HomePage go={go} />;
  const discord = data.NB_DATA && data.NB_DATA.site.discord;
  // <base href> makes "#id" point at the home page: the skip link moves focus itself.
  const skip = (e) => { e.preventDefault(); const t = document.getElementById('contenuto'); if (t) t.focus(); };
  return <Boundary discord={discord}>
    <a className="kit-skip" href={location.pathname + '#contenuto'} onClick={skip}>Vai al contenuto</a>
    <Loader /><SiteHeader route={route} go={go} />
    <div key={route} id="contenuto" tabIndex={-1}><Boundary discord={discord}>{page}</Boundary></div>
    <SiteFooter go={go} />
  </Boundary>;
}
