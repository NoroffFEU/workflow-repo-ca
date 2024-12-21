# Workflow Course Assignment 🚀

This is my contribution to the course assignment for workflow at Noroff School of Technology and Digital Media.

This was the goal of the project:

- Install and configure **ESLint** and **Prettier** for consistent code quality.
- **Husky** and **Lint-Staged** for commit hooks to ensure code is linted and formatted before commits.
- Unit tests written with **Vitest** to ensure critical utility functions work as expected.
- End-to-end tests written with **Playwright** to validate key user flows, such as logging in and navigating to venue details.

## How to Install 👩🏽‍💻

1. Clone the repo
2. Install dependencies by running "npm install" in the terminal
3. Start the development server by running "npm run dev" in the terminal

## Environment variables 🪄

Create a .env file in the root directory based on .env.example. Add the following variables:

- LOGIN_EMAIL=<your_test_email>
- LOGIN_PASSWORD=<your_test_password>

## Code Style and Linting 🥇

Code quality is enforced using ESLint and Prettier.

- To run ESLint on the entire project: "npx eslint" in the terminal
- To run Prettier on the entire project: "npx prettier . --write" in the terminal

## Testing 👩🏽‍🔬

- Unit Tests are written with Vitest: "npm run vitest" in the terminal to run test.
- End-to-End Tests are written with Playwright: "npm run playwright" in the terminal to run tests

## Technoloies used ⚡️

- HTML
- CSS
- Vanilla Javascript
- Node.js
- Vite
- ESLint and Prettier
- Husky and Lint-Staged (commit hooks)
- Vitest (unit testing)
- Playwright (end-to-end testing)
