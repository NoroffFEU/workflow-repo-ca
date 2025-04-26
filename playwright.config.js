import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:5500',
    reuseExistingServer: !process.env.CI,
  },
  testDir: './tests/e2e',
  use: {
    baseURL: 'http://localhost:5500',
    headless: true,
  },
});
