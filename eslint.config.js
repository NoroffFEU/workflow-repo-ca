import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,

  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
  },

  {
    files: ["tests/**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
      },
    },
  },

  {
    files: ["tailwind.config.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        module: "readonly",
        require: "readonly",
      },
    },
  },

  {
    files: ["playwright.config.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  {
    files: ["e2e/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
