const { test, expect } = require("@playwright/test");

const EMAIL = process.env.E2E_EMAIL;
const PASSWORD = process.env.E2E_PASSWORD;

test("user can log in with valid credentials", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel(/email/i).fill(EMAIL);
  await page.getByLabel(/password/i).fill(PASSWORD);
  await page.getByRole("button", { name: /log in/i }).click();

  await expect(page).toHaveURL(/(home|venues|dashboard)/i);
  await expect(page.getByText(/welcome|logged in/i)).toBeVisible();
});

test("shows error with invalid credentials", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel(/email/i).fill("wrong@example.com");
  await page.getByLabel(/password/i).fill("badpass");
  await page.getByRole("button", { name: /log in/i }).click();

  await expect(page.getByText(/invalid|error|wrong/i)).toBeVisible();
});
