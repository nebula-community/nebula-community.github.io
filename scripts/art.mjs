// Turns the generated illustrations (PNG) into the light files the site serves, then points the content at them.
// Usage: npm run art               → converts new or changed images and updates the content files
//        npm run art -- --dry      → shows what it would do, writes nothing
//        npm run art -- S01 L03    → only these IDs
// The list is docs/artwork/manifest.json. Sources outside the repo (the book's cover and plates in the lore folder) are only read.
import fs from 'node:fs';
import path from 'node:path';

const manifest = JSON.parse(fs.readFileSync('docs/artwork/manifest.json', 'utf8'));
const args = process.argv.slice(2);
const dry = args.includes('--dry');
const only = args.filter((a) => !a.startsWith('--'));
let sharp;
try { sharp = (await import('sharp')).default; } catch (e) { console.error('✖ Serve il pacchetto sharp: npm i -D sharp'); process.exit(1); }

const ratioOf = (r) => { const [a, b] = String(r).split(':').map(Number); return a / b; };
const read = (f) => fs.readFileSync(f, 'utf8').replace(/\r\n/g, '\n');

// "hero.poster", "card.image", "instances[id=mc].cover"
function setJson(file, dotted, value) {
  const j = JSON.parse(read(file));
  const keys = dotted.split('.');
  let o = j;
  keys.forEach((k, i) => {
    const m = k.match(/^([^[]+)(?:\[(\w+)=([^\]]+)\])?$/);
    if (m[2]) {
      o = (o[m[1]] || []).find((x) => String(x[m[2]]) === m[3]);
      if (!o) throw new Error(`${file}: nessun elemento ${k}`);
    } else if (i === keys.length - 1) {
      if (o[m[1]] === value) { o = null; return; }
      o[m[1]] = value;
    } else o = o[m[1]] ??= {};
  });
  if (o === null) return false;
  if (!dry) fs.writeFileSync(file, JSON.stringify(j, null, 2) + '\n');
  return true;
}

// cover: "media/…" in a Markdown frontmatter
function setFrontmatter(file, key, value) {
  const src = read(file);
  const m = src.match(/^---\n([\s\S]*?)\n---/);
  if (!m) throw new Error(`${file}: frontmatter mancante`);
  const line = `${key}: ${JSON.stringify(value)}`;
  const re = new RegExp(`^${key}:.*$`, 'm');
  if (re.test(m[1]) && m[1].match(re)[0] === line) return false;
  const fm = re.test(m[1]) ? m[1].replace(re, line) : m[1] + '\n' + line;
  if (!dry) fs.writeFileSync(file, src.replace(m[1], fm));
  return true;
}

const waiting = [], interim = [];
let converted = 0, linked = 0;
for (const entry of manifest.items) {
  if (only.length && !only.includes(entry.id)) continue;
  // The generated PNG wins. Until it exists, an optional `fallback` source (with its own crop) stands in,
  // e.g. the front view of a concept sheet for a founder's portrait.
  const fb = entry.fallback && fs.existsSync(path.resolve(entry.fallback.png)) ? { ...entry, ...entry.fallback } : null;
  const it = fs.existsSync(path.resolve(entry.png)) ? entry : fb;
  if (!it) { waiting.push(entry.id); continue; }
  if (it === fb) interim.push(entry.id);
  const src = path.resolve(it.png);
  if (!fs.existsSync(it.out) || fs.statSync(it.out).mtimeMs < fs.statSync(src).mtimeMs) {
    const meta = await sharp(src).metadata();
    const r = ratioOf(it.ratio);
    // crop: [x, y, width, height] as fractions of the source (e.g. the front view of a seven-view sheet)
    const box = it.crop && { left: Math.round(it.crop[0] * meta.width), top: Math.round(it.crop[1] * meta.height), width: Math.round(it.crop[2] * meta.width), height: Math.round(it.crop[3] * meta.height) };
    const sw = box ? box.width : meta.width, sh = box ? box.height : meta.height;
    let w, h;
    if (it.fit === 'contain') {
      // the whole crop stays visible; the frame is completed with `background`
      const cw = sw / sh < r ? sh * r : sw;
      w = Math.round(Math.min(it.width, cw)); h = Math.round(w / r);
    } else {
      w = Math.min(it.width, sw); h = Math.round(w / r);
      if (h > sh) { h = sh; w = Math.round(h * r); }
    }
    console.log(`${dry ? '·' : '✓'} ${it.id} → ${it.out} (${w}×${h})`);
    if (!dry) {
      fs.mkdirSync(path.dirname(it.out), { recursive: true });
      let img = sharp(src).rotate();
      if (box) img = img.extract(box);
      img = img.resize(w, h, { fit: it.fit === 'contain' ? 'contain' : 'cover', position: it.position || 'centre', background: it.background || '#000000' });
      await (/\.jpe?g$/i.test(it.out) ? img.jpeg({ quality: 82, mozjpeg: true }) : img.webp({ quality: it.quality || 80 })).toFile(it.out);
    }
    converted++;
  }
  const value = it.out.replace(/^public\//, '');
  for (const s of it.set || []) {
    if (s.key ? setFrontmatter(s.file, s.key, value) : setJson(s.file, s.path, value)) {
      console.log(`  ${dry ? '·' : '↳'} ${s.file} · ${s.key || s.path} → ${value}`);
      linked++;
    }
  }
}

console.log(`${dry ? 'Prova: ' : ''}${converted} immagini convertite, ${linked} collegamenti aggiornati.`);
if (interim.length) console.log(`Provvisorie (dalla scheda di riferimento, in attesa del PNG): ${interim.join(', ')}`);
if (waiting.length) console.log(`In attesa del PNG: ${waiting.join(', ')}`);
