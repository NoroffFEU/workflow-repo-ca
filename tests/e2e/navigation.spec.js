import { test, expect } from "@playwright/test";

test("navigates from the home page to venue details", async ({ page }) => {
  await page.goto("/");

  const venueContainer = page.locator("#venue-container");
  const firstVenue = venueContainer.locator("a").first();

  await expect(firstVenue).toBeVisible();
  await firstVenue.click();

  await expect(page).toHaveURL(/\/venue\/\?id=/);
  await expect(page.locator("h1")).toContainText("Venue details");
});
