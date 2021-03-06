const fs = require('fs');

let readable = fs.createReadStream(__dirname + '/greet.txt',
    { encoding: 'utf8', highWaterMark: 16 * 1024 });

let writable = fs.createWriteStream(__dirname + '/greet2.txt');

readable.on('data', (chunk) => {
    console.log(chunk);
    writable.write(chunk);
});