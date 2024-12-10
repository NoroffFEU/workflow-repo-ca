import { test, expect } from '@playwright/test';

test.describe('Navigation logic', () => {
  const baseURL = 'http://localhost:5173';

  test('Navigates to the home page', async ({ page }) => {
    // Navigate to the home page
    await page.goto(`${baseURL}`);
  });

  test('Checks for venue container', async ({ page }) => {
    // Pass `page` here
    await page.goto(`${baseURL}`); // Ensure you navigate before checking for elements
    await page.waitForSelector('#venue-container');
  });

  test('Clicks the first venue', async ({ page }) => {
    await page.goto(`${baseURL}`);
    await page.click('#venue-container > a:first-child');
  });

  test('Verifies that the venue details page contains updated heading "Venue details"', async ({
    page,
  }) => {
    await page.goto(`${baseURL}`);
    await page.click('#venue-container > a:first-child');

    // Wait for the heading text to update dynamically
    const heading = page.locator('h1');
    await expect(heading).toHaveText(/Venue details: .+/i, { timeout: 5000 }); // Regex to match dynamic content
  });
});
