import { test, expect } from "@playwright/test";

test.describe("registration", () => {
  test("successful registration shows success message", async ({ page }) => {
    // Set up route BEFORE navigation
    await page.route("**/register", (route) => {
      const postData = route.request().postDataJSON();
      console.log("Intercepted request data:", postData);

      return route.fulfill({
        status: 200,
        json: { name: "Test", email: "test@noroff.no" },
      });
    });

    // Go to register page
    await page.goto("/register/");

    // Fill the form
    await page.locator('input[name="name"]').fill("Test User");
    await page.locator('input[name="email"]').fill("success@stud.noroff.no");
    await page.locator('input[name="password"]').fill("password123");

    // Click register button
    await page.getByRole("button", { name: "Register" }).click();

    // Check for success message
    await expect(page.locator("#message-container")).toContainText(
      "Registration successful",
    );
  });

  test("failed registration shows error message", async ({ page }) => {
    // Set up route BEFORE navigation
    await page.route("**/register", (route) => {
      const postData = route.request().postDataJSON();
      console.log("Intercepted request data:", postData);

      return route.fulfill({
        status: 400,
        json: { message: "Registration failed" },
      });
    });

    await page.goto("/register/");

    // Fill the form with an email that will trigger a failure
    await page.locator('input[name="name"]').fill("Test User");
    await page.locator('input[name="email"]').fill("fail@stud.noroff.no");
    await page.locator('input[name="password"]').fill("password123");

    await page.getByRole("button", { name: "Register" }).click();

    // Check for error message
    await expect(page.locator("#message-container")).toContainText(
      "Registration failed",
    );
  });
});
