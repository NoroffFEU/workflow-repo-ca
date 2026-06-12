const { test, expect } = require("@playwright/test");

test.describe("Login", () => {
  test("user can log in with valid credentials", async ({ page }) => {
    await page.goto("/login");
    await page.locator('[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL("/");
  });

  test("user sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto("/login");
    await page.locator('[name="email"]').fill("invalid@noroff.no");
    await page.locator('[name="password"]').fill("invalidpassword");
    await page.locator('button[type="submit"]').click();
    await expect(
      page.locator("#message-container [role='alert']"),
    ).toBeVisible();
  });
});
