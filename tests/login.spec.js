import { test, expect } from '@playwright/test';

test('can log in', async ({ page }) => {
	await page.goto(`/login/`);
	await page.getByPlaceholder('Email').fill(process.env.VITE_USER_ID);
	await page.getByPlaceholder('Password').fill(process.env.USER_PASS);
	await page.getByRole('button', { name: 'Login' }).click();
	await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
});

test('sees error message on failed login', async ({ page }) => {
	await page.goto(`/login/`);
	await page.getByPlaceholder('Email').fill('something weird');
	await page.getByPlaceholder('Password').fill('bananas123');
	await page.getByRole('button', { name: 'Login' }).click();
	await expect(page.locator('#message-container')).toBeVisible();
});
