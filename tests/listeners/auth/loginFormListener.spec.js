import { test, expect } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config();

test.describe("Login", () => {
  test("User can log in with valid credentials", async ({ page }) => {
    await page.goto("/login/index.html");

    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  test("an error message is shown with invalid credentials", async ({
    page,
  }) => {
    await page.goto("/login/index.html");

    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page.locator('input[name="password"]').fill("incorrectpw");

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
