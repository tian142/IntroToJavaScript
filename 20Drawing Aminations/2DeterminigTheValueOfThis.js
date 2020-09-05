// the value of this must be set to the instance of the class

//determining the value of this:
// 1) did you define function with arrow function? - write an console.log(this) above the function:
//    when executed, this will reference the global window
console.log(this);
const printThis = () => {
    console.log(this);
};
printThis();

const colors = {
    printColor() {
        console.log(this);
        const printThis = () => {
            console.log(this);
        };
        printThis;
    },
};

colors.printColor();

// 2) did you 'bind','call','or apply' on the function when you invoked it?
// this is equal to the first argument of 'bind', 'call', or 'apply'

const printThis2 = function () {
    console.log(this);
};
printThis2.call({ color: 'red' });

// 3) All other cases: 'this' is equal to whatever is to the left of the '.' in the method call.

const colors2 = {
    printColor() {
        console.log(this);
    },
};

colors2.printColor();

const randomObject = {
    a: 1,
};
randomObject.printColor = colors2.printColor;
randomObject.printColor();
//above, 'this' is invoked and to the left of the dot, its random object
