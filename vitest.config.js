// vite.config.js
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom", // or 'node'
  },
});
