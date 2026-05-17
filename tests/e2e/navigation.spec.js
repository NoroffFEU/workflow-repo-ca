import { test, expect } from "@playwright/test";

test.skip("user can navigate to venue details page", async ({ page }) => {
  await page.goto("/");

  await page.waitForSelector("a");

  const firstVenue = page.locator("a").first();

  await firstVenue.click();

  await expect(page.locator("h1")).toContainText("Venue details");
});
