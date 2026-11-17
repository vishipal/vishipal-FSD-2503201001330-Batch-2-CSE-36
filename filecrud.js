
const fs = require('fs');


fs.writeFileSync('demo.txt', 'Hello! This is my first file.');

console.log("File created successfully!");


const data = fs.readFileSync('demo.txt', 'utf8');

console.log("File Content:", data);


fs.appendFileSync('demo.txt', '\nThis is updated content.');

console.log("File updated successfully!");


const updatedData = fs.readFileSync('demo.txt', 'utf8');

console.log("Updated File Content:\n", updatedData);


fs.unlinkSync('demo.txt');

console.log("File deleted successfully!");
