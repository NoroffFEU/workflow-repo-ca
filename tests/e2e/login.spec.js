import { test, expect } from "@playwright/test";
import { gotoLogin } from "./utils/nav.js";

function credentialsProvided() {
  return Boolean(process.env.E2E_EMAIL && process.env.E2E_PASSWORD);
}

test("user can log in with valid credentials", async ({ page }) => {
  test.skip(!credentialsProvided(), "E2E_EMAIL and E2E_PASSWORD must be set to run this test");

  await gotoLogin(page);

  await page.getByPlaceholder("Email").fill(process.env.E2E_EMAIL ?? "");
  await page.getByPlaceholder("Password").fill(process.env.E2E_PASSWORD ?? "");

  await page.getByRole("button", { name: /login/i }).click();

  await expect(page).toHaveURL(/\/(?:index\.html)?$/);
  await expect(page.locator("#message-container [role=alert]")).toHaveCount(0);
});

test("user sees an error message with invalid credentials", async ({ page }) => {
  await gotoLogin(page);

  await page.getByPlaceholder("Email").fill("invalid@stud.noroff.no");
  await page.getByPlaceholder("Password").fill("wrongPassword123!");

  await page.getByRole("button", { name: /login/i }).click();

  const alert = page.locator('[role="alert"], .error');
  await expect(alert).toBeVisible();
  await expect(alert).toContainText(/invalid|error|incorrect|failed/i);
});
