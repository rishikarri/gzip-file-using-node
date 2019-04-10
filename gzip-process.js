const fs = require('fs');
const zlib = require('zlib');

const fileContents = fs.createReadStream(`./test.txt`);
const writeStream = fs.createWriteStream(`./test.gz`);
const zip = zlib.createGzip();
fileContents.pipe(zip).pipe(writeStream);