//understabd new arrow function syntax
//understand built-in methods: forEach, map, filter, find, reduce, some, every

//forEach: accepts a callback function, calls the function once per element in the array

const nums = [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ];

nums.forEach(function(n) {
	console.log(n);
});
nums.forEach(function(num, idx) {
	console.log(idx, num);
});

function printDouble(n) {
	console.log(n * 2);
}
nums.forEach(printDouble);

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

books.forEach(function(book) {
	console.log(book.title);
});

for (let book of books) {
	console.log(book.title);
}
for (let i = 0; i < books.length; i++) {
	console.log(books[i].title);
}
