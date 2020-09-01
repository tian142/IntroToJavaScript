for (let i = 1; i <= 10; i++) {
    console.log('hello', i);
}

for (num = 1; num <= 20; num += 3) {
    console.log(`${num} + ${num} = ${num * num}`);
}

for (i = 50; i >= 0; i -= 10) {
    console.log(i);
}

const animals = ['lion', 'dog', 'cat'];
for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}
const cars = [
    {
        model: 'mustang boss',
        year: '1968',
    },
    {
        model: 'porsche 911',
        year: '1982',
    },
    {
        model: 'datsun 280z',
        year: '1974',
    },
];
for (let i = 0; i < cars.length; i++) {
    let carDetails = cars[i];
    console.log(`${carDetails.year}'s ${carDetails.model}`);
}

//nested for loops
for (let i = 0; i <= 4; i++) {
    console.log('OUTER LOOP:', i);
    for (let j = 5; j >= 0; j -= 2) {
        console.log('    inner loop', j);
    }
}
