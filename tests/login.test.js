import { test, expect } from "@playwright/test";

test.describe("login", () => {
  test("user can login", async ({ page }) => {
    const loginUrl = "/login";

    await page.goto(loginUrl); // go to the URL

    await page
      .locator('input[name="email"]') // Locating the input email
      .fill(process.env.TEST_USER_EMAIL); // fill the input with correct output

    await page
      .locator('input[name="password"]') // Locating the input password
      .fill(process.env.TEST_USER_PASSWORD); // fill the input with correct output

    await page.getByRole("button", { name: "Login" }).click(); // Getting the Login Btn and click action

    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });
  test("wrong password showing password", async ({ page }) => {
    const loginUrl = "/login";

    await page.goto(loginUrl);

    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);

    await page.locator('input[name="password"]').fill("wrongpassword");

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
