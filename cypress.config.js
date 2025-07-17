const { defineConfig } = require("cypress");
const fs = require('fs');

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
      // Removed Allure plugin setup
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx,feature}',
    // Removed reporter and reporterOptions for Allure
  },
});
