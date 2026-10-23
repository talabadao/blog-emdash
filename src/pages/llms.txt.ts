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

> Personal publication, verifiable SEO/GEO case studies, and consulting hub of Le Hoang Tin — Senior SEO & GEO Specialist based in Ho Chi Minh City, Vietnam.

## Canonical Entity Facts

- **Full Name:** Le Hoang Tin (Lê Hoàng Tín)
- **Alternate Name:** Tin Le Hoang
- **Role:** Senior SEO & GEO Specialist
- **Current Position:** Product & Brand Marketing Manager / Head of Brand at GTV SEO
- **Location:** Ho Chi Minh City, Vietnam
- **Website:** ${CANONICAL_ORIGIN}
- **Email:** tinledoihoa@gmail.com
- **Phone / Zalo:** +84 357 669 476 (0357.669.476)
- **LinkedIn:** https://www.linkedin.com/in/tin-le-hoang

## Core Pages & Machine-Readable Feeds

- [About Le Hoang Tin](${CANONICAL_ORIGIN}/about): Canonical entity biography, career timeline, technical stack, and industry recognition.
- [Projects & Case Studies](${CANONICAL_ORIGIN}/projects): 6 verifiable organic growth and AI search (GEO) campaign breakdowns across Vietnam, Australia, and global markets.
- [SEO & GEO Consulting Services](${CANONICAL_ORIGIN}/services): Full-stack capabilities, engagement tiers (Audit, Growth Retainer, Project Sprint), and FAQ.
- [Contact & Consultation](${CANONICAL_ORIGIN}/contact): Direct inquiry form and fast-response channels (Email, Phone/Zalo, WhatsApp, LinkedIn).
- [Writing Archive](${CANONICAL_ORIGIN}/posts): Complete chronological index of published essays and research notes.
- [AI Information & Entity Record](${CANONICAL_ORIGIN}/ai-information): Official ground-truth entity fact sheet, disambiguation rules, and JSON-LD citation schema for AI systems.
- [Full Knowledge Corpus (llms-full.txt)](${CANONICAL_ORIGIN}/llms-full.txt): Single-file complete Markdown corpus containing entity records, services, case study breakdowns, and full article texts.
- [RSS 2.0 Feed](${CANONICAL_ORIGIN}/rss.xml): Syndicated XML feed of recent publications.

## Verified Campaign Case Studies Summary

- **GTV SEO Agency (VN — B2B SEO & GEO):** #1 on ChatGPT/Claude/Grok & +61.4% CTR across flagship commercial B2B agency queries.
- **Repair Centre VIC (AU — Local & Technical SEO):** +210% organic clicks & +101.67% conversions in AU, reaching Google Australia Top 3–5 within 14 days.
- **Vinamilk Nutrition (VN — Enterprise FMCG):** 300K+ clicks/month & Top 3 in 2 weeks across high-competition maternal and infant nutrition topics.
- **EuroTravel (VN — High-Ticket Travel):** +200% user growth & 110% KPI (80K–100K monthly clicks) on European multi-country tour packages.
- **Flashlight E-Commerce (VN — Specialty Retail & B2G):** +45% organic traffic & 120% KPI (+25% Q4 YoY revenue and inbound B2G military supply contract).
- **Global Furniture E-Commerce (Global — English Storefront):** +50% organic traffic in 6 months, 100% 5-month KPI delivery, and recurring high-ticket organic orders.

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
