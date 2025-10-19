module.exports = {
  root: true,
  env: { browser: true, es2022: true },
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  ignorePatterns: ['node_modules/', 'dist/', 'test-results/', '.vite/', '.husky/'],

  overrides: [
    {
      files: [
        '*.cjs',
        '*.mjs',
        '*.{config}.{js,ts}',
        '**/*.config.{js,ts}',
        'tailwind.config.js',
        'playwright.config.ts',
        'vitest.config.js',
      ],
      env: { node: true },
    },

    {
      files: ['tests/unit/**/*.{js,ts}'],
      env: { node: true },
      globals: {
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        beforeAll: 'readonly',
        afterEach: 'readonly',
        afterAll: 'readonly',
      },
    },

    {
      files: ['e2e/**/*.{js,ts}'],
      env: { node: true },
    },
  ],
};
