import { test, expect } from "@playwright/test";

test.describe("Venue Navigation", () => {
  test("User can view venue details", async ({ page }) => {
    // Navigate to the home page
    await page.goto("/");

    // Wait for the venue list to load
    const venueContainer = page.locator("#venue-container");
    await expect(venueContainer).not.toHaveText("Loading...");

    // Wait for at least one venue to appear
    const firstVenue = venueContainer.locator(":scope > *").first();
    await expect(firstVenue).toBeVisible();

    // Click on the first venue
    await firstVenue.click();

    // Verify that "Venue details" appears in the header
    const heading = page.locator("h1");
    await expect(heading).toContainText("Venue details");
  });
});
