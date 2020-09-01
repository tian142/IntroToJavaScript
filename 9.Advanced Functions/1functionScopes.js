//any let, const, var made inside a function is not in scope outside the bounds of the function
//variables with same name = different if one is in declared in a function

//block scope: variables declared inside a function are scoped to the function block
//for let and const, the above applies. but var can be scoped outside the function
let animals = ['dog', 'cat', 'cow'];
for (var i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}
console.log(i); //b/c var is used for i, i can be scoped outside the function

//if let, const exist in different scopes, the same name can be used

function doubleArr(arr) {
    const result = [];
    for (let num of arr) {
        let double = num * 2;
        result.push(double);
    }
    return result;
}

//lexical scope - nested functions
function outer() {
    let movie = 'black panther';
    function inner() {
        let movie = 'her';
        function extraInner() {
            let movie = 'the arrival';
            console.log(movie.toUpperCase());
        }
        extraInner();
    }
    inner();
}
//inner cannot be called outside outer()
//when movie is referenced, it will look for the closest scope
