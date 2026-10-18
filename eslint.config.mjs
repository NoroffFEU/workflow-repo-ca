import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser } },
  },

  {
    files: ["tailwind.config.js", "**/*.config.js", "**/*.config.cjs"],
    languageOptions: {
      sourceType: "module",
      globals: { ...globals.node },
    },
  },

  {
    files: [ "tests/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
        describe: "readonly",
        test: "readonly",
        it: "readonly",
        expect: "readonly",
        vi: "readonly",
      },
    },
  },
]);
