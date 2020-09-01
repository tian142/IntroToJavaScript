//function expressions: functions stored in a variable - because functions are objects
const square = function (num) {
    return num * num;
};
square(7);

function add(x, y) {
    return x + y;
}

const sum = function (x, y) {
    return x + y;
};

const product = function multiply(x, y) {
    return x * y;
};

const operations = [add, sum, square];
console.log(operations[1](100, 4));

for (let func of operations) {
    let results = func(30, 5);
    console.log(results);
}

//function as a value in an object:
const thing = {
    doSomething: square,
};
