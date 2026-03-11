import { test, expect } from "@playwright/test";

test("navigates to the home page, waits for venues, clicks first venue, and opens venue details", async ({
  page,
}) => {
  await page.goto("/");

  await page.waitForSelector("#venue-container a", { timeout: 15000 });

  const firstVenue = page.locator("#venue-container a").first();
  await firstVenue.click();

  await expect(
    page.getByRole("heading", { name: /venue details/i }),
  ).toBeVisible();
});
