import { test, expect } from "@playwright/test";

const baseURL = "http://127.0.0.1:5500";

test.describe("Login functionality", () => {
  test("User can log in with valid credentials", async ({ page }) => {
    const USER_EMAIL = process.env.TEST_USER_EMAIL;
    const USER_PASSWORD = process.env.TEST_USER_PASSWORD;

    await page.goto(`${baseURL}/login/index.html`);

    await page.fill('input[name="email"]', USER_EMAIL);
    await page.fill('input[name="password"]', USER_PASSWORD);

    await page.click('button[type="submit"]');

    await page.waitForLoadState("networkidle");

    const heading = await page.textContent("h1");
    await expect(heading).toContain("Venues");
  });

  test("User sees error message with invalid credentials", async ({ page }) => {
    await page.goto(`${baseURL}/login/index.html`);

    await page.fill('input[name="email"]', "fake@example.com");
    await page.fill('input[name="password"]', "wrongpassword");
    await page.click('button[type="submit"]');

    const errorMessage = await page.locator(".message.error");
    await expect(errorMessage).toBeVisible();
  });
});
