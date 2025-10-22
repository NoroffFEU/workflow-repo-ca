import { test, expect } from "@playwright/test";

const EMAIL = process.env.TEST_EMAIL;
const PASSWORD = process.env.TEST_PASSWORD;

test.beforeEach(async ({ page }) => {
  await page.goto("/login/"); // adjust if your login is at /login.html or similar
});

test("User can log in with valid credentials", async ({ page }) => {
  test.skip(!EMAIL || !PASSWORD, "Set TEST_EMAIL and TEST_PASSWORD in .env");

  await page.getByLabel(/email/i).fill(EMAIL);
  await page.getByLabel(/password/i).fill(PASSWORD);
  await page.getByRole("button", { name: /log in|login/i }).click();

  await expect(page.getByText(/welcome|logout|profile|my account/i).first()).toBeVisible();
});

test("Shows error with invalid credentials", async ({ page }) => {
  await page.getByLabel(/email/i).fill("invalid@example.com");
  await page.getByLabel(/password/i).fill("wrong-password");
  await page.getByRole("button", { name: /log in|login/i }).click();

  await expect(page.getByText(/invalid|error|incorrect/i).first()).toBeVisible();
});
