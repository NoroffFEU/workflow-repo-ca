const { test, expect } = require("@playwright/test");

test.describe("Navigation functionality", () => {
  test.setTimeout(60000);

  test("Navigates to the home page ", async ({ page }) => {
    await page.goto("http://localhost:5500/login");

    const homeLink = await page.locator("#homeLink");
    await expect(homeLink).toHaveId("homeLink");

    await homeLink.click();
    await expect(page).toHaveURL("http://localhost:5500/");
  });

  test("Waits for the venue list to load", async ({ page }) => {
    await page.goto("http://localhost:5500/");
    const venueListContainer = page.locator("#venue-container");

    await expect(venueListContainer).toContainText("Loading...");
    await expect(venueListContainer).toBeVisible();
  });

  test("Clicks the first venue", async ({ page }) => {
    await page.goto("http://localhost:5500/");
    const firstVenue = page.locator("a.venue-card").first();

    await firstVenue.click();

    await expect(page.url()).toContain("http://localhost:5500/venue/?id=");
  });

  test("When the venue details page loads, “Venue details” is visible in the heading", async ({
    page,
  }) => {
    await page.goto(
      "http://localhost:5500/venue/?id=3d100123-8dbf-4a81-bfb8-34631d076877",
    );

    const heading = page.locator("h1");

    await expect(heading).toContainText("Venue details");
  });
});
