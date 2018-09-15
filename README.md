# jest-webdriver-example
This repo shows the fastest way to run WebDriver with Jest

## Usage

```bash
git clone git@github.com:browsertron/jest-webdriver-example.git
cd jest-webdriver-example
npm install

# Run your tests locally
npm test
```

## Configuration

To create large test suites, we generate tests. The template `__tests__/webdriver.template.js` has one template parameter `{{num}}`. After you modify the template, run `npm run generate` to regenerate the tests. To change the number of tests, modify the `webdriver_tests` attribute of `package.json`.

An instance of the [`todomvc`](https://github.com/tastejs/todomvc) server is started before each run. You can change `globalSetup.js` if you'd like to start a server a different way.

## License
MIT

