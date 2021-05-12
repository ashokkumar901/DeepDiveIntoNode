//pattern 1
var greet1 = require('./greet1');

greet1();

//pattern2
var greet2 = require('./greet2').greet;

greet2();

//pattern3 
var greet3 = require('./greet3')
greet3.greet();
greet3.message = 'changed message';

var greet3b = require('./greet3');
greet3b.greet();

//pattern4
var greet4 = require('./greet4');

var greet4Message = new greet4();

greet4Message.greet();

//revealing module patter
var greet5 = require('./greet5');
greet5.greet();