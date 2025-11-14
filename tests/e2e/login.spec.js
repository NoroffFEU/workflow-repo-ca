import { test, expect } from '@playwright/test';

const EMAIL = process.env.VALID_EMAIL;
const PASSWORD = process.env.VALID_PASSWORD;

test.describe('Login flow', () => {
  test('fails with invalid credentials', async ({ page }) => {
    await page.goto('/login');

    await page.fill('input[name="email"]', 'wrong@example.com');
    await page.fill('input[name="password"]', 'wrongpass');
    await page.click('button[type="submit"]');

    const error = await page.locator('#message-container');
    await expect(error).toBeVisible();
  });

  test('succeeds with valid credentials', async ({ page }) => {
    await page.goto('/login');

    await page.fill('input[name="email"]', EMAIL);
    await page.fill('input[name="password"]', PASSWORD);
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/\/$/);
  });
});
