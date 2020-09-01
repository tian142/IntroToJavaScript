//.parentElement - fetches the parent element
//.children - shows all children
//.nextElementSibling - shows next sibling

const firstLi = document.querySelector('li');
firstLi.parentElement; // ul
firstLi.parentElement.parentElement; //body
firstLi.parentElement.parentElement.parentElement; //html

const ul = document.querySelector('ul');
ul.children; // shows all lis
ul.children[0]; //shows firts li

firstLi.nextElementSibling; // shows second li
