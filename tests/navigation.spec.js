const { test, expect } = require("@playwright/test");

test.describe("Navigation", () => {
  test("Navigates to home, selects a venue, and verifies details page", async ({
    page,
  }) => {
    await page.goto("/"); // Automatically uses baseURL from config
    await page.waitForSelector(".venue-list"); // Wait for the venue list to load
    const venueLink = await page.locator(".venue-list > li >> nth=0");
    await venueLink.click();
    await page.waitForSelector('h1:has-text("Venue details")');
    expect(await page.isVisible("text=Venue details")).toBeTruthy();
  });
});
