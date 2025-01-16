import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        module: true,
        require: true,
        process: true,
        test: true,
      },
    },
  },
];
