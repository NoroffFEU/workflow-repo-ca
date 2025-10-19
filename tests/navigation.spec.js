import { test, expect } from "@playwright/test";

test("home → first venue → details shows heading", async ({ page }) => {
  await page.goto("/");
  const firstCard = page.getByTestId("venue-card").first();
  await expect(firstCard).toBeVisible();
  await firstCard.click();
  await expect(page.getByTestId("venue-details-title")).toContainText(
    /venue details/i,
  );
});
