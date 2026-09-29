// Build-time content loader (generated from the UI kit loader) — mirrors the data-provider layer of the real build.
// Reads /content (JSON + Markdown with frontmatter) and exposes the shapes the screens use.
// In the Astro build this runs at build time (getStaticPaths / content collections); here it runs in the browser.
import fs from 'node:fs';
import path from 'node:path';
let cache;
export async function loadContent() {
  if (cache) return cache;
  const window = {};
  const ROOT = path.join(process.cwd(), 'content');
  const MEDIA = 'media/'; // served from public/media, resolved against <base href>
  const media = (p) => (p && p.startsWith('media/') ? MEDIA + p.slice(6) : p);
  const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
  const get = async (p) => {
    if (p === 'lore/index.json') return { chapters: fs.readdirSync(path.join(ROOT, 'lore')).filter((f) => /^\d\d-.*\.md$/.test(f)).sort().map((f) => ({ id: frontmatter(read('lore/' + f)).data.id, file: f })) };
    if (p === 'games/index.json') return { games: fs.readdirSync(path.join(ROOT, 'games'), { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name) };
    const s = read(p); return p.endsWith('.json') ? JSON.parse(s) : s;
  };

  function frontmatter(src) {
    const m = src.match(/^---\n([\s\S]*?)\n---\n?/);
    if (!m) return { data: {}, body: src };
    const data = {};
    m[1].split('\n').forEach((l) => { const i = l.indexOf(':'); if (i < 0) return; const k = l.slice(0, i).trim(), v = l.slice(i + 1).trim(); try { data[k] = JSON.parse(v); } catch (e) { data[k] = v; } });
    return { data, body: src.slice(m[0].length) };
  }
  // Minimal Markdown → blocks: ## heading · paragraph · "- **T** — text" list · "> verse" · "> [!nota] text" · "— Firma"
  function blocks(md) {
    return md.trim().split(/\n\s*\n/).map((chunk) => {
      const lines = chunk.split('\n');
      if (chunk.startsWith('## ')) return { h: chunk.slice(3).trim() };
      if (lines.every((l) => l.startsWith('>'))) {
        if (lines[0].startsWith('> [!nota]')) return { note: lines.map((l) => l.replace(/^>\s?/, '')).join(' ').replace('[!nota]', '').trim() };
        return { v: lines.map((l) => l.replace(/^>\s?/, '')) };
      }
      if (lines.every((l) => l.startsWith('- '))) return { li: lines.map((l) => { const m = l.match(/^- \*\*(.+?)\*\*\s*—\s*(.*)$/); return m ? [m[1], m[2]] : [l.slice(2), '']; }) };
      if (chunk.startsWith('— ')) return { sign: chunk.trim() };
      return { p: lines.join(' ').trim() };
    });
  }
  const paras = (md) => md.trim().split(/\n\s*\n/).map((s) => s.replace(/\n/g, ' ').trim());
  const dm = (d) => { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(d || ''); const M = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic']; return m ? [m[3], M[+m[2] - 1]] : ['[[GG]]', '[[MES]]']; };

  window.NB_READY = (async () => {
    const [site, locanda, editto, reg, loreIdx, gamesIdx] = await Promise.all([get('site.json'), get('pages/locanda.md'), get('pages/editto.md'), get('pages/regolamento.json'), get('lore/index.json'), get('games/index.json')]);
    const chapters = await Promise.all(loreIdx.chapters.map(async (c) => { const { data, body } = frontmatter(await get('lore/' + c.file)); const text = body.trim(); return { id: data.id, n: data.numeral, kind: data.kind, title: data.title, cover: media(data.cover), minutes: data.minutes, body: text.startsWith('[[') ? null : paras(text) }; }));
    chapters.sort((a, b) => loreIdx.chapters.findIndex((c) => c.id === a.id) - loreIdx.chapters.findIndex((c) => c.id === b.id));
    const games = await Promise.all(gamesIdx.games.map((s) => get('games/' + s + '/game.json')));
    games.sort((a, b) => a.order - b.order);
    const wow = games.find((g) => g.slug === 'wow-forever');
    const [faq, app, ranks, events] = await Promise.all(['faq', 'application', 'ranks', 'events'].map((n) => get('games/wow-forever/' + n + '.json')));
    const [gallery, progress, roster, recruitment] = await Promise.all(['gallery', 'progress', 'roster', 'recruitment'].map((n) => get('games/wow-forever/' + n + '.json')));
    progress.instances.forEach((i) => { i.cover = media(i.cover); });
    const L = frontmatter(locanda), E = frontmatter(editto);
    const factions = (wow.factions || []).filter((f) => f.active);
    const mode = factions.length > 1 ? 'multi' : 'single';
    const fit = (x) => !x.onlyIf || x.onlyIf === mode;

    window.NB_DATA = {
      site: { name: site.name, place: site.place, tagline: site.tagline, discord: site.discord.invite, discordCode: site.discord.code, heroVideo: site.hero.video, social: site.social },
      games: games.map((g) => ({ slug: g.slug, placeholder: !!g.placeholder, title: g.title, section: g.section, status: g.status, genre: g.genre, tags: g.tags, image: media(g.card.image), logo: media(g.card.logo), description: g.card.description, heroImage: media((g.hero || g.card).image), lead: g.hero && g.hero.lead })),
      chapters,
      events: [],
      wow: { spec: [...wow.info.server.map((s) => [s.label, s.value]), ['Fazioni', (wow.factions || []).filter((f) => f.active).map((f) => f.name + ' (' + f.faction + ')').join(' · ')]], patto: wow.pact.rules.map((r) => [r.icon, r.title, r.text]), nonFa: wow.pact.notForYou, gallery: gallery.items.map((i) => ({ ...i, src: media(i.src) })) }
    };
    window.NB_CONTENT = {
      locanda: { title: L.data.title, sub: L.data.subtitle, teaser: L.data.teaser, blocks: blocks(L.body) },
      editto: { title: E.data.title, sub: E.data.subtitle, teaser: E.data.teaser, blocks: blocks(E.body) },
      regolamento: { title: reg.title, sub: reg.subtitle, teaser: reg.teaser, groups: reg.groups.map((g) => ({ t: g.title, icon: g.icon, items: g.rules.map((r) => [r.rule, r.why]) })), toxic: reg.toxicity, scale: reg.scale.map((s) => [s.step, s.text]), apply: reg.enforcement.map((e) => [e.title, e.text]) }
    };
    window.NB_WOW = {
      factions, factionMode: mode, tabs: wow.tabs, copy: wow.copy || {}, hero: wow.hero, pactCopy: (wow.copy || {}).pact,
      who: wow.info.who.filter(fit).map((w) => [w.title, w.text]), extraSpec: [],
      roles: wow.info.roles.map((r) => [r.icon, r.title, r.text]), firstDay: wow.info.firstDay.map((f) => [f.title, f.text]),
      loot: { rules: wow.loot.rules.map((r) => [r.title, r.text]), costs: wow.loot.costs.map((c) => [String(c.credits), c.what]), source: wow.loot.source },
      faq: faq.groups.map((g) => [g.title, g.items.filter(fit).map((i) => [i.q, i.a])]),
      application: { intro: app.intro, groups: app.groups.map((g) => [g.title, g.questions]), note: app.note },
      ranks,
      calendar: events, progress, roster, recruitment
    };
  })();
  await window.NB_READY;
  const NB_LOOT = JSON.parse(fs.readFileSync(path.join(ROOT, 'games/wow-forever/loot.json'), 'utf8'));
  cache = { NB_DATA: window.NB_DATA, NB_CONTENT: window.NB_CONTENT, NB_WOW: window.NB_WOW, NB_LOOT };
  return cache;
}

