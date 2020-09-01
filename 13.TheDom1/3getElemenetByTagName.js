//this select elements by their tag name, turn into array.
document.getElementsByTagName('input');
document.getElementsByTagName('p');
const inputs = document.getElementsByTagName('input');
console.log(inputs[0]); //prints out the first input tag

for (let input of inputs) {
    console.log(input);
}

const arr = [...inputs];

for (let input of inputs) {
    console.log(input.value);
}

////this will select by classes
document.getElementsByClassName('header');
