import { test, expect } from "@playwright/test";

test("navigates to venue details page", async ({ page }) => {
  await page.goto("/");
  await page.waitForSelector("#venue-container a", { timeout: 10000 });
  await page.locator("#venue-container a").first().click();
  await expect(page.locator("h1")).toContainText("Venue details");
});
