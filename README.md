# Workflow repo for the CA

## Set Up Repo and Development Tools

[x] Fork Repo
[x] Create branch named workflow
[] Install and configure ESLint, must be configured to handle the globals used in the test files
[] Install and configure Prettier
[] Set up commit hooks to ensure staged code is checked before being commited. Format HTML files and formant and lint javascript files.

## Set Up Testing Tools

[] Install and configure Vitest for unit testing and test these cases:
[] isActivePath Function: - Returns true when current path matches href exactly - Returns true for root path (/) when path is "/" or "/index.html" - Returns true when current path includes the href - Returns false when paths dont match

    [] getUserName Function:
    		- Test that it returns the name from the user object i storage (first save a user object to storage)
    		- Test that it returns null when no user exists in storage

[] Install and configure Playwright for e2e testing and test these two cases:
[] login: - User can successfully lof in with valid credentials from environment variables (If the login details from the lesson do not work you can create a new usr by running the project and using the register form) - User sees and error message with invalid credentials - Be sure to include .env in the gitignore and include an .env.example in the branch
[] navigation:
Write a test that: - Navigates to the home page - Waits for the venue list to load - Click the first venue - Verfies that when the venue details page loads there are the words "venue details" in the heading

## Update READEME:

     [] Update to include the instructions for the repo. ex npm install, npm run test, and any other script uou add to the project. It should also include the name of the required encironment variables (not the values).

## Submit Work:

    	- Open a Pull Request from your workflow branch into your default branch
    	- Do not merge the PR
    	- Submit the PR link on moodle.
