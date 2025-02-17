import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": new URL("./js", import.meta.url).pathname, // Setter @ til å peke på js-mappen
    },
  },

  test: {
    environment: "jsdom", // Setter opp et falskt nettlesermiljø for testene dine
    exclude: ["**/node_modules/**", "**/tests/e2e/**", "**/tests-examples/**"], // Ekskluder Playwright-testene
  },
});
