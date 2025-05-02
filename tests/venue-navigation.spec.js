import { test, expect } from "@playwright/test";

test("Navigate to venue details from home page", async ({ page }) => {
  // Navigate to the home page
  await page.goto("/");

  // Wait for the venue list to load
  // This assumes there's some container with a class or ID that holds the venues
  // Adjust the selector based on your actual HTML structure
  await page.waitForSelector("#venue-container", { state: "visible" });

  // Get the first venue and click it
  // Again, adjust the selector based on your actual HTML structure
  const firstVenue = await page.locator("#venue-container .venue-card").first();

  // Store the venue name for later verification (optional)
  // const venueName = await firstVenue.locator('h2, .venue-name').textContent();

  // Click the first venue
  await firstVenue.click();

  // Verify that we're on the venue details page by checking for "Venue details" in the heading
  await expect(
    page.locator("h1").filter({ hasText: "Venue details" }),
  ).toBeVisible();

  // Optional: Verify the URL has changed to a venue detail page
  await expect(page).toHaveURL(/\/venue\/.*$/);
});
