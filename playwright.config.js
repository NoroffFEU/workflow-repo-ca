import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e", // Define where the tests are stored
  use: {
    baseURL: "http://localhost:5173", // Define your development server base URL
    headless: true, // Run tests in headless mode by default
  },
});
