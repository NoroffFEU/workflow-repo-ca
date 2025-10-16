import * as dotenv from 'dotenv';
dotenv.config();

import { test, expect } from '@playwright/test';

const LOGIN_PATH = '/login/index.html';
const EMAIL = 'input[name="email"]';
const PASS = 'input[name="password"]';
const SUBMIT = 'button[type="submit"]';

async function clickAndWaitForPossibleNavigation(page, clicker) {
  const nav = page
    .waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 3000 })
    .catch(() => null);
  await clicker();
  await nav;
}

test.describe('login', () => {
  test('should let user log in when used correct email and password', async ({
    page,
  }) => {
    const email = process.env.E2E_EMAIL;
    const password = process.env.E2E_PASSWORD;
    expect(email, 'Missing E2E_EMAIL in .env').toBeTruthy();
    expect(password, 'Missing E2E_PASSWORD in .env').toBeTruthy();

    await page.goto(LOGIN_PATH);
    await page.fill(EMAIL, email);
    await page.fill(PASS, password);

    const respPromise = page.waitForResponse((r) =>
      /auth.+login/i.test(r.url())
    );
    await clickAndWaitForPossibleNavigation(page, () => page.click(SUBMIT));
    await respPromise.catch(() => null);
    await page.waitForLoadState('domcontentloaded');
    await page.waitForFunction(() => !!localStorage.getItem('user'), null, {
      timeout: 10000,
    });
    const userValue = await page.evaluate(() => localStorage.getItem('user'));
    expect(
      userValue,
      'User info should be saved after logging in'
    ).toBeTruthy();
  });

  test('should show an error if I try to log in with wrong email or password', async ({
    page,
  }) => {
    const EMAIL = 'input[name="email"]';
    const PASS = 'input[name="password"]';
    const SUBMIT = 'button[type="submit"]';

    await page.goto('/login/index.html');
    await page.fill(EMAIL, 'nope@example.com');
    await page.fill(PASS, 'wrong-password');
    await Promise.all([
      page.click(SUBMIT),
      page.waitForLoadState('domcontentloaded').catch(() => null),
    ]);
    await page.waitForLoadState('networkidle').catch(() => null);

    const msg = page.locator('#message-container');

    await msg.waitFor({ state: 'attached', timeout: 10000 });
    await expect(msg).toBeVisible({ timeout: 10000 });
    await expect(msg).toContainText(
      /(noroff\.no|stud\.noroff\.no|invalid|unauthorized|failed|incorrect|error)/i
    );

    const userValue = await page.evaluate(() => localStorage.getItem('user'));
    expect(
      userValue,
      'There should be no user saved for a failed login'
    ).toBeFalsy();
  });
});
