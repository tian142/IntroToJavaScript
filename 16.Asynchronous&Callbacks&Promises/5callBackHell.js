const btn = document.querySelector('button');

// setTimeout(() => {
//     btn.style.transform = `translateX(100px)`;
//     setTimeout(() => {
//         btn.style.transform = `translateX(200px)`;
//         setTimeout(() => {
//             btn.style.transform = `translateX(300px)`;
//             setTimeout(() => {
//                 btn.style.transform = `translateX(400px)`;
//                 setTimeout(() => {
//                     btn.style.transform = `translateX(500px)`;
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

//if we put the above in a function: with added if btn is moving off screen
//below is the old way, not pretty to look at.

const moveX = (element, amount, delay, onSuccess, onFailure) => {
    const bodyBoundry = document.body.clientWidth; //screen boundry
    const elRight = element.getBoundingClientRect().right;
    const currLeft = element.getBoundingClientRect().left;
    if (elRight + amount > bodyBoundry) {
        onFailure();
    } else {
        setTimeout(() => {
            element.style.transform = `translateX(${currLeft + amount}px)`;
            onSuccess();
        }, delay);
    }
};

// moveX(btn, 100, 1000, () => {
//     moveX(btn, 200, 1000, () => {
//         moveX(btn, 300, 1000, () => {
//             moveX(btn, 400, 1000, () => {
//                 moveX(btn, 500, 1000);
//             });
//         });
//     });
// });

//the old way:
moveX(
    btn,
    100,
    1000,
    () => {
        //success
        moveX(
            btn,
            400,
            1000,
            () => {
                moveX(
                    btn,
                    700,
                    1000,
                    () => {
                        //success
                        console.log('really? we still have screen left?');
                    },
                    () => {}
                );
            },
            () => {
                alert('can not go further');
                //fail
            }
        );
    },
    () => {
        //fail
        alert('can not move further');
    }
);

//this can be simplified with promises!
