//returning functions
function multiplyBy(num) {
    return function (x) {
        return x * num;
    };
}

const triple = multiplyBy(3);
const double = multiplyBy(2);
const halve = multiplyBy(0.5);

triple(4); //12

//another one

function makeBetweenFunction(x, y) {
    return function (num) {
        return num >= x && num <= y;
    };
}

const isChild = makeBetweenFunction(0, 18);
isChild(5); //true
const isNineties = makeBetweenFunction(1990, 2000);
const isNiceWeather = makeBetweenFunction(60, 79);
