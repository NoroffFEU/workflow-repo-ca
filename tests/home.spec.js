import { test, expect } from '@playwright/test';

test('homepage loads venues', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.waitForSelector('#venue-container');

  const venues = page.locator('#venue-container a');

  await expect(venues).not.toHaveCount(0);
});
