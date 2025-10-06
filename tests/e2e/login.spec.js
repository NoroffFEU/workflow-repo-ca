import { test, expect } from '@playwright/test';

function emailLocator(page) {
  return page
    .locator('form')
    .first()
    .locator(
      [
        'input[type="email"]',
        'input[name="email"]',
        '#email',
        '[data-testid="email"]',
        '[placeholder*="email" i]',
      ].join(', ')
    )
    .first();
}
function passwordLocator(page) {
  return page
    .locator('form')
    .first()
    .locator(
      [
        'input[type="password"]',
        'input[name="password"]',
        '#password',
        '[data-testid="password"]',
        '[placeholder*="password" i]',
      ].join(', ')
    )
    .first();
}
function submitButton(page) {
  const form = page.locator('form').first();
  return form
    .getByRole('button', { name: /log\s?in|sign\s?in|submit/i })
    .or(form.locator('button[type="submit"]').first());
}

test('logs in with valid credentials from .env', async ({ page }) => {
  await page.goto('/login/index.html');
  await emailLocator(page).fill(process.env.E2E_EMAIL);
  await passwordLocator(page).fill(process.env.E2E_PASSWORD);
  await submitButton(page).click();

  await expect(page).toHaveURL(/\/($|index\.html$)/);
  await expect(page.locator('header')).toContainText(/(logout|hi|welcome|profile|account)/i);
});

test('shows an error message for invalid credentials', async ({ page }) => {
  await page.goto('/login/index.html');

  // Fill with obviously wrong creds
  await emailLocator(page).fill('wrong@example.com');
  await passwordLocator(page).fill('wrong-password');
  await submitButton(page).click();

  // Find any common error container on your page
  const error = page
    .locator('[role="alert"], .alert, [data-testid="error"], .text-red-500')
    .first();

  // It should be visible...
  await expect(error).toBeVisible();

  // ...and the message should be EITHER a generic login error OR your domain rule
  await expect(error).toContainText(/(invalid|incorrect|failed|error|noroff\.no)/i);
  // If you want to be very specific, use:
  // await expect(error).toHaveText(/Please enter a (noroff\.no|stud\.noroff\.no) email address\./i);
});
