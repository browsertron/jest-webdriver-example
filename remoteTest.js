const { run } = require('track-coach');
const ngrok = require('ngrok');

(async function main() {
  process.env.REMOTE_APP_URL = await ngrok.connect(8000);
  console.log(`Accessible remotely at ${process.env.REMOTE_APP_URL}`);
  try {
    await run('jest --config=remote.jest.config.js');
  } finally {
    await ngrok.kill();
  }
})();
