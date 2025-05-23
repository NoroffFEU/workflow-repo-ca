# Workflow CA

> A small vanilla-JS site showcasing unit tests (Vitest) and end-to-end tests (Playwright).

## 📖 Description

This project was built as part of the Noroff FEU Workflow assignment.  
It demonstrates:

- **Pure functions** in `src/js/utils` (e.g. `isActivePath()`, `getUserName()`) with Vitest unit tests  
- **API interactions** with `auth.js` (mocked in tests)  
- **End-to-end tests** (login + navigation) using Playwright against a live-server  

## 🚀 Features

- Unit tests for utility functions  
- Mocked API tests (registration + login)  
- E2E tests for login flow & venue navigation  
- ESLint + Prettier + Husky pre-commit hooks  
- TailwindCSS for styling  
- Live-server for local development  

## 🛠 Tech Stack

- HTML, CSS, [TailwindCSS](https://tailwindcss.com/)  
- JavaScript (ES modules)  
- [Vitest](https://vitest.dev/) for unit testing  
- [Playwright](https://playwright.dev/) for end-to-end testing  
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) + [Husky](https://typicode.github.io/husky/) for linting & pre-commit checks  
- [`live-server`](https://www.npmjs.com/package/live-server) for local hosting  

## 📦 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/<your-username>/workflow-repo-ca.git
cd workflow-repo-ca
npm install

```

## 🗒️ Table of contents
1. [Installation](#📦-installation)  
2. [Development](#⚙️-development)  
3. [Testing](#🧪-testing)  
   - [Unit Tests (Vitest)](#unit-tests-vitest)  
   - [E2E Tests (Playwright)](#e2e-tests-playwright)  
4. [Environment Variables](#🔒-environment-variables)  
5. [Scripts](#🛠-npm-scripts)  
6. [Contributing](#🤝-contributing)

---

## ⚙️ Development

Start Tailwind & live-server in watch mode:

```bash
npm run dev
```
Then open your browser to http://localhost:5500.

## 🧪 Testing

### Unit tests (Vitest)
```bash
npm run test:unit
# or
npx vitest run
```

### End-to-end tests (Playwright)

```bash
npm run test:e2e
# or
npx playwright test
```
### 🔑 Environment Variables
Create a .env file at project root (do not commit), and add:

```bash
# Playwright login credentials
TEST_USER_EMAIL=
TEST_USER_PASSWORD=
```
## 📜 Available Scripts

| Script      | Command             | Description                                             |
| ----------- | ------------------- | ------------------------------------------------------- |
| `dev`       | `npm run dev`       | Build CSS & start live-server on port 5500              |
| `test:unit` | `npm run test:unit` | Run Vitest unit tests                                   |
| `test:e2e`  | `npm run test:e2e`  | Run Playwright end-to-end tests                         |
| `lint`      | `npm run lint`      | Run ESLint                                              |
| `prepare`   | `npm run prepare`   | Install Husky Git hooks (runs automatically on install) |


## 🤝 Contributing

1. Fork this repo

2. Clone your fork and checkout a new branch workflow

3. Make your changes and commit to workflow branch

4. Push to your fork and open a Pull Request against main

5. Request a review, address feedback, and do not merge until approved



