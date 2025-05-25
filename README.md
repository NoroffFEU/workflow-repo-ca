# Workflow repo for the CA

This project is part of assignment workflows to practice using Git, GitHub, npm, ESLint, Prettier, Vite, and GitHub Actions.

---

## Live Demo

[View Pull Requests on GitHub](SocanIcode:workflow-repo-ca:workflow)

---

## Features

- Uses ESLint and Prettier for clean code
- Uses environment variables with Vite
- Deploys automatically with GitHub Actions

---

## Technologies Used

- HTML, CSS, JavaScript

- Git & GitHub (branches, commits, pull requests)

- ESLint & Prettier

- Node.js & npm

- Vite

- GitHub Actions

- Vitest & Playwright

---

## File Structure

---

```
├── index.html
├── css/
│ └── style.css
├── js/
├── .prettierrc
├── eslint.config.mjs
├── .env
├── .env.example
├── .gitignore
├── vitest.config.js
├── playwright.config.js
├── package.json
├── README.md
├── deploy.yml
└── tests/
```

---

## Setup Instruction

---

### 1. Clone the Respository

First, fork this Repository:

```bash
git clone https://github.com/NoroffFEU/workflow-repo.git
cd workflow-repo
```

### 2 Install Dependency

```bash
   npm install
```

### 3 Run the Project

- If using plain HTML/js
  -- Open index.html directly in browser

- If using vite

```bash
  npm run dev
```

### 4. Linting and Formatting

Run Eslint

```bash
npm install --save-dev eslint prettier
```

Format using Prettier

```bash
   npm run format
```

### 5. Install Vitest + Setup

```
npm install --save-dev vitest
npm run test

```

### 6. Install playwright + Setup

```
npm init playwright@latest

```

---

## Task Checklist

- [x] Eslint is installed and configured to handle test globals

- [x] Prettier is installed and configured

- [x] Pre-commit hooks have been set up to handle linting and formatting

- [x] Vitest has been installed and configured

- [x] The relevant unit tests have been written and pass

- [x] Playwright has been installed and configured

- [x] The relevant e2e tests have been written and pass

- [x] The README has been updated with the relevant scripts and environment variable examples

- [x] .env is in .gitignore

- [x] There is a .env.example file in the branch

---

## Author

SocanIcode
https://github.com/SocanIcode
