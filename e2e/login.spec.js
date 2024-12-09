import { test, expect } from "@playwright/test";

test.describe("login", () => {
  test("user can log in with valid credentials", async ({ page }) => {
    await page.goto("/auth/login");

    // Fill login form
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    // Submit form
    await page.getByRole("button", { name: "Login" }).click();

    // Verify user is logged in
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  test("error shown for invalid credentials", async ({ page }) => {
    await page.goto("/auth/login");

    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page.locator('input[name="password"]').fill("wrongpassword");

    await page.getByRole("button", { name: "Login" }).click();

    // Verify error message
    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
