import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-vercel';

export default {
	preprocess: vitePreprocess({
		replace: [['__DATE__', new Date().toISOString()]],
	}),
	compilerOptions: {
		cssHash: ({ hash, css }) => `s-${hash(css)}`,
	},
	kit: {
       adapter: adapter(),
    },
};
