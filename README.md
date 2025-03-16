# Workflow Course Assignment

This project is part of a workflow course assignment aimed at enhancing the quality of a website by configuring development tools, setting up testing frameworks, and improving the development process.

## Project Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   Install dependencies:
   ```

bash
Copy
npm install
Set up environment variables:

Create a .env file in the root directory.

Add the required environment variables as shown in .env.example.

Ensure .env is included in your .gitignore file.

Example .env file:

plaintext
Copy
VITE_API_URL=your_api_url_here
VITE_TEST_USER_EMAIL=test@example.com
VITE_TEST_USER_PASSWORD=yourpassword
Development Tools
ESLint: For linting JavaScript files.

Prettier: For code formatting.

Commit Hooks: To ensure staged code is checked before being committed.

Running Linting and Formatting
bash
Copy
npm run lint
npm run format
Testing
Unit Testing with Vitest
bash
Copy
npm run test:unit
Test Cases
isActivePath function:

Returns true when the current path matches the href exactly.

Returns true for the root path ("/") when the path is "/" or "/index.html".

Returns true when the current path includes the href.

Returns false when paths don't match.

getUserName function:

Returns the name from the user object in storage.

Returns null when no user exists in storage.

End-to-End Testing with Playwright
bash
Copy
npm run test:e2e
Test Cases
Login:

User can successfully log in with valid credentials from environment variables.

User sees an error message with invalid credentials.

Navigation:

Navigates to the home page.

Waits for the venue list to load.

Clicks the first venue.

Verifies that the venue details page loads with the words “Venue details” in the heading.

Scripts
Install dependencies: npm install

Run unit tests: npm run test:unit

Run e2e tests: npm run test:e2e

Lint code: npm run lint

Format code: npm run format

Contributing
Fork the repository.

Create a new branch (git checkout -b feature-branch).

Commit your changes (git commit -m 'Add some feature').

Push to the branch (git push origin feature-branch).

Open a Pull Request.
