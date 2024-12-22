import { test, expect } from "@playwright/test";

test.describe("Navigation Tests", () => {
  test("Navigates to home page, waits for the venue list to load, clicks the first venue, and verifies details", async ({
    page,
  }) => {
    // Navigate to the home page
    await page.goto("/");

    // Wait for the venue list to load
    await page.waitForSelector("#venue-container");

    // Click on the first venue
    await page.locator("#venue-container a").first().click();

    // Verify that the venue details page loads
    await expect(page.locator("h1")).toContainText("Venue details");
  });
});
