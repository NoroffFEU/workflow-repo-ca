const { test, expect } = require("@playwright/test");

test("homepage has the correct title", async ({ page }) => {
  // Navigate to your local development server
  await page.goto("http://localhost:5173");

  // Check the title
  const title = await page.title();
  expect(title).toBe("Vite App"); // Adjust this if your title is different
});
