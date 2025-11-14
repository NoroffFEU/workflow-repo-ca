// playwright.config.js
import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests/e2e',
  use: {
    baseURL: process.env.BASE_URL || 'http://127.0.0.1:3000',
    headless: true,
  },
  reporter: 'list',
});
