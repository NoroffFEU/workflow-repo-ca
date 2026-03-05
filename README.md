# Workflow CA

Noroff Course assignment - WorkFlow - Testing

## Getting Started

### Installation

Clone the repository and install dependencies:
```bash
git clone https://github.com/YOUR-USERNAME/workflow-repo-ca.git
cd workflow-repo-ca
npm install
```

Install Playwright browsers:
```bash
npx playwright install
```

### Environment Variables

Create a `.env` file in the root of the project based on `.env.example`:
```
TEST_USER_EMAIL=
TEST_USER_PASSWORD=
```

Fill in your Noroff student credentials. This file is never committed to GitHub.

## Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Dev server | `npm run dev` | Watches and compiles Tailwind CSS |
| Lint | `npm run lint` | Runs ESLint on all JS files |
| Format | `npm run format` | Runs Prettier on all files |
| Unit tests | `npm test` | Runs Vitest unit tests |
| E2E tests | `npm run test:e2e` | Runs Playwright end-to-end tests |

## Running Tests

### Unit Tests (Vitest)
```bash
npm test
```

Tests the following functions:
- `isActivePath` - validates active navigation link detection
- `getUsername` - validates user retrieval from localStorage

### End-to-End Tests (Playwright)

Start a local server first:
```bash
live-server --port=5500
```

Then in a separate terminal:
```bash
npm run test:e2e
```

Tests the following:
- User can log in with valid credentials
- User sees an error message with invalid credentials
- Navigates to a venue details page

## Development Tools

- **ESLint** - JavaScript linting with browser and test globals configured
- **Prettier** - Code formatting with single quotes, semicolons, and trailing commas
- **Husky** - Git hook that runs lint-staged before every commit
- **lint-staged** - Formats HTML files and formats + lints JavaScript files on commit

# AI Usage Log

## Tool: Claude (Anthropic)
**Date:** 04.03.2026

### Usage 1
**Purpose:** Explaining concepts (ESLint, Prettier, Husky, Vitest, Playwright)
**Outcome:** Improved understanding of each tool's role in a development workflow

### Usage 2
**Purpose:** Syntax guidance for configuration files (eslint.config.mjs, .prettierrc, vitest.config.js, playwright.config.js)
**Outcome:** Configuration files generated with guidance, reviewed and understood

### Usage 3
**Purpose:** Debugging errors (ESLint globals, Playwright connection errors, Husky Windows issues)
**Outcome:** Errors resolved with explanations understood

### Usage 4
**Purpose:** Generating boilerplate for unit tests (Vitest) and e2e tests (Playwright)
**Outcome:** Test files generated, logic reviewed and understood

### Usage 5
**Purpose:** Drafting README documentation
**Outcome:** README drafted with AI, reviewed and edited
