require("dotenv").config();

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:5503',
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:5503',
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
  testDir: './tests/playwright',
});
