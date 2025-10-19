# Workflow repo for the CA

This repository contains a simple front-end app with unit tests (Vitest) and end-to-end tests (Playwright).

## Prerequisites

- Node.js LTS (>= 18 recommended)
- npm (comes with Node)

## Setup

1. Install dependencies:

	```bash
	npm install
	```

2. (Optional) Create a local `.env` file for E2E tests and dev server config. The file should not be committed – `.env` is already in `.gitignore`.

## Scripts

- Start a local dev server (<http://localhost:5173> by default):

	```bash
	npm run dev
	```

- Lint the codebase:

	```bash
	npm run lint
	```

- Format the codebase with Prettier:

	```bash
	npm run format
	```

- Run unit tests (Vitest):

	```bash
	npm test
	```

- Run unit tests in watch/UI mode:

	```bash
	npm run test:ui
	```

- Run end-to-end tests (Playwright):

	```bash
	npm run test:e2e
	```

## Environment variables

Provide these in a local `.env` file (or your shell environment) as needed. See `.env.example` for a template.

- `BASE_URL` — Base URL for the dev server used by Playwright (default: `http://localhost:5173`).
- `E2E_EMAIL` — Email for the E2E login test (must be a Noroff domain email in this app).
- `E2E_PASSWORD` — Password for the E2E login test.

Example `.env` (do not commit actual classified values/information):

```env
E2E_EMAIL=
E2E_PASSWORD=
BASE_URL=http://localhost:5173
```

## Testing

### Unit tests (Vitest)

Unit tests run in a Node environment with a lightweight `localStorage` mock. To execute:

```bash
npm test
```

Coverage reports are written to `./coverage`.

### End-to-end tests (Playwright)

Playwright will start the dev server automatically and run tests in Chromium.

```bash
npm run test:e2e
```

- The valid login test is skipped unless `E2E_EMAIL` and `E2E_PASSWORD` are set.
- The invalid credentials test does not require secrets and should pass by default.

## Project structure

- `js/` — App source (listeners, UI components, utils)
- `tests/unit/` — Unit tests (Vitest)
- `tests/e2e/` — E2E tests (Playwright)
- `tests/e2e/utils/` — Shared test helpers

## Notes

- Husky pre-commit hook runs unit tests on commit.
- ESLint and Prettier are configured; consider running `npm run format` before committing.
