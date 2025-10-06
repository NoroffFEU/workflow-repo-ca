import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: 'tests/e2e',
  retries: 1,
  reporter: [['list'], ['html']],
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:5173',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npm run start',
    port: 5173,
    reuseExistingServer: true,
  },
});
