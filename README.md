# Workflow Repository
Short description of a fictional venue booking website enhanced with quality assurance tools and testing.

## Features
- User authentication (login/register)
- Browse available venues
- View detailed venue information
- Active page navigation highlighting

## Prerequisites
- Node.js (v16+)
- npm

## Getting Started
### Installation
Clone the whole repo
```bash
git clone https://github.com/MiaTexnes/workflow-repo-ca.git
cd workflow-repo-ca
npm install
```
Just the workflow branch
```bash
git clone -b workflow https://github.com/MiaTexnes/workflow-repo-ca.git
cd workflow-repo-ca
npm install
```

### Running the project
```bash
npm run dev
```

### Running tests
The playwright tests are excluded from the "npm run test" and will need to be run by themself.
```bash
npm run test
```

### Running Playwright E2E tests
```bash
npx playwright test
npx playwright test --ui
npx playwright test --headed
npx playwright test tests/venue-navigation.spec.js
```

## Environment Variables
Create a `.env` file in the root directory:
```bash
USER_EMAIL=valid-email-for-tests
USER_PASSWORD=valid-password-for-tests
```

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run Vitest unit tests
- `npm run lint` - Run ESLint
- `npm run format` - Run Prettier

## Technologies
- JavaScript
- HTML
- CSS
- ESLint
- Prettier
- Vitest
- Playwright

## Author
Mia Texnes