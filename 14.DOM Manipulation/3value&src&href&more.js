//use console.dir(const) to see the chosen tag's objects and arrtibutes
//value - if i enter 'taco' into the first input box, the value property shows what is entered
const inputs = document.querySelectorAll('input');
inputs[0].value; //'taco'
//if a checkbox: on
inputs[3].value; //'on' but if checked off, still on... need to use "checked" attribute
inputs[3].checked; // true if checked, false if not checked
inputs[1].placeholder; // to retrieve placeholder or change it

const link = document.querySelector('a');
link.href; //retrieves link in the a tag href attribute, can change

const imageSrc = document.querySelector('img');
imageSrc.src =
    'https://upload.wikimedia.org/wikipedia/en/6/6d/Chris_McCandless.png';

console.dir(imageSrc); //shows all of img tags's attributes, some can be usefully edited
