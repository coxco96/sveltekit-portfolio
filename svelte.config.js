import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			// assets: 'static',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		prerender: {
			entries: [
				'/portfolio/when-caitlin-clark-comes-to-town',
				'/portfolio/archer-woo',
				'/portfolio/idk',
				'/portfolio/featured-2',
				'/portfolio/featured-3'
			]
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/sveltekit-gh-pages' : ''
		}
	}
};

export default config;
