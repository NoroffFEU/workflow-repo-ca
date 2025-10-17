# Workflow repo for the CA

This repository demonstrates a complete frontend workflow setup with linting, formatting, pre-commit hooks, testing, and end-to-end automation.

## Tech Stack

- Javascript (ES Modules)
- Tailwind CSS
- HTML
- ESLint + Prettier
- Husky + lint-staged
- Vitest (unit testing)
- Playwright (end-to-end testing)
- ## Features
- **ESLint** configured to handle both application code and test globals
- **Prettier** configured for consistent formatting
- **Husky + lint-staged** for pre-commit hooks that run linting and formatting
- **Vitest** installed and configured for end-to-end testing
- Example **unit tests** (`tests/unit`)
- Example **E2E tests** (`e2e/`)
- `.env` ignored in Git, with `.env.example` provided
- Pages wired up: `index.html`, `login/`, `register/`, `venue/`

## Installation

Clone the repo and install dependencies

```bash
git clone https://github.com/wanawsha/workflow-repo-ca.git
cd workflow-repo-ca
npm install
```

## Available Scripts

Run the following npm scripts in the project:

- **`npm run dev`** – Run Tailwind CSS in watch mode
- **`npm run lint`** – Run ESLint for code quality
- **`npm run format`** – Format files with Prettier
- **`npm run test`** – Run Vitest unit tests
- **`npm run test:ui`** – Run Vitest with UI
- **`npm run e2e`** – Run Playwright end-to-end tests
- **`npm run e2e:ui`** – Run Playwright with UI
- **`npm run start:static`** – Serve project locally with `http-server`

## Environment Variables

A .env files is required for running E2E tests. It should be based on .env.example

```bash
E2E_BASE_URL=http://127.0.0.1:8080
E2E_USER_EMAIL=your_registered_email
E2E_USER_PASSWORD=your_registered_password
```

Do not commit .env files, only .env.example should be in the repo.

## Testing

**Unit tests (Vitest)**

```bash
npm run test
```

**End-to-End tests (Playwright)**

```bash
npm run e2e
```
