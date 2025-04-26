import { test, expect } from '@playwright/test';

test('User can navigate to a venue detail page', async ({ page }) => {
  await page.goto('http://localhost:5500/');

  await page.waitForTimeout(2000);

  await page.waitForSelector('#venue-container a', { timeout: 15000 });
  await page.click('#venue-container a');

  const heading = await page.getByRole('heading');
  await expect(heading).toBeVisible();
});
