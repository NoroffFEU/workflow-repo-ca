import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e', // Ensure this points to the correct directory
  fullyParallel: true,
  retries: 2,
  workers: 3,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000', // Ensure this matches your app's URL
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
