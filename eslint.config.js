module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        jest: true,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      semi: ["error", "always"],
    },
  },
];
