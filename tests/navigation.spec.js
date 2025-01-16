import { test, expect } from "@playwright/test";

test("Navigation works correctly", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toHaveText("Venue List");
  await page.click(".venue:first-of-type");
  await expect(page.locator("h1")).toHaveText("Venue details");
});
