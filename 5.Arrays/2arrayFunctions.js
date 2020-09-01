//push(add to end), pop(remove from end), shift(remove from start), unshift(add to start)
let people = ['Jordan Peterson', 'Elon Musk'];
people.push('Tian Qiu', 'hahah');
people.push('hello');
people.pop();

//concat - merge arrays
let arr1 = ['a', 'b', 'c'];
let arr2 = ['d', 'e', 'f'];
let arr3 = arr1.concat(arr2); //["a", "b", "c", "d", "e", "f"] can include more arrays
//includes - look for a value
console.log(arr3.includes('a')); //true
//indexOf - just like str.indexOf
console.log(arr3.indexOf('c')); //2 - c starts on index 2 of the array
//join - creates a string from arr
let joinedArr = arr3.join(); // "a,b,c,d,e,f"
let joinedArr2 = arr3.join(''); // "abcdef"
//reverse - reverse an array
let arrr = arr3.reverse(); // ["f", "e", "d", "c", "b", "a"]
let joinreverse = arr3.reverse().join();
//slice - copy portion of arr
let slicedArr = arr3.slice(2, 5); //["c", "d", "e"] negative numbers can work
//splice - remove/replace elements
var months = ['jan', 'feb', 'apr'];
months.splice(3, 1, 'apr'); //insert/replace 1 item at index 3: ["jan", "feb", "apr", "apr"]
//sort - sorts an array, default sort it UTF-16 code, usually used with a function to rule how to sort
let names = ['joe', 'mar', 'hue', 'abby', 'sarah'];
let sortedNames = names.sort();
