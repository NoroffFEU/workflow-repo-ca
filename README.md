# Workflow CA

## Setup
- Install dependencies -> npm install

## Code Qualitiy & Formatting
- ESLint: npm run lint
- Prettier: npm run format

## Testing
### Unit Test (Vitest)
- Vitest: npm run test

### End2End Test (Playwright)
- Run all E2E tests: npm run test:e2e
- Run directly with Playwright: npx playwright test
- Run tests to debug: npx playwright test --headed

## Env Variables:
TEST_USER_EMAIL - Valid user email for E2E test
TEST_USER_PASSWORD - Password for the same user