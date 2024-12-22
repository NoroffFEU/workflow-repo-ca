# Workflow CA

## project setup

after cloning the project to your local environment
run `npm install` install all dependencies

## development

npm run dev -> to watch for changes during development

## preparing project for production

npm run build

## testing

to run vitest:
npm run test
npm run test-cover -> run with istanbul coverage

to test end to end with playwright:
npm run test:e2e-ui
npm run test:e2e-bugs -> run playwright in debug mode

## linting and formatting

npm run lint -> run eslint
npm run pretty -> format with prettier
npm husky -> lint staged files before commit
