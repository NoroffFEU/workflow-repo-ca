# Workflow repo for the CA
# Development Workflow Repository

## Overview
This repository is designed to facilitate efficient development workflows using modern tools. It includes setups for linting, formatting, unit testing, and end-to-end (E2E) testing with ESLint, Prettier, Vitest, and Playwright, respectively.

## How to Start

### Fork and Clone the Repo
1. Fork this repository to your GitHub account
2. Clone the forked repository to your local machine:
   ```bash
   git clone https://github.com/YOUR-USERNAME/workflow-repo.git
   cd workflow-repo
   ```
3. Create a new branch for your workflow setup:
   ```bash
   git checkout -b workflow
   ```

### Install Dependencies
Run the following command to install all necessary dependencies:
```bash
npm install
```

## Tools and Configuration

### 1. ESLint
ESLint identifies problematic patterns in JavaScript code and enforces coding standards.

#### Install ESLint
```bash
npm init @eslint/config@latest
```

#### Basic Setup
Answer the prompts based on your project requirements. For example:
- Syntax checking and finding problems
- JavaScript modules (import/export)
- No specific framework
- Running code in the browser

#### Usage
To lint the entire project:
```bash
npx eslint .
```

To lint a specific file or folder:
```bash
npx eslint path/to/file.js
npx eslint path/to/folder/
```

### 2. Prettier
Prettier is a code formatter to ensure consistent style across the project.

#### Install Prettier
```bash
npm install -D prettier@3
```

#### Basic Setup
Create a `.prettierrc` file in the project root with the following configuration:
```json
{
  "semi": true,
  "singleQuote": false
}
```

#### Usage
Format the entire project:
```bash
npx prettier . --write
```

Format a specific file or folder:
```bash
npx prettier --write path/to/file.js
```

### 3. Vitest
Vitest provides a fast and reliable unit testing environment.

#### Install Vitest
```bash
npm install -D vitest
```

#### Add Testing Script
Add the following to your `package.json` under scripts:
```json
"scripts": {
  "test": "vitest"
}
```

#### Run Tests
Execute the test suite with:
```bash
npm run test
```

### 4. Playwright
Playwright enables automated E2E testing across multiple browsers.

#### Install Playwright
```bash
npm init playwright@latest
```

#### Run Tests
```bash
# Run all tests headlessly
npx playwright test

# Use the interactive test runner UI
npx playwright test --ui

# Debug tests step-by-step
npx playwright test --debug
```

## Environment Variables
The project requires certain environment variables for tests. Create a `.env` file in the root directory and define the following:
- `TEST_USER_EMAIL`: The email of a test user
- `TEST_USER_PASSWORD`: The password for the test user

Example `.env` file:
```env
TEST_USER_EMAIL=
TEST_USER_PASSWORD=
```

## Testing Scenarios

### Unit Tests

#### isActivePath Function
- Validates exact matches between paths and href
- Handles root paths (e.g., `/` or `/index.html`)
- Returns false for mismatched paths

#### getUserName Function
- Retrieves the user's name from local storage
- Returns null if no user exists in storage

### E2E Tests

#### Login
- Verifies successful login with credentials from `.env`
- Ensures error messages appear for invalid credentials

#### Navigation
- Confirms navigation to the home page
- Validates venue list loading and detail page rendering
