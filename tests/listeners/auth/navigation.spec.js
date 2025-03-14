import { test, expect } from "@playwright/test";

test("Navigates to a venue and verifies details page", async ({ page }) => {
  await page.goto("/index.html");

  await page.waitForSelector("#venue-container");

  const firstVenue = await page.locator(".container").first();
  await firstVenue.click();

  await page.waitForSelector("h1");
  const headingText = await page.locator("h1").innerText();
  expect(headingText).toContain("Welcome to this site");
});
