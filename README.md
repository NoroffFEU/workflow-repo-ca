# Workflow Repository CA

This project demonstrates a complete development workflow setup using modern JavaScript development tools. 

The repository includes code formatting, linting, pre-commit hooks, unit testing, and end-to-end testing.

## Installation 

Clone the repository and install the dependencies:

```bash
npm install
```

## Available Scripts

### Start the local server

```bash
npm run start
```

### Run Tailwind in watch mode

```bash
npm run dev
```

### Run ESLint

```bash
npm run lint
```

### Format files with Prettier

```bash
npm run format
```

### Run all Vitest tests

```bash
npm run test
```

### Run unit tests only

```bash
npm run test:unit
```

### Run Playwright end-to-end tests

```bash
npm run test:e2e
```

## Environment Variables

Create a `.env` file in the root of the project.

Required variables:

```env
E2E_EMAIL=
E2E_PASSWORD=
```

An example file is included as:

```text
.env.example
```

These variables are used by the Playwright login tests.

## Testing

### Unit Testing 

Vitest is used for unit testing.

The following functions are tested: 

- `isActivePath`
- `getUsername`

### End-to-End Testing

Playwright is used for the end-to-end testing.

The following functionality is tested:

- Login with valid credentials
- Login with invalid credentials
- Navigation from the home page to a venue details page

## Code Quality Tools

This project uses:

- ESLint
- Prettier
- Husky
- lint-staged

Pre-commit hooks automatically: 

- Format HTML files
- Format JavaScript files
- Lint JavaScript files

## Technologies Used

- Vanilla JavaScript
- ESLint
- Prettier
- Husky
- lint-staged
- Vitest
- Playwright 
- Tailwind CSS

## Author

Created by Jørn Bærum as part of the Workflow CA assignment at Noroff.