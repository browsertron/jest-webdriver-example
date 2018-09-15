const {
  setup: setupDevServer
} = require('jest-dev-server');

module.exports = async () => {
  await setupDevServer({
    command: `todomvc`,
    port: 8000,
  });
};
