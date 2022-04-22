import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "../../src/hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t\n\t\t<!-- UIkit CSS -->\n\t\t <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/css/uikit.min.css\" /> \n\n\t\t<!-- UIkit JS -->\n\t\t<script src=\"https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/js/uikit.min.js\"></script>\n\t\t<script src=\"https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/js/uikit-icons.min.js\"></script>\n\t\t\n\t\t" + head + "\n\t\t\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n\n\n";

let options = null;

const default_settings = { paths: {"base":"/reuselabs/reuselabs.github.io","assets":"/reuselabs/reuselabs.github.io"} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/reuselabs/reuselabs.github.io/_app/start-84b1684b.js",
			css: ["/reuselabs/reuselabs.github.io/_app/assets/start-a8cd1609.css"],
			js: ["/reuselabs/reuselabs.github.io/_app/start-84b1684b.js","/reuselabs/reuselabs.github.io/_app/chunks/vendor-3a42b241.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/reuselabs/reuselabs.github.io/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: /** @param {Error & {frame?: string}} error */ (error) => {
			if (error.frame) {
				console.error(error.frame);
			}
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":".DS_Store","size":6148,"type":null},{"file":".nojekyll","size":0,"type":null},{"file":"favicon.png","size":1571,"type":"image/png"},{"file":"json_files/faq_en.json","size":9594,"type":"application/json"},{"file":"json_files/faq_nl.json","size":7370,"type":"application/json"},{"file":"json_files/frdata copy.json","size":1411,"type":"application/json"},{"file":"json_files/frdata.json","size":11551,"type":"application/json"},{"file":"json_files/new_json_old.json","size":6138,"type":"application/json"},{"file":"json_files/research_economics.json","size":958,"type":"application/json"},{"file":"json_files/research_politics.json","size":798,"type":"application/json"},{"file":"json_files/research_sciences.json","size":1168,"type":"application/json"},{"file":"pictures/banner.jpg","size":310087,"type":"image/jpeg"},{"file":"pictures/elon.jpeg","size":93464,"type":"image/jpeg"},{"file":"pictures/logo_economics.png","size":78425,"type":"image/png"},{"file":"pictures/logo_political.png","size":72985,"type":"image/png"},{"file":"pictures/logo_sciences.png","size":54450,"type":"image/png"},{"file":"pictures/logo_ugent.png","size":56311,"type":"image/png"},{"file":"pictures/neil.jpeg","size":79549,"type":"image/jpeg"},{"file":"pictures/train1.jpg","size":361290,"type":"image/jpeg"},{"file":"pictures/train1_old.jpg","size":165383,"type":"image/jpeg"},{"file":"pictures/train2.jpg","size":416607,"type":"image/jpeg"},{"file":"pictures/train3.jpg","size":276503,"type":"image/jpeg"},{"file":"pictures/train3_old.jpg","size":436789,"type":"image/jpeg"},{"file":"robots.txt","size":67,"type":"text/plain"},{"file":"stories_pics/Peter.jpg","size":94126,"type":"image/jpeg"},{"file":"stories_pics/mieke_van_houtte.jpg","size":326042,"type":"image/jpeg"},{"file":"stories_pics/profile-picture-hans-verbeeck.png","size":366971,"type":"image/png"},{"file":"stories_pics/thomas.jpg","size":566426,"type":"image/jpeg"},{"file":"svelte-welcome.png","size":360807,"type":"image/png"},{"file":"svelte-welcome.webp","size":115470,"type":"image/webp"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/stories backup\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/stories backup.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/stories copy\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/stories copy.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/about_us\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/about_us.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/research\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/research.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/stories\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/stories.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/faq_en\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/faq_en.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/faqs\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/faqs.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/map\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/map.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	serverFetch: hooks.serverFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/stories backup.svelte": () => import("../../src/routes/stories backup.svelte"),"src/routes/stories copy.svelte": () => import("../../src/routes/stories copy.svelte"),"src/routes/about_us.svelte": () => import("../../src/routes/about_us.svelte"),"src/routes/research.svelte": () => import("../../src/routes/research.svelte"),"src/routes/stories.svelte": () => import("../../src/routes/stories.svelte"),"src/routes/faq_en.svelte": () => import("../../src/routes/faq_en.svelte"),"src/routes/faqs.svelte": () => import("../../src/routes/faqs.svelte"),"src/routes/map.svelte": () => import("../../src/routes/map.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"/reuselabs/reuselabs.github.io/_app/pages/__layout.svelte-c6d2bee8.js","css":["/reuselabs/reuselabs.github.io/_app/assets/pages/__layout.svelte-b8eacdd9.css"],"js":["/reuselabs/reuselabs.github.io/_app/pages/__layout.svelte-c6d2bee8.js","/reuselabs/reuselabs.github.io/_app/chunks/vendor-3a42b241.js"],"styles":[]},".svelte-kit/build/components/error.svelte":{"entry":"/reuselabs/reuselabs.github.io/_app/error.svelte-08c0d41d.js","css":[],"js":["/reuselabs/reuselabs.github.io/_app/error.svelte-08c0d41d.js","/reuselabs/reuselabs.github.io/_app/chunks/vendor-3a42b241.js"],"styles":[]},"src/routes/index.svelte":{"entry":"/reuselabs/reuselabs.github.io/_app/pages/index.svelte-81ff75d4.js","css":[],"js":["/reuselabs/reuselabs.github.io/_app/pages/index.svelte-81ff75d4.js","/reuselabs/reuselabs.github.io/_app/chunks/vendor-3a42b241.js"],"styles":[]},"src/routes/stories backup.svelte":{"entry":"/reuselabs/reuselabs.github.io/_app/pages/stories backup.svelte-cf77f83f.js","css":["/reuselabs/reuselabs.github.io/_app/assets/pages/stories backup.svelte-dacadb0d.css"],"js":["/reuselabs/reuselabs.github.io/_app/pages/stories backup.svelte-cf77f83f.js","/reuselabs/reuselabs.github.io/_app/chunks/vendor-3a42b241.js","/reuselabs/reuselabs.github.io/_app/chunks/frdata-39ced9f7.js"],"styles":[]},"src/routes/stories copy.svelte":{"entry":"/reuselabs/reuselabs.github.io/_app/pages/stories copy.svelte-f8d7ccfe.js","css":["/reuselabs/reuselabs.github.io/_app/assets/pages/stories copy.svelte-35bbc88f.css"],"js":["/reuselabs/reuselabs.github.io/_app/pages/stories copy.svelte-f8d7ccfe.js","/reuselabs/reuselabs.github.io/_app/chunks/vendor-3a42b241.js","/reuselabs/reuselabs.github.io/_app/chunks/frdata-39ced9f7.js"],"styles":[]},"src/routes/about_us.svelte":{"entry":"/reuselabs/reuselabs.github.io/_app/pages/about_us.svelte-53309354.js","css":["/reuselabs/reuselabs.github.io/_app/assets/pages/about_us.svelte-725309bd.css"],"js":["/reuselabs/reuselabs.github.io/_app/pages/about_us.svelte-53309354.js","/reuselabs/reuselabs.github.io/_app/chunks/vendor-3a42b241.js"],"styles":[]},"src/routes/research.svelte":{"entry":"/reuselabs/reuselabs.github.io/_app/pages/research.svelte-32b89d06.js","css":[],"js":["/reuselabs/reuselabs.github.io/_app/pages/research.svelte-32b89d06.js","/reuselabs/reuselabs.github.io/_app/chunks/vendor-3a42b241.js"],"styles":[]},"src/routes/stories.svelte":{"entry":"/reuselabs/reuselabs.github.io/_app/pages/stories.svelte-62861d35.js","css":["/reuselabs/reuselabs.github.io/_app/assets/pages/stories backup.svelte-dacadb0d.css"],"js":["/reuselabs/reuselabs.github.io/_app/pages/stories.svelte-62861d35.js","/reuselabs/reuselabs.github.io/_app/chunks/vendor-3a42b241.js","/reuselabs/reuselabs.github.io/_app/chunks/frdata-39ced9f7.js"],"styles":[]},"src/routes/faq_en.svelte":{"entry":"/reuselabs/reuselabs.github.io/_app/pages/faq_en.svelte-283828a1.js","css":["/reuselabs/reuselabs.github.io/_app/assets/pages/faq_en.svelte-7590e057.css"],"js":["/reuselabs/reuselabs.github.io/_app/pages/faq_en.svelte-283828a1.js","/reuselabs/reuselabs.github.io/_app/chunks/vendor-3a42b241.js"],"styles":[]},"src/routes/faqs.svelte":{"entry":"/reuselabs/reuselabs.github.io/_app/pages/faqs.svelte-2b53a4f7.js","css":["/reuselabs/reuselabs.github.io/_app/assets/pages/faq_en.svelte-7590e057.css"],"js":["/reuselabs/reuselabs.github.io/_app/pages/faqs.svelte-2b53a4f7.js","/reuselabs/reuselabs.github.io/_app/chunks/vendor-3a42b241.js","/reuselabs/reuselabs.github.io/_app/pages/faq_en.svelte-283828a1.js"],"styles":[]},"src/routes/map.svelte":{"entry":"/reuselabs/reuselabs.github.io/_app/pages/map.svelte-8ad8fb7f.js","css":[],"js":["/reuselabs/reuselabs.github.io/_app/pages/map.svelte-8ad8fb7f.js","/reuselabs/reuselabs.github.io/_app/chunks/vendor-3a42b241.js"],"styles":[]}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}