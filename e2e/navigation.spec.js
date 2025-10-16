import { test, expect } from '@playwright/test';

test('should navigate to the first venue details page', async ({ page }) => {
  await page.goto('/index.html');

  const container = page.locator('#venue-container');
  await expect(container).toBeVisible();

  const firstClickable = container.locator('a, [role="link"], button').first();
  await expect(firstClickable).toBeVisible({ timeout: 10000 });

  await Promise.all([
    page.waitForLoadState('domcontentloaded'),
    firstClickable.click(),
  ]);

  await expect(page.locator('h1')).toContainText(/venue details/i);
});
