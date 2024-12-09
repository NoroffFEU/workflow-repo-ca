import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("navigate to home and open venue details", async ({ page }) => {
    await page.goto("/"); // Go to the home page

    // Wait for venue list to load
    await page.waitForSelector(".venue-list");

    // Click the first venue
    await page.locator(".venue-list .venue-item:first-child").click();

    // Verify the venue details page
    await expect(
      page.getByRole("heading", { name: "Venue details" }),
    ).toBeVisible();
  });
});
