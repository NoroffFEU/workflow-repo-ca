import { test, expect } from "@playwright/test";

test.describe("Navigation flow", () => {
  test("Verifies that when the venue details page loads there are the words “Venue details” in the heading", async ({
    page,
  }) => {
    await page.goto("/");

    const venueContainer = page.locator("#venue-container");
    await expect(venueContainer).toBeVisible();

    const firstVenue = venueContainer.locator("a").first();
    await firstVenue.waitFor();
    await firstVenue.click();

    // source of regex using by docs from mozilla
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
    await expect(page.locator("h1")).toContainText(/venue details/i);
  });
});
