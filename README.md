# Le Hoang Tin (`tinlehoang.info.vn`) — Personal Blog & SEO/GEO Authority Hub

Official personal publication, case study portfolio, and AI Search (GEO) resource hub of **Le Hoang Tin (Tin Le Hoang)** — **Senior SEO & GEO Specialist** based in Ho Chi Minh City, Vietnam.

Built on **[EmDash CMS](https://github.com/emdash-cms/emdash)** + **Astro 6** (`output: "server"`) and deployed on **Cloudflare Workers** (D1 database, R2 media storage, KV session store).

---

## 🎯 Vision & Design Direction ("Warm Editorial Authority")

This site blends two reference philosophies:
1. **[joost.blog](https://joost.blog/)** — High-signal editorial magazine layout, Roman-numeral section headers (`§ I`, `§ II`), issue-numbered article rows (`№ 05`), monospace metadata (`YYYY·MM·DD`), distraction-free reading, and agent-ready architecture.
2. **[justinha.info.vn](https://justinha.info.vn/)** — GEO (Generative Engine Optimization) authority positioning, verifiable multi-market case studies with concrete KPI proof, interactive diagnostic tools, direct conversion pathways (Form, Zalo, WhatsApp, Email), and machine-readable entity endpoints (`/llms.txt`, `/llms-full.txt`, `/ai-information`).

### Brand & Color Tokens (`src/styles/theme.css`)
- **Typography:** `Euclid Circular A` (headings & UI), `Source Code Pro` (monospace metadata, issue numbers, dates).
- **Light Mode Palette:** Warm Cream (`#F5F0E6`), Subtle Cream (`#EDE8DE`), Surface White (`#FFFFFF`), Deep Forest Ink (`#1A2E1A`), Primary Structural Green (`#2D4A2D`), Warm Orange Accent (`#E8772A`), Editorial Amber (`#C17F4A`).
- **Dark Mode Palette:** Deep Charcoal-Green (`#161816` / `#1E211E`), Warm Off-White Text (`#F0EBE1`), Bright Warm Orange Accent (`#F08A3E`), Soft Amber (`#D4975E`).

---

## 🗺️ Information Architecture & Routes

| Route | File | Purpose |
|---|---|---|
| `/` | `src/pages/index.astro` | Editorial Authority Homepage (`§ I` Writing, `§ II` Case Studies, `§ III` Services, `§ IV` Now & Connect, Proof Bar) |
| `/posts` | `src/pages/posts/index.astro` | Full numbered writing archive grouped by year + category filter pills |
| `/posts/[slug]` | `src/pages/posts/[slug].astro` | 3-column article layout with reading progress bar, sticky TOC, author bio & related posts |
| `/projects` | `src/pages/projects.astro` | Case Studies & Projects Hub with industry filter & Problem → Strategy → Result breakdown |
| `/services` | `src/pages/services.astro` | SEO & GEO consulting services, proof metrics, engagement tiers, and FAQ |
| `/about` | `src/pages/about.astro` | Author biography, career timeline, skills, recognition, and `Person` structured data |
| `/contact` | `src/pages/contact.astro` | Direct inquiry form + fast-response channels (Email, LinkedIn, Zalo/WhatsApp `0357.669.476`) |
| `/ai-information` | `src/pages/ai-information.astro` | Official entity fact sheet for AI crawlers (ChatGPT, Claude, Perplexity, Gemini) & human visitors |
| `/tools` | `src/pages/tools.astro` | Interactive SEO & AI Readiness diagnostic utility |
| `/llms.txt` | `src/pages/llms.txt.ts` | Concise machine-readable index of site identity, services, case studies & articles |
| `/llms-full.txt` | `src/pages/llms-full.txt.ts` | Full-text corpus of published articles for LLM ingestion |
| `/rss.xml` | `src/pages/rss.xml.ts` | RSS 2.0 feed |

---

## 🚀 6-Sprint Refresh Roadmap

- [x] **Phase 0:** Fix `Astro.cache.set(cacheHint)` across all content pages, unify LinkedIn URL (`https://www.linkedin.com/in/tin-le-hoang`), align dark mode orange accent, create `vibe-refresh` branch.
- [x] **Sprint 1:** Design System consolidation (`theme.css` + `Base.astro`), active navigation state, mobile navigation drawer, and footer resources links.
- [x] **Sprint 2:** Homepage overhaul (`src/pages/index.astro`) with Roman-numeral editorial sections, Proof & Brand Bar, Selected Case Studies, Services snapshot, and Now/Connect strip.
- [x] **Sprint 3:** Upgrade `/projects` (Case Studies Hub with filter & deep breakdowns), `/services` (social proof & comparison), and `/about` (timeline & entity clarity).
- [x] **Sprint 4:** Conversion & Reading UX — interactive Contact Form + Zalo/WhatsApp CTAs on `/contact`, reading progress bar + author box on `/posts/[slug]`, category filter pills on `/posts`.
- [x] **Sprint 5:** AI/GEO Infrastructure & Technical SEO — `/llms.txt`, `/llms-full.txt`, `/ai-information`, and JSON-LD structured data (`Person`, `WebSite`, `Article`, `ProfessionalService`, `FAQPage`).
- [ ] **Sprint 6:** Interactive SEO/GEO Mini-Tool (`/tools`) + complete case study articles in `seed/seed.json`.

---

## 🛠️ Commands & Git Workflow

```bash
npx emdash dev                             # Run local dev server (http://localhost:4321)
npx emdash seed seed/seed.json --validate  # Validate seed schema & content
npx astro check                            # Run TypeScript & Astro diagnostics
pnpm build                                 # Build production bundle
```

### Branch Policy
- All development and agent iterations happen on the **`vibe-refresh`** branch (or dedicated feature branches).
- **Do not merge into `main`** or deploy to production until explicitly reviewed and approved by the owner.
