import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  use: {
    headless: true,
    baseURL: "http://127.0.0.1:5500",
    screenshot: "on",
    video: "on",
  },
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
});
