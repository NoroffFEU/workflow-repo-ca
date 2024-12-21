// @ts-check
const { defineConfig, devices } = require("@playwright/test");
require("dotenv").config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  /* Reporter to use. */
  reporter: "html",
  /* Shared settings for all the projects below. */
  use: {
    /* Base URL for your tests */
    baseURL: "http://localhost:5500",
    /* Collect trace when retrying the failed test */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: "npm start", // Start the server on localhost:5500
    url: "http://localhost:5500", // Match your development server's port
    reuseExistingServer: true, // Reuse the server if already running
  },
});
