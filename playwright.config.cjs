/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: "./tests",
  testMatch: ["**/*.spec.{js,ts}"],
  testIgnore: ["**/unit/**", "**/*.test.{js,ts}"],

  reporter: [["list"], ["html", { open: "never" }]],
  use: { baseURL: "http://localhost:5500" },
  webServer: {
    command: "npm run start",
    port: 5500,
    reuseExistingServer: true,
    timeout: 60000,
  },
};
module.exports = config;
