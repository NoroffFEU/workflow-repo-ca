# Workflow Course Assignment

## Project Overview
This project demonstrates the use of workflow tools to improve development efficiency, including linting, formatting, unit testing, and end-to-end testing. The following tools have been set up:

- **ESLint**: For JavaScript code linting.
- **Prettier**: For consistent code formatting.
- **Husky & lint-staged**: Pre-commit hooks for linting and formatting staged files.
- **Vitest**: For unit testing.
- **Playwright**: For end-to-end testing.

---

## Setup Instructions

### 1. Install Dependencies
Clone the repository and run the following command to install all necessary dependencies:

```bash
npm install
```

### 2. Run the Project
Start the development server using:

```bash
npm start
```
This will launch the project on `http://127.0.0.1:5500/`.

### 3. Lint and Format Code
Run the following commands to check and format your code:

- **Lint JavaScript files**:
  ```bash
  npm run lint
  ```
- **Format all files**:
  ```bash
  npm run format
  ```

### 4. Run Tests

#### Unit Tests
To run unit tests using **Vitest**:

```bash
npm run test:unit
```

#### End-to-End Tests
To run end-to-end tests using **Playwright**:

```bash
npm run test:e2e
```

---

## Pre-commit Hooks
Pre-commit hooks have been set up using Husky and lint-staged. Before committing, the following tasks are automatically performed:

1. Linting JavaScript files
2. Formatting HTML, CSS, JavaScript, and Markdown files

No action is needed; the hooks will run automatically on staged files when committing.

---

## Environment Variables
Create a `.env` file in the root directory based on the `.env.example` file:
VITE_LOGIN_USERNAME | Your valid login email
VITE_LOGIN_PASSWORD | Your valid login password

## Testing Scenarios
### 1. **Unit Tests**
- **isActivePath function**
  - Returns `true` when current path matches `href` exactly.
  - Returns `true` for root path `/` or `/index.html`.
  - Returns `true` when current path includes the `href`.
  - Returns `false` when paths don't match.
- **getUserName function**
  - Returns the `name` from the user object in storage.
  - Returns `null` when no user exists in storage.

### 2. **End-to-End Tests**
- **Login**
  - User can successfully log in with valid credentials.
  - User sees an error message when entering invalid credentials.
- **Navigation**
  - Navigates to the home page.
  - Waits for the venue list to load.
  - Clicks on the first venue and verifies that the heading contains "Venue details".

---

## Additional Notes
- Ensure `.env` is **not committed** by adding it to `.gitignore`.

---

## Scripts Summary
- `npm start` - start the development server.
- `npm run lint` - run ESLint on JS files.
- `npm run format` - run prettier to format all files.
- `npm run test:unit` - run vitest unit tests.
- `npm run test:e2d` - run playwright end to end tests. 

---

## Submission
This project is submitted as part of the Workflow Course Assignment. All changes are available on the **workflow** branch, with a pull request open for review.

---

### License
This submission is under the license of Noroff Educational School. 
---

Thanks for reviewing! 
