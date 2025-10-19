import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['tests/unit/**/*.test.{js,ts}'],
    exclude: [
      'node_modules/**',
      'dist/**',
      'e2e/**',
      '.idea/**',
      '.git/**',
      '.cache/**',
      'playwright-report/**',
      'test-results/**',
    ],
  },
});
git;
