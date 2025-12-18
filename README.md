# Workflow repo for the CA

This is my fork of the Noroff workflow course assignment repo.  
Goal: add linting, formatting and tests to the existing venue booking project – not build a whole new app 😊

---

## 🚀 Getting started

Clone the repo and install dependencies:

    git clone https://github.com/LowrensRosinelli/workflow-repo-ca.git
    cd workflow-repo-ca
    npm install

Start Tailwind watcher:

    npm run dev

Then open `index.html` in your browser  
(or use Live Server / any simple local HTTP server).

---

## 📜 NPM scripts

These are the scripts I actually use:

- `npm run dev` – Tailwind watch, builds `css/style.css`
- `npm run lint` – run ESLint on JS files
- `npm run format` – run Prettier on `js / css / html / md`
- `npm test` – unit tests with Vitest
- `npm run test:e2e` – end-to-end tests with Playwright

Husky + lint-staged are set up so lint + format run automatically on staged files when I commit.
Nice little “don’t-push-ugly-code” check 😅

---

## 🧰 Tools in this branch

Configured in the `workflow` branch:

- **ESLint** – with config that understands the test globals
- **Prettier** – for formatting
- **Husky + lint-staged** – pre-commit hook for lint/format
- **Vitest** – unit testing
- **Playwright** – e2e testing

---

## ✅ Unit tests (Vitest)

Vitest config: `vitest.config.mjs`  
Environment: `jsdom`.

Unit tests live in `js/utils`:

- `js/utils/isActivePath.test.js`
- `js/utils/getUsername.test.js`

They cover:

**`isActivePath`**

- returns `true` when current path matches `href` exactly
- returns `true` for root (`"/"`) when path is `"/"` or `"/index.html"`
- returns `true` when current path includes the `href`
- returns `false` when paths don’t match

**`getUserName`**

- returns the user name from storage when a user exists
- returns `null` when there is no user in storage

Run unit tests:

    npm test

---

## 🌐 E2E tests (Playwright)

Playwright config: `playwright.config.mjs`  
Tests are in the `test` folder.

### `test/login.spec.js`

Covers:

- user can log in with valid credentials (from `.env`)
- shows an error message when credentials are invalid

### `test/navigation.spec.js`

Covers:

- go to the home page
- wait for the venue list
- click the first venue card
- check that the venue details page has **“Venue details”** in the heading

Run all e2e tests:

    npm run test:e2e

Playwright stores reports under `test-results/`.

---

## 🔐 Environment variables

Playwright login tests use a test user from environment variables.  
These are loaded from `.env` (which is **ignored** by git).

Required variables:

- `TEST_EMAIL`
- `TEST_PASSWORD`

Example file included in the repo: `.env.example`

    TEST_EMAIL=your.stud.noroff.no@email
    TEST_PASSWORD=yourPassword

For local testing I copy this to `.env` and fill in a real test user.  
The example file is only there to show the format.

---

## 🌿 Branch & PR info

All workflow-related changes are done on the branch:

- `workflow`

For the course assignment, the open Pull Request is:

- from `workflow` → into `main`

That PR link is what I submit on Moodle.  
If the commit history looks a bit chaotic, that’s just me fighting with tests late at night 🙃 hehe

## Lowrens Rosinelli
