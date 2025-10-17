import { test, expect } from "@playwright/test";

test.describe("login", () => {
  test("User can successfully log in with valid credentials from environment variables.", async ({
    page,
  }) => {
    await page.goto("/login");

    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);
    await page.getByRole("button", { name: "Login" }).click();

    await expect(
      page.locator("h1", { name: "Welcome to this site" }),
    ).toBeVisible();
  });

  test("user sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto("/login");

    await page.locator('input[name="email"]').fill("invalid@stud.noroff.no");
    await page.locator('input[name="password"]').fill("wrongpassword");
    await page.getByRole("button", { name: "Login" }).click();

    const message = page.locator("#message-container div[role='alert']");
    await expect(message).toBeVisible();
    await expect(message).toContainText("Invalid email or password");
  });
});
