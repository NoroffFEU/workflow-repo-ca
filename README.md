_Noroff Workflow Course Assignment_

# Unit testing & E2E

---

## Description:

The goal of this project is to test important functions in this API app, by performing unit tests using **Vitest** and E2E tests using **Playwright**.

# Table of Contents

- [Installation](#installation-)

- [Project Scripts](#project-scripts-)

- [Usage](#usage)

- [Contributing](#contributions-guidelines)

- [Ackowledgements](#acknowledgements)

## Prerequisites :

Before you begin, ensure you have the following installed on your system:

- **Node.js**: v20.11.1 or higher

- **npm**: v10.9.0 or higher

- **git**: v2.43.0 or higher

## Installation :

### Cloning the repo:

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

**1. Run the following commands to install them:**

```bash
npm install
```

**2. After installation, ensure all dependencies are installed properly:**

```bash
npm list
```

### Environment variables:

**1. Copy the `.env.example` file and rename it to `.env`:**

```bash
cp .env.example .env
```

**2. OR create your own .env:**

```bash
touch .env
```

**3. Add variables:**

```plaintext

# .env.example

# TEST user
TEST_USER=test_user

# TEST password
TEST_PASSWORD=password

# API Key for external service
API_KEY=your-api-key-here

# Port for the application to run on
PORT=5500

```

**3.Add the env to your file:**

```javascript
require("dotenv").config();

const user = process.env.TEST_USER;
const password = process.env.TEST_PASSWORD;
const apiKey = process.env.API_KEY;
const port = process.env.PORT || 5500;

console.log(user, password, apiKey, port);
```

**Ensure your .env file is included in .gitignore to prevent exposing sensitive information.**

## Project Scripts :

### Terminal commands:

**1. Run the server:**

```bash
npm run dev
```

**2. Run linting checks:**

```bash
npm run lint
```

**3. Format with prettier**

```bash
npm run format
```

**4. Vitest unit testing:**

```bash
npm run test
```

**5. Playwright testing:**

```bash
npm playwright test
```

**6. Build for production:**

```bash
npm run build
```

## Usage:

### Run project:

**1. Run dev server:**

```bash
npm run dev
```

**2. Build for production:**

```bash
npm run build
```

**3. Preview:**

```bash
npm run preview
```

### Testing:

**1. Unit tests:**

```bash
npm run test
```

**2. End to end tests:**

```bash
npx playwright test
```

To run in browser(s):

```bash
npm playwright test --headed
```

To open playwright UI:

```bash
npm playwright test --ui
```

**3. Test coverage:**

```bash
npm run coverage
```

```bash
npx playwright show-report
```

### Development Workflow:

This project uses **Husky** and **lint-staged** to ensure code quality before commits. These tools automatically run checks and format your code whenever you make a commit.

- _What happens during a commit_:

1. **ESLint** checks your staged files for linting errors.
2. **Prettier** formats your code.
3. If all checks pass, your commit is completed.

- _Configuration_:

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

1. To contribute, **fork** the repository.

2. Create a **new branch.**

```bash
git checkout -b fork/your-fork-name
```

3. **Commit** your changes.

4. Submit a **PR** for review.

### Acknowledgements:

This project is a part of my _Noroff Course Assignment_.
