const Greetr = require('./Greetr');

const greet1 = new Greetr('hiiii');

greet1.on('greet', (data) => {
    console.log('someone greeted', data)
});

greet1.greet('ashok');