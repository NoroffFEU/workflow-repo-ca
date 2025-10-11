/**
 * login:
 * User can successfully log in with valid credentials from environment variables. (If the login details from the lesson do not work, you can create a new user by running the project and using the register form)
 * User sees an error message with invalid credentials
 * Be sure to include .env in the gitignore and include an .env.example in the branch
 */

import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

test.describe('login', () => {
  test('user can login', async ({ page }) => {
    console.log('Email:', process.env.TEST_USER_EMAIL);

    await page.goto('/login');
    await page.locator('input[name="email"]').waitFor();

    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
  });

  test('wrong password shows error', async ({ page }) => {
    await page.goto('/login');
    await page.locator('input[name="email"]').waitFor();

    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page.locator('input[name="password"]').fill('wrongpassword');

    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator('#message-container')).toContainText(
      'Invalid email or password',
    );
  });
});
