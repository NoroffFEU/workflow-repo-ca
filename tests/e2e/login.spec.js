import { test, expect } from '@playwright/test';
import 'dotenv/config';

test('user can log in with valid credentials', async ({ page }) => {
  await page.goto('/login');
  await page.fill('#username', process.env.TEST_USERNAME);
  await page.fill('#password', process.env.TEST_PASSWORD);
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('/dashboard');
});

test('user sees error message with invalid credentials', async ({ page }) => {
  await page.goto('/login');
  await page.fill('#username', 'invalid');
  await page.fill('#password', 'invalid');
  await page.click('button[type="submit"]');
  await expect(page.locator('.error-message')).toBeVisible();
});
