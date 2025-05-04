import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  // 1. Node-miljø for config- og testfiler
  {
    files: ["playwright.config.*", "tests/**/*.js", "js/test/**/*.js"],
    languageOptions: {
      globals: globals.node,
    },
  },

  // 2. Browser-miljø for resten (vanlig frontend-kode)
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
    },
  },

  // 3. JS-standard for alle filer
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
]);
