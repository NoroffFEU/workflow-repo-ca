import { expect, test } from "@playwright/test";

test.describe("login", () => {
  //Successful path: User can login with valid credentials
  test("user can login", async ({ page }) => {
    await page.goto("/login");

    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  //Error Path: Wrong password shows error message
  test("wrong password shows error", async ({ page }) => {
    await page.goto("/login");

    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page.locator('input[name="password"]').fill("wrongpassword");

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });

  //Error path: Wrong email shows error message
  test("wrong email shows error", async ({ page }) => {
    await page.goto("/login");

    await page
      .locator('input[name="email"]')
      .fill("wrongemailaddress@example.com");
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("#message-container")).toContainText(
      "Please enter a noroff.no or stud.noroff.no email address",
    );
  });
});
