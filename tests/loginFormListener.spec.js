import { test, expect } from "@playwright/test";

test.describe("login", () => {
  // Testing that the user can log in with valid credentials
  test("user can login", async ({ page }) => {
    // Navigating to homepage
    await page.goto("/login");

    // Filling in the email field with the test user's email from environment variables
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);

    // Fill in the password field with the test user's password from environment variables
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    // Clicking the log in button
    await page.getByRole("button", { name: "Login" }).click();

    // Checking that the log out button is available after successful log in
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  // Testing that logging in with an incorrect password shows an error message
  test("wrong password shows error", async ({ page }) => {
    // Navigating to log in page
    await page.goto("/login");

    // Fill in the email field with the test user's email from environment variables
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);

    // Fill in the password field with an incorrect password
    await page.locator('input[name="password"]').fill("wrongpassword");

    // Clicking the log in button
    await page.getByRole("button", { name: "Login" }).click();

    // Checking that the page displays an error message
    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
