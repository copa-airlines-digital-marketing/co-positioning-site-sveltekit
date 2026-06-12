import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { imagetools } from 'vite-imagetools';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { vite as vidstack } from 'vidstack/plugins';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
	plugins: [tailwindcss(), imagetools(), enhancedImages(), sveltekit(), vidstack({ include: /player\// })],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
