import { test, expect } from '@playwright/test';

test('navigates to venue on click', async ({ page }) => {
	await page.goto(`/`);
	await page.locator('.bg-cover').first().click();
	await expect(page.locator('h1')).toContainText('Venue details');
});
