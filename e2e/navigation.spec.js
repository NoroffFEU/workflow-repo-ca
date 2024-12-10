import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("Navigate to venue details", async ({ page }) => {
    try {
      await page.goto("/");
      const venueContainer = page.locator("#venue-container");
      await expect(venueContainer).toBeVisible({ timeout: 5000 });
      const firstVenue = venueContainer.locator(".bg-cover").first();
      await firstVenue.click();
      const heading = page.getByRole("heading", { name: "Venue details" });
      await expect(heading).toBeVisible({ timeout: 5000 });
    } catch (error) {
      console.error("Navigation test failed:", error);
      throw error;
    }
  });
});
