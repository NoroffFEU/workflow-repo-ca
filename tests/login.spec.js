import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {
  // Test for successful login
  test('User can successfully log in with valid credentials', async ({
    page,
  }) => {
    // Navigate to the login page
    await page.goto('/login/index.html');

    // Fill in the form using environment variables
    await page.locator('input[name="email"]').fill(process.env.LOGIN_USER);
    await page.locator('input[name="password"]').fill(process.env.LOGIN_PASS);

    // Click the login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Check if the logout button is visible (indicating a successful login)
    await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
  });

  // Test for failed login with invalid credentials
  test('Invalid credentials show an error message', async ({ page }) => {
    // Navigate to the login page
    await page.goto('/login/index.html');

    // Fill in a valid Noroff email but an incorrect password
    await page.locator('input[name="email"]').fill('valid@stud.noroff.no');
    await page.locator('input[name="password"]').fill('wrongpassword');

    // Click the login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Check for error message in the message container
    await expect(page.locator('#message-container')).toContainText(
      'Invalid email or password'
    );
  });
});
