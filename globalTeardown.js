const {
  teardown: teardownDevServer
} = require('jest-dev-server');
const chromedriver = require('chromedriver');

module.exports = async () => {
  chromedriver.stop();
  await teardownDevServer();
};
