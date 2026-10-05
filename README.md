# Workflow repo for the CA

This is the assessment setup for the Workflow module. It includes testing tools, formatting tools, and login functionality that can be tested locally.

## Project Setup

To get started, open the VsCode terminal in your root folder:

- npm install

Then run the project using:

- npm run dev

### Note: The project is built to work fully on Live Server, so running it that way is totally fine for testing purposes.

## Scripts

Here’s what’s available:

npm run dev – run the project locally

npm run test – runs unit tests with Vitest

npm run e2e – runs Playwright end-to-end tests

npm run lint – lints your code with ESLint

npm run prepare – sets up Husky git hooks

## Testing Tools

- Vitest for unit testing

- Playwright for end-to-end testing

- ESLint for code linting

- Prettier for formatting

- Husky with lint-staged to check code before commits

## Environment Variables

The following variables are required in a .env file (not included in the repo):

VITE_EMAIL=

VITE_PASSWORD=

Don’t forget to add a .env.example file with just the variable names like above!

## Test Login Instructions

If you want to test login and registration:

Open the project using Live Server.

There you can either:

Use a test login:

Email: janinatest123@stud.noroff.no

Password: Bestfriendz12.02

Or register a new user from the register page.

Once logged in, you’ll land on the main page and can navigate freely.
