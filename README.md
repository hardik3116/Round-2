# UPWORK - Round 2 – Freelance QA Engineer for Manual & Automated Testing

## Cypress BDD Automation Framework

### Overview
This project is a Cypress-based automation framework using BDD (Cucumber), Page Object Model (POM), parallel execution, and dynamic environment support (Dev, QA, Prod). It demonstrates automated tests for the login functionality at [the-internet.herokuapp.com/login](https://the-internet.herokuapp.com/login).

### Features
- **Cypress** for fast, reliable browser automation
- **Cucumber (BDD)** for human-readable test scenarios
- **Page Object Model (POM)** for maintainable, reusable code
- **Parallel Execution** via Cypress Dashboard or CLI
- **Dynamic Environment Config** (Dev, QA, Prod)

### Folder Structure
```
cypress/
  e2e/            # Feature files and test specs
  support/        # Custom commands and page objects
  config/         # Environment configs (dev, qa, prod)
  fixtures/       # Test data
```

### Setup Instructions
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run tests (default: dev):**
   ```bash
   npx cypress run
   ```
   Or for a specific environment:
   ```bash
   npx cypress run --env configEnv=qa
   npx cypress run --env configEnv=prod
   ```
3. **Open Cypress GUI:**
   ```bash
   npx cypress open
   ```

### Why Cypress?
Cypress offers a modern, developer-friendly experience with fast feedback, automatic waiting, and easy debugging. Its ecosystem supports BDD, parallelization, and rich reporting.

### Test Scenarios Automated
- Successful login with valid credentials
- Failed login with invalid username
- Failed login with invalid password
- Error message verification
- Logout after successful login

### Notes
- All credentials and URLs are managed via environment configs.
- Page Object Model is used for maintainability.
- BDD feature files are in `cypress/e2e/`.

---
**Author:** HARDIK PANSNAI 
