//array of objects are common too:
const shoppingCart = [
    {
        product: 'bagel',
        price: 2,
        quantity: 2,
    },
    {
        product: 'eggs',
        price: 3,
        quantity: 1,
    },
];
shoppingCart[1]; //{product: "eggs", price: 3, quantity: 1}

//Objects are reference types
//equality:
let nums = [1, 2, 3];
let mystery = [1, 2, 3];
nums == mystery; //false
nums === mystery; //false because stored at different slots
let moreNums = nums;
moreNums === nums; //true
nums == moreNums; //true
[] === []; //false
//the above examples are chekcing to see if values are stored at the same place in memory
