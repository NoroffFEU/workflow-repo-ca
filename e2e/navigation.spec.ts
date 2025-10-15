import { test, expect } from '@playwright/test';

test('navigates to the first venue details page', async ({ page }) => {
  await page.goto('/');

  const selector = 'a[href*="venue"], [data-testid="venue-card"] a, .venue-card a, .venues a';

  await page.waitForSelector(selector, { timeout: 15000 });

  const links = await page.$$(selector);
  if (links.length === 0) throw new Error('No venue links found on the home page');

  await links[0].click();

  const heading = page.getByRole('heading', { name: /venue details|venue/i });
  await expect(heading).toBeVisible({ timeout: 10000 });
});
