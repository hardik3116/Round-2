const { defineConfig } = require("cypress");
const fs = require('fs');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

function getEnvConfig(env) {
  const configPath = `cypress/config/${env}.json`;
  if (fs.existsSync(configPath)) {
    return JSON.parse(fs.readFileSync(configPath));
  }
  return {};
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com',
    setupNodeEvents(on, config) {
      const env = config.env.configEnv || 'dev';
      const envConfig = getEnvConfig(env);
      config.env = { ...config.env, ...envConfig };
      // Allure plugin setup
      allureWriter(on, config);
      // Error logging
      on('fail', (error, runnable) => {
        console.error('Test failed:', error.message);
        throw error;
      });
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx,feature}',
    reporter: 'allure',
    reporterOptions: {
      outputDir: 'allure-results',
      clean: true
    }
  },
});
