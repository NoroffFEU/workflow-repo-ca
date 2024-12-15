# Workflow repo for the CA

This project demonstrates the implementation of efficient workflows for a development environment, including linting, formatting, testing, and end-to-end testing setups.

## Getting started

### Prerequisites

Make sure you have the following installed on your machine:

- [ ] Node.js (v16 or higher recommended)
- [ ] npm (comes with Node.js)

### Installation

1. Clone the repository:
   git clone https://github.com/marned91/workflow-repo-ca.git

2. Checkout the workflow branch:
   git checkout workflow

3. Install dependencies:
   npm install

### Scripts

Here are the available npm scripts:

1. Linting and Formatting

- npm run lint: Run ESLint to check for code quality issues.
- npm run format: Format the code using Prettier.

2. Unit Testing:

- npm run test: Run all unit tests using Vitest.

3. End-To-End testing:

- npm run test:e2e: Run Playwright end-to-end tests.

4. Pre-Commit Hook:

- Automatically lints and formats code before committing. Set up via husky and lint-staged.

### Environment Variables

The project requires environment variables for running specific tests. Create a .env file in the root directory with the following keys:
TEST_USER_EMAIL=
TEST_USER_PASSWORD=

### Testing Overview

**Unit Tests:**
Unit tests are listed as test per source files.
Example:

- storage.test.js: Verifies user retrieval from storage.
- userInterface.test.js: Tests various path matching cases.

**End-To-End Tests**
Located in the tests folder.
Example:

- login.test.js: Tests valid/invalid login cases.
- navigation.test.js: Tests venue list and detail page navigation.

```

```
