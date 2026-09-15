import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { d1, r2 } from "@emdash-cms/cloudflare";
import { formsPlugin } from "@emdash-cms/plugin-forms";
import { defineConfig } from "astro/config";
import emdash from "emdash/astro";
import resend from "emdash-plugin-resend";

// Fonts are self-hosted (Euclid Circular A, see public/fonts/) or pulled via a
// plain Google Fonts @import (Plus Jakarta Sans fallback, Source Code Pro) in
// src/styles/theme.css — see "Tin Le Hoang Design System" handoff. Not routed
// through Astro's Fonts API since Euclid Circular A isn't a Google/Bunny font.
export default defineConfig({
	output: "server",
	adapter: cloudflare(),
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	integrations: [
		react(),
		emdash({
			database: d1({ binding: "DB", session: "auto" }),
			storage: r2({ binding: "MEDIA" }),
			// Trusted (non-sandboxed) plugins — both are "standard" format, which
			// runs fine here via adaptSandboxEntry without needing a sandboxRunner.
			plugins: [formsPlugin(), resend()],
			// Marketplace (browsing/installing plugins from the admin UI) requires a
			// sandboxRunner, which needs Cloudflare's Worker Loader — a paid-plan-only
			// binding. Disabled so the site fits the Free plan. Currently-used plugins
			// (forms) are unaffected; this only turns off installing NEW plugins from
			// the marketplace via /_emdash/admin.
		}),
	],
	devToolbar: { enabled: false },
});
