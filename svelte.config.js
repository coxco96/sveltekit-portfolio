import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: vercel()
  },
  svelte: {
    compilerOptions: {
      runes: true
    }
  }
};

export default config;











// import vercel from '@sveltejs/adapter-vercel';
// const config = {
// 	compilerOptions: {
// 		runes: true
// 	},
// 	kit: {
// 		adapter: vercel()
// 	}
// };

// export default config;





// import vercel from '@sveltejs/adapter-vercel';
// // import { vitePreprocess } from '@sveltejs/kit/vite';

// // /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	// preprocess: vitePreprocess(),
// 	compilerOptions: {
// 		runes: true
// 	},
// 	kit: {
// 		adapter: vercel()
// 	}
// };

// export default config;

// import vercel from '@sveltejs/adapter-vercel';
// import sveltePreprocess from 'svelte-preprocess';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	preprocess: sveltePreprocess(),
// 	compilerOptions: {
// 		runes: true
// 	},
// 	kit: {
// 		adapter: vercel()
// 	}
// };

// export default config;
