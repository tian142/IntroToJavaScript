const texts = [ 'rofl', 'lmao', 'pig', 'omegalol' ];
const caps = texts.map(function(t) {
	return t.toUpperCase();
});
console.log(caps);

const numbers = [ 20, 21, 22, 23, 24, 25, 26, 27 ];
const words = [ 'aiyaya', 'hehe', 'rsbp' ];

const doubles = numbers.map(function(num) {
	return num * 2;
});

const numDetail = numbers.map(function(n) {
	return {
		value: n,
		isEven: n % 2 === 0
	};
});
console.log(numDetail);

const abbrevs = words.map(function(word) {
	return word.toUpperCase().split('').join('.');
});
console.log(abbrevs);

const books = [
	{
		title: '12 rules for life',
		author: 'jordan peterson',
		rating: '5'
	},
	{
		title: 'atomic habits',
		author: 'james clear',
		rating: '4'
	},
	{
		title: 'the happiness hypothesis',
		author: 'jonathan hadit',
		rating: '*'
	}
];

const bTitle = books.map(function(b) {
	return b.title;
});
console.log(bTitle);
