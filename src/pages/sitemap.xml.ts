import type { APIRoute } from "astro";
import { getEmDashCollection } from "emdash";

const CANONICAL_ORIGIN = "https://tinlehoang.info.vn";

const STATIC_ROUTES: Array<{
	path: string;
	changefreq: string;
	priority: string;
}> = [
	{ path: "/", changefreq: "weekly", priority: "1.0" },
	{ path: "/about", changefreq: "monthly", priority: "0.9" },
	{ path: "/posts", changefreq: "weekly", priority: "0.9" },
	{ path: "/projects", changefreq: "monthly", priority: "0.9" },
	{ path: "/portfolio", changefreq: "monthly", priority: "0.9" },
	{ path: "/tools", changefreq: "monthly", priority: "0.8" },
	{ path: "/contact", changefreq: "monthly", priority: "0.8" },
	{ path: "/ai-information", changefreq: "monthly", priority: "0.8" },
];

export const GET: APIRoute = async () => {
	const { entries: posts } = await getEmDashCollection("posts", {
		orderBy: { published_at: "desc" },
		limit: 100,
	});

	const nowIso = new Date().toISOString().slice(0, 10);

	const staticUrlNodes = STATIC_ROUTES.map(
		(route) => `  <url>
    <loc>${CANONICAL_ORIGIN}${route.path}</loc>
    <lastmod>${nowIso}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
	);

	const postUrlNodes = posts.map((post) => {
		const lastmodDate =
			post.data.updatedAt || post.data.publishedAt || post.data.createdAt;
		const lastmod = lastmodDate
			? lastmodDate.toISOString().slice(0, 10)
			: nowIso;
		return `  <url>
    <loc>${CANONICAL_ORIGIN}/posts/${escapeXml(post.id)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
	});

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrlNodes, ...postUrlNodes].join("\n")}
</urlset>`;

	return new Response(xml, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
			"Cache-Control": "public, max-age=3600",
		},
	});
};

const XML_ESCAPE_PATTERNS = [
	[/&/g, "&amp;"],
	[/</g, "&lt;"],
	[/>/g, "&gt;"],
	[/"/g, "&quot;"],
	[/'/g, "&apos;"],
] as const;

function escapeXml(str: string): string {
	let result = str;
	for (const [pattern, replacement] of XML_ESCAPE_PATTERNS) {
		result = result.replace(pattern, replacement);
	}
	return result;
}
