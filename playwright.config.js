import { defineConfig } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  use: {
    baseURL: process.env.BASE_URL || "http://localhost:5173",
  },
  webServer: {
    command: "npm run start",
    port: 5173,
    reuseExistingServer: true,
  },
});
