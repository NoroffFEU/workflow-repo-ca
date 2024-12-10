# Workflow Repo

A simple venue booking application for Holidaze. This project includes functionality for login, navigation, and venue details, with testing implemented using Playwright and Vitest.

## Installation

1. Clone the repository

```bash
git clone https://github.com/ihlonne/workflow-repo-ca.git
```

```
cd workflow-repo-ca
```

```
npm install
```

## Run the project

Start the development server

```
npm run start
```

## Testing

This project uses Vitest for unit tests and Playwright for end-to-end tests.

### Run unit tests

```
npm run test
```

### Run end-to-end tests

```
npm run playwright
```

## Environment variables

This project requires the following environment variables. Add these to a `.env` file

- `USERNAME`: the e-mail address for testing logins
- `PASSWORD`: the password for testing logins

**Note:** Do not include actual values in the `.env` file. For security, add `.env` to `.gitignore` and provide an `.env.example` file instead.

## Technologies used

## Technologies Used

- [TailwindCSS](https://tailwindcss.com) for styling.
- [Playwright](https://playwright.dev) for end-to-end testing.
- [Vitest](https://vitest.dev) for unit testing.
- [ESLint](https://eslint.org) and [Prettier](https://prettier.io) for code formatting and linting.
