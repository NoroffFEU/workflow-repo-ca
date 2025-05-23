// tests/e2e/login.spec.js
import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

test.describe('login', () => {
  test('valid credentials log you in', async ({ page }) => {
    await page.goto('/login/index.html');
    await page.fill('input[name="email"]', process.env.VALID_EMAIL);
    await page.fill('input[name="password"]', process.env.VALID_PASSWORD);
    await page.click('button[type="submit"]');
    await expect(page.locator('#menu-container')).toBeVisible();
  });

  test('invalid credentials show error', async ({ page }) => {
    await page.goto('/login/index.html');
    await page.fill('input[name="email"]', 'bad@stud.noroff.no');
    await page.fill('input[name="password"]', 'wrongpass');
    await page.click('button[type="submit"]');
    await expect(page.locator('#message-container')).toContainText(
      /invalid email or password/i
    );
  });
});
