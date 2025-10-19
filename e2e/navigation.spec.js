const { test, expect } = require("@playwright/test");

test("navigate, open first venue, verify heading", async ({ page }) => {
  await page.goto("/");
  await page.waitForSelector('[data-testid="venue-card"], .venue-card, [role="listitem"]');
  const first = await page.$('[data-testid="venue-card"], .venue-card, [role="listitem"]');
  await first.click();
  await expect(page).toHaveURL(/venue/i);
  await expect(page.getByRole("heading", { name: /venue details/i })).toBeVisible();
});