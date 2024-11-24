const { test, expect } = require('@playwright/test');

test.describe('Navigation Tests', () => {
  test('Navigates to venue details', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('.venue-item'); // Adjust the selector for your venue list
    await page.click('.venue-item:first-child'); // Click the first venue

    await expect(page).toHaveURL(/\/post\/view.html/);
    const heading = await page.locator('h1');
    await expect(heading).toHaveText(/Venue details/i);
  });
});
