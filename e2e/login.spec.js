import { test, expect } from "@playwright/test";

test("user can login with valid credentials", async ({ page }) => {
  await page.goto("/login");
  await page.fill('input[name="email"]', process.env.VITE_LOGIN_EMAIL);
  await page.fill('input[name="password"]', process.env.VITE_LOGIN_PASSWORD);
  await page.click('button[type="submit"]');
  await expect(page).not.toHaveURL("/login");
});

test("user sees error message with invalid credentials", async ({ page }) => {
  await page.goto("/login");
  await page.fill('input[name="email"]', "wrong@email.com");
  await page.fill('input[name="password"]', "wrongpassword");
  await page.click('button[type="submit"]');
  await expect(page.locator("#message-container")).not.toBeEmpty();
});
