import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("Navigates to home page and verifies venue details page", async ({
    page,
  }) => {
    await page.goto("/index.html");

    await page.waitForSelector("#venue-container");
    await page.click("#venue-container a:first-child");

    await expect(page.locator("h1")).toContainText("Venue details");
  });
});
