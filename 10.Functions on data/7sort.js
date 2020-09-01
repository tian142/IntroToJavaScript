//arr.sort(compareFunc(a,b)), if compareFunc(a,b) return less than 0 - sort a before b...
//if 0, a and b unchanged if larger than 0, sort b before a
//sort changes the original array. add.slice().sort(...)

const prices = [ 214.42, 12000, 2656, 7605, 8575.23, 5623 ];

const ascSort = prices.slice().sort((a, b) => a - b);
const descSort = prices.slice().sort((a, b) => b - a);

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
	}
];

books.sort((a, b) => a.rating - b.rating);
//this sorted books in the console from rating least to greatest
