import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  if (!process.env.TEST_USER_EMAIL || !process.env.TEST_USER_PASSWORD) {
    throw new Error("Missing required environment variables");
  }
});

test.describe("login", () => {
  test("user can login", async ({ page }) => {
    try {
      await page.goto("/login");
      await page
        .locator('input[name="email"]')
        .fill(process.env.TEST_USER_EMAIL);
      await page
        .locator('input[name="password"]')
        .fill(process.env.TEST_USER_PASSWORD);
      await page.getByRole("button", { name: "Login" }).click();
      await expect(page.getByRole("button", { name: "Logout" })).toBeVisible({
        timeout: 5000,
      });
    } catch (error) {
      console.error("Login test failed:", error);
      throw error;
    }
  });

  test("wrong password shows error", async ({ page }) => {
    try {
      await page.goto("/login");
      await page
        .locator('input[name="email"]')
        .fill(process.env.TEST_USER_EMAIL);
      await page.locator('input[name="password"]').fill("wrongpassword");
      await page.getByRole("button", { name: "Login" }).click();
      await expect(page.locator("#message-container")).toContainText(
        "Invalid email or password",
        { timeout: 5000 },
      );
    } catch (error) {
      console.error("Wrong password test failed:", error);
      throw error;
    }
  });
});
