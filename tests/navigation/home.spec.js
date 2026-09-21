import { test, expect } from "@playwright/test";

test("Home link navigates to the homepage", async ({ page }) => {
  await page.goto("/login/");
  await page.getByRole("link", { name: "Home", exact: true }).click();
  await expect(page).toHaveURL("/");
});
