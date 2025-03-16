import { test, expect } from '@playwright/test';

test('navigates to venue details page', async ({ page }) => {
  // Navigate to the home page
  await page.goto('/');

  // Wait for the venue list to load
  await page.waitForSelector('.venue-list');

  // Click the first venue
  await page.click('.venue-list-item:first-child');

  // Verify the venue details page loads
  await expect(page.locator('h1')).toContainText('Venue details');
});
