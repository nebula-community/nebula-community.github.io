// Checks every file in content/ before the build. Exit 1 = the deploy stops and the live site stays as it was.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'content';
const CLASSES = ['warrior', 'paladin', 'hunter', 'rogue', 'priest', 'shaman', 'mage', 'warlock', 'druid'];
const errors = [];
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);

for (const f of walk(ROOT)) {
  const src = fs.readFileSync(f, 'utf8');
  if (f.endsWith('.json')) {
    let j;
    try { j = JSON.parse(src); } catch (e) { errors.push(`${f}: JSON non valido — ${e.message}`); continue; }
    if (f.endsWith('loot.json')) (j.seasons || []).forEach((s, i) => {
      const names = new Set((s.roster || []).map((p) => p.name));
      (s.roster || []).forEach((p) => { if (!CLASSES.includes(p.class)) errors.push(`${f}: season ${i + 1}, classe sconosciuta "${p.class}" (${p.name})`); });
      (s.raids || []).forEach((r) => (r.awards || []).forEach((a) => {
        if (!names.has(a.player)) errors.push(`${f}: "${a.player}" non è nel roster della season ${s.season}`);
        if (![0, 1, 2].includes(a.cost)) errors.push(`${f}: costo ${a.cost} non valido per ${a.player} (0, 1 o 2)`);
      }));
    });
    if (f.endsWith('roster.json')) (j.players || []).forEach((p) => {
      if (!CLASSES.includes(p.class)) errors.push(`${f}: classe sconosciuta "${p.class}" (${p.name})`);
      if (!['tank', 'healer', 'dps'].includes(p.role)) errors.push(`${f}: ruolo "${p.role}" non valido (${p.name})`);
    });
    if (f.endsWith('recruitment.json')) (j.classes || []).forEach((c) => (c.specs || []).forEach((s) => {
      if (!['high', 'open', 'closed'].includes(s.priority)) errors.push(`${f}: priority "${s.priority}" non valida (${c.class} – ${s.name})`);
    }));
  }
  if (f.endsWith('.md') && f.includes(path.sep + 'lore' + path.sep) && /\d\d-/.test(path.basename(f))) {
    if (!src.startsWith('---\n')) errors.push(`${f}: manca il frontmatter (--- … ---) in cima`);
    for (const k of ['id', 'title', 'kind']) if (!new RegExp('^' + k + ':', 'm').test(src)) errors.push(`${f}: manca il campo "${k}" nel frontmatter`);
  }
}

if (errors.length) { console.error('✖ Contenuti non validi:\n  ' + errors.join('\n  ')); process.exit(1); }
console.log('✓ Contenuti validi');
