// vite.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.test.js'], // Include only .test.js files
    exclude: ['tests/**/*.spec.js', 'node_modules', 'dist'], // Exclude Playwright and irrelevant files
  },
});
