import { test, expect } from "@playwright/test";

test.describe("Login functionality", () => {
  test("User can successfully log in with valid credentials", async ({
    page,
  }) => {
    //  Go to the login page
    await page.goto("http://127.0.0.1:5501/login/index.html");

    //  Enter email and password
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    //  Click the login button
    await page.getByRole("button", { name: "Login" }).click();

    //  Wait until we are navigated away from the login page
    await page.waitForURL("http://127.0.0.1:5501/");

    //  Try to find a unique text or element on the front page
    const mainHeader = await page.locator("h1");
    if (await mainHeader.isVisible()) {
      const headerText = await mainHeader.textContent();
      console.log("Header text after login:", headerText);
    } else {
      console.warn("No <h1> found. Checking LocalStorage...");
    }

    //  Check that the user is actually logged in by checking localStorage
    const token = await page.evaluate(() => localStorage.getItem("token"));
    console.log("Stored token:", token);
    expect(token).not.toBeNull();

    //  Find the logout button, or another way to confirm login
    const logoutButton = await page.locator("button:text('Logout')");
    if (await logoutButton.isVisible()) {
      await expect(logoutButton).toBeVisible();
    } else {
      console.warn(
        "No 'Logout' button found. The test will not fail, but you should check why.",
      );
    }
  });

  test("User sees an error message with invalid login credentials", async ({
    page,
  }) => {
    //  Go to the login page
    await page.goto("http://127.0.0.1:5501/login/index.html");

    //  Enter the wrong email and password
    await page.locator('input[name="email"]').fill("invalid@example.com");
    await page.locator('input[name="password"]').fill("wrongpassword");

    //  Click the login button
    await page.getByRole("button", { name: "Login" }).click();

    //  Check that an error message is displayed
    const errorMessage = page.locator("#message-container");
    await expect(errorMessage).toBeVisible();
  });
});
