# Playwright Automation Framework
A scalable test automation framework built with Playwright and TypeScript, following best practices such as Page Object Model, fixtures, environment configuration, and CI/CD integration.

## Tech Stack
- Playwright (TypeScript)
- Node.js
- GitHub Actions (CI/CD)

## Features
- Page Object Model (POM) structure
- Custom fixtures for reusable setup (auto-login)
- Environment-based configuration using dotenv
- HTML reporting with screenshots, videos, and traces on failure
- GitHub Actions integration for automated test runs on push and PR

## Project Structure
- `tests/` → test specs  
- `pages`/ → page objects  
- `utils/` → config and helpers  
- `.github/workflows/` → CI configuration  

## How to Run
```bash
# Setup
npm install
npx playwright install

# Run Tests
npx playwright test

# View Report
npx playwright show-report
```

## Environment Variables
Create a `.env` file:

```
BASE_URL=  
STANDARD_USERNAME=  
STANDARD_PASSWORD=  
INVALID_USERNAME=  
INVALID_PASSWORD=
```

## CI/CD

Tests are automatically executed on every push and PR using GitHub Actions.  
Test reports are uploaded as artifacts.
