// Imports the light novel from the lore folder into content/lore/. The lore folder is only READ, never written.
// Usage: npm run lore:import                      → frozen reading copy NI4-24-C10 (default)
//        npm run lore:import -- --from <file.md>  → a newer reading copy
// Rewrites the chapter files (text, title, word count, minutes) and libro.json (title, presentation);
// keeps the cover and plates already set in existing files, and removes chapter files that no longer exist.
import fs from 'node:fs';
import path from 'node:path';

const REV4 = path.resolve('..', 'discord', 'community', 'lore', 'libri', 'rev4');
const args = process.argv.slice(2);
const from = args.indexOf('--from');
const SRC = from >= 0 ? path.resolve(args[from + 1]) : path.join(REV4, 'consegne', 'ni4-24', 'la-nascita-della-nebula-inn-NI4-24-C10.md');
const PRESENTATION = path.join(REV4, 'editoriale', 'testi-volume', 'presentazione-breve-nebula-inn.md');
const OUT = path.join('content', 'lore');
const WPM = 220; // reading speed used for the minutes shown on the cards

// Interior plates of the edition (NI4-26): placed after chapter 03 and after chapter 07, as in the book.
const PLATES = {
  '03': [{ src: 'media/lore/tavola-a01-la-mano-lontana-dal-tasto.webp', alt: 'Alla postazione, Ada tiene la mano lontana dalla radio mentre Calco e Oris seguono sul monitor i mezzi fermi e la corda ancora allentata.' }],
  '07': [
    { src: 'media/lore/tavola-a02-il-vassoio-non-passa.webp', alt: 'Calco ferma Sanchio col vassoio davanti al ripiano di prova; Donut osserva la custodia che restringe il passaggio, mentre Egarim tiene la sagoma.' },
    { src: 'media/lore/tavola-a03-la-tazza-che-si-raffredda.webp', alt: 'Donut siede con la tazza ormai senza vapore; Scudi ed Egarim restano nella conversazione e l’Oste riposa sul lato libero. La custodia lascia aperto il passaggio.' },
  ],
};

if (!fs.existsSync(SRC)) { console.error(`✖ Copia di lettura non trovata: ${SRC}`); process.exit(1); }
const src = fs.readFileSync(SRC, 'utf8').replace(/\r\n/g, '\n');
const bookTitle = (src.match(/^# (.+)$/m) || [])[1]?.trim();
const heads = [...src.matchAll(/^## Capitolo (\d+) — (.+)$/gm)];
if (!heads.length) { console.error('✖ Nessun "## Capitolo NN — Titolo" trovato nella copia di lettura.'); process.exit(1); }

const slug = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const frontmatter = (s) => {
  const m = s.match(/^---\n([\s\S]*?)\n---\n?/);
  const data = {};
  if (m) m[1].split('\n').forEach((l) => { const i = l.indexOf(':'); if (i < 0) return; const v = l.slice(i + 1).trim(); try { data[l.slice(0, i).trim()] = JSON.parse(v); } catch (e) { data[l.slice(0, i).trim()] = v; } });
  return data;
};

const existing = new Map(fs.readdirSync(OUT).filter((f) => /^\d\d-.*\.md$/.test(f)).map((f) => [frontmatter(fs.readFileSync(path.join(OUT, f), 'utf8').replace(/\r\n/g, '\n')).id, f]));
const written = new Set();
let total = 0;

heads.forEach((m, i) => {
  const n = m[1].padStart(2, '0');
  const title = m[2].trim();
  const body = src.slice(m.index + m[0].length, i + 1 < heads.length ? heads[i + 1].index : src.length).trim();
  const words = body.replace(/^\*\*\*$/gm, '').split(/\s+/).filter(Boolean).length;
  total += words;
  const file = `${n}-${slug(title)}.md`;
  const old = existing.has(n) ? frontmatter(fs.readFileSync(path.join(OUT, existing.get(n)), 'utf8').replace(/\r\n/g, '\n')) : {};
  const data = {
    id: n,
    order: +n,
    numeral: n,
    kind: 'Capitolo',
    title,
    cover: old.cover || `media/lore/capitolo-${n}-${slug(title)}.webp`,
    minutes: Math.max(1, Math.round(words / WPM)),
    words,
    plates: Array.isArray(old.plates) ? old.plates : PLATES[n] || [],
    source: path.basename(SRC, '.md'),
  };
  const fm = '---\n' + Object.entries(data).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n') + '\n---\n\n';
  fs.writeFileSync(path.join(OUT, file), fm + body + '\n');
  if (existing.has(n) && existing.get(n) !== file) fs.unlinkSync(path.join(OUT, existing.get(n)));
  written.add(file);
  console.log(`  ${file} · ${words} parole · ${data.minutes} min`);
});

for (const f of fs.readdirSync(OUT).filter((f) => /^\d\d-.*\.md$/.test(f) && !written.has(f))) {
  fs.unlinkSync(path.join(OUT, f));
  console.log(`  rimosso ${f}`);
}

const bookFile = path.join(OUT, 'libro.json');
const book = fs.existsSync(bookFile) ? JSON.parse(fs.readFileSync(bookFile, 'utf8')) : {};
if (bookTitle) book.title = bookTitle;
if (fs.existsSync(PRESENTATION)) book.presentation = fs.readFileSync(PRESENTATION, 'utf8').replace(/\r\n/g, '\n').replace(/^# .*\n+/, '').trim();
book.source = path.basename(SRC, '.md');
fs.writeFileSync(bookFile, JSON.stringify(book, null, 2) + '\n');

console.log(`✓ ${heads.length} capitoli, ${total} parole, da ${path.basename(SRC)}`);
