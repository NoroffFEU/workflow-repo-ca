import { test, expect } from '@playwright/test';
import process from 'process';

const BASE_URL =
  process.env.BASE_URL || 'http://127.0.0.1:5500/workflow-repo-ca';

test('navigates to first venue and sees "Venue details" in heading', async ({
  page,
}) => {
  await page.goto(`${BASE_URL}/index.html`);

  const firstVenueCard = page.locator('[data-testid="venue-card"]').first();
  await expect(firstVenueCard).toBeVisible();

  await firstVenueCard.click();

  await expect(
    page.getByRole('heading', { name: /venue details/i }),
  ).toBeVisible();
});
