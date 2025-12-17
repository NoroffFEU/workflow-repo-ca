import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("Navigate from venue list to venue details page", async ({ page }) => {
    // 1. Home page
    await page.goto("/");

    // 2. venue list load
    const venueContainer = page.locator("#venue-container");

    // wait until loading text is gone or one venue appears
    await expect(venueContainer).not.toContainText("Loading");

    const firstVenue = venueContainer.locator(".bg-cover").first();

    await expect(firstVenue).toBeVisible();

    // 3. click first venue
    await firstVenue.click();

    // 4. venue text “Venue details”
    const heading = page.getByRole("heading", {
      name: /venue details/i,
    });

    await expect(heading).toBeVisible();
  });
});
