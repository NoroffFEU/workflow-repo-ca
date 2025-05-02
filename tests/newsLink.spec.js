import { test, expect } from "@playwright/test";

test("homepage should show the News link", async ({ page }) => {
  //Start at the inglaise homepage
  await page.goto("https://noroff.no/en");

  //New page to load wait
  await expect(page.getByRole("link", { name: "News" })).toBeVisible();
});
