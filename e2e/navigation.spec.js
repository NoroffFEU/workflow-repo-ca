import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("user can navigate to homepage", async ({ page }) => {
    await page.goto("/");

    // Expect URL to have "/".
    await expect(page).toHaveURL("/");

    // Waits for the venue list to load
    const firstVenue = page.locator('a[href^="/venue/?id="]').first();
    await expect(firstVenue).toBeVisible();

    // Clicks the first venue
    await firstVenue.click();

    // Verifies that the venue details page loads with "h1"
    await expect(page.locator("h1")).toBeVisible();
  });
});
