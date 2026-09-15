import { test, expect } from "@playwright/test";

test("user can navigate from home page to first venue details page", async ({
  page,
}) => {
  await page.route("**/holidaze/venues", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify([
        {
          id: "test-venue-id",
          name: "Test Venue",
          media: [],
        },
      ]),
    });
  });

  await page.route("**/holidaze/venues/test-venue-id", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        id: "test-venue-id",
        name: "Venue details",
        media: [],
        description: "Test venue description",
        price: 100,
        maxGuests: 2,
        rating: 5,
      }),
    });
  });

  await page.goto("/");

  await page.waitForSelector("a[href^='/venue/?id=']");

  await page.locator("a[href^='/venue/?id=']").first().click();

  await expect(page).toHaveURL(/\/venue\/\?id=test-venue-id/);
  await expect(page.locator("h1")).not.toHaveText(/loading/i);
});
