import { test, expect } from '@playwright/test';

test('navigates to venue details from home page', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('#venue-container > *');
  await page.locator('#venue-container a').first().click();
  await expect(page.getByRole('heading', { name: /venue details/i })).toBeVisible();
});
