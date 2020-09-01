//set a default value for a function's parameter(input) if nothing is inputted
//in this case, 1 is the default parameter for y: (x, y=1)
//old ways:
function multiply1(x, y) {
    if (typeof y === 'undefined') {
        y = 1;
    }
    return x * y;
}

function multiply2(x, y) {
    y = typeof y === 'undefined' ? 1 : y;
    return x * y;
}

//new way:
function multiply3(x = 1, y = 1) {
    return x * y;
}

const greet = (person, greeting = 'hi') => {
    console.log(`${greeting}, ${person}`);
};

const blah = (x, y = [1, 2, 3]) => {
    console.log(x, y);
};
