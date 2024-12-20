const { test, expect } = require("@playwright/test");

test("Testing navigation, venue list, and heading on single venue page", async ({
  page,
}) => {
  // Navigating to the home page
  await page.goto("/");

  // Waiting for the venue list to load
  await page.waitForSelector("#venue-container a");

  // Clicking the first venue link
  const firstVenue = await page.locator("#venue-container a").first();
  await firstVenue.click();

  // Waiting for navigation to single venue page to complete
  await page.waitForURL("**/venue/?id=*");

  // Check that the heading is displayed on single venue page
  const heading = await page.locator("h1");
  await expect(heading).toHaveText("Venue details: yes");
});
