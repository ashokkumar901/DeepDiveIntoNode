const fs = require('fs');
const zlib = require('zlib');

let readable = fs.createReadStream(__dirname + '/greet.txt');

let writable = fs.createWriteStream(__dirname + '/greet2.txt');

let gzip = zlib.createGzip();
let compressed = fs.createWriteStream(__dirname + '/greet.txt.gz')

readable.pipe(writable);

readable.pipe(gzip).pipe(compressed);