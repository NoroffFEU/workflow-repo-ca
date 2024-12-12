_Noroff Workflow Course Assignment_

# Unit testing & E2E

---

## Description:

The goal of this project is to test important functions in this API app, by performing unit tests using **Vitest** and E2E tests using **Playwright**.

# Table of Contents

- [Installation](#installation)
- [Project Scripts](#project-scripts)
- [Usage](#usage)
- [Contributing](#contributing)
- [Ackowledgements](#ackowledgements)

## Prerequisites :

Before you begin, ensure you have the following installed on your system:

- **Node.js**: v20.11.1 or higher

- **npm**: v10.9.0 or higher

- **git**: v2.43.0 or higher

## Installation :

### Cloning the repo:

Run this command:

```bash
git clone https://github.com/aggicreative555/aggi-workflow-repo-ca.git
```

### Installing dependencies:

This project uses several dependencies for development and testing. Here is the list of all dependencies used:

- **Vite**: Code compiler.
- **Eslint**: Code linting
- **Prettier**: Code formatting
- **Playwright**: E2E testing
- **Tailwindcss**: Styling
- **Vitest**: Unit testing
- **Dotenv**: Managing environment variables

1. Run the following commands to install them:

```bash
npm install
```

2. After installation, ensure all dependencies are installed properly:

```bash
npm list
```

### Environment variables:

1. Create a .env file in the root directory:

```bash
touch .env
```

2. Add the env variables:

```plaintext
# .env file example
TEST_USER = user1
TEST_USER_PASS = password
```

**Ensure your .env file is included in .gitignore to prevent exposing sensitive information.**

## Project Scripts :

### Terminal commands:

1. Run the server:

```bash
npm run dev
```

2. Run linting checks:

```bash
npm run lint
```

3. Format with prettier

```bash
npm run format
```

4. Vitest unit testing:

```bash
npm run test
```

5. Playwright testing:

```bash
npm playwright test
```

6. Build for production:

```bash
npm run build
```

## Usage:

### Run project:

1. Run dev server:

```bash
npm run dev
```

2. Build for production:

```bash
npm run build
```

3. Preview:

```bash
npm run preview
```

### Testing:

1. Unit tests:

```bash
npm run test
```

2. End to end tests:

```bash
npx playwright test
```

**To run in browser(s):**

```bash
npm playwright test --headed
```

**To open playwright UI:**

```bash
npm playwright test --ui
```

3. Test coverage:

```bash
npm run coverage
```

```bash
npx playwright show-report
```

### Development Workflow:

This project uses **Husky** and **lint-staged** to ensure code quality before commits. These tools automatically run checks and format your code whenever you make a commit.

- What happens during a commit:

  1. **ESLint** checks your staged files for linting errors.
  2. **Prettier** formats your code.
  3. If all checks pass, your commit is completed.

- Configuration:
  The `lint-staged` configuration in `package.json` ensures that only staged files are checked:

```json
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ]
}
```

## Contributions Guidelines:

1. To contribute, fork the repository.

2. Create a new branch.

```bash
git checkout -b fork/your-fork-name
```

3. Commit your changes.

4. Submit a PR for review.

### Acknowledgements:

This project is a part of my _Noroff Course Assignment_.
