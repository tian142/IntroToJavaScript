//a from take data from input and sent it to js
// when input type = "submit", JS do actions.
// .preventDefault = prevent default behavior, for a form: prevents the action of submitting in html
// submit gathers all data, so no need for other event listeners

const form = document.querySelector('#signup-form');
const creditCardInput = document.querySelector('#cc');
const termBox = document.querySelector('#term');
const veggieSelect = document.querySelector('#veggie');

form.addEventListener('submit', function (e) {
    alert('submitted');
    console.log('cc', creditCardInput.value);
    console.log('terms', termBox.checked);
    console.log('veggie selected:', veggieSelect.value);
    //send form data to db
    //append something to page using form data
    e.preventDefault();
});
