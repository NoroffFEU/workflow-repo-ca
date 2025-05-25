import { test, expect } from "@playwright/test";

test("navigates to venue details page", async ({ page }) => {
  await page.goto("/");

  await page.waitForSelector("a[href^='/venue/?id=']");

  const venueCards = page.locator("a[href^='/venue/?id=']");
  await expect(venueCards.first()).toBeVisible();

  await venueCards.first().click();

  const heading = page.locator("h1");
  await expect(heading).toContainText("Venue details");
});
