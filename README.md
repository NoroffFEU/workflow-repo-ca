# Workflow Course Assignment

The purpose of this course assignment is to configure development tools and automated testing for an existing JavaScript project.

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Development

To run Tailwind CSS in watch mode:

```bash
npm run dev
```

## Code Quality

ESLint is used for linting and Prettier is used for formatting.

```bash
npm run lint
npm run lint:fix
npm run format
npm run format:check
```

Husky and lint-staged are configured to run formatting and linting checks before commits.

## Unit Testing

Vitest is used to test the `isActivePath` and `getUserName` functions.

Run the unit tests:

```bash
npm test
```

## End-to-End Testing

Playwright is used to test login functionality and venue navigation.

Install the Playwright browser if needed:

```bash
npx playwright install
```

Run the end-to-end tests:

```bash
npm run test:e2e
```

## Environment Variables

Create a `.env` file in the project root using `.env.example` as a template.

The following environment variables are required for the Playwright login tests:

```env
TEST_EMAIL=
TEST_PASSWORD=
```

Enter valid login credentials in the `.env` file.

The `.env` file is included in `.gitignore` and should not be committed to GitHub.

## Tools

- ESLint
- Prettier
- Husky and lint-staged
- Vitest
- Playwright
- Git and GitHub

## Author

**Denise Cramer**
GitHub: [Denise Cramer](https://github.com/Denise-Cramer)
