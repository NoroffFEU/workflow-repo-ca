module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:vitest/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Add any specific rules you want to enforce
  },
  globals: {
    test: 'readonly',
    expect: 'readonly',
    describe: 'readonly',
    beforeEach: 'readonly',
    localStorage: 'readonly',
  },
};
