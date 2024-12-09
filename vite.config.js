import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	appType: 'mpa',
	base: '',
	test: {
		coverage: {
			provider: 'istanbul',
		},
	},
	build: {
		target: 'esnext',
	},
});
