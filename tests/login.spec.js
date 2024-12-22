import { test, expect } from '@playwright/test';

test('can log in', async ({ page }) => {
	await page.goto(`/login/`);
	await page.getByPlaceholder('Email').fill(process.env.VITE_USER_ID); // propogates email from .env file
	await page.getByPlaceholder('Password').fill(process.env.USER_PASS); // same but for password
	await page.getByRole('button', { name: 'Login' }).click();
	await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
});

test('sees error message on failed login', async ({ page }) => {
	await page.goto(`/login/`);
	await page.getByPlaceholder('Email').fill('something weird'); // bogus email address
	await page.getByPlaceholder('Password').fill('bananas123'); // madeup password
	await page.getByRole('button', { name: 'Login' }).click();
	await expect(page.locator('#message-container')).toBeVisible(); // expect to the see the error message container regardless of variable content
});
