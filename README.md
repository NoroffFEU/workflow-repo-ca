# Workflow repo for the CA

### Project Overview 
This repository contains a project with modern development tools for ensuring code quality, consistency, and testing. The setup includes ESLint, Prettier, Vitest for unit testing, and Playwright for end-to-end (E2E) testing.

## Getting Started
1. **Fork the Repository**
   - Start by forking this repository to your GitHub account.

2. **Clone the Fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/workflow-repo.git
   cd workflow-repo

3. **Create a New Branch**
   ```bash
   git checkout -b workflow

4. Install Dependencies
   - Install all required dependencies for the project:
   ```bash
    npm install

## Development Tools
### ESLint
- ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- ESLint helps maintain code quality and consistency.

**Installing:**
```bash
npm init @eslint/config@latest  
```
**Setup:** 
```bash
✔ How would you like to use ESLint? · "To check syntax and find problems"
✔ What type of modules does your project use? · "JavaScript modules (import/export)"
✔ Which framework does your project use? · "None of these"
✔ Does your project use TypeScript? · "No"
✔ Where does your code run? · "Browser"
```

**Running:**  
 Entire project:
 ```bash
 npx eslint
 ````
A specific file:
 ```bash
 npx eslint myFolder/myFile.js
 ````

A specific directory:
 ```bash
 npx eslint myFolder/**
 ````

 ### Prettier
 - Prettier is an opinionated code formatter that ensures consistent code style.
 - Prettier helps maintain a consistent code style across the project.

 **Installing:**
 ```bash
 npm install -D prettier@3
 ```

 **Setup:**  
 Create a file named .prettierrc in the root of your project and add the following:
 ```bash
 {
  "semi": true,
  "singleQuote": false
}
```
 **Running:**  
 Entire project:
 ```bash
 npx prettier . --write
 ```
 A specific file:
 ```bash
 npx prettier --write myFolder/myFile.js
 ```
 A specific directory:
```bash
npx prettier --write myFolder/
```

### Task Automation with Pre-Commit Hooks
- Pre-commit hooks are scripts that run before you commit your changes.
- Pre-commit hooks ensure that your code meets certain standards before it's committed.

**Setting up:**
```bash
npx mrm lint-staged
```

**Using ESLint and Prettier with Pre-commit Hooks**  
- Add the following to your package.json:
```bash
{
  "lint-staged": {
    "*.js": [
      "prettier --write",
      "eslint --fix"
    ],
    "*.html": [
      "prettier --write"
    ]
  }
  ````

## Vitest
1. Start a new npm project if you don’t have a package.json file:
  ```bash
  npm init -y
  ```
2. Install vitest:
  ```bash
  npm install -D vitest
  ```
3. Add a test script to your package.json:
  ```bash
  "scripts": {
  "test": "vitest"
}
  ```
4. To run all unit tests:
  ```bash
  npm run test
  ```

## Playwright
**Setting up:**
```bash
npm init playwright@latest
```
**Running:**
```bash
npx playwright test
# Runs tests in all browsers in the background (headless mode)

npx playwright test --ui
# Opens Playwright's test interface where you can see tests, run them, and see results

npx playwright test --headed
# Shows the actual browser windows while tests run - useful to see what's happening

npx playwright test --debug
# Runs tests step by step - helpful when tests fail and you need to see why
````

## Environment Variables  
- Environment variables are used to store sensitive information, such as API keys or database credentials, outside of your codebase.

The following environment variables are required for the project. Add them to a .env file in the root of the project.

TEST_USER_EMAIL: The email address for a test user.  
TEST_USER_PASSWORD: The password for a test user.  

```bash
TEST_USER_EMAIL=
TEST_USER_PASSWORD=
```

## Testing Features  
### Unit Tests  
**isActivePath Function**  
Returns true when the current path matches the href exactly.  
Returns true for root path / when the path is / or /index.html.  
Returns true when the current path includes the href.  
Returns false when paths don't match.  

**getUserName Function**
Returns the name of the user from local storage (stores a user object first).  
Returns null when no user exists in local storage.  

### End-to-End Tests   
**Login**  
Tests successful login with valid credentials from environment variables.  
Tests that an error message is displayed with invalid credentials.  

**Navigation**  
Navigates to the home page.  
Waits for the venue list to load.  
Clicks the first venue.  
Verifies that the venue details page displays the text "Venue details" in the heading.  


