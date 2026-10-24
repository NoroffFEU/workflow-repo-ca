# Workflow Repo for the CA

## Setup
Run `npm install` to install all the needed dependencies.

## Scripts
- `npm run dev` – starts the local dev server  
- `npm run test` – runs unit tests (Vitest)  
- `npm run e2e` – runs end-to-end tests (Playwright)  
- `npm run e2e:ui` – opens Playwright UI mode  

## Tools
- ESLint setup with browser + Vitest globals  
- Prettier for code formatting  
- Husky + lint-staged pre-commit hooks (auto lints and formats before you push)  
- Vitest unit tests: `isActivePath` and `getUsername`  
- Playwright e2e tests: login and navigation  

## Environment Variables
Create a `.env` file (not commited) by using `.env.example` as a guide.  
These are the ones needed:

- `E2E_BASE_URL=`  
- `E2E_USER_EMAIL=`  
- `E2E_USER_PASSWORD=`  

### Example local .env values
E2E_BASE_URL=http://localhost:5173  
E2E_USER_EMAIL=example@example.com  
E2E_USER_PASSWORD=example-password  

## How to Run Tests
- `npm run test` → runs the unit tests  
- `npm run e2e` → runs the e2e tests (starts the dev server first)  

## Submission
Open a Pull Request from `workflow` → `main`, don’t merge it, and submit the PR link on Moodle before deadline.  

---

*Keywords: #WorkflowRepo #CA #NodeJS #Vitest #Playwright #ESLint #Prettier #Husky*
