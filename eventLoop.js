
console.log("Program Started");


setTimeout(() => {
    console.log("Inside setTimeout");
}, 0);


setImmediate(() => {
    console.log("Inside setImmediate");
});


process.nextTick(() => {
    console.log("Inside process.nextTick");
});

console.log("Program Ended");
