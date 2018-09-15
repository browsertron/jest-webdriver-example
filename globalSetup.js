const {
  setup: setupDevServer
} = require('jest-dev-server');
const chromedriver = require('chromedriver');

module.exports = async () => {
  chromedriver.start();
  await setupDevServer({
    command: `todomvc`,
    port: 8000,
  });
};
