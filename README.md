# Workflow repo for the CA  

A structured development workflow for frontend projects using **TailwindCSS, Playwright, Vitest, ESLint, and Prettier**.  
This setup ensures efficient development, testing, and debugging of applications while maintaining high code quality.  

---

##  Features  

- **Live Development Server** – Preview changes in real-time with `live-server`.  
- **TailwindCSS Integration** – Quickly style applications with utility-based CSS.  
- **Automated Testing** – Unit tests with **Vitest** and end-to-end tests with **Playwright**.  
- **Code Quality & Formatting** – Enforces coding standards using **ESLint** and **Prettier**.  
- **Pre-commit Hooks** – Uses **Husky** and **Lint-Staged** to format and lint staged files before committing.  

---

##  Getting Started  

###  Prerequisites  

Ensure you have the following installed:  

- **[Node.js](https://nodejs.org/)** (latest stable version)  
- **[npm](https://www.npmjs.com/)**  

###  Installation  

Clone this repository and install the necessary dependencies:  

```
git clone https://github.com/Veronicabrun/workflow-repo-ca.git
cd workflow-repo-ca
npm install
```

## Scripts
### Development

Start a local development server:
```
npm run start
```

Watch TailwindCSS for real-time styling updates:
```
npm run dev
```

### Testing

Run all tests:
```
npm run test
```
Unit Testing (Vitest)
```
npm run test:unit
```

Run E2E Tests: Use Playwright for end-to-end testing.
```
npm run test:e2e
```

Run Playwright tests in UI mode for debugging:
```
npm run e2e:ui
```

Run Playwright tests in headed mode (with a visible browser):
```
npm run e2e:headed
```

Run Playwright tests in debug mode:
```
npm run e2e:debug
```

### Pre-commit Hooks
This project uses Husky and Lint-Staged to ensure code quality:
Automatically formats and lints JavaScript and HTML files before committing.

To lint the code:
```
npm run lint
```
To format the code with Prettier:
```
npm run format
```
To set up pre-commit hooks:
```
npm run prepare
```

## Environment Variables
The project uses environment variables to store sensitive information like test credentials. Create a .env file in the root directory and add the required keys:

```env
TEST_USER_EMAIL=your-email@example.com
TEST_USER_PASSWORD=your-password
```

