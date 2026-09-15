# Frontend Workflow & Testing

A frontend development project focused on creating a structured development workflow with automated testing, linting, formatting and Git hooks.

The project was completed as part of my Frontend Development studies at Noroff and gave me practical experience with tools commonly used to maintain code quality and test web applications.

## About the Project

The main focus of this project was not to build a new website from scratch, but to improve and test an existing frontend project using modern development tools.

I configured tools for code quality, formatting, automated testing and Git workflows, and created both unit tests and end-to-end tests.

## Tech Stack

* Vanilla JavaScript
* ESLint
* Prettier
* Husky
* lint-staged
* Vitest
* Playwright
* npm

## Testing

### Unit Testing

Unit tests are written with **Vitest**.

The tests cover JavaScript functionality including:

* Active navigation path detection
* Retrieving user information from local storage

Run the unit tests with:

```bash
npm test
```

### End-to-End Testing

End-to-end tests are written with **Playwright**.

The tests cover important user flows such as:

* User login
* Invalid login handling
* Navigation through the application

Run the end-to-end tests with:

```bash
npm run test:e2e
```

## Code Quality

### ESLint

ESLint is used to identify potential problems and maintain consistent JavaScript code.

```bash
npm run lint
```

### Prettier

Prettier is used for automatic code formatting.

```bash
npm run format
```

### Husky & lint-staged

Husky and lint-staged are used to run checks on staged files before commits.

This helps ensure that committed JavaScript files are linted and that supported files are formatted consistently.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/siljeloge/workflow.git
```

Switch to the project branch:

```bash
git checkout workflow
```

Install the dependencies:

```bash
npm install
```

## Environment Variables

Some end-to-end tests require environment variables.

Create a `.env` file and add the required values:

```text
EMAIL=your-email
PASSWORD=your-password
```

The `.env` file should not be committed to the repository.

## What I Learned

Through this project, I gained practical experience with:

* Writing unit tests with Vitest
* Writing end-to-end tests with Playwright
* Testing both successful and unsuccessful user interactions
* Configuring ESLint and Prettier
* Using Git hooks with Husky and lint-staged
* Working with environment variables
* Using npm scripts for development tasks
* Maintaining a consistent development workflow

## Author

**Silje Loge**

Frontend Development student at Noroff.

GitHub: https://github.com/siljeloge
