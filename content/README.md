# /content — the site's data

Everything the site shows lives here, **separate from the code**. The pages are generated from these files: a new game or chapter needs **no code changes**.

```
content/
├── site.json                    name, tagline, Discord invite, hero video, social, SEO
├── events.json                  community events (not section events)
├── team.json                    staff — roles, not people (ADR-005 §2.7)
├── pages/                       welcome channels
│   ├── locanda.md               "Chi siamo" (frontmatter + Markdown)
│   ├── editto.md                the Edict — shown in Lore too
│   └── regolamento.json         the Rules — structured: groups, scale, enforcement
├── lore/
│   ├── index.json               ⚙ generated at build from the .md frontmatter
│   ├── 00-una-notte-di-deposito.md
│   ├── 01-la-sala-che-non-chiude-mai.md
│   └── …                        one file per chapter / vigil
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
Frontmatter: `id`, `order`, `numeral` (P, I, I·V…), `kind` (Prologo / Libro / Veglia), `title`, `cover`, `date`, `minutes`. Body = paragraphs of prose separated by a blank line.

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

## Adding a chapter
Create `lore/NN-title.md` with the frontmatter above → commit. It appears in the index and in the previous/next navigation.
