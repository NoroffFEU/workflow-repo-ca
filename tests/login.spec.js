import "dotenv/config";
import { test, expect } from "@playwright/test";

const EMAIL_OK = process.env.TEST_USER_EMAIL || "student@stud.noroff.no";
const PASS_OK = process.env.TEST_USER_PASSWORD || "SuperSecret123";

test.describe("login", () => {
  test("user can login", async ({ page }) => {
    await page.goto("/login/");
    await page.locator('input[name="email"]').fill(EMAIL_OK);
    await page.locator('input[name="password"]').fill(PASS_OK);
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  test("wrong password shows error", async ({ page }) => {
    await page.goto("/login/");
    await page.locator('input[name="email"]').fill("student@stud.noroff.no");
    await page.locator('input[name="password"]').fill("wrongpassword");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.locator("#message-container")).toContainText(
      /invalid email or password/i,
    );
  });
});
