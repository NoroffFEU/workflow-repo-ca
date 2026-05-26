# Workflow repo CA

A venue booking application built with Vanilla JavaScript.

## Getting Started

### Install dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root of the project with the following variables:
VITE_LOGIN_EMAIL=
VITE_LOGIN_PASSWORD=

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the Tailwind CSS watcher |
| `npm test` | Runs unit tests with Vitest |
| `npx playwright test` | Runs end-to-end tests with Playwright |

## Testing

### Unit Tests (Vitest)

Tests for `isActivePath` and `getUsername` functions:

```bash
npm test
```

### End-to-end Tests (Playwright)

Tests for login and navigation functionality:

```bash
npx playwright test
```

## Pre-commit Hooks

This project uses Husky and lint-staged to run the following checks before each commit:

- HTML files are formatted with Prettier
- JavaScript files are formatted with Prettier and linted with ESLint