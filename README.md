# Workflow Course Assignment

This project is the Course Assignment for the Workflow course at Noroff. The main part of the assignment is unit tests and e2e
using ESlint, prettier, Vitest, Playwright and Husky.

## Getting started

To instal dependencies run:
npm install

### Run the project locally:

The project uses live-server.
Start local server with:
npm run start

Open in browser:
http://127.0.0.1:5500/

### Scripts

These are the scripts used in the project:
npm run start – starts live server
npm run dev – build
npm run format – formats the code using Prettier
npm run lint – runs ESLint
npm test – runs Vitest
npx playwright test – runs e2e tests using playwright

## Testing

### Unit tests (Vitest)

Unit tests runs with:
npm test

### E2E tests (Playwright)

End-to-end tests runs with:
npx playwright test

## Environment variables

The project uses environment variables for login tests.
Make an .env file in the root of the project based on the .env.example file.

Set these variables:
TEST_USER_EMAIL
TEST_USER_PASSWORD
