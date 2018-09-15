module.exports = {
  testEnvironment: 'jest-environment-webdriver',
  testEnvironmentOptions: {
    seleniumAddress: 'http://localhost:9515'
  },
  setupFiles: ['./setTimeout.js'],
  testMatch: ['**/__tests__/webdriver/**/*'],
  globalSetup: './globalSetup.js',
  globalTeardown: './globalTeardown.js'
};
