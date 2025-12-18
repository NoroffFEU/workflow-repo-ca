import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("user can open first venue and see details heading", async ({
    page,
  }) => {
    await page.goto("/index.html");

    const firstVenueLink = page.locator("a[href*='venue']").first();
    await expect(firstVenueLink).toBeVisible();

    await firstVenueLink.click();

    const heading = page.getByRole("heading", { name: /venue details/i });
    await expect(heading).toBeVisible();
  });
});
