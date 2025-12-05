import pluginJs from "@eslint/js";
import globals from "globals";
/** @type {import('eslint').Linter.config[]} */

export default([
  pluginJs.configs.recommended,
  {
    languageOptions: { 
      globals: {
        ...globals.browser,
        describe: true,
        test: true,
        it: true,
        expect: true,
        require: true,
        module: true,
        process: true
      } 
    } 
  },
]);