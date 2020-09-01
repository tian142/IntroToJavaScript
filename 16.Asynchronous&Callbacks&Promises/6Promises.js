//Promises solves callback hell
//Promises allow us to write easy to read async codes.
//A Promise is an object representing the eventual completion or failure of an
//async operation.... Promoises have a .then(success) .catch(failure)
// promising = promising a value that you may not have at the moment
// a promise is an object

const willGetYouADog = new Promise((resolve, reject) => {
    const rand = Math.random();
    if (rand < 0.5) {
        resolve();
    } else {
        reject();
    }
}); //promise status: pending

willGetYouADog.then(() => {
    console.log('yes we got a dog'); //if resolve:
});
willGetYouADog.catch(() => {
    console.log('no dog :(');
});
