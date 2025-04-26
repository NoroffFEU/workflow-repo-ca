# Workflow Course Assignment

Welcome to the **Workflow Repo CA** – a project focused on establishing a solid frontend workflow including unit tests, end-to-end tests, linting, formatting, and environment setup.

---

## 🧪 Testing

### ✅ Unit Tests (Vitest)

```bash
npm run test:unit
```

### 🔍 End-to-End Tests (Playwright)

```bash
npm run test:e2e
```

### 🐞 Debug mode

```bash
npm run test:e2e:debug
```

### 🧪 Test UI

```bash
npm run test:e2e:ui
```

---

## 🧼 Linting & Formatting

### Run ESLint

```bash
npm run lint
```

### Run Prettier

```bash
npm run format
```

---

## 📦 Installation & Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run start
```

> Opens a live server at: `http://localhost:5500`

---

## 🌍 Environment Variables

You must create a `.env` file at the root:

```
TEST_USER_EMAIL=your@email.com
TEST_USER_PASSWORD=yourpassword
```

Or in this project:

```
TEST_USER_EMAIL=workflowuser@stud.noroff.no
TEST_USER_PASSWORD=workflowpass
```

And make sure `.env` is ignored via `.gitignore`.

Also included: `.env.example`

---

## 🧠 Git Hooks

Husky is installed to run pre-commit checks automatically.

To install Git hooks manually (if not already active):

```bash
npx husky install
```

---

## 🗂️ Project Structure

```
workflow-repo-ca/
├── tests/
│   ├── e2e/
│   │   ├── login.spec.js
│   │   ├── navigation.spec.js
│   ├── getUserName.test.js
│   └── isActivePath.test.js
├── .env
├── .env.example
├── .gitignore
├── package.json
├── playwright.config.js
├── vitest.config.js
├── tailwind.config.js
├── index.html
└── README.md
```

---

## 🙌 Acknowledgements

- **Noroff** – for the course material and repo template
- **ChatGPT** – used for generating README, and 24/7 sparring
- **Teachers & Mentors** – for support during development

---

## 📬 Contact

- [LinkedIn](https://www.linkedin.com/in/petter-r%C3%B8nning-80602613a/)
- [Portfolio](https://raddishaisportfolio.netlify.app/)
- [Email](mailto:petter.arbeid@gmail.com)
