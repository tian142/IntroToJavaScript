const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'indigo',
    'violet',
];

const h1 = document.querySelector('h1');
// h1.addEventListener('mouseover', function () {
//     console.log(this.innerText);
// });

const changeColor = function () {
    //this is refering to the individual div that is clicked on
    // console.log(this);
    // console.log(this.style.backgroundColor);
    h1.style.color = this.style.backgroundColor;
};

const container = document.querySelector('#boxes');
for (let color of colors) {
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.appendChild(box);
    //add event listener!
    box.addEventListener('mouseover', changeColor);
}
