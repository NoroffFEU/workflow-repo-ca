# Workflow repo for the CA

This project demonstrates the implementation of efficient workflows for a development environment, including linting, formatting, testing, and end-to-end testing setups.

## Getting started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
 ```
   git clone https://github.com/marned91/workflow-repo-ca.git
   ```
2. Checkout the workflow branch:
   [git checkout workflow](https://github.com/marned91/workflow-repo-ca/tree/workflow)

3. Install dependencies:
   ```
   npm install
   ```

### Scripts

Here are the available npm scripts:

1. Linting and Formatting
Run ESLint to check for code quality issues:
```
npm run lint
```
Format the code using Prettier:
```
npm run format
```

2. Unit Testing:
Run all unit tests using Vitest:
```
npm run test
```
3. End-To-End testing:
Run all Playwright tests and open the UI-based test runner:
```
npm run test:e2e
```
Run all Playwright tests directly:
```
npx playwright test
```

4. Pre-Commit Hook:

- Automatically lints and formats code before committing. Set up via husky and lint-staged.

### Environment Variables

The project requires environment variables for running specific tests. Create a .env file in the root directory with the following keys:
TEST_USER_EMAIL=
TEST_USER_PASSWORD=

### Testing Overview

**Unit Tests:**
Unit tests are listed as tests per source files.
Example:

- storage.test.js: Verifies user retrieval from storage.
- userInterface.test.js: Tests various path matching cases.

**End-To-End Tests**
Located in the tests folder.
Example:

- login.test.js: Tests valid/invalid login cases.
- navigation.test.js: Tests venue list and detail page navigation.

