const { defineConfig } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
  testDir: './tests',
  use: {
    baseURL: process.env.BASE_URL || 'http://127.0.0.1:8080',
    headless: false,       // so browser UI shows up
    slowMo: 6000,          // slows down actions by 6000ms
  },
});
