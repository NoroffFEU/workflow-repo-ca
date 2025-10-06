// tests/e2e/navigation.spec.js
import { test, expect } from '@playwright/test';

test('Home → first venue → "Venue details" heading appears', async ({ page }) => {
  // Go to home
  await page.goto('/'); // '/' works with baseURL

  // Wait for the venue grid to actually render a link (it starts as "Loading...")
  const firstVenue = page.locator('#venue-container a').first();
  await firstVenue.waitFor();

  // Click the first venue card
  await firstVenue.click();

  // Your hrefs look like "/venue/?id=xxxx", so assert accordingly
  await expect(page).toHaveURL(/\/venue\/\?id=/);

  // The brief requires the words "Venue details" in the H1
  await expect(page.getByRole('heading', { level: 1 })).toContainText(/venue details/i);
});
