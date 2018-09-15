module.exports = {
  testEnvironment: 'jest-environment-webdriver',
  testEnvironmentOptions: {
    seleniumAddress: 'http://localhost:9515'
  },
  setupTestFrameworkScriptFile: './setupTestFrameworkScriptFile.js',
  testMatch: ['**/__tests__/webdriver/**/*'],
  globalSetup: './globalSetup.js',
  globalTeardown: './globalTeardown.js',
  globals: {
    __APP_URL__: 'http://localhost:8000'
  }
};
