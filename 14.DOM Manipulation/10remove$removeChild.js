// .removeChild - removes a child
// .remove - removes a target.. newer

const ul = document.querySelector('section ul');
const removeMe = ul.querySelector('.special');
ul.removeChild(removeMe); //renived the ul with class = 'special'

const h1 = document.querySelector('h1');
h1.remove(); //removed the first h1
