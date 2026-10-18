// @ts-check
import { test, expect } from "@playwright/test";

test("display message of error if invalid login", async ({ page }) => {
  await page.goto("/login/");

  await page.locator('input[name="email"]').fill("invalid@example.com");
  await page.locator('input[name="password"]').fill("wrong-password");
  await page.locator('button[type="submit"]').click();

  await expect(page.locator("#message-container")).toBeVisible();
  await expect(page.locator("#message-container")).not.toBeEmpty();
});

test("home page opens venue detail page", async ({ page }) => {
  await page.goto("/");

  const firstVenue = page.locator("#venue-container a").first();

  await expect(firstVenue).toBeVisible({ timeout: 15000 });
  await firstVenue.click();

  await expect(
    page.getByRole("heading", { name: /Venue details/i }),
  ).toBeVisible();
});

test("user can log in successfully", async ({ page }) => {
  const email = process.env.E2E_LOGIN_EMAIL;
  const password = process.env.E2E_LOGIN_PASSWORD;

  if (!email || !password) {
    throw new Error(
      "Please configure E2E_LOGIN_EMAIL and E2E_LOGIN_PASSWORD in your .env file.",
    );
  }

  await page.goto("/login/");
  await page.locator('input[name="email"]').fill(email);
  await page.locator('input[name="password"]').fill(password);
  await page.locator('button[type="submit"]').click();

  await expect(page).toHaveURL(/\/($|index\.html)/, {
    timeout: 15000,
  });
});
