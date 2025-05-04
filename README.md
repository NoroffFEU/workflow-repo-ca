# Workflow Repo

In this course assignment we were going to learn how to enhance the development workflow and write tests.

## Description

To develop the skills needed we had to:

- Fork the project repo
- Create new branch
- Set up dev tools like ESLint, Prettier and Husky
- Set up testing tools like Vitest and Playwright
- Test functions: user can log in, register user, returns username and navigation tests.

## Built With

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Vitest](https://vitest.dev/)
- [Playwright](https://playwright.dev/)
- [TailwindCSS](https://tailwindcss.com/)

## Getting Started

### Installing

To get started with this project, follow these steps:

1. Clone the repo:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/workflow-repo.git
```

2. Install dependencies:

```bash
npm install
```

### Running

To start the development server:

```bash
npm start
```

To run TailwindCSS in watch mode:

```bash
npm run dev
```

To build TailwindCSS for production:

```bash
npm run build
```

## Testing

### Unit Tests

Vitest is used for unit testing. Run tests with:

```bash
npm run unit
```

### End-to-End (E2E) Tests

Playwright is used for E2E testing. Run tests with:

```bash
npm run e2e
```

For UI mode:

```bash
npm run e2e:ui
```

For headed mode:

```bash
npm run e2e:headed
```

For debugging:

```bash
npm run e2e:debug
```

## Environment Variables

Ensure you have a `.env` file with required environment variables. Example:

```ini
API_KEY=your_api_key_here
DB_URL=your_database_url_here
```

The `.env` file is ignored in version control. Use `.env.example` as a reference.
