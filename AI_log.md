## Tool used: ChatGPT

## Date: 2026-03-09
- Purpose: Playwright does not support webkit on mac-arm64
- Outcome: Solution – remove webkit from playwright.config.js, install only Chromium and Firefox: `npx playwright install chromium firefox`

## Date: 2026-03-12
- Purpose: Problem with Noroff v1 API server – returns 500 Internal Server Error
- Outcome: to mock the API in the test. Then the test doesn't depend on the server. 
In the end, I decided to wait for the teacher's response and use his workaround.

## Date: 2026-03-12
- Purpose: Finding a bug in the Playwright test — tests failed
- Outcome: Typos found: `Test_USER_EMAIL` → `TEST_USER_EMAIL`, `passwor` → `password`

## Date: 2026-03-13
- Purpose: How to rename a file in Git without losing history
- Outcome: Use `git mv js/utils/storage.test.js js/utils/getUsername.test.js` instead of regular `mv`

## Date: 2026-03-13
- Purpose: Create an AI_log report in the format Date/Purpose/Outcome
- Outcome: This log has been created