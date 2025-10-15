# Workflow Repo for the CA

## Setup

Run `npm install` to install dependencies.

## Scripts

- `npm run dev` – start dev server
- `npm run test` – run unit tests (Vitest)
- `npm run e2e` – run end-to-end tests (Playwright)
- `npm run e2e:ui` – open Playwright UI mode

## Tools

- ESLint configured with browser + Vitest globals
- Prettier formatting
- Husky + lint-staged pre-commit hooks (auto lint and format before commit)
- Vitest unit tests: `isActivePath` and `getUsername`
- Playwright e2e tests: login and navigation

## Environment Variables

Create a `.env` file (not committed) using `.env.example` as a template.  
Required variables:

- `E2E_BASE_URL=`
- `E2E_USER_EMAIL=`
- `E2E_USER_PASSWORD=`

### Example local .env values:
E2E_BASE_URL=http://localhost:5173
E2E_USER_EMAIL=example@example.com
E2E_USER_PASSWORD=example-password

## How to Run Tests

- `npm run test` → unit tests
- `npm run e2e` → e2e tests (starts dev server)

## Submission

Open a Pull Request from `workflow` → `main`, do not merge, and submit the PR link on Moodle.

---

*Keywords: #WorkflowRepo #CA #NodeJS #Vitest #Playwright #ESLint #Prettier #Husky*