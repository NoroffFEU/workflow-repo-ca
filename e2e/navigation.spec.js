import { test, expect } from '@playwright/test';

test('navigates to venue details page', async ({ page }) => {
  await page.goto('/');
  await page.locator('.venue-list-item').first().click();
  await expect(page.locator('h1')).toContainText('Venue details');
});
