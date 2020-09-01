//a short, clean syntax to 'unpack': -values from arrays, -properties from objects
//into distinct variables

const marketCap = ['aapl', 'msft', 'goog', 'amzn', 'fb', 'tsla'];

const [gold, silver, bronze] = marketCap; //gold = aapl, silver = msft
const [first, , , forth] = marketCap;
const [apple, ...others] = marketCap; // a spread used

//destructuring in objects: the names of new variables have to be the same: yearReleased != year
const game = {
    title: 'cyberpunk 2077',
    yearReleased: 2020,
    country: 'USA',
    rated: 'R',
};

const { title, yearReleased, country, rated } = game;
//title: cyberpunk 2077 - str
//yearReleased: 2020 - num

//can reassign name by doing:
const { title: gameName, rated: suitableFor, ...other } = game;
//gameName: cyberpunk 2077, suitablefor: R
//other(object)year, country

//Nested Destructuring:
const results = [
    {
        first: 'Nyjah',
        last: 'Huston',
        place: 'Gold',
    },
    {
        first: 'Yuto',
        last: 'Horigome',
        place: 'Silver',
    },
    {
        first: 'Gustavo',
        last: 'Ribeiro',
        place: 'bronze',
    },
];

const [{ first: firstName }, { last }] = results;

const [, silverMetal] = results; //silverMetal:2nd object
const { first: firstNameSilver } = silverMetal;

//destructuring parameters

const character = {
    first: 'Elon',
    last: 'Musk',
    company: 'spacex',
};

function print(person) {
    const { first, last, company } = person;
    console.log(`${first} ${last} ${company}`);
}

//a version with destructuring in the parameter:
function print2({ first, last, company }) {
    console.log(`${first} ${last} ${company}`);
}

//arrays with destructuring in the parameter
const response = ['HTTP/1.1', '200 OK', 'application/json'];
function parseResponse([protocal, statusCode, contentType]) {
    console.log(`Status: ${statusCode}`);
}
