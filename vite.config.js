import { defineConfig } from 'vitest/config';

export default defineConfig({
	appType: 'mpa',
	base: '',
	test: {
		environment: 'jsdom',
		coverage: {
			provider: 'istanbul',
		},
	},
	build: {
		target: 'esnext',
	},
});
