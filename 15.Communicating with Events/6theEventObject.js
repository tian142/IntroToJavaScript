// The event object: created when an event is created through a function in addEventListener
// it includes information about the event, like where the mouse was clicked, time stamp, etc
const h1 = document.querySelector('h1');

const printThis = function (event) {
    console.log(event); //logs the event object
    console.log(this);
};
h1.addEventListener('click', printThis);

document.body.addEventListener('keypress', function (e) {
    console.log(e);
    //the event object prints the key pressed: key:"x"
});
