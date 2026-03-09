import { test, expect } from '@playwright/test';

test('user can log in with valid credentials', async ({ page }) => {
  await page.goto('/login');

  await page.fill('input[name="email"]', process.env.E2E_EMAIL);
  await page.fill('input[name="password"]', process.env.E2E_PASSWORD);

  await page.click('button[type="submit"]');

  await expect(page.locator('#message-container')).not.toBeVisible();
});

test('shows error with invalid credentials', async ({ page }) => {
  await page.goto('/login');

  await page.fill('input[name="email"]', 'wrong@test.com');
  await page.fill('input[name="password"]', 'wrongpassword');

  await page.click('button[type="submit"]');

  await expect(page.locator('#message-container')).toBeVisible();
});