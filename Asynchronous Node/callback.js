function greet(callback) {
    console.log('call back started');
    let data = { name: 'ashok' }
    callback(data);
}

greet(function (data) {
    console.log('callback1', data);
});

greet(function (data) {
    console.log('callback2', data.name);
});