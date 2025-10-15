import { test, expect } from '@playwright/test';

const RUNTIME_EMAIL = `e2e_${Date.now()}@stud.noroff.no`;
const RUNTIME_PASSWORD = 'Password123!';

test.describe.serial('login flow with registration', () => {
  test('registers a new user (setup)', async ({ page }) => {
    await page.goto('/register/');

    await page.getByPlaceholder('Name').fill('E2E User');
    await page.getByPlaceholder('Email').fill(RUNTIME_EMAIL);
    await page.getByPlaceholder('Password').fill(RUNTIME_PASSWORD);
    await page.getByRole('button', { name: /^register$/i }).click();

    await expect(page.locator('#message-container')).not.toContainText(
      /invalid|error|incorrect|noroff/i,
      {
        timeout: 10000,
      }
    );
  });

  test('User can successfully log in with valid credentials', async ({ page }) => {
    await page.goto('/login/');
    await page.getByPlaceholder('Email').fill(RUNTIME_EMAIL);
    await page.getByPlaceholder('Password').fill(RUNTIME_PASSWORD);
    await page.getByRole('button', { name: /^login$/i }).click();

    await expect(page.locator('#message-container')).not.toContainText(
      /invalid|error|incorrect|noroff/i,
      { timeout: 10000 }
    );
  });

  test('User sees an error message with invalid credentials', async ({ page }) => {
    await page.goto('/login/');
    await page.getByPlaceholder('Email').fill(RUNTIME_EMAIL);
    await page.getByPlaceholder('Password').fill('WrongPass123!');
    await page.getByRole('button', { name: /^login$/i }).click();

    await expect(page.locator('#message-container')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('#message-container')).toContainText(
      /invalid|error|incorrect|noroff/i,
      {
        timeout: 10000,
      }
    );
  });
});
