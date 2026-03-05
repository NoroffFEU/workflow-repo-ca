import { test, expect } from "@playwright/test";

test("user can log in with valid credentials", async ({ page }) => {
  await page.goto("/login");
  await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
  await page.locator('input[name="password"]').fill(process.env.TEST_USER_PASSWORD);
  await page.locator('button[type="submit"]').click();
  await page.waitForURL("/");
  expect(page.url()).toContain("127.0.0.1:5500");
});

test("user sees error message with invalid credentials", async ({ page }) => {
  await page.goto("/login");
  await page.locator('input[name="email"]').fill("invalid@stud.noroff.no");
  await page.locator('input[name="password"]').fill("wrongpassword123");
  await page.locator('button[type="submit"]').click();
  await expect(page.locator("#message-container")).toContainText("Invalid email or password");
});
