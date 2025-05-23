# Workflow Repo

This repository contains the source code, configuration, and tests for the Workflow project.

---

## Getting Started

### Prerequisites

- Node.js 
- npm 

---

## Installation

1. Clone or fork the repository:
  

2. Switch to the `workflow` branch:
   ```bash
   git checkout workflow
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

---

## Development Server

To serve the project locally at [http://127.0.0.1:8080](http://127.0.0.1:8080), you can use a static server:

### Option 1: Using `live-server`

1. Install globally:
   ```bash
   npm install -g live-server
   ```

2. Run from the project root:
   ```bash
   live-server --port=8080
   ```

### Option 2: VS Code Live Server Extension

- Install the "Live Server" extension in VS Code.
- Open `index.html` and right-click → **Open with Live Server**.

---

## Scripts

 Script            Description                                 

 `npm run dev`     | Compile Tailwind CSS and watch for changes  
 `npm run test`    | Run unit tests with Vitest                  
 `npm run lint`    | Lint the code with ESLint                   
 `npm run format`  | Format code with Prettier                   
 `npx playwright test` | Run end-to-end tests with Playwright   

---

## Testing

### Unit Tests

Vitest is configured for testing utility functions.

```bash
npm run test
```

### End-to-End Tests

Playwright is used for E2E testing.

```bash
npx playwright test
```

Make sure your server is running at `BASE_URL` (e.g. `http://127.0.0.1:8080`) before running E2E tests.

---

## Linting & Formatting

Lint with ESLint and format with Prettier:

```bash
npm run lint
npm run format
```
## Branch Info

All development changes should be made on the `workflow` branch.
```
:)

