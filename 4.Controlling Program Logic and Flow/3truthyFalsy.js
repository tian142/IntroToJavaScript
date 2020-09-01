//truthy and falsy ness
//all values have an inherent truthy or falsy boolean value
//falsy: false, 0, ""empty str, null, undefined, NaN
//Everything else is true

let mistery = 0;

if (mistery) {
    console.log('Truthy');
} else {
    console.log('Falsy');
}

let loggedInUser = 'thomas123';
if (loggedInUser) {
    console.log('You are Logged in!');
} else {
    console.log('Please log in!');
}
