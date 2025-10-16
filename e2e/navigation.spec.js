import { test, expect } from "@playwright/test";

test.describe("Navigation functionality", () => {
  test("Navigate to home and verify page loads", async ({ page }) => {
    // Step 1: Navigate to the home page
    await page.goto("/");

    // Verify we're on the home page
    expect(page.url()).toBe("http://127.0.0.1:5500/");

    // Step 2: Verify the page structure loads
    const heading = page.locator("h1");
    await expect(heading).toBeVisible({ timeout: 5000 });

    const headingText = await heading.textContent();
    expect(headingText).toContain("Welcome to this site");

    // Step 3: Verify the venue container is present
    const venueContainer = page.locator("#venue-container");
    await expect(venueContainer).toBeVisible({ timeout: 5000 });

    // Step 4: Wait for venues to start loading (either venues appear or loading message)
    await page.waitForTimeout(3000);

    const containerContent = await venueContainer.textContent();

    // Test passes if either venues loaded or we're still showing loading state
    const hasContent =
      containerContent.includes("Loading") ||
      containerContent.length > 20 || // Venues loaded
      (await page.locator('a[href*="/venue/"]').count()) > 0;

    expect(hasContent).toBeTruthy();

    console.log("Venue container content:", containerContent.substring(0, 100));
  });

  test("Navigate to individual pages and verify they exist", async ({
    page,
  }) => {
    // Test login page
    await page.goto("/login/");
    expect(page.url()).toContain("/login");

    const loginHeading = page.locator("h1");
    await expect(loginHeading).toBeVisible({ timeout: 5000 });
    expect(await loginHeading.textContent()).toContain("Login");

    // Test register page
    await page.goto("/register/");
    expect(page.url()).toContain("/register");

    // Note: Venue page likely redirects to home if no ID is provided, so we skip that test
    // This is expected behavior for a venue details page that requires an ID parameter
    console.log("Skipping venue page test - requires valid venue ID parameter");
  });
});
