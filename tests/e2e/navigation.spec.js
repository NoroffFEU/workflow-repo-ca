import { test, expect } from "@playwright/test";

test("home → first venue → details heading contains 'Venue details'", async ({ page }) => {
  await page.goto("/");

  const list = page.locator('[data-test="venue-list"]');
  await expect(list).toBeVisible({ timeout: 15000 });

  const items = list.locator('[data-test="venue-item"]');
  await expect(items).toHaveCountGreaterThan(0, { timeout: 15000 });

  await items.first().click();

  await expect(
    page.getByRole("heading", { name: /venue details/i })
  ).toBeVisible({ timeout: 15000 });
});
