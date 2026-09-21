 
import { test, expect } from "@playwright/test";

test.describe("displayVenueList", () => {
  test("Waits for the venue list to load", async ({ page }) => {
    await page.goto("/");
    const venueContainer = page.locator("#venue-container");
    const firstVenue = venueContainer.locator("a").first();
    await expect(firstVenue).toBeVisible();
  });
  test("Clicks the first venue", async ({ page }) => {
    await page.goto("/");
    const venueContainer = page.locator("#venue-container");
    const firstVenue = venueContainer.locator("a").first();
    await expect(firstVenue).toBeVisible();
    const venueUrl = await firstVenue.getAttribute("href");
    await firstVenue.click();
    await expect(page).toHaveURL(venueUrl);
  });
});
