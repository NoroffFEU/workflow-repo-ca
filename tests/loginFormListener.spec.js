import { test, expect } from "@playwright/test";

test.describe("login", () => {
  test("user can log in with valid credentials from environment variables", async ({
    page,
  }) => {
    await page.goto("/login");
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });
  test("User sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto("/login");
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page.locator('input[name="password"]').fill("blablablabla");

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
