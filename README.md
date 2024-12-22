# Workflow Repo for the CA

This project is part of my second-year workflow course assignment. The goal is to improve the development process of a website by setting up tools and tests to ensure clean, efficient, and high-quality code. It includes workflows for linting, formatting, and testing.

---

## Getting Started

### Steps to Set Up the Project:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ziconstr/workflow-repo-ca.git
   cd workflow-repo-ca
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Switch to the Workflow Branch:**
   ```bash
   git checkout workflow
   ```

### Useful Scripts:

- **Start the server:**
  ```bash
  npm run dev
  ```
- **Run unit tests:**
  ```bash
  npm run test
  ```
- **Run end-to-end tests:**
  ```bash
  npm run e2e
  ```

---

## How to Contribute

### Fork the Repository

Fork the project repository to your GitHub account. This creates your own copy of the project where you can work on changes.

### Create a Branch

Create a new branch from `main` for your changes. Name it `workflow` to keep your changes aligned with the project’s workflow:

```bash
git checkout -b workflow
```

### Make Your Changes

- Implement your changes (features, bug fixes, tests, etc.).
- Ensure that your code follows the project’s linting and formatting rules.
- If adding a new feature, please include tests where applicable.

### Commit Your Changes

Before committing, make sure to stage your changes and verify that the code passes linting and formatting checks:

```bash
npm run lint
npm run test
```

Once everything is verified, commit your changes:

```bash
git commit -m "Your descriptive commit message"
```

### Push Your Changes

Push your branch to your forked repository:

```bash
git push origin workflow
```

### Create a Pull Request

1. Go to your forked repository on GitHub and create a pull request (PR) to the original repository.
2. In the PR description, provide a clear summary of the changes you’ve made and reference any relevant issues.
3. Make sure your PR follows the repository’s contribution guidelines.
