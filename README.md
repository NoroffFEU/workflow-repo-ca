# Workflow Repo for the CA

## 🌍 About the Website  

This website is a **venue booking platform** that allows users to discover, book, and manage venues for various events. It provides a seamless user experience with authentication, real-time data fetching, and responsive design.

## 🚀 Project Setup and Instructions

### Prerequisites

Before setting up the project, ensure you have the following software installed:

- [Node.js] - JavaScript runtime.
- [npm] - Node package manager.
- [Git] - Version control system.

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/anneloviseramstad/workflow-repo-ca/tree/workflow
```

### 2. Install Dependencies
Install the required dependencies using npm:
```
npm install
```

### 3. Configure the Environment
Create a `.env` file in the root directory and add the required environment variables. You can use `.env.example` as a reference:  


##### TEST_USER_EMAIL=**your-email@example.com**  
##### TEST_USER_PASSWORD=**yourpassword**  

🔹 **Important**:  
- Replace `your-email@example.com` and `yourpassword` with actual credentials.  
- Ensure that `.env` is included in `.gitignore` to keep sensitive information secure.  
- Never commit your `.env` file to version control.  

Important: Make sure to add .env to .gitignore to keep sensitive data secure.

### 4. Running the Project
```
npm start
```

### 5. Run Unit Tests (Vitest)
To run the unit tests using Vitest, use the following command:
```
npm test
```

### 6. Run End-to-End Tests (Playwright)
To run the Playwright end-to-end tests:
```
npx playwrught test
```

To view the report, run:
```
npx playwright show-report
```

### Playwright Test Cases
#### Login Tests:
- User can successfully log in with valid credentials from environment variables.

- If the login details from the lesson do not work, you can create a new user by running the project and using the registration form.
- User sees an error message with invalid credentials.

Note: Be sure to include .env in the .gitignore file and provide an .env.example for branch reference.

#### Navigation Tests:
- Navigates to the home page.
- Waits for the venue list to load.
- Clicks the first venue.
- Verifies that when the venue details page loads, the words "Venue details" appear in the heading.

### 7. Run Eslint
To lint your code with ESLint, use the following command:
```
npm run lint
```
This will check your code for any linting errors and ensure it follows the predefined style rules.

### 8. Run Prettier
To automatically format your code using Prettier, run:
```
npm run format
```

### 9. Commit Hooks with Husky and Lint-Staged
This project is set up with Husky and Lint-Staged to run linting and formatting checks on staged files before committing. These tools help maintain consistent code quality by automatically running ESLint and Prettier checks when committing changes.
