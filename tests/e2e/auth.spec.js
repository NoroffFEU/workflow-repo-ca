import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

test.skip("user can login with valid credentials", async ({ page }) => {
  await page.goto("/login/");

  await page.fill('input[type="email"]', process.env.PLAYWRIGHT_EMAIL);

  await page.fill('input[type="password"]', process.env.PLAYWRIGHT_PASSWORD);

  await page.click('button[type="submit"]');

  await page.waitForLoadState("networkidle");

  await expect(page).not.toHaveURL(/login/);
});

test("user sees error with invalid credentials", async ({ page }) => {
  await page.goto("/login/");

  await page.fill('input[type="email"]', "wrong@stud.noroff.no");

  await page.fill('input[type="password"]', "wrongpassword");

  await page.click('button[type="submit"]');

  await expect(page.locator("body")).toContainText("Login failed");
});
