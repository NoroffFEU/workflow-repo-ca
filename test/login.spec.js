if (!process.env.TEST_EMAIL || !process.env.TEST_PASSWORD) {
  throw new Error("TEST_EMAIL and TEST_PASSWORD must be set in .env");
}

import { test, expect } from "@playwright/test";

test.describe("Login", () => {
  test("user can log in with valid credentials", async ({ page }) => {
    await page.goto("/login/index.html");

    await page.fill('input[name="email"]', process.env.TEST_EMAIL);
    await page.fill('input[name="password"]', process.env.TEST_PASSWORD);
    await page.click('button[type="submit"]');

    // Sjekk at vi IKKE fortsatt står på login-siden
    await expect(page).not.toHaveURL(/login\/index\.html$/);
  });

  test("shows error message with invalid credentials", async ({ page }) => {
    await page.goto("/login/index.html");

    await page.fill('input[name="email"]', "wrong@example.com");
    await page.fill('input[name="password"]', "wrongpassword");
    await page.click('button[type="submit"]');

    const message = page.locator("#message-container");

    await expect(message).toBeVisible();
    await expect(message).not.toHaveText("");
  });
});
