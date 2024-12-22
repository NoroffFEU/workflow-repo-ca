import { test, expect } from '@playwright/test';

test('navigates to venue on click', async ({ page }) => {
	await page.goto(`/`); // waits for load event :)
	await page.locator('.bg-cover').first().click(); // locator for first venue
	await expect(page.locator('h1')).toContainText('Venue details'); // heading on page
});
