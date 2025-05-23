// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // run only unit tests by default
    include: ['src/**/*.test.{js,ts}'],
    // don’t try to run your Playwright/e2e tests here:
    exclude: ['tests/e2e/**'],
    // use jsdom so browser globals (localStorage, DOM) exist
    environment: 'jsdom',
  },
});
