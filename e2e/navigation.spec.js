const { test, expect } = require("@playwright/test");

test("navigates from home page to venue details", async ({ page }) => {
  await page.goto("/");
  await page.waitForSelector("#venue-container a");
  await page.locator("#venue-container a").first().click();
  await expect(page.locator("h1")).toContainText("Venue details");
});
