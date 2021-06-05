const eventEmitter = require('./emitter');

const event = new eventEmitter();

event.on('greet',()=>{
    console.log('event1');
});

event.on('greet',()=>{
    console.log('event2');
});

event.on('greet',()=>{
    console.log('event3');
});

console.log('Hello');

event.emit('greet');