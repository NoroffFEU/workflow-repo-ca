/// <reference types="playwright/test" />

import { test, expect } from '@playwright/test';

test('User can navigate to a venue details page', async ({ page }) => {
  // Step 1: Open homepage locally
  await page.goto('http://127.0.0.1:5500/index.html');

  // Step 2: Wait for venue list to load
  await page.waitForSelector('#venue-container');

  // Step 3: Click first venue using stable selector
  const firstVenue = await page.locator('#venue-container a').first();
  await firstVenue.click();

  // Step 4: Wait for venue details page to load
  await page.waitForURL('**/venue/**');

  // Step 5: Assert that heading contains "Venue details"
  await expect(
    page.getByRole('heading', { name: /venue details/i }),
  ).toBeVisible();
});
