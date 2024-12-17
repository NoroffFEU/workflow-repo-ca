const { test, expect } = require("@playwright/test");

test.describe("Navigation", () => {
  test("Navigates to home, selects a venue, and verifies details page", async ({
    page,
  }) => {
    await page.goto("/"); // Automatically uses baseURL from config

    const venueLink = await page.locator("#venue-container a").first();
    await venueLink.click();
    await page.waitForSelector('h1:has-text("Venue details")');
    expect(await page.isVisible("text=Venue details")).toBeTruthy();
  });
});
