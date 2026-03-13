import { test, expect } from "@playwright/test";

test.describe("login", () => {
  test("user can login", async ({ page }) => {
    await page.route("**/auth/login", (route) =>
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          name: "Test User",
          email: "workflowuser@stud.noroff.no",
          accessToken: "mock-token",
        }),
      }),
    );

    await page.goto("/login");

    await page
      .locator('input[name="email"]')
      .fill("workflowuser@stud.noroff.no");
    await page.locator('input[name="password"]').fill("workflowpass");

    await page.getByRole("button", { name: "Login" }).click();

    await page.waitForURL("**/");
  });

  test("wrong password shows error", async ({ page }) => {
    await page.route("**/auth/login", (route) =>
      route.fulfill({
        status: 401,
        contentType: "application/json",
        body: JSON.stringify({
          errors: [{ message: "Invalid email or password" }],
        }),
      }),
    );

    await page.goto("/login");

    await page
      .locator('input[name="email"]')
      .fill("workflowuser@stud.noroff.no");
    await page.locator('input[name="password"]').fill("wrongpassword");

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("#message-container")).not.toBeEmpty();
  });
});
