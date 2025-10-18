# Workflow repo for the CA

This project is part of the workflow course assignment at Noroff.

The objective of this assignment is to apply the skills and knowledge gained during the workflow course to enhance the quality of a website. You will do this by configuring tools and defining tests that improve the efficiency of the development process.

## Getting Started

### 1. Installation

Clone the repository

```bash
git clone https://github.com/kevindjenhansen/workflow-repo-ca
```

### 2. Install dependencies

Install required dependencies
This will include:
tailwindcss, vitest, playwright, eslint, prettier, live-server

```bash
npm install
```

### 3. Eniroment variables

This project uses an '.env' file to store sensitive credentials.
Create an .env file in the root directory of the project following the .env.example file.

Required enivormental variables includes:
'TEST_USER_EMAIL='
'TEST_USER_PASSWORD='

### 4. Start the project

Serve the project locally using live-server(This will start a local server at: example(https://localhost:5500)):

```bash
npm run start
```

## Running tests

### Vitest Unit Tests

Run the Vitest unit tests using:

```bash
npm run unit
```

### E2E Playwright tests

Run Playwrights E2E tests using:

```bash
npm run e2e
```
