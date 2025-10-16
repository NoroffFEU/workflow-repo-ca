# Workflow - Course Assignment

> **Course:** FED2-24 Workflow  
> **Students:** Sergiu Sarbu ([@sergiu-sa](https://github.com/sergiu-sa)) & Muhammad Khan ([@Hammadniazi](https://github.com/Hammadniazi))  
> **Repository:** [workflow-repo-ca](https://github.com/Hammadniazi/workflow-repo-ca)

This project demonstrates modern JavaScript development workflow practices including automated testing, code quality tools, and continuous integration.

---

## Table of Contents

- [Workflow - Course Assignment](#workflow---course-assignment)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
    - [Required Variables](#required-variables)
    - [Local Setup](#local-setup)
    - [GitHub Secrets (for CI)](#github-secrets-for-ci)
  - [Available Scripts](#available-scripts)
    - [Development](#development)
    - [Testing Scripts](#testing-scripts)
  - [Testing](#testing)
    - [Unit Tests](#unit-tests)
      - [`isActivePath` Function](#isactivepath-function)
      - [`getUserName` Function](#getusername-function)
      - [Running Unit Tests](#running-unit-tests)
    - [End-to-End (E2E) Tests](#end-to-end-e2e-tests)
      - [Login Tests](#login-tests)
      - [Navigation Tests](#navigation-tests)
    - [Running E2E Tests](#running-e2e-tests)
  - [Technologies Used](#technologies-used)
    - [Core](#core)
    - [Build \& Development Tools](#build--development-tools)
    - [Testing Frameworks](#testing-frameworks)
    - [Code Quality Tools](#code-quality-tools)
    - [API](#api)
  - [Project Structure](#project-structure)
  - [Contributors](#contributors)
  - [License](#license)

---

## Installation

```bash
npm install
```

This will install all dependencies including:

- Testing frameworks (Vitest, Playwright)
- Code quality tools (ESLint, Prettier, Husky)
- Build tools (Tailwind CSS)

---

## Environment Variables

This project uses environment variables for sensitive data like test credentials.

### Required Variables

- `TEST_EMAIL` - Email for E2E test login
- `TEST_PASSWORD` - Password for E2E test login

### Local Setup

1. **Copy the example file:**

   ```bash
   cp .env.example .env
   ```

2. **Fill in your credentials in `.env`:**

   ```bash
   TEST_EMAIL=your-email@stud.noroff.no
   TEST_PASSWORD=your-password
   ```

3. **Important:** Never commit your `.env` file! It's already in `.gitignore`.

### GitHub Secrets (for CI)

For GitHub Actions to run tests, the repository owner must add these secrets:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add:
   - Name: `TEST_EMAIL` | Value: Your test email
   - Name: `TEST_PASSWORD` | Value: Your test password

These secrets allow automated tests to run on every pull request.

---

## Available Scripts

### Development

```bash
npm run dev                    # Start Tailwind CSS watch mode
```

Watches for changes in `css/input.css` and recompiles to `css/style.css`.

### Testing Scripts

```bash
# Unit tests (Vitest)
npm test                       # Run unit tests in watch mode
npm run test:run              # Run unit tests once (CI mode)

# E2E tests (Playwright)
npm run test:e2e              # Run all e2e tests (all browsers)
npm run test:e2e:ui           # Run e2e tests in UI mode (interactive)
npm run test:e2e:headed       # Run e2e tests in headed mode (see browser)
npm run test:e2e:report       # Show e2e test report

# Alternative commands (same as above)
npm run unit                   # Same as npm test
npm run e2e                    # Same as npm run test:e2e
```

---

## Testing

This project uses **Vitest** for unit testing and **Playwright** for end-to-end (e2e) testing.

### Unit Tests

Unit tests verify that individual functions work correctly in isolation.

**Location:** `js/utils/`

#### `isActivePath` Function

Tests navigation link highlighting logic to determine which menu item should be active.

**Test file:** `js/utils/isActivePath.test.js`

**What it tests:**

- ✅ Returns `true` when current path matches href exactly
- ✅ Returns `true` for root path ("/") when path is "/" or "/index.html"
- ✅ Returns `true` when current path includes the href (nested paths)
- ✅ Returns `false` when paths don't match

**Example:**

```javascript
isActivePath("/venue/123", "/venue"); // returns true
isActivePath("/login", "/register"); // returns false
```

#### `getUserName` Function

Retrieves the logged-in user's name from localStorage after authentication.

**Test file:** `js/utils/getUserName.test.js`

**What it tests:**

- ✅ Returns the user's name when user exists in storage
- ✅ Returns `null` when no user exists in storage
- ✅ Returns `null` when stored data is invalid JSON (error handling)
- ✅ Returns `null` when user object has no name property
- ✅ Returns `null` when user name is an empty string

**Example:**

```javascript
// After successful login:
getUserName(); // returns "Sergiu"

// When no user is logged in:
getUserName(); // returns null
```

#### Running Unit Tests

**Watch mode (development):**

```bash
npm test
```

**Run once (CI mode):**

```bash
npm run test:run
```

**Expected output:**

```bash
✓ js/utils/isActivePath.test.js (4 tests)
✓ js/utils/getUserName.test.js (5 tests)

Test Files  2 passed (2)
Tests  9 passed (9)
```

---

### End-to-End (E2E) Tests

E2E tests verify that the application works correctly from the user's perspective by simulating real user interactions in a browser.

**Location:** `e2e/`

**Browsers tested:** Chromium, Firefox, WebKit (Safari)

#### Login Tests

Tests user authentication functionality with the Noroff API.

**Test file:** `e2e/login.spec.js`

**What it tests:**

1. ✅ **Successful login:** User can log in with valid credentials from environment variables
   - Fills in email and password
   - Clicks login button
   - Verifies redirect to home page
   - Verifies logout button is visible

2. ✅ **Failed login:** User sees an error message with invalid credentials
   - Attempts login with wrong credentials
   - Verifies error message appears
   - Verifies user stays on login page

#### Navigation Tests

Tests venue browsing and navigation functionality.

**Test file:** `e2e/navigation.spec.js`

**What it tests:**

- ✅ Navigate to home page
- ✅ Wait for venue list to load from API
- ✅ Click the first venue card
- ✅ Verify venue details page loads with "Venue details" in the heading

### Running E2E Tests

**Prerequisites:**

1. Install Playwright browsers (first time only):

   ```bash
   npx playwright install
   ```

2. Make sure you have a web server running:
   - **VS Code:** Use Live Server extension
   - **Command line:** `npx serve . -p 5500`

**Run tests:**

```bash
# Run all tests (all 3 browsers)
npm run test:e2e

# Run tests in UI mode (recommended for development)
npm run test:e2e:ui

# Run tests in headed mode (see the browser)
npm run test:e2e:headed

# Run specific browser only
npm run test:e2e -- --project=chromium
npm run test:e2e -- --project=firefox
npm run test:e2e -- --project=webkit
```

**Expected output:**

```bash
Running 9 tests using 3 workers

✓ [chromium] › login.spec.js:12:3 › User can successfully log in
✓ [chromium] › login.spec.js:43:3 › User sees an error message
✓ [chromium] › navigation.spec.js:4:3 › Navigate to home, wait for venue list
✓ [firefox] › login.spec.js:12:3 › User can successfully log in
✓ [firefox] › login.spec.js:43:3 › User sees an error message
✓ [firefox] › navigation.spec.js:4:3 › Navigate to home, wait for venue list
✓ [webkit] › login.spec.js:12:3 › User can successfully log in
✓ [webkit] › login.spec.js:43:3 › User sees an error message
✓ [webkit] › navigation.spec.js:4:3 › Navigate to home, wait for venue list

  9 passed (7.6s)
```

---

## Technologies Used

### Core

- **HTML5** - Semantic markup
- **CSS3** - Styling with Tailwind CSS utility classes
- **JavaScript (ES6+)** - Modern JavaScript with modules

### Build & Development Tools

- [**Tailwind CSS**](https://tailwindcss.com/) v3.4.12 - Utility-first CSS framework
- [**serve**](https://www.npmjs.com/package/serve) v14.2.4 - Simple HTTP server for CI

### Testing Frameworks

- [**Vitest**](https://vitest.dev/) v3.2.4 - Fast unit testing framework
- [**Playwright**](https://playwright.dev/) v1.56.0 - End-to-end testing across browsers
- [**jsdom**](https://github.com/jsdom/jsdom) v27.0.0 - Browser environment for unit tests
- [**dotenv**](https://github.com/motdotla/dotenv) v17.2.3 - Environment variable management

### Code Quality Tools

- [**ESLint**](https://eslint.org/) v9.37.0 - JavaScript linting
- [**Prettier**](https://prettier.io/) v3.6.2 - Code formatting
- [**Husky**](https://typicode.github.io/husky/) v9.1.7 - Git hooks
- [**lint-staged**](https://github.com/okonet/lint-staged) v16.2.4 - Run linters on staged files

### API

- [**Noroff API v2**](https://docs.noroff.dev/docs/v2) - Backend API for venue bookings

---

## Project Structure

```bash
workflow-repo-ca/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions workflow
├── .husky/
│   └── pre-commit              # Pre-commit hook (runs lint-staged)
├── e2e/                        # E2E tests
│   ├── login.spec.js           # Login functionality tests
│   └── navigation.spec.js      # Navigation tests
├── js/
│   ├── api/                    # API calls
│   │   ├── auth/               # Authentication endpoints
│   │   │   ├── login.js
│   │   │   └── register.js
│   │   └── venues/             # Venue endpoints
│   │       ├── getVenue.js
│   │       └── getVenues.js
│   ├── constants/              # Constants and configuration
│   │   ├── config.js
│   │   └── messages.js
│   ├── listeners/              # Event listeners
│   │   ├── auth/
│   │   └── venues/
│   ├── ui/                     # UI rendering components
│   │   ├── common/
│   │   └── venues/
│   └── utils/                  # Utility functions
│       ├── getUserName.js      # Get logged-in user
│       ├── getUserName.test.js # Unit tests
│       ├── isActivePath.js     # Navigation active state
│       ├── isActivePath.test.js # Unit tests
│       ├── storage.js          # localStorage helpers
│       └── validation.js       # Input validation
├── css/
│   ├── input.css               # Tailwind input file
│   └── style.css               # Compiled CSS output
├── login/
│   └── index.html              # Login page
├── register/
│   └── index.html              # Registration page
├── venue/
│   └── index.html              # Venue detail page
├── .env                        # Environment variables (not in git)
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore rules
├── .prettierrc                 # Prettier configuration
├── eslint.config.mjs           # ESLint configuration
├── favicon.ico                 # Site favicon
├── index.html                  # Homepage (venue list)
├── package.json                # Dependencies and scripts
├── package-lock.json           # Locked dependency versions
├── playwright.config.js        # Playwright configuration
├── tailwind.config.js          # Tailwind configuration
├── vitest.config.js            # Vitest configuration
└── README.md                   # This file
```

---

## Contributors

- **Sergiu Sarbu** - [@sergiu-sa](https://github.com/sergiu-sa)
- **Muhammad Khan** - [@Hammadniazi](https://github.com/Hammadniazi)

---

## License

ISC

---
