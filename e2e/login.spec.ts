import { test, expect } from "@playwright/test";

test("logs in with valid credentials", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: /login/i }).click();

  await page.getByLabel(/email/i).fill(process.env.E2E_USER_EMAIL!);
  await page.getByLabel(/password/i).fill(process.env.E2E_USER_PASSWORD!);
  await page.getByRole("button", { name: /log in/i }).click();

  await expect(page.getByTestId("welcome")).toBeVisible();
  await expect(page.getByTestId("welcome")).toContainText(/welcome/i);
});

test("shows error for invalid credentials", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: /login/i }).click();

  await page.getByLabel(/email/i).fill("wrong@example.com");
  await page.getByLabel(/password/i).fill("nope");
  await page.getByRole("button", { name: /log in/i }).click();

  const alert = page.getByRole("alert").or(page.getByTestId("login-error"));
  await expect(alert).toBeVisible();
  await expect(alert).toContainText(/invalid|error|incorrect/i);
});
