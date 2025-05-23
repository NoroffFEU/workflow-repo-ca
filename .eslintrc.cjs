// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vitest/recommended',  // brings in vitest/globals
    'prettier'
  ],
  plugins: ['vitest'],
  overrides: [
    {
      // all unit and e2e test files
      files: ['**/*.test.js', '**/*.spec.js'],
      env: {
        'vitest/globals': true,  // test(), expect(), etc.
        node: true,               // allows `global`, `__dirname` etc.
        browser: true             // allows `window`, `localStorage` etc.
      },
      rules: {
        
        'no-undef': 'off'
      }
    },
    {
      // configuration files (vite.config.js, playwright.config.js, etc.)
      files: ['*.config.js'],
      env: { node: true }
    }
  ],
  rules: {

  }
};
