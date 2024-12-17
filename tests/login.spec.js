const { test, expect } = require("@playwright/test");
require("dotenv").config(); // Load environment variables from .env file

test.describe("Login", () => {
  // Test for successful login with valid credentials
  test("User can log in with valid credentials", async ({ page }) => {
    console.log("Login test started...");
    await page.goto("http://127.0.0.1:5500/login/");

    // Fill in credentials
    console.log("Filling in credentials...");
    await page.fill('input[name="email"]', process.env.TEST_USER_EMAIL);
    await page.fill('input[name="password"]', process.env.TEST_USER_PASSWORD);

    // Click login button and wait for navigation
    console.log("Submitting login form...");
    await Promise.all([
      page.waitForNavigation(), // Wait for redirection after login
      page.click('button[type="submit"]'),
    ]);

    // Validate the text on the homepage after login
    console.log("Validating redirected page...");
    const loggedInText = await page.innerText("h1");
    console.log("Found h1 text:", loggedInText);
    expect(loggedInText).toBe("Welcome to this site"); // Adjust to match your app's behavior
  });

  // Test for invalid login with incorrect credentials
  test("User sees an error message with invalid credentials", async ({
    page,
  }) => {
    console.log("Invalid login test started...");
    await page.goto("http://127.0.0.1:5500/login/");

    // Fill in invalid credentials
    console.log("Filling in invalid credentials...");
    await page.fill('input[name="email"]', "insert email");
    await page.fill('input[name="password"]', "insert password");

    // Submit the login form
    console.log("Submitting invalid login...");
    await page.click('button[type="submit"]');

    // Wait for the error message to appear
    console.log("Waiting for error message...");
    try {
      // Wait for the error message element to appear
      await page.waitForSelector('[role="alert"]', { timeout: 10000 });

      // Retrieve the error message text
      const errorMessage = await page.innerText('[role="alert"]');
      console.log("Found error message:", errorMessage);

      // Check the error message content
      if (errorMessage.includes("noroff.no")) {
        expect(errorMessage).toContain("noroff.no");
      } else if (errorMessage.includes("Invalid email or password")) {
        expect(errorMessage).toContain("Invalid email or password");
      } else {
        throw new Error(`Unexpected error message: ${errorMessage}`);
      }
    } catch (err) {
      console.error("Error during error message validation:", err);
      throw err; // Rethrow to fail the test
    }
  });
});
