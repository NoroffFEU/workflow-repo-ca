# Holidaze Workflow Project

A frontend testing workflow setup project for the Holidaze booking app. This project demonstrates a clean developer setup using ESLint, Prettier, Husky, and automated testing with Vitest and Playwright.

## Features

- ESLint for consistent JavaScript code style
- Prettier for automatic formatting
- Husky pre-commit hook with `lint-staged`
- Unit tests with Vitest + jsdom
- E2E tests with Playwright
- Environment variable support for login credentials

## Prerequisites

- Node.js (v20+)
- npm

## Getting Started

### Installation

```bash
npm install
```

### Running the project

Use a static server to serve the project locally, e.g.:

```bash
npm run start
```

> This uses `live-server` to serve `index.html` at `http://127.0.0.1:5500`

### Running tests

#### Unit tests (Vitest)

```bash
npm run test:unit
```

#### E2E tests (Playwright)

```bash
npm run test:e2e
```

Or run all tests:

```bash
npm run test
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_USERNAME=your-test-email@example.com
VITE_PASSWORD=your-test-password
```

> Only use non-sensitive credentials in this file.

## Available Scripts

- `npm run dev` – Compile Tailwind CSS in watch mode
- `npm run start` – Launch static dev server (Live Server)
- `npm run test` – Run both unit and E2E tests
- `npm run test:unit` – Run Vitest unit tests
- `npm run test:e2e` – Run Playwright end-to-end tests
- `npm run lint` – Run ESLint
- `npm run format` – Format code with Prettier

## Technologies

- JavaScript (ESM)
- HTML & CSS
- Tailwind CSS
- ESLint + Prettier
- Husky + lint-staged
- Vitest (unit testing)
- Playwright (E2E testing)

## Author

remylian
