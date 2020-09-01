//Logical operators: &&(And), ||(or), !(not)
1 <= 4 && 'a' === 'a'; //true

let password = 'kittyhoe';
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log('Valid Password');
} else {
    console.log('Invalid Password');
}

let num = 3;
if (num >= 1 && num <= 10) {
    console.log('number is between 1 and 10');
} else {
    console.log('please enter a number between 1 and 10');
}

// || or:
true || false; // true
1 != 1 || 10 === 10; // true
10 / 2 === 5 || null; // true
0 || undefined; // false

let age = 76;
if (age < 6 || age >= 76) {
    console.log('you get to get in for free!');
} else {
    console.log('please pay for a ticket!');
}

let color = 'purple';
if (color === 'purple' || color === 'lilac' || color === 'violet') {
    console.log('nice color');
}

//the not(!) operator:
!null; //true
!(0 === 0); //false
!(3 <= 4); //false

let loggedIn;
if (!loggedIn) {
    console.log('get out of here');
}

let flavor = 'grape';
if (flavor !== 'grape' && flavor !== 'cherry') {
    console.log('we dont have that flavor');
}
//or: the same thing:
if (!(flavor === 'grape' || flavor === 'cherry')) {
    console.log('we dont have that flavor');
}

//operator precedence: what operators rule first? ! > && > ||
let x = 7;
x == 7 || (x === 3 && x > 10);
