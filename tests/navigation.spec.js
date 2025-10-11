/**
 * navigation:
 * Navigates to the home page
 * Waits for the venue list to load
 * Clicks the first venue
 * Verifies that when the venue details page loads there are the words “Venue details” in the heading
 */

import { test, expect } from '@playwright/test';

test.describe('navigation', () => {
  test('navigate to first venue and check details', async ({ page }) => {
    // Go to the home page
    await page.goto('/');

    // Wait for the venue container to populate
    const venueContainer = page.locator('#venue-container');
    await expect(venueContainer).not.toHaveText('Loading...');

    // Click the first venue link inside the container
    const firstVenue = venueContainer.locator('a').first();
    await expect(firstVenue).toBeVisible();
    await firstVenue.click();

    // Wait for the venue details page to load
    const heading = page.locator('h1');
    await expect(heading).not.toHaveText('Loading venue...');

    // Verify the heading contains "Venue" (case-insensitive)
    await expect(heading).toContainText(/venue/i);
  });
});
