# UPWORK - Round 2 – Freelance QA Engineer for Manual & Automated Testing

## Cypress BDD Automation Framework

### Overview
This project is a Cypress-based automation framework using BDD (Cucumber), Page Object Model (POM), parallel execution, dynamic environment support (Dev, QA, Prod), and Allure reporting. It demonstrates automated tests for the login functionality at [the-internet.herokuapp.com/login](https://the-internet.herokuapp.com/login).

### Features
- **Cypress** for fast, reliable browser automation
- **Cucumber (BDD)** for human-readable test scenarios
- **Page Object Model (POM)** for maintainable, reusable code
- **Parallel Execution** via Cypress Dashboard or CLI
- **Dynamic Environment Config** (Dev, QA, Prod)
- **Allure Reporting** for beautiful test reports

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
4. **Generate Allure Report:**
   - Run tests with Allure results:
     ```bash
     npx cypress run --env configEnv=dev --reporter allure-commandline --reporter-options clean=true
     ```
   - Generate and open the report:
     ```bash
     npx allure generate allure-results --clean -o allure-report
     npx allure open allure-report
     ```

### Allure Report Generation
After running your Cypress tests, you can generate and view the Allure report with the following commands:

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

- `allure-results` is the folder where test results are stored.
- `allure-report` is the folder where the HTML report will be generated.
- The report will open in your default browser for easy review.

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
**Author:** HARDIK PANSNAI "# Round-2" 
