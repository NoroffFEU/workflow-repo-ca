import { defineConfig } from "vite";

export default defineConfig({
  test: {
    enviorment: "jsdom",
    exclude: ["**/node_modules/**", "**/tests/**"],
  },
});
