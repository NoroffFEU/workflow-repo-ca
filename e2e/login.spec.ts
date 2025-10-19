import { test, expect } from '@playwright/test';

const EMAIL = process.env.E2E_EMAIL || 'caroline@stud.noroff.no';
const PASSWORD = process.env.E2E_PASSWORD || '12345678';
const NAME = 'E2E Tester';

async function gotoWithFallback(page, primary, fallback) {
  await page.goto(primary, { waitUntil: 'domcontentloaded' });
  if ((await page.url()).includes('404')) {
    await page.goto(fallback, { waitUntil: 'domcontentloaded' });
  }
}

async function ensureUserExists(page) {
  await gotoWithFallback(page, '/register', '/register/index.html');

  await page.locator('[name="name"]').fill(NAME);
  await page.locator('[name="email"]').fill(EMAIL);
  await page.locator('[name="password"]').fill(PASSWORD);

  await page.getByRole('button', { name: /register/i }).click();

  await page.waitForLoadState('networkidle', { timeout: 4000 }).catch(() => {});
}

test.describe('login', () => {
  test.beforeAll(async ({ browser }) => {
    const ctx = await browser.newContext();
    const page = await ctx.newPage();
    await ensureUserExists(page);
    await ctx.close();
  });

  test.beforeEach(async ({ page }) => {
    await gotoWithFallback(page, '/login', '/login/index.html');
  });

  test('kan logge inn med gyldige credentials', async ({ page }) => {
    const emailInput = page.locator('[name="email"], [placeholder="Email"]').first();
    const passInput = page.locator('[name="password"], [placeholder="Password"]').first();

    await emailInput.fill(EMAIL);
    await passInput.fill(PASSWORD);

    await page.getByRole('button', { name: /log in|login|sign in/i }).click();

    await page.waitForLoadState('networkidle', { timeout: 6000 }).catch(() => {});

    let authed = false;
    try {
      authed = await expect
        .poll(
          async () => {
            const { token, user } = await page.evaluate(() => ({
              token: localStorage.getItem('token'),
              user: localStorage.getItem('user'),
            }));
            return Boolean(token || user);
          },
          { timeout: 10_000, interval: 300 },
        )

        .then(() => true);
    } catch {
      authed = false;
    }

    if (!authed) {
      await expect(page).not.toHaveURL(/\/login(\/index\.html)?$/i, { timeout: 2000 });
    } else {
      expect(authed).toBe(true);
    }
  });

  test('viser feilmelding ved ugyldige credentials', async ({ page }) => {
    await page.locator('[name="email"]').fill('feil@stud.noroff.no');
    await page.locator('[name="password"]').fill('feilpass');
    await page.getByRole('button', { name: /log in|login|sign in/i }).click();

    const error = page
      .getByRole('alert')
      .or(page.locator('.error, [data-test="error"], .alert'))
      .or(page.getByText(/invalid|feil|wrong|unauthorized|incorrect/i));

    await expect(error).toBeVisible({ timeout: 5000 });
  });
});
