import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './e2etests',
  timeout: 30000,
  use: {
    baseURL: 'http://127.0.0.1:5500',
    headless: true,
  },
});
