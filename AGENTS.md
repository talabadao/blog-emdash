This is an EmDash site -- a CMS built on Astro with a full admin UI.

## Commands

```bash
npx emdash dev        # Start dev server (runs migrations, seeds, generates types)
npx emdash types      # Regenerate TypeScript types from schema
npx emdash seed seed/seed.json --validate  # Validate seed file
```

The admin UI is at `http://localhost:4321/_emdash/admin`.

## Key Files

| File                     | Purpose                                                                            |
| ------------------------ | ---------------------------------------------------------------------------------- |
| `astro.config.mjs`       | Astro config with `emdash()` integration, database, and storage                    |
| `src/live.config.ts`     | EmDash loader registration (boilerplate -- don't modify)                           |
| `seed/seed.json`         | Schema definition + demo content (collections, fields, taxonomies, menus, widgets) |
| `emdash-env.d.ts`        | Generated types for collections (auto-regenerated on dev server start)             |
| `src/layouts/Base.astro` | Base layout with EmDash wiring (menus, search, page contributions)                 |
| `src/pages/`             | Astro pages -- all server-rendered                                                 |

## Skills

Agent skills are in `.agents/skills/`. Load them when working on specific tasks:

- **building-emdash-site** -- Querying content, rendering Portable Text, schema design, seed files, site features (menus, widgets, search, SEO, comments, bylines). Start here.
- **creating-plugins** -- Building EmDash plugins with hooks, storage, admin UI, API routes, and Portable Text block types.
- **emdash-cli** -- CLI commands for content management, seeding, type generation, and visual editing flow.

## Rules

- All content pages must be server-rendered (`output: "server"`). No `getStaticPaths()` for CMS content.
- Image fields are objects (`{ src, alt }`), not strings. Use `<Image image={...} />` from `"emdash/ui"`.
- `entry.id` is the slug (for URLs). `entry.data.id` is the database ULID (for API calls like `getEntryTerms`).
- Always call `Astro.cache.set(cacheHint)` on pages that query content.
- Taxonomy names in queries must match the seed's `"name"` field exactly (e.g., `"category"` not `"categories"`).

## Project Context: Le Hoang Tin (`tinlehoang.info.vn`)

- **Owner / Entity:** Le Hoang Tin (Tin Le Hoang) — **Senior SEO & GEO Specialist** in Ho Chi Minh City, Vietnam (`tinledoihoa@gmail.com`, Phone/Zalo: `0357.669.476`, LinkedIn: `https://www.linkedin.com/in/tin-le-hoang`).
- **Aesthetic & Architecture ("Warm Editorial Authority" + Tin Le Hoang Design System):**
  - Combines **joost.blog** (editorial magazine typography, Roman-numeral section markers `§ I`–`§ IV`, numbered article rows `№`, monospace dates `YYYY·MM·DD`, clean whitespace) with **justinha.info.vn** (GEO authority, metric-driven case studies, `/llms.txt` & `/ai-information` for AI crawlers, interactive tools, and clear conversion CTAs).
  - Single source of truth for design tokens is `src/styles/theme.css`:
    - **Typography:** `Euclid Circular A` (500 weight for display/headings with tight leading `1.10–1.25` and negative letter-spacing; 600 weight for buttons, badges, and 11px uppercase eyebrows with `1px` tracking) + `Source Code Pro` (monospace metadata, dates, issue numbers, and code mockups — never prose).
    - **Shapes & Elevation:** Full pill buttons (`9999px`), `12px` card radius (`--radius-lg`) with `1px solid` hairline borders, flat by default with subtle elevation on hover/feature cards.
    - **Color Palette (Retuned Portfolio Pivot):** Cream canvas `#F5F0E6`, subtle surface `#EDE8DE`, white card surface `#FFFFFF`, deep forest ink `#1A2E1A`, structural forest green `#2D4A2D`, primary warm orange CTA `#E8772A` (`#F08A3E` in dark mode), editorial amber `#C17F4A`. (Note: Ignore the legacy `#00ed64` / `#001e2b` tokens from the raw `uploads/Tin_Le_Hoang_Design_System.md` file — use the retuned portfolio palette in `src/styles/theme.css`).
    - **Voice & Copy Rules:** Confident specialist-to-founder/marketer tone. Short, declarative sentences backed by specific measured figures (`300K+ clicks/month`, `#1 on ChatGPT/Claude/Grok`, `Top 3 in 2 weeks`). No emojis in UI or copy; use `→` for inline action links.
- **Git & Verification Workflow:**
  - Work on the `vibe-refresh` branch. **Never merge into `main`** unless explicitly instructed by the user.
  - After every sprint/change, verify with `npx astro check` and `npx emdash seed seed/seed.json --validate` (must pass with 0 errors). See `README.md` for the full 6-Sprint roadmap.
