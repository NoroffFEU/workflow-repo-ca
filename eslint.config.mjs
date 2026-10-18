import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["coverage/**", "playwright-report/**", "test-results/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ["*.config.js", "*.config.mjs"],
    languageOptions: {
      globals: globals.node,
    },
  },

  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
        test: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
      },
    },
  },
];
