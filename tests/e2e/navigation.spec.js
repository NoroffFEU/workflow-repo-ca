import { test, expect } from '@playwright/test';

test('can navigate to venue details', async ({ page }) => {
  await page.goto('/');

  // wait for at least one venue link
  await page.waitForSelector('#venue-container a');

  // click the first venue link
  await page.click('#venue-container a:nth-of-type(1)');

  // verify venue-details page loaded
  await expect(page.locator('h1')).toHaveText(/Venue details/);
});
