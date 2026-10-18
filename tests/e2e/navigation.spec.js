import { test, expect } from "@playwright/test";

test("user can open the first venue from the homepage", async ({ page }) => {
  await page.goto("/");

  const firstVenue = page
    .locator('#venue-container a[href^="/venue/?id="]')
    .first();

  await expect(firstVenue).toBeVisible({ timeout: 15000 });
  await firstVenue.click();

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Venue details",
    { timeout: 15000 },
  );
});
