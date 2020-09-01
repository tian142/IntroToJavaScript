//returns the value of the FIRST element in the array that satisfies the provided testing function

let movies = [ '1stmovie', 'second', 'third', 'forth' ];

let movie = movies.find((movie) => {
	return movie.includes('movie');
});

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

const goodBook = books.find((b) => b.rating >= 3);
const jordanBook = books.find((b) => b.author.includes('jordan peterson'));
