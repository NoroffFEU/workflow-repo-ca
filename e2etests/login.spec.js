import { test, expect } from '@playwright/test';

test.describe('Login flow', () => {
  test('logs in successfully with valid credentials', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/login/');

    await page.fill('input[name="email"]', process.env.VITE_EMAIL);
    await page.fill('input[name="password"]', process.env.VITE_PASSWORD);
    await page.click('button[type="submit"]');

    await expect(page).toHaveURL('http://127.0.0.1:5500/login/');
  });

  test('shows error with invalid credentials', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/login');

    await page.fill('input[name="email"]', 'fake@test.com');
    await page.fill('input[name="password"]', 'wrongpass');
    await page.click('button[type="submit"]');

    await expect(
      page.locator('text=/Invalid email or password|noroff\\.no/'),
    ).toBeVisible({ timeout: 10000 });
  });
});
