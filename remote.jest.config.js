const conf = require('./jest.config');

if (!process.env.REMOTE_WEBDRIVER) {
  throw new Error('Must define the REMOTE_WEBDRIVER environment variable to run tests remotely');
}

conf.testEnvironmentOptions = Object.assign({}, conf.testEnvironmentOptions, {
  seleniumAddress: process.env.REMOTE_WEBDRIVER
});

conf.globals = Object.assign({}, conf.globals, {
  __APP_URL__: process.env.REMOTE_APP_URL
});

module.exports = Object.assign(conf, {
  globalSetup: './remoteGlobalSetup.js',
  globalTeardown: './remoteGlobalTeardown.js',
  runner: 'jest-runner-concurrent',
  reporters: ['jest-dot-reporter']
});
