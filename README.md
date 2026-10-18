# Workflow repo for the CA


This is a venue website project for my Workflow course assignment. I have added ESLint, Prettier, Husky, Vitest and playwright as was required of me for the assignment. 


## Features

- View venues
- View venue details
- Log in
- Check code with ESLint
- organize code with Prettier
- Testing of the project with vitest and playwright


## Prerequisites

- git
- Node.js
- npm


## Getting Started

### Installation

Installing the dependencies:

```bash
npm install
```


### Running the project

Run the development command:

```bash
npm run dev
```

Start the local server:

```bash
npm run start
```


### Running tests

Run the unit tests:

```bash
npm run test
```

Run the playwright tests:

```bash
npm run test:e2e
```


### Linting

```bash
npm run lint
```


## Environment Variables

Create an `.env` file and add your test account credentials.

The required variables are:

- `E2E_LOGIN_EMAIL`
- `E2E_LOGIN_PASSWORD`

You can use `.env.example` as a template, put your actual credentials in the `.env` file, don't share the `.env` file or 


## Scripts

- `npm run dev` - Run Tailwind CSS in watch mode
- `npm run start` - start the local server
- `npm run test` - Run Vitest
- `npm run test:e2e` - Run playwright tests
- `npm run lint` - Run EsLint


## Technologies

- JavaScript
- HTML
- CSS
- Tailwind
- ESLint
- Prettier
- Vitest
- Playwright


## Author

celds/Celine
