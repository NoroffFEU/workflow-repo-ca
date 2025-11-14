import { test, expect } from '@playwright/test';

test('can navigate from home to first venue details', async ({ page }) => {
  // go to homepage
  await page.goto('/');

  // wait for the venue list to be rendered by JS
  await page.waitForSelector('#venue-container a', { timeout: 15000 });

  // click the first venue card/link
  const firstVenue = page.locator('#venue-container a').first();
  await firstVenue.click();

  // Venue details page loads
  const heading = page.getByRole('heading', { name: /venue/i });
  await expect(heading).toBeVisible();
});
