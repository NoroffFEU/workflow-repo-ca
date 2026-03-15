# Workflow CA Project

This repository was created as part of the Workflow course assignment.  
The project demonstrates development workflow practices including linting, formatting, unit testing, and end-to-end testing.

---

## Setup Instructions

Clone the repository and install dependencies:

```bash
npm install
```

---

## Running the Project

Start the local development server:

```bash
npm run start
```

The project will run at:

```
http://127.0.0.1:5500
```

---

## NPM Scripts

The project includes the following scripts:

### Start the local server

```bash
npm run start
```

Runs a local development server using **live-server** on port `5500`.

### Run unit tests

```bash
npm test
```

Runs **Vitest** unit tests.

### Run end-to-end tests

```bash
npm run test:e2e
```

Runs **Playwright** end-to-end tests.

### Tailwind development mode

```bash
npm run dev
```

Compiles Tailwind CSS and watches for file changes.

---

## Environment Variables

This project uses environment variables for authentication testing.

Create a `.env` file in the root of the project and include the following variables:

```
TEST_USER_EMAIL=
TEST_USER_PASSWORD=
```

Example:

```
TEST_USER_EMAIL=testuser@stud.noroff.no
TEST_USER_PASSWORD=password123
```

The `.env` file is **ignored by Git** and should not be committed.

A `.env.example` file is included in the repository as a template.

---

## Testing

### Unit Testing (Vitest)

Vitest is used to test utility functions.

Functions tested:

- `isActivePath`
- `getUsername`

These tests ensure the functions return correct values for both valid and invalid inputs.

### End-to-End Testing (Playwright)

Playwright is used to simulate real user behaviour and verify application functionality.

The following flows are tested:

- user can log in with valid credentials
- user sees an error message with invalid credentials
- user can navigate from the home page to a venue details page

---

## Notes

- `.env` is excluded from the repository using `.gitignore`
- Playwright runs tests against the local development server
- Husky and lint-staged run formatting and linting before commits
