const fs = require('fs-extra');
const path = require('path');
const package = require('../package.json');

function generate(name) {
  const template = fs.readFileSync(path.join(__dirname, `${name}.template.js`), 'utf8');
  const dir = path.join(__dirname, name);
  fs.emptyDirSync(dir);

  let t = package[`${name}_tests`];
  while (t--) {
    const filepath = path.join(dir, `${t}.test.js`);
    const contents = template.replace(new RegExp('{{num}}', 'g'), t);
    fs.writeFileSync(filepath, contents);
  }
}

generate('webdriver');
