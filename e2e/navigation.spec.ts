import { test, expect } from "@playwright/test";

test("navigates to first venue and sees details heading", async ({ page }) => {
  await page.goto("/");

  const list = page.getByTestId("venue-list");
  await expect(list).toBeVisible();

  await page.getByTestId("venue-item").first().click();

  await expect(page.getByRole("heading", { name: /venue details/i })).toBeVisible();
});
