import { test, expect } from "@playwright/test";

test.describe("Venue Details", () => {
  test("should navigate to venue details when clicked", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#venue-container")).toBeVisible();
    await page.locator("#venue-container > a").first().click();
    await expect(page.getByRole("heading")).toContainText("Venue details");
  });
});
