import { defineConfig } from "@playwright/test";
import "dotenv/config";

export default defineConfig({
  testDir: "./tests/e2e",
  use: {
    baseURL: "http://127.0.0.1:3000",
    browserName: "chromium",
  },
  webServer: {
    command: "npx http-server . -a 127.0.0.1 -p 3000 -c-1",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: true,
  },
});
