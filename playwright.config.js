import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  testMatch: "**/*.spec.js",
  use: {
    baseURL: "http://localhost:5173",
  },
});
