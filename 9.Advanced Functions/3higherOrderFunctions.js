//higher order functions - functions that operate on/with other functions:
//1)accept functions as arguments 2)return a function
function callThreeTimes(f) {
    f();
    f();
    f();
}
function cry() {
    console.log(':-----(');
}
callThreeTimes(cry); //:-----( *3

function repeatNTimes(action, num) {
    for (let i = 0; i < num; i++) {
        action();
    }
}

repeatNTimes(cry, 4); //calls cry 4 times

function pickOne(f1, f2) {
    let rand = Math.random();
    if (rand < 0.5) {
        f1();
    } else {
        f2();
    }
}
