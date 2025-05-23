import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [
      'tests/**/*.spec.js', // exclude your Playwright tests
      'node_modules/**', // exclude all node_modules tests
    ],
  },
});
