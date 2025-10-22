# Workflow repo for the CA
# Workflow Course Assignment

This project was created as part of the Workflow course assignment.  
The goal was to apply workflow automation and testing tools to improve the quality and reliability of a website.

---

## 🧩 Project Setup

### 1. Installation
Clone or fork the repository, then install dependencies:

```bash
npm install
2. Development
Start the Tailwind build watcher:

bash
Kopier kode
npm run dev
Start a local server (default port 5173):

bash
Kopier kode
npm run serve
If that port is busy, you can change it, for example:

bash
Kopier kode
npx http-server -p 5180 -c-1 .
Then open http://localhost:5173 (or the port you chose).

🧪 Testing
Unit Tests (Vitest)
Run all unit tests:

bash
Kopier kode
npm run test
These tests cover:

isActivePath() – checks if the current path matches the given href

getUserName() – retrieves a username from local storage

End-to-End Tests (Playwright)
These simulate real user interactions in the browser.

Run in headless mode:

bash
Kopier kode
npm run e2e
Run with the browser visible (headed mode):

bash
Kopier kode
npm run e2e:headed
⚙️ Environment Variables
Create a .env file in the project root and include:

ini
Kopier kode
BASE_URL=http://localhost:5173
TEST_EMAIL=your-test-email@example.com
TEST_PASSWORD=your-strong-password
Also include a .env.example file (without real credentials).
Make sure .env is listed in .gitignore.

🧹 Productivity Tools
Tool	Purpose
ESLint	Lints JavaScript for errors
Prettier	Automatically formats code
Husky	Runs pre-commit checks
Lint-Staged	Runs linters only on staged files

To lint and format manually:

bash
Kopier kode
npm run lint
npm run format

## 📝 Notes
This project was a bit overwhelming because I didn’t start it from scratch and had to spend time understanding how everything was set up before continuing.  
I struggled a bit with adjusting to an existing project, and as a result, I ran out of time to fix the **register** and **login** functionality.  

That part is on me — I couldn’t get it working before the deadline.  
However, all the other parts of the workflow — setup, automation, linting, and testing — were completed successfully and work as intended.


#🧾 Grading Checklist
Requirement	Status	Notes
ESLint installed and configured	✅	Handles test globals
Prettier installed and configured	✅	Works with ESLint
Pre-commit hooks (Husky + lint-staged)	✅	Runs lint + format before commits
Vitest installed and configured	✅	Unit tests for isActivePath and getUserName
Playwright installed and configured	✅	End-to-end tests for login and navigation
.env file ignored in git	✅	.env listed in .gitignore
.env.example file included	✅	Contains variable names only
README updated with scripts & env info	✅	Complete and detailed
Open Pull Request from workflow branch	✅	For submission (not merged)

##📚 Resources Used

While working on this project, I used several resources to understand the tools and workflows better:

[Tailwind CSS Video Tutorial](https://www.bing.com/videos/riverview/relatedvideo?q=(https%3a%2f%2ftailwindcss.com%2fdocs&mid=AA47746877C1204440A1AA47746877C1204440A1&FORM=VIRE)

ESLint Documentation

Prettier Documentation

Playwright Testing Guide (Microsoft)

YouTube tutorials on workflow automation and Playwright testing

Notes and lectures from the Workflow course

OpenAI — used for guidance on setup, debugging, and clarifying tool configurations


Mvh,
Felicia B