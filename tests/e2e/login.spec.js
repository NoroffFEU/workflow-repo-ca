import { test, expect } from "@playwright/test";
import process from "node:process";

test("user can log in with valid credentials", async ({ page }) => {
  await page.goto("/login/");

  await page.getByPlaceholder("Email").fill(process.env.TEST_EMAIL);
  await page.getByPlaceholder("Password").fill(process.env.TEST_PASSWORD);

  await page.getByRole("button", { name: "Login", exact: true }).click();

  await expect(page).toHaveURL("http://127.0.0.1:3000/", {
    timeout: 15000,
  });
});

test("shows an error for invalid credentials", async ({ page }) => {
  await page.goto("/login/");

  await page.getByPlaceholder("Email").fill(process.env.TEST_EMAIL);
  await page.getByPlaceholder("Password").fill("WrongPasswordForTesting123!");

  await page.getByRole("button", { name: "Login", exact: true }).click();

  await expect(page.getByRole("alert")).toHaveText(
    "Invalid email or password",
    { timeout: 15000 },
  );
});
