const path = require('path');

// platform specific path seperator
console.log('SEP: ', path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log('FILEPATH: ', filePath);

const base = path.basename(filePath)
console.log('BASE: ', base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log('ABS: ', absolute);