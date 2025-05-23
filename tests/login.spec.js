import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const { LOGIN_USERNAME, LOGIN_PASSWORD, BASE_URL } = process.env;

test('User can log in with valid credentials', async ({ page }) => {
  await page.goto(`${BASE_URL}/login/`);

  await page.fill('input[name="email"]', LOGIN_USERNAME);
  await page.fill('input[name="password"]', LOGIN_PASSWORD);
  await page.click('button[type="submit"]');

  await expect(page.locator('text=Welcome')).toBeVisible({ timeout: 5000 });
});

test('User sees error with invalid credentials', async ({ page }) => {
  await page.goto(`${BASE_URL}/login/`);

  await page.fill('input[name="email"]', 'wrong@example.com');
  await page.fill('input[name="password"]', 'wrongpassword');
  await page.click('button[type="submit"]');

  await expect(page.locator('#message-container')).toContainText('noroff.no');
});
