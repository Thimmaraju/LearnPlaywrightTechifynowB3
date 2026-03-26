# LearnPlaywrightTechifynowB3

## Project Overview
LearnPlaywrightTechifynowB3 is a Playwright automation repository designed to provide a complete test framework for functional UI testing, reporting, and learning best practices for Playwright in a practical project environment.

The repository includes:
- `tests/`: Playwright test scripts
- `testdata/`: test fixtures and input data
- `pages/`: page object abstractions
- `allure-results/` and `allure-report/`: Allure artifacts and HTML reports
- `playwright-report/`: built-in Playwright reports
- `downloads/`: artifacts created by tests

## Key Config Files
- `package.json`: npm dependencies and scripts
- `playwright.config.js`: Playwright test suite configuration
- `.env`: runtime environment variables (ignored in git)
- `.gitignore`: excluded files

## Installed Packages (from package.json)
- `@playwright/test`: Playwright test runner
- `allure-playwright`: Allure reporter adapter
- `allure-commandline`: CLI for generating Allure reports
- `dotenv`: environment variable loader
- `@faker-js/faker`: synthetic data generation library

## Recommended npm Scripts (add to package.json)
Add this to `scripts` in package.json for easy usage:
```json
"scripts": {
  "test": "npx playwright test",
  "test:headed": "npx playwright test --headed",
  "test:report": "npx playwright show-report",
  "allure:serve": "npx allure serve allure-results",
  "clean": "rimraf allure-results allure-report playwright-report test-results"
}
```

## Playwright Config Highlights (`playwright.config.js`)
- `testDir`: `./tests`
- `expect.timeout`: 20,000ms
- `fullyParallel`: true
- `forbidOnly`: true in CI
- `retries`: 2 in CI, 0 locally
- `workers`: 1 in CI, default locally
- `reporter`: 
  - HTML (`./playwright-report`)
  - Allure (`allure-playwright`)
- Browser projects:
  - `setup` (Chrome channel)
  - `chromium` and `Google Chrome` using `.auth/user.json` storage state
- `use.baseURL`: `https://opensource-demo.orangehrmlive.com/`
- `use.trace`: `on-first-retry`

## Environment Variables
Create `.env` with values like:
```ini
BASE_URL=https://opensource-demo.orangehrmlive.com/
USERNAME=admin
PASSWORD=admin123
```
Load in `playwright.config.js` and tests via `process.env`.

## Quick Start
1. `npm install`
2. `npx playwright install`
3. `npm test`
4. `npm run test:report`
5. `npm run allure:serve`

## Example Test Template (put in `tests/example.spec.js`)
```js
import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {
  await page.goto(process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com/');
  await page.fill('input[name="txtUsername"]', process.env.USERNAME || 'admin');
  await page.fill('input[name="txtPassword"]', process.env.PASSWORD || 'admin123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/dashboard/);
});
```

## Notes and Best Practices
- Keep output directories in `.gitignore`: `allure-results`, `allure-report`, `playwright-report`, `test-results`, `node_modules`.
- Use `test.describe`, `test.beforeEach`, and page object model in `pages/`.
- Use tags: `@smoke`, `@regression`, and run specific subsets with `--grep`.

## Troubleshooting
- If tests fail due to stale auth-state, delete `.auth/user.json` and rerun setup project.
- Use `npx playwright test --debug` for step-by-step debugging.
- Use `npx playwright show-report` to inspect failing test steps and screenshots.
