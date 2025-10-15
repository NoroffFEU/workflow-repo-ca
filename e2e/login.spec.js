import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

test.describe("Login functionality", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login/");
  });

  test("User can successfully log in with valid credentials from environment variables", async ({
    page,
  }) => {
    // Get credentials from environment variables
    const email = process.env.TEST_EMAIL;
    const password = process.env.TEST_PASSWORD;

    // Fill in the login form
    await page.fill('input[type="email"], input[placeholder*="mail" i]', email);
    await page.fill(
      'input[type="password"], input[placeholder*="password" i]',
      password,
    );

    // Click the login button
    await page.click('button:has-text("Login")');

    // Wait for navigation to home page
    await page.waitForURL("http://127.0.0.1:5500/", { timeout: 10000 });

    // Verify successful login by checking we're on the home page
    expect(page.url()).toBe("http://127.0.0.1:5500/");

    // Additional verification: check for logout button or user greeting
    const logoutButton = page.locator('button:has-text("Logout")');
    await expect(logoutButton).toBeVisible({ timeout: 5000 });
  });

  test("User sees an error message with invalid credentials", async ({
    page,
  }) => {
    // Fill in the login form with invalid credentials
    await page.fill(
      'input[type="email"], input[placeholder*="mail" i]',
      "invalid@test.com",
    );
    await page.fill(
      'input[type="password"], input[placeholder*="password" i]',
      "wrongpassword",
    );

    // Click the login button
    await page.click('button:has-text("Login")');

    // Wait for the error message to appear
    await page.waitForTimeout(3000);

    // Check if we're still on the login page (login failed)
    expect(page.url()).toContain("/login");

    // Look for error message container or any error styling
    const errorMessage = await page.locator(
      '#message-container div[role="alert"]',
    );
    const hasErrorContainer = (await errorMessage.count()) > 0;

    if (hasErrorContainer) {
      // If error container exists, check if it's visible and has content
      await expect(errorMessage).toBeVisible();
      const errorText = await errorMessage.textContent();
      expect(errorText.length).toBeGreaterThan(0);
    } else {
      // Fallback: check for common error text patterns
      const pageContent = await page.textContent("body");
      const hasErrorIndicator =
        pageContent.includes("Invalid") ||
        pageContent.includes("incorrect") ||
        pageContent.includes("failed") ||
        pageContent.includes("Login failed") ||
        pageContent.includes("error") ||
        pageContent.includes("credentials") ||
        pageContent.includes("unauthorized");

      expect(hasErrorIndicator).toBeTruthy();
    }
  });
});
