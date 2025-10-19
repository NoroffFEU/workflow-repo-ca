import { test, expect } from "@playwright/test";
import { gotoHome } from "./utils/nav.js";

test("navigation: home → first venue → detail heading", async ({ page }) => {
  await gotoHome(page);

  const firstItem = page.locator('#venue-container a[href^="/venue/"]').first();
  await firstItem.waitFor({ state: "visible" });

  await firstItem.click();

  const heading = page.getByRole("heading", { level: 1 });
  await expect(heading).toHaveText(/venue details:/i);
});
