import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        describe: true,
        it: true,
        expect: true,
        test: true,
        global: true,
      },
    },
  },
  pluginJs.configs.recommended,
];
