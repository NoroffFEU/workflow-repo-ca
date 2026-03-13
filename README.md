# Workflow repo for the CA

Frontend project with automated testing using Vitest (unit tests) and Playwright (end-to-end tests).

## Installation

Clone the repository and install dependencies.

npm install

## Running the project

Start the development server:

npm run dev

Start the project locally with Live Server:

npm run start

## Run tests

Run unit tests:

npm run test:unit

Run end-to-end tests (Playwright):

npm run test:e2e

Open Playwright UI:

npm run test:e2e:ui

## Scripts

The project includes the following scripts:

npm run dev  
Builds Tailwind CSS in watch mode.

npm run start  
Starts Live Server on port 5500.

npm run test:unit  
Runs unit tests with Vitest.

npm run test:e2e  
Runs end-to-end tests with Playwright.

npm run test:e2e:ui  
Runs Playwright test with UI.

npm run prepare
Installs Husky Git hooks.

The project uses Husky and lint-staged to run checks before commits.

JavaScript files:

- formatted with Prettier
- linted with ESLint

HTML files:

- formatted with Prettier

## Environment Variables

Create a `.env` file in the project root.

Required variables:

TEST_USER_EMAIL  
TEST_USER_PASSWORD

Example `.env.example`:

TEST_USER_EMAIL=
TEST_USER_PASSWORD=

The `.env` file is ignored in `.gitignore`.

## Testing

This project includes:

Unit tests  
Written with Vitest to test small utility functions.

End-to-End tests  
Written with Playwright to simulate real user behaviour such as login, navigation, and opening venue details.

Some API requests are mocked in tests to ensure stable results.

## Tech Stack

JavaScript  
Vitest  
Playwright  
ESLint  
Prettier  
Husky
Lint-staged
Live Server
