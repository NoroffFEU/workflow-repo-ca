import { test, expect } from "@playwright/test";

test("User can successfully log in with valid credentials from environment variables", async ({
  page,
}) => {
  await page.goto("/login/");

  await page.getByPlaceholder("Email").fill(process.env.E2E_USER_EMAIL ?? "");
  await page
    .getByPlaceholder("Password")
    .fill(process.env.E2E_USER_PASSWORD ?? "");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).not.toHaveURL(/\/login\/?/i);
});

test("User sees an error message with invalid credentials", async ({
  page,
}) => {
  await page.goto("/login/");

  await page.getByPlaceholder("Email").fill("wrong@example.com");
  await page.getByPlaceholder("Password").fill("wrongpassword");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(
    page.getByRole("alert").getByText(/noroff\.no|stud\.noroff\.no/i),
  ).toBeVisible();
});
