//a newer all-in-one method to select a SINGLE element.
//pass in a css selector:

document.querySelector('h1');
document.querySelector('p'); //selects firts paragraph
document.querySelector('input'); //selects first input

document.querySelector('#myPicture'); //selects the id myPicture
document.querySelector('section li.special'); //find the list item with the class of special, that is nested
//in a ul, that is nested in a section tag

//can select with attributes:
document.querySelector('input[type="password"]'); //selecting the input with the attribute of password

//querySelectorAll: receive all, in a 'NodeList', not HTML collection
document.querySelectorAll('input'); //select all inputs, 3 of them
document.querySelectorAll('li');

//a nodeList is another array-like object:
