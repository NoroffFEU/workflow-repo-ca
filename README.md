# Workflow CA

Fork an existing project repository and configure development tools (ESLint, Prettier, pre-commit hooks) and testing frameworks (Vitest for unit tests, Playwright for end-to-end tests). My work will be submitted as a Pull Request demonstrating my ability to improve code quality and test coverage in a real-world workflow.


## Features

- ESlint for code linting
- Prettier for code formatting and style consistency
- Husky and lint-staged for pre-commit hooks
- Vitest for unit testing
- Playwright for end-to-end testing

## Prerequisites

- Node.js (v20+)
- npm (v8+)

## Setup

Clone the repository and install dependencies:
```bash
npm install
```

## Environment Variables

Create a `.env` file in the root of the project based on `.env.example`:
```
TEST_USER_EMAIL=your-email@stud.noroff.no
TEST_USER_PASSWORD=your-password
```

## Running Tests

Run unit tests (single run):
```bash
npm run unit
```

Run unit tests in watch mode:
```bash
npm run test:unit
```

Run e2e tests:
```bash
npm run test:e2e
```

Run e2e tests with browser visible:
```bash
npm run test:e2e:headed
```

## Available Scripts

- `npm run dev` - Start Tailwind CSS in watch mode
- `npm run start` - Start the live server
- `npm run prepare` - Install Husky hooks
- `npm run unit` - Run unit tests (single run)
- `npm run test:unit` - Run unit tests in watch mode
- `npm run test:e2e` - Run end-to-end tests with Playwright
- `npm run test:e2e:headed` - Run e2e tests with browser visible

## Technologies

- JavaScript
- HTML
- CSS
- ESLint
- Prettier
- Husky
- lint-staged
- Vitest
- Playwright

## Added workaround to avoid problem with v1 API server (modified config.js, displayVenueList.js, getVenue.js, getVenues.js, login.js)

## Author

Marina Kovaleva