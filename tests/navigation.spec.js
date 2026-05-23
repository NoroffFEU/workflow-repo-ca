import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("user can navigate the home page", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector("#venue-container a");
    await page.locator("#venue-container a").first().click();

    await expect(
      page.getByRole("heading", { name: /Venue details/i }),
    ).toBeVisible();
  });
});
