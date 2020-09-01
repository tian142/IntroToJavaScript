//.createElement, create element
//.appendChild - append a created element into selected tags (at the bottom)

document.createElement('h2');
const newh2 = document.createElement('h2');

newh2.innerText = 'I like animals';
newh2.classList.add('done');

const section = document.querySelector('section');
section.appendChild(newh2); // adds newh2 to the first section in the html

newh2.classList.toggle('done');

const newImage = document.createElement('img');
newImage.src =
    'https://openpsychometrics.org/tests/characters/test-resources/pics/SV/10.jpg';
document.body.appendChild(newImage);

const newLink = document.createElement('a');
newLink.innerText = 'Sick Video';
newLink.href = 'https://www.youtube.com/watch?v=qMQMqDp0WRM';

const header = document.querySelector('header');
header.appendChild(newLink);
