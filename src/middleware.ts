import { defineMiddleware } from "astro:middleware";

/**
 * Canonicalize to the custom domain. The Worker is reachable at both
 * blog-emdash.tinledoihoa.workers.dev and tinlehoang.info.vn (same Worker,
 * same D1 database — not separate deployments). Serving both live is
 * duplicate content for SEO, and browser passkeys are origin-scoped, so a
 * passkey registered on one won't work on the other. Redirecting to a single
 * canonical origin fixes both.
 */
const WORKERS_DEV_HOST = "blog-emdash.tinledoihoa.workers.dev";
const CANONICAL_HOST = "tinlehoang.info.vn";

export const onRequest = defineMiddleware((context, next) => {
	const { url } = context;
	if (url.hostname === WORKERS_DEV_HOST) {
		const target = new URL(url);
		target.hostname = CANONICAL_HOST;
		return context.redirect(target.toString(), 301);
	}
	return next();
});
