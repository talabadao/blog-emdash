/** Resolved media reference from getSiteSettings() */
export interface MediaReference {
	mediaId: string;
	alt?: string;
	url?: string;
}

export interface BlogSiteIdentitySettings {
	title?: string;
	tagline?: string;
	logo?: MediaReference;
	favicon?: MediaReference;
}

const DEFAULT_SITE_TITLE = "Le Hoang Tin";
const DEFAULT_SITE_TAGLINE = "Senior SEO & GEO Specialist · Ho Chi Minh City";

const LEGACY_TEMPLATE_TITLES = new Set(["My Blog", "EmDash", "EmDash Blog"]);
const LEGACY_TEMPLATE_TAGLINES = new Set([
	"Thoughts, stories, and ideas.",
	"Thoughts on building for the web",
	"Thoughts on building for the web.",
	"SEO Specialist from Ho Chi Minh City.",
]);

export function resolveBlogSiteIdentity(settings?: BlogSiteIdentitySettings) {
	const rawTitle = settings?.title?.trim();
	const rawTagline = settings?.tagline?.trim();

	const siteTitle =
		rawTitle && !LEGACY_TEMPLATE_TITLES.has(rawTitle)
			? rawTitle
			: DEFAULT_SITE_TITLE;

	const siteTagline =
		rawTagline && !LEGACY_TEMPLATE_TAGLINES.has(rawTagline)
			? rawTagline
			: DEFAULT_SITE_TAGLINE;

	return {
		siteTitle,
		siteTagline,
		siteLogo: settings?.logo?.url ? settings.logo : null,
	};
}
