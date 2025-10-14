import js from '@eslint/js';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node, // include this to cover config files like tailwind.config.js
        describe: true,
        test: true,
        it: true,
        expect: true,
      },
    },
  },
  js.configs.recommended, // ✅ this is the correct usage
];
