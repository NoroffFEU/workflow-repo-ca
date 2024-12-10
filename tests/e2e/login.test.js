import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {
  const validEmail = process.env.VALID_EMAIL;
  const validPassword = process.env.VALID_PASSWORD;
  const baseURL = 'http://localhost:5173';

  test('User can successfully log in with valid credentials', async ({
    page,
  }) => {
    // Navigate to the login page
    await page.goto(`${baseURL}/login/`);

    // Fill in the login form
    await page.fill('input[name="email"]', validEmail);
    await page.fill('input[name="password"]', validPassword);

    // Click the login button
    await page.click('#login-button');

    // Assert user is redirected or sees a success message
    await expect(page).toHaveURL(`${baseURL}`); // Adjust to the expected post-login URL
  });

  test('User sees an error message with invalid credentials', async ({
    page,
  }) => {
    // Navigate to the login page
    await page.goto(`${baseURL}/login/`);

    // Fill in the login form with invalid credentials
    await page.fill('input[name="email"]', 'invalid@user.com');
    await page.fill('input[name="password"]', 'wrongpassword');

    // Click the login button
    await page.click('#login-button');

    // Assert that an error message is displayed
    const errorMessage = page.locator('#message-container');
    await expect(errorMessage).toHaveText(
      'Please enter a noroff.no or stud.noroff.no email address.',
    ); // Adjust to your app's actual error message
  });
});
