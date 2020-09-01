//the arguments object
// if you want the sum of ANY number of items:

//the old way:
function sumAll() {
    let total = 0;
    for (let i = 1; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
//argumets is an array like object

//the above function with spread and reduce:
function sumAll2() {
    const argsArr = [...arguments];
    return argsArr.reduce((total, currVal) => {
        return total + currVal;
    });
}

//arguments can not be used with arrow functions:
const multiply = () => {
    console.log(arguments); //error: arguments not defined
};
