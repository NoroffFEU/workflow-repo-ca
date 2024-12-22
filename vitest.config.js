import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    testDir: "tests/units",
    exclude: ["**/node_modules/**", "tests/e2e/**"],
  },
});
