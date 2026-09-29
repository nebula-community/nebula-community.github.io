// Sync Raid-Helper → content/games/wow-forever/events.json
// Runs in GitHub Actions (never in the browser): the server API key lives ONLY in the Secrets.
// Env: RAIDHELPER_API_KEY, DISCORD_SERVER_ID. Verify endpoints/fields at https://raid-helper.dev/documentation/api
import { writeFile, readFile } from 'node:fs/promises';

const OUT = 'content/games/wow-forever/events.json';
const { RAIDHELPER_API_KEY: KEY, DISCORD_SERVER_ID: SERVER } = process.env;
if (!KEY || !SERVER) { console.error('✖ RAIDHELPER_API_KEY / DISCORD_SERVER_ID mancanti'); process.exit(1); }

const api = (p, auth) => fetch('https://raid-helper.dev/api/v2' + p, { headers: auth ? { Authorization: KEY } : {} })
  .then((r) => { if (!r.ok) throw new Error(p + ' → ' + r.status); return r.json(); });

const iso = (unix) => new Date(unix * 1000).toISOString().slice(0, 16);
const bucket = (c) => ({ tentative: 'tentative', absence: 'absent', bench: 'bench' })[c] || 'present';

try {
  const list = await api(`/servers/${SERVER}/events`, true);
  const now = Date.now() / 1000;
  const upcoming = (list.postedEvents || list.events || []).filter((e) => e.startTime > now - 6 * 3600).slice(0, 12);
  const events = [];
  for (const e of upcoming) {
    const full = await api(`/events/${e.id}`); // public endpoint
    const signups = { present: 0, tentative: 0, absent: 0, bench: 0 }, classes = {};
    for (const u of full.signUps || []) {
      const c = (u.className || '').toLowerCase(), b = bucket(c);
      if (c === 'late') continue;
      signups[b]++; if (b === 'present') classes[c] = (classes[c] || 0) + 1;
    }
    events.push({
      id: String(e.id), title: e.title, start: iso(e.startTime), end: e.endTime ? iso(e.endTime) : null,
      channel: e.channelName || null, faction: /orda|horde/i.test(e.title + ' ' + (e.channelName || '')) ? 'Nebulah' : 'Nebulaa',
      closesAt: full.closeTime ? iso(full.closeTime) : null,
      messageUrl: e.channelId && e.id ? `https://discord.com/channels/${SERVER}/${e.channelId}/${e.id}` : null,
      signups, classes
    });
  }
  events.sort((a, b) => a.start.localeCompare(b.start));
  const out = { _readme: 'Generato da scripts/sync-raid-helper.mjs — non modificare a mano.', source: 'raid-helper', serverId: SERVER, syncedAt: new Date().toISOString(), events };
  const prev = await readFile(OUT, 'utf8').catch(() => '');
  const next = JSON.stringify(out, null, 2) + '\n';
  if (prev.replace(/"syncedAt": ".*?"/, '') === next.replace(/"syncedAt": ".*?"/, '')) { console.log('✓ Nessuna modifica'); process.exit(0); }
  await writeFile(OUT, next);
  console.log(`✓ ${events.length} eventi sincronizzati`);
} catch (err) {
  // Fail cleanly: keep the previous snapshot, never publish a broken calendar.
  console.error('✖ Sync Raid-Helper fallito, resta lo snapshot precedente:', err.message);
  process.exit(1);
}
