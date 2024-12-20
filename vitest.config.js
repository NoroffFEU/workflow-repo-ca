import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // Used for browser-like testing, f.eks localStorage
    exclude: ["**/*.spec.js**"],
  },
});
