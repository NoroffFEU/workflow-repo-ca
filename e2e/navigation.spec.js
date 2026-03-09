import { test, expect } from '@playwright/test';

test('homepage loads and displays venues', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(page.locator('#venue-container')).toBeVisible();

  const venues = page.locator('#venue-container a');
  await expect(venues).not.toHaveCount(0);
});

test('clicking a venue navigates to venue page', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(page.locator('#venue-container')).toBeVisible();

  const firstVenue = page.locator('#venue-container a').first();
  await firstVenue.click();

  await expect(page).toHaveURL(/venue/);
});
