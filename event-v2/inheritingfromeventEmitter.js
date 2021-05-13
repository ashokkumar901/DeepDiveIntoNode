const eventEmitter = require('events');
const util = require('util');

function Greetr() {
    eventEmitter.call(this);
    this.greeting = 'greetings!';
}

util.inherits(Greetr, eventEmitter);

Greetr.prototype.greet = function (data) {
    console.log(this.greeting + ' ' + data);
    this.emit('greet', data);
}

const greet1 = new Greetr();
greet1.on('greet', (data) => {
    console.log('someone greeted!', data)
})

greet1.greet('Ashok');