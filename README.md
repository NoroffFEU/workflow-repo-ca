![Playwright Tests](https://github.com/Wojciech094/workflow-repo-ca/actions/workflows/playwright.yml/badge.svg)
![Vitest](https://github.com/Wojciech094/workflow-repo-ca/actions/workflows/vitest.yml/badge.svg)

# Workflow Course Assignment

This project demonstrates the use of workflow tools to improve code quality and testing automation.

---

## Tools and Configuration

- **ESLint** and **Prettier** for linting and code formatting
- **Husky** and **lint-staged** for pre-commit hooks
- **Vitest** for unit testing
- **Playwright** for end-to-end testing

---

## Installation

Clone the repository and install dependencies:

````bash
npm install

npx playwright install


##  Running Tests

###  Unit Tests (Vitest)
To run all unit tests and check the basic project logic:

```bash
npm run test


## optional
npm run test:watch

###End-to-End Tests (Playwright)

```bash
npm run test:e2e

## optional
npx playwright show-report



