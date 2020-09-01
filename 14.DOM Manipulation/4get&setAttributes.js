//getAttribute() - get attribute of a tag
//setAttribute() - set attribute of a tag

const range = document.querySelector('input[type="range"]');

range.getAttribute('min'); //100
range.getAttribute('max'); //500
range.setAttribute('min', -500);
range.setAttribute('type', 'radio');
