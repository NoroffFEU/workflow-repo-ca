# Workflow repo for the CA
## Setup & Installation

**Clone the repo (or if not already a Git repo, initialize it):**

`git init`

### Install dependencies:
`npm install`
### Prepare Husky git hooks:
`npm run prepare`
**You should see output like:**
```bash
> workflow-repo@1.0.0 prepare
> husky install
husky - Git hooks installed
```
### Pre-commit hook & lint-staged
**Whenever you `commit` your changes, Husky will run the `pre-commit` hook. The hook runs:**
- `lint-staged` ensures that only staged files are checked.
- In your `package.json`, you have this `lint-staged` config:

```bash
"lint-staged": {
  "*.js": [
    "prettier --write",
    "eslint --fix"
  ],
  "*.html": [
    "prettier --write"
  ]
}
```
## Environment Variables
**Create a .env file (ignored by git) but there is .env.example as a template.**
```bash
TEST_USER_EMAIL=test@stud.noroff.no
TEST_USER_PASSWORD=test1234567
```

## Running Tests
### Vitest (unit tests)
**Run all unit tests:**
```bash
npm run test:vitest
```


### Playwright (actual browser tests)
**To run Playwright tests make sure app is serving on localhost because it works in actual `browser`:**

```bash
npx playwright install #if you dont have installed playwright
```

```bash
# todo this there are two option 
# 1- either you can use VSC 'Go Live' (recommended)
# 2- or you run 
npm run start
# which is doing same thing but using 'serve' liberay
```
**Once your app is live i.e `http://localhost:5500/` then run this script in working directory (if server is running in terminal open new terminal to run test for playwright)**
```bash
npm run test:playwright
```