import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

test.describe("Login flow", () => {
  test("User can successfully log in with valid credentials", async ({
    page,
  }) => {
    await page.goto("http://127.0.0.1:5500/login/");

    // Fyll ut skjemaet med gyldige data
    await page.fill('input[name="email"]', process.env.VITE_LOGIN_USERNAME);
    await page.fill('input[name="password"]', process.env.VITE_LOGIN_PASSWORD);
    await page.click('button[type="submit"]');

    // Verifiser at brukeren blir omdirigert til riktig URL
    await expect(page).toHaveURL("http://127.0.0.1:5500/");

    // Valider om velkomstmeldingen finnes
    const header = page.locator("h1");
    await expect(header).toHaveText("Welcome to this site");
  });

  test("User sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto("/login/");

    // Fyll ut skjemaet med ugyldige data
    await page.fill('input[name="email"]', "invalid@example.com");
    await page.fill('input[name="password"]', "wrongpassword");
    await page.click('button[type="submit"]');

    // Valider feilmeldingen
    const messageContainer = page.locator("#message-container");
    await expect(messageContainer).toBeVisible();
    await expect(messageContainer).toContainText(
      "Please enter a noroff.no or stud.noroff.no email address.",
    );
  });
});
