# Workflow repo for the CA

The goal is to improve development quality by configuring productivity tools, writing meaningful tests, and validating functionality using unit and end-to-end testing.

## Installation

Clone the repository and install dependencies:

### 1. Clone the repository

```bash
git clone <your-forked-repo-url>
```

```bash
cd workflow-repo
```

```bash
npm install
```

```bash
npm run start
```

## The project runs at:

http://127.0.0.1:5500

In your playwright.config.js

/_ Base URL to use in actions like `await page.goto('')`. _/

use: {

baseURL: "http://127.0.0.1:5500"

and

/_ Run your local dev server before starting the tests _/

webServer: {

url: "http://127.0.0.1:5500"

## Testing

Unit tests with (Vitest)

Run unit tests with:

```bash
npm run test:unit
```

or

```bash
npm run unit
```

Unit tests cover:

- isActivePath utility function

- getUserName function with and without stored user data

#

End-to-End Tests (Playwright) (Playwright tests automatically start the local server before running and close it afterward.)

Run e2e tests with:

```bash
npx playwright test --ui
```

or

```bash
npm run test:e2e
```

or

```bash
npm run e2e
```

E2E tests cover:

- User login (valid and invalid credentials)

- Navigation from home page to venue details page

## Linting and formatting

ESLint

- Configured to support browser, Node, and test environments

- Handles test globals correctly

ESLint is configured to support:

- JavaScript files

- Test globals (Vitest & Playwright)

Run ESLint manually:

```bash
npx eslint .
```

## prettier

Prettier is configured to automatically format:

- JavaScript

- HTML

- CSS

- Markdown

Run Prettier manually:

```bash
npx prettier --write .
```

## Git Hooks (Husky + lint-staged)

Pre-commit hooks are configured using Husky and lint-staged to ensure:

- JavaScript files are linted and formatted

- HTML, CSS, and Markdown files are formatted

- Code quality checks run before commits

## Environment Variables

This project uses environment variables for testing authentication.

### Required variables

Create a .env file in the root directory with the following variables:

TEST_USER_EMAIL=

TEST_USER_PASSWORD=

Do not commit .env files!

.env is included in .gitignore.

An example file is provided:

.env.example

## Tested Functionality

### Unit tests (Vitest)

- isActivePath
  - Exact path matching

  - Root path handling

  - Partial path matching

  - Non-matching paths

- getUserName
  - Returns username from storage

  - Returns null when no user exists

### End-to-end tests (Playwright)

- Login with valid credentials

- Login error with invalid credentials

- Navigation:
  - Load home page

  - Wait for venue list

  - Click first venue

  - Verify venue details page heading

## Scripts

Command | Description

```bash
npm install         |    Install dependencies

npm run start       |    Start local server

npm run dev         |    Tailwind CSS watch mode

npm run test:unit   |    Run Vitest unit tests

npm run test:e2e    |    Run Playwright tests

npm run prepare     |    Install Husky hooks
```

## Technologies Used

- HTML

- JavaScript (ES Modules)

- Vitest

- Playwright

- jsdom

- ESLint

- Prettier

- Husky

- lint-staged

## Author

Jørgen

GitHub: jb12-art
