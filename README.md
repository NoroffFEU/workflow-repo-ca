# Workflow repo for the CA

## Running the Playwright E2E tests

Quick commands to run the end-to-end login tests locally.

1. Start the dev server (terminal A):

```bash
npm run dev -- --port 5173
```

1. Run the login tests (terminal B). Use inline env to pass credentials for a one-off run:

```bash
TEST_USER_EMAIL="testuser_1760631311@stud.noroff.no" TEST_USER_PASSWORD="Password123" \
npx playwright test tests/e2e/login.spec.js --project=chromium --reporter=list --headed
```

1. Run interactively with the Playwright inspector (pauses test execution for debugging):

```bash
PWDEBUG=1 TEST_USER_EMAIL="..." TEST_USER_PASSWORD="..." npx playwright test -g "user can login" --project=chromium
```

1. View the HTML report after a run:

```bash
npx playwright show-report
# or open the static report
open playwright-report/index.html
```

Notes

- The tests read `TEST_USER_EMAIL` and `TEST_USER_PASSWORD` from the environment. You can export them in your shell, or add them to a `.env` file (which is ignored by git).

- If your CI runner is slow, the Playwright config has increased timeouts and starts Vite in dev mode on port 5173 so tests have sufficient time to start.
