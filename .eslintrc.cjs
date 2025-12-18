module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      // Vitest test files
      files: ["js/utils/**/*.test.js"],
      env: {
        browser: true,
        es2021: true,
      },
      globals: {
        vi: "readonly",
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
      },
    },
    {
      // Playwright tests (Node + process.env)
      files: ["test/**/*.js"],
      env: {
        node: true,
        es2021: true,
      },
      globals: {
        process: "readonly",
      },
    },
    {
      // Config-filer som kjører i Node (module.exports osv.)
      files: [
        "tailwind.config.js",
        "vitest.config.mjs",
        "playwright.config.mjs",
      ],
      env: {
        node: true,
        es2021: true,
      },
    },
  ],
  rules: {},
};
