const EventEmitter = require('events');

const customEmitter = new EventEmitter();
// on listen for an event this order matter
// emit emit the event

customEmitter.on('response', () => {
    console.log('data received');
});


customEmitter.on('response', () => {
    console.log('some other logic ');
});


customEmitter.on('Hello', () => {
    console.log('Somebody said hello')
});

customEmitter.emit('response', 'Hello');