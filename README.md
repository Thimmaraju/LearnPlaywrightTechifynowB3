# LearnPlaywrightTechifynowB3

Official repository for the B3Techifynow Playwright automation practice project. This README reflects the current files and folders in the repo.

## Repo layout
- .auth/: (local auth settings)
- .env: environment variables map (local config)
- .gitignore
- .vscode/: editor settings
- allure-report/: generated Allure HTML report output
- allure-results/: Allure raw result JSONs and attachments
- downloads/: sample downloads in tests
- LearnJS/: learning JavaScript samples
- node_modules/: installed npm dependencies
- pages/: page objects or UI templates
- playwright-report/: Playwright built-in HTML report output
- test-results/: additional test results output
- testdata/: test data fixtures
- tests/: Playwright test scripts
- package.json, package-lock.json, playwright.config.js

## Quick start
1. npm install
2. npx playwright install
3. npx playwright test
4. npx playwright show-report
5. npx allure serve allure-results (if Allure installed)

## Notes
- Use Node 18+
- Keep test artifacts in allure-results/playwright-report/test-results only when needed
- Add new tests in `tests/` and test data in `testdata/`
