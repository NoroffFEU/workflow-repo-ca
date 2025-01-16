import { test, expect } from "@playwright/test";

test.describe("Login Tests", () => {
  test("User can log in with valid credentials", async ({ page }) => {
    await page.goto("/login");
    await page.fill('input[name="email"]', process.env.VALID_EMAIL);
    await page.fill('input[name="password"]', process.env.VALID_PASSWORD);
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL("/dashboard");
  });

  test("Error message shown for invalid credentials", async ({ page }) => {
    await page.goto("/login");
    await page.fill('input[name="email"]', "invalid@example.com");
    await page.fill('input[name="password"]', "wrongpassword");
    await page.click('button[type="submit"]');
    await expect(page.locator(".error-message")).toHaveText(
      "Invalid credentials",
    );
  });
});
