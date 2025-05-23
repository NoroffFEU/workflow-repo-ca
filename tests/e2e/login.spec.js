import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test('successful login with valid credentials', async ({ page }) => {
  const username = process.env.VITE_USERNAME;
  const password = process.env.VITE_PASSWORD;

  await page.goto('/login');

  await page.getByRole('textbox', { name: 'Email' }).fill(username);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL('/');
});
