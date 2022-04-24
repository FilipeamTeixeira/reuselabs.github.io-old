import adapter from 'svelte-adapter-github'; // was @sveltejs/adapter-static

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			domain: null,
			jekyll: false,
			fallback: null,
			precompress: false
		}),
		paths: {
			base: dev ? '' : '/reuselabs/reuselabs.github.io',
		},
		// hydrate the <div id="svelte"> element in src/app.html
		//target: '#svelte'
		appDir: 'internal',
	}
};

export default config;
