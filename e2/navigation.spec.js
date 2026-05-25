import { test, expect } from "@playwright/test";

test("navigates to venue details page", async ({ page }) => {
  await page.goto("/");
  await page.waitForSelector("#venue-container a");
  await page.locator("#venue-container a").first().click();
  await expect(page.locator("h1")).not.toHaveText("Loading venue...");
  await expect(page).toHaveURL(/\/venue/);
});
