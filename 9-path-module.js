const path = require('path');

const filepath = path.join(`${path.sep}Static${path.sep}`, 'index.html');

console.log(filepath);

const absolute = path.resolve(__dirname, 'static', 'index.html')

console.log(absolute);

const base = path.basename(absolute);

console.log(base)