import { test, expect } from "@playwright/test";

test.describe("renderVenue", () => {
  test("Vertifying the venue details page loads", async ({ page }) => {
    await page.goto("/");
    const venueContainer = page.locator("#venue-container");
    const firstVenue = venueContainer.locator("a").first();
    await firstVenue.click();
    await expect(
      page.getByRole("heading", { name: "Venue details" }),
    ).toBeVisible();
  });
});
