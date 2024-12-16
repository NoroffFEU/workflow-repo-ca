import { expect, test } from "@playwright/test";

test.describe("Navigation", () => {
  test("Navigate to venue detail page", async ({ page }) => {
    // Step 1: Go to home page
    await page.goto("/");

    // Step 2: Wait for the venue list to load
    const venueList = page.locator("#venue-container");
    await expect(venueList).toBeVisible();

    // Step 3: Click the first venue
    const firstVenue = venueList.locator("a").first();
    await expect(firstVenue).toBeVisible();
    await firstVenue.click();

    // Step 4: Verify navigation to the venue detail page
    const heading = page.locator("h1");
    await expect(heading).toContainText("Venue details");
  });
});
