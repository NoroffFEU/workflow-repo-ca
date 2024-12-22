# Workflow repo for the CA

This project demonstrates the implementation of development tools and testing frameworks to enhance the quality and workflow of a website.

## Features

- Configured ESLint and Prettier for code linting and formatting
- Pre-commit hooks for enforcing quality checks before commits
- Unit testing using Vitest
- End-to-end testing using Playwright
- Environment variables for secure configuration

---

## Setup Instructions

### 1. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed on your system.

Run the following command to install the required dependencies:

````bash
npm install

### 2. Setting Up Environment Variables
Create a .env file in the project root with the following variables:

TEST_USER_EMAIL=<your-test-user-email>
TEST_USER_PASSWORD=<your-test-user-password>

Use the provided .env.example file as a reference.

## Scripts
### 1. Format Code
To format code using Prettier:
```bash
npm run format


### 2.  Lint Code
To check for linting issues:
```bash
npm run lint


### 3. Run Unit Tests (Vitest)
To run all unit tests:
```bash
npm run test

To watch for changes and re-run tests:
```bash
npm run test:watch


### 4. Run End-to-End Tests (Playwright)
To run all Playwright tests:
```bash
npx playwright test

To view tests running in a browser:
```bash
npx playwright test --headed

To debug tests step-by-step:
```bash
npx playwright test --debug

## Testing Details
### Unit Tests (Vitest)
Tests are located next to their respective modules with the .test.js suffix. Key unit tests include:

#### 1. isActivePath Function
Verifies if the current path matches or includes the specified path.

#### 2. getUserName Function
Retrieves the user's name from localStorage or returns null if no user exists.

### End-to-End Tests (Playwright)
E2E tests are located in the tests folder:

#### 1. Login Test
Tests login functionality with valid and invalid credentials.
#### 2. Navigation Test
Verifies navigation to a venue's details page and checks the presence of "Venue details" in the heading.




````
