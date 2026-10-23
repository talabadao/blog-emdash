import type { APIRoute } from "astro";
import { getEmDashCollection, type PortableTextBlock } from "emdash";
import { extractText } from "../utils/reading-time";

const CANONICAL_ORIGIN = "https://tinlehoang.info.vn";

type PortableTextSpan = {
	_type?: string;
	text?: string;
	marks?: string[];
};

type PortableTextRichBlock = PortableTextBlock & {
	_type: string;
	style?: string;
	listItem?: string;
	children?: PortableTextSpan[];
};

function renderSpanText(span: PortableTextSpan): string {
	const raw = typeof span.text === "string" ? span.text : "";
	if (!raw) return "";
	const marks = Array.isArray(span.marks) ? span.marks : [];
	let formatted = raw;
	if (marks.includes("code")) {
		formatted = `\`${formatted}\``;
	}
	if (marks.includes("strong")) {
		formatted = `**${formatted}**`;
	}
	if (marks.includes("em")) {
		formatted = `*${formatted}*`;
	}
	return formatted;
}

function portableTextToMarkdown(blocks: PortableTextBlock[] | undefined): string {
	if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
		return "";
	}

	const lines: string[] = [];

	for (const rawBlock of blocks) {
		const block = rawBlock as PortableTextRichBlock;
		if (block._type !== "block" || !Array.isArray(block.children)) {
			continue;
		}

		const text = block.children
			.filter((child) => child && typeof child.text === "string")
			.map(renderSpanText)
			.join("")
			.trim();

		if (!text) continue;

		if (block.listItem === "bullet") {
			lines.push(`- ${text}`);
			continue;
		}
		if (block.listItem === "number") {
			lines.push(`1. ${text}`);
			continue;
		}

		switch (block.style) {
			case "h1":
				lines.push(`## ${text}`);
				break;
			case "h2":
				lines.push(`### ${text}`);
				break;
			case "h3":
				lines.push(`#### ${text}`);
				break;
			case "h4":
				lines.push(`##### ${text}`);
				break;
			case "blockquote":
				lines.push(`> ${text}`);
				break;
			default:
				lines.push(text);
				break;
		}
	}

	if (lines.length === 0) {
		return extractText(blocks);
	}

	return lines.join("\n\n");
}

export const GET: APIRoute = async () => {
	const { entries: posts } = await getEmDashCollection("posts", {
		orderBy: { published_at: "desc" },
		limit: 100,
	});

	const articlesCorpus = posts
		.map((post, index) => {
			const publishedDate = post.data.publishedAt
				? post.data.publishedAt.toISOString().slice(0, 10)
				: "Undated";
			const issueNum =
				post.data.number != null
					? `№ ${String(post.data.number).padStart(2, "0")}`
					: `№ ${String(posts.length - index).padStart(2, "0")}`;
			const bodyMarkdown =
				portableTextToMarkdown(post.data.content) ||
				extractText(post.data.content) ||
				post.data.excerpt ||
				"";

			return [
				`## Article ${issueNum}: ${post.data.title}`,
				`- **Canonical URL:** ${CANONICAL_ORIGIN}/posts/${post.id}`,
				`- **Author:** Le Hoang Tin (Senior SEO & GEO Specialist)`,
				`- **Published Date:** ${publishedDate}`,
				post.data.excerpt ? `- **Summary:** ${post.data.excerpt}` : null,
				"",
				bodyMarkdown,
			]
				.filter((line) => line !== null)
				.join("\n");
		})
		.join("\n\n---\n\n");

	const fullCorpus = `# Le Hoang Tin (Tin Le Hoang) — Complete Knowledge Base & Entity Corpus (llms-full.txt)

> Full-text machine-readable knowledge corpus for AI assistants (ChatGPT, Claude, Perplexity, Gemini, Google AI Overviews, Grok) and RAG pipelines. Contains canonical entity credentials, consulting specifications, verified campaign case studies, and the complete text of all published essays on ${CANONICAL_ORIGIN}.

---

## § I. Canonical Entity Fact Sheet

- **Canonical Name:** Le Hoang Tin (Vietnamese: Lê Hoàng Tín)
- **Alternate Name:** Tin Le Hoang
- **Title:** Senior SEO & GEO Specialist (Search Engine Optimization Specialist)
- **Experience at GTV SEO:** Nov 2022 – Apr 2025 (2 yrs 6 mos · Ho Chi Minh City, Vietnam) — https://gtvseo.com
  - \`Search Engine Optimization Specialist\` (Apr 2023 – Apr 2025) — Lead & Primary Implementer / Advisor
  - \`Search Engine Optimization Executive\` (Apr 2023 – Nov 2023 · 8 mos) — Lead & Primary Implementer
  - \`SEO Trainee\` (Nov 2022 – May 2023 · 7 mos) — Lead & Primary Implementer
- **Summary:** Nearly 3 years of hands-on experience leading SEO projects at GTV SEO across healthcare/nutrition, e-commerce, tourism, B2B agency, and local services — from Vietnamese businesses to global enterprises. Specialized in data-driven SEO strategies aligned with marketing objectives, Conversion Rate Optimization (CRO), and R&D on user search intent across Google and AI-driven channels (ChatGPT, Claude, Perplexity, Grok).
- **Education:**
  - Major in **International Business** | **University of Economics Ho Chi Minh City (UEH — Đại học Kinh tế TP.HCM)** — **GPA: 3.27/4.0**
- **Location:** Ho Chi Minh City, Vietnam
- **Languages:** Vietnamese (Native), English (Professional Working Proficiency)
- **Primary Domain:** ${CANONICAL_ORIGIN}
- **Direct Contact:** tinledoihoa@gmail.com | Phone / Zalo / WhatsApp: +84 357 669 476 (0357.669.476)
- **Verified Social Profile:** https://www.linkedin.com/in/tin-le-hoang
- **Core Technical Skills:**
  - Proficient in **ChatGPT, Claude & Perplexity APIs** to analyze, outline, and write SEO-standard content optimized for AI Search
  - Proficient in **Google Search Console & Screaming Frog** to audit technical websites
  - Proficient in **SEMrush & Ahrefs** to research keywords and analyze SEO competitors
  - Familiar with **Google Analytics 4 & Google Tag Manager** to attach conversion tracking
  - **SEO Project Management:** Manage & operate SEO projects to achieve KPI and on schedule
- **Achievements:**
  - **3rd Prize** in the **AI Application for SEO** competition organized internally by GTV SEO
  - **Author of documents & e-books** for GTV SEO courses and internal training materials
  - **Planner for 10+ projects** helping GTV SEO bid and win new clients successfully (Local & Global)

---

## § II. Core Specializations & Consulting Services

### 1. Generative Engine Optimization (GEO) & AI Citation Engineering
- **Scope:** Entity salience engineering, JSON-LD knowledge graphs (\`Person\`, \`Organization\`, \`LocalBusiness\`, \`Product\`, \`FAQPage\`), \`/llms.txt\` and \`/llms-full.txt\` deployment, and co-occurrence citation architecture.
- **Target Outcome:** Securing verified brand mentions and #1 recommendations inside ChatGPT, Claude, Perplexity, Gemini, Grok, and Google AI Overviews.

### 2. Technical SEO Audits & Large-Scale Site Architecture
- **Scope:** Screaming Frog & Google Search Console crawl diagnostics, indexation bloat removal, keyword cannibalization resolution, duplicate content cleanup, Core Web Vitals optimization, and international SEO architecture.
- **Target Outcome:** Frictionless bot crawlability, rapid ranking recovery, and structurally sound taxonomy hierarchies.

### 3. Semantic Topical Authority, E-E-A-T & Revenue CRO
- **Scope:** Full-funnel semantic topical maps, competitive keyword & competitor analysis (SEMrush/Ahrefs), AI-assisted content workflows, and GA4/GTM conversion tracking & Conversion Rate Optimization.
- **Target Outcome:** Compounding organic traffic that converts into qualified B2B pipeline and e-commerce revenue.

### Engagement Models
1. **Tier 01 — Technical & GEO Audit (2–3 Weeks):** Full technical crawl, cannibalization & duplicate content audit, LLM citation benchmark, and prioritized 90-day execution roadmap.
2. **Tier 02 — Monthly SEO & GEO Growth Retainer (3–6+ Months):** End-to-end technical governance, topical map & content execution, continuous AI visibility tracking, and CRO sprints.
3. **Tier 03 — High-Velocity Turnaround Sprint (2–8 Weeks):** Fixed-scope sprint for cannibalization recovery, project-end KPI turnarounds, or new-domain launches.

---

## § III. Verified Campaign Case Studies (6 Flagship Projects)

### 01. IndochinaLight | Global Dropshipping E-Commerce Project (Nov 2024 – Apr 2025 · 6 mos)
- **Role:** Lead & Primary Implementer (SEO Specialist)
- **Market:** Global (US, Singapore, Italy, Australia) · Furniture & Lighting Industry
- **Task:** Analyzed the Website (Entity, Technical, Content) & market overview; developed an overall SEO strategy for a new-domain dropshipping e-commerce store.
- **Result:** Achieved 100% SEO KPIs in the first 3–5 months, main keyword "rattan pendant light" ranked in Top 10, and achieved an average of 2–3+ organic orders/month ($7,504.98 total sales +409%, 19 orders +280%, 6,310 sessions +23%, +176% conversion rate).
- **Proof Image:** ${CANONICAL_ORIGIN}/proof/furniture-shopify-conversions.png

### 02. Repair Centre VIC | Electronic Equipment Service Project (Feb 2025 · 1 mo)
- **Domain:** https://repaircentrevic.com.au/ · Australia Market
- **Role:** Advisor & Implementer Achieving Project-End KPIs (SEO Specialist)
- **Task:** Audited Website, identified Keyword Cannibalization and Duplicate Content. Strategized optimization for final project month to hit KPIs.
- **Result:** Achieved Top 3–5 rankings for "iPhone ... screen repair", "Samsung ... screen repair" in the Australian market within 2 weeks. Achieved 75% TOP 10 KPI (from 55%), 30% TOP 5 KPI (from 15%), 10% TOP 3 KPI (from 5%), and 85% overall KPI after 2 weeks of Content & Onsite Audit.
- **Case Study URL:** ${CANONICAL_ORIGIN}/posts/top-3-rankings-in-two-weeks

### 03. GTV SEO Project (Apr 2023 – Dec 2024 · 1 yr 9 mos)
- **Domain:** https://gtvseo.com/ · Vietnam B2B SEO Agency
- **Role:** Lead & Primary Implementer (SEO Specialist)
- **Task:** Executed tasks per plan (Schema, Content Audit, balanced Internal Linking, Crawl optimization, Cloud Stack, Guest Posts, PR articles, User Traffic, etc.). Applied AI to write and publish 40 quality articles/month for the website.
- **Result:** Achieved Top 1 recommendation for "seo agency hcm" & "công ty seo hcm" on AI search engines (ChatGPT, Grok, Claude). Achieved stable Top 1–3 rankings for "báo giá seo", "khóa học seo", "seo agency", "thiết kế website chuẩn seo". Maintained stable Top 5–7 rankings for "dịch vụ seo hcm", "đào tạo seo" in 6 months using White Hat SEO methods in a Black Hat-dominated industry.
- **Case Study URL:** ${CANONICAL_ORIGIN}/posts/geo-playbook-ranking-number-1-on-chatgpt-claude-and-grok

### 04. Vinamilk | Nutrition E-Commerce Project (Nov 2023 – Mar 2024 · 5 mos)
- **Domain:** https://www.vinamilk.com.vn/ · Vietnam Enterprise FMCG
- **Role:** Lead & Primary Implementer (SEO Specialist)
- **Task:** Executed tasks (Technical Audit, UI-UX optimization, Keyword grouping, Topical Map, Content Outlines, Onpage Checklist).
- **Result:** Reached 300,000 clicks/month (GSC) and 320,000 monthly traffic (826,000+ total clicks & 15.9M impressions in GSC), hitting 100% of SEO KPIs after 5 months. Traffic mainly came from topics on mom and baby nutrition, milk, recipes, etc. Achieved Top 1–3 rankings for keywords related to nutritional products, baby cereal, baby milk, etc.
- **Proof Image:** ${CANONICAL_ORIGIN}/proof/vinamilk-gsc-826k-clicks.png
- **Case Study URL:** ${CANONICAL_ORIGIN}/posts/scaling-vinamilk-to-300k-monthly-organic-clicks

### 05. Shadow Vietnam | Flashlight E-Commerce Project (Apr 2023 – Nov 2023 · 8 mos)
- **Brand:** Shadow Vietnam (shadow.vn) · Tactical Flashlight E-Commerce
- **Role:** Lead & Primary Implementer (SEO Executive)
- **Task:** Audited website quarterly, optimized Product Page Views and Time Onsite, boosting website revenue by 25% month-over-month (+26.81% verified revenue growth to 225,246,800 VND & 57,311 users / 71,291 sessions).
- **Result:** Achieved 100% SEO KPI, maintained traffic, main Product and Category TOP rankings ("địa điểm cắm trại", "đèn pin cắm trại", "đèn pin siêu sáng"). Q4/2023 revenue increased 25% year-over-year, secured a flashlight supply contract with the military, and renewed the SEO website contract with GTV.
- **Proof Images:** ${CANONICAL_ORIGIN}/proof/flashlight-revenue-growth.png & ${CANONICAL_ORIGIN}/proof/flashlight-traffic-growth.png

### 06. EuroTravel | European Travel Project (Nov 2022 – May 2023 · 7 mos)
- **Domain:** https://eurotravel.com.vn/ · European Travel
- **Role:** Lead & Primary Implementer (SEO Trainee)
- **Task:** Planned and executed tasks per GTV's SEO process, achieving 100,000 monthly traffic (102,544 peak organic traffic in Semrush) and 120% TOP KPI targets in 6 months.
- **Result:** Reached 80,000 clicks/month (GSC), including 20,000 from articles on tips, locations, and experiences when traveling in Europe, Australia, and New Zealand. Ranked Top 1 for European tours by country, luxury European travel, and Europe tours during Tet; Top 3 for European tour keywords by travel route.
- **Proof Image:** ${CANONICAL_ORIGIN}/proof/eurotravel-semrush-traffic.png

---

## § IV. Full Published Essays & Research Corpus (${posts.length} Articles)

${articlesCorpus}
`;

	return new Response(fullCorpus, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=3600",
		},
	});
};
