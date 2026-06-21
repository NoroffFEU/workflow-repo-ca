import { test, expect } from "@playwright/test";

test("navigates to a venue details page", async ({ page }) => {
  await page.route(
    "https://api.noroff.dev/api/v1/holidaze/venues",
    async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify([
          {
            id: "test-venue-id",
            name: "Test Venue",
            media: ["https://placehold.co/400x400"],
          },
        ]),
      });
    },
  );

  await page.goto("/");

  const firstVenue = page.locator("#venue-container a").first();

  await expect(firstVenue).toBeVisible({ timeout: 10000 });
  await firstVenue.click();

  await expect(page.getByRole("heading")).toContainText("Venue Details");
});
