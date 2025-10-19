import { test, expect } from "@playwright/test";

test("can navigate from home to a venue details page", async ({ page }) => {
  await page.goto("/").catch(() => {});
  // Some projects use index.html explicitly
  if (!page.url().endsWith("/")) {
    await page.goto("/index.html").catch(() => {});
  }

  const possibleLists = [
    "#venueList",
    "[data-test='venue-list']",
    ".venue-list",
    "[data-testid='venue-list']",
    ".grid, .cards, .list",
  ];

  let listFound = null;
  for (const sel of possibleLists) {
    const loc = page.locator(sel);
    if (await loc.count()) {
      listFound = loc;
      break;
    }
  }

  if (!listFound) {
    await page.waitForSelector('a[href*="venue"], a[href*="/venue"], a[href*="venue/index.html"]', {
      timeout: 10000,
    });
  } else {
    await expect(listFound).toBeVisible({ timeout: 10000 });
  }

  const firstVenueLink = page
    .locator('a[href*="venue"], a[href*="/venue"], a[href*="venue/index.html"]')
    .first();

  await expect(firstVenueLink).toBeVisible({ timeout: 10000 });
  await firstVenueLink.click();

  const heading = page.locator('h1:has-text("Venue details"), h2:has-text("Venue details")');

  const regexHeading = page.getByText(/venue details/i);
  await expect(heading.or(regexHeading)).toBeVisible({ timeout: 10000 });
});
