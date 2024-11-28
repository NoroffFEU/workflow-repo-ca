import { test, expect } from '@playwright/test';

test.describe('Navigation Tests', () => {
  test('User navigates and verifies venue details', async ({ page }) => {
    await page.goto('/');

    // Wait for the first venue card to be visible
    await page.waitForSelector('.venue-list .venue-item:first-child', { timeout: 60000 });

    // Click the first venue item
    await page.click('.venue-list .venue-item:first-child');

    // Wait for the venue details heading to be visible
    await page.waitForSelector('h1:text("Venue details")', { timeout: 60000 });

    // Verify venue details page loads with "Venue details" in the heading
    const venueHeading = await page.locator('h1:text("Venue details")');
    await expect(venueHeading).toBeVisible();
  });
});
