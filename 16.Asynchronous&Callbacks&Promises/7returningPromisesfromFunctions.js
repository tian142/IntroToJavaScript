// const willGetYouADog = new Promise((resolve, reject) => {
//     const rand = Math.random();
//     if (rand < 0.5) {
//         resolve();
//     } else {
//         reject();
//     }
// }); //promise status: pending

// willGetYouADog.then(() => {
//     console.log('yes we got a dog'); //if resolve:
// });
// willGetYouADog.catch(() => {
//     console.log('no dog :(');
// });

//the following takes 5 seconds to run,

// const willGetYouADog = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const rand = Math.random();
//         if (rand < 0.5) {
//             resolve();
//         } else {
//             reject();
//         }
//     }, 5000);
// }); //promise status: pending

// willGetYouADog.then(() => {
//     console.log('yes we got a dog'); //if resolve:
// });
// willGetYouADog.catch(() => {
//     console.log('no dog :(');
// });

//the following is returning a promise from a function:
//(rather than saving a promise in a variable like above - this is common)
const makeDogPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.5) {
                resolve();
            } else {
                reject();
            }
        }, 5000);
    }); //promise status: pending
};

makeDogPromise()
    .then(() => {
        console.log('yes we got a dog'); //if resolve:
    })
    .catch(() => {
        console.log('no dog :(');
    });
