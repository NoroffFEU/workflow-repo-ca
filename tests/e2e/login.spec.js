import { test, expect } from '@playwright/test';

test.describe('login', () => {
  test('allows login with valid user credentials', async ({ page }) => {
    expect(process.env.TEST_EMAIL).toBeTruthy();
    expect(process.env.TEST_PASSWORD).toBeTruthy();

    await page.goto('/login/');

    await page.locator('input[name="email"]').fill(process.env.TEST_EMAIL);
    await page.locator('input[name="password"]').fill(process.env.TEST_PASSWORD);

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
  });

  test('login fails when incorrect credentials are used', async ({ page }) => {
    await page.goto('/login/');

    await page.locator('input[name="email"]').fill('wrong@example.com');
    await page.locator('input[name="password"]').fill('wrongpassword');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/\/login/);
  });
});
