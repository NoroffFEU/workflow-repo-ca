# Workflow Assignment

This project includes linting, formatting, testing, and automated Git hooks.  
It is based on a simple web application with HTML, CSS, and JavaScript files.

## Features

- ESLint for code quality and consistency
- Prettier for automatic code formatting
- Husky + lint-staged for pre-commit linting and formatting
- Vitest for unit testing (`getUsername` and `isActivePath`)
- Playwright for end-to-end (E2E) browser testing
- Environment variables managed with `.env`

## Prerequisites

- Node.js (v20+ recommended)
- npm

## Getting Started

### Clone the repository

```bash
git clone https://github.com/Lilly-yy/workflow-repo-ca.git
cd workflow-repo-ca

### Installation

```bash
npm install
```

### Running the project

You can preview the project using **VS Code’s Live Preview** or another simple static server.

Example using Live Preview:
```
http://127.0.0.1:3000
```

### Running tests

#### Unit tests (Vitest)
```bash
npm run test
```

#### End-to-end tests (Playwright)
Make sure your local server (e.g. Live Preview) is running first, then:
```bash
npm run test:e2e
```

## Environment Variables

Create a `.env` file in the project root (not committed to Git):

```bash
# Adjust BASE_URL if you use a different dev server
BASE_URL=http://localhost:3000
VALID_EMAIL=test@noroff.no
VALID_PASSWORD=Test1234
```

> 💡 **Tip:**  
> - If you use VS Code Live Preview, your URL might be `http://127.0.0.1:3000`.  
> - If you use Live Server, it could be `http://localhost:5500`.  
> - Adjust `BASE_URL` to match your local environment before running Playwright tests.

## Available Scripts

- `npm run dev` – Compile Tailwind CSS and watch for changes
- `npm run lint` – Run ESLint
- `npm run format` – Format code using Prettier
- `npm run test` – Run unit tests (Vitest)
- `npm run test:e2e` – Run Playwright end-to-end tests
- `npm run prepare` – Initialize Husky (auto-run on install)

## Technologies

- JavaScript
- HTML
- CSS (Tailwind)
- ESLint
- Prettier
- Husky + lint-staged
- Vitest
- Playwright
- Dotenv

## Author

[Lilly-yy](https://github.com/Lilly-yy)
