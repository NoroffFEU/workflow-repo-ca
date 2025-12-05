// @ts-check
import { test, expect } from "@playwright/test";

test("loging in", async ({ page }) => {
  //Going to the login page
  await page.goto("/login/index.html");

  //Getting input fields and fill inn login information
  await page
    .locator('input[name = "email"]')
    .fill("workflowuser@stud.noroff.no");
  await page.locator('input[name = "password"]').fill("workflowpass");

  //Finding and clicking on the login button
  await page.locator("button").click();

  //CHecking if logout button excists after loging in
  await expect(page.getByRole("button", { name: "logout" })).toBeVisible();
}); //success login function

test("wrong password shows an error", async ({ page }) => {
  //going to the login page
  await page.goto("/login/index.html");

  //Getting input fields and fill inn login information
  await page
    .locator('input[name = "email"]')
    .fill("workflowuser@stud.noroff.no");
  await page.locator('input[name = "password"]').fill("Applejuice");

  //Finding and clicking on the login button
  await page.locator("button").click();

  await expect(page.locator("#message-container")).toContainText("Invalid");
}); //Success

test("checking venue details", async ({ page }) => {
  //Going to home page
  await page.goto("/index.html");

  //waiting for venue list and check if the first one is visible
  const firstVenue = await page.locator("#venue-container a").first();
  await expect(firstVenue).toBeVisible();

  //clicking the first venue card
  await firstVenue.click();

  //checking the text in the heading
  await expect(page.getByRole("heading")).toContainText("Venue details");
});
