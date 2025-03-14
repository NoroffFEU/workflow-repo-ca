# Workflow repo for the CA

This is a PR for my Workflow course assignment.

Included functionality:

- ESLint, Prettier and Husky installation and configuration
- Vitest and Playwright installation and configuration
- Relevant unit tests created
- Relevant e2e tests created
- README updated
- .gitignore configured correctly

## The Project

### ESLint and Prettier Setup

This project uses ESLint and Prettier for code quality. The linter is configured to handle global variables used in test files.

To run ESLint and fix issues automatically use:
npm run lint --fix

### Testing

This project includes unit tests using Vitest and end-to-end (e2e) tests using Playwright.

Run all unit tests (VITEST) with:
npm run test

Tested Functions
isActivePath function:
✅ Returns true when the current path matches href exactly.
✅ Returns true for the root path ("/") when the path is "/" or "/index.html".
✅ Returns true when the current path includes the href.
❌ Returns false when paths don’t match.
getUserName function:
✅ Returns the stored username if a user exists in local storage.
❌ Returns null if no user exists in storage.

### Running End-to-End Tests (Playwright)

Ensure Playwright is installed:
npx playwright install

Run all e2e tests:
npx playwright test

Tested Cases:
Login Test
✅ User can log in successfully with valid credentials from .env file.
❌ Displays an error message for invalid credentials.
Navigation Test
✅ Navigates to the home page.
✅ Waits for the venue list to load.
✅ Clicks the first venue.
✅ Verifies that the venue details page contains the heading "Venue details".

### Environment Variables

Create a .env file in the root directory and define the following variables:

TEST_USER_EMAIL=workflowuser@stud.noroff.no
TEST_USER_PASSWORD=workflowpass

Make sure .env is not committed to Git by adding it to .gitignore.

An .env.example file is included for reference.

### Commit Hooks

This project uses Husky to set up pre-commit hooks that ensure linting and formatting are run before committing.
