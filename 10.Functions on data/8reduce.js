//Executes a reducer function on each element of the array, resulting in a single value
//ex. summing, largest,
const nums = [ 3, 4, 5, 6, 7 ];
const product = nums.reduce((total, currentVal) => {
	return total * currentVal;
});

const grades = [ 87, 75, 36, 99, 70, 21, 38 ];
const maxGrade = grades.reduce((max, currVal) => {
	if (currVal > max) return currVal;
	return max;
});
const maxGrade2 = grades.reduce((max, currVal) => {
	return Math.max(max, currVal);
});
const minGrade = grades.reduce((mix, currVal) => {
	return Math.min(mix, currVal);
});

const votes = [ 'y', 'y', 'n', 'n', 'y', 'y', 'n', 'y', 'n', 'y' ];
const results = votes.reduce((tally, val) => {
	if (tally[val]) {
		tally[val]++;
	} else {
		tally[val] = 1;
	}
	return tally;
}, {});

const results2 = votes.reduce((tally, val) => {
	tally[val] = (tally[val] || 0) + 1;
	return tally;
}, {});

//another example:
const books = [
	{
		title: '12 rules for life',
		author: 'jordan peterson',
		rating: 5,
		genres: [ 'nonfiction', 'self help' ]
	},
	{
		title: 'atomic habits',
		author: 'james clear',
		rating: 4,
		genres: [ 'self help', 'genre2' ]
	},
	{
		title: 'the happiness hypothesis',
		author: 'jonathan hadit',
		rating: 1,
		genres: [ 'genre2', 'self help' ]
	},
	{
		title: 'everybody poops',
		rating: 4
	}
];

const bookByRating = books.reduce((groupBooks, book) => {
	const key = Math.floor(book.rating);
	if (!groupBooks[key]) groupBooks[key] = [];
	groupBooks[key].push(book);
	return groupBooks;
}, {});
