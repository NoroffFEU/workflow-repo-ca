# Workflow repo for the CA

#OVERVIEW

This project is a frontend client for the Holidaze booking API.
The application allows users to:

browse venue listings

view venue details

register and log in

navigate through pages dynamically

The project follows all workflow requirements for the Course Assignment (CA), including:

ESLint

Prettier

Husky + lint-staged

Vitest (unit tests)

Playwright (end-to-end tests)

Environment handling (.env / .env.example)

Organized test directory structure

#FOLDER STRUCTURE
workflow-repo-ca/
│
├── css/
├── js/
│ ├── utils/
│ │ ├── storage.js
│ │ └── userInterface.js
│ └── main.js
│
├── tests/
│ ├── unit/
│ │ ├── isActivePath.test.js
│ │ └── getUserName.test.js
│ └── e2e/
│ ├── login.spec.js
│ └── navigation.spec.js
│
├── index.html
├── package.json
├── playwright.config.mjs
├── vitest.config.mjs
├── .prettierrc
├── .env.example
└── .gitignore

#INSTALLATION
Install dependencies:

npm install

#ENVIRONMENT VARIABLES

Playwright tests read environment variables from .env.

Create your own .env file based on the example:

.env.example
BASE_URL=http://127.0.0.1:5500/workflow-repo-ca
LOGIN_EMAIL=
LOGIN_PASSWORD=

Fill in your actual login email and password.

#CODE QUALITY (ESLint, Prettier, Husky)

The repository is configured so that every commit automatically formats and lints code before being accepted.

lint-staged configuration
"lint-staged": {
"_.js": [
"prettier --write",
"eslint --fix"
],
"_.html": [
"prettier --write"
]
}

This ensures:

all JavaScript files are formatted and linted

all HTML files are formatted

UNIT TESTING (Vitest + JSDOM)

All unit tests live in:

tests/unit/

Configuration example (vitest.config.mjs):

import { defineConfig } from 'vitest/config';

export default defineConfig({
test: {
environment: 'jsdom',
include: ['tests/unit/**/*.test.js'],
},
});

Run unit tests:
npm test

#END TO END TESTING (Playwright)

All E2E tests live in:

tests/e2e/

Playwright configuration (playwright.config.mjs):

import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
testDir: './tests/e2e',
});

Run tests:
npm run test:e2e

With UI mode:
npm run test:e2e:ui

#LOCAL DEVELOPMENT

The project can be viewed locally using Live Server or any static file server.

Example local root:

http://127.0.0.1:5500/workflow-repo-ca/

#FEATURES COVERED BY TESTS
Unit Tests
isActivePath()

returns true when the current path matches exactly

handles “/” and “/index.html”

returns true if the current path contains a given segment

false when paths don't match

getUserName()

returns stored user name from localStorage

returns null when no user exists

E2E Tests
Login tests

user can log in using correct credentials from .env

invalid credentials display an error message

Navigation test

loads home page

waits for venue list

opens first venue

verifies the details page contains “Venue details”

#SCRIPTS
"scripts": {
"test": "vitest",
"test:e2e": "playwright test",
"test:e2e:ui": "playwright test --ui",
"test:e2e:headed": "playwright test --headed",
"test:e2e:debug": "PWDEBUG=1 playwright test"
}

#CA REQUIREMENTS CHECKLIST

ESLint configured

Prettier configured

Husky pre-commit hook

lint-staged for staged formatting/linting

Vitest installed & configured

Unit tests implemented

Playwright installed & configured

E2E tests implemented

.env ignored

.env.example included

Updated README

PR ready for submission

#AUTHOR

Krzysztof Bytniewski
Frontend Developer – Noroff Student
