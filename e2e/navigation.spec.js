import { test, expect } from '@playwright/test';

test.describe('Navigation functionality', () => {
  test('Navigate to home, wait for venue list, click first venue, and verify venue details page', async ({ page }) => {
    // Step 1: Navigate to the home page
    await page.goto('/');

    // Verify we're on the home page
    expect(page.url()).toBe('http://127.0.0.1:5500/');

    // Step 2: Wait for the venue list to load
    // Looking for the venue cards container or individual venue items
    const venueList = page.locator('.venue-list, [class*="venue"], a[href*="/venue/"]').first();
    await venueList.waitFor({ state: 'visible', timeout: 10000 });

    // Additional wait to ensure all venues are loaded
    await page.waitForLoadState('networkidle');

    // Step 3: Click the first venue
    const firstVenue = page.locator('a[href*="/venue/"]').first();
    await expect(firstVenue).toBeVisible();
    await firstVenue.click();

    // Step 4: Wait for navigation to venue details page
    await page.waitForURL(/\/venue\/\?id=/, { timeout: 10000 });

    // Verify URL contains /venue/?id=
    expect(page.url()).toContain('/venue/?id=');

    // Step 5: Verify that the venue details page loads with "Venue details" in the heading
    const heading = page.locator('h1, h2, h3').filter({ hasText: 'Venue details' });
    await expect(heading).toBeVisible({ timeout: 5000 });

    // Additional verification: Check that the heading contains "Venue details"
    const headingText = await heading.textContent();
    expect(headingText).toContain('Venue details');
  });
});