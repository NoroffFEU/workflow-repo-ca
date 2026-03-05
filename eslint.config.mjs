import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Browser JS files
  {
    files: ["**/*.{js,mjs,cjs}"],
    ignores: ["tailwind.config.js"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
  },

  // Node config files
  {
    files: ["tailwind.config.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // Vitest test files
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
      },
    },
  },
]);