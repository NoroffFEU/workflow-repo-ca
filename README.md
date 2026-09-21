# Workflow repo for the CA

Holidaze venue booking frontend with Vitest unit tests and Playwright browser tests.

### This will be updated while the project is under testing.

## Important note

The `apiUrl` this project uses is out of date. The `login` logic has an updated URL for testing, but the original URL is still in use and not changed, which is the reason why some data and login functionality doesn't work properly. Tests are made to work around that, while some tests are missing due to lack of testable data.

## Setup

Install Node.js and npm, clone the repository, and open a terminal in the repository folder.

```bash
npm install
```

Make sure that you have all the dependencies installed:

- `eslint`
- `playwright`
- `node`
- `dotenv`
- `husky`
- `jsdom`
- `live-server`
- `prettier`
- `tailwindcss`
- `vitest`

## Environment variables

For running the `Playwrite`-tests, you need `.env`-data to simulate a logged in user.

Create a `.env` file in the repository root, using `.env.example` as a template.

```dotenv
TEST_USER_EMAIL=
TEST_USER_PASSWORD=
```

Fill in the values locally. `.env` is ignored by Git. Playwright loads this file through `dotenv` in `playwright.config.js`.

## Running the project

Start the local web server:

```bash
npm run start
```

Open <http://127.0.0.1:3002/>. This matches the address used by Playwright.

## Running tests

### Vitest

The `vitest`-files is located in the same folder as the original files.

`js/` -> `utils/` -> [`storage.test.js`](js/utils/storage.test.js)

`js/` -> `utils/` -> [`userInterface.test.js`](js/utils/userInterface.test.js)

To run the test, open the terminal and add:

```bash
npm run test
```

Inside [`vitest.config.js`](vitest.config.js), there is a list of what Vitest shall exclude while running tests. There you will find `/tests/` which is there the Playwright tests are located. This is due to Vitest is trying to run all the tests by default.

### Playwright

Install the `Chromium browser` used by `Playwright` before the first browser test run:

```bash
npx playwright install chromium
```

Run the browser tests:

```bash
npx playwright test
```

Playwright starts the web server automatically, or reuses an existing server at the configured address during local runs. Make sure any existing server on port 3002 serves this repository. Login tests require the environment variables above and access to the Noroff API.

Run an individual browser test file:

```bash
npx playwright test tests/navigation/home.spec.js
```

View the HTML report after a browser test run:

```bash
npx playwright show-report
```

You can find the test files within the `tests`-folder:

`tests/` -> `listeners/` -> `auth/` -> [`loginFormListener.spec.js`](tests/listeners/auth/loginFormListener.spec.js)

`tests/` -> `listeners/` -> `venues/` -> [`displayVenueList.spec.js`](tests/listeners/venues/displayVenueList.spec.js)

`tests/` -> `listeners/` -> `venues/` -> [`renderVenue.spec.js`](tests/listeners/venues/renderVenue.spec.js)

`tests/` -> `navigation/` -> [`home.spec.js`](tests/navigation/home.spec.js)

## Important note!

Due to old links in the source code, tests for the `venues` (`displayVenueList.spec.js` and `renderVenue.spec.js`) will fail unless the source code is updated.
