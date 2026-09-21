/* eslint-disable no-undef */
import { test, expect } from "@playwright/test";

test.describe("login", () => {
  test("user can log in with valid information", async ({ page }) => {
    await page.goto("/login/");
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.locator('input[name="email"]')).toHaveCount(0);
  });
  test("an error message occurs with invalid information", async ({ page }) => {
    await page.goto("/login/");
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page.locator('input[name="password"]').fill("joiegeffsfew223wg");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.getByRole("alert")).toContainText(
      "Invalid email or password",
    );
  });
});
