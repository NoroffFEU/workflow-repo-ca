// eslint.config.mjs
import pluginJs from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['node_modules', 'dist', '.playwright'] },

  // base (browser) + your test/node-ish globals
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        describe: 'readonly',
        test: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        require: 'readonly',
        module: 'readonly',
        process: 'readonly',
      },
    },
  },

  pluginJs.configs.recommended,

  // keep this last
  prettier,
];
