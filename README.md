# Workflow Repository – Configuration and Testing Setup

## 📘 Overview
This project demonstrates a complete front-end development workflow with automated formatting, linting, unit testing, and end-to-end testing.  
It was built as part of the Workflow CA to apply best practices for code quality, automation, and testing.

---

## ⚙️ Installation
Clone the repository and install dependencies:
```bash
npm install
🧰 Development Tools
The following tools are configured and integrated:

ESLint – Enforces consistent code quality

Prettier – Formats code automatically

Husky – Runs Git hooks before commits

lint-staged – Lints and formats staged files

Vitest – Unit testing framework

Playwright – End-to-end testing framework

Tailwind CSS – Styling and utility classes

All tools work together to ensure clean, tested, and maintainable code.

🧪 Testing
Unit Tests (Vitest)
Run all unit tests:

bash
Kopier kode
npm run test
Run in CI mode (no watch):

bash
Kopier kode
npm run test:ci
Unit Tests Included

isActivePath (4 test cases)

getUserName (2 test cases)

End-to-End Tests (Playwright)
Run the local dev server in one terminal:

bash
Kopier kode
npm run dev
Then, in another terminal:

bash
Kopier kode
npm run test:e2e
Open the Playwright HTML report:

bash
Kopier kode
npm run test:e2e:report
E2E Scenarios Tested

Login

Logs in successfully with valid credentials from environment variables

Displays an error with invalid credentials

Navigation

Loads the home page

Waits for the venue list to appear

Clicks the first venue and verifies “Venue details” appears in the heading

🧩 Environment Variables
Create a .env file from .env.example and fill in your own values:

ini
Kopier kode
BASE_URL=http://localhost:5173
E2E_EMAIL=your-email@example.com
E2E_PASSWORD=your-password
These variables are used by Playwright for login tests and to define the app’s base URL.
.env is included in .gitignore to protect sensitive information.

📜 Scripts Summary
Command	Description
npm run dev	Start Tailwind CSS in watch mode
npm run lint	Run ESLint across the project
npm run format	Run Prettier to format code
npm run format:check	Check formatting without changing files
npm run test	Run all Vitest unit tests
npm run test:ci	Run unit tests in CI mode
npm run test:e2e	Run Playwright end-to-end tests
npm run test:e2e:report	Open the Playwright HTML report

🧾 Workflow Summary
ESLint + Prettier configured for consistent code style

Husky + lint-staged enforce checks before commits

Vitest validates logic through unit tests

Playwright verifies UI flow and functionality

.env and .env.example handle environment variables

All tests pass successfully

✅ Submission
An open pull request has been created from the workflow branch into the default branch.
PR Link: https://github.com/NoroffFEU/workflow-repo-ca/pull/73

Do not merge the PR.
Reviewers can view, test, and verify all functionality directly from the branch.

yaml
Kopier kode

---

✅ Paste that in, save, commit, and push:
```bash
git add README.md
git commit -m "docs: update final README with setup and testing details"
git push

```bash
git add README.md
git commit -m "docs: update README with setup and testing details"
git push
