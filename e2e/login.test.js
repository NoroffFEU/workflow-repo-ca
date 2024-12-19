import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

test.describe("Login flow", () => {
  test("User can successfully log in with valid credentials", async ({
    page,
  }) => {
    await page.goto("http://127.0.0.1:5500/login/");

    // Fill out form with correct data
    await page.fill('input[name="email"]', process.env.VITE_LOGIN_USERNAME);
    await page.fill('input[name="password"]', process.env.VITE_LOGIN_PASSWORD);
    await page.click('button[type="submit"]');

    // Verify that the user is redirected to the appropriate URL
    await expect(page).toHaveURL("http://127.0.0.1:5500/");

    // Validate if theres a welcome message
    const header = page.locator("h1");
    await expect(header).toHaveText("Welcome to this site");
  });

  test("User sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto("/login/");

    // Fill out the form with invalid data
    await page.fill('input[name="email"]', "invalid@example.com");
    await page.fill('input[name="password"]', "wrongpassword");
    await page.click('button[type="submit"]');

    // Validete error message
    const messageContainer = page.locator("#message-container");
    await expect(messageContainer).toBeVisible();
    await expect(messageContainer).toContainText(
      "Please enter a noroff.no or stud.noroff.no email address.",
    );
  });
});
