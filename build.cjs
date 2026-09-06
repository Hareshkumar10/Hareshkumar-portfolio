const fs = require('node:fs');
const path = require('node:path');
const output = path.join(__dirname, 'out');
fs.mkdirSync(output, { recursive: true });
const assets = ['index.html', 'styles.css', 'script.js', 'theme-init.js', 'resume.html', 'resume.css', 'resume.js', 'resume.txt', 'favicon.svg'];
for (const asset of assets) fs.copyFileSync(path.join(__dirname, asset), path.join(output, asset));
