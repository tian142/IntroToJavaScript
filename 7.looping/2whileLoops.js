// while loops:
let j = 0;
while (j <= 5) {
    console.log(j);
    j++;
}

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (guess !== target) {
    console.log(guess);
    guess = Math.floor(Math.random() * 10);
}
//while(some condition){
// in the loop, update or attempt to make that condiditon false
//break is used sometimes
