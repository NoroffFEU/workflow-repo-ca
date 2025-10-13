/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['js/**/*.test.js'], // Only include unit tests
    exclude: ['tests/**'], // Ignore Playwright tests
  },
});
