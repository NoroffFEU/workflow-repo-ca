# Workflow repo for the CA

This repository is used for the Workflow course assignment. It demonstrates a modern
frontend workflow with linting, formatting, unit tests, and end-to-end tests.

## Getting started

Install dependencies:

```bash
npm install
```

## Development

Build Tailwind CSS in watch mode:

```bash
npm run dev
```

Serve the site locally:

```bash
npm run dev:server
```

The application will be available at: <http://localhost:5173>

## Linting and formatting

Code formatting is handled by Prettier and linting by ESLint. Pre-commit hooks are
set up using Husky and lint-staged to automatically lint and format staged files
before committing.

## Unit tests (Vitest)

Run unit tests:

```bash
npm test
```

## End-to-end tests (Playwright)

Run e2e tests:

```bash
npm run e2e
```

Run Playwright in UI mode:

```bash
npm run e2e:ui
```

## Environment variables

End-to-end tests require environment variables for login credentials. Create a
`.env` file locally with the following variables:

```bash
E2E_USER_EMAIL=
E2E_USER_PASSWORD=
```

See `.env.example` for reference.
