/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: { es2022: true, browser: true },
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  extends: ['eslint:recommended', 'prettier'],
  plugins: [],
  ignorePatterns: ['dist/', 'node_modules/'],
  overrides: [
    {
      files: ['**/*.{test,spec}.{js,ts,jsx,tsx}'],
      env: { node: true },
      globals: {
        describe: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        vi: 'readonly',
      },
    },
    {
      files: ['tests/e2e/**/*.{js,ts}'],
      env: { node: true },
      globals: { test: 'readonly', expect: 'readonly' },
    },
    {
      files: [
        '*.config.js',
        '**/*.config.js',
        'playwright.config.js',
        'vitest.config.js',
        'tailwind.config.js',
        '.eslintrc.cjs',
      ],
      env: { node: true },
    },
  ],
};
