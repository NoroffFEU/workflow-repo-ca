import { test, expect } from "@playwright/test";

test.describe("Login", () => {
  test("logs in successfully with valid credentials", async ({ page }) => {
    await page.goto("/login/");

    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);

    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    await page.locator('button[type="submit"]').click();

    const message = await page.locator("#message-container").textContent();
    console.log("Login message:", message);

    await expect(page).toHaveURL("/");
  });

  test("shows an error with invalid credentials", async ({ page }) => {
    await page.goto("/login/");

    await page.locator('input[name="email"]').fill("invalid@stud.noroff.no");

    await page.locator('input[name="password"]').fill("invalidpassword");

    await page.locator('button[type="submit"]').click();

    await expect(page.locator("#message-container")).not.toBeEmpty();
  });
});
