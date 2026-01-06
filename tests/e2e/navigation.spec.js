import { test, expect } from "@playwright/test";

test('Home -> venue list -> first venue -> heading contains "Venue details"', async ({
  page,
}) => {
  await page.goto("/");

  const firstVenueLink = page.locator("a[href*='venue']").first();
  await expect(firstVenueLink).toBeVisible();

  await firstVenueLink.click();

  await expect(
    page.getByRole("heading", { name: /venue details/i }),
  ).toBeVisible();
});
