import { test, expect } from '@playwright/test';

test('when the first venue is clicked from the home page it should display venue details', async ({
  page,
}) => {
  // Go to the home page
  await page.goto('/');

  // Click on the first venue link
  await page.locator('#venue-container > a:nth-child(1)').click();

  // Verify the venue details page has the correct heading
  await expect(page.locator('h1')).toContainText('Venue details');
});
