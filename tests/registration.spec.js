import { test, expect } from "@playwright/test";

test.describe("registration", () => {
  test("successful registration shows success message", async ({ page }) => {
    await page.route("*/**/auth/register", (route) =>
      route.fulfill({
        status: 200,
        json: { name: "Test", email: "test@noroff.no" },
      }),
    );

    await page.goto("/register/");

    await page.locator('input[name="name"]').fill("Test User");
    await page.locator('input[name="email"]').fill("success@stud.noroff.no");
    await page.locator('input[name="password"]').fill("password123");

    await page.getByRole("button", { name: "Register" }).click();

    await expect(page.locator("#message-container")).toContainText(
      "Registration successful!",
    );
  });

  test("failed registration shows error message", async ({ page }) => {
    await page.route("*/**/auth/register", (route) =>
      route.fulfill({
        status: 400,
        json: { message: "Registration failed" },
      }),
    );
    await page.goto("/register/");

    await page.locator('input[name="name"]').fill("Test User");
    await page.locator('input[name="email"]').fill("fail@stud.noroff.no");
    await page.locator('input[name="password"]').fill("password123");

    await page.getByRole("button", { name: "Register" }).click();

    await expect(page.locator("#message-container")).toContainText(
      "Sorry, sign up failed",
    );
  });
});
