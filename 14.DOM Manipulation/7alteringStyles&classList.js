//changing css in js: .style, will only show in-line elements, usually will be empty

const header = document.querySelector('header');
header.style; //empty object
header.style.color = 'orchid'; // change the header color to orchid, add in-line style to 'orchid'

//in js, the property names are camelCased: no background-color, only backgroundColor
header.style.backgroundColor = 'black';

const lis = document.querySelectorAll('li');
const colors = ['red', 'orange', 'green'];

lis.forEach((li, i) => {
    const color = colors[i];
    li.style.color = color;
});

// getComputedStyle: a great way to figureout what is going on in the page, what is showoing up and taking effect

const li = document.querySelector('li');
const styles = getComputedStyle(li);
li.style.color = 'pink';
li.style.color; // will result in pink computed, not

const h1 = document.querySelector('hi');
const compStyles = getComputedStyle(h1);

// using a calss, no need to do things one by one like below:
const todo = document.querySelector('#todos .todo');
todo.style.color = 'white';
todo.style.textDecoration = 'line-through';
todo.style.opacity = '50%';

//instead apply a class in app.css to html through js:
todo.setAttribute('class', 'done'); //this over-writes the existing one

// .classList - contains existing classes, and have methods: add, toggle, contain to manipulate the classes
todo.classList.remove('done'); // this removes the done class
todo.classList.add('done'); // this add the done class
todo.classList.toggle('done'); // this add the done class if not there, delete if there
