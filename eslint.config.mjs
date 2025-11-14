import js from '@eslint/js';
import globals from 'globals';
import vitest from 'eslint-plugin-vitest-globals';
import prettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // browser + vitest
  {
    files: ['**/*.{js,mjs,cjs}'],
    ignores: ['tests/e2e/**', 'playwright.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...vitest.environments.env.globals,
      },
    },
    plugins: { prettier },
    rules: {
      ...js.configs.recommended.rules,
      'prettier/prettier': 'warn',
    },
  },
  // tailwind config (node)
  {
    files: ['tailwind.config.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  // playwright + e2e tests (node)
  {
    files: ['playwright.config.js', 'tests/e2e/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]);
