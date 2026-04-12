# Playwright E2E Test Automation for SauceDemo
A scalable end-to-end (E2E) test automation framework built with Playwright and TypeScript for the SauceDemo e-commerce application.

It follows industry best practices, including Page Object Model (POM), custom fixtures, environment-based configuration, reporting, and CI/CD integration.

The framework validates core user journeys such as authentication, product interaction, and checkout by simulating real user behavior through the UI on https://www.saucedemo.com/

## Live Test Report

View the latest Playwright HTML report:

https://jonathanvieri.github.io/playwright-e2e-saucedemo/

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

## Test Scenarios Covered
- Login (valid and invalid users)
- Add item to cart
- Remove item from cart
- Checkout flow (end-to-end)

## Project Structure
- `tests/` → test specs  
- `pages/` → page objects  
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

## Future Improvements
- API + UI hybrid testing
- Test data management via external sources (e.g. JSON/fixtures)
- CI optimization (separate smoke vs regression runs)
