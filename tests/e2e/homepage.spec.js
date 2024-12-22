const { test, expect } = require("@playwright/test");

test("Homepage has the correct title", async ({ page }) => {
  await page.goto("http://localhost:5500"); // Update URL as needed
  await expect(page).toHaveTitle(/Your Website Title/); // Update title as needed
});
