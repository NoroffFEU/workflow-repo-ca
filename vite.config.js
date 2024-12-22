import { defineConfig } from 'vitest/config';

export default defineConfig({
	appType: 'mpa',
	base: '',
	test: {
		environment: 'jsdom',
		coverage: {
			provider: 'istanbul',
		},
		exclude: ['**/*.spec.js', '**/node_modules/**', '**/coverage/**'],
	},
	build: {
		target: 'esnext',
	},
});
