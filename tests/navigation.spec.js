import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("can navigate from home to venue details page", async ({ page }) => {
    //Navigates to the home page
    await page.goto("/");

    //Waits for the venue list to load
    await page.waitForSelector("a[href*='/venue/?id=']");

    //Clicks the first venue
    await page.locator("a[href*='/venue/?id=']").first().click();

    //Waits for the venue list to load
    await page.waitForURL("**/venue/**");

    //Verifies that the venue details page loads with "Venue details" in the heading
    await expect(page.locator("h1")).toContainText("Venue details");
  });
});
