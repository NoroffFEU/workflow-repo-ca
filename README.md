# Workflow repo for the CA

This forked repository is equipped with modern tools for ensuring code quality, consistency, and reliable testing, including ESLint for linting, Prettier for formatting, Vitest for unit tests, and Playwright for E2E tests.

## 1. Cloning and installation of dependencies
```bash
https://github.com/senbet22/workflow-repo-ca-senbet.git
```
## 2. Install NPM packages
To install all required project dependencies, run the following command:
```bash
npm install
```
<details>
  <summary>Install Dependencies</summary>
  
  ```bash
Linting & Formatting
- ESLint
- Prettier
- Globals

Development Tools
- TailwindCSS
- Live Server
- dotenv
- Husky (for Git hooks)

Testing
- Playwright
- Vitest
- JSDOM (for mock-up localStorage testing)

TypeScript Support
- Type definitions (`@types/node`)
```
</details>

### Vitest
Test files for Vitest can be found in /js/utils/_test_.
- To run tests for vitest use followind command:
```bash
npx vitest test
or
npm run test
```
- To run a single file test, add file name at the end:
```bash
npx vitest test example.vitest.js
```

### Playwright
Playwright test folder can be found at the root in the **tests**
 folder.
- To run tests for Playwright, use the following command:
```bash
npx playwright test
```
- To run a single file test, add file name at the end:
```bash
npx playwright test example.spec.js
```
### .env content
1. Copy the example below inside .env
  ```bash
  TEST_USER_EMAIL = example@stud.noroff.no
  TEST_USER_PASSWORD = example123
  ```
