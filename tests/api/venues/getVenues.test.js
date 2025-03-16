import { test, expect } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config();

test.describe("Get Venues", () => {
  test("Waits for the venue list to load", async ({ page }) => {
    await page.goto("http://localhost:5500/index.html");

    await page.waitForSelector("#venue-container");

    await page.locator("#venue-container a").first().click();

    await expect(page.locator("h1")).toContainText("Venue details", {
      ignoreCase: true,
    });
  });
});
