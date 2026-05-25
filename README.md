# Workflow repo CA

This is my CA project for the workflow course. It's a venue booking app using vanilla JavaScript and the Noroff Holidaze API.

## Setup

Clone the repo and install dependencies:

```bash
npm install
```

Copy `.env.example` to `.env` and add your credentials:

```bash
cp .env.example .env
```

Start a local server:

```bash
npx serve . --listen 3000
```

## Environment variables

You need a `.env` file with these variables (see `.env.example`):

- `TEST_USER_EMAIL` - your Noroff account email
- `TEST_USER_PASSWORD` - your Noroff account password

## Scripts

| Script            | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Watch and build Tailwind CSS |
| `npm run lint`    | Run ESLint on JS files       |
| `npm run format`  | Format files with Prettier   |
| `npm test`        | Run unit tests with Vitest   |
| `npm run prepare` | Install Husky hooks          |

## Tests

Unit tests (Vitest):

```bash
npm test
```

End-to-end tests (Playwright):

```bash
npx playwright test
```
