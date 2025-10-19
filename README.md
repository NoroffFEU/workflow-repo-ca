# Workflow repo

## Workflow Assignment – Caroline Michelle

The goal of this project was to set up a complete front-end workflow with tools like ESLint, Prettier, Husky, Vitest, Playwright, and TailwindCSS.
I had never done this kind of setup before, and at first it felt quite difficult to understand how everything worked.
Through the process, I learned a lot about how tools like ESLint, Prettier, Vitest, and Playwright help make the workflow more structured and professional.
It was challenging, but now I have a much better understanding of setting things up. There were many errors along the way, and I spent a lot of time troubleshooting and learning how to fix different issues — so I guess I’ve become a bit better at debugging too! 😄

### Scripts

- `npm run dev` – start Tailwind CSS watcher
- `npm run lint` – run ESLint
- `npm run lint:fix` – fix linting issues automatically
- `npm run test` – run Vitest unit tests
- `npm run e2e` – run Playwright E2E tests headless
- `npm run e2e:headed` – run Playwright E2E tests with browser visible
- `npm run start` – start local server at http://localhost:5173

### Environment Variables

Create a `.env` file in the root folder based on this example:

```env
# Example environment variables
E2E_EMAIL=
E2E_PASSWORD=
```
