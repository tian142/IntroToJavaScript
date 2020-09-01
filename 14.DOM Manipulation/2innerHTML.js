// innerHTML - retrieve text and all other tags inside.

const form = document.querySelector('form');
form.innerHTML; //shows all tags in this form section: inputs...
//in ul, all Lis showup, but in innerText, only text showup
form.innerHTML = '<b>I am Bold Tag</b>'; //old form is gone, but now only with bold.

const h1 = document.querySelector('h1');
h1.innerHTML += '<b>bold</b>'; //Tian Qiubold
h1.innerText += '<b>bold</b>'; //Tian Qiu<b>bold</b>
