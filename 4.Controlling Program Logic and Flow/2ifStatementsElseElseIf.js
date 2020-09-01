let rating = 3;

if (rating === 3) {
    console.log('you are a superstar!');
} else if (rating === 2) {
    console.log('meets expectations');
} else if (rating === 1) {
    console.log('needs imporvement');
} else {
    console.log('invalid rating');
}

let highScore = 1430;
let userScore = 1000;

if (userScore >= highScore) {
    console.log(`Congrats!, you have the new high score of ${userScore}`);
    highScore = userScore;
} else {
    console.log(
        `Good Game! Your score is ${userScore}, the current high score is ${highScore} `
    );
}

//nested conditionals:
let password = 'kitty';
if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        //if space is not found(-1)
        console.log('Valid Password');
    } else {
        console.log('password is long enough, but cant contain spaces');
    }
} else {
    console.log('password must be longer!');
}
