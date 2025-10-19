const { defineConfig, devices } = require('@playwright/test');
const os = require('os');
const path = require('path');

const baseURL = process.env.BASE_URL || 'http://localhost:5173';
const isCI = !!process.env.CI;

module.exports = defineConfig({
  testDir: 'tests/e2e',
  outputDir: path.join(os.tmpdir(), 'playwright-test-results'),
  use: {
    baseURL,
  },
  webServer: {
    command: 'npm run dev',
    url: baseURL,
    reuseExistingServer: !isCI,
    timeout: 60_000,
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
