Math.PI; // 3.1415926...
Math.round(4.8); //5
Math.abs(-421); //421
Math.pow(2, 5); //2 to the 5th power 32
Math.floor(3.999); //3

Math.random(); //a random decimal number between 0-1, not including 1

//random Intergers between 1 to 10
const step1 = Math.random(); //0-0.99
const step2 = step1 * 10; //0-9.999
const step3 = Math.floor(step2); //0-9
const step4 = step3 + 1; //1-10
//or:
Math.floor(Math.random() * 10) + 1;

//a dice roll
Math.floor(Math.random() * 6) + 1;
