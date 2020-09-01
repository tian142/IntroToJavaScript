function greet(name) {
    console.log(`hello ${name}!`);
}
for (i = 0; i <= 4; i++) {
    greet('joe');
}

function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}
function throwDie(num) {
    for (i = 0; i <= num - 1; i++) {
        rollDie();
    }
}

//Arguments - inputs to a function
throwDie(3);

function sqiare(num) {
    console.log(num * num);
}
function sum(x, y) {
    console.log(x + y);
}
function divide(a, b) {
    //order matter
    console.log(a / b);
}

//return statement: return values can be captured, passed to another function,and end fucntion execution
function add(x, y) {
    return x + y;
}
function isPurple(color) {
    if (color === 'purple') {
        return true;
    }
    return false;
}

function containsPurple(arr) {
    for (let color of arr) {
        if (color === 'purple' || color === 'magenta') {
            return true;
        }
    }
    return false;
}

containsPurple(['purple', 'red']);
