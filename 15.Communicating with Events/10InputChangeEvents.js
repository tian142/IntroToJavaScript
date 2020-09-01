// input and change events
// input tracks changes as soon as it happen.
//e.target shows the tag and its attributes
const form = document.querySelector('#signup-form');
const creditCardInput = document.querySelector('#cc');
const termBox = document.querySelector('#term');
const veggieSelect = document.querySelector('#veggie');

const formData = {};
for (let input of [creditCardInput, termBox, veggieSelect]) {
    input.addEventListener('input', ({ target }) => {
        const { name, type, value, checked } = target;
        formData[name] = type === 'checkbox' ? checked : value;
        console.log(formData);
    });
}

// creditCardInput.addEventListener('input', (e) => {
//     console.log('credit card changed', e);
//     formData['cc'] = e.target.value;
// });
// veggieSelect.addEventListener('input', (e) => {
//     console.log('veggie picked', e);
//     formData['veggie'] = e.target.value;
// });

// termBox.addEventListener('input', (e) => {
//     console.log('checkbox', e);
//     formData['agreedTerms'] = e.target.checked;
// });

//change event: pretty much the same thing as input, but will not update unless "blurr"(lose focus)
//on text inputs, input will always update.
