import { test, expect } from "@playwright/test";

const TEST_USER_EMAIL = process.env.TEST_USER_EMAIL;
const TEST_USER_PASSWORD = process.env.TEST_USER_PASSWORD;

if (!TEST_USER_EMAIL || !TEST_USER_PASSWORD) {
  // fail-fast with a helpful message when env vars are missing
  console.error(
    "Missing TEST_USER_EMAIL or TEST_USER_PASSWORD environment variables. Copy .env.example to .env and fill values.",
  );
}

test.describe("login", () => {
  test("user can login", async ({ page }) => {
    if (!TEST_USER_EMAIL || !TEST_USER_PASSWORD) {
      test.skip(true, "Missing credentials");
    }

    // Go to actual login page used by this project
    await page.goto("/login/index.html");

    // Fill in form using name attributes
    await page.locator('input[name="email"]').fill(TEST_USER_EMAIL);
    await page.locator('input[name="password"]').fill(TEST_USER_PASSWORD);

    // Click login and wait for the POST to the API and optional navigation
    await Promise.all([
      page.waitForResponse(
        (r) =>
          r.url().includes("/auth/login") && r.request().method() === "POST",
      ),
      page.getByRole("button", { name: "Login" }).click(),
      page
        .waitForNavigation({ waitUntil: "networkidle", timeout: 5000 })
        .catch(() => null),
    ]);

    // Prefer checking the stored token as a reliable success indicator
    const storedToken = await page.evaluate(() =>
      localStorage.getItem("token"),
    );
    console.log("stored token:", storedToken);
    expect(storedToken).toBeTruthy();

    // UI indicator: logout button or link visible
    const logout = page
      .getByRole("button", { name: /logout/i })
      .or(page.getByRole("link", { name: /logout/i }));
    await expect(logout).toBeVisible({ timeout: 8000 });
  });

  test("wrong password shows error", async ({ page }) => {
    await page.goto("/login/index.html");

    await page
      .locator('input[name="email"]')
      .fill(TEST_USER_EMAIL || "no-such-user@example.com");
    await page.locator('input[name="password"]').fill("wrongpassword");

    await page.getByRole("button", { name: "Login" }).click();

    // Check for error in message container (be permissive with the text)
    await expect(page.locator("#message-container")).toContainText(
      /invalid|incorrect|email|password|credentials/i,
    );
  });
});
