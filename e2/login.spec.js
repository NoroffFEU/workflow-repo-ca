import { test, expect } from "@playwright/test";

test("user can log in with valid credentials", async ({ page }) => {
  await page.goto("/login/");
  await page.fill('input[name="email"]', process.env.TEST_USER_EMAIL);
  await page.fill('input[name="password"]', process.env.TEST_USER_PASSWORD);
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL("/");
});

test("user sees error message with invalid credentials", async ({ page }) => {
  await page.goto("/login/");
  await page.fill('input[name="email"]', "wrong@stud.noroff.no");
  await page.fill('input[name="password"]', "wrongpassword");
  await page.click('button[type="submit"]');
  await expect(page.locator("#message-container")).toBeVisible();
});
