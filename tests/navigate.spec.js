import { test, expect } from "@playwright/test";

test("user can watch venue details", async ({ page }) => {
  await page.goto("/");

  await page.waitForSelector("#venue-container");

  await page.locator("#venue-container > a").first().click();

  await page.waitForSelector(`h1:has-text("Venue details")`);

  const heading = await page.locator("h1").textContent();
  expect(heading).toContain("Venue details");
});
