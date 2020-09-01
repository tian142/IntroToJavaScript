//Reference types - Primitive types are stored as the actual value in a variable, arrays are different, instead are stored
//a reference to where that array in memory

//using const - data can not be changed, as long as reference does not change, the internal array can change
const myEggs = ['brown', 'brown'];
myEggs.push('green'); //as long as eggs dont get reassigned, they can be added.
//because of this, const are used more often than let in arrays

//nested arrays:
const colors = [
    ['red', 'crimison'],
    ['orange', 'darl orange'],
    ['chocolate', 'brown'],
];
console.log(colors[2][1]); //brown

//nested array for tic-tac-toe:
const board = [
    ['0', null, 'X'],
    [null, 'x', '0'],
    ['x', '0', null],
];
