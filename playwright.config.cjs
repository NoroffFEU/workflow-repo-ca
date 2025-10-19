const { defineConfig } = require("@playwright/test");
require("dotenv").config();

module.exports = defineConfig({
  use: {
    baseURL: process.env.BASE_URL || "http://localhost:5173",
    headless: true,
  },
  reporter: [["list"], ["html", { outputFolder: "playwright-report", open: "never" }]],
  timeout: 30000,
});