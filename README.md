# Workflow CA

## project setup

after cloning the project to your local environment
run `npm install` to install all dependencies

## development

```bash
npm run dev           #-> watch for changes during development
```

## preparing project for production

```bash
npm run build
```

## testing

to run vitest:

```bash
npm run test
npm run test-cover    #-> run with istanbul coverage
```

to test end to end with playwright:

```bash
npm run test:e2e-ui
npm run test:e2e-bugs #-> run playwright in debug mode
```

## linting and formatting

```bash
npm run lint          #-> run eslint
npm run pretty        #-> format with prettier
npm husky             #-> lint staged files before commit
```
