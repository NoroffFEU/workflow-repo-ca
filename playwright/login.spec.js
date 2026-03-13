import { test, expect } from '@playwright/test';

test('user can log in with valid credentials', async ({ page }) => {
  await page.goto('/login/index.html');
  await page.locator('input[name="email"]').fill(process.env.TEST_EMAIL);
  await page.locator('input[name="password"]').fill(process.env.TEST_PASSWORD);
  await page.click('button[type="submit"]');
  await expect(page).not.toHaveURL('/login/index.html');
});

test('error msg when invalid credentials', async ({ page }) => {
  await page.goto('/login/index.html');

  await page.fill('input[name="email"]', 'wrong-user@stud.noroff.no');
  await page.fill('input[name="password"]', 'wrongPassword123');

  await page.click('button[type="submit"]');

  // wait for the UI to update
  await page.waitForTimeout(1000);

  await expect(page.locator('#message-container')).toContainText(
    'Invalid email or password'
  );
});
