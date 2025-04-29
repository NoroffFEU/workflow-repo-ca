import { test, expect } from "@playwright/test";

const validEmail = process.env.VITE_USER_EMAIL;
const validPassword = process.env.VITE_USER_PASSWORD;
const invalidEmail = "worng@example.com";
const invalidPassword = "wrongpassword";

test.describe("Login Test", () => {
  test("User Can succesfully login with a vaild credentials", async ({
    page,
  }) => {
    await page.goto("http://127.0.0.1:5500/login/");
    await page.fill('input[name="email"]', validEmail);
    await page.fill('input[name="password"]', validPassword);
    await page.click('button[type=["submit"]');

    await page.waitForURL("http://127.0.0.1:5500/login/");

    const token = await page.evaluate(() => localStorage.getItem("token"));
    expect(token).not.toBeNull();
  });

  test("User can see an error message with invaild credentials", async ({
    page,
  }) => {
    await page.goto("http://127.0.0.1:5500/login/");
    await page.fill('input[name="email"]', invalidEmail);
    await page.fill('input[name="password"]', invalidPassword);
    await page.click('button["submit"]');

    const errorMessage = await page.locator("#message-container").innerText();
    expect(errorMessage).toContain("Invaild credentials");
  });
});
