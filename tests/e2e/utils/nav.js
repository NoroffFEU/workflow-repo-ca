export const HOME_PATHS = ["/", "/index.html"];
export async function gotoHome(page) {
  for (const path of HOME_PATHS) {
    const response = await page.goto(path);
    if (response && response.ok()) return;
  }
  await page.goto("/");
}

export const LOGIN_PATHS = ["/login", "/login/", "/login/index.html"];
export async function gotoLogin(page) {
  for (const path of LOGIN_PATHS) {
    const response = await page.goto(path);
    if (response && response.ok()) return;
  }
  await page.goto("/");
}
