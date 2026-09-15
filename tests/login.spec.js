import { test, expect } from "@playwright/test";

test("user can successfully log in with valid credentials", async ({
  page,
}) => {
  await page.route("**/holidaze/auth/login", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        accessToken: "fake-token",
        name: "Test User",
        email: process.env.EMAIL,
      }),
    });
  });

  await page.goto("/login/login.html");
  await page.waitForSelector('input[name="email"]');

  await page.locator('input[name="email"]').fill(process.env.EMAIL);
  await page.locator('input[name="password"]').fill(process.env.PASSWORD);

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).toHaveURL("/");
});
