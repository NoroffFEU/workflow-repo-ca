import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "jsdom",
    exclude: ["tests/**", "node_modules/**"],
  },
});
