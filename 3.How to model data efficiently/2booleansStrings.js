//Booleans:
let isLoggedIn = True;
let gameOver = False;
const isWaterWet = True;

//Strings:
let animal = 'shrimp';
let sentence = 'hello, human';
typeof animal; //string
//typeof is an operator like + - , no need for ()

let firstName = 'joe';
let lastName = 'trump';
let fullName = firstName + ' ' + lastName;

let nameLen = fullName.length;
console.log(len);

//String methods: a number of methods to be performed on a string
let upperMessage = firstName.toUpperCase(); //JOE

let color = '    purple    ';
color.trim().toUpperCase(); //"PURPLE"

'baseball'.indexOf('ball'); //4
'baseball'.indexOf('b'); //0
'baseball'.indexOf('butt'); //-1
'baseball'.slice(4); //ball
'superhero'.slice(0, 5); //super not inclusive
'$50.60'.slice(1); //50.60

let annoying = 'hehe haha hoho';
annoying.replace('haha', 'lol');

//string escapes
// \n -newline
// \' -single quote \" -double quote
