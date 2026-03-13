# Workflow repo for the CA

## Installation

```bash
git clone <repository url>
cd workflow_CA
npm install

```

## Development

```bash

npm run dev //will start local server using liveserver

```

## Running Tests

This project includes both unit tests and end to end testing

### Run unit Test(vitest)

```bash

npm run test

```

### Run end to end tests (Playwright)

```bash

npm run test:e2e
npm run test:e2e -- --headed //with a visible browser

```

## Project scripts

npm run dev ---> Starts development server using live-server
npm run test ---> Runs unit tests with Vitest
npm run test:e2e ---> runs end to en tests with Playwright
npm run prepare ---> initialize Husky git hooks

## Environment Variables

The project requires the following ENV for testing

```bash
TEST_EMAIL=your@email
TEST_PASSWORD=yourPassword!
```

These needs to be added to a .env file in the \*_root_ of the project

Do **Not commit your .env file** to the repository, add it to .gitignore

This project is using the **Noroff Holidaze API v2**

```bash
https://v2.api.noroff.dev7holidaze/
```

### Tecknologies used

*HTML
*CSS/TAILWIND
*JS
*Playwright(e2e)
*Vitest(unit testing)
*Live-server

## Author

Gro Anita Bråthen
Front-End development student at Noroff

LinkedIn: [Gro Anita Braathen](https://www.linkedin.com/in/gro-anita-brathen-2a0513154/)

GitHub: [GroAnita](https://github.com/GroAnita)
