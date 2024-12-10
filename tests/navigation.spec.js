import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("Navigate to venue details", async ({ page }) => {
    await page.goto("http://127.0.0.1:5500/");
    const venueContainer = page.locator("#venue-container");
    await expect(venueContainer).toBeVisible();
    const firstVenue = venueContainer.locator(".bg-cover").first();
    await firstVenue.click();
    const heading = page.getByRole("heading", { name: "Venue details" });
    await expect(heading).toBeVisible();
  });
});
