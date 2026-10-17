# Workflow repo for the CA
# Workflow CA

This is my Workflow Course Assignment at Noroff. The goal of this assignment is to set up tools for code formatting, linting and testing in an existing JavaScript project.

## Getting Started

First, install the dependencies:

npm install


To run the website locally:

npm run serve

The website will be available at `http://localhost:3000`.

To run Tailwind CSS in watch mode:

npm run dev

## Testing

I have used two different testing tools in this project.

Vitest is used to test JavaScript functions, such as `isActivePath()` and `getUsername()`.

Run the unit tests with:

npm test

Playwright is used to test the website in a browser. The tests check the login functionality and navigation to a venue details page.

First, install the browser:

npx playwright install chromium

Then run the tests:

npx playwright test

## Environment Variables

The Playwright login test needs a valid Noroff API user.

Create a `.env` file in the project folder and add:

TEST_USER_EMAIL=
TEST_USER_PASSWORD=

Fill in your own test credentials. You can use `.env.example` as a template.

The `.env` file is included in `.gitignore` to keep login information private.

## Tools Used

- **ESLint:** Checks JavaScript code for potential errors.
- **Prettier:** Formats the code.
- **Husky:** Runs checks before committing.
- **lint-staged:** Formats HTML files and formats and lints JavaScript files that are staged for a commit.
- **Vitest:** Tests JavaScript functions.
- **Playwright:** Tests the website in a browser.

## npm Scripts
 Script Description 

`npm run dev` Runs Tailwind CSS in watch mode 
`npm run serve`  Starts the local server 
`npm test`  Runs Vitest tests 
`npm run prepare`  Sets up Husky hooks 

## GitHub

I have worked on the `workflow` branch. The changes will be submitted through a pull request for review.