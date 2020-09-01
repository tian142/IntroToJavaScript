//every - tests whether ALL elements of the array pass the provided function. It returns a Boolean value;
const words = ['dog', 'dig', 'log', 'bag', 'wag'];

const all3letters = words.every((word) => word.length === 3);

const allEndG = words.every((word) => {
    const lastLetter = word.length - 1;
    return word[lastLetter] === 'g';
});

//sum - similar to every, only care if ANY of the array elements pass test function
const middleO = words.some((word) => word[1] === 'o');

const books = [
    {
        title: '12 rules for life',
        author: 'jordan peterson',
        rating: 5,
        genres: ['nonfiction', 'self help'],
    },
    {
        title: 'atomic habits',
        author: 'james clear',
        rating: 4,
        genres: ['self help', 'genre2'],
    },
    {
        title: 'the happiness hypothesis',
        author: 'jonathan hadit',
        rating: 1,
        genres: ['genre2', 'self help'],
    },
];

const allGoodBooks = books.every((book) => book.rating > 2);
const someGoodBooks = books.some((book) => book.rating > 2);
