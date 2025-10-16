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

    // Log current URL for debugging in CI
    console.log("before click url=", page.url());

    // Click login first (some apps trigger fetches after click) then wait for response
    await page.getByRole("button", { name: "Login" }).click();

    // Wait for the POST to /auth/login with a longer timeout (15s) to accommodate slow CI
    let loginResponse = null;
    try {
      loginResponse = await page.waitForResponse(
        (r) =>
          r.url().includes("/auth/login") && r.request().method() === "POST",
        { timeout: 15000 },
      );
      console.log("login response status=", loginResponse.status());
    } catch (err) {
      console.warn("No login response within timeout:", err.message || err);
    }

    // Also wait for navigation but don't fail if none occurs
    await page
      .waitForNavigation({ waitUntil: "networkidle", timeout: 5000 })
      .catch(() => null);
    console.log("after actions url=", page.url());

    // Prefer checking the stored token as a reliable success indicator
    const storedToken = await page.evaluate(() =>
      localStorage.getItem("token"),
    );
    console.log("stored token:", storedToken);
    // If we got a response, assert success status; otherwise rely on stored token or UI
    if (loginResponse) {
      expect([200, 201].includes(loginResponse.status())).toBeTruthy();
      expect(storedToken).toBeTruthy();
    } else {
      // fallback: ensure token or logout UI exists
      if (!storedToken) {
        const logoutVisible = await page
          .getByRole("button", { name: /logout/i })
          .isVisible()
          .catch(() => false);
        expect(logoutVisible).toBe(true);
      }
    }

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
