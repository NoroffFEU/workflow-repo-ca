# Workflow Repo

## Project Description

The Workflow Repo is a venue booking application designed to let users explore and book venues seamlessly. This project focuses on providing a dynamic and responsive user experience, utilizing modern technologies like Vanilla JavaScript, TailwindCSS, and Playwright for testing. With features such as user authentication, detailed venue pages, and a clean UI, this app ensures a smooth experience for both users and developers.

## Features

- **User Authentication:** Register, log in, and manage bookings securely.
- **Venue Browsing:** View a list of venues, open detailed pages, and explore options.
- **Responsive Design:** Optimized for desktops, tablets, and mobile devices.
- **End-to-End Testing:** Integrated Playwright tests for verifying functionality.
- **Styling:** Clean and modern UI built with TailwindCSS.

## Navigate

### Steps:
1. **Navigate to the home page:**
   - Open the browser at `http://127.0.0.1:5500/`.
2. **Wait for the venue list to load:**
   - Ensure the venues load dynamically by watching for the list to appear.
3. **Click on the first venue:**
   - The first venue in the list is clickable, leading to the details page.
4. **Verify the details page:**
   - Confirm that the page heading displays "Venue details" after the page has loaded.

This ensures the application’s primary functionality works as expected.

## Install All Dependencies

Before running the project, install all the necessary dependencies by following these steps:

1. Open a terminal and navigate to the project directory:
   ```bash
   cd workflow-repo

  
  
   ## Usage

### Running the Development Server

To start the development server and see your application in action, run the following command:

```bash
npm start
# After running the command, open your browser and visit the following URL to see the application:
http://127.0.0.1:5500/

### Compiling TailwindCSS

If you make any changes to the CSS or need to compile styles, use this command:

```bash
npm run dev

This will watch for changes in your input.css and output the compiled CSS into style.css.

## Testing

This project uses Vitest for unit tests and Playwright for end-to-end tests.

### Run Unit Tests

To run the unit tests, execute the following command:

```bash
npm run test

### Run End-to-End Tests

To run Playwright tests, execute the following command:

```bash
npm run playwright

### Example Test Workflow

1. Navigate to the home page.
2. Wait for the venue list to load.
3. Click the first venue.
4. Verify that the venue details page displays "Venue details" in the heading.

### Test Output

- Successful tests will appear in **green**.
- Failed tests will provide debugging information in the terminal.

### Environment Variables

This project requires the following environment variables. Add these to a `.env` file:

```plaintext
USERNAME=your-email@example.com
PASSWORD=your-password
Note: Do not include actual values in the .env file. For security, add .env to .gitignore and provide an .env.example file instead.

### Technologies Used

- **[TailwindCSS](https://tailwindcss.com)** for styling.
- **[Playwright](https://playwright.dev)** for end-to-end testing.
- **[Vitest](https://vitest.dev)** for unit testing.
- **[ESLint](https://eslint.org)** and **[Prettier](https://prettier.io)** for code formatting and linting.


