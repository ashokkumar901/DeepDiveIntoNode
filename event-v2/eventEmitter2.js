const Emitter = require('events');
const emtr = new Emitter();

const eventConfig = require('./config').events;

emtr.on(eventConfig.GREET, () => {
    console.log('greetings1');
});

emtr.on(eventConfig.GREET, () => {
    console.log('greetings2');
});

console.log('Here is an example of eventEmitter in Node.js');
emtr.emit('greet');