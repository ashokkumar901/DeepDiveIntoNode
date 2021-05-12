//function statement
function greeting() {
    console.log('greeting');
}

greeting();

//functions are firstclass
function loggreeting(fn) {
    fn();
}
loggreeting(greeting);

//function expression
var newFunction = function () {
    console.log('greeting fromm Ashok');
}

console.log(newFunction());
//The is first class function too Infact every function

loggreeting(newFunction);

//use a function expression on the fly
loggreeting(function () {
    console.log('this is on the fly');
});



