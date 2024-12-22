import { test, expect } from "@playwright/test";

test.describe("Login Tests", () => {
  test("User can successfully log in with valid credentials", async ({
    page,
  }) => {
    // Navigate to the login page
    await page.goto("/login/");

    // Fill in the login form
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    // Submit the form
    await page.getByRole("button", { name: "Login" }).click();

    // Verify that the user is logged in (e.g., a "Logout" button is visible)
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  test("User sees an error message with invalid credentials", async ({
    page,
  }) => {
    // Navigate to the login page
    await page.goto("/login/");

    // Fill in the login form with invalid data
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page.locator('input[name="password"]').fill("wrongpassword");

    // Submit the form
    await page.getByRole("button", { name: "Login" }).click();

    // Verify the error message
    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
