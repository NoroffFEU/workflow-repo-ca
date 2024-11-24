const { test, expect } = require('@playwright/test');
require('dotenv').config();

test.describe('Login Tests', () => {
  test('User can log in with valid credentials', async ({ page }) => {
    await page.goto('/auth/login.html');
    await page.fill('#email', process.env.VALID_EMAIL);
    await page.fill('#password', process.env.VALID_PASSWORD);
    await page.click('button[type="submit"]');

    await expect(page).toHaveURL('/profile/index.html');
  });

  test('Displays error for invalid credentials', async ({ page }) => {
    await page.goto('/auth/login.html');
    await page.fill('#email', 'invalid@example.com');
    await page.fill('#password', 'wrongpassword');
    await page.click('button[type="submit"]');

    const errorContainer = await page.locator('#error-container');
    await expect(errorContainer).toBeVisible();
    await expect(errorContainer).toHaveText(/Login failed/);
  });
});
