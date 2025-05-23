import { test, expect } from '@playwright/test';

test('displays an error message for invalid login', async ({ page }) => {
  await page.goto('/login');

  await page
    .getByRole('textbox', { name: 'Email' })
    .fill('wronguser@example.com');
  await page
    .getByRole('textbox', { name: 'Password' })
    .fill('wrongpassword123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('#message-container')).toContainText('noroff.no');
});
