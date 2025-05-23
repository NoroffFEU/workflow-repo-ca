import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

test.describe('Venue navigation after login', () => {
  test('should show venue details when a venue is clicked', async ({
    page,
  }) => {
    const username = process.env.VITE_USERNAME;
    const password = process.env.VITE_PASSWORD;

    // Login
    await page.goto('/login');
    await page.getByRole('textbox', { name: 'Email' }).fill(username);
    await page.getByRole('textbox', { name: 'Password' }).fill(password);
    await page.getByRole('button', { name: 'Login' }).click();

    // Wait for homepage
    await page.waitForSelector('#venue-container a');

    // Navigation
    await page.locator('#venue-container a').first().click();
    await expect(page.locator('h1')).toHaveText(/Venue details/i);
  });
});
