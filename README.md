# WorkFlow-repo-ca

This is a school project for us to learn how to do unit testing with vtest, eslint, prettier and playwright e2e test in the project. The purpose of this project is we can learn instead of had to testing one funtion of the code at the time we can do multiple of testing at the same time by command terminal for more efficient work.

## Features

- A registration form.
- A login form.
- Feed page with posts.

## Prerequisites

- Node.js (v20+)
- npm
- npx test

## Getting Started

To start using this project, follow these steps:

1. Clone the repository:

```bash
git clone
```

2. Navigate to the project directory:

```bash
cd WorkFlow-repo-ca
```

### Installation

```bash
npm install
```

### Running the project

```bash
npm run dev
```

### Running tests

```bash
npm run test
```

Playwright tests are located in the `tests` directory. You can run them using:

```bash
npx playwright test
npx playwright show-report
```

ESLint and Prettier are set up to run on pre-commit hooks using Husky. You can run them manually with:

```bash
npm run lint
```

```bash
npx prettier
```

## Environment Variables

Create a `.env` file in the root directory:

```bash
API_KEY= your-api-key-here
BASE_URL= https://api.noroff.dev/api/v1/holidaze/
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run lint` - Run ESLint

## Technologies

- JavaScript
- HTML
- CSS
- ESLint
- Prettier
- Vite
- Playwright
- Husky

## Author

jotvibfeng
