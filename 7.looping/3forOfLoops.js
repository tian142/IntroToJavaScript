//for of loop: no IE support
//a nice way to iterate over ARRAYS, or other iterable objects
//for(variables of iterable) {statement}
let subreddits = ['soccer', 'wallstreetbets', 'bitcoin'];
for (let subreddit of subreddits) {
    console.log(subreddit);
}

for (let char of 'beetcoin') {
    console.log(char.toUpperCase());
}

const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
];
for (let i = 0; i < magicSquare.length; i++) {
    let row = magicSquare[i];
    let sum = 0;
    for (let j = 0; j < row.length; j++) {
        sum += row[j];
    }
    console.log(`${row} summed tp ${sum}`);
}

for (let row of magicSquare) {
    let sum = 0;
    for (let num of row) {
        sum += num;
    }
    console.log(`${row} summed tp ${sum}`);
}

//for of for objects:
const movieReviews = {
    Arrival: 7.4,
    Alien: 4.2,
    'In Bruges': 5.2,
    Scam: 2.5,
};

for (let movie of Object.keys(movieReviews)) {
    console.log(movie, movieReviews[movie]);
}

const ratings = Object.values(movieReviews);
let total = 0;
for (r of ratings) {
    total += r;
}

let avg = total / ratings.length;
console.log(avg);
