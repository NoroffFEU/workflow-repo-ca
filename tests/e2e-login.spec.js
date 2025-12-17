import { test, expect } from "@playwright/test";

test.describe("Login", () => {
  test("User can successfully log in with valid credentials", async ({
    page,
  }) => {
    await page.goto("/login/index.html");

    await page.fill('input[name="email"]', process.env.TEST_USER_EMAIL);
    await page.fill('input[name="password"]', process.env.TEST_USER_PASSWORD);

    await page.getByRole("button", { name: /login/i }).click();

    await expect(page.getByRole("button", { name: /logout/i })).toBeVisible();
  });

  test("User sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto("/login/index.html");

    await page.fill('input[name="email"]', "wrong@stud.noroff.no");
    await page.fill('input[name="password"]', "wrongpassword");

    await page.getByRole("button", { name: /login/i }).click();

    await expect(page.locator("#message-container")).toContainText(
      /invalid email or password/i,
    );
  });
});
