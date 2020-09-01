//.appendChild - append at the end of the tag
//.insertBefore - have to select both parent and the tag you want to insert before
//.insertAdjcentElement
//append()
//prepend()

const parentUl = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.innerText = 'WaNiChiKo, WaTaShiWa New Li';
parentUl.appendChild(newLi); //attend at the end of ul

const firstLi = document.querySelector('li');
parentUl.insertBefore(newLi, firstLi); //append at the beginning of ul

const newBold = document.createElement('b');
newBold.innerText = 'I am bold';

const firsP = document.querySelector('p');
firsP.insertAdjacentElement('beforebegin', newBold); //insert at the beginning
firsP.insertAdjacentElement('afterend', newBold); //insert after the tag end

firsP.append(newBold, newLi); //append at end of p tag
firsP.prepend(newBold, newLi); //append at beginning of p tag

console.log(firsP);
