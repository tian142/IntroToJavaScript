//passWordValidator:
function isValidPassword(password, username) {
	if (password.length < 8) {
		return false;
	}
	if (password.indexOf(' ') !== -1) {
		return false;
	}
	if (password.indexOf(username) !== -1) {
		return false;
	}
	return true;
}

function isValidPassword(password, username) {
	if (password.length < 8 || password.indexOf(' ') !== -1 || password.index(username) !== -1) {
		return false;
	}
	return true;
}

// average:
function average(arr) {
	let total = 0;
	for (let num of arr) {
		total += num;
	}
	let res = total / arr.length;
	return res;
}

//pangrams - contains all 24 letters
function isPangram(sentence) {
	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		if (sentence.indexOf(char) === -1) {
			return false;
		}
	}
	return true;
}

// Get playing card:
function pick(arr) {
	const idx = Math.floor(Math.random() * arr.length);
	return arr[idx];
}

function getCard() {
	const values = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
	const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
	return { value: pick(values), suit: pick(suits) };
}
