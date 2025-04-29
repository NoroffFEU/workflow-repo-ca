import { test, expect } from "@playwright/test";

test.describe("Venue Navigation", () => {
  test("Navigates to venue details page and verifes heading", async ({
    page,
  }) => {
    await page("http://127.0.0.1:5500/venue/");

    await page.waitForSelector(".venue-list.item");

    await page.click(".venue-list-iteme:first-child a");

    await page.waitForSelector("h1");
    const headingText = await page.locator("h1").innerText();
    expect(headingText).toContain("Venue details");
  });
});
