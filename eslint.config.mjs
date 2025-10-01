// eslint.config.mjs
import pluginJs from "@eslint/js";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        describe: "readonly",
        test: "readonly",
        it: "readonly",
        expect: "readonly",
        require: "readonly",
        module: "readonly",
        process: "readonly",
      },
    },
  },
  pluginJs.configs.recommended,
];
