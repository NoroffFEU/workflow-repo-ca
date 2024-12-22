// import { defineConfig } from "@playwright/test";
// require("dotenv").config();

// export default defineConfig({
//   testDir: "./tests/e2e",
//   fullyParallel: false,
//   webServer: {
//     command: "npm run start",
//     url: "http://localhost:5500",
//     reuseExistingServer: !process.env.CI,
//   },
//   use: {
//     baseURL: "http://localhost:5500",
//   },
//   reporter: [["html", { open: "on-failure" }]],
// });

// @ts-check
const { defineConfig, devices } = require("@playwright/test");
require("dotenv").config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: "./tests", // Directory for your test files
  fullyParallel: false, // Run tests in parallel
  forbidOnly: !!process.env.CI, // Fail on accidental .only in CI
  retries: process.env.CI ? 2 : 0, // Retry on CI only
  workers: 1, // Opt out of parallel tests on CI
  reporter: "html", // Reporter format (HTML is useful for UI reports)
  // use: {
  //   baseURL: "http://localhost:5500", // Ensure this matches where your live server runs
  //   trace: "on-first-retry", // Collect trace when retrying failed tests
  // },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    // Uncomment if you want to test with Firefox or Webkit
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
  webServer: {
    command: "npm run start",
    url: "http://localhost:5500",
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: "http://localhost:5500",
  },
});
