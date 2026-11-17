
const EventEmitter = require('events');


const event = new EventEmitter();


event.on('greet', () => {
    console.log("Hello! Welcome to Node.js");
});


event.on('exit', () => {
    console.log("Exit event triggered. Goodbye!");
});


event.emit('greet');
event.emit('exit');
