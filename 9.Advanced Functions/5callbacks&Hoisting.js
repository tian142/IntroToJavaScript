//callback functions: functions passed to other funcitons

function grumpus() {
    console.log('you clicked grumpus');
}
setTimeout(function () {
    console.log('hjiiii');
}, 2000);

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    alert('why u clock');
});

//Hoisting: for var, if call var before declaring it - undelcared.
// for let & const: not hoisted, can not access it before variable declared -error
// for functions: hoisted, (consider it put at the top of file) can be called before declared - works
//^ if a function is not declared by var, let or const, if they are, rules above are applied
