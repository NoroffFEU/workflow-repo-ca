import { defineConfig } from "@playwright/test";
import * as dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  // Only run E2E specs
  testDir: "tests/e2e",
  testMatch: ["**/*.spec.js"],
  testIgnore: ["**/unit/**", "**/*.test.*"],

  use: {
    baseURL: process.env.BASE_URL || "http://localhost:5173",
    trace: "on-first-retry",
  },
  timeout: 30_000,
  retries: 0,
  webServer: {
    command: "npm run serve",
    port: 5173,
    reuseExistingServer: true,
  },
});
