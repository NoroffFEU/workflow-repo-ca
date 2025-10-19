# Workflow Course Asignment

This project was created as part of the Workflow CA.
The purpose of the assigment is do demonstrate the ability to set up and use professional front-end development workflow. The focus is on understanding and applying tools that imrpove code quality and collaboration, such as version control, linting, formatting, automation and testing. The goal is to create a small front-end project that show a clean and maintainable workflow where all tools are correctly configured and functional.
This project includes setup and configuration for ESLint, Prettier, Husky, TailwindCSS, vitest, and Playwrigt.

# Overview

The project is structured to follow best pracices for clean code and modular organization. It demonstrates how to intergrate automated tools in a front.end enviroment to ensure consistent, high-quality code.

The main tools and dependesies used are:
-ESLint- for code linting and error checking

- Prettier- for consistent code formatting
- Husky- to run checks automatically before commints
- TailwindCSS- for styling and responsive layout
- Vitest- for running unit tests
- Playwrigt- for end-to-end (E2E) browser testing
- Live-server- for running the project locally during development and testing

#Installation and Setup
Follow the steps to set up and run the project locally:

1.  Clone the repository:
    ```bash
    git clone https://github.com/helena-cruse/workflow-repo-ca.git
    ```
2.  cd workflow-repo-ca
3.  npm install
4.  npm run start

#Testing
The project indcludes both unit test and end-to-end tests. All test files are located in the tests folder.

#Unit Tests:
The unit tests are written with Vitest and check individual functions in the codebase to confirm that login behaves as expected.
to do the unit tests:
"npm run test:unit"

#End-toEnd (E2E) Test:
E2E tests are written with Playwrite and simulate real user actions in the browser. These test verify that key parts of the applicaton behave correctly fromn a user prespective. The test check that an user can login successfully with a Norfoff email, and an error message appears when entering a wrong password and that the user can navigate from the homepage to the first venue and open the venue details page.
You can run all E2E tests with:
"npm run test:e2e"
after the tests are completed you can open the report with "npx playwright show-report".

Completed Requirements:
-Project configured with ESLint, Prettier, Husky, and lint-staged
-TailwindCSS setup and working styles
-Git version control with clear commit history
-Unit tests created and running with Vitest
-E2E tests created and running with Playwright (all tests passing)
-Local development server setup with live-server
-Comprehensive and properly formatted README file

Front-End Development - Workflow CA.

PR Link: https://github.com/NoroffFEU/workflow-repo-ca/pull/70
