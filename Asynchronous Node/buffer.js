let buf = new ArrayBuffer(8);

let buffer1 = new Int32Array(buf);

buffer1[0] = 5;
buffer1[1] = 15;

console.log(buffer1);