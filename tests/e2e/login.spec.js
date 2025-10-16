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

    // Click login first (some apps trigger fetches after click)
    await page.getByRole("button", { name: "Login" }).click();

    // Wait for either a login network response, a token written to localStorage, or the logout UI.
    // This is more robust than assuming the response will always be observable.
    const waitForLoginSignal = async () => {
      const responsePromise = page
        .waitForResponse(
          (r) =>
            (r.url().includes("/auth/login") ||
              /\/api\/auth\/login$/.test(r.url())) &&
            r.request().method() === "POST",
          { timeout: 15000 },
        )
        .catch(() => null);

      const tokenPromise = page
        .waitForFunction(() => !!localStorage.getItem("token"), null, {
          timeout: 15000,
        })
        .catch(() => null);

      const logoutPromise = page
        .waitForSelector('button:has-text("Logout"), a:has-text("Logout")', {
          timeout: 15000,
        })
        .catch(() => null);

      const results = await Promise.all([
        responsePromise,
        tokenPromise,
        logoutPromise,
      ]);
      return {
        response: results[0],
        tokenObserved: !!results[1],
        logoutElement: results[2],
      };
    };

    const {
      response: observedLoginResponse,
      tokenObserved,
      logoutElement,
    } = await waitForLoginSignal();

    if (observedLoginResponse) {
      console.log("login response status=", observedLoginResponse.status());
      expect([200, 201].includes(observedLoginResponse.status())).toBeTruthy();
    }

    // If token wasn't observed earlier, check localStorage again (maybe it arrived later)
    const storedToken = await page.evaluate(() =>
      localStorage.getItem("token"),
    );
    console.log("stored token:", storedToken, "tokenObserved=", tokenObserved);

    // If we still have no signal of success, capture diagnostics and fail with a useful message.
    if (!observedLoginResponse && !storedToken && !logoutElement) {
      try {
        await (
          await import("fs")
        ).promises.mkdir("test-results", { recursive: true });
      } catch {
        // ignore
      }
      await page
        .screenshot({
          path: "test-results/login-failure-screenshot.png",
          fullPage: true,
        })
        .catch(() => null);
      const html =
        (await page.content().catch(() => "<no-page-content>")) ||
        "<no-page-content>";
      try {
        await (
          await import("fs")
        ).promises.writeFile("test-results/login-failure-page.html", html);
      } catch {
        console.warn("Could not write diagnostics");
      }

      throw new Error(
        "Login did not complete: no /auth/login response observed, no token in localStorage, and no logout UI.\n" +
          "Saved diagnostics to test-results/login-failure-screenshot.png and test-results/login-failure-page.html",
      );
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
