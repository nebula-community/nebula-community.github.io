# /content — the site's data

Everything the site shows lives here, **separate from the code**. The pages are generated from these files: a new game or chapter needs **no code changes**.

```
content/
├── site.json                    name, tagline, Discord invite, hero video, social, SEO
├── events.json                  community events (not section events)
├── team.json                    staff — roles, not people (ADR-005 §2.7)
├── pages/                       welcome channels
│   ├── locanda.md               "Chi siamo" (frontmatter + Markdown)
│   ├── editto.md                the Edict — its own tab in Chi siamo (/chi-siamo/editto/)
│   ├── fondatori.json           founders and co-founders + group photo, at the end of La Locanda
│   └── regolamento.json         the Rules — structured: groups, scale, enforcement
├── lore/                        the light novel "La nascita della Nebula Inn" (imported, see below)
│   ├── index.json               ⚙ generated at build from the .md frontmatter
│   ├── libro.json               the book: title, author, form, genre, home teaser, presentation, cover
│   ├── 01-il-lavoro-prima-della-partenza.md
│   └── …                        one file per chapter, 01 → 09
├── games/
│   ├── index.json               ⚙ generated at build from the folders
│   ├── wow-forever/             one folder = one page /giochi/wow-forever
│   │   ├── game.json            card, hero, info, pact, loot rules, links
│   │   ├── faq.json             FAQ in groups
│   │   ├── application.json     application form (Come entrare tab)
│   │   ├── ranks.json           ranks and roles (Ranghi tab)
│   │   ├── roster.json          active raid roster by faction (Roster tab)
│   │   ├── progress.json        instances → bosses → first-kill date per faction (Progress tab)
│   │   ├── recruitment.json     recruiting open/closed, role and class priorities, targets
│   │   ├── loot.json            seasons → roster + runs → credits (Loot tab)
│   │   ├── events.json          section nights (Calendario tab)
│   │   └── gallery.json         screenshots / videos
│   └── _coming-soon/game.json   "Prossimo tavolo" card (placeholder: true)
└── media/                       images (optimised at build: WebP/AVIF + sizes)
```

## Conventions
- **`[[TOKEN]]`** = data not yet available. The site shows it as a dashed badge; never invent it.
- **Media paths** always start with `media/…` (in the kit they map to `assets/`).
- **File names**: `NN-slug.md` for ordered content, kebab-case slugs, no spaces or accents.
- **Signatures**: `— L'Oste` (lore/welcome), `— Il Presidente` (institutional), `— Gli Officers` (section).
- Files marked ⚙ are generated: do not edit them by hand in the real repository.

## Markdown in pages (`pages/*.md`)
```md
---
title: "La Locanda"
subtitle: "Cos'è Nebula, detto senza girarci intorno."
teaser: "Short text for the home card"
---

## Heading
Normal paragraph.

- **Bold term** — explanation
> [!nota] Highlighted callout
> Verse line (one per line)

— L'Oste
```

## Lore chapters (`lore/NN-*.md`)
Imported with `npm run lore:import` from the lore folder (`discord/community/lore`, read only): the site shows only the light novel for now, not the long novel or its prologue.
Frontmatter: `id` (URL `/lore/<id>/`), `order`, `numeral` (01, 02…), `kind` (Capitolo), `title`, `cover`, `minutes`, `words`, `plates` (illustrations shown after the chapter), `source`. Body = paragraphs separated by a blank line; `*italic*`; a line with `***` is a scene break.
Covers and plates may point to files that do not exist yet: the site shows a fallback until they appear in `public/media/lore/` (`npm run art`, see `docs/artwork/rev4/README.md`).

## Loot (`games/<slug>/loot.json`)
```json
{ "seasons": [ { "season": "1", "updated": "2026-10-14", "closed": false,
    "roster": [{ "name": "…", "class": "warrior", "spec": "…", "faction": "Nebulaa" }],
    "raids":  [{ "id": "r1", "instance": "Molten Core", "date": "14/10", "awards": [{ "player": "…", "item": "Arma", "cost": 2 }] }] } ] }
```
Most recent season first. Totals and order are **calculated by the site**. Classes: `warrior paladin hunter rogue priest shaman mage warlock druid`.
Alternative: a Google Sheet published as CSV with `roster` and `awards` sheets (`source.type: "sheet"` in game.json).

## Adding a game in 5 minutes
1. Copy `games/wow-forever/` → `games/<new-slug>/`
2. Edit `game.json` (title, card, info); delete the files you don't need (missing tab = hidden)
3. Put the images in `media/sections/<new-slug>/`
4. Commit on `main` → the Action regenerates and publishes the page

## Updating the story
Run `npm run lore:import` (or `-- --from <reading copy.md>`) → `npm run validate` → commit. Chapters appear in the index and in the previous/next navigation; hand edits to chapter text are overwritten by the next import.
