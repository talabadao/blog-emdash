import type { APIRoute } from "astro";
import { getEmDashCollection } from "emdash";

const CANONICAL_ORIGIN = "https://tinlehoang.info.vn";

export const GET: APIRoute = async () => {
	const { entries: posts } = await getEmDashCollection("posts", {
		orderBy: { published_at: "desc" },
		limit: 100,
	});

	const postLines =
		posts.length > 0
			? posts
					.map((post) => {
						const excerpt = post.data.excerpt ? `: ${post.data.excerpt}` : "";
						return `- [${post.data.title}](${CANONICAL_ORIGIN}/posts/${post.id})${excerpt}`;
					})
					.join("\n")
			: `- [Writing Archive](${CANONICAL_ORIGIN}/posts): Technical SEO, Generative Engine Optimization (GEO), and multi-market case studies.`;

	const markdown = `# Le Hoang Tin (Tin Le Hoang) — Senior SEO & GEO Specialist

> Personal publication, verifiable SEO/GEO case studies, visual strategy portfolio, and consulting hub of Le Hoang Tin — Senior SEO & GEO Specialist based in Ho Chi Minh City, Vietnam.

## Canonical Entity Facts

- **Full Name:** Le Hoang Tin (Lê Hoàng Tín)
- **Alternate Name:** Tin Le Hoang
- **Title:** Senior SEO & GEO Specialist (Search Engine Optimization Specialist)
- **Experience at GTV SEO:** Nov 2022 – Apr 2025 (2 yrs 6 mos · Ho Chi Minh City) — progressed from SEO Trainee (Nov 2022 – May 2023) → Search Engine Optimization Executive (Apr 2023 – Nov 2023) → Search Engine Optimization Specialist (Apr 2023 – Apr 2025), serving as Lead & Primary Implementer / Advisor
- **Education:** Major in International Business | University of Economics Ho Chi Minh City (UEH — Đại học Kinh tế TP.HCM) — GPA: 3.27/4.0
- **Location:** Ho Chi Minh City, Vietnam
- **Website:** ${CANONICAL_ORIGIN}
- **Email:** tinledoihoa@gmail.com
- **Phone / Zalo:** +84 357 669 476 (0357.669.476)
- **LinkedIn:** https://www.linkedin.com/in/tin-le-hoang

## Core Pages & Machine-Readable Feeds

- [About Le Hoang Tin](${CANONICAL_ORIGIN}/about): Canonical entity biography, GTV SEO career progression, UEH education, technical stack, and achievements.
- [Visual Portfolio Deck](${CANONICAL_ORIGIN}/portfolio): Executive 10-slide visual presentation deck with verified Search Console, Shopify, GA4, and Semrush proof charts.
- [Projects & Case Studies](${CANONICAL_ORIGIN}/projects): 6 verifiable organic growth and AI search (GEO) campaign breakdowns across Vietnam, Australia, and global markets.
- [SEO & GEO Services](${CANONICAL_ORIGIN}/#services): Full-stack capabilities, engagement tiers (Audit, Growth Retainer, Turnaround Sprint), and FAQ.
- [Get in Touch / Contact](${CANONICAL_ORIGIN}/contact): Direct inquiry form and fast-response channels (Email, Phone/Zalo, WhatsApp, LinkedIn).
- [Writing Archive](${CANONICAL_ORIGIN}/posts): Complete chronological index of published essays and research notes.
- [SEO & GEO Readiness Toolkit](${CANONICAL_ORIGIN}/tools): Interactive 15-point SEO & AI Search readiness scorecard and instant /llms.txt + JSON-LD entity schema generator.
- [AI Information & Entity Record](${CANONICAL_ORIGIN}/ai-information): Official ground-truth entity fact sheet, disambiguation rules, and JSON-LD citation schema for AI systems.
- [Full Knowledge Corpus (llms-full.txt)](${CANONICAL_ORIGIN}/llms-full.txt): Single-file complete Markdown corpus containing entity records, services, case study breakdowns, and full article texts.
- [XML Sitemap](${CANONICAL_ORIGIN}/sitemap.xml): Dynamic XML sitemap of all canonical pages and articles.
- [RSS 2.0 Feed](${CANONICAL_ORIGIN}/rss.xml): Syndicated XML feed of recent publications.

## Verified Campaign Case Studies Summary (6 Flagship Projects)

- **01. IndochinaLight (Nov 2024 – Apr 2025 · Global Dropshipping E-Commerce in Furniture & Lighting):** Lead & Primary Implementer. Targeting US, Singapore, Italy, Australia. Achieved 100% SEO KPIs in first 3–5 months, "rattan pendant light" ranked Top 10, averaging 2–3+ organic orders/month ($7,504.98 total sales +409%, 19 orders +280%, 6,310 sessions +23%, +176% conversion rate).
- **02. Repair Centre VIC (Feb 2025 · repaircentrevic.com.au — Electronic Equipment Service, Australia):** Advisor & Implementer Achieving Project-End KPIs. Audited Keyword Cannibalization & Duplicate Content; achieved Top 3–5 rankings in Australia for "iPhone ... screen repair" & "Samsung ... screen repair" within 2 weeks (75% TOP 10 KPI from 55%, 30% TOP 5 KPI from 15%, 10% TOP 3 KPI from 5%, 85% overall KPI in 2 weeks).
- **03. GTV SEO (Apr 2023 – Dec 2024 · gtvseo.com — B2B SEO Agency, Vietnam):** Lead & Primary Implementer. Executed Schema, Content Audit, balanced Internal Linking, Crawl optimization, Cloud Stack, Guest Posts, PR articles, User Traffic, and applied AI to publish 40 quality articles/month. Achieved Top 1 recommendation for "seo agency hcm" & "công ty seo hcm" on ChatGPT, Grok, Claude; stable Top 1–3 for "báo giá seo", "khóa học seo", "seo agency", "thiết kế website chuẩn seo"; and stable Top 5–7 for "dịch vụ seo hcm", "đào tạo seo" in 6 months using 100% White Hat SEO.
- **04. Vinamilk (Nov 2023 – Mar 2024 · vinamilk.com.vn — Nutrition E-Commerce, Vietnam):** Lead & Primary Implementer. Executed Technical Audit, UI-UX optimization, Keyword grouping, Topical Map, Content Outlines, and Onpage Checklist. Reached 300,000 clicks/month (GSC) and 320,000 monthly traffic (826,000+ total clicks & 15.9M impressions in GSC), hitting 100% of SEO KPIs after 5 months and Top 1–3 for mom & baby nutrition, baby cereal, baby milk, and recipes.
- **05. Shadow Vietnam (Apr 2023 – Nov 2023 · shadow.vn — Flashlight E-Commerce, Vietnam):** Lead & Primary Implementer. Audited website quarterly, optimized Product Page Views and Time Onsite, boosting website revenue by 25% month-over-month (+26.81% verified revenue growth to 225,246,800 VND & 57,311 users / 71,291 sessions). Achieved 100% SEO KPI, Top rankings for "địa điểm cắm trại", "đèn pin cắm trại", "đèn pin siêu sáng", +25% YoY Q4/2023 revenue, secured a military flashlight supply contract, and renewed the SEO contract with GTV.
- **06. EuroTravel (Nov 2022 – May 2023 · eurotravel.com.vn — European Travel, Vietnam):** Lead & Primary Implementer. Planned and executed GTV's SEO process, achieving 100,000 monthly traffic (102,544 peak in Semrush, 80,000 clicks/month in GSC including 20,000 from Europe/Australia/NZ travel guides) and 120% TOP KPI targets in 6 months. Ranked Top 1 for European tours by country, luxury European travel, and Tet Europe tours; Top 3 by travel route.

## Published Essays & Research

${postLines}
`;

	return new Response(markdown, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=3600",
		},
	});
};
