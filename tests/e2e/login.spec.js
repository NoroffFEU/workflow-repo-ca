import { test, expect } from '@playwright/test';
import process from 'process';

const BASE_URL =
  process.env.BASE_URL || 'http://127.0.0.1:5500/workflow-repo-ca';

test('user can log in with valid credentials from env vars', async ({
  page,
}) => {
  // 1. Idziemy na stronę logowania
  await page.goto(`${BASE_URL}/login/index.html`);

  // 2. Wpisujemy poprawne dane z .env
  await page.locator('input[name="email"]').fill(process.env.LOGIN_EMAIL);
  await page.locator('input[name="password"]').fill(process.env.LOGIN_PASSWORD);

  // 3. Klikamy przycisk Login
  await page.locator('button[type="submit"]').click();

  // 4a. JEŚLI aplikacja robi redirect po zalogowaniu (np. na stronę główną)
  //    odkomentuj i dopasuj ten fragment:
  //
  await expect(page).toHaveURL(new RegExp(`${BASE_URL}/(index\\.html)?$`, 'i'));

  // 4b. JEŚLI aplikacja pokazuje komunikat w #message-container
  //    zostaw ten wariant i dopasuj tekst do swojego komunikatu:
  //await expect(page.locator('#message-container')).toContainText(
  // /welcome|logged in|success|you are logged in/i,
  //);
});

test('user sees an error message with invalid credentials', async ({
  page,
}) => {
  await page.goto(`${BASE_URL}/login/index.html`);

  // 1. ŚType in wrond data
  await page
    .locator('input[name="email"]')
    .fill('nieistniejacy.user@example.com');
  await page.locator('input[name="password"]').fill('zlehaslo123');

  // 2. Click Login
  await page.locator('button[type="submit"]').click();

  // 3. Wait for response in #message-container
  await expect(page.locator('#message-container')).toContainText(
    /invalid|incorrect|please|error|failed/i,
  );
});
