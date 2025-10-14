
# Workflow - Repo for CA

## Unit Testing

This project uses **Vitest** for unit testing and **Playwright** for end-to-end (e2e) testing.

### Unit Tests

Unit tests verify that individual functions work correctly in isolation.

**Location:** `js/utils/`

#### `isActivePath` Function

Tests navigation link highlighting logic.

**Test file:** `js/utils/isActivePath.test.js`

**What it tests:**

- ✅ Returns `true` when current path matches href exactly
- ✅ Returns `true` for root path ("/") when path is "/" or "/index.html"
- ✅ Returns `true` when current path includes the href (nested paths)
- ✅ Returns `false` when paths don't match

**Example:**

```javascript
isActivePath("/venue/123", "/venue") // returns true
isActivePath("/login", "/register")   // returns false
```

#### `getUserName` Function

Retrieves the logged-in user's name from localStorage.

**Test file:** `js/utils/getUserName.test.js`

**What it tests:**

- ✅ Returns the user's name when user exists in storage
- ✅ Returns `null` when no user exists in storage
- ✅ Returns `null` when stored data is invalid JSON (error handling)
- ✅ Returns `null` when user object has no name property
- ✅ Returns `null` when user name is an empty string

**Example:**

```javascript
// After login, user data is stored in localStorage
getUserName() // returns "Sergiu"

// When no user is logged in
getUserName() // returns null
```

### Running Tests

**Run all tests in watch mode:**

```bash
npm run test
```

**Run tests once (CI mode):**

```bash
npm run test:run
```

**Expected output when all tests pass:**

```
✓ js/utils/isActivePath.test.js (4 tests)
✓ js/utils/getUserName.test.js (5 tests)

Test Files  2 passed (2)
Tests  9 passed (9)
```

## Technologies Used

### Core

- HTML5
- CSS3 (Tailwind CSS)
- JavaScript (ES6+ Modules)

### Build Tools

- [Vite](https://vitejs.dev/) - Build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

### Testing

- [Vitest](https://vitest.dev/) - Unit testing framework
- [Playwright](https://playwright.dev/) - E2E testing framework
- [jsdom](https://github.com/jsdom/jsdom) - Browser environment for testing

### Code Quality

- [ESLint](https://eslint.org/) - JavaScript linting
- [Prettier](https://prettier.io/) - Code formatting
- [Husky](https://typicode.github.io/husky/) - Git hooks
- [lint-staged](https://github.com/okonet/lint-staged) - Run linters on staged files

### API

- [Noroff API](https://docs.noroff.dev/docs/v2) - Backend API for venue bookings

## Project Structure

```markdown

workflow-repo-ca/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── .husky/
│   └── pre-commit              # Pre-commit hook
├── js/
│   ├── api/                    # API calls
│   ├── constants/              # Constants and configuration
│   │   └── config.js
│   ├── listeners/              # Event listeners
│   │   ├── auth/
│   │   └── venues/
│   ├── ui/                     # UI components
│   │   └── common/
│   └── utils/                  # Utility functions
│       ├── getUserName.js
│       ├── getUserName.test.js
│       ├── isActivePath.js
│       ├── isActivePath.test.js
│       ├── storage.js
│       └── validation.js
├── css/
│   ├── input.css               # Tailwind input
│   └── style.css               # Compiled CSS
├── login/
│   └── index.html              # Login page
├── register/
│   └── index.html              # Register page
├── venue/
│   └── index.html              # Venue detail page
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore rules
├── .prettierrc                 # Prettier configuration
├── eslint.config.mjs           # ESLint configuration
├── index.html                  # Homepage
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind configuration
├── vitest.config.js            # Vitest configuration
└── README.md                   # This file
```
