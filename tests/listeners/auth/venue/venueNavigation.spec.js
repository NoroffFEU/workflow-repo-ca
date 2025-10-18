import { test, expect } from "@playwright/test";

test.describe("Venue navigation", () => {
  test("user can successfully view first venue details in the heading", async ({
    page,
  }) => {
    await page.goto("/");

    const firstVenueLink = page.locator("#venue-container a").first();
    await expect(firstVenueLink).toBeVisible();

    await firstVenueLink.click();

    const heading = page.locator("h1");
    await expect(heading).toContainText("Venue details");
  });
});
