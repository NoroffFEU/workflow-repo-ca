module.exports = {
  root: true,
  env: { browser: true, node: true, es2021: true },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier", "playwright"],
  rules: { "prettier/prettier": "error" },

  overrides: [
    {
      files: ["**/*.{test,spec}.js"],
      globals: {
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeAll: "readonly",
        beforeEach: "readonly",
        afterAll: "readonly",
        afterEach: "readonly",
        vi: "readonly",
      },
    },
    {
      files: ["e2e/**/*.spec.{js,ts}"],
      extends: ["plugin:playwright/recommended"],
      env: { node: true },
    },
  ],
};
