// @ts-check
const { defineConfig, devices } = require("@playwright/test");
require("dotenv").config();

module.exports = defineConfig({
  testDir: "./e2e",
  webServer: {
    command: "npm run start",
    url: process.env.WEB_SERVER_URL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: "html",
  use: {
    baseURL: process.env.BASE_URL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
