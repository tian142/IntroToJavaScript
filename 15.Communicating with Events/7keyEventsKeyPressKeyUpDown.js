//the events for Key presses: key press, keydown, keyUp

const textBox = document.querySelector('input');

textBox.addEventListener('keydown', function (e) {
    console.log('keydown');
});

textBox.addEventListener('keyup', function () {
    console.log('keyup!');
});

//if nothing is showing up in the input, not considered a keypress, return counts
textBox.addEventListener('keypress', function () {
    console.log('keypress');
});

const addItemInput = document.querySelector('#addItem');
const shoppingList = document.querySelector('#items');

addItemInput.addEventListener('keypress', function (e) {
    console.log(e.key);
    if (e.key === 'Enter') {
        if (!this.value) return;
        const newItemText = this.value;
        const newItem = document.createElement('li');
        newItem.innerText = newItemText;
        shoppingList.appendChild(newItem);
        this.value = '';
    }
});
