import { test, expect } from "@playwright/test";

test("user can open venue details from home", async ({ page }) => {
    await page.goto("/");

    const firstVenueLink = page.locator('#venue-container a[href^="/venue/?id="]').first();
    await expect(firstVenueLink).toBeVisible();

    await firstVenueLink.click();

    await expect(page.getByRole("heading")).toContainText(/venue details/i);
});
