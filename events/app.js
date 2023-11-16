const EventEmitter = require('events');

// on = listen for an event
// emit = emit an event

const customerEmitter = new EventEmitter();

customerEmitter.on('response', (name, id) => {
    console.log(`data recieved, Name:${name} Id:${id}`)
})
customerEmitter.on('response', () => {
    console.log(`same event`)
})

customerEmitter.emit('response', 'John', 34)