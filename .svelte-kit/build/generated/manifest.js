const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/stories backup.svelte"),
	() => import("../../../src/routes/stories copy.svelte"),
	() => import("../../../src/routes/about_us.svelte"),
	() => import("../../../src/routes/research.svelte"),
	() => import("../../../src/routes/stories.svelte"),
	() => import("../../../src/routes/faq_en.svelte"),
	() => import("../../../src/routes/faqs.svelte"),
	() => import("../../../src/routes/map.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/stories backup.svelte
	[/^\/stories backup\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/stories copy.svelte
	[/^\/stories copy\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/about_us.svelte
	[/^\/about_us\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/research.svelte
	[/^\/research\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/stories.svelte
	[/^\/stories\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/faq_en.svelte
	[/^\/faq_en\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/faqs.svelte
	[/^\/faqs\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/map.svelte
	[/^\/map\/?$/, [c[0], c[10]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];