//ternary operator: condition ? expIfTrue: expIfFalse - works for simple if else,
let number = 7;
if (number === 7) {
    console.log('lucky');
} else {
    console.log('bad');
}
//same thing:
number === 7 ? console.log('lucky wow') : console.log('BAD!');

//a chat app, status online or online:
let status = 'offline';
let colur;
if (status === 'offline') {
    colur = 'red';
} else {
    colur = 'green';
}
//or using ternary operator:
let culur = status === 'offline' ? 'red' : 'green';
