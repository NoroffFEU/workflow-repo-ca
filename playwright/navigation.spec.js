import { test, expect } from '@playwright/test';

test('user can navigate to the venue details page', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('#venue-container a', { timeout: 20000 });
  await page.locator('#venue-container a').first().click();
  await expect(page.locator('h1')).toContainText('Venue details', {
    timeout: 10000,
  });
});
