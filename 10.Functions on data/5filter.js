//filter creates a new array with all elements that pass the test implemented by the provided function

const nums = [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
const odds = nums.filter((n) => {
	return n % 2 === 1;
});

const smallNums = nums.filter((n) => n < 5);

const bigNums = nums.filter((n) => n > 4);
const bigNums2 = nums.filter(function(n) {
	return n > 3;
});

const books = [
	{
		title: '12 rules for life',
		author: 'jordan peterson',
		rating: '5',
		genres: [ 'nonfiction', 'self help' ]
	},
	{
		title: 'atomic habits',
		author: 'james clear',
		rating: '4',
		genres: [ 'self help', 'genre2' ]
	},
	{
		title: 'the happiness hypothesis',
		author: 'jonathan hadit',
		rating: '*',
		genres: [ 'genre2', 'self help' ]
	}
];

const goodBooks = books.filter((b) => b.rating > 3);

const fantasyBooks = books.filter((book) => book.genres.includes('genre2'));

const genre2Selphelp = books.filter((book) => book.genres.includes('genre2') || book.genres.includes('self help'));

const query = 'for';
const results = books.filter((book) => {
	const title = book.title.toLowerCase();
	return title.includes(query.toLowerCase());
});
