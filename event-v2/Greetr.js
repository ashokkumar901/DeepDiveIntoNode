const eventEmitter = require('events');

module.exports = class Greetr extends eventEmitter {
    constructor(message) {
        super();
        this.message = message;
    }

    greet(data) {
        console.log(`greetings! ${this.message} ${data}`);
        this.emit('greet',data);
    }
}