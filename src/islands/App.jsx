// Island entry: sets the globals the screens expect, then renders the route.
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

export default function App({ route, data, base }) {
  Object.assign(globalThis, data);
  const go = (r) => { if (r !== route) location.href = base + toPath(r); };
  const [top, arg] = route.split('/');
  let page;
  if (top === 'lore') page = <LoreIndex go={go} />;
  else if (top === 'read') page = <Reader id={arg} go={go} />;
  else if (top === 'games') page = <GamesIndex go={go} />;
  else if (top === 'game') page = <GamePage go={go} />;
  else if (top === 'about') page = <AboutPage sub={arg} go={go} />;
  else if (top === 'join') page = <main className="kit-page"><Join standalone /></main>;
  else page = <HomePage go={go} />;
  return <><Loader /><SiteHeader route={route} go={go} /><div key={route}>{page}</div><SiteFooter go={go} /></>;
}
