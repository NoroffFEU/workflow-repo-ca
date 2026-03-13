import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

export default defineConfig({
  testDir: './playwright/',

  use: {
    baseURL: 'http://127.0.0.1:8080',
  },
  webServer: {
    command: 'npm run dev',
    url: 'http://127.0.0.1:8080',
    reuseExistingServer: true,
  },
});
