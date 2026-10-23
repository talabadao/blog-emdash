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
- **Verified CV & Education (Ground Truth — Strictly Enforce):**
  - **Education:** Major in **International Business** | **University of Economics Ho Chi Minh City (UEH)** — **GPA: `3.27/4.0`**. *(Never mention FPT Polytechnic or any other university — that belonged to an external reference template).*
  - **Experience at GTV SEO (`Nov 2022 – Apr 2025 · 2 yrs 6 mos`, Ho Chi Minh City):**
    - Progressed from `SEO Trainee` (`Nov 2022 – May 2023`) → `SEO Executive` (`Apr 2023 – Nov 2023`) → `Search Engine Optimization Specialist` (`Apr 2023 – Apr 2025`), serving as **Lead & Primary Implementer / Advisor** across 6 flagship campaigns:
      1. **IndochinaLight (`Nov 2024 – Apr 2025` · Global Dropshipping E-commerce in Furniture & Lighting):** Lead & Primary Implementer. Analyzed Entity, Technical, Content & market overview for a new domain targeting US, Singapore, Italy, Australia. Achieved **100% SEO KPIs in first 3–5 months**, main keyword `"rattan pendant light"` ranked **Top 10**, averaging **2–3+ organic orders/month** (`$7,504.98` total sales `+409%`, `19` orders `+280%`).
      2. **Repair Centre VIC (`Feb 2025` · `repaircentrevic.com.au` — Electronic Equipment Service, Australia):** Advisor & Implementer Achieving Project-End KPIs. Audited Keyword Cannibalization & Duplicate Content; achieved **Top 3–5 rankings** in Australia for `"iPhone ... screen repair"` & `"Samsung ... screen repair"` within **2 weeks** (**75% TOP 10 KPI** from 55%, **30% TOP 5 KPI** from 15%, **10% TOP 3 KPI** from 5%, **85% overall KPI** in 2 weeks).
      3. **GTV SEO (`Apr 2023 – Dec 2024` · `gtvseo.com` — B2B SEO Agency):** Lead & Primary Implementer. Executed Schema, Content Audit, balanced Internal Linking, Crawl optimization, Cloud Stack, Guest Posts, PR articles, User Traffic, and applied AI to publish **40 quality articles/month**. Achieved **Top 1 recommendation** for `"seo agency hcm"` & `"công ty seo hcm"` on **ChatGPT, Grok, Claude**; stable **Top 1–3** for `"báo giá seo"`, `"khóa học seo"`, `"seo agency"`, `"thiết kế website chuẩn seo"`; and stable **Top 5–7** for `"dịch vụ seo hcm"`, `"đào tạo seo"` using 100% White Hat SEO.
      4. **Vinamilk (`Nov 2023 – Mar 2024` · `vinamilk.com.vn` — Nutrition E-commerce):** Lead & Primary Implementer. Executed Technical Audit, UI/UX optimization, Keyword grouping, Topical Map, Content Outlines, and Onpage Checklist. Reached **300,000 clicks/month (GSC)** and **320,000 monthly traffic** (`826K+ total clicks` & `15.9M impressions` in GSC), hitting **100% of SEO KPIs after 5 months** and **Top 1–3** for mom & baby nutrition, baby cereal, baby milk, and recipes.
      5. **Shadow Vietnam (`Apr 2023 – Nov 2023` · Flashlight E-commerce):** Lead & Primary Implementer. Audited website quarterly, optimized Product Page Views & Time Onsite, boosting website revenue by **25%+ month-over-month** (`+26.81%` verified revenue growth, `57,311` users / `71,291` sessions). Achieved **100% SEO KPI**, sustained Top rankings for `"địa điểm cắm trại"`, `"đèn pin cắm trại"`, `"đèn pin siêu sáng"`, increased Q4/2023 revenue +25% YoY, secured a **military flashlight supply contract**, and renewed the SEO contract with GTV.
      6. **EuroTravel (`Nov 2022 – May 2023` · `eurotravel.com.vn` — European Travel):** Lead & Primary Implementer. Planned and executed GTV's SEO process, achieving **100,000+ monthly traffic** (`102,544` peak in Semrush, `80,000` clicks/month in GSC including `20,000` from Europe/Australia/NZ travel guides) and **120% TOP KPI targets in 6 months**. Ranked **Top 1** for European tours by country, luxury European travel, and Tet Europe tours; **Top 3** by travel route.
- **Aesthetic & Architecture ("Warm Editorial Authority" + Tin Le Hoang Design System):**
  - Combines **joost.blog** (editorial magazine typography, Roman-numeral section markers `§ I`–`§ IV`, numbered article rows `№`, monospace dates `YYYY·MM·DD`, clean whitespace) with **justinha.info.vn** (GEO authority, metric-driven case studies, `/llms.txt` & `/ai-information` for AI crawlers, interactive tools, and clear conversion CTAs).
  - Single source of truth for design tokens is `src/styles/theme.css`:
    - **Typography:** `Euclid Circular A` (500 weight for display/headings with tight leading `1.10–1.25` and negative letter-spacing; 600 weight for buttons, badges, and 11px uppercase eyebrows with `1px` tracking) + `Source Code Pro` (monospace metadata, dates, issue numbers, and code mockups — never prose).
    - **Shapes & Elevation:** Full pill buttons (`9999px`), `12px` card radius (`--radius-lg`) with `1px solid` hairline borders, flat by default with subtle elevation on hover/feature cards.
    - **Color Palette (Retuned Portfolio Pivot):** Cream canvas `#F5F0E6`, subtle surface `#EDE8DE`, white card surface `#FFFFFF`, deep forest ink `#1A2E1A`, structural forest green `#2D4A2D`, primary warm orange CTA `#E8772A` (`#F08A3E` in dark mode), editorial amber `#C17F4A`. (Note: Ignore the legacy `#00ed64` / `#001e2b` tokens from the raw `uploads/Tin_Le_Hoang_Design_System.md` file — use the retuned portfolio palette in `src/styles/theme.css`).
    - **Voice & Copy Rules:** Confident specialist-to-founder/marketer tone. Short, declarative sentences backed by specific measured figures (`300K+ clicks/month`, `#1 on ChatGPT/Claude/Grok`, `Top 3 in 2 weeks`). No emojis in UI or copy; use `→` for inline action links. Primary CTA text across the site is `"Get in Touch"`.
- **Git & Verification Workflow:**
  - Work on the `vibe-refresh` branch. **Never merge into `main`** unless explicitly instructed by the user.
  - After every sprint/change, verify with `npx astro check` and `npx emdash seed seed/seed.json --validate` (must pass with 0 errors). See `README.md` for the full 6-Sprint roadmap.
