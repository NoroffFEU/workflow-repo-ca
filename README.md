# Workflow Course Assignment

This project demonstrates how to improve a development workflow by configuring development tools and automated testing.

The repository includes linting, formatting, pre-commit hooks, unit testing with Vitest, and end-to-end testing with Playwright.

---

## Features

* ESLint configuration for JavaScript linting
* Prettier configuration for consistent code formatting
* Husky + lint-staged pre-commit hooks
* Unit testing using **Vitest**
* End-to-end testing using **Playwright**
* Automated formatting and linting before commits

---

## Prerequisites

Make sure you have the following installed:

* Node.js (v20 or newer)
* npm

---

## Installation

Install dependencies:

```bash
npm install
```

## Running the Project

Start the local server:

```bash
npm run start
```

The project will run locally on:

```
http://localhost:3000
```

### Run unit tests (Vitest)

```bash
npm run test
```

### Run end-to-end tests (Playwright)

```bash
npm run test:e2e
```

Make sure the development server is running before executing the e2e tests.

---

## Environment Variables

Create a `.env` file in the root directory based on `.env.example`.

Required variables:

```
E2E_EMAIL=
E2E_PASSWORD=
BASE_URL=http://localhost:3000
```

---

## Available Scripts

 Script              Description                     
   
 `npm run start`     Start the local server          
 `npm run dev`       Run Tailwind in watch mode      
 `npm run test`      Run Vitest unit tests           
 `npm run test:e2e`  Run Playwright end-to-end tests 

---

## Technologies

* Vanilla JavaScript
* HTML
* CSS
* ESLint
* Prettier
* Husky
* lint-staged
* Vitest
* Playwright

---

## Author

Lloyd Bjelland