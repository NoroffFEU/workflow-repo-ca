# Workflow repo for the CA

This repository features a venue browsing app with testing functonality. It's for a school project.

## Development Tools

The project uses several development tools to maintain code quality:

- ESLint: JavaScript linting
- Prettier: Code formatting
- Husky: Git hooks for pre-commit checks
- Vitest: Unit testing
- Playwright: End-to-end testing

## Prerequisites

Make sure you have the following installed before beginning

- Node.js
- npm

## Installation

Clone the repository:

```bash
git clone <https://github.com/JarlErikMathiesen/workflow-repo-ca.git>
cd <work-flow-repo-ca>
```

Make sure you have npm installed:

```bash
npm install
```

## Testing

### Unit testing: Vitest

If you don't have vitest installed, install it:

```bash
npm install -D vitest
```

The project includes the following unit tests for core functionality:

isActivePath function for route matching
getUserName function for user authentication

Run unit tests with:

```bash
npm test
```

### End-to-End testing: Playwright

If you don't have playwright installed, install it:

```bash
npm init playwright@latest
```

End-to-end tests on this project cover key user flows:

- Login functionality
- Navigation and venue browsing

to run the Playwright tests:

```bash
npx playwright test
```

### Environment Variables

Required environment variables:

```env
TEST_USER_EMAIL=your-email@stud.noroff.no
TEST_USER_PASSWORD=your-password
```
