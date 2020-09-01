//not supported by IE
//arrow function: syntactically compact alternative to a regular function expression
//commonly used as callback functions

const square = function(x) {
	return x * x;
};

const square2 = (x) => {
	return x * x;
};

const isEven = (num) => {
	return num % 2 === 0;
};

console.log(isEven(2));

const multiply = (x, y) => {
	return x * y;
};
console.log(multiply(2, 9));

//Inplicit returns:
const square3 = (n) => n * n;

const nums = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
const doubles1 = nums.map(function(n) {
	return n * 2;
});
const doubles2 = nums.map((n) => {
	return n * 2;
});
const doubles3 = nums.map((n) => n * 2);
console.log(doubles1);
console.log(doubles2);
console.log(doubles3);

const parityList = nums.map(function(n) {
	if (n % 2 === 0) return 'even';
	return 'odd';
});
const parityList2 = nums.map((n) => (n % 2 === 0 ? 'even' : 'odd'));
