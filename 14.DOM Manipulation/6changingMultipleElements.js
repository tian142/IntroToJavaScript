// Changing multiple elements

const allLis = document.querySelectorAll('li');

for (let i = 0; i < allLis.length; i++) {
    console.log(allLis[i].innerText);
} // shows al lis

for (li of allLis) {
    li.innerHTML = 'go running <b>today</b>!';
}
