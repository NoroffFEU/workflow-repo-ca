const { test, expect } = require("@playwright/test");

test.describe("Login functionality", () => {
  test.setTimeout(60000);

  test("User can successfully log in with valid credentials from environment variables", async ({
    page,
  }) => {
    await page.goto("http://localhost:5500/login");

    const emailField = page.locator("#email");
    const passwordField = page.locator("#password");
    const loginButton = page.getByRole("button", { name: "Login" });

    await page.waitForSelector("#email");
    await page.waitForSelector("#password");

    await emailField.fill(process.env.TEST_USER_EMAIL);
    await passwordField.fill(process.env.TEST_USER_PASSWORD);
    await loginButton.click();

    await expect(page).toHaveURL("http://localhost:5500/");
  });

  test("User sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto("/login");

    const emailField = page.locator("#email");
    const passwordField = page.locator("#password");
    const loginButton = page.getByRole("button", { name: "Login" });
    const errorMessage = page.locator("#message-container");

    await emailField.fill(process.env.TEST_USER_EMAIL);
    await passwordField.fill("wrongPassword");
    await loginButton.click();

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText("Invalid");
  });
});
