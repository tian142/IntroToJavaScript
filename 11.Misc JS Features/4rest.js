//Looks like spread, but its not. almost the opposite of spread(breaking into pieces),
//we are collecting/combining arguments into array
//put inside the function definition parameter: collects all remaining arguments into an actual array

function sumAll(...nums) {
    let total = 0;
    for (let n of nums) total += n;
    return total;
}

//using reduce:
function sum(...nums) {
    return nums.reduce((total, currVal) => {
        return total + currVal;
    });
}

function fullName(first, last, ...titles) {
    //titles contains remaining arguments
    console.log('titles', titles);
}

//the traditional way
const multiply3 = function (...nums) {
    return nums.reduce(function (total, currVal) {
        return total * currVal;
    });
};

//with only arrow functions
const multiply2 = (...nums) => {
    return nums.reduce((total, currVal) => {
        return total * currVal;
    });
};

//with arrow functions + implicit returns
const multiply = (...nums) => nums.reduce((total, currVal) => total * currVal);
