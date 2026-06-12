# Workflow repo for the CA

A static multi-page Holidaze venue booking demo used to practice front-end workflow tooling: ESLint, Prettier, pre-commit hooks, and Playwright end-to-end tests.

## Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/<your-user>/workflow-repo-ca.git
cd workflow-repo-ca
npm install
```

Install the Playwright browser binaries (required for e2e tests):

```bash
npx playwright install chromium
```

## Environment variables

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

Required variables:

| Variable             | Description                                        |
| -------------------- | -------------------------------------------------- |
| `TEST_USER_EMAIL`    | Noroff account email used by the login e2e test    |
| `TEST_USER_PASSWORD` | Password for that account                          |

`.env` is gitignored. If the provided login details do not work, register a new user at `/register` in the running app and use those credentials.

## Scripts

| Script             | Description                                                               |
| ------------------ | ------------------------------------------------------------------------- |
| `npm run dev`      | Watch and compile Tailwind CSS (`css/input.css` → `css/style.css`)        |
| `npm run lint`     | Lint all JavaScript in `js/` with ESLint                                  |
| `npm run lint:fix` | Lint and auto-fix JavaScript issues                                       |
| `npm run format`   | Format JavaScript and HTML files with Prettier                            |
| `npm test`         | Run Vitest unit tests                                                     |
| `npm run test:e2e` | Run Playwright end-to-end tests (starts the static server automatically)  |

## Pre-commit hooks

Husky and lint-staged are configured to run automatically on every commit:

- `*.js` files are formatted with Prettier, then linted and auto-fixed with ESLint
- `*.html` files are formatted with Prettier

Commits are blocked if ESLint finds errors it cannot auto-fix.

## Unit tests

Unit tests live in `tests/` and are run with Vitest in a jsdom environment.

- `tests/isActivePath.test.js` — tests for the active-path helper
- `tests/getUsername.test.js` — tests for reading the stored username

Run them with:

```bash
npm test
```

## End-to-end tests

Tests live in `e2e/` and run against a local static server on `http://localhost:3000` (started automatically by Playwright).

- `e2e/login.spec.js` — verifies login with valid and invalid credentials
- `e2e/navigation.spec.js` — navigates home → venue list → venue details

Run them with:

```bash
npm run test:e2e
```
