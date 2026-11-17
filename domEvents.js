
const EventEmitter = require('events');


const button = new EventEmitter();


button.on('click', () => {
    console.log("Button clicked!");
});


button.on('mouseover', () => {
    console.log("Mouse is over the button!");
});


button.on('keypress', (key) => {
    console.log("Key pressed:", key);
});


button.emit('click');
button.emit('mouseover');
button.emit('keypress', 'A');
