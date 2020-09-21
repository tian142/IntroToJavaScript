//must use moduel to share variables between files
const counterObject = require('./myscript.js');

console.log(counterObject.getCounter());
counterObject.incrementCounter();
console.log(counterObject.getCounter());

//node --inspect-brk index.js : go to chrome://inspect
//to start debugging in chrome
