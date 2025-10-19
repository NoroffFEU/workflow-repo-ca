import { describe, test, expect } from "@playwright/test";

describe("navigation test", () => {
  test(" test if it navigate from Home Page to Venue page with details displayed", async ({
    page,
  }) => {
    await page.goto("/"); //ok
    await page.waitForSelector('a[href^="/venue/"]'); // ok
    await page.locator('a[href^="/venue/"]').first().click(); //ok
    await expect(page).toHaveURL(/\/venue\/\?id=/);

    const heading = page.getByRole("heading", { name: /venue details/i });
    await expect(heading).toBeVisible();
  });
});
