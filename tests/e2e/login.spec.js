import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

const validEmail = process.env.TEST_USER_EMAIL;
const validPassword = process.env.TEST_USER_PASSWORD;

// Helper: fill and submit the login form
const fillLoginForm = async (page, email, password) => {
  await page.goto("http://localhost:5173/login/index.html");
  await page.waitForSelector("#loginForm");

  if (email !== undefined) {
    await page.locator('input[name="email"]').fill(email);
  }

  if (password !== undefined) {
    await page.locator('input[name="password"]').fill(password);
  }

  await page.getByRole("button", { name: "Login" }).click();
};

test.describe("Login flow", () => {
  test("User can log in with valid credentials", async ({ page }) => {
    await page.route("*/**/holidaze/auth/login", (route) =>
      route.fulfill({
        status: 200,
        json: { name: "Test", email: validEmail },
      }),
    );

    await fillLoginForm(page, validEmail, validPassword);

    // Assert that logout is visible after login
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  test("Shows error with invalid password", async ({ page }) => {
    await page.route("*/**/holidaze/auth/login", (route) =>
      route.fulfill({
        status: 400,
        json: { message: "Login failed" },
      }),
    );

    await fillLoginForm(page, validEmail, "wrongpassword");
    await expect(page.locator("#message-container")).toContainText(
      "Login failed",
    );
  });

  test("Shows error when email is missing", async ({ page }) => {
    await fillLoginForm(page, "", validPassword);

    await expect(page.locator("#message-container")).toContainText(
      "Please enter a noroff.no or stud.noroff.no email address.",
    );
  });

  test("Shows error when password is missing", async ({ page }) => {
    await fillLoginForm(page, validEmail, "");

    await expect(page.locator("#message-container")).toContainText(
      "Password must be at least 8 characters long.",
    );
  });

  test("Shows errors when both fields are empty", async ({ page }) => {
    await fillLoginForm(page, "", "");

    const message = page.locator("#message-container");
    await expect(message).toContainText(
      "Please enter a noroff.no or stud.noroff.no email address.",
    );
    await expect(message).toContainText(
      "Password must be at least 8 characters long.",
    );
  });
});
