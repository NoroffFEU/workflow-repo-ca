import { test, expect } from '@playwright/test';

test('kan navigere fra home til venue-detaljer', async ({ page }) => {
  await page.goto('/');

  const list = page.locator('[data-test="venue-list"], ul.venue-list, [role="list"], main');
  await expect(list).toBeVisible();

  const firstLink = list.locator('a:visible').first();
  await firstLink.click();

  const heading = page.getByRole('heading', { level: 1 }).or(page.getByText(/venue details/i));
  await expect(heading).toContainText(/venue details/i);
});
