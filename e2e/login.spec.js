/* global process */
import { test, expect } from "@playwright/test";

const EMAIL = process.env.LOGIN_EMAIL;
const PASS = process.env.LOGIN_PASSWORD;

test.describe("login", () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/login/`);
    await expect(page.locator("form")).toBeVisible();
  });

  test("user can log in with valid credentials", async ({ page }) => {
    test.skip(!EMAIL || !PASS, "LOGIN_EMAIL / LOGIN_PASSWORD not provided in .env");

    const emailInput =
      (await page.getByLabel(/email/i).elementHandle()) ||
      (await page.locator('input[type="email"]').elementHandle());
    await expect(emailInput).toBeTruthy();
    await page.evaluate((el, v) => (el.value = v), emailInput, "");
    await page.getByLabel(/email/i).or(page.locator('input[type="email"]')).fill(EMAIL);

    const passwordInput =
      (await page.getByLabel(/password/i).elementHandle()) ||
      (await page.locator('input[type="password"]').elementHandle());
    await expect(passwordInput).toBeTruthy();
    await page.evaluate((el, v) => (el.value = v), passwordInput, "");
    await page
      .getByLabel(/password/i)
      .or(page.locator('input[type="password"]'))
      .fill(PASS);

    const submitBtn = page
      .getByRole("button", { name: /log ?in|sign ?in/i })
      .or(page.locator('button[type="submit"]'));
    await submitBtn.click();

    await expect(page).not.toHaveURL(/\/login\/?$/);
  });

  test("shows an error with invalid credentials (stay on /login)", async ({ page }) => {
    await page
      .getByLabel(/email/i)
      .or(page.locator('input[type="email"]'))
      .fill("not-an-email@example.com");
    await page
      .getByLabel(/password/i)
      .or(page.locator('input[type="password"]'))
      .fill("definitelyWrong123!");
    await page
      .getByRole("button", { name: /log ?in|sign ?in/i })
      .or(page.locator('button[type="submit"]'))
      .click();

    await expect(page).toHaveURL(/\/login\/?$/, { timeout: 5000 });
  });
});
