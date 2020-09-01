//we can add functions as properties on objects, these functions are called methods. ex.toUpperCase()

const math = {
    numbers: [1, 2, 3, 4, 5],
    add: function (x, y) {
        return x + y;
    },
    multiply: (x, y) => x * y,
};

//Methods shorthand Syntax: arrow functions are not popular due to this. short hand is more popular:
//no need to declare via key/value pair
const math2 = {
    blah: 'hi',
    multiplyLess5(x, y) {
        return x * y - 5;
    },
};

console.log(math2.multiplyLess5(7, 9)); //58

const auth = {
    username: 'joe',
    login() {
        console.log(`${this.username} have logged in!`);
    },
};
