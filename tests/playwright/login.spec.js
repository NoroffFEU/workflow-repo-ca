import { test, expect } from "@playwright/test";
require("dotenv").config();

test.describe("Login Tests", () => {
  test("User can successfully log in with valid credentials", async ({ page }) => {
    await page.goto("http://localhost:5503/login"); // Ensure this URL matches your route

    // Fill the login form using credentials from .env
    await page.fill('input[name="email"]', process.env.USER_EMAIL);
    await page.fill('input[name="password"]', process.env.USER_PASSWORD);

    // Submit the form
    await page.click('button[type="submit"]');

    // Wait for the dashboard or a success message to appear (you can change this selector if needed)
    await page.waitForSelector("text=Welcome");

    // Verify the successful login (e.g., check for specific text or element visible on the next page)
    await expect(page.locator("text=Welcome")).toBeVisible();
  });

  test("User sees an error message with invalid credentials", async ({ page }) => {
    await page.goto("http://localhost:5503/login");

    // Fill the form with invalid credentials
    await page.fill('input[name="email"]', "invalid@example.com");
    await page.fill('input[name="password"]', "wrongpassword");

    // Submit the form
    await page.click('button[type="submit"]');

    // Verify that an error message appears (ensure the message-container div shows an error)
    const errorMessage = await page.locator('#message-container');
  await expect(errorMessage).toContainText('Please enter a noroff.no or stud.noroff.no email address');
  });
});
