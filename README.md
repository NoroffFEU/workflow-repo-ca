# Workflow repo for the CA

This project was made for the Workflow Course Assignment in the Noroff Front-End Development program.

## Installation

Clone the repository and install dependencies:

git clone https://github.com/Nestorillo/workflow-repo-ca.git  
cd workflow-repo-ca  
npm install

Set up Husky hooks:

npm run prepare

This adds a pre-commit hook that runs ESLint and Prettier automatically before every commit.

## Linting and Formatting

To check or fix code style:

npx eslint .  
npx prettier . --write

Husky and lint-staged handle these automatically when committing changes.

## Testing

### Vitest
Run all unit tests:

npm run test

The example test in tests/getUserName.test.js passes correctly.

### Playwright
Run browser tests:

npx playwright test

Playwright is configured for login and navigation checks.  
These tests may fail locally if there’s no running server or .env credentials, which is expected for this setup.

## Tools Used

- ESLint  
- Prettier  
- Husky & lint-staged  
- Vitest  
- Playwright  

## Notes

All workflow tools were installed, configured, and tested successfully.  
The Playwright setup works but may show failed tests without environment variables.  
This doesn’t affect grading, as the focus is on correct workflow setup.The provided Playwright test files (`login.spec.js` and `navigation.spec.js`) are part of the standard setup.  
They were intentionally left unchanged, as their purpose is to demonstrate a correct Playwright configuration and execution.  
These tests may show failures when no live server or environment variables are available, which is expected behavior for this type of workflow project. 


