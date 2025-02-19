import { test, expect } from '@playwright/test';

test.describe('login', () => {
  test('when the first venue is clicked from the home page it should display venue details', async ({
    page,
  }) => {
    // Go to the login page
    await page.goto('/login');

    // Fill in email and password
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    // Click login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Check if there is a logout button
    await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
  });

  test('shows error message if wrong password', async ({ page }) => {
    // Go to the login page
    await page.goto('/login');

    // Fill in email and wrong password
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page.locator('input[name="password"]').fill('wrongpassword');

    // Click login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Check if there is an error message
    await expect(page.locator('#message-container')).toContainText(
      'Invalid email or password',
    );
  });
});
