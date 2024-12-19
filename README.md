# Workflow repo for the CA

This project demonstrates the implementation of efficient workflows for a development environment, including linting, formatting, testing, and end-to-end testing setups.

## Getting started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/marned91/workflow-repo-ca.git
   ```
2. Checkout the workflow branch:
   [git checkout workflow](https://github.com/marned91/workflow-repo-ca/tree/workflow)

3. Install dependencies:
   ```
   npm install
   ```
### Environment Variables

The project requires environment variables for running specific tests. A .env.example file is included in the root directory to guide setup, with the following keys:
- TEST_USER_EMAIL=
- TEST_USER_PASSWORD=

To configure environment variables:

1. Create a .env file in the root directory.
2. Copy the contents of .env.example into .env and fill in the values.
   
Note: The .env file is ignored for security reasons.


### Scripts

Here are the available npm scripts:

1. Start the development server:
   Start the server on port 5500 using Live Server:
   ```
   npm run start
   ```
   
2. Linting and Formatting
Run ESLint on the project to check for code quality issues:
```
   npx eslint
```
Format the code using Prettier:
```
   npx prettier . --write
```

3. Unit Testing:
Run all unit tests using Vitest:
```
   npm run test:unit
```

4. End-To-End testing:

Run all Playwright tests and open the UI-based test runner:
```
   npm run test:e2e
```

5. Pre-Commit Hook:

- Automatically lints and formats code before committing, using Husky and lint-staged.
  

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

## Contributing
Thank you for your interest in this project! As this is an educational project, I am not accepting contributions at this time. The focus of this project is to showcase the skills and knowledge I have gained during the course.

Thank you for your understanding!

